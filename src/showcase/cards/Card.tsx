import Link from 'next/link'

export interface CardInfo {
  title: string
  link: string
  component: JSX.Element
  hide?: boolean
}

const CardsCards = ({ cards: allCards }: { cards: CardInfo[] }) => {
  const cards = allCards.filter((card) => !card.hide)

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map((card, i) => (
          <Link href={card.link} key={i} className="no-underline">
            <div className="overflow group rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer">
              <div className="flex h-[9rem] items-center justify-center overflow-hidden rounded-t-xl border-b bg-gray-50 text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100 md:h-[12rem]">
                {card.component}
              </div>
              <div className="w-full p-4 text-sm font-medium text-gray-800">
                {card.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CardsCards
