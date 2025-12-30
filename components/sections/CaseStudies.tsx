"use client";

import { ag } from "@/lib/anim";

export default function CaseStudies() {
    return (
        <section className="py-24 bg-gradient-to-b from-transparent to-black/40">
            <div className="container mx-auto px-6">
                <ag.reveal>
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">In-Depth <span className="text-neon-cyan">Case Studies</span></h2>
                </ag.reveal>

                <div className="grid lg:grid-cols-2 gap-12">
                    {[1, 2].map((i) => (
                        <ag.reveal key={i} delay={i * 0.2}>
                            <div className="bg-background rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors">
                                <div className="text-sm font-mono text-neon-purple mb-4">CASE STUDY 0{i}</div>
                                <h3 className="text-2xl font-bold mb-4">Scaling Real-time AI Infrastucture</h3>

                                <div className="space-y-6 text-gray-400 mb-8">
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Problem</h4>
                                        <p className="text-sm">High latency in processing large-scale video streams for anomaly detection.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Solution</h4>
                                        <p className="text-sm">Implemented a distributed pipeline using Kafka and Edge Computing nodes.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-xl">
                                        <div className="text-xl font-bold text-white">40ms</div>
                                        <div className="text-xs text-gray-500">Latency</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl">
                                        <div className="text-xl font-bold text-white">99%</div>
                                        <div className="text-xs text-gray-500">Accuracy</div>
                                    </div>
                                </div>
                            </div>
                        </ag.reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
