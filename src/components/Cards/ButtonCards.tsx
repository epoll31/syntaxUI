'use client'

import Link from 'next/link'
import { ThreeDButton } from '@/ui/button'
import HeartbeatButton from '@/ui/animation/HeartbeatButton'
import { NeubrutalismButton } from '../CodePreview/Buttons'

const data = [
  {
    id: 1,
    title: '3D Button',
    link: '/docs/components/button/3d-button',
    component: <ThreeDButton onClick={(e) => e.preventDefault()} />,
  },
  {
    id: 2,
    title: 'Neubrutalism Button',
    link: '/docs/components/button/neubrutalism-button',
    component: <NeubrutalismButton onClick={(e) => e.preventDefault()} />,
  },
  {
    id: 2,
    title: 'Heartbeat Button',
    link: '/docs/components/button/heartbeat-button',
    component: <HeartbeatButton onClick={(e) => e.preventDefault()} />,
  },
]

const ButtonCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link href={item.link} key={item.id} className="no-underline">
            <div className="overflow group group rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer">
              <div className="flex h-[9rem] items-center justify-center overflow-hidden rounded-t-xl border-b bg-gray-50 text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100 md:h-[12rem]">
                {item.component}
              </div>
              <div className="w-full p-4 text-sm font-medium text-gray-800">
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ButtonCards
