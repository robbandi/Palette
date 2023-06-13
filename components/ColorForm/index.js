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
    event.preventDefault();
    const formattedColor = color.trim();
    const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;
  
    if (colorRegex.test(formattedColor)) {
      onColorChange(formattedColor);
      setError(null);
    } else {
      setError('Invalid color');
    }
  }

  return (
    <div>
    <div className={styles.wrapper}>
      <div className={styles.nav}>
    <form onSubmit={handleSubmit}>
      <input className={styles.input} type="color" value={color} onChange={handleChange} />
      <input
  className={styles.input}
  type="text"
  placeholder="#000"
  pattern="#[0-9a-fA-F]{3,6}"
  value={color}
  onChange={handleChange}
/>
      <button className={styles.input} type="submit">Enter</button>
    </form>
    </div>
    </div>
    {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}