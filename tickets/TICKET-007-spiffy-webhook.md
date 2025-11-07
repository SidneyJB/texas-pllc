# TICKET-007: Set Up spiffy.co Webhook Handler

**Type:** Story  
**Priority:** P1 - High  
**Story Points:** 3  
**Sprint:** MVP Launch  
**Status:** To Do

## Description
Create API route to handle webhooks from spiffy.co when orders are completed. This enables order processing and confirmation emails.

## Acceptance Criteria
- [ ] API route created (`app/api/webhooks/spiffy/route.ts`)
- [ ] Webhook endpoint is secure (verify spiffy.co signature if available)
- [ ] Order data is parsed correctly
- [ ] Order data is logged/stored (console.log for MVP, database later)
- [ ] Webhook handler returns proper HTTP status codes
- [ ] Error handling implemented
- [ ] Webhook URL configured in spiffy.co dashboard

## Technical Details
- Use Next.js API routes (App Router)
- Implement POST handler
- Parse JSON payload from spiffy.co
- For MVP, logging is sufficient (can add database later)
- Consider rate limiting if needed

## Dependencies
- TICKET-006 (spiffy.co integration)
- spiffy.co webhook documentation

## Notes
For MVP, simple logging is acceptable. Can enhance with database storage and email triggers post-launch. Critical for order processing workflow.

