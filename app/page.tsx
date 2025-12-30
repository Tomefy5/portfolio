import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import PhotoSection from "@/components/sections/PhotoSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CaseStudies from "@/components/sections/CaseStudies";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import ThreeBackground from "@/components/ui/3d-background";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-neon-preview">
      <ThreeBackground />
      <Navbar />

      <div className="flex flex-col gap-0">
        <Hero />
        <PhotoSection />
        <FeaturedProjects />
        <CaseStudies />
        <Skills />
        <Contact />
      </div>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 relative z-10 glass-panel">
        <p>&copy; {new Date().getFullYear()} {"{NAME}"}. Built with Next.js & Antigravity.</p>
      </footer>
    </main>
  );
}
