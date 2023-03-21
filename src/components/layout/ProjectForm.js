import styles from './ProjectForm.module.css'

function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Enter project name" />
      </div>
      <div>
        <input type="number" placeholder="Enter total value:" />
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