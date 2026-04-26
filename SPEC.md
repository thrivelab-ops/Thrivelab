# Thrivelab — Website Redesign Specification
### For use with Cursor / Antigravity / AI Agents

---

## 0. BEFORE YOU BUILD — READ THIS FIRST

This document is the single source of truth for the Thrivelab website redesign.
Every design decision here is intentional. Do not default to generic patterns.
The goal: a high-end, 2026-era local visibility studio that feels like a premium product company, not a freelancer's portfolio.

---

## 1. BRAND IDENTITY

**Business Name:** Thrivelab
**Tagline:** We help local businesses turn searches into calls.
**Core Promise:** Be Visible. Be Trusted. Be Called.
**Tone:** Confident. Direct. Smart. Not corporate. Not startup-bro. Think: a sharp consultant who actually delivers.
**Target Customer:** Small local business owners in India — clinics, salons, restaurants, retail shops — who are losing customers to competitors simply because their Google presence is weak.

---

## 2. DESIGN DIRECTION

### Aesthetic: "Dark Premium Utility"
Think Bloomberg Terminal meets a luxury SaaS dashboard. Dark base. Surgical precision. Data-forward. Every element earns its place.

**The one thing a visitor must remember:** This is not a marketing agency. This is a visibility system.

**Mood references:**
- Linear.app (product clarity)
- Vercel.com (dark, minimal, confident)
- Stripe.com (trust through precision)
- But warmer — this is for Indian local businesses, not Silicon Valley engineers

### Theme: Dark
- Background: near-black, not pure black — `#0A0A0F`
- Surface cards: `#111118`
- Elevated cards: `#18181F`
- Border/dividers: `#1E1E2A`

### Accent Colors
- Primary accent: Electric Lime `#C8FF00` — used sparingly for CTAs, highlights, key numbers
- Secondary accent: Cold White `#F0F0F8` — body text
- Muted text: `#6B6B80`
- Danger/urgency: `#FF4D4D` — for "your competitor is beating you" style stats

### Typography
- **Display / Hero font:** `Syne` (Google Fonts) — geometric, architectural, bold. Use weights 700–800 for headlines.
- **Body font:** `DM Sans` — clean, readable, slightly warm. Use weight 300–400 for body, 500 for labels.
- **Mono / data labels:** `JetBrains Mono` — for numbers, stats, plan prices. Gives a technical-precision feel.
- **DO NOT USE:** Inter, Roboto, Poppins, Space Grotesk, or any system font.

### Spacing Philosophy
- Generous whitespace. Sections breathe.
- Desktop max-width container: `1120px`
- Section vertical padding: `120px` top and bottom
- Cards have `28px` internal padding
- Mobile sections: `64px` vertical padding

### Motion
- Page load: hero text staggers in with `opacity: 0 → 1` + `translateY(20px → 0)` over `0.6s ease-out`, each word staggered by `80ms`
- Cards: subtle `scale(0.98 → 1)` on hover with `0.2s ease`
- CTA button: lime glow pulse on hover using `box-shadow`
- Scroll reveal: sections fade up as they enter viewport using `IntersectionObserver`
- No excessive animation. Restraint is the point.

---

## 3. SITE STRUCTURE

### Pages (Single Page / Sections)
1. **Nav**
2. **Hero**
3. **Problem Statement** (new — pain-first approach)
4. **About / What is Thrivelab**
5. **Services**
6. **What You Get** (deliverables grid)
7. **Why 2026 is Different** ← NEW SECTION
8. **Plans & Pricing**
9. **Social Proof / Stats**
10. **CTA / Contact**
11. **Footer**

---

## 4. SECTION-BY-SECTION SPEC

---

### 4.1 NAV

**Layout:** Sticky. Full width. `backdrop-filter: blur(12px)` on scroll. Transparent before scroll.

**Left:** `THRIVELAB` wordmark in Syne Bold. No logo icon needed — the name is the mark.

**Right:** 
- Ghost links: `Services` `Pricing` `Contact`
- CTA button: `Get Free Audit →` — lime background, dark text, small pill shape

**Mobile:** Hamburger menu. Clean slide-in drawer from right.

---

### 4.2 HERO

**Layout:** Full viewport height. Centered vertically. Two-column on desktop (text left, visual right). Single column on mobile.

