import { connectDB } from '@/util/database';
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');
        const postId = formData.get('postId');

        if (!file) {
            return NextResponse.json({ error: "파일이 없습니다." }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // 파일 저장 경로 설정
        const uploadDir = join(process.cwd(), 'public', 'uploads');
        const filename = `${Date.now()}-${file.name}`;
        const filepath = join(uploadDir, filename);

        // 파일 저장
        await writeFile(filepath, buffer);

        // DB에 파일 정보 저장
        const db = (await connectDB).db('forum');
        await db.collection('files').insertOne({
            filename: file.name,
            filepath: `/uploads/${filename}`,
            postId,
            uploadedAt: new Date(),
            size: file.size,
            type: file.type
        });

        return NextResponse.json({ 
            message: "파일이 업로드되었습니다.",
            filepath: `/uploads/${filename}` 
        });
    } catch (error) {
        console.error('File upload error:', error);
        return NextResponse.json({ error: "파일 업로드 중 오류가 발생했습니다." }, { status: 500 });
    }
}
