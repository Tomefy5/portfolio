"use client";

import Image from "next/image";
import { ag } from "@/lib/anim";
import { portfolioData } from "@/data/portfolio";

export default function PhotoSection() {
    const { personal } = portfolioData;

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Photo Column */}
                    <ag.reveal className="relative group">
                        <div className="relative w-full max-w-md mx-auto aspect-square">
                            {/* Neon Ring Effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple opacity-50 blur-sm group-hover:blur-md transition-all duration-500" />

                            <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-white/10 bg-background/50">
                                <Image
                                    src={personal.avatar}
                                    alt={personal.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>
                    </ag.reveal>

                    {/* Bio Column */}
                    <div className="space-y-8">
                        <ag.reveal delay={0.2}>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                                Beyond the <span className="text-neon-cyan">Code</span>.
                            </h2>
                            <div className="h-1 w-20 bg-neon-purple rounded-full mb-6" />

                            <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                {personal.bio}
                            </p>

                            <div className="p-6 rounded-2xl glass-panel relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">Current Stack</h3>
                                <p className="text-gray-400 font-mono text-sm">
                                    Next.js 15 • React Server Components • TypeScript • Tailwind v4 • Three.js • OpenAI
                                </p>
                            </div>
                        </ag.reveal>

                        <ag.reveal delay={0.4}>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">5+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Years Exp.</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">20+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Projects</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Commitment</div>
                                </div>
                            </div>
                        </ag.reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
