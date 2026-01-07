'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/config';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: string) => {
        // Replace the current locale in the pathname
        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPathname);
    };

    return (
        <div className="flex items-center gap-1 p-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            {locales.map((l) => (
                <button
                    key={l}
                    onClick={() => handleLanguageChange(l)}
                    className={`
            relative px-3 py-1 text-xs font-bold transition-colors uppercase
            ${locale === l ? 'text-background' : 'text-gray-400 hover:text-white'}
          `}
                >
                    {locale === l && (
                        <motion.div
                            layoutId="active-locale"
                            className="absolute inset-0 bg-neon-cyan rounded-full -z-10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {l}
                </button>
            ))}
        </div>
    );
}
