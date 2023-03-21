import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.listFooter}>
        <li className={styles.itemFooter}>
          <FaFacebook className={styles.iconFooter} />
        </li>
        <li className={styles.itemFooter}>
          <FaInstagram className={styles.iconFooter} />
        </li>
        <li className={styles.itemFooter}>
          <FaLinkedin className={styles.iconFooter} />
        </li>
      </ul>
    </footer>
  )
}

export default Footer