import { NextResponse } from 'next/server';
import { translateMessages } from '@/lib/translate-ai';

export async function POST(req: Request) {
    try {
        const { source, target } = await req.json();

        if (!source || !target) {
            return NextResponse.json({ error: 'Source and target locales are required' }, { status: 400 });
        }

        const result = await translateMessages(source, target);

        return NextResponse.json({ success: true, result });
    } catch (error: any) {
        console.error('Translation Error:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
