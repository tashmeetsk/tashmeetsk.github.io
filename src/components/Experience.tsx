import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { Building2, TrendingUp, Users, Handshake } from 'lucide-react';

function CountUp({ to, suffix = '', duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: 'easeOut' });
      const unsub = rounded.on('change', (v) => setDisplay(v));
      return () => {
        controls.stop();
        unsub();
      };
    }
  }, [inView, to, count, rounded, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const HIGHLIGHTS = [
  { icon: TrendingUp, label: 'Success Rate', value: 80, suffix: '%' },
  { icon: Users, label: 'KPI Increase', value: 100, suffix: '%', prefix: '50-' },
  { icon: Handshake, label: 'B2B Outreach', value: 40, suffix: '+', note: 'Clients engaged' },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-3"
        >
          The <span className="accent-gradient-text">Experience Center</span>
        </motion.h2>
        <p className="text-center text-slate-400 mb-12 max-w-xl mx-auto">
          A snapshot of my consulting internship, distilled into live dashboard metrics.
        </p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="group relative rounded-3xl glass glass-hover p-8 md:p-12 overflow-hidden"
        >
          {/* glow border on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(0,230,118,0.6), 0 0 48px rgba(0,230,118,0.20)' }}
          />

          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="grid place-items-center h-10 w-10 rounded-xl accent-gradient text-charcoal-950">
                  <Building2 className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-accent-300">AlliedVista Consulting</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Business Consultant Intern</h3>
              <p className="text-sm text-slate-400 mb-5">The Aperture Partnership</p>

              <p className="text-slate-300 leading-relaxed mb-6">
                Drove B2B client outreach and stakeholder coordination for consulting
                engagements, translating business problems into structured, data-backed
                recommendations. Partnered cross-functionally to align deliverables with
                client KPIs and accelerate decision-making.
              </p>

              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-400 shrink-0" />
                  Led B2B outreach campaigns, qualifying and engaging 40+ prospective clients.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-400 shrink-0" />
                  Coordinated stakeholders across engagements to keep deliverables on-track.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-400 shrink-0" />
                  Synthesized findings into dashboards and decks that drove measurable KPI gains.
                </li>
              </ul>
            </div>

            {/* metrics dashboard */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                  className="rounded-2xl bg-charcoal-800/60 border border-white/5 p-5"
                >
                  <div className="flex items-center gap-2 text-accent-400 mb-2">
                    <h.icon className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-wider text-slate-400">{h.label}</span>
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {'prefix' in h && (h as { prefix?: string }).prefix}
                    <CountUp to={h.value} suffix={h.suffix} />
                  </div>
                  {'note' in h && <p className="text-xs text-slate-500 mt-1">{h.note}</p>}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="rounded-2xl bg-accent-500/10 border border-accent-400/20 p-5"
              >
                <div className="flex items-center gap-2 text-accent-400 mb-2">
                  <span className="text-xs uppercase tracking-wider text-slate-400">Engagement</span>
                </div>
                <div className="text-3xl font-bold accent-gradient-text">Aperture</div>
                <p className="text-xs text-slate-500 mt-1">Partnership program</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
