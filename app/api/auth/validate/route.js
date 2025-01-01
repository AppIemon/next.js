import { NextResponse } from 'next/server';
import { validateAuth } from '../middleware';

export async function GET(request) {
    const validation = await validateAuth(request);
    
    if (!validation.isValid) {
        return NextResponse.json({ 
            isValid: false, 
            message: validation.message 
        }, { status: 401 });
    }

    return NextResponse.json({
        isValid: true,
        user: validation.user
    });
}
