import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';

const EMAIL = 'tashmeetkatara@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/tashmeet-singh-katara-24b6b93ba/';
const GITHUB = 'https://github.com/tashmeetsk';

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer id="contact" className="relative px-6 py-20">
      <div className="mx-auto max-w-3xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-3"
        >
          Let's <span className="accent-gradient-text">Connect</span>
        </motion.h2>
        <p className="text-center text-slate-400 mb-10 max-w-md mx-auto">
          Have a project, role, or idea worth exploring? My inbox is always open.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="rounded-3xl glass glass-hover p-8 flex flex-col items-center gap-6"
        >
          {/* copy email button */}
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-charcoal-800/70 border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 hover:border-accent-400/50 transition-colors"
          >
            <Mail className="h-4 w-4 text-accent-400" />
            <span className="font-body">{EMAIL}</span>
            {copied ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center gap-1 text-accent-400 font-semibold"
              >
                <Check className="h-4 w-4" />
                Copied!
              </motion.span>
            ) : (
              <Copy className="h-4 w-4 text-slate-400 group-hover:text-accent-400 transition-colors" />
            )}
          </button>

          {/* social links */}
          <div className="flex items-center gap-4">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center h-12 w-12 rounded-xl glass glass-hover text-slate-300 hover:text-accent-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center h-12 w-12 rounded-xl glass glass-hover text-slate-300 hover:text-accent-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="grid place-items-center h-12 w-12 rounded-xl glass glass-hover text-slate-300 hover:text-accent-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-xs text-slate-500">
          Tashmeet Singh Katara — Built with React, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
