# TICKET-CVX-009: Analytics & Experimentation Upgrade

**Type:** Task  
**Status:** Proposed  
**Priority:** High  
**Owner:** Data & Analytics

## Background
Current analytics cover GA4 baseline events. To manage conversion improvements, we need end-to-end funnel visibility, qualitative insights, and experimentation infrastructure.

## Problem
- No single dashboard showing funnel stages (landing → profession → checkout → purchase).  
- No session replay or heatmap tooling to understand qualitative issues.  
- No A/B testing framework to validate conversion experiments (hero, modals, pricing).  
- Limited tracking of micro conversions (FAQ expand, calculator usage, consult booking).

## Proposed Solution
- Configure GA4 to capture full funnel with custom events, user properties (profession, persona), and checkout steps.  
- Implement Mixpanel or similar for cohort analysis and user journey tracking.  
- Add session replay/heatmap tool (Hotjar, FullStory) with strict privacy controls.  
- Integrate experimentation platform (Google Optimize alternative, VWO, or Optimizely) with governance process.  
- Build Looker Studio (or BI) dashboard summarizing traffic sources, conversion rates, drop-off points, and key events.  
- Document instrumentation plan and event naming convention for engineering.

## Success Metrics
- Funnel dashboard live with data freshness ≤ 24 hours.  
- At least three conversion experiments launched within 60 days of setup.  
- Session replay coverage on ≥ 20% of anonymized sessions while maintaining privacy compliance.

## Acceptance Criteria
- Tracking plan published with event schema, parameters, and owner.  
- GA4 + secondary analytics tool validated against test scenarios (manual QA).  
- Experimentation tool integrated with feature flags to prevent flicker and maintain performance.  
- Dashboards shared with leadership, automatically updating, and include annotations for campaigns/experiments.  
- Privacy policy updated to reflect tooling; consent mechanisms in place where required.  
- Knowledge transfer session recorded for growth/marketing stakeholders.

## Dependencies
- Engineering time for instrumentation and experimentation hooks.  
- Legal/compliance review of session replay and experimentation tools.  
- Coordination with TICKET-CVX-001 through TICKET-CVX-008 for event tagging.

## Notes
- Use server-side tagging where possible to improve data fidelity.  
- Establish experiment review cadence (weekly) to act on insights quickly.
