import NextAuth from "next-auth";
import { compare } from "bcrypt";

import CredentialsProvider from "next-auth/providers/credentials";
import { supa } from "@/lib/supabase/client";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const { data: findUser, error } = await supa()
          .from("t_users")
          .select("email")
          .eq("email", email)
          .select("password")
          .single();
        const isSuccess = await compare(password, findUser?.password || "");
        if (isSuccess) {
          const { data: loginUser } = await supa()
            .from("t_users")
            .select("user_seq, email, name")
            .eq("email", email)
            .single();

          return {
            user_seq: loginUser?.user_seq,
            email: loginUser?.email,
            name: loginUser?.name,
          } as any;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
