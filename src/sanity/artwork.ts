import type { PortableTextBlock } from '@portabletext/types';
import type { SanityImage } from './image';

export type ArtworkStatus = 'available' | 'sold' | 'reserved';

/**
 * Artwork document as returned from Sanity API
 */
export interface SanityArtwork {
  _id: string;
  title: string;
  slug: string;
  image: SanityImage;
  description?: PortableTextBlock[];
  medium?: string;
  dimensions?: string;
  status?: ArtworkStatus;
  year?: number;
  artist: {
    _id: string;
    name: string;
    slug: string;
  };
}
