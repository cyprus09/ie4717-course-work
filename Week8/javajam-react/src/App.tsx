import './App.css'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MusicPage from './pages/MusicPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/MusicPage" element={<MusicPage />} />
      </Routes>
    </Router>
  )
}

export default App
