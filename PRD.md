# Planning Guide

A professional chiropractor website for Michael Lau that combines modern elegance with approachability, featuring patient testimonials, conditions treated, image galleries, and integrated blog capabilities.

**Experience Qualities**: 
1. **Professional yet Approachable** - The design should inspire confidence in clinical expertise while maintaining warmth and accessibility
2. **Calming and Restorative** - Visual elements and interactions should evoke feelings of healing, balance, and wellness
3. **Clear and Informative** - Information architecture prioritizes patient needs with easy navigation to services, conditions, and contact options

**Complexity Level**: Light Application (multiple features with basic state)
- Multi-section single-page application with navigation, testimonial carousel, image galleries, blog integration options, and contact information. Includes state management for active sections and blog content display.

## Essential Features

### Hero Section with Booking CTA
- **Functionality**: Full-viewport hero with practice name, tagline, and prominent booking button
- **Purpose**: Immediate visual impact and clear call-to-action for new patients
- **Trigger**: Page load
- **Progression**: User lands on page → sees calming hero image with overlay → reads practice name/tagline → clicks "Book Online" button → (future: booking system)
- **Success criteria**: Hero captures attention within 2 seconds, CTA button is immediately visible

### Navigation Menu
- **Functionality**: Fixed header navigation with smooth scroll to sections (Home, About, Conditions Treated, Services, Blog, Contact)
- **Purpose**: Easy access to all website sections without page reloads
- **Trigger**: Click navigation items
- **Progression**: User clicks nav item → smooth scroll animation to section → section highlighted
- **Success criteria**: Navigation responds within 100ms, smooth scroll completes in <1s

### Patient Testimonials Carousel
- **Functionality**: Rotating testimonials with star ratings, patient names, and review text
- **Purpose**: Build trust through social proof and patient experiences
- **Trigger**: Auto-rotation every 8 seconds, manual navigation with arrow buttons
- **Progression**: Testimonial displays → auto-advances after 8s → user can manually navigate → smooth transition between reviews
- **Success criteria**: Seamless transitions, readable text, clear attribution

### Conditions Treated Display
- **Functionality**: Two categorized lists - "Specific Conditions" (highlighted) and "General Conditions" (comprehensive list)
- **Purpose**: SEO optimization and patient self-identification of treatable conditions
- **Trigger**: Scroll to section
- **Progression**: User scrolls → section enters viewport → conditions displayed in organized lists → user scans for their condition
- **Success criteria**: Clear categorization, scannable layout, comprehensive coverage

### Before/After Gallery
- **Functionality**: Grid layout of patient transformation images and treatment photos
- **Purpose**: Visual demonstration of treatment effectiveness and clinic environment
- **Trigger**: Scroll to section, click images for lightbox view
- **Progression**: User scrolls to gallery → sees grid of images → clicks image → lightbox opens with larger view → navigates through images → closes lightbox
- **Success criteria**: Responsive grid, smooth lightbox transitions, accessible navigation

### Blog Integration Section
- **Functionality**: Display latest 3 blog posts on homepage with "View All Posts" button; dedicated blog navigator page showing all posts in a grid with images
- **Purpose**: Educational content for SEO, patient education, and authority building
- **Trigger**: Scroll to blog section on homepage, or click "BLOG" in navigation to view full blog page
- **Progression**: User scrolls → sees latest 3 blog posts → clicks "View All Posts" or navigation link → sees dedicated blog page with all posts in grid layout → clicks post → reads content in modal → navigates back
- **Success criteria**: Fast loading, clear post previews with images, easy content updates via admin interface

**Blog CMS Options**:
- **Implemented: JSON-based with Admin UI** - Blog posts stored as JSON objects in KV store with title, excerpt, content, author, date, tags, and optional image URL. Managed via admin interface accessible from both homepage and blog navigator page.
- Blog posts display in grid layout (1 column mobile, 2 tablet, 3 desktop)
- Each post card shows image (or gradient fallback), author, date, and title
- Image hover effects with subtle scale transform
- Clicking any post opens full content in modal dialog

### Contact Information & Hours
- **Functionality**: Address, phone numbers, business hours in organized layout with prominent booking CTA
- **Purpose**: Essential contact information for patient outreach
- **Trigger**: Scroll to footer section
- **Progression**: User needs contact info → scrolls to footer → finds hours/phone/address → calls or books appointment
- **Success criteria**: All contact info visible, phone numbers clickable on mobile, clear hours display

## Edge Case Handling
- **No testimonials loaded**: Display placeholder message encouraging patients to leave reviews
- **Empty blog section**: Show "Coming soon" message with option to subscribe for updates
- **Image loading failures**: Graceful fallbacks with placeholder backgrounds or alt text
- **Mobile navigation**: Hamburger menu for small screens with slide-out drawer
- **Long condition lists**: Organized into columns with proper spacing for readability
- **Slow network**: Progressive loading with skeleton states for images and content

