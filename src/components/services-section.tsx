'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, CloudCog, Brain, Palette, GitBranch } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance web applications built with modern frameworks, optimized for speed, accessibility, and seamless user experiences across all devices.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver fluid, intuitive experiences your users will love.',
  },
  {
    icon: CloudCog,
    title: 'Cloud Solutions',
    description: 'Scalable cloud architectures on AWS, Azure, and GCP — from migration strategy to infrastructure-as-code and ongoing optimization.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent systems powered by cutting-edge ML models, NLP, computer vision, and generative AI to automate and augment your business.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Research-driven design that balances aesthetics with usability. We create interfaces that delight users and drive conversions.',
  },
  {
    icon: GitBranch,
    title: 'DevOps & CI/CD',
    description: 'Automated pipelines, container orchestration, and monitoring solutions that accelerate delivery while maintaining rock-solid reliability.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-emerald-accent uppercase tracking-widest">What We Do</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            End-to-end digital solutions tailored to your business needs, delivered with precision and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-emerald-accent/30 hover:-translate-y-1 glow-border"
            >
              <div className="mb-4 inline-flex rounded-lg bg-emerald-accent/10 p-3 text-emerald-accent transition-colors group-hover:bg-emerald-accent/20">
                <service.icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-emerald-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}