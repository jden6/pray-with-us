import { cn } from '@/lib/utils'

const ContentsAside = () => {
  return <aside
    className={cn('fixed', 'top-14', 'z-30', '-ml-2', 'hidden', 'h-[calc(100vh-3.5rem)]', 'w-full', 'shrink-0', 'md:sticky', 'md:block')}>
    <div dir="ltr"
         className={cn('relative', 'overflow-hidden', 'h-full', 'py-6', 'pl-8', 'pr-6', 'lg:py-8')}>
      <style>
        {`[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`}
      </style>
      <div data-radix-scroll-area-viewport className={cn('h-full', 'w-full', 'rounded-[inherit]')}
           style={{ overflow: 'hidden scroll' }}>
        <div>

        </div>
      </div>
    </div>
  </aside>
}

export default ContentsAside