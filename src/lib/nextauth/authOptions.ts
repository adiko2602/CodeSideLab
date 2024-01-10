import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../prisma/prismaClient";
import { compare } from "../helpers/Password";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { type: "email", label: "email" },
        password: { type: "password", label: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)
          throw new Error("Nieprawidłowe dane logowania");

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (!user) throw new Error("Nieprawidłowe dane logowania");

          const passwordIsCorrect = await compare(
            credentials.password,
            user.password
          );

          if (!passwordIsCorrect)
            throw new Error("Nieprawidłowe dane logowania");

          return { id: user.id, email: user.email };
        } catch (err: unknown) {
          throw new Error("Nieprawidłowe dane logowania");
        } finally {
          prisma.$disconnect();
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },

  callbacks: {
    async jwt({ user, token, trigger }) {
      if (user) {
        // if (trigger === "update") {
        //     const response = await getUserByEmail(token.user.email as string);
        //     const retrievedUser = response.data;
        //     if (!retrievedUser) return { ...token };
        //     token.user = { ...retrievedUser };
        //     return { ...token };
        //   }
        token.user = {
          id: user.id as number,
          email: user.email as string,
        };
        return token;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
};
