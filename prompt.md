# MASTER PROMPT — Clix Media Website Rebuild (Next.js + GSAP)

Copy everything below into your build tool (Antigravity / Claude Code / Cursor) as one prompt.

---

## ROLE

Act as a senior Awwwards-level UI/UX designer and frontend engineer. You have designed award-winning agency and portfolio sites (studio-freight, Locomotive, Basement.studio-tier work). You are building a **real estate video marketing agency website** in **Next.js**, and it must NOT look like a generic AI-generated template. It must look like it was hand-designed in Figma by a professional studio, then built with **GSAP** for motion.

Reference for the quality bar and motion/typography language: the attached portfolio screenshot (huge bold display typography, tight letter-spacing, duotone hero image blended into the background, pill-shaped badge, dual CTA buttons — one outlined "ghost" pill, one solid — subtle floating particles, dark canvas). Match that *level of craft and confidence*, not the literal content.

## HARD DESIGN RULES (things that make sites look "AI-generated" — avoid all of them)

1. **No purple-to-blue or pink-to-orange gradients anywhere** (buttons, text, backgrounds, blobs). Use flat, confident solid colors instead.
2. **No generic rounded "blob" icon sets** (no Heroicons/Lucide default icon-in-a-circle-with-soft-gradient look). Use custom-drawn line icons, numbers, or typographic markers (01, 02, 03) instead of icon soup.
3. **No default Tailwind card-with-shadow-and-rounded-corner-everything** pattern repeated identically across every section. Vary section rhythm: full-bleed typographic sections, split layouts, offset grids, asymmetric spacing.
4. **No stock "SaaS landing page" hero** (centered headline + centered subtext + centered gradient button + generic illustration). Build a hero with real typographic hierarchy and scale like the reference image.
5. **No emoji as icons.** No sparkle ✨ or rocket 🚀 iconography.
6. Avoid perfectly symmetric, evenly-spaced everything — introduce intentional asymmetry, overlap, and scale contrast between headline sizes and body copy.

## VISUAL DIRECTION

- **Theme:** Dark canvas base (near-black, e.g. `#0A0B0D` / `#0E0F12`) with one confident accent color (pick ONE — e.g. a saturated electric blue or a warm signal red/orange — used sparingly for CTAs, underlines, and small accents only, never as a gradient).
- **Typography:** One condensed/bold display sans for headlines at massive scale (clamp(3rem, 8vw, 8rem)), tight tracking, uppercase for hero H1s. One clean grotesk/sans for body copy at comfortable reading size. Consider a monospace accent font for labels/badges/eyebrow text (e.g. "EDIT BLUEPRINT", "01.").
- **Texture over gradient:** use grain/noise overlay, subtle grid lines, or a faint radial vignette (single color, low opacity) instead of gradients for depth.
- **Imagery:** duotone-treated or dark-color-graded photography (agents on camera, video editing footage), blended into dark background — not floating in a white card.
- **Buttons:** one outlined pill "ghost" button + one solid button, exactly like reference image — no gradient fills, no glow.
- **Badges/eyebrow tags:** small pill with a dot indicator + tracked-out uppercase label (e.g. "● AVAILABLE FOR PROJECTS" style), reused as "EDIT BLUEPRINT", "GROWTH BLUEPRINT", "CLICK BLUEPRINT" badges on service pages.

## TECH STACK

- Next.js (App Router), TypeScript
- GSAP + ScrollTrigger for all scroll-driven reveals
- GSAP SplitText (or custom split) for headline character/word reveal animations
- Lenis (or GSAP ScrollSmoother) for smooth inertia scrolling
- Tailwind CSS for layout utility, but with a fully custom design system (custom color tokens, custom type scale) — not default Tailwind look
- Framer Motion optional for micro-interactions (hover states, cursor) if not handled by GSAP

## REQUIRED GSAP MOTION

