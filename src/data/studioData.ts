import { StudioInfo } from '../types/tattoo';

/**
 * GANGSTER TATTOO STUDIO Centralized Configuration & Editable Placeholders
 * Easily update studio details, contact info, pricing, and operating hours here.
 */
export const STUDIO_CONFIG: StudioInfo = {
  name: 'GANGSTER TATTOO STUDIO',
  tagline: 'Where Vision Meets Skin — Pure Custom Artistry',
  motto: 'INK IS LOYALTY · ART IS RESPECT',
  
  // Founder & Artist Profile
  founderName: 'Rony A',
  founderTitle: 'Professional Tattoo Artist & Founder',
  founderExperience: '8 Years of Professional Experience',
  founderBio: 'Dedicated to the pure craft of custom tattooing. With over 8 years of relentless dedication to ink precision, Rony A crafts bespoke tattoos tailored to your anatomy, personal narrative, and distinct aesthetic. Never replicated, never mass-produced.',
  
  // Pricing transparency
  startingPriceINR: 500,
  
  // Operating Hours
  openingHours: '9:30 AM – 10:00 PM',
  daysOpen: 'Monday to Sunday',
  
  // Contact Information (Editable Placeholders)
  whatsappNumber: '8590185807',
  whatsappDisplay: '+91 85901 85807',
  email: 'ronythegamexxx@gmail.com',
  instagramUrl: 'https://www.instagram.com/gangster_tattoo_studio?obrf=cWo5MnFoaGsyMnZ1',
  instagramHandle: '@gangster_tattoo_studio',
  
  // Address & Maps
  addressText: 'GANGSTER TATTOO STUDIO, Kollam, Kerala 691001, India',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.1526762385806!2d76.6068212!3d8.8860376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd228286980f%3A0x40e9126d80368a17!2sGANGSTER%20TATTOO%20STUDIO!5e1!3m2!1sen!2sin!4v1794045396398!5m2!1sen!2sin',
  
  // Official Studio Logo / Crest Asset provided by the user
  logoPath: '/assets/aistudio/4eeff132-25b3-4eba-a0b2-28ffb62d2a4d_4eab42c1.jpg'
};

export const HYGIENE_STANDARDS = [
  {
    title: '100% Single-Use Sterile Needles',
    description: 'Every needle cartridge is pre-sterilized with ethylene oxide gas, individually blister-sealed, and opened directly in front of you prior to the session.'
  },
  {
    title: 'Medical Grade Autoclave Sterilization',
    description: 'All reusable stainless grips and equipment undergo hospital-grade ultrasonic cleaning and high-pressure steam autoclave sterilization cycles.'
  },
  {
    title: 'Certified Vegan & Organic Inks',
    description: 'We use premium, hypoallergenic, heavy-metal-free organic pigments engineered for crisp longevity, skin biocompatibility, and deep black retention.'
  },
  {
    title: 'Zero Cross-Contamination Protocol',
    description: 'Full barrier film wrapping on all tattoo machines, power cords, spray bottles, and ergonomic armrests, disposed of and sanitized after each client.'
  }
];

export const BODY_PLACEMENTS = [
  'Forearm (Inner/Outer)',
  'Bicep & Shoulder',
  'Chest & Sternum',
  'Back / Spine',
  'Ribs & Side Torso',
  'Wrist / Hand',
  'Thigh & Leg',
  'Calf & Shin',
  'Ankle / Foot',
  'Collarbone / Neck',
  'Full Sleeve Project',
  'Other / Custom Placement'
];

export const SIZE_PRESETS = [
  { label: 'Micro / Fine Symbol (1 - 2 inches)', priceNote: 'Starts from ₹500' },
  { label: 'Small Custom Piece (2 - 4 inches)', priceNote: 'Custom quote based on detail' },
  { label: 'Medium Statement (4 - 7 inches)', priceNote: 'Half day / custom session' },
  { label: 'Large / Half Sleeve (8 - 12 inches)', priceNote: 'Multi-session custom artwork' },
  { label: 'Full Sleeve or Full Back Piece', priceNote: 'Project rate consultation' }
];
