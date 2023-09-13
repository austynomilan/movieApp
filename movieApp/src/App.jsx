import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import MovieDetails from './Movies/Details/MovieDetails';
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={ <MovieDetails /> } />
      </Routes>
    </Router>
  )
}

export default App
