import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CaretRight,
  MapPin,
  X,
  CaretLeft,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';

/* ================================================================
   BRAND CONSTANTS
   ================================================================ */
const GOLD = '#D4A853';
const CYAN = '#00BCD4';

/* ================================================================
   NOISE TEXTURE
   ================================================================ */
function NoiseTexture({ opacity = 0.035 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-10"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }}
    />
  );
}

/* ================================================================
   1. HERO
   ================================================================ */
function ProjectsHero() {
  const { projects, hero } = siteData;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] sm:min-h-[65vh] flex items-end overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={hero.backgroundImages[1]?.url || hero.backgroundImages[0]?.url}
          alt="Grand event portfolio"
          className="w-full h-[130%] object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />
      </motion.div>

      <NoiseTexture opacity={0.03} />
      <div className="absolute top-[15%] left-0 w-[2px] h-32 sm:h-40 bg-gradient-to-b from-transparent via-gold-500 to-transparent z-20" />

      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pb-16 sm:pb-20 pt-32"
        style={{ opacity: textOpacity }}
      >
        <motion.nav initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm">
            <li><Link to="/" className="text-white/40 hover:text-white/70 transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>Home</Link></li>
            <li><CaretRight size={12} weight="bold" className="text-gold-500/60" /></li>
            <li className="text-white/80" style={{ fontFamily: 'var(--font-sans)' }}>Portfolio</li>
          </ol>
        </motion.nav>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="w-16 h-[2px] bg-gradient-to-r from-gold-500 to-gold-400/50 mb-6 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-6"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Selected Works
        </motion.p>

        <div className="overflow-hidden">
          {['OUR', 'PORTFOLIO'].map((line, i) => (
            <motion.div
              key={line}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading leading-[0.92] tracking-tight ${
                  line === 'PORTFOLIO'
                    ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 bg-clip-text text-transparent italic'
                    : 'text-white'
                }`}
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: line === 'PORTFOLIO' ? 700 : 300 }}
              >
                {line}
              </h1>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/40 text-sm sm:text-base max-w-lg mt-6 leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {projects.heroSubtitle}
        </motion.p>

        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-gold-500 via-gold-400 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: '40%' }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
        />
      </motion.div>
    </section>
  );
}

/* ================================================================
   2. CATEGORY FILTER + GALLERY GRID
   ================================================================ */
function ProjectGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { projects } = siteData;

  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  /* Extract unique categories */
  const categories = ['All', ...Array.from(new Set(projects.items.map((p) => p.category)))];

  const filteredProjects = activeFilter === 'All'
    ? projects.items
    : projects.items.filter((p) => p.category === activeFilter);

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header + Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div>
              <div className="w-12 h-[2px] bg-gold-500 mb-6" />
              <p className="text-gold-500/60 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Browse Projects</p>
              <h2
                className="font-heading text-white leading-[0.95] italic"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                Extraordinary <span className="text-gold-500">Transformations</span>
              </h2>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 border ${
                    activeFilter === cat
                      ? 'bg-gold-500 text-[#0A0A0A] border-gold-500'
                      : 'border-white/10 text-white/40 hover:border-gold-500/30 hover:text-gold-500'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              /* Vary aspect ratios for masonry-like feel */
              const isLarge = i === 0 || i === 4 || i === 7;

              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.4) }}
                  className={`group relative cursor-pointer overflow-hidden ${
                    isLarge ? 'sm:row-span-2' : ''
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={`overflow-hidden relative ${isLarge ? 'aspect-[3/5]' : 'aspect-[4/3]'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/50 transition-colors duration-500" />

                    {/* Cyan glow border on hover */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00BCD4]/30 transition-colors duration-500 z-10" />

                    {/* Gold category badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className="bg-gold-500/90 text-[#0A0A0A] text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-semibold"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent z-10">
                      <h3 className="text-white font-heading text-lg sm:text-xl italic tracking-wide mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-white/30">
                        <MapPin size={12} weight="light" className="text-gold-500/60" />
                        <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>
                          {project.location}
                        </span>
                      </div>
                    </div>

                    {/* Hover explore indicator */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <div className="flex items-center gap-2 text-gold-500">
                        <span className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-sans)' }}>View Project</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Bottom gold line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-500 to-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-10" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox / Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ================================================================
   PROJECT MODAL — detail overlay
   ================================================================ */
function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-sm" />

      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
        style={{ background: '#111111', scrollbarWidth: 'thin', scrollbarColor: `${GOLD}40 transparent` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-500 hover:border-gold-500/30 transition-colors"
          style={{ background: '#111111' }}
        >
          <X size={18} />
        </button>

        {/* Hero image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

          {/* Category badge */}
          <div className="absolute top-5 left-5">
            <span
              className="bg-gold-500/90 text-[#0A0A0A] text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-semibold"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10">
          <div className="w-12 h-[2px] bg-gold-500 mb-6" />

          <h2 className="font-heading text-white text-2xl sm:text-3xl italic tracking-wide mb-2">
            {project.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5 text-white/30">
              <MapPin size={14} weight="light" className="text-gold-500/60" />
              <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>{project.location}</span>
            </div>
            {project.client && (
              <span className="text-white/20 text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>
                {project.client}
              </span>
            )}
          </div>

          <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
            {project.desc}
          </p>

          {/* Services tags */}
          {project.services && project.services.length > 0 && (
            <div className="mb-8">
              <h4 className="text-gold-500/60 text-xs uppercase tracking-[0.2em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Services Provided</h4>
              <div className="flex flex-wrap gap-2">
                {project.services.map((svc) => (
                  <span
                    key={svc}
                    className="border border-gold-500/20 text-gold-500/70 px-3 py-1.5 text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {svc}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Additional images */}
          {project.images && project.images.length > 1 && (
            <div className="grid grid-cols-2 gap-3 mb-8">
              {project.images.map((img, i) => (
                <div key={i} className="overflow-hidden aspect-[4/3]">
                  <img
                    src={img}
                    alt={`${project.title} detail ${i + 1}`}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
            <Link
              to="/contact"
              onClick={onClose}
              className="group inline-flex items-center gap-3 bg-gold-500 text-[#0A0A0A] px-6 py-3 text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-gold-400"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Plan Something Similar
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              onClick={onClose}
              className="group inline-flex items-center gap-3 border border-white/10 text-white/40 px-6 py-3 text-xs uppercase tracking-[0.15em] font-semibold hover:border-white/20 hover:text-white/60 transition-all duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <CaretLeft size={14} />
              Back to Portfolio
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================
   3. PORTFOLIO CTA
   ================================================================ */
function PortfolioCTA() {
  const { business } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1920&q=85"
          alt="Sulpice event"
          className="w-full h-[130%] object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
      </motion.div>

      <NoiseTexture opacity={0.03} />

      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1 }}
        >
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mb-8" />

          <h2
            className="font-heading text-white leading-[0.92] italic mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            YOUR EVENT<br />
            <span className="text-gold-500">COULD BE NEXT</span>
          </h2>

          <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-12 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            Let us create something extraordinary together. Every masterpiece in this portfolio started with a single conversation.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-gold-500 text-[#0A0A0A] px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Start Planning
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   PROJECTS — Assembled
   ================================================================ */
function Projects() {
  return (
    <PageTransition>
      <ProjectsHero />
      <ProjectGallery />
      <PortfolioCTA />
    </PageTransition>
  );
}

export default Projects;
