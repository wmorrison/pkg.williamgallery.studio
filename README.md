# @williamgallery/studio-types

Shared Sanity types and GROQ queries for William Gallery projects.

## Installation

Add `.npmrc` to your project root:

```
@williamgallery:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then install:

```bash
npm install @williamgallery/studio-types
```

## Usage

### Types

```typescript
import type {
  SanityArtist,
  SanityArtwork,
  SanityEvent,
  SanitySponsor,
  SanityImage,
  ArtworkStatus,
  GalleryLocation
} from '@williamgallery/studio-types';
```

### Queries

```typescript
import {
  eventsQuery,
  eventBySlugQuery,
  featuredArtistsQuery,
  galleryArtworksQuery
} from '@williamgallery/studio-types';

const events = await client.fetch<SanityEvent[]>(eventsQuery);
```

## Publishing

```bash
# Login to GitHub Packages (first time only)
npm login --registry=https://npm.pkg.github.com

# Bump version and publish
npm version patch  # or minor/major
npm publish
```

## Development

```bash
npm install
npm run build
```
