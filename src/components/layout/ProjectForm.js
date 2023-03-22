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

  function handleCategory(e) {
    setProject({ ...project, category: {
      id: e.target.value,
      name: e.target.options[e.targetselectedIndex].text,

    } })
  }

  return (
    <form onSubmit={submit} className={styles.containerProjectForm}>
      <div>
        <Input type="text" text="Project name:" name="name" placeholder="Insert the name of project" handleOnChange={handleChange} />
      </div>
      <div>
        <Input type="number" text="Project budget:" name="budget" placeholder="Insert project budget" handleOnChange={handleChange}  />
      </div>
      <div>
        <Select name="category_id" text="Select category :"  handleOnChange={handleCategory}/>
      </div>
      <SubmitButton text={btnText}/>
    </form>
  )
}

export default ProjectForm