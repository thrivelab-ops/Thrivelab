# ThriveLab — Deployment & QA Checklist

Before launching `thrivelab.co.in` in production, verify all checklist items below:

---

## 1. Environment & API Setup
- [ ] Vercel environment variable `AUDIT_WEBHOOK_URL` configured in Project Settings.
- [ ] Test `/api/audit` submission and verify lead delivery in webhook destination (Slack/Formspree/Discord).
- [ ] Verify HTTP error state behavior (simulated API failure shows `WE COULDN'T SEND THAT` error card).

---

## 2. Contact & Action Pathways
- [ ] WhatsApp link verified (`https://wa.me/919494920158`).
- [ ] Direct phone number link verified (`tel:+919494920158`).
- [ ] Support email verified (`mailto:hello@thrivelab.co.in`).
- [ ] Fallback Google Form link verified (`https://docs.google.com/forms/...`).

---

## 3. Digital Design Exhibition & Portfolio
- [ ] `SALONZ` live iframe preview loading cleanly (`https://salonz.vercel.app/`).
- [ ] `DND SALON` live iframe preview loading cleanly (`https://dndsalon.vercel.app/`).
- [ ] `DE STUDIO` live iframe preview loading cleanly (`https://destudio.vercel.app/`).
- [ ] `THE BARBER CLUB (TBC)` live iframe preview loading cleanly (`https://barberclub.vercel.app/`).
- [ ] `PAAKASHALA` archive project loading cleanly (`https://paakashala-three.vercel.app/`).
- [ ] Desktop / Mobile mode toggle buttons functioning smoothly on all featured builds.

---

## 4. Mobile & Responsive Design
- [ ] Tested on Mobile (390px viewport width) — zero horizontal scroll or clipped elements.
- [ ] Mobile navigation drawer opens and closes cleanly.
- [ ] All buttons and form inputs have 48px+ tap target height.

---

## 5. Technical SEO & Performance
- [ ] Page title set: `ThriveLab — Digital Presence Studio for Local Businesses`.
- [ ] Meta description and OpenGraph social preview metadata verified.
- [ ] JSON-LD `LocalBusiness` structured data present in `index.html`.
- [ ] Zero browser console errors.
