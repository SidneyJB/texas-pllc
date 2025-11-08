# TICKET-CVX-001: Persona-Specific Hero & CTA Optimization

**Type:** Feature  
**Status:** Proposed  
**Priority:** High  
**Owner:** Growth Team

## Background

Current hero sections present a single CTA pre-filled for therapists, while the homepage and profession pages rely on long-form copy to communicate value. This creates extra steps for non-therapist personas and dilutes the immediacy of the 48-hour guarantee and transparent pricing message.

## Problem

- Non-therapist visitors must pivot from therapist-focused CTAs, risking drop-off before discovering their tailored page.
- The hero lacks an explicit proof bar (clients served, board approval rate, star rating) to reinforce trust and urgency.
- Messaging does not adapt to persona-specific anxieties (licensing board, malpractice, ownership rules) despite being the core differentiator.

## Proposed Solution

- Build a segmented hero experience with profession toggle or auto-detected personalization (query string, cookie, or previous click).
- Surface high-impact proof points directly under the headline (e.g., `127 PLLCs formed`, `48-hour filing SLA`, `Texas board-compliant paperwork`).
- Present dual CTAs: `Start My Filing` (primary) and `Talk to an Expert` (secondary) that deep-links into booking/chat flows.
- Align hero supporting copy to persona: dynamically inject board references, compliance needs, and add-on availability per profession.

## Success Metrics

- +15% lift in hero CTA click-through rate within 30 days.
- +10% increase in unique visits to profession landing pages for non-therapist personas.
- Maintain bounce rate ≤ existing baseline while improving scroll depth ≥ 1.2x.

## Acceptance Criteria

- Persona toggle remembers selection across sessions (local storage or cookie).
- Hero displays at least three proof indicators visible above the fold on desktop and mobile.
- Primary CTA routes to the correct profession-specific checkout query param.
- Secondary CTA routes to live support/booking flow without triggering new tab by default.
- Hero passes accessibility checks (contrast, focus state, keyboard navigation).
- A/B testing plan documented prior to launch (variant vs control).

## Dependencies

- TICKET-CVX-008 for consult booking CTA.
- Analytics updates from TICKET-CVX-009 to measure conversion impact.

## Notes

- Collect persona-specific anxieties from support logs or calls to refine copy.
- Consider progressive enhancement so default hero still works without JavaScript.
