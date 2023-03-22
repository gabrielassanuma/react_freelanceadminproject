import styles from './ProjectForm.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import { useState } from 'react'

function ProjectForm({ handleSubmit, btnText, projectData }) {

  const[project, setProject] = useState(projectData || [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.containerProjectForm}>
      <div>
        <Input type="text" text="Project name:" name="name" placeholder="Insert the name of project" />
      </div>
      <div>
        <Input type="number" text="Project budget:" name="budget" placeholder="Insert project budget" />
      </div>
      <div>
        <Select name="category_id" text="Select category :"  />
      </div>
      <SubmitButton text={btnText}/>
    </form>
  )
}

export default ProjectForm