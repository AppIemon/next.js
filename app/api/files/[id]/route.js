import { connectDB } from '../../../util/database';
import { ObjectId } from 'mongodb';
import { writeFile, mkdir, unlink } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { NextResponse } from 'next/server';

// 파일 목록 조회 (GET)
export async function GET(request, { params }) {
    try {
        const db = (await connectDB()).db('forum');
        const files = await db.collection('files')
            .find({ postId: params.id })
            .project({
                _id: 1,
                filename: 1,
                filepath: 1,
                size: 1,
                uploadedAt: 1
            })
            .toArray();

        return NextResponse.json(files);
    } catch (error) {
        console.error('Files fetch error:', error);
        return NextResponse.json(
            { error: "파일 목록을 가져오는 중 오류가 발생했습니다." }, 
            { status: 500 }
        );
    }
}

// 파일 업로드 (POST)
export async function POST(request, { params }) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json({ error: "파일이 없습니다." }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // 업로드 디렉토리 생성
        const uploadDir = join(process.cwd(), 'public', 'uploads');
        if (!existsSync(uploadDir)) {
            await mkdir(uploadDir, { recursive: true });
        }

        // 안전한 파일명 생성
        const safeFileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
        const filepath = join(uploadDir, safeFileName);

        // 파일 저장
        await writeFile(filepath, buffer);

        // MongoDB에 파일 정보 저장
        const db = (await connectDB()).db('forum');
        const result = await db.collection('files').insertOne({
            filename: file.name,
            filepath: `/uploads/${safeFileName}`,
            postId: params.id,
            uploadedAt: new Date(),
            size: file.size,
            type: file.type
        });

        return NextResponse.json({ 
            message: "파일이 업로드되었습니다.",
            filepath: `/uploads/${safeFileName}`,
            fileId: result.insertedId
        });
    } catch (error) {
        console.error('File upload error:', error);
        return NextResponse.json({ error: "파일 업로드 중 오류가 발생했습니다." }, { status: 500 });
    }
}

// 파일 삭제 (DELETE)
export async function DELETE(request, { params }) {
    try {
        const db = (await connectDB()).db('forum');
        
        // ID가 ObjectId 형식인 경우 파일 ID로 처리, 아닌 경우 postId로 처리
        const query = ObjectId.isValid(params.id) 
            ? { _id: new ObjectId(params.id) }
            : { postId: params.id };

        // 파일 정보 조회
        const file = await db.collection('files').findOne(query);

        if (!file) {
            return NextResponse.json({ error: "파일을 찾을 수 없습니다." }, { status: 404 });
        }

        // DB에서 파일 정보 삭제
        await db.collection('files').deleteOne(query);

        // 실제 파일 삭제
        const filepath = join(process.cwd(), 'public', file.filepath);
        await unlink(filepath).catch(console.error);

        return NextResponse.json({ message: "파일이 삭제되었습니다." });
    } catch (error) {
        console.error('File delete error:', error);
        return NextResponse.json({ error: "파일 삭제 중 오류가 발생했습니다." }, { status: 500 });
    }
}
