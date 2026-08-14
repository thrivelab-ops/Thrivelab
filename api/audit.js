/**
 * THRIVELAB — Serverless Audit Lead Handler
 * Vercel Serverless Function: POST /api/audit
 * Validates lead submissions, checks spam honeypots, and forwards
 * audit requests to process.env.AUDIT_WEBHOOK_URL.
 */

export default async function handler(req, res) {
  // 1. Enforce POST Method
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Use POST.'
    });
  }

  try {
    const { name, business, phone, website, notes, submittedAt, _hp_gotcha } = req.body || {};

    // 2. Spam Honeypot Check
    if (_hp_gotcha) {
      // Quietly return success to confuse automated bots
      return res.status(200).json({
        success: true,
        message: 'Request processed.'
      });
    }

    // 3. Server-side Validation
    const cleanName = (name || '').trim();
    const cleanBusiness = (business || '').trim();
    const cleanPhone = (phone || '').trim();
    const cleanWebsite = (website || '').trim();
    const cleanNotes = (notes || '').trim();

    if (!cleanName || !cleanBusiness || !cleanPhone) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: Name, Business, and Phone are required.'
      });
    }

    // Phone format check (flexible for Indian 10-digit and international numbers)
    const phoneRegex = /^[+\d\s-]{8,15}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid phone or WhatsApp number.'
      });
    }

    const payload = {
      name: cleanName,
      business: cleanBusiness,
      phone: cleanPhone,
      website: cleanWebsite || 'N/A',
      notes: cleanNotes || 'N/A',
      submittedAt: submittedAt || new Date().toISOString(),
      source: 'ThriveLab Website Audit Form'
    };

    const webhookUrl = process.env.AUDIT_WEBHOOK_URL;

    // 4. Webhook Transmission to Configured Lead Destination
    if (webhookUrl) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!webhookResponse.ok) {
        console.error(`Webhook error: HTTP ${webhookResponse.status}`);
        return res.status(502).json({
          success: false,
          error: 'Lead transmission failed at destination.'
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Audit request transmitted successfully.'
      });
    }

    // 5. Development Mode (When process.env.AUDIT_WEBHOOK_URL is not yet set)
    console.log('[ThriveLab Dev Lead Notice]:', payload);
    return res.status(200).json({
      success: true,
      message: 'Audit request captured in development mode.',
      devNotice: 'Configure process.env.AUDIT_WEBHOOK_URL in Vercel to transmit live leads.'
    });

  } catch (err) {
    console.error('[ThriveLab API Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your audit request.'
    });
  }
}
