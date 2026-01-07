"use client";

import { ag } from "@/lib/anim";
import { useTranslations } from 'next-intl';

export default function CaseStudies() {
    const t = useTranslations('CaseStudies');

    return (
        <section className="py-24 bg-gradient-to-b from-transparent to-black/40">
            <div className="container mx-auto px-6">
                <ag.reveal>
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">{t('title')} <span className="text-neon-cyan">{t('titleHighlight')}</span></h2>
                </ag.reveal>

                <div className="grid lg:grid-cols-2 gap-12">
                    {[1, 2].map((i) => (
                        <ag.reveal key={i} delay={i * 0.2}>
                            <div className="bg-background rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors">
                                <div className="text-sm font-mono text-neon-purple mb-4">{t('label')} 0{i}</div>
                                <h3 className="text-2xl font-bold mb-4">{t('exampleTitle')}</h3>

                                <div className="space-y-6 text-gray-400 mb-8">
                                    <div>
                                        <h4 className="text-white font-medium mb-1">{t('problem')}</h4>
                                        <p className="text-sm">{t('problemDesc')}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">{t('solution')}</h4>
                                        <p className="text-sm">{t('solutionDesc')}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-xl">
                                        <div className="text-xl font-bold text-white">40ms</div>
                                        <div className="text-xs text-gray-500">{t('latency')}</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl">
                                        <div className="text-xl font-bold text-white">99%</div>
                                        <div className="text-xs text-gray-500">{t('accuracy')}</div>
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
