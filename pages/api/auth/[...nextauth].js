import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import MembershipFeeManager from '../../../services/MembsershipFeeManagerService'

const options = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            id: 'credentials',
            name: 'Credentials',
            type: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                console.log("CREDENTIALS", credentials);
                const user = await MembershipFeeManager.login(credentials.email, credentials.password);
                console.log("USER LOGGED", user);
                // Add logic here to look up the user from the credentials supplied eg from db or api
                //const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }

                if (user?.accessToken) {
                    // Any object returned will be saved in `user` property of the JWT
                    return Promise.resolve(user)
                } else {
                    // If you return null or false then the credentials will be rejected
                    //return Promise.resolve(null)
                    // You can also Reject this callback with an Error or with a URL:
                    // return Promise.reject(new Error('error message')) // Redirect to error page
                    return Promise.reject('/auth/signIn')        // Redirect to a URL
                }
            },
            callbacks: {
                async session({ session, token, user }) {
                    // Send properties to the client, like an access_token from a provider.
                    session.accessToken = token.accessToken
                    return session
                }
            },
            pages: {
                signIn: '/auth/signIn',
                signOut: '/auth/signIn',
                error: '/errorcito'
            }
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)