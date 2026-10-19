import { useState } from "react"
import { Link } from "react-router-dom"

function AlbumCard({ album, onDelete }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">

      <div className="h-64 bg-gray-700 flex items-center justify-center">
        {
          album.coverUrl && !imageFailed ? (
            <img
              src={album.coverUrl}
              alt={`Cover von ${album.title}`}
              className="h-full w-full object-cover"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <span className="text-6xl">
              💿
            </span>
          )
        }
      </div>


      <div className="p-5">

        <div className="flex items-start justify-between gap-2">

          <h3 className="text-xl font-bold text-white">
            {album.title}
          </h3>

          <div className="flex items-center gap-2 shrink-0">

            <Link
              to={`/albums/${album.id}/edit`}
              className="text-gray-500 hover:text-indigo-400"
              aria-label={`${album.title} bearbeiten`}
            >
              ✏️
            </Link>

            {
              onDelete && (
                <button
                  onClick={() => onDelete(album.id)}
                  className="text-gray-500 hover:text-red-400"
                  aria-label={`${album.title} entfernen`}
                >
                  🗑️
                </button>
              )
            }

          </div>

        </div>


        <p className="text-gray-400 mt-1">
          {album.artist}
        </p>


        <div className="mt-4 text-sm text-gray-400">

          <p>
            📅 {album.year}
          </p>

          <p>
            🎸 {album.genre}
          </p>

        </div>

      </div>

    </div>
  )
}

export default AlbumCard