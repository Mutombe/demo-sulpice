import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Envelope,
  WhatsappLogo,
  Clock,
  ArrowRight,
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
} from '@phosphor-icons/react';
import siteData from '../data/siteData';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { business, navbar, footer } = siteData;

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/projects' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const branches = [
    {
      name: 'Harare Studio',
      address: '28 Midlothian Ave, Eastlea, Harare, Zimbabwe',
      phone: business.phone,
    },
    {
      name: 'Bulawayo Office',
      address: 'Bulawayo, Zimbabwe',
      phone: business.phone,
    },
    {
      name: 'Johannesburg Studio',
      address: 'Johannesburg, South Africa',
      phone: business.phone,
    },
  ];

  return (
    <footer className="relative bg-navy-950 text-white overflow-hidden">
      {/* Giant watermark text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <span
          className="font-heading italic text-white/[0.015] whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, 20vw, 18rem)' }}
        >
          Sulpice
        </span>
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Gold top border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="flex flex-col leading-none">
                <span className="text-white font-heading text-xl italic tracking-wide">
                  {navbar.logoLine1}
                </span>
                <span className="text-gold-500 text-[9px] uppercase tracking-[0.35em] font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>
                  {navbar.logoLine2}
                </span>
              </div>
            </Link>
            <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: 'var(--font-sans)' }}>
              {footer.description}
            </p>

            {/* Social links */}
            <div className="flex gap-2">
              {business.socialLinks.facebook && business.socialLinks.facebook !== '#' && (
                <a
                  href={business.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FacebookLogo size={18} />
                </a>
              )}
              {business.socialLinks.instagram && business.socialLinks.instagram !== '#' && (
                <a
                  href={business.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramLogo size={18} />
                </a>
              )}
              {business.socialLinks.linkedin && business.socialLinks.linkedin !== '#' && (
                <a
                  href={business.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo size={18} />
                </a>
              )}
              <a
                href={`https://wa.me/${business.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={18} weight="fill" />
              </a>
            </div>
          </div>

          {/* Column 2: Branches */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
              Our Studios
            </h4>
            <div className="w-8 h-[1px] bg-gold-500 mb-6" />
            <div className="space-y-5">
              {branches.map((branch) => (
                <div key={branch.name}>
                  <h5 className="text-gold-500 font-heading text-sm italic tracking-wide mb-2">
                    {branch.name}
                  </h5>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <MapPin size={13} className="text-white/20 shrink-0 mt-0.5" />
                      <span className="text-white/35 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={13} className="text-white/20 shrink-0" />
                      <span className="text-white/35 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>{branch.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
              Quick Links
            </h4>
            <div className="w-8 h-[1px] bg-gold-500 mb-6" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-white/35 hover:text-gold-500 text-sm transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <ArrowRight
                      size={10}
                      className="text-gold-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
              Contact Us
            </h4>
            <div className="w-8 h-[1px] bg-gold-500 mb-6" />
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex gap-3 text-sm text-white/35 hover:text-gold-500 transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <Phone size={15} className="text-gold-500 shrink-0 mt-0.5" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex gap-3 text-sm text-white/35 hover:text-gold-500 transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <Envelope size={15} className="text-gold-500 shrink-0 mt-0.5" />
                  {business.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Clock size={15} className="text-gold-500 shrink-0 mt-0.5" />
                <div className="text-white/35" style={{ fontFamily: 'var(--font-sans)' }}>
                  {business.hours.map((h) => (
                    <p key={h.day} className="text-xs leading-relaxed">
                      <span className="text-white/45">{h.day}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>

            <Link
              to="/contact"
              className="mt-6 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 py-3 px-5 text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Plan Your Event
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="h-px bg-gradient-to-r from-gold-500/30 via-white/5 to-transparent" />
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>
            &copy; {currentYear} {footer.copyright}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => document.dispatchEvent(new CustomEvent('openPrivacy'))}
              className="text-white/20 text-xs uppercase tracking-wider hover:text-white/40 transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Privacy
            </button>
            <button
              onClick={() => document.dispatchEvent(new CustomEvent('openCookie'))}
              className="text-white/20 text-xs uppercase tracking-wider hover:text-white/40 transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Cookies
            </button>
            <a
              href="https://bitstudio.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 text-xs uppercase tracking-wider hover:text-gold-500 transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Developed by Bit Studio (Pvt) Ltd
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
