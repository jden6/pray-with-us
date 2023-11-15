import { ReactNode } from 'react'
import LayoutHeader from '@/layout/header'
import LayoutContents from '@/layout/contents'

const Layout = ({ children }: { children: ReactNode }) => {
  return <>
    <LayoutHeader/>
    <LayoutContents>
      {children}
    </LayoutContents>
  </>
}

export default Layout