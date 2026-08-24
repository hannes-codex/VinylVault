import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createAlbum } from "../lib/api"

const initialForm = { title: "", artist: "", year: "", genre: "" }

function AddAlbum() {

  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      await createAlbum({ ...form, year: Number(form.year) })
      navigate("/collection")
    } catch (err) {
      setError(err.message)
      setSubmitting(false)
    }
  }

  return (
    <main className="p-8 flex-1">
      <h2 className="text-3xl font-bold text-white mb-8">
        ➕ Album hinzufügen
      </h2>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">

        <div>
          <label className="block text-gray-400 mb-1" htmlFor="title">Titel</label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            required
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
          {submitting ? "Speichern …" : "Album speichern"}
        </button>

      </form>
    </main>
  )
}

export default AddAlbum
