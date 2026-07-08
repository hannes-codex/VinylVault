import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
      
    </div>
  )
}

export default App