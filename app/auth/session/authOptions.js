import { connectDB } from '../../../util/database';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions = {
    providers: [
        CredentialsProvider({
            // ...existing code...
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60 // 30일
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = {
                    username: user.username,
                    nickname: user.nickname,
                    id: user._id
                };
            }
            return token;
        },
        async session({ session, token }) {
            if (token?.user) {
                session.user = token.user;
            }
            return session;
        }
    },
    adapter: MongoDBAdapter(connectDB),
    secret: process.env.NEXTAUTH_SECRET
};
