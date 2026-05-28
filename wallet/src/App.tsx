import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Wallet from "./pages/Wallet"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/wallet" element = {<ProtectedRoute><Wallet/></ProtectedRoute>}/>
      </Routes>
    </Router>
  )
}

export default App
