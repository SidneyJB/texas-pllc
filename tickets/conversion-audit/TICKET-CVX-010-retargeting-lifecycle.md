# TICKET-CVX-010: Retargeting & Lifecycle Automation

**Type:** Task  
**Status:** Proposed  
**Priority:** Medium  
**Owner:** Growth Marketing

## Background
Prospects often require multiple touchpoints before committing to a $749+ professional service purchase. Currently there is no systemic retargeting or automated follow-up for partial or abandoned engagements.

## Problem
- No retargeting audiences or creative mapped to funnel stages (e.g., visited profession page but no checkout).  
- No automated outreach for abandoned calculator sessions, consult bookings, or checkout attempts.  
- Lack of lifecycle segmentation makes it impossible to tailor messaging based on persona or readiness stage.

## Proposed Solution
- Configure pixel audiences (Google, Meta, LinkedIn) segmented by behavior: viewed profession page, started checkout, completed calculator, downloaded guide.  
- Develop retargeting creative with profession-specific messaging and proof points; maintain professional aesthetic.  
- Implement automated multi-channel workflows (email + SMS) for abandoned checkout, missed consult, and calculator lead follow-up.  
- Sync lifecycle stages between website, CRM, and ad platforms to prevent messaging conflicts.  
- Establish reporting on retargeting ROAS, assisted conversions, and time-to-close.

## Success Metrics
- ≥ 8% recovery rate for checkout abandoners via automated workflows within 60 days.  
- ≥ 5x ROAS on retargeting spend after creative optimization.  
- ≥ 20% of nurtured leads advancing to consult or checkout event within 45 days.

## Acceptance Criteria
- Pixel integrations verified and firing with correct event parameters; consent management honored.  
- Audience definitions documented, with suppression lists for purchasers.  
- Automated workflows include minimum of three touchpoints with branching logic based on engagement.  
- Creative library includes at least eight ad variants (per persona) and is approved by brand/legal.  
- Reporting dashboard covers spend, conversions, recovery %, and assisted revenue, refreshed daily.  
- Data governance process prevents double messaging or compliance violations.

## Dependencies
- Output from TICKET-CVX-005 and TICKET-CVX-006 for lead capture and segmentation.  
- Analytics instrumentation from TICKET-CVX-009.  
- CRM capabilities for lifecycle automation.

## Notes
- Consider direct mail or physical follow-up for high-value physician/attorney segments if budget allows.  
- Reassess performance monthly and rotate creative to avoid fatigue.
