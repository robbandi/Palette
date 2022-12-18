import { useState } from 'react'
import styles from '../ColorForm/styles.module.css'

export default function ColorForm({ onColorChange }) {
  const [color, setColor] = useState('')
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    setColor(event.target.value)
    setError(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (color.match(/^#([0-9a-f]{3}){1,2}$/i)) {
      onColorChange(color)
    } else {
      setError('Invalid color')
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
    <form onSubmit={handleSubmit}>
      <input className={styles.input} type="color" value={color} onChange={handleChange} />
      <input className={styles.input} type="text" placeholder='#000' pattern="#[0-9a-f]{3,6}" value={color} onChange={handleChange} />
      <button className={styles.input} type="submit">Enter</button>
      {error && <p>{error}</p>}
    </form>
    </div>
    </div>
  )
}