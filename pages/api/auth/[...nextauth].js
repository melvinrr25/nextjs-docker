import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

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
      async authorize(credentials, req) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

        const user = { name: "melvinrodriguez" }

        if (user) {
          return user;
        }

        return null;
        // Return null if user data could not be retrieved
      },
    }),
    // ...add more providers here
  ],
  secret: "secret",
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          name: user.name
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user.name = token.name;
      return session;
    },
  },
});

