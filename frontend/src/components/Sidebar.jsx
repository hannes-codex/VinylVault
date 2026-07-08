import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-950 border-r border-gray-800 min-h-screen p-6">

      <nav className="space-y-4">

        <Link 
          to="/"
          className="block text-gray-400 hover:text-white"
        >
          🏠 Dashboard
        </Link>


        <Link
          to="/collection"
          className="block text-gray-400 hover:text-white"
        >
          💿 Sammlung
        </Link>


        <Link
          to="/add"
          className="block text-gray-400 hover:text-white"
        >
          ➕ Album hinzufügen
        </Link>


        <Link
          to="/stats"
          className="block text-gray-400 hover:text-white"
        >
          📊 Statistik
        </Link>


      </nav>

    </aside>
  )
}

export default Sidebar