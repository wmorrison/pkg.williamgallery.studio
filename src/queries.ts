/**
 * GROQ queries for William Gallery Sanity content
 * These are the single source of truth for data fetching
 */

// Event queries
export const eventsQuery = `
  *[_type == "event"] | order(postedDate desc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    description,
    gallery,
    receptionDate,
    openingDate,
    closingDate,
    postedDate,
    image,
    photos[] {
      image,
      alt
    },
    link
  }
`;

export const eventBySlugQuery = `
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    description,
    gallery,
    receptionDate,
    openingDate,
    closingDate,
    postedDate,
    image,
    photos[] {
      image,
      alt
    },
    link
  }
`;

export const eventSlugsQuery = `
  *[_type == "event"] {
    "slug": slug.current
  }
`;

// Artist queries
export const featuredArtistsQuery = `
  *[_type == "artist" && featured == true] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    image,
    bio
  }
`;

export const artistBySlugQuery = `
  *[_type == "artist" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    image,
    bio
  }
`;

export const artistSlugsQuery = `
  *[_type == "artist" && featured == true] {
    "slug": slug.current
  }
`;

// Artwork queries
export const artworksByArtistQuery = `
  *[_type == "artwork" && artist._ref == $artistId && archived != true] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    image,
    description,
    medium,
    dimensions,
    status,
    year,
    "artist": artist->{
      _id,
      name,
      "slug": slug.current
    }
  }
`;

export const galleryArtworksQuery = `
  *[_type == "artwork" && artist->slug.current == "michael-william-jackson" && archived != true] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    image,
    description,
    medium,
    dimensions,
    status,
    year,
    "artist": artist->{
      _id,
      name,
      "slug": slug.current
    }
  }
`;

export const artworkBySlugQuery = `
  *[_type == "artwork" && slug.current == $slug && archived != true][0] {
    _id,
    title,
    "slug": slug.current,
    image,
    description,
    medium,
    dimensions,
    status,
    year,
    "artist": artist->{
      _id,
      name,
      "slug": slug.current
    }
  }
`;

// Sponsor queries
export const sponsorsQuery = `
  *[_type == "sponsor" && active == true] | order(effectiveDate desc) {
    _id,
    name,
    tier,
    effectiveDate,
    image
  }
`;