- Hero headline: staggered word/character reveal on load, with subtle 3D/skew settle
- Number counters (25+, 10M+, 500+, etc.) animate count-up on scroll into view
- Section headlines: pinned/scrubbed reveal or mask-wipe reveal on scroll (like the reference site's gradient-fade text-on-scroll effect)
- Horizontal marquee for stats or client logos if applicable
- Magnetic hover effect on primary CTA buttons
- Custom cursor (dot + trailing ring) that reacts on hover of links/buttons
- Smooth parallax on hero image/background particles
- Process steps ("01 → 04") animate in sequentially as user scrolls, connected by an animated line/progress indicator
- Page transition or subtle fade/slide on route change between service pages

## SITE MAP

1. **Home** (`/`)
2. **Services → YouTube Video Editing** (`/services/video-editing`)
3. **Services → YouTube Growth for Realtors** (`/services/youtube-growth`)
4. **Services → YouTube Thumbnail Design** (`/services/thumbnail-design`)

Every page needs its own `<title>` and `<meta name="description">` exactly as specified below — do not shorten or alter the copy.

---

# CONTENT (use verbatim — do not omit or reword any section, bullet, stat, or FAQ)

## PAGE 1 — HOME

**Meta Title:** Real Estate Marketing That Gets You Clients
**Meta Description:** Struggling to get leads? Our real estate marketing videos turn viewers into buyers and sellers. Book a free call.

**H1:** Turn Real Estate Marketing Videos Into Your Next Buyer or Seller

**Subheadline:** We help real estate agents turn video marketing into a steady source of qualified buyers and sellers. Strategy, filming guidance, editing, SEO, and channel growth, all handled for you.

**CTA buttons:** Book a Strategy Call · Get a Free Channel Audit

### Social Proof
- 25+ Real Estate Channels Managed
- 10M+ Views Generated
- Thousands of Local Homebuyers Reached
- Line: We've helped agents, brokers, and teams turn real estate marketing videos into real inbound leads. Not just views. Not just likes. Actual buyers and sellers reaching out first.

### The Problem — "Most Realtors Know They Should Be Doing Video Marketing"
Body: But between showings, closings, and client calls, there's no time left to film consistently, let alone edit, optimize, and post. So the videos don't get made. Or they get made and nobody sees them.
Points: No time to film · Videos don't rank · No views, no leads · Competitors show up first in search
Closing line: That's where we come in.

### Our Solution — "Done-for-You Real Estate Marketing for Agents Who Want Results"
Sub: You show up and film. We handle everything else.
List: Keyword research · Content strategy · Video SEO · Editing · Thumbnail design · Titles and descriptions · Uploading and scheduling · Growth strategy and reporting

### Services (grid, 6 cards)
1. **Real Estate Video Marketing** — Videos built to attract buyers and sellers who are actively searching for homes in your specific area right now.
2. **YouTube SEO** — We help you rank for the exact local searches your future clients are already typing into YouTube every day.
3. **Video Editing** — Clean, professional edits that keep viewers watching longer and leave them with a strong impression of your brand.
4. **Thumbnail Design** — Thumbnails designed to get more clicks from search results and suggested video feeds across YouTube.
5. **Content Strategy** — A steady stream of video ideas, so you never run out of things to film or post.
6. **Channel Management** — Every upload is fully optimized for reach, so your content keeps working long after you stop filming.

### Why Video Marketing Works for Real Estate
Intro: Social posts disappear in a day. Real estate videos keep working for months, sometimes years.
"People searching for:" — Homes in Dallas · Living in Miami · Moving to Phoenix
Closing: already have buying intent. When your videos show up for these searches, you're in front of the right person at the right moment, before your competitors even know they exist.

### Why Choose Us
Intro: Most agencies treat real estate marketing like any other social content. We don't.
Sub: We specialize in marketing for real estate agents who want local search visibility, not just followers.
List: Local keyword research · Neighborhood-focused strategy · Long-term organic growth · SEO-first video optimization · Content built around leads, not likes

### Results
Intro: Real numbers, not promises.
List: Subscriber growth · View counts · Lead increases · Search ranking screenshots · Full analytics reporting
Closing: We'll show you the same data we show our clients.

### Testimonials
Placeholder format: "[Client Name], [Brokerage], [City]" — Add a photo, name, brokerage, and location for each testimonial. (Design a testimonial card/slider component ready to receive real client data.)

### Our Process (4 steps)
Book a Call → Channel Audit → Strategy Session → Consistent Growth

### FAQ
- **Do I need to be an expert in YouTube SEO to get results?** No. That's what we handle. You focus on filming, we handle keyword research, titles, descriptions, and tags so your videos actually show up in search.
- **Will my videos rank if my channel is brand new?** Yes, if they're optimized correctly. Ranking depends more on search intent match and video optimization than channel age. New channels can rank fast with the right strategy.
- **How is this different from just posting videos myself?** Posting gets views from people who already follow you. Optimizing for search gets you in front of people actively searching for a home in your area, people who don't know you yet but are ready to buy or sell.
- **How long before I see results?** Most agents start seeing initial traction, views, watch time, and early rankings, within the first 60 to 90 days. Real lead flow typically builds by month 3 to 6, as videos climb search rankings and compound over time.
- **Do I have to film the videos myself?** Yes, you're the face your audience trusts. But that's all you do. We handle the scripting guidance, editing, SEO, thumbnails, and posting, so filming is the only thing on your plate.
- **Can you edit videos I've already filmed?** Yes. Send us your raw footage and we'll turn it into a polished, search-optimized video ready to publish.
- **Do you work with brand new channels?** Yes. New channels can rank quickly when the content is built around the right keywords and search intent from day one. You don't need history or subscribers to start showing up in search.

### Final CTA
H2: Ready to Turn Video Marketing Into Your Best Lead Source?
Body: Book a free strategy call and see exactly how real estate marketing videos can bring you more qualified buyers and sellers.
Button: Book Your Free Strategy Call

---

## PAGE 2 — Services / YouTube Video Editing
**Main keyword:** Real Estate Video Editing Services
**Meta Title:** Real Estate Video Editing Services That Convert
**Meta Description:** Professional real estate video editing services that boost watch time and leads. Fast turnaround, YouTube-ready edits. Book your free strategy call today.

Nav: Back to Services
Badge: EDIT BLUEPRINT
**H1:** Real Estate Video Editing Services That Convert Viewers Into Clients
**Subheadline:** We don't just cut clips together, we build edits that hold attention and drive action. We handle pacing, sound design, captions, color, and platform optimization so every video looks sharp and performs like it should.

**Core Deliverables:**
- Retention-focused pacing, sound design, and color grading
- Platform-ready formatting for YouTube, Reels, and Shorts
- Caption, thumbnail, and title support built into every edit

**Historical Metrics:** 500+ Videos Edited · 68% Avg. Watch Time Retention · +32% Engagement Growth

**Service Launch Workflow:**
1. **Footage Review & Edit Plan** — We review your raw footage, flag your strongest takes, and map out a structure built around what will actually keep viewers watching.
2. **Rough Cut & Structure Pass** — We assemble the story, tighten pacing, cut dead air, and shape the video around a clear hook and flow before any polish is added.
3. **Sound Design & Color Grade** — We layer in clean audio mixing, music, and color correction so every video looks and sounds consistent with your brand.
4. **Final Delivery & Platform Export** — We export in the right formats and specs for YouTube, Reels, and Shorts, then deliver files ready to upload with zero extra work on your end.

**CTA Section**
H2: Deploy edits that keep viewers watching
Body: Ready to work with the best video editing services for real estate? Book your free strategy call and see how a professional video editing service can turn raw footage into results.
Button: Book Your Free Strategy Call

---

## PAGE 3 — Services / YouTube Growth for Realtors
**Meta Title:** YouTube Growth Service for Real Estate Agents
**Meta Description:** Our YouTube growth service helps realtors turn local searches into leads. Strategy, editing, and channel growth handled for you. Book a free call.

Nav: Back to Services
Badge: GROWTH BLUEPRINT
**H1:** The YouTube Growth Service Built to Turn Realtors Into Local Authorities
**Subheadline:** We don't just edit your videos, we run a full YouTube growth service built around your market. Keyword research, content strategy, optimization, and channel management, all handled so you show up first when buyers and sellers search.

**Core Deliverables:**
- Local market keyword research and SEO strategy
- Content ideation, scripting, and hook formulation
- End-to-end channel management and scheduling
- Click-through optimization (titles, tags, descriptions)

**Historical Metrics:** 12+/mo Avg. Inbound Leads · 4.8% View-to-Lead Ratio · +45% Closing Growth

**Service Launch Workflow:**
1. **Market & Competitor Audit** — We analyze your local market, pull competitor channels, and identify exactly which searches your future clients are typing in. This becomes the foundation for every video we script.
2. **Monthly Scripting & Strategy Prep** — Every month, we hand you a ready-to-film content plan. Topics, hooks, talking points, and structure, mapped to the keywords your buyers and sellers are actually searching.
3. **Recording Guidance & Setup Check** — We walk you through simple setup and delivery tips so your videos look and sound professional, no expensive gear or editing experience required on your end.
4. **Publishing & Lead Capture Integration** — We optimize titles, descriptions, and tags, then publish on schedule and connect each video to your lead capture flow, so views turn into booked calls, not just watch time.

**Section — Why Realtors Choose Our YouTube Growth Agency Over DIY Posting**
Posting on your own gets views from people who already know you. Working with a YouTube growth agency built for real estate gets you in front of buyers and sellers who don't know you yet, but are actively searching for a home in your market right now. We build the strategy, you show up on camera, the rest is handled.

**Section — A YouTube Channel Growth Service Built Around Local Search Intent**
Generic content marketing treats every channel the same. Our YouTube channel growth service starts with your specific market, your neighborhoods, your buyer and seller searches, so every video is built to rank for the exact terms your future clients are typing in.

**CTA Section**
H2: Deploy this engine in your MLS territory
Body: Ready to implement a YouTube growth service built for realtors? Claim territory rights and schedule your launch strategy session.
Button: Book Launch Call

---

## PAGE 4 — Services / YouTube Thumbnail Design
**Meta Title:** YouTube Thumbnail Design Services for Real Estate
**Meta Description:** Professional YouTube thumbnail design services built for real estate agents. Higher click-through rates, more views, more leads. Book a free call.

Nav: Back to Services
Badge: CLICK BLUEPRINT
**H1:** YouTube Thumbnail Design Services That Make Viewers Click
**Subheadline:** A great video with a weak thumbnail never gets watched. We design thumbnails built to stop the scroll, match local search intent, and pull viewers in before they even hit play.

**Core Deliverables:**
- Custom thumbnail design for every video upload
- A/B testing to identify your highest click-through designs
- Brand-consistent templates across your entire channel
- Text, color, and composition optimized for mobile and desktop

**Historical Metrics:** 40%+ Avg. CTR Increase · 300+ Thumbnails Designed · 2.1x View Lift on Redesigns

**Service Launch Workflow:**
1. **Channel & Competitor Thumbnail Audit** — We review your current thumbnails against top-ranking channels in your market to see exactly where clicks are being lost.
2. **Concept & Template Design** — We build a set of branded templates matched to your content style, so every thumbnail feels consistent and instantly recognizable.
3. **Per-Video Custom Design** — Each upload gets a thumbnail designed around its specific hook, with text and imagery tested to grab attention in a crowded feed.
4. **Performance Review & Redesign** — We track click-through data after publishing and refine underperforming thumbnails so every video keeps improving over time.

**Section — Why Realtors Need to Design YouTube Thumbnail Assets Strategically**
A thumbnail is the first thing a buyer or seller sees before they ever hit play. When you design YouTube thumbnail assets around local search intent and clear visual hierarchy, you turn casual scrollers into actual viewers, and viewers into leads.

**Section — Professional Thumbnail Design Built for Real Estate Search**
Generic thumbnail templates don't account for how real estate content gets searched. Our thumbnail design process is built around your listings, your market, and the exact searches your future clients are typing in, so your videos stand out the moment they appear in results.

**CTA Section**
H2: Deploy thumbnails that convert scrolls into clicks
Body: Ready to implement YouTube thumbnail design services built for realtors? Claim territory rights and schedule your launch strategy session.
Button: Book Launch Call

---

## COMPONENT SYSTEM TO BUILD

- `Navbar` — logo mark, links, theme-consistent CTA button, mobile menu with full-screen GSAP reveal
- `Hero` — badge, huge headline (word-by-word reveal), subheadline, dual CTA, background image/particles
- `StatBand` — animated count-up stat strip (used on home + reused pattern for service page metrics)
- `ProblemSection` — headline + 4-point pain list
- `SolutionSection` — headline + 8-item deliverables list (numbered or checkmark, not gradient icons)
- `ServiceCard` (x6 grid on home)
- `SearchIntentSection` — "People searching for:" list with animated city rotation
- `WhyChooseUs`
- `ResultsSection`
- `TestimonialSlider` — placeholder-ready card component
- `ProcessTimeline` — 4-step animated horizontal/vertical timeline
- `FAQAccordion` — GSAP height-animated accordion
- `FinalCTA`
- `Footer`
- `ServiceHero` (badge + H1 + subhead, reused across the 3 service pages)
- `DeliverablesList`
- `MetricsRow`
- `WorkflowSteps` (01–04 numbered workflow, reused across service pages)
- `TwoColumnTextSection` (reused for the "Why Realtors Choose..." blocks)

## DELIVERABLE

Generate the full Next.js project structure, all four pages, shared components, global Tailwind theme config (custom colors/fonts, no default palette), and GSAP animation setup (`useGSAP` hooks, ScrollTrigger registered in a client-only provider). Do not omit any bullet point, stat, FAQ, or CTA line listed above — every page must contain 100% of its corresponding content section.