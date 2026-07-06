'use client';

import MagneticNav from '@/components/magnetic-nav';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import FooterSection from '@/components/footer-section';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MagneticNav />
      <main className="flex-1 pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}