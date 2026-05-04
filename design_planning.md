# insightED — Design Planning

## Site Classification
EDITORIAL MARKETING — educational platform marketing site driving course applications.

## DNA
- **Shape metaphor**: Geometric grid that fragments and reassembles (mirrors learning — building blocks of knowledge)
- **Material**: Crisp paper meets digital glass — academic precision
- **Color sources**: Architectural blueprints + university libraries
  - Primary ink: `#0A1F44` (navy of leather-bound textbooks)
  - Signal: `#2563EB` (blueprint blue)
  - Accent: `#F59E0B` (reading lamp amber)
  - Paper: `#FFFFFF` / `#F8FAFC` (academic clarity)
- **Fonts**: Fraunces (display, modern serif with academic personality) + Manrope (body, geometric sans for technical precision)
- **Motion**: Mechanical-precise with organic warmth, easing `cubic-bezier(0.4, 0, 0.2, 1)`, 400-600ms

## Pages (7 total)
1. `/` — Home: Cinematic entrance + Hero, Mission, Stats, Offerings, Course preview, Testimonials, CTA
2. `/blog` — Blog: Featured article + grid of 4 articles
3. `/despre-curs` — Course catalog: 2-column expandable grid (Python, Java, Web Dev, SQL/MongoDB) + method
4. `/echipa` — Team: 3 mentor cards with LinkedIn buttons + join CTA
5. `/tutoriale` — Tutorials: 4 freeCodeCamp embeds + 4-stage learning roadmap
6. `/aplicare` — Application: 15% promo banner + Google Forms-ready application form
7. `/contact` — Contact: Contact info + Google Forms-ready message form

## Components Used
| # | Slug | Used In |
|---|------|---------|
| 1 | blur-text | Hero, PageHero |
| 2 | text-generate-effect | (available, fallback) |
| 3 | dotted-glow-background | PageHero, Home offerings, Tutoriale |
| 4 | spotlight-card | Blog grid |
| 5 | hover-border-gradient | (available) |
| 6 | focus-cards | Home course preview |
| 7 | count-up | StatBlock, PromoBanner |
| 8 | glowing-effect | (available) |

## Custom Components
- **HeroEntrance** — Cinematic 5-second entrance: dot grid assembles into formation, logo emerges, scatters out
- **Hero** — Video background + cursor-reactive light orb + word-stagger headline
- **CourseExpandCard** — Click to expand course details with topics, duration, level
- **PromoBanner** — 15% early enrollment discount with animated counter
- **StatBlock** — 4-column stat grid with CountUp animations
- **PageHero** — Reusable interior page hero with dotted background
- **SectionHeader** — Reusable headline component
- **Navigation** — Scroll-aware nav with active state, mobile menu
- **Footer** — 3-column footer with brand atmospheric shapes
- **ParallaxImage** — simple-parallax-js wrapper with safe init

## Story Roles per Section
- Home Hero: HOOK (cinematic entrance, big motto)
- Home Mission: ESTABLISH (trust statement)
- Home Stats: PROVE (numbers)
- Home Offerings: SHOWCASE (4 categories)
- Home Courses: SHOWCASE (focus cards)
- Home Testimonials: PROVE (social validation)
- Home CTA: CONVERT (apply now)

## Motion Motif
**Dot grid** — appears in entrance (assembles), in PageHero (animated background), in section backgrounds (atmosphere). Same shape, evolves through scroll journey.

## Key Decisions
- White/blue theme respected throughout (navy + signal blue + amber accent)
- All sections use `col-span-12 px-4 md:col-start-2 md:col-span-X` for proper 8.33% gutter
- Cards use clipped corners (notched polygon) — DNA-derived custom shape
- Form validation inline + custom (no native browser styling), forms have `noValidate`
- All text minimum `text-lg` (18px), default weight `font-extralight` (200)
- Active nav state visible via underline + color
- Mobile menu via AnimatePresence
- Sessionstorage entrance: plays on hard reload, skips on SPA nav
