# TICKET-CVX-008: Live Consult Booking & Multi-Channel Support

**Type:** Feature  
**Status:** Proposed  
**Priority:** Medium  
**Owner:** Operations

## Background
High-value professional services conversions often require a human touch. Currently, the site offers only an email support link, which can delay responses and erode confidence.

## Problem
- No direct way for prospects to schedule a consultation or ask real-time questions.  
- Support availability and response expectations are unclear, potentially causing uncertainty about service reliability.  
- Lack of proactive support cues (phone number, chat availability) throughout the funnel.

## Proposed Solution
- Implement Calendly (or similar) integration for 15-minute consults, exposed via hero secondary CTA, sticky footer, and checkout sidebar.  
- Add business hours, phone number, and response-time SLA in header/footer.  
- Deploy professional-grade live chat (or staffed chatbot with escalation) during business hours, with off-hours form capture.  
- Ensure instrumentation captures support interactions and ties them to conversion events.  
- Provide knowledge base link for immediate answers to common questions.

## Success Metrics
- ≥ 30% of consult bookings convert to paid within 30 days.  
- ≥ 20% reduction in support email response time.  
- +10% increase in checkout completions for sessions involving support interaction.

## Acceptance Criteria
- Consult booking form syncs with calendar, enforces buffers, and sends confirmation + reminder emails.  
- Live chat widget adheres to brand styling, offers initial greeting tailored to page context, and passes transcripts to CRM.  
- Header/footer display updated contact info and SLA without cluttering design.  
- Analytics track consult clicks, scheduled events, and chat transcripts linked to user sessions.  
- Support team playbook updated with scripts and FAQs for pre-sales conversations.  
- Privacy statement updated to reflect chat and call data handling.

## Dependencies
- Support staffing and calendar availability.  
- CRM integration for logging consults and chat interactions.  
- Legal approval for updated contact and privacy policies.

## Notes
- Consider offering profession-specific consult slots (therapist vs physician) to match expertise.  
- Monitor consult-to-close metrics weekly to optimize staffing.
