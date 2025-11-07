# TICKET-002: Configure Vercel Deployment

**Type:** Task  
**Priority:** P0 - Critical  
**Story Points:** 2  
**Sprint:** MVP Launch  
**Status:** To Do

## Description
Set up Vercel deployment configuration so the site can be deployed automatically from Git.

## Acceptance Criteria
- [ ] Vercel project created and linked to Git repository
- [ ] `vercel.json` configuration file created (if needed)
- [ ] Environment variables configured in Vercel dashboard
- [ ] Deployment previews working for PRs
- [ ] Production deployment successful
- [ ] Custom domain configured (if available)

## Technical Details
- Use Vercel CLI or web interface
- Configure build settings for Next.js
- Set up environment variables placeholder structure

## Dependencies
- TICKET-001 (Next.js project must exist)

## Notes
Can be done in parallel with other tickets once TICKET-001 is complete.

