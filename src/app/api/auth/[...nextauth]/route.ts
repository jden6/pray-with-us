import NextAuth, {type AuthOptions} from 'next-auth';

import NaverProvider from 'next-auth/providers/naver';
import GoogleProvider from 'next-auth/providers/google';
import {supa} from '@/lib/supabase/client';

const authOption: AuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID ?? '',
      clientSecret: process.env.NAVER_CLIENT_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async signIn({user}) {
      const check = await supa().
        from('t_auth_info').
        select('account').
        eq('account', user.email).single();
      if (!check?.data) {
        const createUser = await supa().from('t_users').insert({
          name: user.name,
          group_seq: 1,
          access_level_seq: 21,
        }).select().single();
        await supa().from('t_auth_info').insert({
          account: user.email,
          user_seq: createUser.data.user_seq,
          oauth2_seq: 1,
        }).select().single();
      }

      return true;
    },
  },
};

const handler = NextAuth(authOption);

export {handler as GET, handler as POST};