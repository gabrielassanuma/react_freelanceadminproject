import { Link } from 'react-router-dom'

import Container from './Container'
import logo from '../images/logo.png'

import styles from './Navbar.module.css'



function Navbar() {
  return (
    <nav className={styles.navBar}>
      <Container>
          <Link to='/'>
            <img src={logo} alt="logo" className={styles.imageNavBar} />
          </Link>
        <ul className={styles.listNavBar}>
          <li className={styles.itemNavBar}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.itemNavBar}>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className={styles.itemNavBar}>
            <Link to='/company'>Company</Link>
          </li>
          <li className={styles.itemNavBar}>
            <Link to='/newproject'>New Project</Link>
          </li>
        </ul>
      </Container>
      </nav>
  )
}

export default Navbar