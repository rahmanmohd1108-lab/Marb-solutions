'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface TiltCardProps {
  title: string;
  description: string;
  tags: string[];
  gradient?: string;
  link?: string;
}

export default function TiltCard({ title, description, tags, gradient = 'from-emerald-500/20 to-indigo-500/20', link = '#' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const scale = useSpring(1, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const rotateXVal = ((mouseY - centerY) / (rect.height / 2)) * -8;
    const rotateYVal = ((mouseX - centerX) / (rect.width / 2)) * 8;
    rotateX.set(rotateXVal);
    rotateY.set(rotateYVal);
    scale.set(1.02);
    setGlowPos({
      x: (mouseX / rect.width) * 100,
      y: (mouseY / rect.height) * 100,
    });
  }, [rotateX, rotateY, scale]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setIsHovered(false);
  }, [rotateX, rotateY, scale]);

  return (
    <motion.div
      ref={cardRef}
      className="group relative cursor-pointer"
      style={{
        perspective: '1000px',
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(16, 185, 129, 0.3), transparent 60%)`,
        }}
      />

      {/* Card body */}
      <div className="relative h-full rounded-xl border border-border/50 bg-card overflow-hidden transition-colors duration-300 group-hover:border-emerald-accent/30">
        {/* Gradient preview area */}
        <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
          {/* Shine/glare effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.15), transparent 60%)`,
            }}
          />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        </div>

        {/* Content */}
        <div className="p-6" style={{ transform: 'translateZ(30px)' }}>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-emerald-accent transition-colors">
              {title}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-muted-foreground group-hover:text-emerald-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1 shrink-0"
            />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-light px-3 py-1 text-xs font-medium text-emerald-accent border border-emerald-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}