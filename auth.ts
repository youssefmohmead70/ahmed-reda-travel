import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/admin/login",
  },

  providers: [
    Credentials({
      name: "Admin Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const email = process.env.ADMIN_EMAIL;
        const password = process.env.ADMIN_INITIAL_PASSWORD;

        if (
          !email ||
          !password ||
          typeof credentials?.email !== "string" ||
          typeof credentials?.password !== "string"
        ) {
          return null;
        }

        if (
          credentials.email.trim().toLowerCase() !== email.trim().toLowerCase() ||
          credentials.password !== password
        ) {
          return null;
        }

        return {
          id: email,
          name: "Food City Admin",
          email,
        };
      },
    }),
  ],
});
