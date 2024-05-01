'use client'

import { Plus } from 'lucide-react'
import React from 'react'

const SkeuomorphismButton = () => {
  return (
    <button className=" animate-skeuomorphism-button flex h-32 w-32 items-center justify-center rounded-full bg-white bg-[radial-gradient(#ffffff_0%,#e4e4e7_var(--skeuomorphism-button-r),#ffffff_100%)]">
      <span className="bg-[linear-gradient(#ffffff)]"></span>
      <Plus size={24} />
    </button>
  )
}

export default SkeuomorphismButton
