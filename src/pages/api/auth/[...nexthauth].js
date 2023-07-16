import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  // Configure one or more authentication providers

  callbacks: {
    async jwt({ token }) {
      console.log('token: ', token)
      token.role = 'member'

      return token
    }
  }
}

export default NextAuth(authOptions)
