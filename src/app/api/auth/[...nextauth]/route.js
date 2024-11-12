// import NextAuth from "next-auth/next"
import { connectDb } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import FacebookProvider from "next-auth/providers/facebook";
import bcrypt from "bcryptjs";
const handler =NextAuth({
    secret: process.env.AUTH_SECRET ,
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 30,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials){
                const {email, password} = credentials;
                if(!email || !password){
                    return null;
                }
                const db = await connectDb();
                const currentUser = await db.collection('users').findOne({ email});
                if(!currentUser){
                    return null;
                }
                const isPasswordValid = bcrypt.compareSync(password, currentUser.password);
                if(!isPasswordValid){
                    return null;
                }
                return currentUser;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    // redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/callback/google",
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                }
              }
          }),
          LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
            authorization: {
                params: {
                //   redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/callback/facebook",
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                }
              }
          }),
          FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            authorization: {
                params: {
                //   redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/callback/facebook",
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                }
              }
          })

        
    ],
    callbacks: {
        async signIn({ user, account }) {
            if(account.provider === 'facebook' || account.provider === "google" || account.provider === "linkedin") {
                const {name, email, image} = user;
                const db = await connectDb();
                const userCollection = db.collection('users');
                const exist = await userCollection.findOne({email});
                if(!exist){
                    const result = await userCollection.insertOne(user);
                    return user;
                }else{
                    return user;
                }
            }else{
                return user;
            }
          },
        async jwt({token, account, user}){
            if(account){
                token.image = user.image;
            }
            return token;
        },
        async session({session, token}){
            session.user.image = token.image || session.user.image;
            return session;
        }
    },
    pages:{
        signIn: '/login',
        // signOut: '/signup',
       
    }
})

export{handler as GET, handler as POST}