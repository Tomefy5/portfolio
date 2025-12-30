"use client";

import { ag } from "@/lib/anim";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
    const { personal } = portfolioData;

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-6 text-center z-10">
                <ag.reveal>
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-sm font-medium tracking-wide mx-auto">
                        Available for new opportunities
                    </div>
                </ag.reveal>

                <ag.reveal delay={0.2}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight">
                        I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-glow">Future-Ready</span>
                        <br />
                        Digital Experiences.
                    </h1>
                </ag.reveal>

                <ag.reveal delay={0.4}>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {personal.title}. Specializing in high-performance web applications, 3D interfaces, and AI integration.
                    </p>
                </ag.reveal>

                <ag.reveal delay={0.6}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-white text-background font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-medium text-lg backdrop-blur-sm"
                        >
                            Contact Me
                        </Link>
                    </div>
                </ag.reveal>
            </div>

            <ag.reveal delay={1} className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="text-gray-500" size={32} />
            </ag.reveal>
        </section>
    );
}
