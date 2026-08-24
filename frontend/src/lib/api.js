const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api"

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || `Request failed with status ${res.status}`)
  }

  if (res.status === 204) return null
  return res.json()
}

export function getAlbums() {
  return request("/albums")
}

export function createAlbum(album) {
  return request("/albums", {
    method: "POST",
    body: JSON.stringify(album),
  })
}

export function deleteAlbum(id) {
  return request(`/albums/${id}`, { method: "DELETE" })
}
