import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get('image');
        
        if (!file) {
            return NextResponse.json({ message: '이미지를 선택해주세요.' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // 파일 이름 생성 (timestamp + 원본파일명)
        const timestamp = Date.now();
        const originalName = file.name;
        const filename = `${timestamp}-${originalName}`;

        // public/images 폴더에 저장
        const filepath = path.join(process.cwd(), 'public/images', filename);
        await writeFile(filepath, buffer);

        return NextResponse.json({ 
            message: '업로드 성공',
            url: `/images/${filename}`
        });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ message: '업로드 실패' }, { status: 500 });
    }
}
