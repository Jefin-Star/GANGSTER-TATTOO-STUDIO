import React from 'react';
import { MessageCircle, Instagram, Mail, ArrowUp, MapPin, Heart } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080A] border-t border-[#1F1E1B] text-[#A8A296] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1A1916]">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C5A880]/60 bg-black shrink-0">
                <img
                  src={STUDIO_CONFIG.logoPath}
                  alt="Gangster Tattoo Studio Insignia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-bold tracking-widest text-[#EDE7DE] text-base block uppercase">
                  {STUDIO_CONFIG.name}
                </span>
                <span className="text-[11px] text-[#C5A880] tracking-widest uppercase font-medium">
                  {STUDIO_CONFIG.motto}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8F897E] leading-relaxed max-w-sm">
              Kollam's exclusive custom tattoo studio. Bespoke body artistry crafted by Founder Rony A with 8 years of professional tattooing mastery. Custom tattoos starting from ₹500.
            </p>

            {/* Social media links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#131317] border border-[#262420] hover:border-[#25D366] text-[#25D366] flex items-center justify-center transition-colors"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#131317] border border-[#262420] hover:border-[#E1306C] text-[#E1306C] flex items-center justify-center transition-colors"
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${STUDIO_CONFIG.email}`}
                className="w-9 h-9 rounded-md bg-[#131317] border border-[#262420] hover:border-[#C5A880] text-[#C5A880] flex items-center justify-center transition-colors"
                title="Email Studio"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#FAF7F2] font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#C5A880] transition-colors">
                  About Our Studio
                </a>
              </li>
              <li>
                <a href="#custom-only" className="hover:text-[#C5A880] transition-colors">
                  Custom Tattooing (Sole Service)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#C5A880] transition-colors">
                  Artist Portfolio & Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#C5A880] transition-colors">
                  Starting at ₹500 & Pricing Guide
                </a>
              </li>
              <li>
                <a href="#consultation" className="hover:text-[#C5A880] transition-colors">
                  Book a Consultation
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C5A880] transition-colors">
                  Studio Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Hours & Contact Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#FAF7F2] font-heading">
              Studio Hours & Location
            </h4>
            
            <div className="space-y-2 text-xs text-[#8F897E]">
              <p className="flex items-center justify-between">
                <span>{STUDIO_CONFIG.daysOpen}:</span>
                <span className="text-[#EDE8DF] font-medium">{STUDIO_CONFIG.openingHours}</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Founder & Artist:</span>
                <span className="text-[#C5A880] font-medium">{STUDIO_CONFIG.founderName}</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Phone / WhatsApp:</span>
                <a
                  href={`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}`}
                  className="text-[#EDE8DF] hover:text-[#25D366]"
                >
                  {STUDIO_CONFIG.whatsappDisplay}
                </a>
              </p>
              <p className="flex items-center justify-between">
                <span>Email:</span>
                <a
                  href={`mailto:${STUDIO_CONFIG.email}`}
                  className="text-[#EDE8DF] hover:text-[#C5A880]"
                >
                  {STUDIO_CONFIG.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-[#736E65]">
                Kollam, Kerala 691001 · Sterilized Clinical Standards
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#736E65]">
          <div>
            © {new Date().getFullYear()} {STUDIO_CONFIG.name}. All rights reserved. Bespoke custom tattoo artistry.
          </div>

          <div className="flex items-center gap-6">
            <span>Ink is Loyalty · Art is Respect</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#B3ACA0] hover:text-[#C5A880] transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
