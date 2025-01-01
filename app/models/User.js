import { connectDB } from '../util/database';
import { hash } from 'bcrypt';

export async function createUser(userData) {
    const { username, password, nickname } = userData;
    const hashedPassword = await hash(password, 10);
    
    const db = (await connectDB).db('forum');
    const existingUser = await db.collection('users').findOne({ username });
    
    if (existingUser) {
        throw new Error('이미 존재하는 사용자명입니다');
    }
    
    return await db.collection('users').insertOne({
        username,
        password: hashedPassword,
        nickname,
        createdAt: new Date()
    });
}
