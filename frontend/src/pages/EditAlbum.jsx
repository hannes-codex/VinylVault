import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AlbumForm from "../components/AlbumForm"
import { getAlbum, updateAlbum } from "../lib/api"

const initialForm = { title: "", artist: "", year: "", genre: "" }

function EditAlbum() {

  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    getAlbum(id)
      .then((album) => setForm({
        title: album.title,
        artist: album.artist,
        year: album.year,
        genre: album.genre,
      }))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      await updateAlbum(id, { ...form, year: Number(form.year) })
      navigate("/collection")
    } catch (err) {
      setError(err.message)
      setSubmitting(false)
    }
  }

  return (
    <main className="p-8 flex-1">
      <h2 className="text-3xl font-bold text-white mb-8">
        ✏️ Album bearbeiten
      </h2>

      {
        loading ? (
          <p className="text-gray-400">Lade Album …</p>
        ) : (
          <AlbumForm
            form={form}
            error={error}
            submitting={submitting}
            submitLabel={submitting ? "Speichern …" : "Änderungen speichern"}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )
      }
    </main>
  )
}

export default EditAlbum
