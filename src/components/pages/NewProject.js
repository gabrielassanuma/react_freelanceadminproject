import styles from './NewProject.module.css'

import ProjectForm from '../layout/ProjectForm'

import { useNavigate } from 'react-router-dom'

function NewProject() {

  const history = useNavigate()

  function createPost(project) {
    project.cost = 0
    project.services = []

    fetch("http://localhost:3004/projects", {
      method: "POST",
      headers: {
        'content-type': 'application/json'

      },
      body: JSON.stringify(project),  
    }).then((resp => resp.json)
    .then((data) => console.log(data))
    ).catch(error => console.log(error))
  }

  return (
    <div className={styles.containerNewProject}>
      <h1>Create a New Project</h1>
      <h3>Firstly create your new project and after that add service</h3>
      <ProjectForm btnText="Create New Project"/>
    </div>
  )
}

export default NewProject