import NextAuth, { User } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & {
      email: string;
      user_seq: number;
    };
  }
}
