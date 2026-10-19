import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AlbumForm from "../components/AlbumForm"
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

      <AlbumForm
        form={form}
        error={error}
        submitting={submitting}
        submitLabel={submitting ? "Speichern …" : "Album speichern"}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </main>
  )
}

export default AddAlbum
