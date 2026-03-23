

## Plan: Elevate Portfolio to a Classic, Modern, Professional Design

### Overview
Refine the entire portfolio with a more sophisticated, polished aesthetic — cleaner typography hierarchy, refined spacing, subtle animations, and a more executive/corporate feel while keeping the dark + gold identity.

### Changes by File

**1. `src/index.css` — Refined color palette and utilities**
- Soften the gold accent slightly for a more refined, less "flashy" tone
- Add subtle text-shadow utilities for headings
- Refine the glass-card with softer borders and more subtle backdrop
- Add a thin elegant divider utility to replace the gold-line with something more refined

**2. `src/components/Navbar.tsx` — Cleaner, more professional nav**
- Remove rounded-full pill CTA button, use a clean underline or minimal style
- Increase letter-spacing on nav links for an editorial feel
- Add a subtle scroll-based background opacity change (darken on scroll)

**3. `src/components/HeroSection.tsx` — More executive presence**
- Remove the casual "Hi, I'm Odishika ✦" greeting — replace with a clean, minimal introduction
- Reduce animation intensity (slower, more elegant transitions)
- Change rounded-full buttons to clean rectangular with subtle borders
- Add a thin horizontal rule between name and credentials
- Make the credentials line use a more refined separator style

**4. `src/components/AboutSection.tsx` — Tighter, cleaner layout**
- Refine the stats cards with cleaner borders and no glassmorphism
- Use a clean horizontal layout for highlights with thin dividers
- Improve text hierarchy with slightly larger body text

**5. `src/components/ServicesSection.tsx` — Refined grid cards**
- Use clean bordered cards instead of glass-card effect
- Add subtle hover lift (translateY) instead of border color change
- Clean icon containers with thinner styling

**6. `src/components/ProjectsSection.tsx` — Professional milestone cards**
- Remove gradient header blocks — use a clean left-border accent instead
- Tighter, more editorial card layout
- Refine tag pills to be more subtle

**7. `src/components/ContactSection.tsx` — Polished form**
- Refine input styling with bottom-border-only inputs for a cleaner look
- More professional button styling
- Better visual hierarchy

**8. `src/components/Footer.tsx` — Minimal, elegant footer**
- Add thin top divider
- Cleaner spacing and typography

### Technical Details
- All changes are CSS/styling and minor JSX restructuring
- No new dependencies needed
- Keeps Outfit + Ovo font pairing (already professional)
- Maintains dark theme + gold accent but with more restraint
- Animations kept but made slower/subtler for sophistication

