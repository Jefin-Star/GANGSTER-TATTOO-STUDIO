import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, MessageCircle, Instagram, Sparkles, MapPin, Clock } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { STUDIO_CONFIG } from '../data/studioData';
import { PortfolioItem } from '../types/tattoo';

interface PortfolioProps {
  onSelectForConsultation?: (item: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectForConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Custom Works' },
    { id: 'realism', label: 'Realism' },
    { id: 'blackwork', label: 'Blackwork & Geometry' },
    { id: 'script', label: 'Script & Fine Line' },
    { id: 'neotraditional', label: 'Neo-Traditional' },
    { id: 'custom', label: 'Custom Compositions' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const handleNextModal = () => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeModalItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveModalItem(filteredItems[nextIndex]);
  };

  const handlePrevModal = () => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeModalItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveModalItem(filteredItems[prevIndex]);
  };

  const handleWhatsAppArtworkInquiry = (item: PortfolioItem) => {
    const text = encodeURIComponent(
      `Hi Rony, I was viewing your portfolio on Gangster Tattoo Studio website and loved "${item.title}" (${item.categoryLabel}). I would love to discuss a custom design inspired by this style for my ${item.placement}.`
    );
    window.open(`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0B0B0E] relative border-t border-[#1C1A18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A880]">
              Original Needlework & Ink Mastery
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] font-heading">
              Artist Portfolio
            </h2>
            <p className="text-sm text-[#A8A296] max-w-xl">
              Each piece represents an individual collaboration between client and artist. Explore our latest custom black-and-grey realism, dark ornamental geometry, and fine-line script.
            </p>
          </div>

          {/* Social Proof Link */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={STUDIO_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#E1306C] border border-[#E1306C]/40 hover:bg-[#E1306C]/10 rounded-md transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>More On Instagram</span>
            </a>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-md text-xs font-medium tracking-wide uppercase whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#C5A880] text-black shadow-md'
                  : 'bg-[#141418] border border-[#262420] text-[#B3ACA0] hover:text-[#EDE7DE] hover:border-[#3D3A34]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative bg-[#121217] border border-[#272522] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Fallback Mesh */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  onError={(e) => {
                    // Fallback to stylized dark container if CDN is blocked
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <div className="p-3 rounded-full bg-[#C5A880] text-black shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Clean unboxed category kicker on top */}
                <div className="absolute top-3 left-3 text-[11px] font-medium tracking-wider uppercase text-[#D5BE9B] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-[#3E3A34]">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-[#F5F2EA] font-heading group-hover:text-[#C5A880] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#969085] mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#201E1B] flex items-center justify-between text-[11px] text-[#A69F92]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                    {item.placement}
                  </span>
                  <span className="text-[#C5A880] font-medium">
                    View Artwork →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Action Strip: Instagram & WhatsApp */}
        <div className="mt-16 bg-gradient-to-r from-[#171513] via-[#1F1C18] to-[#171513] border border-[#38332D] rounded-xl p-8 text-center space-y-4 shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A880]">
            <Sparkles className="w-4 h-4 text-[#C5A880]" />
            <span>Have A Specific Tattoo Vision In Mind?</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#FDFBF7] font-heading">
            Connect Directly With Artist Rony A
          </h3>
          <p className="text-sm text-[#B8B1A5] max-w-2xl mx-auto">
            Browse our latest daily client sessions on Instagram, or send your reference sketches directly on WhatsApp for an immediate custom consultation and size estimate.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <a
              href={STUDIO_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#E1306C] hover:bg-[#d02560] rounded-md transition-colors shadow-lg shadow-[#E1306C]/20 flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Connect on Instagram</span>
            </a>

            <a
              href={`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=Hi%20Rony,%20I%20am%20exploring%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20custom%20tattoo%20idea%20and%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-black bg-[#25D366] hover:bg-[#20ba5a] rounded-md transition-colors shadow-lg shadow-[#25D366]/20 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp ({STUDIO_CONFIG.whatsappDisplay})</span>
            </a>
          </div>
        </div>

      </div>

      {/* Modal Zoom / Lightbox Dialog */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative bg-[#121217] border border-[#38332D] rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 p-2 text-[#EDE7DE] bg-black/60 hover:bg-[#C5A880] hover:text-black rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Artwork Zoom View */}
            <div className="relative md:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[75vh]"
              />

              {/* Prev / Next Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevModal();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#C5A880] hover:text-black transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextModal();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#C5A880] hover:text-black transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right: Detailed Specifications & Inquire Actions */}
            <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between overflow-y-auto space-y-6 bg-[#14141A]">
              <div className="space-y-4">
                <div className="inline-block text-[11px] font-semibold tracking-widest uppercase text-[#C5A880]">
                  {activeModalItem.categoryLabel}
                </div>
                
                <h3 className="text-2xl font-bold text-[#FAF7F2] font-heading">
                  {activeModalItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#B8B1A5] leading-relaxed">
                  {activeModalItem.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#23211F] text-xs">
                  <div className="flex items-center justify-between text-[#8E887E]">
                    <span>Placement</span>
                    <span className="text-[#EDE8DF] font-medium">{activeModalItem.placement}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#8E887E]">
                    <span>Session Time</span>
                    <span className="text-[#EDE8DF] font-medium">{activeModalItem.estimatedHours}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#8E887E]">
                    <span>Artist</span>
                    <span className="text-[#C5A880] font-medium">{STUDIO_CONFIG.founderName} (Founder)</span>
                  </div>
                  <div className="flex items-center justify-between text-[#8E887E]">
                    <span>Studio Starting Price</span>
                    <span className="text-[#EDE8DF] font-medium">Starts from ₹{STUDIO_CONFIG.startingPriceINR}</span>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-[#23211F] space-y-3">
                <button
                  onClick={() => handleWhatsAppArtworkInquiry(activeModalItem)}
                  className="w-full py-3 px-4 text-xs font-semibold tracking-wider uppercase text-black bg-[#C5A880] hover:bg-[#D4BA94] rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuss Similar Piece On WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    if (onSelectForConsultation) {
                      onSelectForConsultation(activeModalItem);
                    }
                    setActiveModalItem(null);
                    const formEl = document.getElementById('consultation');
                    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 text-xs font-medium tracking-wider uppercase text-[#EDE8DF] border border-[#3E3A34] hover:border-[#C5A880] rounded-md transition-colors"
                >
                  Book Consultation For This Style
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
