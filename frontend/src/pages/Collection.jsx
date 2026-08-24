import { useEffect, useState } from "react"
import AlbumCard from "../components/AlbumCard"
import { deleteAlbum, getAlbums } from "../lib/api"


function Collection() {

  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAlbums()
      .then(setAlbums)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  async function handleDelete(id) {
    const previous = albums
    setAlbums(albums.filter((album) => album.id !== id))

    try {
      await deleteAlbum(id)
    } catch (err) {
      setAlbums(previous)
      setError(err.message)
    }
  }

  return (
    <main className="p-8 flex-1">

      <h2 className="text-3xl font-bold text-white mb-8">
        💿 Meine Sammlung
      </h2>

      {
        error && (
          <p className="text-red-400 mb-6">
            ⚠️ {error}
          </p>
        )
      }

      {
        loading ? (
          <p className="text-gray-400">Lade Sammlung …</p>
        ) : albums.length === 0 ? (
          <p className="text-gray-400">Noch keine Alben in deiner Sammlung.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {
              albums.map((album) => (
                <AlbumCard
                  key={album.id}
                  album={album}
                  onDelete={handleDelete}
                />
              ))
            }

          </div>
        )
      }

    </main>
  )
}


export default Collection
