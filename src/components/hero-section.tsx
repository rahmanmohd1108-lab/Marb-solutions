'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 12, suffix: '+', label: 'Years Experience' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-emerald-accent/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-[20%] w-4 h-4 rounded-full bg-emerald-accent/30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-[15%] w-3 h-3 rounded-sm bg-indigo-500/30 rotate-45 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[60%] left-[70%] w-2 h-2 rounded-full bg-emerald-accent/40 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-accent/20 bg-emerald-accent/5 px-4 py-1.5 text-sm text-emerald-accent">
            <span className="h-2 w-2 rounded-full bg-emerald-accent animate-pulse" />
            Trusted by enterprises worldwide
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          Transforming Ideas Into{' '}
          <span className="gradient-text">Digital Reality</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12"
        >
          We build scalable, innovative digital solutions that propel enterprises into the future.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#services"
            className="inline-flex items-center rounded-full bg-emerald-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-emerald-accent/25 hover:scale-105 active:scale-95"
          >
            Explore Services
          </a>
          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-surface hover:border-emerald-accent/30 hover:scale-105 active:scale-95"
          >
            View Projects
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}