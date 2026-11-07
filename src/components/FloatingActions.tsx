import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
      {/* WhatsApp Fast Chat */}
      <a
        href={`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=Hi%20Rony,%20I%20am%20visiting%20the%20Gangster%20Tattoo%20Studio%20website%20and%20would%20like%20to%20discuss%20a%20custom%20tattoo.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-3.5 py-2.5 bg-[#25D366] text-black font-semibold text-xs rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-200"
        title="Chat on WhatsApp"
        aria-label="Chat with artist on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-black" />
        <span className="hidden sm:inline font-sans tracking-wide">
          Chat on WhatsApp
        </span>
      </a>

      {/* Book Consultation Fast Link */}
      <button
        onClick={onOpenBooking}
        className="group flex items-center gap-2 px-3.5 py-2.5 bg-[#C5A880] text-black font-semibold text-xs rounded-full shadow-2xl hover:bg-[#D4BA94] hover:scale-105 active:scale-95 transition-all duration-200"
        title="Book Consultation"
        aria-label="Book a tattoo consultation"
      >
        <Calendar className="w-4 h-4" />
        <span className="hidden sm:inline font-sans tracking-wide">
          Book Consultation
        </span>
      </button>
    </div>
  );
};
