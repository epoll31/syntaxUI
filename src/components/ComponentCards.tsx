import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { OrbitingLoader } from '@/ui/Loader'
import { TextTicker } from './PreviewCode/TextTicker'

const data = [
  {
    id: 3,
    title: 'Features',
    image: '/images/ui/features.png',
    link: '/docs/components/features',
  },
  {
    id: 4,
    title: 'Pricing',
    image: '/images/ui/pricing.png',
    link: '/docs/components/pricing',
  },
  {
    id: 4,
    title: 'Loaders',
    component: <OrbitingLoader />,
    link: '/docs/components/loaders',
  },
  {
    id: 2,
    title: 'Text Ticker',
    component: <TextTicker />,
    link: '/docs/components/text-ticker',
  },
  {
    id: 4,
    title: 'Footer',
    image: '/images/ui/footer.png',
    link: '/docs/components/footer',
  },
  {
    id: 5,
    title: 'Input',
    image: '/images/ui/input.png',
    link: '/docs/components/input',
  },

  {
    id: 4,
    title: 'Tab',
    image: '/images/ui/tabs.png',
    link: '/docs/components/tabs',
  },
  // {
  //   id: 1,
  //   title: 'Badges',
  //   image: '/images/ui/badges.png',
  //   link: '/docs/components/badges',
  // },
  {
    id: 2,
    title: 'Breadcrumb',
    image: '/images/ui/breadcrumb.png',
    link: '/docs/components/breadcrumb',
  },
]

const ComponentCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link href={item.link} key={item.id}>
            <div className="overflow group rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer">
              <div className="flex h-[9rem] items-center justify-center rounded-t-xl border-b bg-gray-50 text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100 md:h-[12rem]">
                {item.image ? (
                  <Image
                    width={200}
                    height={200}
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-[150px] duration-300 ease-in-out group-hover:scale-110"
                  />
                ) : item.component ? (
                  item.component
                ) : null}
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

export default ComponentCards
