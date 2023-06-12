import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Create from './components/Create'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/create' element={ <Create /> } />
      </Routes>
    </Router>
  )
}

export default App
