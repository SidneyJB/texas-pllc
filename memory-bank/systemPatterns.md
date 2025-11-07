# System Patterns & Architecture

## Architecture Overview

### High-Level Structure
```
Next.js Application (Vercel)
├── Landing Pages (All 4 professions complete: Therapist, Attorney, Engineer, Physician)
├── Checkout (page created, spiffy.co embed pending)
├── Admin/Dashboard (future)
└── API Routes (webhooks - pending)
```

## Key Technical Decisions

### Frontend Architecture
- **Next.js App Router** - Modern routing and server components
- **Component-based design** - Reusable UI components
- **Server-side rendering** - SEO optimization for landing pages
- **Static generation** - All pages pre-rendered for performance
- **Minimal client components** - Only when interactivity required

### Client Component Strategy
- **Default to Server Components** - Better SEO and performance
- **Client Components Only When Needed**:
  - `CTALink.tsx` - For onClick event tracking
  - `Analytics.tsx` - For route change tracking (usePathname hook)
  - `FAQ.tsx` - For accordion interactivity (useState)
  - `Navigation.tsx` - For mobile menu toggle (useState)
- **Pattern**: Server components can render client components seamlessly

### Checkout Integration Pattern
- **Embedded form approach** - spiffy.co form embedded in Next.js pages
- **Webhook handling** - Process order confirmations via API routes
- **State management** - Track checkout progress and order status

### Landing Page Pattern
- **10-section blueprint** - Consistent structure across profession pages
- **Profession-specific content** - Dynamic content based on profession type
- **Text-rich SEO content** - Extensive written content (1,500+ words) explaining legal requirements, board filings, and profession-specific considerations
- **Content sections** - "Why [Profession] Needs a PLLC" and "Common Questions" sections added for SEO
- **Shared components** - Reusable sections (Hero, Pricing, FAQ, etc.)
- **Server components** - All landing components are server components except FAQ
- **Operating Agreement** - Referenced as basic template (not profession-specific)

### Analytics Pattern
- **Centralized utilities** - `lib/analytics.ts` contains all tracking functions
- **Event tracking** - Via CTALink component wrapper
- **Page view tracking** - Automatic via GA4 + Analytics component for route changes
- **Privacy-compliant** - Consent checking built in
- **Environment-based** - Only loads when GA_MEASUREMENT_ID is set

## Design Patterns

### Component Organization
```
components/
├── landing/
│   ├── Hero.tsx (server)
│   ├── ProblemSection.tsx (server)
│   ├── SolutionSection.tsx (server)
│   ├── BenefitsSection.tsx (server)
│   ├── HowItWorks.tsx (server)
│   ├── SocialProof.tsx (server)
│   ├── PricingTable.tsx (server)
│   ├── Guarantee.tsx (server)
│   ├── FAQ.tsx (client - useState)
│   ├── FinalCTA.tsx (server)
│   └── index.ts (exports)
├── CTALink.tsx (client - onClick tracking)
├── Analytics.tsx (client - route tracking)
├── Navigation.tsx (client - mobile menu)
└── Footer.tsx (server)

lib/
└── analytics.ts (tracking utilities)
```

### Page Structure
```
app/
├── layout.tsx (root layout with GA4 scripts)
├── page.tsx (homepage)
├── therapist/
│   └── page.tsx (therapist landing page)
├── attorney/
│   └── page.tsx (attorney landing page)
├── engineer/
│   └── page.tsx (engineer landing page)
├── physician/
│   └── page.tsx (physician landing page)
├── privacy/
│   └── page.tsx (privacy policy)
├── terms/
│   └── page.tsx (terms of service)
├── checkout/
│   ├── page.tsx (checkout page)
│   └── CheckoutContent.tsx (client component)
└── sitemap.ts (sitemap generation)
```

### Data Flow

