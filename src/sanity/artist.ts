import type { PortableTextBlock } from '@portabletext/types';
import type { SanityImage } from './image';

/**
 * Artist document as returned from Sanity API
 */
export interface SanityArtist {
  _id: string;
  name: string;
  slug: string;
  image: SanityImage;
  bio?: PortableTextBlock[];
}
