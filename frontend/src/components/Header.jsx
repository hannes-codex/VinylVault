function Header() {
  return (
    <header className="h-20 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8">

      <h1 className="text-2xl font-bold text-white">
        🎵 VinylVault
      </h1>

      <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700">
        🔍 Suche
      </button>

    </header>
  )
}

export default Header