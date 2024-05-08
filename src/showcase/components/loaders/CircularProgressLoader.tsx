'use client'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function CircularProgressLoader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, isInView])

  const variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 5,
          ease: 'easeInOut',
        },
        opacity: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      },
    },
  }

  return (
    <motion.svg
      ref={ref}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      initial="hidden"
      animate={controls}
    >
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        strokeWidth={10}
        strokeLinecap="round"
        stroke="#ff0055"
        fill="transparent"
        variants={variants}
        style={{ rotate: -90 }}
      />
    </motion.svg>
  )
}
