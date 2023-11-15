import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const LayoutContents = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cn('flex-1')}>
      <div className={cn('')}>
        <div
          className={cn('container', 'flex-1', 'items-start',
            // 'md:grid', 'md:grid-cols-[220px_minmax(0,1fr)]',
            'lg:gap-10')}>
          <main className={cn('relative', 'py-6', 'lg:gap-10', 'lg:py-8',
            // 'xl:grid', 'xl:grid-cols-[1fr_300px]'
          )}>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
export default LayoutContents