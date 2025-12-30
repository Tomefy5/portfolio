"use client";

import { ag } from "@/lib/anim";
import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    const { personal } = portfolioData;
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        // Add real form submission logic here
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <ag.reveal>
                        <h2 className="text-5xl font-bold font-heading mb-8">
                            Let's Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
                                Something Epic.
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-lg">
                            Open for freelance projects, consulting, or just a coffee chat about AI & Web3.
                        </p>

                        <div className="space-y-6">
                            <Link href={`mailto:${personal.email}`} className="flex items-center gap-4 text-xl hover:text-neon-cyan transition-colors">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                    <Mail size={24} />
                                </div>
                                <span>{personal.email}</span>
                            </Link>

                            <div className="flex gap-4 pt-4">
                                {[
                                    { icon: Github, href: personal.social.github },
                                    { icon: Linkedin, href: personal.social.linkedin },
                                    { icon: Twitter, href: personal.social.twitter }
                                ].map((social, i) => (
                                    <Link key={i} href={social.href} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all text-gray-400 hover:text-white">
                                        <social.icon size={24} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </ag.reveal>

                    <ag.reveal delay={0.2} className="relative">
                        <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass-panel space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Name</label>
                                    <input className="w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:border-neon-cyan focus:outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Email</label>
                                    <input className="w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:border-neon-cyan focus:outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    className="w-full bg-black/20 border border-white/10 rounded-xl p-4 h-32 focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={sent}
                                className="w-full py-4 rounded-xl bg-neon-cyan text-black font-bold text-lg hover:bg-neon-cyan/90 transition-all flex items-center justify-center gap-2 group"
                            >
                                {sent ? "Message Sent!" : (
                                    <>
                                        Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </ag.reveal>
                </div>
            </div>
        </section>
    );
}
