import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const Page = ({ title, actions, children }: {
  title: string,
  children: ReactNode
  actions?: ReactNode[]
}) => {
  return <div className={cn('flex-1')}>
    <div className={cn('flex', 'justify-between')}>
      <h2 className={cn('text-3xl font-bold tracking-tight', 'mb-6')}>{title}</h2>
      <div className={cn('flex', 'space-x-2')}>
        {actions}
      </div>
    </div>
    {children}
  </div>
}
export default Page