**Left side — text:**

```
EYEBROW LABEL (small caps, muted, mono font):
"Local Visibility Studio — Hyderabad"

H1 (Syne 800, 72px desktop / 40px mobile):
Line 1: "BE VISIBLE."
Line 2: "BE TRUSTED."  
Line 3: "BE CALLED."

Each line animates in with stagger delay.
Line 1 is white.
Line 2 is white.
Line 3 is Electric Lime (#C8FF00).

SUBHEADLINE (DM Sans 300, 18px, muted):
"90% of customers check Google before walking in.
We make sure they find you — and call you — first."

CTA ROW:
[ Get Free Google Audit → ]   (lime filled button)
[ See How It Works ]          (ghost/underline button)

TRUST SIGNAL below CTAs (small, muted):
"⚡ Setup in 7 days. No contracts. No ads."
```

**Right side — visual:**
A dark card that looks like a live GBP panel mockup. Shows:
- Fake business name: "Awesome Business"
- ★★★★★ 4.9 · 128 reviews
- "Open now · Closes 9 PM"
- Three action buttons: Call · Directions · Website
- A green "Rank #1" badge overlaid in the corner
- Subtle animated green dot (pulsing) on the "Open now" indicator

This visual makes it immediately clear what you do without explaining it.

**Background:**
- Very subtle radial gradient behind hero text: `#C8FF00` at 3% opacity, centered behind H1
- Faint grid lines (CSS background-image grid) at 1% opacity — gives a technical/dashboard feel

---

### 4.3 PROBLEM STATEMENT (NEW SECTION)

**Purpose:** Make the business owner feel seen before pitching anything.

**Layout:** Full-width dark section. Centered. Max 700px text width.

**Headline (Syne 700, 40px):**
```
"Your competitor is getting your customers."
```

**Subtext (DM Sans 300, 17px, muted):**
```
Not because they're better. Because they show up on Google and you don't.
Every day without an optimized profile is customers choosing someone else.
```

**3-stat row below (JetBrains Mono for numbers):**
```
[ 90% ]                    [ 3x ]                    [ 7 days ]
of customers check         more calls from            to fix your
Google before visiting     a complete profile         entire presence
```

Each stat card: `#111118` background, lime number, white label, muted description.

**Pain points list (below stats):**
Small pill-tags styled like error badges (subtle red tint):
```
❌ Low Google reviews   ❌ Not appearing in "near me" searches
❌ Competitors getting your calls   ❌ Profile looks abandoned
```

---

### 4.4 ABOUT / WHAT IS THRIVELAB

**Layout:** Two columns. Left: text. Right: a clean feature list.

**Headline:**
```
"Get found. Get called."
```

**Body copy (DM Sans 300, 16px):**
```
Thrivelab is a local visibility studio for small businesses.

We don't run ads. We don't build complex websites.
We do one thing exceptionally well: make sure when someone in your city
searches for what you offer, you show up — with the right info, fresh photos,
strong reviews, and a profile that makes them call you, not your competitor.

Simple process. Transparent pricing. Real results in 7 days.
```

**Right column — 3 feature pills:**
```
✓ No technical knowledge needed
✓ No long-term contracts  
✓ Results you can actually measure
```

---

### 4.5 SERVICES

**Headline:** `"What We Fix"`

**Layout:** 3-column card grid on desktop. 1 column on mobile.

**Card design:** `#111118` bg, `1px` border `#1E1E2A`, `28px` padding, `12px` border-radius. Hover: border becomes lime at 40% opacity, subtle elevation change.

**Cards:**

```
Card 1: Google Business Profile Boost
Icon: a minimalist location pin (SVG, lime)
Description:
"We correct your categories, hours, services, description, and posts.
Your profile becomes the one Google trusts and surfaces first."

Card 2: Review Generation
Icon: star (SVG, lime)  
Description:
"QR codes and follow-up prompts that turn happy customers into
5-star reviews — automatically, without awkward asking."

Card 3: Monthly Reporting
Icon: bar chart (SVG, lime)
Description:
"Clear monthly reports showing calls, views, and growth.
You always know exactly what's working."
```

---

### 4.6 WHAT YOU GET (DELIVERABLES)

