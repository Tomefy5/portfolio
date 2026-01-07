import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const lowerMsg = message.toLowerCase();

        let reply = "";

        if (lowerMsg.includes('tech stack') || lowerMsg.includes('technologies')) {
            reply = "My tech stack includes Next.js, React, TypeScript, Tailwind CSS, and Node.js. For AI features, I use OpenAI's API or Claude, and Supabase for data storage.";
        } else if (lowerMsg.includes('antoka')) {
            reply = "Antoka is an AI LegalTech project I worked on. It aims to simplify legal processes using artificial intelligence.";
        } else if (lowerMsg.includes('haylalàna') || lowerMsg.includes('haylalana')) {
            reply = "Haylalàna is another LegalTech initiative I've developed, focusing on accessibility to legal resources.";
        } else if (lowerMsg.includes('nanovec')) {
            reply = "Nanovec is a Rust-based Vector Database I built. It demonstrates my skills in systems programming and performance optimization.";
        } else if (lowerMsg.includes('experience') || lowerMsg.includes('work')) {
            reply = "I have extensive experience in Full-Stack development, specializing in modern web technologies and AI integration. I've built SaaS products, portfolio sites, and complex web applications.";
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('hire') || lowerMsg.includes('email')) {
            reply = "You can contact me via the contact form on this website, or reach out through my social media profiles listed in the footer!";
        } else {
            reply = "I'm an AI assistant trained to answer questions about Tomefy5's projects and skills. You can ask me about his tech stack, specific projects like Antoka or Nanovec, or his experience!";
        }

        return NextResponse.json({ reply });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
