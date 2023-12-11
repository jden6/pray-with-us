import {getServerSession} from 'next-auth';
import {redirect} from 'next/navigation';
import {ReactNode} from 'react';
import LayoutHeader from '@/layout/header';
import LayoutContents from '@/layout/contents';
import ModalProvider from '@/components/providers/modal.provider';
import SheetProvider from '@/components/providers/sheet.provider';

const Layout = async ({children}: { children: ReactNode }) => {
  const session = await getServerSession();
  if (session == null) {
    return redirect('/signin');
  }
  return <>
    <LayoutHeader/>
    <LayoutContents>
      {children}
      <ModalProvider />
      <SheetProvider />
    </LayoutContents>
  </>;
};

export default Layout;