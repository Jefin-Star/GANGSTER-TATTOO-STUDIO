import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does your tattoo pricing work and why does it start at ₹500?',
      answer: `Our studio baseline starts at ₹${STUDIO_CONFIG.startingPriceINR}, which covers our medical sterile cartridge needle setup, organic inks, and skin prep for micro tattoos, minimalist symbols, or single-word lettering. For larger, intricate, or realism work, the final price is customized based on dimensions, body curvature, and session duration. You will receive an exact confirmed quote during your consultation before we begin.`
    },
    {
      question: 'Why is custom tattooing the sole service offered at Gangster Tattoo Studio?',
      answer: 'We believe your skin deserves an original work of art, not an assembly-line stamp. We do not do piercing or reuse mass-produced internet templates. Founder Rony A collaborates with you to draft a design tailored strictly to your aesthetic, anatomy, and personality.'
    },
    {
      question: 'How do I book an appointment with Founder Rony A?',
      answer: 'You can fill out the online Consultation Form on this page, or connect with Rony directly on WhatsApp (+91 85901 85807) or Instagram. We discuss your reference ideas, confirm the sizing, and schedule your preferred slot between 9:30 AM and 10:00 PM.'
    },
    {
      question: 'What health & safety protocols do you follow?',
      answer: 'We maintain hospital-grade sanitation standards: 100% single-use EO gas-sterilized cartridge needles opened in your presence, medical autoclave sterilization for equipment grips, hypoallergenic organic vegan inks, and complete protective barrier wrapping on all workstations.'
    },
    {
      question: 'How should I prepare for my tattoo session?',
      answer: 'Get a good night’s rest, drink plenty of water, and eat a hearty meal 1 to 2 hours before arriving to maintain stable blood sugar. Avoid alcohol or blood-thinning medications for 24 hours prior. Wear comfortable clothing that provides easy access to the chosen tattoo placement.'
    }
  ];

  return (
    <section className="py-20 bg-[#0A0A0D] relative border-t border-[#1C1A18]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-3">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A880]">
            Everything You Need To Know
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#FAF7F2] font-heading text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#A8A296]">
            Transparent answers regarding our custom design process, starting costs, and safety.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-[#121217] border border-[#272521] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-[#EDE8DF] hover:text-[#C5A880] transition-colors"
                >
                  <span className="font-heading">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C5A880] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#A8A296] leading-relaxed border-t border-[#1F1E1B]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
