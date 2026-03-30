import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CaretRight,
  CaretDown,
  Briefcase,
  MapPin,
  Heart,
  Star,
  Leaf,
  Lightbulb,
  Users,
  Rocket,
  WhatsappLogo,
  PaperPlaneTilt,
  Clock,
} from '@phosphor-icons/react';
import { toast } from 'sonner';
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
function CareersHero() {
  const { careers, hero } = siteData;
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
          src={hero.backgroundImages[2]?.url || hero.backgroundImages[0]?.url}
          alt="Creative studio environment"
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
            <li className="text-white/80" style={{ fontFamily: 'var(--font-sans)' }}>Careers</li>
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
          Work With Us
        </motion.p>

        <div className="overflow-hidden">
          {['JOIN THE', 'STUDIO'].map((line, i) => (
            <motion.div
              key={line}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading leading-[0.92] tracking-tight ${
                  line === 'STUDIO'
                    ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 bg-clip-text text-transparent italic'
                    : 'text-white'
                }`}
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: line === 'STUDIO' ? 700 : 300 }}
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
          {careers.heroSubtitle}
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
   2. CULTURE SECTION — image + culture items
   ================================================================ */
function CultureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const culturePoints = [
    { title: 'Creativity Is Our Currency', desc: 'Every team member is a creative contributor. Ideas can come from anywhere, and the best ideas always win.' },
    { title: 'Obsessive Excellence', desc: 'Good enough is never good enough. We push every detail until it sings.' },
    { title: 'Family First', desc: 'We work hard and celebrate harder. The Sulpice team is a family that supports each other on and off the floor.' },
    { title: 'Growth Always', desc: 'We invest in our people with training, mentorship, and opportunities to lead. Your growth is our growth.' },
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image with gold accent */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1459501462159-97d5bded1416?w=800&q=80"
                alt="Sulpice creative studio"
                className="w-full aspect-[4/5] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold-500/30" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-gold-500/30" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-5 -right-5 bg-gold-500 text-[#0A0A0A] p-5 shadow-2xl z-10"
              >
                <div className="text-center">
                  <div className="font-heading text-2xl italic leading-none">20+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] mt-1 font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>Team</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Culture items */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="w-12 h-[2px] bg-gold-500 mb-6" />
            <p className="text-gold-500/60 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Our Culture</p>
            <h2
              className="font-heading text-white leading-[0.95] italic mb-10"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
            >
              What Makes <span className="text-gold-500">Sulpice</span> Different
            </h2>

            <div className="space-y-6">
              {culturePoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 border border-gold-500/30 flex items-center justify-center bg-gold-500/5">
                      <span className="text-gold-500 text-xs font-bold" style={{ fontFamily: 'var(--font-sans)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading text-white text-base sm:text-lg italic tracking-wide mb-1">
                      {point.title}
                    </h4>
                    <p className="text-white/35 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   3. BENEFITS — grid with gold/cyan alternating icons
   ================================================================ */
function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const benefits = [
    { title: 'Creative Freedom', desc: 'Express your artistry on real, high-profile events.', icon: Lightbulb, accent: 'gold' },
    { title: 'Multi-City Experience', desc: 'Work across Harare, Bulawayo, and Johannesburg.', icon: MapPin, accent: 'cyan' },
    { title: 'Training & Growth', desc: 'Regular workshops, mentorship programs, and career development.', icon: Rocket, accent: 'gold' },
    { title: 'Team Events', desc: 'Monthly celebrations, team retreats, and creative workshops.', icon: Heart, accent: 'cyan' },
    { title: 'Industry Network', desc: 'Connect with the best venues, vendors, and creatives in Southern Africa.', icon: Users, accent: 'gold' },
    { title: 'Flexible Schedule', desc: 'We know events happen on weekends -- we balance with flexible weekday schedules.', icon: Clock, accent: 'cyan' },
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32 overflow-hidden" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="w-12 h-[2px] bg-gold-500 mx-auto mb-6" />
          <p className="text-gold-500/60 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Why Join Us</p>
          <h2
            className="font-heading text-white leading-[0.95] italic"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            The <span className="text-gold-500">Benefits</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {benefits.map((benefit, i) => {
            const IconComp = benefit.icon;
            const isGold = benefit.accent === 'gold';
            const accentColor = isGold ? GOLD : CYAN;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                className="group relative p-6 sm:p-7 border border-white/5 hover:border-white/10 transition-all duration-500"
                style={{ background: '#0A0A0A' }}
              >
                <div
                  className="w-11 h-11 border flex items-center justify-center mb-5 transition-colors duration-500"
                  style={{
                    borderColor: `${accentColor}33`,
                    background: `${accentColor}08`,
                  }}
                >
                  <IconComp size={20} weight="light" style={{ color: accentColor }} />
                </div>

                <h3 className="font-heading text-white text-base italic tracking-wide mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                  {benefit.desc}
                </p>

                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                  style={{ background: `linear-gradient(to right, ${accentColor}, ${accentColor}80)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   4. JOB LISTINGS — expandable, gold department badges
   ================================================================ */
function JobListings() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { careers, business } = siteData;
  const [expandedIdx, setExpandedIdx] = useState(null);

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20"
        >
          <div className="w-12 h-[2px] bg-gold-500 mb-6" />
          <p className="text-gold-500/60 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Open Positions</p>
          <h2
            className="font-heading text-white leading-[0.95] italic"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Current <span className="text-gold-500">Opportunities</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {careers.positions.map((position, i) => {
            const isOpen = expandedIdx === i;

            return (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className={`border transition-colors duration-500 ${
                  isOpen ? 'border-gold-500/30' : 'border-white/5 hover:border-white/10'
                }`}
                style={{ background: '#111111' }}
              >
                {/* Header — clickable */}
                <button
                  onClick={() => setExpandedIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-heading text-white text-lg italic tracking-wide">{position.title}</h3>
                      {/* Department badge */}
                      <span
                        className="text-[10px] uppercase tracking-[0.15em] text-gold-500 border border-gold-500/20 px-2.5 py-1 bg-gold-500/5"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {position.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-white/30 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} weight="light" className="text-gold-500/50" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={12} weight="light" className="text-gold-500/50" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <CaretDown
                    size={18}
                    weight="bold"
                    className={`text-gold-500/50 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5">
                        <p className="text-white/40 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                          {position.desc}
                        </p>
                        <a
                          href={`mailto:${business.email}?subject=Application: ${position.title}&body=${encodeURIComponent(
                            `Dear Sulpice,\n\nI am writing to apply for the ${position.title} position at your ${position.location} office.\n\n[Attach your CV and portfolio]\n\nThank you.`
                          )}`}
                          className="group inline-flex items-center gap-3 bg-gold-500 text-[#0A0A0A] px-6 py-3 text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          Apply Now
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* No positions fallback notice */}
        {careers.positions.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/30 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              No open positions at the moment. Send us your CV anyway -- we are always looking for exceptional talent.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ================================================================
   5. GOLD MARQUEE PERKS STRIP
   ================================================================ */
function PerksMarquee() {
  const perks = ['CREATIVE FREEDOM', 'TEAM RETREATS', 'CAREER GROWTH', 'MULTI-CITY WORK', 'MENTORSHIP', 'FLEXIBLE SCHEDULE', 'INDUSTRY EVENTS', 'TRAINING WORKSHOPS'];
  const repeated = [...perks, ...perks, ...perks, ...perks];

  return (
    <section className="border-y border-gold-500/10 py-5 sm:py-6 overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-6 sm:gap-8 mx-6 sm:mx-8">
            <span className="text-gold-500/80 font-heading text-lg sm:text-2xl italic tracking-wider">
              {item}
            </span>
            <span className="text-gold-500/20 text-sm">&diams;</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   6. APPLICATION CTA
   ================================================================ */
function ApplicationCTA() {
  const { business } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&q=85"
          alt="Sulpice studio"
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
            JOIN THE<br />
            <span className="text-gold-500">SULPICE FAMILY</span>
          </h2>

          <p className="text-white/45 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-12 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            Even if you don't see a role that fits, we are always open to hearing from exceptional people. Send us your portfolio and tell us why you belong at Sulpice.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${business.email}?subject=General Application - Sulpice Careers`}
              className="group inline-flex items-center gap-3 bg-gold-500 text-[#0A0A0A] px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <PaperPlaneTilt size={18} />
              Send Your Application
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent('Hello Sulpice! I am interested in career opportunities with your team.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-[#00BCD4]/40 text-[#00BCD4] px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-[#00BCD4]/10 hover:border-[#00BCD4]/60"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <WhatsappLogo size={20} weight="fill" />
              Chat With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   CAREERS — Assembled
   ================================================================ */
function Careers() {
  return (
    <PageTransition>
      <CareersHero />
      <CultureSection />
      <PerksMarquee />
      <BenefitsSection />
      <JobListings />
      <ApplicationCTA />
    </PageTransition>
  );
}

export default Careers;
