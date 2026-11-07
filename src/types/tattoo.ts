export interface PortfolioItem {
  id: string;
  title: string;
  category: 'realism' | 'blackwork' | 'neotraditional' | 'script' | 'custom';
  categoryLabel: string;
  placement: string;
  imageUrl: string;
  fallbackGradient: string;
  description: string;
  estimatedHours: string;
  featured?: boolean;
}

export interface ConsultationFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  tattooIdea: string;
  approximateSize: string;
  placement: string;
  referenceImage: File | null;
  referenceImagePreview: string | null;
  preferredDate: string;
  preferredTimeSlot: string;
  additionalNotes?: string;
}

export interface StudioInfo {
  name: string;
  tagline: string;
  motto: string;
  founderName: string;
  founderTitle: string;
  founderExperience: string;
  founderBio: string;
  startingPriceINR: number;
  openingHours: string;
  daysOpen: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  instagramUrl: string;
  instagramHandle: string;
  addressText: string;
  googleMapsEmbedUrl: string;
  logoPath: string;
}
