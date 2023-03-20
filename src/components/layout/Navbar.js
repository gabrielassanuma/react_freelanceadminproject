import { Link } from 'react-router-dom'

import Container from './Container'
import logo from '../images/logo.png'

import styles from './Navbar.module.css'



function Navbar() {
  return (
    <nav>
      <Container>
        <Link to='/'>
          <img src={logo} alt="logo" className={styles.imageNavBar} />
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/company'>Company</Link>
        <Link to='/newproject'>New Project</Link>
      </Container>
      </nav>
  )
}

export default Navbar