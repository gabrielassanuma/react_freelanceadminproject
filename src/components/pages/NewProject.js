import styles from './NewProject.module.css'

import ProjectForm from '../layout/ProjectForm'

function NewProject() {
  return (
    <div className={styles.containerNewProject}>
      <h1>Create a New Project</h1>
      <h3>Firstly create your new project and after that add service</h3>
      <ProjectForm />
    </div>
  )
}

export default NewProject