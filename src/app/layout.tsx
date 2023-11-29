import {Toaster} from 'react-hot-toast';
import {Inter as FontSans} from 'next/font/google';
import {getServerSession} from 'next-auth';
import SessionProvider from '@/components/providers/sessionProvider';
import {cn} from '@/lib/utils';
import type {Metadata} from 'next';
import './globals.css';
import Provider from '@/app/_trpc/provider';

const fontSans = FontSans({subsets: ['latin'], variable: '--font-sans'});

export const metadata: Metadata = {
  title: 'Pray with us',
  description: 'We always pray for you',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
      <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased',
          fontSans.variable)}>
        <SessionProvider session={session}>
          <Provider>
            {children}
          </Provider>
        </SessionProvider>
        <Toaster/>
      </body>
      </html>
  );
}
