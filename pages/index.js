import { useState } from 'react'
import { useAnimation } from 'framer-motion'
import { motion } from 'framer-motion'
import ColorForm from '../components/ColorForm/index'
import ColorList from '../components/ColorList/index'
import { generateColorSchemes } from '../lib/color-schemes'

export default function Index() {
  const [color, setColor] = useState(null)
  const [colorSchemes, setColorSchemes] = useState(null)
  const animation = useAnimation()

  const handleColorChange = (color) => {
    setColor(color)
    setColorSchemes(generateColorSchemes(color))
    animation.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    })
  }

  return (
    <div>
      <ColorForm onColorChange={handleColorChange} />
      {colorSchemes && (
        <motion.div animate={animation} initial={{ opacity: 0, x: -100 }}>
          <ColorList colorSchemes={colorSchemes} />
        </motion.div>
      )}
    </div>
  )
}