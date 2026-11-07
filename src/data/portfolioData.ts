import { PortfolioItem } from '../types/tattoo';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'ink-01',
    title: 'The Shadow Panther',
    category: 'realism',
    categoryLabel: 'Black & Grey Realism',
    placement: 'Forearm / Outer Sleeve',
    imageUrl: './images/regenerated_image_1794048773193.jpg',
    fallbackGradient: 'from-zinc-900 via-stone-900 to-black',
    description: 'Hyper-detailed predatory panther portrait rendered with micro-needle shading, high-contrast negative space reflections, and deep black saturation.',
    estimatedHours: '6 - 7 Hours',
    featured: true
  },
  {
    id: 'ink-02',
    title: 'Sacred Mandala & Dotwork Geometric',
    category: 'blackwork',
    categoryLabel: 'Blackwork & Geometry',
    placement: 'Shoulder & Tricep Cap',
    imageUrl: './images/regenerated_image_1794048688172.png',
    fallbackGradient: 'from-stone-950 via-zinc-900 to-neutral-950',
    description: 'Precision stippled sacred geometry incorporating mathematical fibonacci spirals, dotwork shading gradients, and razor-sharp crisp outer linework.',
    estimatedHours: '5 Hours',
    featured: true
  },
  {
    id: 'ink-03',
    title: 'Loyalty & Honor Vintage Lettering',
    category: 'script',
    categoryLabel: 'Custom Script & Chicano',
    placement: 'Upper Chest / Collarbone',
    imageUrl: './images/regenerated_image_1794049312001.jpg',
    fallbackGradient: 'from-neutral-900 via-stone-900 to-black',
    description: 'Hand-drawn bespoke calligraphy lettering inspired by vintage underground typography with filigree flourish flourishes, custom tailored to chest curvature.',
    estimatedHours: '3 - 4 Hours',
    featured: true
  },
  {
    id: 'ink-06',
    title: 'Botanical Fern & Fine-Line Spine',
    category: 'script',
    categoryLabel: 'Fine Line Art',
    placement: 'Spine / Downward Column',
    imageUrl: './images/regenerated_image_1794049309557.jpg',
    fallbackGradient: 'from-stone-900 via-zinc-900 to-black',
    description: 'Delicate single-needle botanical foliage cascading down the spine vertebra, engineered with graceful organic flow and microscopic leaf vein details.',
    estimatedHours: '2.5 Hours (Starts at ₹500 for micro size)',
    featured: false
  }
];
