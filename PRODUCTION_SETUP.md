# ThriveLab — Production Environment Setup Guide

This guide details how to configure lead capture webhook integration and deploy `thrivelab.co.in` on Vercel.

---

## 1. Audit Lead Webhook Configuration

ThriveLab uses a Vercel Serverless Function at `/api/audit.js` to process audit requests. Incoming leads are automatically forwarded to the endpoint specified in `AUDIT_WEBHOOK_URL`.

### Required Environment Variable

| Variable Name | Purpose | Example Value |
|---|---|---|
| `AUDIT_WEBHOOK_URL` | Destination endpoint where lead payloads are POSTed (Discord/Slack webhook, Formspree, Resend, n8n, Make, or custom API). | `https://discord.com/api/webhooks/12345/abcdef` or `https://formspree.io/f/xvobqwlk` |

---

## 2. Setting Up in Vercel Dashboard

1. Log into your **Vercel Dashboard**.
2. Select your `ThriveLab` project.
3. Go to **Settings** → **Environment Variables**.
4. Add a new variable:
   - **Key**: `AUDIT_WEBHOOK_URL`
   - **Value**: Your live webhook URL (e.g. Formspree / Discord / Slack webhook endpoint)
   - **Environment**: Select `Production`, `Preview`, and `Development`.
5. Click **Save** and trigger a new deployment.

---

## 3. Lead Payload Structure

When an audit request is submitted on the website, `/api/audit` posts the following JSON payload:

```json
{
  "name": "Rahul Sharma",
  "business": "Salonz Beauty Lounge, Indiranagar",
  "phone": "+91 98765 43210",
  "website": "salonz.in",
  "notes": "Need WhatsApp booking integration",
  "submittedAt": "2026-08-14T21:20:00.000Z",
  "source": "ThriveLab Website Audit Form"
}
```

---

## 4. Development & Fallback Behavior

* **Development Mode**: If `AUDIT_WEBHOOK_URL` is not set, `/api/audit` will log the lead payload to Vercel Function logs and return HTTP 200 with a development notice.
* **Transmission Failure**: If the webhook destination returns a non-2xx status code or times out (5s limit), `/api/audit` returns HTTP 502, triggering the website UI to display a clear error message offering direct **WhatsApp contact**.
