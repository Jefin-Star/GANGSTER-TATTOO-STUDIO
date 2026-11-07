import React from 'react';
import { Shield, Sparkles, Clock, Award, CheckCircle2, Flame } from 'lucide-react';
import { STUDIO_CONFIG, HYGIENE_STANDARDS } from '../data/studioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B0B0E] relative border-t border-[#1C1A18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A880]">
            Studio Philosophy & Artist Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] font-heading text-balance">
            About Gangster Tattoo Studio
          </h2>
          <p className="text-sm sm:text-base text-[#A8A296] leading-relaxed">
            Founded on the immutable code that <em className="text-[#EDE8DF] font-medium not-italic">"Ink is Loyalty, Art is Respect"</em>, our studio redefines the tattoo experience by focusing strictly on authentic, bespoke craftsmanship.
          </p>
        </div>

        {/* Sole Service & Pricing Callout Banner */}
        <div id="custom-only" className="mb-20 rounded-xl bg-gradient-to-r from-[#171513] via-[#1F1B17] to-[#171513] border border-[#3E3831] p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A880]">
                <Flame className="w-4 h-4 text-[#C5A880]" />
                <span>Our Uncompromising Pledge</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#FDFBF7] font-heading">
                Custom Tattooing Is Our Sole Service
              </h3>
              <p className="text-sm sm:text-base text-[#C2BCB0] leading-relaxed">
                We do not do mass-produced piercing services, pre-printed catalog flash, or stencil copies taken from other people. At Gangster Tattoo Studio, <span className="text-[#EDE8DF] font-medium">every single piece is 100% custom drawn</span> from your conceptual idea, personal values, and anatomical structure.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#969085]">
                <span className="flex items-center gap-1.5 text-[#E0D8CB]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  Original Hand-Drafted Stencils
                </span>
                <span className="flex items-center gap-1.5 text-[#E0D8CB]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  Tailored To Your Muscular Anatomy
                </span>
                <span className="flex items-center gap-1.5 text-[#E0D8CB]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  Zero Stencil Reuse Guarantee
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0F0E12] border border-[#34302A] rounded-lg p-6 text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#A8A296] font-medium">
                Transparent Pricing
              </span>
              <div className="text-4xl font-extrabold text-[#C5A880] font-heading tabular-nums">
                ₹{STUDIO_CONFIG.startingPriceINR}
              </div>
              <p className="text-xs text-[#EDE8DF] font-medium">
                Starting Price / Minimum Studio Charge
              </p>
              <p className="text-[11px] text-[#8C867B] leading-normal pt-1">
                Final costs are individually tailored based on design complexity, dimensions, placement, and required needle hours.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Artist Profile & Hygiene Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Founder & Artist Profile (5 cols) */}
          <div className="lg:col-span-5 bg-[#121216] border border-[#2B2926] rounded-xl p-8 relative">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C5A880] shrink-0 bg-black flex items-center justify-center">
                <img
                  src={STUDIO_CONFIG.logoPath}
                  alt={STUDIO_CONFIG.founderName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F7F4EE] font-heading">
                  {STUDIO_CONFIG.founderName}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#C5A880] font-medium">
                  {STUDIO_CONFIG.founderTitle}
                </p>
                <p className="text-xs text-[#8E887E]">
                  {STUDIO_CONFIG.founderExperience}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#BDB6AA] leading-relaxed border-t border-[#23211F] pt-6">
              <p>
                With over eight years in the industry, <strong className="text-[#EDE8DF] font-medium">Rony A</strong> has established a formidable reputation for creating bold, razor-sharp black-and-grey realism, custom underground script, and dark ornamental art.
              </p>
              <p>
                "A tattoo is more than ink in skin; it’s a lifetime armor of memory and loyalty. When you walk into Gangster Tattoo Studio, we sit down together, dissect your vision, and draft a piece that belongs exclusively to you."
              </p>
            </div>

            {/* Studio Hours Card */}
            <div className="mt-6 pt-5 border-t border-[#23211F] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#EDE8DF]">
                <Clock className="w-4 h-4 text-[#C5A880]" />
                <span className="font-medium">{STUDIO_CONFIG.daysOpen}</span>
              </div>
              <span className="text-[#C5A880] font-semibold tracking-wider">
                {STUDIO_CONFIG.openingHours}
              </span>
            </div>

          </div>

          {/* Right Column: Safety & Clinical Hygiene Standards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A880] mb-2">
                <Shield className="w-4 h-4 text-[#C5A880]" />
                <span>Zero Compromise Sanitation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#FAF7F2] font-heading">
                Hospital-Grade Safety Standards
              </h3>
              <p className="text-sm text-[#A8A296] mt-2">
                Your health, skin integrity, and safety are paramount. We adhere rigorously to international clinical tattooing protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {HYGIENE_STANDARDS.map((standard, index) => (
                <div
                  key={standard.title}
                  className="bg-[#121217] border border-[#272522] rounded-lg p-5 hover:border-[#3D3A35] transition-colors"
                >
                  <div className="text-xs font-semibold tracking-wider uppercase text-[#C5A880] mb-1.5 font-heading">
                    0{index + 1}. {standard.title}
                  </div>
                  <p className="text-xs text-[#A19B8F] leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Aftercare note */}
            <div className="bg-[#14141A] border-l-2 border-[#C5A880] p-4 rounded-r-lg">
              <p className="text-xs text-[#C5BFB3] leading-relaxed">
                <strong className="text-[#EDE8DF]">Post-Tattoo Care:</strong> Every client receives an in-depth aftercare orientation, protective medical dermal film dressing, and 24/7 direct artist consultation support during healing.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
