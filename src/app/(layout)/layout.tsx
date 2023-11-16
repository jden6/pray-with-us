import { ReactNode } from 'react'
import LayoutHeader from '@/layout/header'
import LayoutContents from '@/layout/contents'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession()
  if(session == null){
    return redirect('/signin')
  }
  return <>
    <LayoutHeader/>
    <LayoutContents>
      {children}
    </LayoutContents>
  </>
}

export default Layout