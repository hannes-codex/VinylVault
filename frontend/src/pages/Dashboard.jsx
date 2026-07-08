function Dashboard() {
  return (
    <main className="p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        Willkommen zurück 👋
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


        <div className="bg-gray-800 rounded-xl p-6">
          <p className="text-gray-400">
            Sammlung
          </p>

          <p className="text-5xl text-white font-bold mt-2">
            0
          </p>

          <p className="text-gray-400">
            Platten
          </p>
        </div>


        <div className="bg-gray-800 rounded-xl p-6">
          <p className="text-gray-400">
            Genres
          </p>

          <p className="text-5xl text-white font-bold mt-2">
            0
          </p>

          <p className="text-gray-400">
            Kategorien
          </p>
        </div>


        <div className="bg-gray-800 rounded-xl p-6">
          <p className="text-gray-400">
            Neueste Platte
          </p>

          <p className="text-xl text-white font-bold mt-4">
            Noch keine Einträge
          </p>
        </div>


      </div>

    </main>
  )
}

export default Dashboard