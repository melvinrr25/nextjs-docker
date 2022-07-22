import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'
import { Deta } from 'deta'
import { databaseCollections } from '../../../services/constants'

export default NextAuth({
providers: [
CredentialsProvider({
  name: 'my-project',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'jsmith@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const deta = Deta(process.env.DETA_KEY)
        const db = deta.Base(databaseCollections.users)
        const query = { email: credentials.email, password: credentials.password }
        const { items } = await db.fetch(query)
        const user = items[0]

        return user ? user : null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          email: user.email
        };
      }

      return token;
    },
    async session({ session, token }) {
      session.user.email = token.email;
      return session;
    },
  },
});

