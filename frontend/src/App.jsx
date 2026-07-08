import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

import Dashboard from "./pages/Dashboard"
import Collection from "./pages/Collection"
import AddAlbum from "./pages/AddAlbum"
import Statistics from "./pages/Statistics"


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

            <Route path="/stats" element={<Statistics />} />

          </Routes>

        </div>

      </div>

    </BrowserRouter>

  )

}

export default App