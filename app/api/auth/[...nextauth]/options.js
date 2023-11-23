import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import User from "/app/(models)/User";

export const options = {
  providers: [
    FacebookProvider({
      profile(profile) {
        console.log("Profile GitHub: ", profile);

        let userRole = "GitHub User";
        if (profile?.email == "jake@claritycoders.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: "318698361046134",
      clientSecret: "4b31c05b8c44b18458e4a83c2f539487",
    }),
    GoogleProvider({
      profile(profile) {
        // console.log("Profile Google: ", profile);

        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: "1020201000495-pabs2b6gk4743a3sg89o8d65js9cqq3t.apps.googleusercontent.com",
      clientSecret: "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",
    }),

  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // let isUser = await User.findOne({ email: user.email })
      // console.log({ isUser })
      const isAllowedToSignIn = false
      return true
      if (isUser) {
      } else {
        // Return false to display a default error message
        // return false
        // Or you can return a URL to redirect 
      }
    },
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/setup' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
};
