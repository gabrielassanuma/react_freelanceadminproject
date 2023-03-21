import styles from './Home.module.css'

import homepic from '../images/homepic.png'
import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section>
      <h1>Welcome to Freelancer Management System</h1>
      <h3>Save money, organize your projects in a super simple way</h3>
      <img src={homepic} alt="Some money" />
      <LinkButton to='/newproject' text='Create new project' />
    </section>
  )
}

export default Home