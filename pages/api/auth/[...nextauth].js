import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const options = {
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Email and Password',
        credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: {  label: "Password", type: "password" }
        },
        authorize: async (credentials) => {
            // Add logic here to look up the user from the credentials supplied eg from db or api
            const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }

            if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return Promise.resolve(user)
            } else {
                // If you return null or false then the credentials will be rejected
                return Promise.resolve(null)
                // You can also Reject this callback with an Error or with a URL:
                // return Promise.reject(new Error('error message')) // Redirect to error page
                // return Promise.reject('/path/to/redirect')        // Redirect to a URL
            }
        },
        pages: {
            signIn: '/auth/signin'
        }
    }),
  ],
}

export default (req, res) => NextAuth(req, res, options)