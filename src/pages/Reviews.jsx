import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  Star,
  Quotes,
  CaretRight,
  ArrowRight,
  GoogleLogo,
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
   AVATAR POOL
   ================================================================ */
const avatarPool = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
];

function getEventBadge(role) {
  const r = role.toLowerCase();
  if (r.includes('bride') || r.includes('couple') || r.includes('wedding')) return 'Wedding';
  if (r.includes('birthday') || r.includes('parent') || r.includes('celebrant')) return 'Birthday';
  if (r.includes('corporate') || r.includes('ceo') || r.includes('director') || r.includes('partner') || r.includes('coo') || r.includes('hr')) return 'Corporate';
  if (r.includes('conference') || r.includes('events director')) return 'Conference';
  if (r.includes('planner')) return 'Wedding';
  return 'Event';
}

/* ================================================================
   1. HERO
   ================================================================ */
function ReviewsHero() {
  const { reviews, hero } = siteData;
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
          src={hero.backgroundImages[0]?.url}
          alt="Beautiful event setting"
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
            <li className="text-white/80" style={{ fontFamily: 'var(--font-sans)' }}>Reviews</li>
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
          Testimonials
        </motion.p>

        <div className="overflow-hidden">
          {['CLIENT', 'VOICES'].map((line, i) => (
            <motion.div
              key={line}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading leading-[0.92] tracking-tight ${
                  line === 'VOICES'
                    ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 bg-clip-text text-transparent italic'
                    : 'text-white'
                }`}
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: line === 'VOICES' ? 700 : 300 }}
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
          {reviews.heroSubtitle}
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
   2. RATING SUMMARY BANNER
   ================================================================ */
function RatingSummary() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { business } = siteData;

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          <div className="text-center">
            <div
              className="font-heading text-gold-500 italic leading-none"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', textShadow: '0 0 40px rgba(212,168,83,0.15)' }}
            >
              {business.rating}
            </div>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(business.ratingRounded)].map((_, i) => (
                <Star key={i} size={18} weight="fill" className="text-gold-500" />
              ))}
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />

          <div className="text-center sm:text-left">
            <div className="text-white font-heading text-2xl sm:text-3xl italic">
              {business.reviewCount} Reviews
            </div>
            <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
              <GoogleLogo size={16} weight="bold" className="text-white/30" />
              <span className="text-white/30 text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-sans)' }}>
                Verified on Google
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   3. FEATURED REVIEW
   ================================================================ */
function FeaturedReview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { reviews } = siteData;
  const featured = reviews.items[0];

  return (
    <section ref={ref} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ background: '#111111' }}>
      <NoiseTexture opacity={0.02} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Quotes size={64} weight="fill" className="text-gold-500/15 mx-auto mb-8" />

          <blockquote className="text-white font-heading text-xl sm:text-2xl lg:text-3xl italic leading-relaxed mb-10">
            &ldquo;{featured.text}&rdquo;
          </blockquote>

          <div className="flex flex-col items-center gap-3">
            <img
              src={avatarPool[0]}
              alt={featured.name}
              className="w-14 h-14 object-cover object-center border-2 border-gold-500/30"
              loading="lazy"
            />
            <div className="w-8 h-[2px] bg-gold-500" />
            <div className="text-white text-sm uppercase tracking-[0.15em] font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>
              {featured.name}
            </div>
            <div className="text-white/40 text-xs uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-sans)' }}>
              {featured.role}
            </div>
            <div className="flex items-center gap-0.5 mt-1">
              {[...Array(featured.rating)].map((_, i) => (
                <Star key={i} size={14} weight="fill" className="text-gold-500" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   4. RATING BREAKDOWN
   ================================================================ */
function RatingBreakdown() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const ratings = [
    { stars: 5, pct: 92 },
    { stars: 4, pct: 5 },
    { stars: 3, pct: 2 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 0 },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="w-12 h-[2px] bg-gold-500 mb-6 mx-auto" />
          <h3 className="font-heading text-white text-xl italic tracking-wide text-center mb-8">
            Rating <span className="text-gold-500">Breakdown</span>
          </h3>

          <div className="space-y-3">
            {ratings.map((r, i) => (
              <motion.div
                key={r.stars}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <div className="flex items-center gap-1 w-20 justify-end shrink-0">
                  <span className="text-white/50 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{r.stars}</span>
                  <Star size={12} weight="fill" className="text-gold-500/60" />
                </div>
                <div className="flex-1 h-2 bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${r.pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-gold-500 to-gold-400"
                  />
                </div>
                <span className="text-white/30 text-xs w-10 text-right" style={{ fontFamily: 'var(--font-sans)' }}>
                  {r.pct}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   5. REVIEW CARDS GRID
   ================================================================ */
function ReviewsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { reviews } = siteData;
  const [visibleCount, setVisibleCount] = useState(8);

  const visibleReviews = reviews.items.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.items.length;

  return (
    <section ref={ref} className="py-24 sm:py-32 overflow-hidden" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20"
        >
          <div className="w-12 h-[2px] bg-gold-500 mb-6" />
          <p className="text-gold-500/60 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>All Reviews</p>
          <h2
            className="font-heading text-white leading-[0.95] italic"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            What Our <span className="text-gold-500">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence>
            {visibleReviews.map((review, i) => {
              const avatarSrc = review.image || review.avatar || avatarPool[i % avatarPool.length];
              const eventBadge = getEventBadge(review.role);

              return (
                <motion.div
                  key={review.name + i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.5) }}
                  className="group relative border border-white/5 p-6 sm:p-7 hover:border-gold-500/15 transition-colors duration-500"
                  style={{ background: '#0A0A0A' }}
                >
                  {/* Event type badge */}
                  <div className="absolute top-5 right-5">
                    <span
                      className="text-[10px] uppercase tracking-[0.15em] text-gold-500/50 border border-gold-500/15 px-2.5 py-1"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {eventBadge}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-5">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} size={13} weight="fill" className="text-gold-500" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Attribution with avatar */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <img
                      src={avatarSrc}
                      alt={review.name}
                      className="w-10 h-10 object-cover object-center border border-gold-500/20 shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <div className="text-white text-sm font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>
                        {review.name}
                      </div>
                      <div className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                        {review.role}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-500 to-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="group inline-flex items-center gap-3 border border-gold-500/30 text-gold-500 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Load More Reviews
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ================================================================
   REVIEWS — Assembled
   ================================================================ */
function Reviews() {
  return (
    <PageTransition>
      <ReviewsHero />
      <RatingSummary />
      <FeaturedReview />
      <RatingBreakdown />
      <ReviewsGrid />
    </PageTransition>
  );
}

export default Reviews;
