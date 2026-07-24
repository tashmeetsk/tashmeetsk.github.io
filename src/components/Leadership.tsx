import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Megaphone, Users, Radio, Calendar } from 'lucide-react';

const TIMELINE = [
  {
    icon: Users,
    title: 'Led a 10-member cross-functional team',
    detail: 'Coordinated designers, content writers, and logistics leads to execute a unified event strategy.',
  },
  {
    icon: Radio,
    title: 'Directed multi-channel campaigns',
    detail: 'Ran outreach across social, email, and on-campus channels — maximizing reach and conversion.',
  },
  {
    icon: Calendar,
    title: 'Owned PR end-to-end',
    detail: 'From messaging and press kits to on-ground engagement and post-event reporting.',
  },
];

export function Leadership() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="leadership" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-3"
        >
          Leadership & <span className="accent-gradient-text">Impact</span>
        </motion.h2>
        <p className="text-center text-slate-400 mb-12 max-w-xl mx-auto">
          PR Director, Semicon DTU — where scale met storytelling.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Big stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl glass glass-hover p-10 text-center flex flex-col items-center justify-center min-h-[300px]"
          >
            <div className="flex items-center gap-2 text-accent-400 mb-4">
              <Megaphone className="h-5 w-5" />
              <span className="text-xs uppercase tracking-widest text-slate-400">Total Registrations</span>
            </div>
            <motion.div
              whileHover={{ scale: 1.12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="text-7xl md:text-8xl font-extrabold accent-gradient-text cursor-default select-none"
            >
              900+
            </motion.div>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Registrations driven across Semicon DTU editions through targeted PR and outreach.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-accent-400/60 via-accent-400/20 to-transparent" />
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="absolute -left-8 top-1 grid place-items-center h-6 w-6 rounded-full bg-charcoal-800 border border-accent-400/40">
                  <item.icon className="h-3 w-3 text-accent-400" />
                </div>
                <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
