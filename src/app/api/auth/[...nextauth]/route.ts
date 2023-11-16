import NextAuth, { type AuthOptions } from 'next-auth'

import NaverProvider from 'next-auth/providers/naver'
import GoogleProvider from 'next-auth/providers/google'

const authOption: AuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID ?? '',
      clientSecret: process.env.NAVER_CLIENT_SECRET ?? ''
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }),
  ],
  pages: {
    signIn: '/signin',
  }
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }