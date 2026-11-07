import React, { useState } from 'react';
import { IndianRupee, HelpCircle, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { STUDIO_CONFIG, SIZE_PRESETS, BODY_PLACEMENTS } from '../data/studioData';

interface PricingProps {
  onSelectEstimate?: (details: { size: string; placement: string }) => void;
}

export const PricingTransparency: React.FC<PricingProps> = ({ onSelectEstimate }) => {
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedPlacement, setSelectedPlacement] = useState(BODY_PLACEMENTS[0]);
  const [selectedStyle, setSelectedStyle] = useState('Black & Grey Realism');

  const estimateRanges = [
    { base: `Starting at ₹${STUDIO_CONFIG.startingPriceINR}`, description: 'Ideal for minimalist fine-line symbols, initials, micro celestial glyphs, or single-word typography.' },
    { base: '₹1,500 – ₹4,000', description: 'Small to palm-sized custom pieces with detailed linework, light stippling, and precise anatomical contouring.' },
    { base: '₹4,500 – ₹10,000', description: 'Medium statement pieces (forearm, outer calf, bicep) with multi-layered black & grey gradients or neo-traditional color.' },
    { base: '₹12,000 – ₹25,000', description: 'Half sleeve, large chest piece, or thigh artwork requiring 1 to 2 focused sessions.' },
    { base: 'Custom Project Rate', description: 'Full sleeve, back piece, or full body suit. Billed per session with detailed design blueprint sessions.' }
  ];

  const currentEstimate = estimateRanges[selectedSize];

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hi Rony, I used the pricing estimator on the website for Gangster Tattoo Studio:\n• Size: ${SIZE_PRESETS[selectedSize].label}\n• Placement: ${selectedPlacement}\n• Style: ${selectedStyle}\n• Estimated Baseline: ${currentEstimate.base}\nCan we discuss finalizing the custom artwork and scheduling a session?`
    );
    window.open(`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-[#09090C] relative border-t border-[#1C1A18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A880]">
            No Hidden Fees · Transparent Artistry
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] font-heading text-balance">
            Tattoo Pricing & Custom Estimates
          </h2>
          <p className="text-sm sm:text-base text-[#A8A296] leading-relaxed">
            Our studio baseline begins at <strong className="text-[#EDE8DF] font-semibold">₹{STUDIO_CONFIG.startingPriceINR}</strong> for micro tattoos. Because custom tattooing is our sole craft, every final quote is tailored to the exact specifications of your piece.
          </p>
        </div>

        {/* Pricing Guide Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Card 1: Starting Price & Breakdown (5 cols) */}
          <div className="lg:col-span-5 bg-[#111116] border border-[#2B2824] rounded-xl p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              <div className="border-b border-[#23211F] pb-6">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#969085]">
                  Minimum Studio Baseline
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-5xl font-extrabold text-[#C5A880] font-heading tabular-nums">
                    ₹{STUDIO_CONFIG.startingPriceINR}
                  </span>
                  <span className="text-xs text-[#969085] uppercase tracking-wider">
                    Entry Level
                  </span>
                </div>
                <p className="text-xs text-[#BCB5A8] mt-2 leading-relaxed">
                  Covers single-use medical needle setup, premium sterile supplies, skin preparation, and precision micro fine-line or small lettering art.
                </p>
              </div>

              {/* 4 Cost Determining Factors */}
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-[#EDE8DF] mb-3 font-heading">
                  What Determines Your Final Quote?
                </h4>
                <ul className="space-y-3 text-xs text-[#A8A296]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span><strong className="text-[#EDE8DF]">Dimensions & Detail Density:</strong> A 3-inch high-detail realistic tiger requires substantially more needle passes than a minimalist line icon.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span><strong className="text-[#EDE8DF]">Anatomical Placement:</strong> Sensitive and curved areas (ribs, throat, fingers) require specialized hand tensioning and meticulous pacing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span><strong className="text-[#EDE8DF]">Original Drafting Time:</strong> Every design is hand-crafted exclusively for you. You will never pay for artwork reused on another person.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span><strong className="text-[#EDE8DF]">Session Duration & Complexity:</strong> Multi-session sleeve or back projects are quoted with transparent milestones.</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-6 border-t border-[#23211F] mt-6">
              <p className="text-[11px] text-[#8C867B] italic">
                * All quotes are confirmed and locked in during your pre-tattoo consultation before any ink touches your skin.
              </p>
            </div>
          </div>

          {/* Card 2: Interactive Estimate Calculator (7 cols) */}
          <div className="lg:col-span-7 bg-[#121217] border border-[#2F2C27] rounded-xl p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase text-[#C5A880] mb-1 font-heading">
                  Interactive Planner
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#FDFBF7] font-heading">
                  Calculate Your Custom Estimate
                </h3>
                <p className="text-xs text-[#969085] mt-1">
                  Select your expected size, body placement, and style to preview an approximate price tier:
                </p>
              </div>

              {/* Step 1: Size Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#EDE8DF] uppercase tracking-wider mb-2">
                  1. Select Tattoo Dimensions
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SIZE_PRESETS.map((preset, idx) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setSelectedSize(idx)}
                      className={`text-left p-3 rounded-lg border text-xs transition-all ${
                        selectedSize === idx
                          ? 'bg-[#1C1A16] border-[#C5A880] text-[#FAF7F2] shadow-sm'
                          : 'bg-[#0E0E12] border-[#252320] text-[#A8A296] hover:border-[#3E3A34]'
                      }`}
                    >
                      <div className="font-medium text-[#EDE8DF]">{preset.label}</div>
                      <div className="text-[11px] text-[#C5A880] mt-0.5">{preset.priceNote}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Placement & Style Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#EDE8DF] uppercase tracking-wider mb-1.5">
                    2. Desired Body Placement
                  </label>
                  <select
                    value={selectedPlacement}
                    onChange={(e) => setSelectedPlacement(e.target.value)}
                    className="w-full bg-[#0E0E12] border border-[#2A2825] rounded-lg px-3 py-2.5 text-xs text-[#EDE8DF] focus:outline-none focus:border-[#C5A880]"
                  >
                    {BODY_PLACEMENTS.map((place) => (
                      <option key={place} value={place}>
                        {place}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#EDE8DF] uppercase tracking-wider mb-1.5">
                    3. Preferred Art Style
                  </label>
                  <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="w-full bg-[#0E0E12] border border-[#2A2825] rounded-lg px-3 py-2.5 text-xs text-[#EDE8DF] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Black & Grey Realism">Black & Grey Realism</option>
                    <option value="Blackwork & Sacred Geometry">Blackwork & Sacred Geometry</option>
                    <option value="Fine Line & Minimalist Script">Fine Line & Minimalist Script</option>
                    <option value="Neo-Traditional Color">Neo-Traditional Color</option>
                    <option value="Custom Dark Art & Chicano">Custom Dark Art & Chicano</option>
                    <option value="Cover-Up / Tattoo Rework">Cover-Up / Tattoo Rework</option>
                  </select>
                </div>
              </div>

              {/* Calculated Tier Output Box */}
              <div className="bg-[#0B0B0E] border border-[#2D2A26] rounded-lg p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1E1C1A] pb-3 mb-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#969085]">
                      Estimated Investment Range
                    </span>
                    <div className="text-2xl font-bold text-[#C5A880] font-heading tabular-nums">
                      {currentEstimate.base}
                    </div>
                  </div>
                  <div className="text-xs text-[#B5AFA4] sm:text-right">
                    <span className="text-[#EDE8DF] font-medium">{SIZE_PRESETS[selectedSize].label.split('(')[0]}</span>
                    <div className="text-[11px] text-[#8A8479]">on {selectedPlacement}</div>
                  </div>
                </div>

                <p className="text-xs text-[#A8A296] leading-relaxed">
                  {currentEstimate.description}
                </p>
              </div>

            </div>

            {/* Quick action buttons */}
            <div className="pt-6 border-t border-[#23211F] mt-6 flex flex-wrap gap-3">
              <button
                onClick={handleWhatsAppInquiry}
                className="flex-1 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-black bg-[#C5A880] hover:bg-[#D4BA94] rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat This Estimate on WhatsApp</span>
              </button>

              <a
                href="#consultation"
                className="py-3 px-5 text-xs font-medium tracking-wider uppercase text-[#EDE8DF] border border-[#3E3A34] hover:border-[#C5A880] rounded-md transition-colors text-center"
              >
                Fill Consultation Form
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
