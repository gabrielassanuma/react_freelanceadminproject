import styles from './Select.module.css'

import { useEffect, useState } from 'react';
import axios from 'axios'

function Select({text, name, option, handleOnChange, value}) {

  const [projectTypes, setProjectTypes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3004/projects_type')
      .then(response => {
        setProjectTypes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.formControlSelect}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Select one option:</option>
        {projectTypes.map(projectType => {
          return <option key={projectType.id} value={projectType.id}>{projectType.type}</option>
        })}
      </select>
    </div>
  )
}

export default Select