import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Mail } from 'lucide-react';

const ROLES = ['Business Consultant', 'Data Storyteller', 'AI Solutions Architect'];

function useTypingCycle(words: string[], typeSpeed = 90, deleteSpeed = 45, pause = 1600) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypingCycle(ROLES);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        {/* AVATAR SLOT — hidden until you add a headshot.
            To enable: drop an image file (e.g. src/assets/headshot.jpg) and
            import it, then replace the div below with:
            <img src={headshot} alt="Tashmeet Singh Katara" className="h-32 w-32 rounded-full object-cover ring-2 ring-accent-400/50 shadow-glow" />
            The layout already reserves the space, so enabling it won't shift anything. */}
        <div className="hidden" aria-hidden="true" />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-accent-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
          Available for opportunities
        </motion.span>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gradient leading-[1.2] pb-2">
          Tashmeet Singh Katara
        </h1>

        <div className="mt-5 h-9 md:h-10 flex items-center">
          <span className="text-xl md:text-2xl font-medium text-slate-300">
            {typed}
            <span className="ml-0.5 inline-block w-[2px] h-6 md:h-7 bg-accent-400 animate-pulse align-middle" />
          </span>
        </div>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed">
          Turning raw data into decisions, and decisions into impact. I build dashboards,
          automate workflows, and architect AI solutions that move the needle.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-3"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group inline-flex items-center gap-2 rounded-xl accent-gradient px-6 py-3 text-sm font-bold text-gray-900 shadow-glow transition-transform hover:scale-105 active:scale-95"
          >
            View My Dashboards
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="group inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-3 text-sm font-semibold text-slate-200"
          >
            <Mail className="h-4 w-4 text-accent-400" />
            Let's Connect
          </button>
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-3 text-sm font-semibold text-slate-200"
          >
            <Download className="h-4 w-4 text-accent-400" />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 text-xs tracking-widest uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
