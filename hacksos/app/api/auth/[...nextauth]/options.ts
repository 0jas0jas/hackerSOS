import GitHubProvider from "next-auth/providers/github";
import type { AuthOptions, Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

export const options: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GHCLIENTID || "",
      clientSecret: process.env.NEXT_PUBLIC_GHCLIENTSECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access token from a provider.
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
};