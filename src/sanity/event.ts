import type { PortableTextBlock } from '@portabletext/types';
import type { SanityImage } from './image';

export type GalleryLocation = 'williamgallery' | 'grigio' | 'lyric';

export interface EventPhoto {
  image: SanityImage;
  alt: string;
}

/**
 * Event document as returned from Sanity API
 */
export interface SanityEvent {
  _id: string;
  title: string;
  slug: string;
  summary?: string;
  description: PortableTextBlock[];
  gallery: GalleryLocation;
  receptionDate?: string;
  openingDate: string;
  closingDate: string;
  postedDate: string;
  image: SanityImage;
  photos?: EventPhoto[];
  link?: string;
}
