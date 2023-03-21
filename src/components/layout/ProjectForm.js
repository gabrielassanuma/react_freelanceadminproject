import styles from './ProjectForm.module.css'

import Input from '../form/Input'

function ProjectForm() {
  return (
    <form className={styles.containerProjectForm}>
      <div>
        <Input type="text" text="Project name:" name="name" placeholder="Insert the name of project" />
      </div>
      <div>
        <Input type="number" text="Project budget:" name="budget" placeholder="Insert project budget" />
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>
            Choose category
          </option>
        </select>
      </div>
    </form>
  )
}

export default ProjectForm