**Headline:** `"Your complete visibility system"`

**Layout:** 2×3 grid of delivery cards. Each card is compact — icon, name, one-line description.

```
10+ Photos          4+ Posts/month
Profile Optimization    Review Responses
Review Link + QR        7-Day Setup
```

**Style:** Cards are slightly smaller than service cards. Lime icon. White title. Muted description.

**Below grid — setup fee callout:**
```
One-time Setup Fee: ₹1,499
[ Includes full profile audit, onboarding, and 7-day activation ]
```
Style: pill badge in lime with dark text. Feels like a product tag, not a footnote.

---

### 4.7 WHY 2026 IS DIFFERENT (NEW SECTION)

**This is the differentiation section. No competitor is talking about this.**

**Headline (Syne 700):**
```
"Google's AI now decides who gets found."
```

**Subtext:**
```
In 2026, Google uses Gemini AI to read your profile and decide whether
to recommend your business in search results, voice queries, and AI answers.
An incomplete or inactive profile doesn't just rank lower — the AI skips you entirely.
```

**3-column feature cards:**

```
Card 1: AI Overview Optimization
"We structure your profile so Google's AI recommends you
in conversational searches like 'best salon near me open now'."

Card 2: Geo-Grid Rank Tracking
"We show you exactly where you rank — block by block —
across your city. Not just a number. A heatmap."

Card 3: Recurring Post Automation  
"Google's new 2026 update allows recurring posts.
We set yours up so your profile stays active on autopilot."
```

**Visual treatment:** These cards have a slightly different style — a faint lime gradient border (using CSS border-image or pseudo-element outline) to signal "this is new / premium."

---

### 4.8 PLANS & PRICING

**Headline:** `"Simple pricing. No surprises."`

**Layout:** 3 cards side by side. Middle card (Growth Plan) is highlighted — slightly larger, lime border, "Most Popular" badge.

```
STARTER PLAN — ₹1,999/mo
─────────────────────────
· 4 Google Posts/Month
· Review Responses
· Monthly Report

GROWTH PLAN — ₹3,499/mo  ← HIGHLIGHTED
─────────────────────────
· 8 Monthly Posts
· Review Generation
· WhatsApp Broadcast
· Monthly Report

PRO PLAN — ₹5,499/mo
─────────────────────────
· 12 Google Posts/Month
· 2x WhatsApp Broadcast
· Quarterly Strategy Call
· Priority Support
· Monthly Report
```

**Below pricing cards:**
```
All plans include a one-time ₹1,499 setup fee.
Your profile goes live within 7 days of onboarding.
```

**CTA below:**
`[ Start with a Free Audit → ]` — lime filled, full-width on mobile

---

### 4.9 SOCIAL PROOF / STATS

**Layout:** Horizontal strip. Dark background. 4 stats in a row.

```
[ 7 Days ]        [ 90% ]           [ 3x ]           [ ₹0 ]
Average setup     Customers check   More calls from   No ad spend
time              Google first      optimized profile required
```

JetBrains Mono for numbers. DM Sans for labels.

---

### 4.10 CTA / CONTACT

**Headline:**
```
"Ready to be found?"
```

**Subtext:**
```
Send us a message and we'll do a free audit of your Google profile.
No commitment. Just clarity on where you stand.
```

**Two contact blocks side by side:**
```
📞 PHONE              ✉ EMAIL
+91 94949 20158       hello@thrivelab.co.in
```

**Large CTA button:**
`[ Get Your Free Google Audit → ]`

---

### 4.11 FOOTER

Minimal. Single row.
```
Left: THRIVELAB  ©2026
Right: hello@thrivelab.co.in · +91 94949 20158
```

Divider line above footer: 1px `#1E1E2A`

---

## 5. COMPONENT DETAILS

### Button Styles

```css
/* Primary CTA */
background: #C8FF00;
color: #0A0A0F;
font: DM Sans 500, 15px;
padding: 14px 28px;
border-radius: 8px;
letter-spacing: 0.02em;
transition: box-shadow 0.2s ease;

/* Hover */
box-shadow: 0 0 20px rgba(200, 255, 0, 0.35);

/* Ghost */
background: transparent;
border: 1px solid #2A2A38;
color: #F0F0F8;
/* Hover: border color → #C8FF00 at 60% opacity */
```

