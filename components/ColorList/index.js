import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from '../ColorList/styles.module.css'

export default function ColorList({ colorSchemes }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const springProps = useSpring({
    transform: isExpanded ? 'scale(1)' : 'scale(1)',
    config: { mass: 1, tension: 280, friction: 20 },
  })

  const handleColorBoxClick = (hexCode) => {
    navigator.clipboard.writeText(hexCode)
  }

  return (
    <div className={styles.colorlist}>
      {Object.keys(colorSchemes).map((key) => (
        <div key={key} className={styles.colorscheme}>
          <h2>{key}</h2>
          <div className={styles.colorgrid}>
            {colorSchemes[key].map((color, index) => (
              <div
                key={color}
                className={styles.colorframe}
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                onClick={() => handleColorBoxClick(color)}
              >
                <animated.div
                  className={styles.colorbox}
                  style={{ backgroundColor: color, ...springProps }}
                />
                <div className={styles.colorhex}>{colorSchemes[key][index]}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}