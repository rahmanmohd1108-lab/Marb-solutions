'use client';

import { motion } from 'framer-motion';
import { Code2, Cloud, Brain, Shield, Zap, Users } from 'lucide-react';

const capabilities = [
  { icon: Code2, label: 'Full-Stack Dev' },
  { icon: Cloud, label: 'Cloud Native' },
  { icon: Brain, label: 'AI & ML' },
  { icon: Shield, label: 'Cybersecurity' },
  { icon: Zap, label: 'Performance' },
  { icon: Users, label: 'UX Design' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-emerald-accent uppercase tracking-widest">About Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            About <span className="gradient-text">MARB Solutions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              We Engineer <span className="text-emerald-accent">Digital Excellence</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At MARB Solutions, we are committed to empowering enterprises with digital solutions that drive real business outcomes. Founded by a team of seasoned technologists and strategic thinkers, we bring together deep technical expertise with a thorough understanding of modern business challenges.
              </p>
              <p>
                Our approach is holistic — we don&apos;t just write code. We partner with our clients from initial strategy and discovery through design, development, testing, and long-term support. Every solution we deliver is architected for scalability, security, and performance from day one.
              </p>
              <p>
                Whether you need a customer-facing platform, an internal workflow automation system, an AI-powered analytics engine, or a complete cloud migration, MARB Solutions has the experience and the passion to make it happen. We turn complex challenges into elegant, reliable software.
              </p>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-2xl border border-border/50 bg-card p-8 glow-border">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-accent/5 rounded-full blur-2xl" />
              <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-4">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-surface p-4 text-center transition-all hover:border-emerald-accent/30 hover:bg-surface-light"
                  >
                    <cap.icon size={24} className="text-emerald-accent" />
                    <span className="text-xs font-medium text-foreground">{cap.label}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-surface/50 border border-border/50 p-4 font-mono text-xs text-muted-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/60" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <span className="h-3 w-3 rounded-full bg-emerald-accent/60" />
                </div>
                <div>
                  <span className="text-indigo-400">const</span>{' '}
                  <span className="text-emerald-accent">solution</span> ={' '}
                  <span className="text-yellow-400">await</span>{' '}
                  <span className="text-blue-400">MARB</span>.<span className="text-emerald-accent">build</span>({'{'}
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground">innovation: </span>
                  <span className="text-emerald-accent">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground">scalability: </span>
                  <span className="text-emerald-accent">&quot;infinite&quot;</span>,
                </div>
                <div>{'}'})</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}