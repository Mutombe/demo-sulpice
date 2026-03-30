import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Briefcase,
  Star,
  Buildings,
  Leaf,
  Lightbulb,
  Phone,
  WhatsappLogo,
  CaretRight,
  ChatCircleDots,
  Quotes,
  ShieldCheck,
  Trophy,
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
   ICON MAP for services
   ================================================================ */
const serviceIconMap = {
  Heart, Briefcase, Star, Buildings, Leaf, Lightbulb,
};

/* ================================================================
   1. HERO
   ================================================================ */
function ServicesHero() {
  const { services, hero } = siteData;
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
          alt="Grand event with dramatic lighting"
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
        {/* Breadcrumbs */}
        <motion.nav initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm">
            <li><Link to="/" className="text-white/40 hover:text-white/70 transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>Home</Link></li>
            <li><CaretRight size={12} weight="bold" className="text-gold-500/60" /></li>
            <li className="text-white/80" style={{ fontFamily: 'var(--font-sans)' }}>Services</li>
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
          Our Expertise
        </motion.p>

        <div className="overflow-hidden">
          {['OUR', 'SERVICES'].map((line, i) => (
            <motion.div
              key={line}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading leading-[0.92] tracking-tight ${
                  line === 'SERVICES'
                    ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 bg-clip-text text-transparent italic'
                    : 'text-white'
                }`}
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: line === 'SERVICES' ? 700 : 300 }}
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
          {services.heroSubtitle}
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
   2. SERVICE DETAILS — Alternating image/text with gold numbers
   ================================================================ */
function ServiceDetails() {
  const { services, servicesPreview } = siteData;
  const location = useLocation();

  /* Scroll to hash on mount */
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400);
      }
    }
  }, [location.hash]);

  return (
    <div style={{ background: '#0A0A0A' }}>
      {services.items.map((service, i) => {
        const isReversed = i % 2 !== 0;
        const iconName = servicesPreview[i]?.icon;
        const IconComp = serviceIconMap[iconName] || Star;

        return (
          <ServiceBlock
            key={service.slug}
            service={service}
            index={i}
            isReversed={isReversed}
            IconComp={IconComp}
          />
        );
      })}
    </div>
  );
}

function ServiceBlock({ service, index, isReversed, IconComp }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const num = String(index + 1).padStart(2, '0');

  return (
    <section
      ref={ref}
      id={service.slug}
      className={`py-20 sm:py-28 lg:py-32 overflow-hidden ${index > 0 ? 'border-t border-white/5' : ''}`}
      style={{ background: index % 2 === 0 ? '#0A0A0A' : '#111111' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className={`relative ${isReversed ? 'lg:order-2' : ''}`}
            style={{ direction: 'ltr' }}
          >
            <div className="relative overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full aspect-[4/3] object-cover object-center"
                loading="lazy"
              />
              {/* Gold number badge overlay */}
              <div className="absolute top-5 left-5 z-10">
                <div className="bg-gold-500/90 text-[#0A0A0A] w-14 h-14 flex items-center justify-center">
                  <span className="font-heading text-xl italic font-bold">{num}</span>
                </div>
              </div>
              {/* Cyan glow border on hover equivalent */}
              <div className="absolute inset-0 border border-gold-500/10" />
            </div>
            {/* Gold corner accents */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold-500/20" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold-500/20" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            className={isReversed ? 'lg:order-1' : ''}
            style={{ direction: 'ltr' }}
          >
            {/* Gold accent line */}
            <div className="w-12 h-[2px] bg-gold-500 mb-6" />

            {/* Icon + label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border border-gold-500/30 flex items-center justify-center bg-gold-500/5">
                <IconComp size={18} weight="light" className="text-gold-500" />
              </div>
              <span className="text-gold-500/60 text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--font-sans)' }}>
                Service {num}
              </span>
            </div>

            <h2
              className="font-heading text-white leading-[0.95] italic mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              {service.title}
            </h2>

            <p className="text-white/45 text-sm sm:text-base leading-relaxed mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              {service.desc}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-1.5 border border-gold-500/20 text-gold-500/80 px-3 py-1.5 text-xs uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <CheckCircle size={12} weight="fill" className="text-gold-500/60" />
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border border-gold-500/30 text-gold-500 px-6 py-3 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Enquire About This Service
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   3. PROCESS — 4 elegant steps
   ================================================================ */
function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const steps = [
    { num: '01', title: 'Consultation', desc: 'We listen to your vision, understand your story, and explore the possibilities together over coffee or a call.', icon: ChatCircleDots },
    { num: '02', title: 'Design', desc: 'Our creative team develops a bespoke concept -- mood boards, 3D renders, colour palettes, and material selections.', icon: Lightbulb },
    { num: '03', title: 'Installation', desc: 'Our artisan team transforms the venue with meticulous precision, ensuring every detail matches the approved design.', icon: Star },
    { num: '04', title: 'Celebration', desc: 'You walk in, you gasp, you celebrate. We handle breakdown and cleanup so you never have to think about it.', icon: Heart },
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="w-12 h-[2px] bg-gold-500 mx-auto mb-6" />
          <p className="text-gold-500/60 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>How We Work</p>
          <h2
            className="font-heading text-white leading-[0.95] italic"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Our <span className="text-gold-500">Process</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-gold-500/20 via-gold-500/30 to-gold-500/20" />

          {steps.map((step, i) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="relative text-center group"
              >
                {/* Number circle */}
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 border border-gold-500/20 flex items-center justify-center bg-[#0A0A0A] group-hover:border-gold-500/40 transition-colors duration-500">
                  <IconComp size={28} weight="light" className="text-gold-500" />
                  <span className="absolute -top-3 -right-3 bg-gold-500 text-[#0A0A0A] w-7 h-7 flex items-center justify-center text-xs font-bold" style={{ fontFamily: 'var(--font-sans)' }}>
                    {step.num}
                  </span>
                </div>

                <h3 className="font-heading text-white text-lg italic tracking-wide mb-3">{step.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed max-w-xs mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   4. MID-PAGE CTA — Gold gradient
   ================================================================ */
function MidCTA() {
  const { business } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85"
          alt="Stunning evening event"
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
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mb-8" />

          <h2
            className="font-heading text-white leading-[0.92] italic mb-6"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            READY TO CREATE<br />
            <span className="text-gold-500">SOMETHING EXTRAORDINARY?</span>
          </h2>

          <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            Tell us about your event and let our team craft a bespoke design proposal just for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold-500 text-[#0A0A0A] px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Get a Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`https://wa.me/${business.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-[#00BCD4]/40 text-[#00BCD4] px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-[#00BCD4]/10 hover:border-[#00BCD4]/60"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <WhatsappLogo size={20} weight="fill" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   5. TRUST STRIP — gold icons
   ================================================================ */
function TrustStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const trustPoints = [
    { icon: ShieldCheck, text: '500+ Events Styled' },
    { icon: Trophy, text: 'Award-Winning Design' },
    { icon: Buildings, text: '3 Countries' },
    { icon: Star, text: '4.9 Star Rating' },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {trustPoints.map((point, i) => {
            const IconComp = point.icon;
            return (
              <motion.div
                key={point.text}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 border border-gold-500/20 flex items-center justify-center shrink-0 bg-gold-500/5">
                  <IconComp size={18} weight="light" className="text-gold-500" />
                </div>
                <span className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-sans)' }}>
                  {point.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SERVICES — Assembled
   ================================================================ */
function Services() {
  return (
    <PageTransition>
      <ServicesHero />
      <ServiceDetails />
      <ProcessSection />
      <MidCTA />
      <TrustStrip />
    </PageTransition>
  );
}

export default Services;
