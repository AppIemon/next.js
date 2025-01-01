import { connectDB } from '../../../util/database';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: "아이디", type: "text" },
                password: { label: "비밀번호", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    console.log('Missing credentials');
                    return null;
                }
                
                try {
                    const db = (await connectDB).db('forum');
                    const user = await db.collection('users').findOne({ 
                        username: credentials.username 
                    });

                    if (!user) {
                        console.log('User not found');
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(
                        credentials.password, 
                        user.password
                    );

                    if (!passwordMatch) {
                        console.log('Password mismatch');
                        return null;
                    }

                    return {
                        id: user._id.toString(),
                        username: user.username,
                        nickname: user.nickname
                    };
                } catch (error) {
                    console.error('Authorization error:', error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/login',
    },
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
                    id: user.id
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