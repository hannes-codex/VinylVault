import { useEffect, useState } from "react"
import AlbumCard from "../components/AlbumCard"
import { deleteAlbum, getAlbums } from "../lib/api"


function Collection() {

  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")
  const [genreFilter, setGenreFilter] = useState("")

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

  const genres = [...new Set(albums.map((album) => album.genre))].sort()

  const filteredAlbums = albums.filter((album) => {
    const query = search.trim().toLowerCase()
    const matchesSearch = !query
      || album.title.toLowerCase().includes(query)
      || album.artist.toLowerCase().includes(query)
    const matchesGenre = !genreFilter || album.genre === genreFilter
    return matchesSearch && matchesGenre
  })

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
        !loading && albums.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 mb-6">

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Suche nach Titel oder Künstler …"
              className="flex-1 rounded-lg bg-gray-800 text-white px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <select
              value={genreFilter}
              onChange={(event) => setGenreFilter(event.target.value)}
              className="rounded-lg bg-gray-800 text-white px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Alle Genres</option>
              {
                genres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))
              }
            </select>

          </div>
        )
      }

      {
        loading ? (
          <p className="text-gray-400">Lade Sammlung …</p>
        ) : albums.length === 0 ? (
          <p className="text-gray-400">Noch keine Alben in deiner Sammlung.</p>
        ) : filteredAlbums.length === 0 ? (
          <p className="text-gray-400">Keine Alben gefunden.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {
              filteredAlbums.map((album) => (
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
