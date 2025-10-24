# Michael Lau Chiropractic Website

A modern, professional chiropractic website built with React, TypeScript, and Tailwind CSS featuring an integrated blog management system.

## Features

- **Responsive Design**: Beautiful, mobile-first design that works on all devices
- **Hero Section**: Eye-catching full-viewport hero with call-to-action
- **Patient Testimonials**: Auto-rotating carousel with manual controls
- **Conditions Treated**: Comprehensive list of treatable conditions
- **Image Gallery**: Professional photos with lightbox viewing
- **Integrated Blog System**: Self-hosted blog with admin interface
- **Contact Information**: Hours, location, and contact details
- **Smooth Navigation**: Single-page app with smooth scrolling

## Blog CMS Options

This website includes a **self-hosted JSON-based blog system** that stores content using the Spark KV storage system. This means:

- ✅ No external dependencies
- ✅ No monthly fees
- ✅ Complete data ownership
- ✅ Simple admin interface built-in
- ✅ Fast, reliable performance

### How to Use the Blog

1. Click the "Manage Blog" button in the Blog section
2. Create, edit, or delete posts using the admin interface
3. Posts are stored securely and persist between sessions
4. No technical knowledge required!

### Alternative CMS Options

If you need more advanced features, consider these alternatives:

#### Option 1: Current Implementation (JSON-based)
**Pros:**
- Already implemented and working
- No setup required
- No external dependencies
- Free forever
- Fast and simple

**Cons:**
- No rich text editor (uses textarea)
- Limited to text content
- Manual formatting required

**Best for:** Simple blogs with occasional updates

#### Option 2: Markdown Files (Self-Hosted)
Store blog posts as markdown files in your repository.

**Pros:**
- Version control with Git
- Write in markdown format
- Can include images
- Portable and standard format

**Cons:**
- Requires deployment for each update
- No web-based editor
- Need to know markdown syntax

**Implementation:**
- Store `.md` files in `src/content/blog/`
- Use a markdown parser library (like `marked` - already installed)
- Create a build script to convert markdown to JSON

**Best for:** Tech-savvy users who want version control

#### Option 3: Headless CMS (Cloud)
Integrate with services like Contentful, Sanity, or Strapi.

**Pros:**
- Rich text editor
- Media management
- Collaboration features
- Professional publishing workflows
- API-based content delivery

**Cons:**
- Monthly costs (free tiers available)
- External dependency
- Requires API integration
- More complex setup

**Popular Services:**
- **Contentful** (contentful.com) - Free tier: 1 locale, 25k records
- **Sanity** (sanity.io) - Free tier: 3 users, unlimited API requests
- **Strapi** (strapi.io) - Self-hostable or cloud, free tier available

**Best for:** Professional blogs with multiple authors

#### Option 4: Strapi (Self-Hosted)
Run your own headless CMS on your server.

**Pros:**
- Full control
- No monthly fees after hosting
- Rich admin panel
- Media library
- Role-based access

**Cons:**
- Requires server setup
- Need to manage hosting
- More technical complexity
- Separate deployment

**Best for:** Advanced users who want complete control

## Blog CMS Comparison Table

| Feature | Current (JSON) | Markdown | Contentful | Sanity | Strapi Self-Hosted |
|---------|---------------|----------|------------|--------|-------------------|
| Cost | Free | Free | Free tier | Free tier | Hosting only |
| Setup Time | Done ✓ | 2-3 hours | 1-2 hours | 1-2 hours | 4-6 hours |
| Rich Editor | No | No | Yes | Yes | Yes |
| Images | No | Yes | Yes | Yes | Yes |
| Updates | Instant | Requires deploy | Instant | Instant | Instant |
| Complexity | Low | Medium | Medium | Medium | High |

## Recommendation

**For most users:** Stick with the current JSON-based system. It's simple, works great, and requires no additional setup or costs.

**If you need images in posts:** Consider switching to markdown files or upgrading to Sanity/Contentful.

**If you have multiple authors:** Use a cloud headless CMS like Sanity or Contentful.

**If you're technical and want complete control:** Self-host Strapi.

## Getting Started with External CMS (If Needed)

### Setting up Contentful (Example)

1. Sign up at contentful.com
2. Create a new space
3. Define a "Blog Post" content model
4. Get your API credentials
5. Update the Blog component to fetch from Contentful's API

```typescript
// Example Contentful integration
import { createClient } from 'contentful'

const client = createClient({
  space: 'YOUR_SPACE_ID',
  accessToken: 'YOUR_ACCESS_TOKEN'
})

async function getBlogPosts() {
  const entries = await client.getEntries({
    content_type: 'blogPost'
  })
  return entries.items
}
```

### Setting up Markdown Files (Example)

1. Create `src/content/blog/` directory
2. Add `.md` files for each post with frontmatter:

```markdown
---
title: "My First Post"
date: "2024-01-15"
author: "Dr. Michael Lau"
tags: ["wellness", "tips"]
---

Your blog post content here...
```

3. Create a build script to parse markdown files
4. Update the Blog component to import from the parsed data

## Technical Stack

- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- shadcn/ui components
- Spark KV storage
- Phosphor Icons

## License

© 2024 Michael Lau Chiropractic. All rights reserved.
