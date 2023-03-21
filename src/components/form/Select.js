import styles from './Select.module.css'

function Select({text, name, option, handleOnChange, value}) {
  return (
    <div className={styles.formControlSelect}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Select one option: </option>
       </select>
    </div>
  )
}

export default Select