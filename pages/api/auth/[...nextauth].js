import {PrismaAdapter} from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import prisma from '@/lib/prisma'

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    adapter: PrismaAdapter(prisma),
    theme:{
        colorScheme:'auto',
        brandColor:'#34c3eb',
        buttonText:'#bd34eb'
    }
})