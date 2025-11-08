# TICKET-CVX-004: Profession Landing Page Conversion Refresh

**Type:** Feature  
**Status:** Proposed  
**Priority:** High  
**Owner:** UX Design

## Background
Profession pages contain extensive text blocks that are informative but visually dense. Key conversion hooks (guarantee, pricing, proof) are buried mid-page, forcing users to scroll through paragraphs before seeing next steps.

## Problem
- Long-form paragraphs reduce scannability, especially on mobile, leading to high drop-off before pricing and CTA sections.  
- Lack of modular design (cards, accordions, callouts) makes differentiators easy to miss.  
- Profession-specific compliance checklists are descriptive but could provide more actionable next steps and visual hierarchy.

## Proposed Solution
- Redesign profession pages into modular sections: hero, pain/gain cards, compliance timeline, board checklist, testimonial sliders, pricing, FAQs.  
- Introduce sticky or recurring CTA modules after key sections to reduce scroll friction.  
- Add visual callouts (icons, highlighted boxes) for crucial compliance steps and guarantee reminders.  
- Convert long-form educational sections into expandable accordions or tabbed layouts to maintain depth without overwhelming.  
- Add quick “At-a-Glance” summary near top: total time to launch, paperwork handled, board guidance, support availability.

## Success Metrics
- +18% increase in profession page → checkout click-through rate within 45 days.  
- +25% increase in completion of scroll to pricing module.  
- Reduce average time to first CTA click to < 45 seconds for mobile users.

## Acceptance Criteria
- Modular layout implemented for all four profession pages with consistent design system.  
- Sticky CTA appears after first viewport scroll and is dismissible.  
- Compliance timeline uses visual timeline or checklist with icons and brief text.  
- Accordion/tab components maintain accessibility (keyboard navigation, ARIA attributes).  
- Analytics events capture interactions with accordions, sticky CTA, and timeline components.  
- Content reviewed to ensure 5th–7th grade readability remains intact.

## Dependencies
- Design system updates for new components (timeline, accordions, sticky CTA).  
- Copywriting support to distill existing text into concise summaries.  
- Analytics setup per TICKET-CVX-009.

## Notes
- Run moderated usability testing (remote) with at least two personas to validate comprehension.  
- Ensure localized content still supports SEO by keeping key phrases visible before hidden behind accordions.