#### Landing Page Flow
```
User visits /therapist
  → Server component renders with profession-specific content
  → All 10 sections rendered as server components
  → Client components (FAQ, CTALink) hydrate for interactivity
  → Analytics tracks page view
  → User clicks CTA
  → CTALink tracks checkout_start event
  → Navigate to /checkout?profession=therapist
```

#### Checkout Flow (Pending)
```
User clicks CTA
  → Navigate to /checkout?profession=therapist
  → Load spiffy.co form with profession context
  → User completes form
  → Payment processed by spiffy.co
  → Webhook received at /api/webhooks/spiffy
  → Track purchase event
  → Order data stored/queued
  → Confirmation email sent
```

### Analytics Flow
```
Page Load
  → GA4 script loads (if measurement ID set)
  → Analytics component mounts
  → Tracks initial page view
  → Route changes tracked via usePathname hook

User Interaction
  → CTA click → CTALink component
  → Tracks checkout_start or CTA click event
  → Includes profession, price, location parameters

Purchase Completion (Pending)
  → Webhook receives order data
  → Calls trackPurchase() function
  → Includes transaction ID, profession, price
```

## Critical Implementation Paths

### Checkout Flow
```
User clicks CTA
  → Navigate to /checkout?profession=therapist
  → Load spiffy.co form with profession context
  → User completes form
  → Payment processed by spiffy.co
  → Webhook received at /api/webhooks/spiffy
  → Order data stored/queued
  → Confirmation email sent
```

### Landing Page Rendering
```
User visits /therapist
  → Server component fetches profession-specific content
  → Renders 10-section landing page
  → Client components hydrate for interactivity
  → Analytics events tracked
```

## Component Relationships

### Landing Page Components
- **Layout** wraps all pages (includes GA4 scripts, Navigation, Footer)
- **Hero** contains primary CTA (uses CTALink for tracking)
- **PricingTable** links to checkout (uses CTALink for tracking)
- **FinalCTA** also links to checkout (uses CTALink for tracking)
- **FAQ** is only client component in landing sections (accordion interactivity)
- All sections share common styling system (Tailwind CSS)

### Analytics Integration
- **CTALink** - Wraps Next.js Link, tracks clicks automatically
- **Analytics** - Tracks route changes for page views
- **analytics.ts** - Centralized tracking utilities
- **GA4 Scripts** - Loaded in root layout conditionally

### Checkout Integration
- **SpiffyCheckout** component embeds form
- Receives profession context via props/query params
- Handles form events and callbacks
- Communicates with API routes for order processing

## State Management Approach
- **Server state** - Fetch data in server components
- **Client state** - Use React hooks for UI state (minimal)
- **Form state** - Will be managed by spiffy.co form
- **Order state** - Will be tracked via API/webhooks
- **Analytics state** - Managed by GA4, events tracked via utilities

## SEO & Performance Patterns
- **Server-side rendering** - All landing pages SSR
- **Static generation** - All pages pre-rendered (○ in build output)
- **Schema markup** - JSON-LD structured data for search engines
- **Meta tags** - Profession-specific SEO metadata via Metadata API
- **Font optimization** - display: swap, selective preloading
- **Image optimization** - Ready for Next.js Image component (currently using SVG icons)
- **Sitemap generation** - Dynamic via `app/sitemap.ts`
- **robots.txt** - Static file in `/public`

## Analytics Patterns
- **Script loading** - Next.js Script component with `afterInteractive` strategy
- **Conditional loading** - Only loads when GA_MEASUREMENT_ID is set
- **Event structure** - GA4 ecommerce events (begin_checkout, purchase)
- **Event parameters** - Profession, price, location, transaction_id
- **Privacy compliance** - Consent checking utilities ready

## Future Architecture Considerations
- **Operations dashboard** - Separate admin area
- **Email system** - Integration for automated emails
- **CRM integration** - Customer data management
- **SLA tracking** - Real-time order status system
- **Analytics dashboard** - Custom reporting
- **Additional profession pages** - Can reuse all existing components

