import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { toast } from 'sonner';
import {
  Phone,
  Envelope,
  MapPin,
  WhatsappLogo,
  Clock,
  PaperPlaneTilt,
  EnvelopeSimple,
  CheckCircle,
  ArrowRight,
  CaretRight,
  ChatCircleDots,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
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
function ContactHero() {
  const { contact, hero } = siteData;
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
          alt="Exquisite event styling"
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
            <li className="text-white/80" style={{ fontFamily: 'var(--font-sans)' }}>Contact</li>
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
          Get in Touch
        </motion.p>

        <div className="overflow-hidden">
          {["LET'S CREATE", 'TOGETHER'].map((line, i) => (
            <motion.div
              key={line}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading leading-[0.92] tracking-tight ${
                  line === 'TOGETHER'
                    ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 bg-clip-text text-transparent italic'
                    : 'text-white'
                }`}
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: line === 'TOGETHER' ? 700 : 300 }}
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
          {contact.heroSubtitle}
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
   2. BRANCH LOCATIONS — 3 cards with gold left borders
   ================================================================ */
function BranchLocations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { contact } = siteData;

  const cityImages = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32 overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20"
        >
          <div className="w-12 h-[2px] bg-gold-500 mb-6" />
          <p className="text-gold-500/60 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Our Locations</p>
          <h2
            className="font-heading text-white leading-[0.95] italic"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Three Studios, <span className="text-gold-500">One Standard</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {contact.branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative border border-white/5 overflow-hidden hover:border-gold-500/20 transition-colors duration-500"
              style={{ background: '#111111' }}
            >
              {/* Gold left border */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gold-500 via-gold-400 to-gold-500/30" />

              {/* Top image strip */}
              <div className="h-40 overflow-hidden">
                <img
                  src={cityImages[i]}
                  alt={branch.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 h-40 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              </div>

              <div className="relative p-6 sm:p-8">
                <h3 className="font-heading text-white text-xl italic tracking-wide mb-4">{branch.name}</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} weight="light" className="text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                      {branch.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} weight="light" className="text-gold-500 shrink-0" />
                    <a href={`tel:${branch.phone}`} className="text-white/40 text-sm hover:text-gold-500 transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Envelope size={16} weight="light" className="text-gold-500 shrink-0" />
                    <a href={`mailto:${branch.email}`} className="text-white/40 text-sm hover:text-gold-500 transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                      {branch.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   3. CONTACT FORM — dark inputs, gold focus, WhatsApp/Email toggle
   ================================================================ */
function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { business } = siteData;

  const [sendMethod, setSendMethod] = useState('whatsapp');
  const [form, setForm] = useState({ name: '', email: '', phone: '', eventType: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Sulpice!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEvent Type: ${form.eventType}\n\nMessage:\n${form.message}`;

    if (sendMethod === 'whatsapp') {
      window.open(`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
      window.open(`mailto:${business.email}?subject=Event Enquiry from ${form.name}&body=${encodeURIComponent(msg)}`);
    }
    toast.success('Redirecting you now...');
  };

  const inputClasses = `w-full bg-[#0A0A0A] border border-white/10 text-white px-4 py-3.5 text-sm placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 focus:shadow-[0_0_0_1px_rgba(212,168,83,0.15)] transition-all duration-300`;
  const labelClasses = `block text-white/30 text-xs uppercase tracking-[0.2em] mb-2`;

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Gold accent line on left */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-500 via-gold-400/50 to-transparent hidden sm:block" />

              <div className="sm:pl-8">
                <div className="w-12 h-[2px] bg-gold-500 mb-6" />
                <p className="text-gold-500/60 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Send a Message</p>
                <h2
                  className="font-heading text-white leading-[0.95] italic mb-10"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
                >
                  Tell Us About Your <span className="text-gold-500">Event</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses} style={{ fontFamily: 'var(--font-sans)' }}>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Doe"
                        className={inputClasses}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      />
                    </div>
                    <div>
                      <label className={labelClasses} style={{ fontFamily: 'var(--font-sans)' }}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@example.com"
                        className={inputClasses}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses} style={{ fontFamily: 'var(--font-sans)' }}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+263 7X XXX XXXX"
                        className={inputClasses}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      />
                    </div>
                    <div>
                      <label className={labelClasses} style={{ fontFamily: 'var(--font-sans)' }}>Event Type</label>
                      <select
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none`}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        <option value="" className="bg-[#0A0A0A]">Select event type</option>
                        <option value="Wedding" className="bg-[#0A0A0A]">Wedding</option>
                        <option value="Corporate Event" className="bg-[#0A0A0A]">Corporate Event</option>
                        <option value="Birthday" className="bg-[#0A0A0A]">Birthday</option>
                        <option value="Conference" className="bg-[#0A0A0A]">Conference</option>
                        <option value="Other" className="bg-[#0A0A0A]">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses} style={{ fontFamily: 'var(--font-sans)' }}>Your Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your vision, guest count, preferred date, and anything else that would help us understand your event..."
                      className={`${inputClasses} resize-none`}
                      style={{ fontFamily: 'var(--font-sans)' }}
                    />
                  </div>

                  {/* WhatsApp / Email Toggle */}
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-white/30 text-xs uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-sans)' }}>Send via:</span>
                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => setSendMethod('whatsapp')}
                        className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.1em] font-semibold transition-all duration-300 border ${
                          sendMethod === 'whatsapp'
                            ? 'bg-[#25D366]/10 border-[#25D366]/40 text-[#25D366]'
                            : 'border-white/10 text-white/30 hover:text-white/50'
                        }`}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        <WhatsappLogo size={16} weight="fill" />
                        WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setSendMethod('email')}
                        className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.1em] font-semibold transition-all duration-300 border border-l-0 ${
                          sendMethod === 'email'
                            ? 'bg-gold-500/10 border-gold-500/40 text-gold-500'
                            : 'border-white/10 text-white/30 hover:text-white/50'
                        }`}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        <EnvelopeSimple size={16} />
                        Email
                      </button>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={`group inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 ${
                      sendMethod === 'whatsapp'
                        ? 'bg-[#25D366] text-[#0A0A0A] hover:bg-[#20BD5A] hover:shadow-xl hover:shadow-[#25D366]/20'
                        : 'bg-gold-500 text-[#0A0A0A] hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25'
                    }`}
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <PaperPlaneTilt size={18} />
                    Send via {sendMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right — Info sidebar (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Response time badge */}
            <div className="border border-gold-500/20 p-5 sm:p-6 flex items-center gap-4" style={{ background: '#0A0A0A' }}>
              <div className="w-12 h-12 border border-[#00BCD4]/30 flex items-center justify-center bg-[#00BCD4]/5 shrink-0">
                <Clock size={22} weight="light" className="text-[#00BCD4]" />
              </div>
              <div>
                <h4 className="font-heading text-white text-sm italic tracking-wide">Responds Within 2 Hours</h4>
                <p className="text-white/30 text-xs mt-0.5" style={{ fontFamily: 'var(--font-sans)' }}>During business hours</p>
              </div>
            </div>

            {/* Direct contacts */}
            <div className="border border-white/5 p-6 sm:p-8 space-y-5" style={{ background: '#0A0A0A' }}>
              <h4 className="font-heading text-white text-lg italic tracking-wide mb-4">Direct Contact</h4>

              <a
                href={`tel:${business.phoneRaw}`}
                className="flex items-center gap-4 text-white/40 hover:text-gold-500 transition-colors group"
              >
                <div className="w-10 h-10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/5 transition-colors">
                  <Phone size={18} weight="light" className="text-gold-500" />
                </div>
                <span className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{business.phone}</span>
              </a>

              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-4 text-white/40 hover:text-gold-500 transition-colors group"
              >
                <div className="w-10 h-10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/5 transition-colors">
                  <Envelope size={18} weight="light" className="text-gold-500" />
                </div>
                <span className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{business.email}</span>
              </a>

              <a
                href={`https://wa.me/${business.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/40 hover:text-[#25D366] transition-colors group"
              >
                <div className="w-10 h-10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/5 transition-colors">
                  <WhatsappLogo size={18} weight="fill" className="text-[#25D366]" />
                </div>
                <span className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>WhatsApp Us</span>
              </a>
            </div>

            {/* Business hours */}
            <div className="border border-white/5 p-6 sm:p-8" style={{ background: '#0A0A0A' }}>
              <h4 className="font-heading text-white text-lg italic tracking-wide mb-4">Business Hours</h4>
              <div className="space-y-3">
                {business.hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="text-white/40 text-xs uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-sans)' }}>{h.day}</span>
                    <span className="text-gold-500/70 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   4. MAP SECTION — dark overlay with gold address card
   ================================================================ */
function MapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { business } = siteData;

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative h-[400px] sm:h-[500px]">
        {/* Map embed with dark overlay */}
        <iframe
          src={business.mapEmbedUrl}
          title="Sulpice Location"
          className="w-full h-full border-0 grayscale opacity-40"
          loading="lazy"
          allowFullScreen
        />

        {/* Floating gold address card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-8 left-5 sm:left-8 lg:left-12 z-20"
        >
          <div className="border border-gold-500/30 p-6 sm:p-8 max-w-sm" style={{ background: '#0A0A0A' }}>
            {/* Gold corner */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-500/50" />

            <h4 className="font-heading text-white text-lg italic tracking-wide mb-3">Harare Studio</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={14} weight="light" className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{business.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} weight="light" className="text-gold-500 shrink-0" />
                <span className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{business.phone}</span>
              </div>
            </div>

            <div className="w-full h-px bg-white/5 my-4" />

            <a
              href={`https://www.google.com/maps/dir//${encodeURIComponent(business.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-gold-500 text-xs uppercase tracking-[0.15em] hover:text-gold-400 transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Get Directions
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   CONTACT — Assembled
   ================================================================ */
function Contact() {
  return (
    <PageTransition>
      <ContactHero />
      <BranchLocations />
      <ContactForm />
      <MapSection />
    </PageTransition>
  );
}

export default Contact;
