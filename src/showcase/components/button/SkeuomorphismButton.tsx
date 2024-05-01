'use client'

import { Plus } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const SkeuomorphismButton = () => {
  //bg-[radial-gradient(#ffffff_0%,#e4e4e7_var(--skeuomorphism-button-r),#ffffff_100%)]
  return (
    <motion.button
      className=" relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full  [filter:drop-shadow(5px_5px_10px_#e7e5e4)_drop-shadow(-5px_-5px_10px_white)] "
      initial={
        {
          '--skeuomorphism-button-r': '90%',
        } as any
      }
      whileTap={
        {
          '--skeuomorphism-button-r': '70%',
        } as any
      }
      transition={{
        '--skeuomorphism-button-r': {
          duration: 0.1,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
    >
      <span className="absolute -left-1/4 -top-1/4 h-[200%] w-[200%] rotate-45  bg-[radial-gradient(ellipse_80%_100%,#ffffff80_0%,#d6d3d1_var(--skeuomorphism-button-r),#ffffff20_100%)] " />
      <span className="absolute -bottom-1/4 -right-1/4 h-[200%] w-[200%] rotate-45 bg-[radial-gradient(ellipse_80%_100%,#e4e4e780_0%,#ffffff_var(--skeuomorphism-button-r),#e4e4e720_100%)]" />
      <span className="absolute -left-1/4 -top-1/4 h-[200%] w-[200%] rotate-45 bg-[radial-gradient(#ffffff_0%,#e4e4e7_var(--skeuomorphism-button-r),#ffffff_100%)]" />

      <Plus className="z-10" size={24} />
    </motion.button>
  )
}

export default SkeuomorphismButton
