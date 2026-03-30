import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Quotes,
  Heart,
  Lightbulb,
  Handshake,
  Eye,
  Crown,
  Sparkle,
  WhatsappLogo,
  CaretRight,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';

/* ================================================================
   BRAND CONSTANTS
   ================================================================ */
const GOLD = '#D4A853';
const CYAN = '#00BCD4';

/* ================================================================
   NOISE TEXTURE — reusable
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
   GOLD SPARKLES
   ================================================================ */
function GoldSparkles({ count = 12 }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: `radial-gradient(circle, rgba(212,168,83,${Math.random() * 0.5 + 0.2}) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `sparkle-float ${Math.random() * 8 + 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ================================================================
   SECTION HEADER — gold accent line + subtitle + Playfair italic
   ================================================================ */
function SectionHeader({ label, title, highlightWord, center = false, className = '' }) {
  const titleParts = highlightWord
    ? title.split(highlightWord)
    : [title];

  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      <div className={`w-12 h-[2px] bg-gold-500 mb-6 ${center ? 'mx-auto' : ''}`} />
      <p
        className="text-gold-500/60 text-xs uppercase tracking-[0.3em] mb-3"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {label}
      </p>
      <h2
        className="font-heading text-white leading-[0.95] italic"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
      >
        {highlightWord ? (
          <>
            {titleParts[0]}
            <span className="text-gold-500">{highlightWord}</span>
            {titleParts[1] || ''}
          </>
        ) : (
          title
        )}
      </h2>
    </div>
  );
}

/* ================================================================
   1. HERO — Custom dark with breadcrumbs, Playfair italic
   ================================================================ */
function AboutHero() {
  const { about, hero } = siteData;
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
      className="relative min-h-[65vh] sm:min-h-[70vh] flex items-end overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Parallax BG */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={hero.backgroundImages[2]?.url || hero.backgroundImages[0]?.url}
          alt="Sulpice event styling"
          className="w-full h-[130%] object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />
      </motion.div>

      <GoldSparkles count={10} />
      <NoiseTexture opacity={0.03} />

      {/* Vertical gold accent line */}
      <div className="absolute top-[15%] left-0 w-[2px] h-32 sm:h-40 bg-gradient-to-b from-transparent via-gold-500 to-transparent z-20" />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pb-16 sm:pb-20 pt-32"
        style={{ opacity: textOpacity }}
      >
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm">
            <li>
              <Link to="/" className="text-white/40 hover:text-white/70 transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                Home
              </Link>
            </li>
            <li><CaretRight size={12} weight="bold" className="text-gold-500/60" /></li>
            <li className="text-white/80" style={{ fontFamily: 'var(--font-sans)' }}>About</li>
          </ol>
        </motion.nav>

        {/* Gold accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="w-16 h-[2px] bg-gradient-to-r from-gold-500 to-gold-400/50 mb-6 origin-left"
        />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-6"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Our Story
        </motion.p>

        {/* Title */}
        <div className="overflow-hidden">
          {['THE SULPICE', 'STORY'].map((line, i) => (
            <motion.div
              key={line}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading leading-[0.92] tracking-tight ${
                  line === 'STORY'
                    ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 bg-clip-text text-transparent italic'
                    : 'text-white'
                }`}
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: line === 'STORY' ? 700 : 300 }}
              >
                {line}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/40 text-sm sm:text-base max-w-lg mt-6 leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {about.heroSubtitle}
        </motion.p>

        {/* Animated bottom gold line */}
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
   2. OUR STORY — split layout with image collage + gold frame
   ================================================================ */
function StorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { about, business } = siteData;

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <SectionHeader label="Our Story" title="Born From a Passion for " highlightWord="Beauty" />

            <div className="space-y-5 mt-8">
              {about.story.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className={`text-sm sm:text-base leading-relaxed ${i === 0 ? 'text-white/55' : 'text-white/35'}`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/5 my-8" />

            {/* Inline stats */}
            <div className="flex gap-10 sm:gap-16">
              {[
                { value: business.established, label: 'Founded' },
                { value: business.projectsCompleted, label: 'Events' },
                { value: '3', label: 'Countries' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <div className="text-gold-500 font-heading text-3xl sm:text-4xl italic leading-none">{stat.value}</div>
                  <div className="text-white/30 text-[10px] uppercase tracking-[0.2em] mt-2" style={{ fontFamily: 'var(--font-sans)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Image collage with gold frame + Est. badge */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              {/* Gold corner frame — top left */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold-500/30 z-20" />

              {/* Main image */}
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80"
                  alt="Sulpice wedding styling"
                  className="w-full aspect-[4/5] object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Overlapping smaller image */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[45%] overflow-hidden border-4 border-[#0A0A0A] shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&q=80"
                  alt="Floral arrangement by Sulpice"
                  className="w-full aspect-square object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Floating "Est. 2016" badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-gold-500 text-[#0A0A0A] p-5 sm:p-7 shadow-2xl z-20"
              >
                <div className="text-center">
                  <div className="text-xs uppercase tracking-[0.2em] leading-none font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>Est.</div>
                  <div className="font-heading text-3xl sm:text-4xl italic leading-none mt-1">2016</div>
                </div>
              </motion.div>

              {/* Gold corner — bottom right */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold-500/20 z-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   3. MISSION — Full-width cinematic photo + gold quote
   ================================================================ */
function MissionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      {/* Parallax BG */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85"
          alt="Sulpice grand event"
          className="w-full h-[130%] object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
      </motion.div>

      <NoiseTexture opacity={0.03} />

      <div className="relative z-20 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1 }}
        >
          {/* Gold quote marks */}
          <Quotes size={56} weight="fill" className="text-gold-500/20 mx-auto mb-8" />

          <h3
            className="text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Our Mission
          </h3>

          <p
            className="text-white font-heading text-xl sm:text-2xl lg:text-3xl italic leading-relaxed"
          >
            &ldquo;To transform every space we touch into a living work of art -- composing environments that move people emotionally, creating moments of beauty that outlive the occasion itself.&rdquo;
          </p>

          {/* Gold rule */}
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   4. VISION — Gold-bordered card on dark
   ================================================================ */
function VisionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 sm:py-32 overflow-hidden" style={{ background: '#111111' }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative border border-gold-500/20 p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Gold corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500/50" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500/50" />

          {/* Gold glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
            <div className="shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 border border-gold-500/30 flex items-center justify-center bg-gold-500/5">
                <Eye size={28} weight="light" className="text-gold-500" />
              </div>
            </div>
            <div>
              <h3
                className="text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Our Vision
              </h3>
              <p className="text-white font-heading text-lg sm:text-xl lg:text-2xl italic leading-relaxed">
                To be Southern Africa's most revered event design studio -- the name that comes to mind when people think of beauty made tangible, of spaces that speak, of moments that transcend the ordinary.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   5. VALUES — 6 cards with gold icons + number watermarks
   ================================================================ */
function ValuesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { about } = siteData;

  const valueIcons = [Sparkle, Heart, Crown, Handshake, Lightbulb, Star];

  /* Extend to 6 values if siteData only has 4 */
  const values = [
    ...about.values,
    ...(about.values.length < 6 ? [
      { title: 'Creative Courage', desc: 'We push boundaries because safe design is forgettable design. Bold choices create unforgettable moments.' },
      { title: 'Timeless Beauty', desc: 'Trends fade but beauty endures. We create designs that photograph beautifully for decades to come.' },
    ] : []),
  ].slice(0, 6);

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20"
        >
          <SectionHeader label="Our Values" title="The Pillars That " highlightWord="Guide Us" center />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {values.map((value, i) => {
            const IconComp = valueIcons[i] || Star;
            const num = String(i + 1).padStart(2, '0');

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="group relative p-6 sm:p-8 border border-white/5 hover:border-gold-500/20 transition-all duration-500 overflow-hidden"
                style={{ background: '#111111' }}
              >
                {/* Number watermark */}
                <span className="absolute top-3 right-4 text-6xl sm:text-7xl font-heading italic text-gold-500/[0.06] leading-none select-none pointer-events-none">
                  {num}
                </span>

                {/* Gold glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:border-gold-500/40 group-hover:bg-gold-500/5 transition-all duration-500">
                    <IconComp size={22} weight="light" className="text-gold-500" />
                  </div>
                  <h3 className="font-heading text-white text-base sm:text-lg italic tracking-wide mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                    {value.desc}
                  </p>
                </div>

                {/* Bottom gold accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-500 to-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   6. TEAM — elegant portrait cards, gold border bottom
   ================================================================ */
function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { about, business } = siteData;

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20"
        >
          <SectionHeader label="Our Leadership" title="The Artisans Behind " highlightWord="Sulpice" center />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {about.team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              className="group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4] mb-5">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Bio on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                    {member.bio}
                  </p>
                </div>

                {/* Bottom gold line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-500 to-gold-400 z-10" />
              </div>

              {/* Name and role */}
              <h4 className="font-heading text-white text-sm sm:text-base italic tracking-wide">
                {member.name}
              </h4>
              <p className="text-gold-500/70 text-xs uppercase tracking-[0.15em] mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   7. TIMELINE — gold connecting line, alternating milestones
   ================================================================ */
function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const milestones = [
    { year: '2016', title: 'The Beginning', desc: 'Sulpice Designs founded in Eastlea, Harare. A small floral studio with a grand vision.' },
    { year: '2017', title: 'First Major Wedding', desc: 'Styled our first 300-guest wedding, establishing our signature aesthetic of opulence with restraint.' },
    { year: '2019', title: 'Bulawayo Expansion', desc: 'Opened our second branch in Bulawayo, bringing luxury event design to Zimbabwe\'s second city.' },
    { year: '2021', title: '200th Event Milestone', desc: 'Celebrated 200 events styled. Featured in Zimbabwe\'s top lifestyle publications.' },
    { year: '2023', title: 'Johannesburg Studio', desc: 'Crossed borders into South Africa, opening our Johannesburg studio for the premium market.' },
    { year: '2024', title: '500+ Events', desc: 'Surpassed 500 events across three countries. Now one of Southern Africa\'s most sought-after studios.' },
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20"
        >
          <SectionHeader label="Our Journey" title="Key " highlightWord="Milestones" center />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gold connecting line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-500/60 via-gold-500/30 to-gold-500/10 sm:-translate-x-px" />

          <div className="space-y-10 sm:space-y-0">
            {milestones.map((milestone, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.12 * i }}
                  className={`relative flex items-start sm:items-center gap-4 sm:gap-0 ${i > 0 ? 'sm:mt-14' : ''}`}
                >
                  {/* LEFT content — desktop even */}
                  <div className={`hidden sm:block sm:w-1/2 ${isEven ? 'pr-12 text-right' : ''}`}>
                    {isEven && (
                      <div className="border border-white/5 p-6 hover:border-gold-500/20 transition-colors duration-500" style={{ background: '#111111' }}>
                        <span className="text-gold-500 font-heading text-2xl italic">{milestone.year}</span>
                        <h4 className="text-white font-heading text-lg italic mt-2 mb-2">{milestone.title}</h4>
                        <p className="text-white/35 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{milestone.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* CENTER dot — desktop */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.12 * i + 0.2 }}
                      className="w-3 h-3 bg-gold-500 shadow-lg shadow-gold-500/30"
                      style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                    />
                  </div>

                  {/* LEFT dot — mobile */}
                  <div className="sm:hidden shrink-0 z-10">
                    <div className="w-3 h-3 bg-gold-500 mt-2 ml-[18px]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                  </div>

                  {/* RIGHT content — desktop odd */}
                  <div className={`hidden sm:block sm:w-1/2 ${!isEven ? 'pl-12' : ''}`}>
                    {!isEven && (
                      <div className="border border-white/5 p-6 hover:border-gold-500/20 transition-colors duration-500" style={{ background: '#111111' }}>
                        <span className="text-gold-500 font-heading text-2xl italic">{milestone.year}</span>
                        <h4 className="text-white font-heading text-lg italic mt-2 mb-2">{milestone.title}</h4>
                        <p className="text-white/35 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{milestone.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile content */}
                  <div className="sm:hidden flex-1 ml-4">
                    <div className="border border-white/5 p-4" style={{ background: '#111111' }}>
                      <span className="text-gold-500 font-heading text-lg italic">{milestone.year}</span>
                      <h4 className="text-white font-heading text-base italic mt-1 mb-1">{milestone.title}</h4>
                      <p className="text-white/35 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{milestone.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   8. CTA — Parallax event photo
   ================================================================ */
function AboutCTA() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-48 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85"
          alt="Sulpice event design"
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
            LET'S CREATE<br />
            <span className="text-gold-500">TOGETHER</span>
          </h2>

          <p className="text-white/45 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-12 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            Every extraordinary event begins with a single conversation. Tell us about the moment you want to create.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 bg-gold-500 text-[#0A0A0A] px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Plan Your Event
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent('Hello Sulpice! I would like to discuss an upcoming event.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-[#00BCD4]/40 text-[#00BCD4] px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-[#00BCD4]/10 hover:border-[#00BCD4]/60"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <WhatsappLogo size={20} weight="fill" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   ABOUT — Assembled
   ================================================================ */
function About() {
  return (
    <PageTransition>
      <AboutHero />
      <StorySection />
      <MissionSection />
      <VisionSection />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
      <AboutCTA />
    </PageTransition>
  );
}

export default About;