## Design Direction
The design should feel professional, calming, and trustworthy - evoking the clinical precision of medical care while maintaining the warmth of holistic healing. A minimal interface with generous whitespace serves the content without overwhelming visitors, creating a sense of spaciousness and breathing room that mirrors the relief patients seek.

## Color Selection
Complementary color scheme (blue/warm accents) to balance professionalism with approachability

- **Primary Color**: Deep professional blue (oklch(0.35 0.08 240)) - communicates trust, expertise, and medical professionalism
- **Secondary Colors**: 
  - Soft neutral gray (oklch(0.96 0.005 240)) for backgrounds - creates calm, clean space
  - Warm beige (oklch(0.93 0.01 60)) for alternate sections - adds warmth without overwhelming
- **Accent Color**: Warm teal (oklch(0.55 0.12 200)) for CTAs and highlights - draws attention while maintaining calming tone
- **Foreground/Background Pairings**:
  - Background White (oklch(1 0 0)): Dark text (oklch(0.2 0.01 240)) - Ratio 15.8:1 ✓
  - Card Backgrounds (oklch(0.98 0.005 240)): Dark text (oklch(0.2 0.01 240)) - Ratio 14.2:1 ✓
  - Primary Blue (oklch(0.35 0.08 240)): White text (oklch(1 0 0)) - Ratio 8.9:1 ✓
  - Accent Teal (oklch(0.55 0.12 200)): White text (oklch(1 0 0)) - Ratio 4.7:1 ✓
  - Muted sections (oklch(0.93 0.01 60)): Dark text (oklch(0.2 0.01 240)) - Ratio 12.5:1 ✓

## Font Selection
Typography should convey modern professionalism while remaining highly readable across devices - combining geometric sans-serif for structure with a touch of elegance.

- **Typographic Hierarchy**:
  - H1 (Practice Name/Hero): Inter Bold/48px/tight letter-spacing/-0.02em - commanding presence
  - H2 (Section Headers): Inter SemiBold/36px/normal letter-spacing - clear section divisions
  - H3 (Subsections): Inter Medium/24px/normal letter-spacing - organized hierarchy
  - Body (Main content): Inter Regular/16px/1.6 line-height - optimal readability
  - Accent (Taglines): Inter Light/18px/wide letter-spacing/0.05em - elegant breathing room
  - Small (Hours, captions): Inter Regular/14px/1.5 line-height - supportive information

## Animations
Animations should feel gentle and organic, reinforcing the healing nature of the practice - subtle enough to enhance without distracting from the content.

- **Purposeful Meaning**: Use smooth, eased transitions that mirror the gradual progression of healing and adjustment
- **Hierarchy of Movement**: 
  - Hero section: Subtle fade-in on load (800ms) for welcoming entrance
  - Navigation: Smooth scroll with easing (600ms) for spatial continuity
  - Testimonials: Gentle slide transitions (400ms) for content flow
  - Images: Fade and scale on hover (200ms) for interactive feedback
  - CTAs: Subtle lift on hover (150ms) for tactile affordance

## Component Selection
- **Components**: 
  - Card (testimonials, blog posts) with subtle shadows for depth
  - Button (primary CTAs) with hover states and press animations
  - Carousel (testimonials) using embla-carousel-react for smooth transitions
  - Dialog (image lightbox, blog post details) for focused content viewing
  - Separator for visual section breaks
  - ScrollArea for long content lists
  - Badge for highlighting special conditions or new blog posts
  
- **Customizations**: 
  - Custom hero section with full-viewport image and overlay gradient
  - Custom grid layouts for conditions and image galleries
  - Custom navigation with smooth scroll behavior
  - Admin interface for blog management (simple form with rich text)
  
- **States**: 
  - Buttons: default → hover (lift + shadow) → active (press down) → disabled (muted)
  - Navigation links: default → hover (underline) → active (accent color)
  - Carousel: auto-playing with pause on hover, manual controls always visible
  - Images: default → hover (subtle zoom) → clicked (lightbox)
  
- **Icon Selection**: 
  - Phone (phone icon) for contact
  - MapPin (location marker) for address
  - Clock (hours indication)
  - Star (ratings display)
  - CaretLeft/CaretRight (carousel navigation)
  - X (close dialogs)
  - List (mobile menu)
  - Plus/Pencil (admin blog management)
  
- **Spacing**: 
  - Consistent padding using Tailwind's spacing scale (8px base)
  - Section padding: py-16 md:py-24 for breathing room
  - Component padding: p-6 md:p-8 for internal spacing
  - Gap utilities: gap-4, gap-6, gap-8 for consistent element spacing
  
- **Mobile**: 
  - Mobile-first responsive design
  - Hero text scales down (32px on mobile vs 48px desktop)
  - Navigation collapses to hamburger menu <768px
  - Testimonial cards stack on mobile, side-by-side on tablet+
  - Image grid: 1 column mobile → 2 tablet → 3 desktop
  - Touch-friendly tap targets (min 44px)
