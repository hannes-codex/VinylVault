function Sidebar() {
  return (
    <aside className="w-64 bg-gray-950 border-r border-gray-800 min-h-screen p-6">
      <nav className="space-y-4">

        <div className="text-white font-semibold">
          🏠 Dashboard
        </div>

        <div className="text-gray-400 hover:text-white cursor-pointer">
          💿 Sammlung
        </div>

        <div className="text-gray-400 hover:text-white cursor-pointer">
          ➕ Album hinzufügen
        </div>

        <div className="text-gray-400 hover:text-white cursor-pointer">
          📊 Statistik
        </div>

      </nav>
    </aside>
  )
}

export default Sidebar