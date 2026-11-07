import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Studio', href: '#about' },
    { label: 'Custom Artistry', href: '#custom-only' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing & Starting ₹500', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0E]/95 backdrop-blur-md border-b border-[#262422] shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand title, one line */}
          <a
            href="#"
            className="flex items-center gap-3 text-lg md:text-xl font-bold tracking-wider text-[#EDE7DE] hover:text-[#C5A880] transition-colors whitespace-nowrap shrink-0 font-heading"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C5A880]/50 bg-black shrink-0 flex items-center justify-center shadow-inner">
              <img
                src={STUDIO_CONFIG.logoPath}
                alt="Gangster Tattoo Studio Insignia"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to stylized emblem if path differs
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <span className="font-heading tracking-[0.12em] uppercase text-sm md:text-base">
              {STUDIO_CONFIG.name}
            </span>
          </a>

          {/* Zone 2: 4-5 nav links, 1-2 word labels, single-line */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#B3ACA0]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F3ECE1] hover:underline underline-offset-8 decoration-[#C5A880]/70 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-black bg-[#C5A880] hover:bg-[#D4BA94] active:scale-[0.98] rounded-md transition-all duration-150 whitespace-nowrap shrink-0 shadow-lg shadow-[#C5A880]/20 flex items-center gap-2"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#EDE7DE] hover:text-[#C5A880] focus:outline-none focus:ring-1 focus:ring-[#C5A880] rounded"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F13] border-b border-[#262422] px-6 py-6 space-y-4">
          <div className="text-xs text-[#8A847A] uppercase tracking-widest pb-1 border-b border-[#1F1E22]">
            Navigation
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#EDE7DE] hover:text-[#C5A880] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1F1E22] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-black bg-[#C5A880] hover:bg-[#D4BA94] rounded-md text-center flex items-center justify-center gap-2"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=Hi%20Rony,%20I%20am%20interested%20in%20a%20custom%20tattoo%20consultation%20at%20Gangster%20Tattoo%20Studio`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-xs font-semibold tracking-wider uppercase text-[#C5A880] border border-[#C5A880]/40 rounded-md text-center hover:bg-[#C5A880]/10 transition-colors"
            >
              Chat on WhatsApp ({STUDIO_CONFIG.whatsappDisplay})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
