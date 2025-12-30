"use client";

import { ag } from "@/lib/anim";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function FeaturedProjects() {
    const { projects } = portfolioData;
    const [filter, setFilter] = useState("All");

    const categories = ["All", "AI", "Blockchain", "IoT"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter || (p.category === "Data" && filter === "AI")); // Group Data with AI for simplicity

    return (
        <section id="projects" className="py-24 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <ag.reveal>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading">
                            Featured <span className="text-neon-purple">Work</span>
                        </h2>
                    </ag.reveal>

                    <ag.reveal delay={0.2} className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                                    filter === cat
                                        ? "bg-neon-preview bg-white text-black shadow-lg"
                                        : "text-gray-400 hover:text-white"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </ag.reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ag.reveal key={project.id} delay={index * 0.1}>
                            <ag.hoverFloat>
                                <div className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-neon-cyan/50 transition-colors h-full flex flex-col">
                                    {/* Decorative Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

                                    <div className="p-8 relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-mono uppercase tracking-wider">
                                                {project.category}
                                            </div>

                                            <div className="flex gap-4">
                                                <Link href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                                                    <Github size={20} />
                                                </Link>
                                                <Link href={project.links.demo} className="text-gray-400 hover:text-white transition-colors">
                                                    <ExternalLink size={20} />
                                                </Link>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-400 mb-6 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="space-y-4">
                                            {project.metrics && (
                                                <div className="flex items-center gap-4 py-3 border-y border-white/5">
                                                    <div className="text-2xl font-bold text-accent-green">{project.metrics.value}</div>
                                                    <div className="text-sm text-gray-500">{project.metrics.label}</div>
                                                </div>
                                            )}

                                            <div className="flex flex-wrap gap-2">
                                                {project.stack.map(tech => (
                                                    <span key={tech} className="text-xs text-gray-500">
                                                        #{tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ag.hoverFloat>
                        </ag.reveal>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <ag.reveal delay={0.4}>
                        <Link href="#" className="inline-flex items-center gap-2 text-neon-cyan hover:underline underline-offset-4">
                            View Archieved Projects <ArrowUpRight size={16} />
                        </Link>
                    </ag.reveal>
                </div>
            </div>
        </section>
    );
}
