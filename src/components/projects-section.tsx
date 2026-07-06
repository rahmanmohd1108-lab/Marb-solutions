'use client';

import { motion } from 'framer-motion';
import TiltCard from '@/components/tilt-card';

const projects = [
  {
    title: 'FinFlow Dashboard',
    description: 'A real-time financial analytics platform with interactive charts, portfolio tracking, and predictive market insights for institutional investors.',
    tags: ['React', 'TypeScript', 'D3.js'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'HealthSync',
    description: 'A comprehensive telemedicine platform enabling video consultations, health tracking, prescription management, and integration with wearable devices.',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'RetailGenius',
    description: 'AI-powered retail analytics engine that delivers demand forecasting, customer segmentation, and dynamic pricing recommendations in real time.',
    tags: ['Python', 'TensorFlow', 'AWS'],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'CloudVault',
    description: 'Enterprise-grade cloud storage solution with end-to-end encryption, granular access controls, and seamless collaboration features for teams.',
    tags: ['Go', 'Kubernetes', 'gRPC'],
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'EduConnect',
    description: 'A modern learning management system with live classes via WebRTC, AI-assisted grading, progress analytics, and interactive course authoring.',
    tags: ['Next.js', 'PostgreSQL', 'WebRTC'],
    gradient: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    title: 'LogiTrack',
    description: 'End-to-end supply chain visibility platform with GPS tracking, automated inventory management, and predictive logistics optimization.',
    tags: ['Vue.js', 'Django', 'Redis'],
    gradient: 'from-yellow-500/20 to-amber-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-emerald-accent uppercase tracking-widest">Portfolio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            A selection of impactful projects we&apos;ve delivered across industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <TiltCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                gradient={project.gradient}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}