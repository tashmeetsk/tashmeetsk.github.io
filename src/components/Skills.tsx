import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, BarChart3, Cpu } from 'lucide-react';

const GROUPS = [
  {
    name: 'Consulting',
    icon: Briefcase,
    color: 'from-accent-400/20 to-accent-600/10',
    skills: ['Power BI', 'SQL', 'Excel'],
  },
  {
    name: 'Tech / AI',
    icon: Cpu,
    color: 'from-accent-400/20 to-accent-500/10',
    skills: ['LLMs', 'Prompt Engineering', 'Python', 'MongoDB'],
  },
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-3"
        >
          Skills & <span className="accent-gradient-text">Tech Stack</span>
        </motion.h2>
        <p className="text-center text-slate-400 mb-12 max-w-xl mx-auto">
          A heads-up display of the tools and capabilities I bring to the table.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.15, duration: 0.5 }}
              className="relative rounded-3xl glass glass-hover p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br ${group.color} text-accent-400`}>
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{group.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + gi * 0.1 + si * 0.08, duration: 0.4 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="cursor-default rounded-xl bg-charcoal-800/70 border border-white/10 px-3.5 py-2 text-sm font-medium text-slate-200 hover:border-accent-400/50 hover:text-accent-300 transition-colors animate-float"
                    style={{ animationDelay: `${si * 0.5}s` }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
