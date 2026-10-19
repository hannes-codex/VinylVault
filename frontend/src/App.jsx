import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

import Dashboard from "./pages/Dashboard"
import Collection from "./pages/Collection"
import AddAlbum from "./pages/AddAlbum"
import EditAlbum from "./pages/EditAlbum"
import Statistics from "./pages/Statistics"
import NotFound from "./pages/NotFound"


function App() {

  return (

    <BrowserRouter>

      <div className="min-h-screen bg-gray-950">

        <Header />

        <div className="flex">

          <Sidebar />

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/collection" element={<Collection />} />

            <Route path="/add" element={<AddAlbum />} />

            <Route path="/albums/:id/edit" element={<EditAlbum />} />

            <Route path="/stats" element={<Statistics />} />

            <Route path="*" element={<NotFound />} />

          </Routes>

        </div>

      </div>

    </BrowserRouter>

  )

}

export default App