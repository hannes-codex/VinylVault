function Dashboard() {
  return (
    <main className="p-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Dashboard
      </h2>

      <div className="bg-gray-800 rounded-xl p-6 w-fit">
        <p className="text-gray-400">
          Deine Sammlung
        </p>

        <p className="text-5xl font-bold text-white mt-2">
          0
        </p>

        <p className="text-gray-400">
          Schallplatten
        </p>
      </div>
    </main>
  )
}

export default Dashboard