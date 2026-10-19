import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main className="p-8 flex-1">
      <h2 className="text-3xl font-bold text-white mb-4">
        404 – Seite nicht gefunden
      </h2>

      <p className="text-gray-400 mb-6">
        Diese Seite gibt es nicht (oder noch nicht).
      </p>

      <Link
        to="/"
        className="rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2 inline-block"
      >
        Zurück zum Dashboard
      </Link>
    </main>
  )
}

export default NotFound
