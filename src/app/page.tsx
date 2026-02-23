import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-main text-text-main font-sans selection:bg-primary/20 selection:text-primary">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-24">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </main>
  );
}
