import React, { useRef, useState } from 'react'
import styles from './styles.module.css'

function ToggleText() {
  const textRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [duration, setDuration] = useState(0.5)

  const toggleText = () => {
    if (!textRef.current) return

    if (isVisible) {
      textRef.current.style.maxHeight = '0px'
      textRef.current.style.opacity = 0
    } else {
      textRef.current.style.maxHeight = textRef.current.scrollHeight + 'px'
      textRef.current.style.opacity = 1
    }

    setIsVisible(!isVisible)
  }

  const handleDurationChange = (e) => {
    const value = parseFloat(e.target.value)
    if (!isNaN(value) && value >= 0) {
      setDuration(value)
      if (textRef.current) {
        textRef.current.style.transition = `all ${value}s ease`
      }
    }
  }

  return (
    
  )
}

export default ToggleText
