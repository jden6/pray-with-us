import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const Page = ({ title, children }: {
  title: string,
  children: ReactNode
}) => {
  return <div className={cn('flex-1')}>
    <h2 className={cn('text-3xl font-bold tracking-tight', 'mb-6')}>{title}</h2>
    {children}
  </div>
}
export default Page