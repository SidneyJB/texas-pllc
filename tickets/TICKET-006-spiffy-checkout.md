# TICKET-006: Integrate spiffy.co Checkout Form

**Type:** Story  
**Priority:** P0 - Critical  
**Story Points:** 5  
**Sprint:** MVP Launch  
**Status:** To Do

## Description
Integrate spiffy.co embedded checkout form into the application. This is critical for capturing orders and payments.

## Acceptance Criteria
- [ ] spiffy.co account created and configured
- [ ] Checkout component created (`components/checkout/SpiffyCheckout.tsx`)
- [ ] Checkout page/route created (`/checkout`)
- [ ] Form accepts profession parameter (query param or prop)
- [ ] Form displays correct pricing ($749 base)
- [ ] Form is embedded and functional
- [ ] Form is mobile responsive
- [ ] Form handles errors gracefully
- [ ] Success/confirmation state handled

## Technical Details
- Research spiffy.co embedding documentation
- Use iframe or script-based embedding (per spiffy.co docs)
- Pass profession context to form
- Ensure secure payment handling (spiffy.co handles PCI compliance)

## Dependencies
- TICKET-001 (Next.js project)
- spiffy.co account access

## Notes
This is critical for MVP. May need to coordinate with spiffy.co support for integration details. Test thoroughly before launch.

