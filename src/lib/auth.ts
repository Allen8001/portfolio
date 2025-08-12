import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log("🔐 Auth attempt with:", { 
          email: credentials?.email, 
          password: credentials?.password ? "***" : "missing" 
        });
        console.log("🔑 Environment variables:", {
          ADMIN_EMAIL: process.env.ADMIN_EMAIL,
          ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? "***" : "missing"
        });

        if (!credentials?.email || !credentials?.password) {
          console.log("❌ Missing credentials");
          return null;
        }

        // Check against environment variables
        if (
          credentials.email === process.env.ADMIN_EMAIL &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          console.log("✅ Authentication successful for:", credentials.email);
          return {
            id: "1",
            email: credentials.email,
            name: "Admin",
            role: "admin",
          };
        }

        console.log("❌ Authentication failed - credentials don't match");
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.role === "admin") {
        session.user.role = "admin";
      }
      return session;
    },
  },
};
