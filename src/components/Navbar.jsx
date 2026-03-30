import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  List,
  X,
  CaretDown,
  Phone,
  WhatsappLogo,
  ArrowRight,
  MagnifyingGlass,
} from '@phosphor-icons/react';
import siteData from '../data/siteData';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Our Work',
    children: [
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/projects' },
    ],
  },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

function Navbar({ onSearchOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  const { business, navbar } = siteData;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy-950/98 backdrop-blur-xl shadow-2xl shadow-black/40'
          : 'bg-navy-950/60 backdrop-blur-md'
      }`}
      style={{ top: 'var(--banner-height, 0px)' }}
    >
      {/* Top gold accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="flex flex-col leading-none">
              <span className="text-white font-heading text-xl sm:text-2xl italic tracking-wide">
                {navbar.logoLine1}
              </span>
              <span className="text-gold-500 text-[9px] uppercase tracking-[0.35em] font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>
                {navbar.logoLine2}
              </span>
            </div>
          </Link>

          {/* Desktop Nav -- Center */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(link.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button className="relative flex items-center gap-1.5 text-white/60 hover:text-white px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                    {link.name}
                    <CaretDown
                      size={11}
                      className={`transition-transform ${
                        dropdownOpen === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-0 w-48 bg-navy-900 border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-5 py-3 text-[11px] uppercase tracking-[0.15em] transition-colors border-l-2 ${
                              location.pathname === child.path
                                ? 'text-gold-500 bg-white/5 border-gold-500'
                                : 'text-white/50 hover:text-white hover:bg-white/5 border-transparent hover:border-gold-500/50'
                            }`}
                            style={{ fontFamily: 'var(--font-sans)' }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group px-4 py-2"
                >
                  <span
                    className={`text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors ${
                      location.pathname === link.path
                        ? 'text-gold-500'
                        : 'text-white/60 group-hover:text-white'
                    }`}
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {link.name}
                  </span>
                  {/* Gold underline on active/hover */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[1px] bg-gold-500 transition-transform duration-300 origin-left ${
                      location.pathname === link.path
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              )
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Phone -- desktop only */}
            <a
              href={`tel:${business.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-white/40 hover:text-white text-[11px] uppercase tracking-wider transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <Phone size={13} className="text-gold-500" />
              {business.phone}
            </a>

            {/* Search */}
            <button
              onClick={onSearchOpen}
              className="hidden sm:flex items-center text-white/30 hover:text-white transition-colors p-2"
              aria-label="Search"
            >
              <MagnifyingGlass size={17} />
            </button>

            {/* Divider */}
            <div className="hidden xl:block w-px h-5 bg-white/10" />

            {/* CTA */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00BCD4]/20"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Plan Your Event
              <ArrowRight size={13} />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-1.5"
              aria-label="Toggle menu"
            >
              <List size={24} weight="bold" />
            </button>
          </div>
        </div>
      </nav>
    </motion.header>

    {/* Mobile Menu -- Full screen */}
    {mobileOpen && (
      <div
        className="lg:hidden fixed top-0 left-0 right-0 bottom-0 overflow-y-auto"
        style={{ backgroundColor: '#0A0A0A', zIndex: 9999 }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
            <span className="text-white font-heading text-xl italic tracking-wide">{navbar.logoLine1}</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white p-2"
            aria-label="Close menu"
          >
            <X size={28} weight="bold" />
          </button>
        </div>

        {/* Search bar */}
        <div className="px-5 py-4 border-b border-white/10">
          <button
            onClick={() => { setMobileOpen(false); onSearchOpen && onSearchOpen(); }}
            className="flex items-center gap-3 w-full px-4 py-3 border border-white/10 text-white/30 text-xs uppercase tracking-wider"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <MagnifyingGlass size={16} />
            Search...
          </button>
        </div>

        {/* Nav links */}
        <div className="px-5 py-6 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name}>
                <button
                  onClick={() => setDropdownOpen(dropdownOpen === link.name ? null : link.name)}
                  className="flex items-center justify-between w-full py-4 border-b border-white/5"
                >
                  <span className="text-white font-heading text-xl italic tracking-wide">
                    {link.name}
                  </span>
                  <CaretDown
                    size={18}
                    className={`text-gold-500 transition-transform duration-300 ${
                      dropdownOpen === link.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {dropdownOpen === link.name && (
                  <div className="pl-6 py-2 border-l-2 border-gold-500/30 ml-2 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-2 text-sm uppercase tracking-wider ${
                          location.pathname === child.path
                            ? 'text-gold-500 font-bold'
                            : 'text-white/50'
                        }`}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between py-4 border-b border-white/5 font-heading text-xl italic tracking-wide ${
                  location.pathname === link.path
                    ? 'text-gold-500'
                    : 'text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="w-2 h-2 bg-gold-500" />
                )}
              </Link>
            )
          )}
        </div>

        {/* Bottom actions */}
        <div className="px-5 py-6 space-y-3 border-t border-white/10">
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-3 bg-gold-500 text-navy-950 py-4 text-sm uppercase tracking-[0.2em] font-semibold"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Plan Your Event
            <ArrowRight size={16} />
          </Link>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${business.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-green-500/30 text-green-400 py-3 text-xs uppercase tracking-wider font-semibold"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <WhatsappLogo size={18} weight="fill" />
              WhatsApp
            </a>
            <a
              href={`tel:${business.phoneRaw}`}
              className="flex-1 flex items-center justify-center gap-2 border border-white/10 text-white/60 py-3 text-xs uppercase tracking-wider font-semibold"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <Phone size={18} />
              Call
            </a>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

export default Navbar;
