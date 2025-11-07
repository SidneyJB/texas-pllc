# Technical Context

## Technology Stack

### Core Framework
- **Next.js 16.0.1** - React framework for web application
- **Vercel** - Hosting and deployment platform (pending configuration)
- **TypeScript** - Type-safe JavaScript (confirmed and in use)
- **React 19.2.0** - UI library
- **Tailwind CSS v4** - Utility-first CSS framework (confirmed and in use)

### Checkout Integration
- **spiffy.co** - Embedded checkout form solution
  - Handles payment processing
  - Captures order data
  - Integrates seamlessly into Next.js pages

### Analytics & Tracking
- **Google Analytics 4 (GA4)** - Web analytics (code ready, needs measurement ID)
- **Event Tracking** - Custom implementation in `lib/analytics.ts`
- **Events implemented:**
  - Page view (automatic + route changes)
  - Checkout start (via CTALink component)
  - Purchase completion (ready for webhook integration)
  - CTA clicks (via CTALink component)
  - Phone call tracking (utility ready)
  - Chat start tracking (utility ready)

### Development Setup
- **Node.js** - Runtime environment
- **npm** - Package manager (confirmed)
- **Git** - Version control
- **Project Location** - `/web` subfolder
- **Next.js Version** - 16.0.1
- **TypeScript** - Enabled with strict mode
- **Tailwind CSS** - v4 (included)
- **ESLint** - Configured with Next.js config

## Technical Constraints

### Hosting
- Must deploy to Vercel
- Leverage Vercel's edge functions and serverless capabilities
- Optimize for Vercel's performance features

### Checkout Integration
- Use spiffy.co embedded form (not custom payment solution)
- Ensure form works across all devices and browsers
- Handle form callbacks/webhooks for order processing

### Performance Requirements
- Page speed < 3 seconds (SEO requirement) - ✅ Achieved via static generation
- Mobile-responsive design - ✅ Verified
- Fast checkout experience (≤ 6 min target)
- Lighthouse score ≥ 90 for Performance - ✅ Optimized

### SEO Requirements
- Meta tags for all pages - ✅ Implemented
- Schema markup - ✅ Implemented
- Sitemap - ✅ Generated
- robots.txt - ✅ Configured
- Canonical URLs - ✅ Set

## Dependencies & Integrations

### External Services
- **spiffy.co** - Checkout and payment processing (pending)
- **Google Analytics** - Analytics tracking (code ready, needs measurement ID)
- **Texas SOS (SOSDirect)** - State filing system (operations)
- **IRS** - EIN issuance (operations)

### Environment Variables Needed
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - GA4 measurement ID (set in Vercel)
- Future: spiffy.co API keys/webhook secrets

### Future Integrations (Phase 2+)
- Email service provider (order confirmations, SLA tracking)
- CRM system (customer management)
- Operations dashboard (SLA tracking, order management)

## Tool Usage Patterns

### Development Workflow
- **Next.js App Router** - Modern routing approach
- **Server Components by default** - Only use client components when necessary
- **Client Components** - Only for interactivity (onClick, useState, usePathname)
- **API routes** - For backend logic (webhooks pending)
- **Static generation** - All pages pre-rendered

### Component Patterns
- **Server Components** - Default, used for all landing page sections
- **Client Components** - Only CTALink, Analytics, FAQ, Navigation
- **Event Tracking** - Via CTALink wrapper component
- **Analytics** - Centralized in `lib/analytics.ts`

### Deployment
- Vercel automatic deployments from Git
- Environment variables for API keys and secrets
- Preview deployments for PRs

### Code Organization
- Component-based architecture
- Reusable UI components
- Separate concerns (landing pages, checkout, admin)

## Security Considerations
- **Secure handling of PII** - Privacy Policy covers this
- **EIN data protection** - Privacy Policy covers this
- **Payment data** - Handled by spiffy.co (PCI compliance)
- **Privacy policy** - ✅ Complete
- **Terms of Service** - ✅ Complete
- **Environment variables** - For sensitive configuration

## Performance Optimizations Implemented

### Font Optimization
- `display: "swap"` - Prevents invisible text during font load
- `preload: true` - For primary font (Geist Sans)
- `preload: false` - For secondary font (Geist Mono)

### Code Optimization
- Static generation - All pages pre-rendered
- Minimal JavaScript - Only client components where needed
- Server components - Better performance and SEO

### SEO Optimizations
- Metadata API - Comprehensive meta tags
- Schema markup - Organization and Service schemas
- Sitemap generation - Dynamic via TypeScript
- robots.txt - Properly configured

## Known Technical Details

### GA4 Implementation
- Scripts loaded via Next.js Script component
- Conditional loading based on environment variable
- Page view tracking automatic + route changes
- Event tracking via centralized utilities
- Privacy-compliant with consent checking

### Component Architecture
- Server components render client components seamlessly
- CTALink wraps Next.js Link for tracking
- Analytics component tracks route changes
- FAQ uses useState for accordion functionality

### Build Output
- All pages statically generated (○ symbol)
- Fast compilation (~1.2s)
- No build errors
- Sitemap generated automatically

## Technical Debt & Considerations
- Start with MVP (Minimum Viable Product)
- Plan for scalability as order volume grows
- Consider operations dashboard needs
- Plan for email automation system

