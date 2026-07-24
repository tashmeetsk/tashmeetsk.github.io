import { GradientBackground } from '@/components/GradientBackground';
import { CursorTrail } from '@/components/CursorTrail';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Leadership } from '@/components/Leadership';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';

function App() {
  return (
    <>
      <GradientBackground />
      <CursorTrail />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
