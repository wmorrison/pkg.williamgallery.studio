/**
 * Sanity image reference with optional hotspot and crop
 */
export interface SanityImage {
  asset: {
    _ref: string;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}
