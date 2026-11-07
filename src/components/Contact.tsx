import React from 'react';
import { MessageCircle, Mail, Instagram, MapPin, Clock, Phone, ExternalLink, Navigation } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0B0B0E] relative border-t border-[#1C1A18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A880]">
            Connect & Visit
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] font-heading text-balance">
            Contact Gangster Tattoo Studio
          </h2>
          <p className="text-sm sm:text-base text-[#A8A296] leading-relaxed">
            Drop by our studio for an in-person design consultation, or reach out directly on WhatsApp or Instagram. Walk-ins are welcome subject to artist availability.
          </p>
        </div>

        {/* 2-Column Split: Contact Information & Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=Hi%20Rony,%20I%20am%20reaching%20out%20via%20the%20Gangster%20Tattoo%20Studio%20website%20to%20discuss%20a%20custom%20tattoo.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-[#121217] hover:bg-[#15151C] border border-[#2A2723] hover:border-[#25D366]/50 rounded-xl transition-all duration-200 shadow-md block"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-lg group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8E887E]">
                      Direct WhatsApp Inquiry
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] font-heading group-hover:text-[#25D366] transition-colors">
                      {STUDIO_CONFIG.whatsappDisplay}
                    </h3>
                    <p className="text-xs text-[#A8A296] mt-0.5">
                      Fastest response for design references & quotes
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#666] group-hover:text-[#25D366] transition-colors" />
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={STUDIO_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-[#121217] hover:bg-[#15151C] border border-[#2A2723] hover:border-[#E1306C]/50 rounded-xl transition-all duration-200 shadow-md block"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#E1306C]/10 text-[#E1306C] rounded-lg group-hover:scale-105 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8E887E]">
                      Official Instagram
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] font-heading group-hover:text-[#E1306C] transition-colors">
                      {STUDIO_CONFIG.instagramHandle}
                    </h3>
                    <p className="text-xs text-[#A8A296] mt-0.5">
                      Daily tattoo reels, healed pieces & studio stories
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#666] group-hover:text-[#E1306C] transition-colors" />
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${STUDIO_CONFIG.email}`}
              className="group p-6 bg-[#121217] hover:bg-[#15151C] border border-[#2A2723] hover:border-[#C5A880]/50 rounded-xl transition-all duration-200 shadow-md block"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#C5A880]/10 text-[#C5A880] rounded-lg group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8E887E]">
                      Official Email
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] font-heading group-hover:text-[#C5A880] transition-colors">
                      {STUDIO_CONFIG.email}
                    </h3>
                    <p className="text-xs text-[#A8A296] mt-0.5">
                      For large project briefs, sponsorships & inquiries
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#666] group-hover:text-[#C5A880] transition-colors" />
              </div>
            </a>

            {/* Studio Hours Card */}
            <div className="p-6 bg-[#0E0E12] border border-[#24221F] rounded-xl">
              <div className="flex items-center gap-3 text-xs text-[#C5A880] font-semibold uppercase tracking-wider mb-2 font-heading">
                <Clock className="w-4 h-4" />
                <span>Studio Operating Hours</span>
              </div>
              <div className="flex justify-between items-center text-sm font-medium text-[#FAF7F2]">
                <span>{STUDIO_CONFIG.daysOpen}</span>
                <span className="text-[#C5A880]">{STUDIO_CONFIG.openingHours}</span>
              </div>
              <p className="text-[11px] text-[#8C867B] mt-1.5">
                Appointments are recommended to ensure dedicated 1-on-1 drawing and tattooing sessions with Rony A.
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Location Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#121217] border border-[#2A2723] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between">
            
            {/* Studio Address Header Banner */}
            <div className="p-6 bg-[#15151B] border-b border-[#262420] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#FAF7F2] font-heading">
                    Studio Location & Directions
                  </h4>
                  <p className="text-xs text-[#A8A296] mt-0.5">
                    {STUDIO_CONFIG.addressText}
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=GANGSTER+TATTOO+STUDIO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C5A880]/10 hover:bg-[#C5A880]/20 text-[#C5A880] text-xs font-medium rounded border border-[#C5A880]/30 transition-colors whitespace-nowrap shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Google Maps Responsive Embed */}
            <div className="relative w-full h-[380px] sm:h-[420px] bg-black">
              <iframe
                title="GANGSTER TATTOO STUDIO Google Maps"
                src={STUDIO_CONFIG.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
            </div>

            {/* Bottom Bar: Instant Call to Action */}
            <div className="p-5 bg-[#0F0F13] border-t border-[#262420] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#A8A296]">
                Have questions before your visit?
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=Hi%20Rony,%20I%20would%20like%20to%20plan%20a%20visit%20to%20Gangster%20Tattoo%20Studio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-black bg-[#25D366] hover:bg-[#20ba5a] rounded transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={STUDIO_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#E1306C] hover:bg-[#d02560] rounded transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Connect on Instagram</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