### Card Base Style

```css
background: #111118;
border: 1px solid #1E1E2A;
border-radius: 12px;
padding: 28px;
transition: border-color 0.2s ease, transform 0.2s ease;

/* Hover */
border-color: rgba(200, 255, 0, 0.3);
transform: translateY(-2px);
```

### Stat Number Style

```css
font-family: 'JetBrains Mono', monospace;
font-size: 48px;
font-weight: 700;
color: #C8FF00;
```

---

## 6. COPY GUIDELINES

- **No fluff.** Every sentence must earn its place.
- **Lead with the problem**, not the solution.
- **Use "you" and "your"** — speak directly to the business owner.
- **Numbers make it real** — use ₹, %, days wherever possible.
- **Avoid:** "world-class", "cutting-edge", "seamless", "leverage", "holistic"
- **Use instead:** "clear", "fast", "real", "simple", "measurable"

---

## 7. TECH STACK RECOMMENDATION

```
Framework:     Next.js 14+ (App Router)
Styling:       Tailwind CSS + custom CSS variables for theme
Fonts:         Google Fonts — Syne, DM Sans, JetBrains Mono
Icons:         Lucide React (minimal, consistent)
Animations:    Framer Motion for scroll reveals + hero stagger
Deployment:    Vercel (free tier works fine for now)
```

If using a simpler setup (Antigravity / no-code):
```
Single HTML file with embedded CSS is fine.
Import fonts via Google Fonts CDN link.
Use vanilla JS for scroll reveals.
No build step required.
```

---

## 8. MOBILE RULES

- All text scales down gracefully. No horizontal scroll ever.
- Hero: single column, H1 at 36px
- Cards: full width, stacked vertically
- Nav: hamburger, full-screen overlay menu
- CTAs: full width on mobile
- Pricing: cards stack vertically, Growth Plan first

---

## 9. WHAT NOT TO DO

- ❌ No green/neon lime as background — it's an accent only
- ❌ No gradient hero backgrounds with purple/blue — that's 2022
- ❌ No stock photo of "business people smiling"
- ❌ No animated background particles or 3D blobs
- ❌ No Comic Sans, Poppins, Inter, or default system fonts
- ❌ No carousel/slider for testimonials (none exist yet — remove this section entirely until there are real ones)
- ❌ No pop-up modals
- ❌ No fake "chat bubble" widgets pretending to be live chat

---

## 10. THE PIPELINE — HOW TO BUILD THIS

Here is the recommended order for best output quality:

### Step 1: Cursor (Code generation + structure)
Use Cursor with this `.md` file as context.
Prompt it to build the full HTML/Next.js page section by section.
Cursor is best for: writing clean, structured code fast with AI autocomplete.
Start here for the full page skeleton.

### Step 2: V0 by Vercel (UI polish + component refinement)
Paste individual sections into v0.dev for rapid visual iteration.
V0 is best for: React component generation with Tailwind, quick visual previews.
Use it to refine the Hero, Pricing cards, and the GBP mockup visual.

### Step 3: Antigravity (Final deployment + publishing)
Once the code is clean from Cursor and visually polished from V0,
bring it into Antigravity for final deployment.
Antigravity is best for: fast no-fuss publishing, especially for static/simple sites.

### Optional: Google AI Studio (Gemini)
Use for generating copy variations, checking if your GBP section language
is accurate for 2026 local SEO context, or testing prompts for your clients.
Not a design tool — a content/strategy tool.

### The full order:
```
This .md file → Cursor (build) → V0 (polish) → Antigravity (publish)
                                              ↑
                                   Google AI Studio (copy check, optional)
```

---

## 11. FINAL NOTE TO THE AI AGENT

You are building a website for a real business run by a founder who is smart, scrappy, and knows exactly what they want. Do not default to generic layouts. Do not add sections that aren't in this spec. Do not use placeholder lorem ipsum text — all copy is written above. Follow the aesthetic direction precisely. If in doubt, choose the darker, more minimal option. Precision over decoration. Every pixel should feel intentional.

The website should feel like: *"This team knows what they're doing."*

---

*Spec version: 1.0 — April 2026*
*Brand: Thrivelab | thrivelab.co.in*
