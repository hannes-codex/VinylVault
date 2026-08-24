function AlbumCard({ album, onDelete }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">

      <div className="h-64 bg-gray-700 flex items-center justify-center">
        <span className="text-6xl">
          💿
        </span>
      </div>


      <div className="p-5">

        <div className="flex items-start justify-between gap-2">

          <h3 className="text-xl font-bold text-white">
            {album.title}
          </h3>

          {
            onDelete && (
              <button
                onClick={() => onDelete(album.id)}
                className="text-gray-500 hover:text-red-400 shrink-0"
                aria-label={`${album.title} entfernen`}
              >
                🗑️
              </button>
            )
          }

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