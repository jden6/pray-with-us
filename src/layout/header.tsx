import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import LogoutButton from '@/layout/logout.button'

const LayoutHeader = () => {
  return <header
    className={cn('sticky', 'top-0', 'z-50', 'w-full', 'border-b', 'bg-background/95', 'backdrop-blur', 'supports-[backdrop-filter]:bg-background/60')}>
    <div className={cn('container', 'flex', 'h-14', 'items-center')}>
      <div className={cn('mr-4', 'hidden', 'md:flex', 'md:justify-between')}>
        <Link href={'/'} className={cn('mr-6', 'flex', 'items-center', 'space-x-2')}>
          <span className={cn('hidden', 'font-bold', 'sm:inline-block')}>Pray with us</span>
        </Link>
        <nav className={cn('flex', 'items-center', 'space-x-6', 'text-sm', 'font-medium')}>
          <Link href="/home"
                className={cn('transition-colors', 'hover:text-foreground/80', 'text-foreground/60')}>Home</Link>
          <Link href="/notice"
                className={cn('transition-colors', 'hover:text-foreground/80', 'text-foreground/60')}>Notice</Link>
          <Link href="/pray"
                className={cn('transition-colors', 'hover:text-foreground/80', 'text-foreground/60')}>pray</Link>
        </nav>
      </div>
      <Button
        className={cn('inline-flex', 'items-center', 'justify-center', 'whitespace-nowrap', 'rounded-md', 'font-medium', 'transition-colors', 'focus-visible:outline-none', 'focus-visible:ring-ring', 'disabled:pointer-events-none', 'disabled:opacity-50', 'hover:text-accent-foreground', 'h-9', 'py-2', 'mr-2', 'px-0', 'text-base', 'hover:bg-transparent', 'focus-visible:bg-transparent', 'focus-visible:ring-0', 'focus-visible:ring-offset-0', 'md:hidden')}>
        <div>menu</div>
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className={cn('flex', 'flex-1', 'items-center', 'justify-between', 'space-x-2', 'justify-end')}>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              환영합니다 :)
            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuSeparator/>
            <LogoutButton />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </header>
}

export default LayoutHeader