import nextAuth from "next-auth";
import googleProvider from "next-auth/providers/google"

const option = {
    providers: [
        googleProvider({
            clientId: process.env.GOOGLE_CLIENTID,
            clientSecret: process.env.GOOGLE_CLIENTSECRET
        })
    ],

}
const handler = nextAuth(option)

export {
    handler as GET, handler as POST
}