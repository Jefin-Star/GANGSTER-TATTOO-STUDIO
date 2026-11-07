import React from 'react';
import { ArrowDown, MessageCircle, Instagram, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#09090C]">
      {/* Ambient background atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle radial warmth behind the emblem */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-[#C5A880]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px]" />
        
        {/* Fine background grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.035]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ECE7DF 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }} 
        />
        
        {/* Dark vignette gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-[#0B0B0E]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-8">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Studio Motto Kicker */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#C5A880] border-b border-[#C5A880]/30 pb-1">
              <span>Ink Is Loyalty</span>
              <span className="text-[#C5A880]/50">·</span>
              <span>Art Is Respect</span>
            </div>

            {/* Studio Name Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FAF7F2] font-heading leading-[1.08] text-balance">
              GANGSTER <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDE8DF] via-[#D5BE9B] to-[#C5A880]">
                TATTOO STUDIO
              </span>
            </h1>

            {/* Sub-headline & Philosophy */}
            <p className="text-base sm:text-lg text-[#B8B1A5] max-w-2xl font-light leading-relaxed">
              Kollam’s premier sanctuary for bespoke body art. We specialize exclusively in <strong className="text-[#EDE8DF] font-medium">100% custom tattooing</strong>—no mass-produced flash sheets, no duplicates. Every line is hand-drawn for your anatomy by Founder <span className="text-[#C5A880] font-medium">Rony A</span> with 8 years of master artistry.
            </p>

            {/* Prominent Pricing & Custom Only Callout */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#A39C90] pt-1">
              <div className="flex items-center gap-1.5 text-[#E0D8CB]">
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span className="font-semibold text-[#EDE8DF]">Custom Tattooing Starting at ₹500</span>
              </div>
              <span className="hidden sm:inline text-zinc-700">|</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C5A880]" />
                <span>Mon – Sun: 9:30 AM to 10:00 PM</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#C5A880] hover:bg-[#D4BA94] active:scale-[0.98] rounded-md transition-all shadow-lg shadow-[#C5A880]/20 text-center"
              >
                Book a Consultation
              </button>

              <a
                href="#portfolio"
                className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#EDE8DF] border border-[#3E3A35] hover:border-[#C5A880] hover:text-[#C5A880] rounded-md transition-colors text-center"
              >
                View Portfolio
              </a>
            </div>

            {/* Direct Connect Buttons: WhatsApp & Instagram */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=Hi%20Rony,%20I%20would%20like%20to%20discuss%20a%20custom%20tattoo%20idea%20and%20pricing%20at%20Gangster%20Tattoo%20Studio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={STUDIO_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-[#E1306C] bg-[#E1306C]/10 hover:bg-[#E1306C]/20 border border-[#E1306C]/30 rounded-md transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Connect on Instagram</span>
              </a>
            </div>

          </div>

          {/* Right Column: Studio Insignia / Official Artwork Display (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-[#C5A880]/30 via-[#C5A880]/10 to-transparent rounded-2xl blur-lg opacity-80 group-hover:opacity-100 transition duration-700" />
              
              {/* Image Frame Card */}
              <div className="relative bg-[#101014] border border-[#34302B] rounded-xl overflow-hidden shadow-2xl p-2.5">
                <div className="relative aspect-[9/16] max-h-[520px] w-full rounded-lg overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={STUDIO_CONFIG.logoPath}
                    alt="Gangster Tattoo Studio Official Emblem"
                    className="w-full h-full object-contain filter contrast-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.includes('logo.jpg')) {
                        target.src = './images/logo.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md border border-[#34302B] rounded-md text-center">
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-[#C5A880]">
                      Official Studio Crest
                    </p>
                    <p className="text-xs text-[#E5E0D6] font-light">
                      Custom Designs Only · Starting at ₹500
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full-width 4-metric strip below hero */}
      <div className="relative z-10 w-full border-t border-b border-[#23211F] bg-[#0E0E12]/80 backdrop-blur-sm mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="flex flex-col items-center justify-center border-r border-[#23211F] last:border-r-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#EDE7DE] font-heading tabular-nums">
                ₹500
              </span>
              <span className="text-xs tracking-wider uppercase text-[#969085] mt-1">
                Starting Studio Price
              </span>
            </div>

            <div className="flex flex-col items-center justify-center border-r border-[#23211F] md:border-r last:border-r-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#C5A880] font-heading tabular-nums">
                8+ Years
              </span>
              <span className="text-xs tracking-wider uppercase text-[#969085] mt-1">
                Founder Rony A Exp.
              </span>
            </div>

            <div className="flex flex-col items-center justify-center border-r border-[#23211F] last:border-r-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#EDE7DE] font-heading">
                100%
              </span>
              <span className="text-xs tracking-wider uppercase text-[#969085] mt-1">
                Custom Sole Service
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#EDE7DE] font-heading">
                7 Days
              </span>
              <span className="text-xs tracking-wider uppercase text-[#969085] mt-1">
                9:30 AM – 10:00 PM
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
