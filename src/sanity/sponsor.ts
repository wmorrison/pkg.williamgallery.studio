import type { SanityImage } from './image';

/**
 * Sponsor document as returned from Sanity API
 */
export interface SanitySponsor {
  _id: string;
  name: string;
  tier: string;
  effectiveDate: string;
  image?: SanityImage;
}
