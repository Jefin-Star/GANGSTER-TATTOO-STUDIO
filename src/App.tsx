/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PricingTransparency } from './components/PricingTransparency';
import { Portfolio } from './components/Portfolio';
import { ConsultationForm } from './components/ConsultationForm';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { PortfolioItem } from './types/tattoo';

export default function App() {
  const [selectedArtworkForConsultation, setSelectedArtworkForConsultation] = useState<PortfolioItem | null>(null);

  const handleOpenBooking = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPortfolioItem = (item: PortfolioItem) => {
    setSelectedArtworkForConsultation(item);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-[#EDE7DE] selection:bg-[#C5A880]/30 selection:text-[#FAF7F2] font-sans antialiased overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. About Our Studio & Sole Custom Service */}
        <About />

        {/* 3. Pricing Transparency & Interactive Estimator */}
        <PricingTransparency />

        {/* 4. Artist Portfolio with Lightbox Zoom */}
        <Portfolio onSelectForConsultation={handleSelectPortfolioItem} />

        {/* 5. Booking / Consultation Form */}
        <ConsultationForm
          initialTattooIdea={
            selectedArtworkForConsultation
              ? `Custom design inspired by "${selectedArtworkForConsultation.title}" (${selectedArtworkForConsultation.categoryLabel})`
              : ''
          }
          initialPlacement={selectedArtworkForConsultation?.placement || ''}
        />

        {/* 6. Contact Us & Google Maps Embed */}
        <Contact />

        {/* 7. FAQs */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenBooking={handleOpenBooking} />
    </div>
  );
}
