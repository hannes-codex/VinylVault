import { useEffect, useState } from "react"
import { getAlbums } from "../lib/api"

function countBy(albums, keyFn) {
  const counts = new Map()
  for (const album of albums) {
    const key = keyFn(album)
    counts.set(key, (counts.get(key) || 0) + 1)
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1])
}

function decadeLabel(year) {
  return `${Math.floor(year / 10) * 10}er`
}

function BarList({ entries }) {
  const max = Math.max(...entries.map(([, count]) => count), 1)

  return (
    <div className="space-y-3">
      {
        entries.map(([label, count]) => (
          <div key={label} title={`${label}: ${count}`}>

            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>{label}</span>
              <span>{count}</span>
            </div>

            <div className="h-2 rounded-full bg-gray-700">
              <div
                className="h-2 rounded-full bg-indigo-500"
                style={{ width: `${(count / max) * 100}%` }}
              />
            </div>

          </div>
        ))
      }
    </div>
  )
}

function Statistics() {

  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAlbums()
      .then(setAlbums)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const artistCount = new Set(albums.map((album) => album.artist)).size
  const genreCounts = countBy(albums, (album) => album.genre)
  const decadeCounts = countBy(albums, (album) => decadeLabel(album.year))
    .sort((a, b) => a[0].localeCompare(b[0]))

  return (
    <main className="p-8 flex-1">

      <h2 className="text-3xl font-bold text-white mb-8">
        📊 Statistik
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
          <p className="text-gray-400">Lade Statistik …</p>
        ) : albums.length === 0 ? (
          <p className="text-gray-400">Noch keine Alben in deiner Sammlung.</p>
        ) : (
          <div className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-gray-800 rounded-xl p-6">
                <p className="text-gray-400">Platten</p>
                <p className="text-5xl text-white font-bold mt-2">{albums.length}</p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <p className="text-gray-400">Künstler</p>
                <p className="text-5xl text-white font-bold mt-2">{artistCount}</p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <p className="text-gray-400">Genres</p>
                <p className="text-5xl text-white font-bold mt-2">{genreCounts.length}</p>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Genres</h3>
                <BarList entries={genreCounts} />
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Jahrzehnte</h3>
                <BarList entries={decadeCounts} />
              </div>

            </div>

          </div>
        )
      }

    </main>
  )
}

export default Statistics
