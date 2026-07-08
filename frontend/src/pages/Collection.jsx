import AlbumCard from "../components/AlbumCard"


function Collection() {


  const albums = [
    {
      id: 1,
      title: "The Wall",
      artist: "Pink Floyd",
      year: 1979,
      genre: "Rock"
    },

    {
      id: 2,
      title: "A Night at the Opera",
      artist: "Queen",
      year: 1975,
      genre: "Rock"
    },

    {
      id: 3,
      title: "Kind of Blue",
      artist: "Miles Davis",
      year: 1959,
      genre: "Jazz"
    }
  ]


  return (
    <main className="p-8 flex-1">

      <h2 className="text-3xl font-bold text-white mb-8">
        💿 Meine Sammlung
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {
          albums.map((album) => (
            <AlbumCard 
              key={album.id}
              album={album}
            />
          ))
        }

      </div>


    </main>
  )
}


export default Collection