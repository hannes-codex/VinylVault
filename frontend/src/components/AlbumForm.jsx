function AlbumForm({ form, error, submitting, submitLabel, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="max-w-md space-y-4">

      <div>
        <label className="block text-gray-400 mb-1" htmlFor="title">Titel</label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={onChange}
          required
          className="w-full rounded-lg bg-gray-800 text-white px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-400 mb-1" htmlFor="artist">Künstler</label>
        <input
          id="artist"
          name="artist"
          value={form.artist}
          onChange={onChange}
          required
          className="w-full rounded-lg bg-gray-800 text-white px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-400 mb-1" htmlFor="year">Jahr</label>
        <input
          id="year"
          name="year"
          type="number"
          value={form.year}
          onChange={onChange}
          required
          className="w-full rounded-lg bg-gray-800 text-white px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-400 mb-1" htmlFor="genre">Genre</label>
        <input
          id="genre"
          name="genre"
          value={form.genre}
          onChange={onChange}
          required
          className="w-full rounded-lg bg-gray-800 text-white px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-400 mb-1" htmlFor="coverUrl">Cover-URL (optional)</label>
        <input
          id="coverUrl"
          name="coverUrl"
          type="url"
          value={form.coverUrl}
          onChange={onChange}
          placeholder="https://…"
          className="w-full rounded-lg bg-gray-800 text-white px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {
        error && (
          <p className="text-red-400">⚠️ {error}</p>
        )
      }

      <button
        type="submit"
        disabled={submitting}
        className="rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold px-6 py-2"
      >
        {submitLabel}
      </button>

    </form>
  )
}

export default AlbumForm
