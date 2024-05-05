'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function TextBlurLoad({ children }: { children: string }) {
  const chars = useMemo(() => children.split(''), [children])
  console.log(chars)

  return (
    <motion.div
      className="text-xl"
      variants={{
        hide: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hide"
      animate="show"
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          className="relative inline-block"
          variants={{
            hide: { rotate: 0, scale: 0, filter: 'blur(10px)' },
            show: { rotate: 360, scale: 1, filter: 'blur(0px)' },
          }}
        >
          {char === ' ' ? <span>&nbsp;</span> : char}
        </motion.span>
      ))}
    </motion.div>
  )
}
