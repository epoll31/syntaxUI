import { cn } from '@/lib/utils'
import { HTMLProps, PropsWithChildren } from 'react'

export default function SimpleCard({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between gap-6 rounded-lg border bg-white p-6',
        className,
      )}
      {...props}
    />
  )
}

export function SimpleCardExample() {
  return (
    <SimpleCard className="w-80 ">
      <div className="w-full text-2xl font-semibold">Here is a Title</div>
      <div className="w-full text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
        lectus. Set sit amet ipsum mauris. Maecenas congue ligula ac quam
        viverra nec consectetur ante hendrerit. Donec et mollis dolor.
      </div>
    </SimpleCard>
  )
}
