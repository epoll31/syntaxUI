import { cn } from '@/lib/utils';

export default function SimpleCard({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between gap-6 rounded-lg border bg-white p-6',
        className,
      )}
    >
      {children}
    </div>
  );
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
      <div className="w-full text-center text-lg">Here is a footer</div>
    </SimpleCard>
  );
}
