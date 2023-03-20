import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/company'>Company</Link>
          <Link to='/newproject'>New Project</Link>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/company" element={<Company/>}/>
        <Route exact path="/newproject" element={<NewProject/>}/>
      </Routes>
    </Router>
  )
}

export default App;