"use client";

import { ag } from "@/lib/anim";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-background pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ag.reveal>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16 text-center">
                        Technical <span className="text-neon-cyan">Arsenal</span>
                    </h2>
                </ag.reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((category, index) => (
                        <ag.reveal key={category.category} delay={index * 0.1}>
                            <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-colors">
                                <h3 className="text-xl font-bold mb-6 text-neon-cyan">{category.category}</h3>
                                <div className="space-y-3">
                                    {category.items.map((skill) => (
                                        <div key={skill} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                                            <span className="text-gray-300">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ag.reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
