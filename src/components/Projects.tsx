import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, TrafficCone, Bot, Database, Brain, Cpu, Code2 } from 'lucide-react';

type Category = 'All' | 'Data & Dashboards' | 'AI & Automation';

const FILTERS: Category[] = ['All', 'Data & Dashboards', 'AI & Automation'];

const PROJECTS = [
  {
    id: 'recruitiq',
    title: 'RecruitIQ',
    category: 'Data & Dashboards' as const,
    span: 'md:col-span-2 md:row-span-2',
    icon: BarChart3,
    tags: ['SQL', 'Power BI', 'AI Algorithm'],
    description:
      'A recruitment analytics platform that turns hiring pipelines into actionable insight — from SQL schema design to Power BI dashboards and an AI scoring algorithm.',
  },
  {
    id: 'traffic',
    title: 'Smart Traffic System',
    category: 'AI & Automation' as const,
    span: 'md:col-span-2',
    icon: TrafficCone,
    tags: ['Computer Vision', 'Process Optimization'],
    description:
      'A computer-vision-driven traffic optimizer that models vehicle flow in real time and adjusts signal timing to reduce congestion.',
  },
  {
    id: 'telegram',
    title: 'Telegram Math Bot',
    category: 'AI & Automation' as const,
    span: 'md:col-span-2',
    icon: Bot,
    tags: ['Python', 'Selenium', 'Scraping'],
    description:
      'An automated Telegram bot that scrapes and solves math problems end-to-end using Python and Selenium, delivering instant answers to users.',
  },
];

function ChartMockup() {
  return (
    <div className="relative h-44 md:h-56 w-full rounded-2xl bg-charcoal-900/80 border border-white/5 p-4 overflow-hidden">
      <div className="flex items-end justify-between h-full gap-2">
        {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }}
            className="flex-1 rounded-t-md accent-gradient opacity-80"
          />
        ))}
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] text-accent-300">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
        LIVE
      </div>
      <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[9px] text-slate-500">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>
    </div>
  );
}

function TrafficAnimation() {
  return (
    <div className="relative h-44 md:h-56 w-full rounded-2xl bg-charcoal-900/80 border border-white/5 overflow-hidden">
      {[0, 1, 2].map((lane) => (
        <div key={lane} className="absolute left-0 right-0" style={{ top: `${25 + lane * 22}%` }}>
          <div className="relative h-0.5 bg-white/5">
            {[0, 1, 2, 3, 4].map((dot) => (
              <motion.div
                key={dot}
                className="absolute h-2 w-2 rounded-full bg-accent-400 shadow-glow"
                style={{ top: '-3.5px' }}
                initial={{ left: '-5%' }}
                animate={{ left: '105%' }}
                transition={{
                  duration: 2.5 + lane * 0.4,
                  repeat: Infinity,
                  delay: dot * 0.6 + lane * 0.3,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal-950/40" />
    </div>
  );
}

function BotMockup() {
  return (
    <div className="relative h-44 md:h-56 w-full rounded-2xl bg-charcoal-900/80 border border-white/5 p-4 overflow-hidden flex flex-col justify-center gap-3">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="self-start rounded-2xl rounded-tl-sm bg-charcoal-700 px-3 py-2 text-xs text-slate-300"
      >
        Solve: ∫(2x + 3)dx
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="self-end rounded-2xl rounded-tr-sm accent-gradient px-3 py-2 text-xs font-medium text-charcoal-950"
      >
        x² + 3x + C ✓
      </motion.div>
      <div className="flex items-center gap-2 text-[10px] text-slate-500">
        <Cpu className="h-3 w-3 text-accent-400" />
        <span>Selenium scraping…</span>
        <span className="h-1 w-1 rounded-full bg-accent-400 animate-pulse" />
      </div>
    </div>
  );
}

const MOCKUPS: Record<string, () => JSX.Element> = {
  recruitiq: ChartMockup,
  traffic: TrafficAnimation,
  telegram: BotMockup,
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  recruitiq: Database,
  traffic: Brain,
  telegram: Code2,
};

export function Projects() {
  const [filter, setFilter] = useState<Category>('All');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const visible = PROJECTS.filter((p) => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-3"
        >
          Project <span className="accent-gradient-text">Gallery</span>
        </motion.h2>
        <p className="text-center text-slate-400 mb-10 max-w-xl mx-auto">
          A curated bento box of work — filter by what interests you.
        </p>

        {/* filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f ? 'text-charcoal-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full accent-gradient"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>

        {/* bento grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(220px,auto)]">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => {
              const Mockup = MOCKUPS[project.id];
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative rounded-3xl glass glass-hover p-6 flex flex-col ${project.span}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="grid place-items-center h-10 w-10 rounded-xl bg-accent-500/15 text-accent-400">
                      <project.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <span className="ml-auto text-[10px] uppercase tracking-wider text-slate-500 border border-white/10 rounded-full px-2 py-0.5">
                      {project.category}
                    </span>
                  </div>

                  {Mockup && <Mockup />}

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => {
                      const Icon = ICONS[project.id];
                      return (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-charcoal-700/50 border border-white/5 px-2.5 py-1 text-xs text-slate-300"
                        >
                          {Icon && <Icon className="h-3 w-3 text-accent-400" />}
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
