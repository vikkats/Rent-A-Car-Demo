# Meltemi Rentals

A mobile-first booking-request landing page for a fictional 12-car rental company in Kos. This is a hiring-exercise deliverable.

The page is built around one commercial problem: helping a visitor compare the final payable price, not a competitor's headline rate, without naming or attacking competitors.

## Product decisions

- Resolves the €8-versus-€35 objection in the first viewport.
- Puts the all-inclusive price promise before the fleet, so cars are compared after value is understood.
- Adds a neutral five-question comparison checklist to make hidden costs legible.
- Keeps a booking CTA available throughout the mobile journey.
- Sets honest expectations: this is an availability request, no payment is taken, and the exact total is confirmed before commitment.
- Emails the visitor a copy of the request through EmailJS when keys are configured.

## Stack

- Next.js, React 19, and TypeScript
- Tailwind CSS 4 and Lucide icons
- Server-side validation, honeypot spam protection, and recoverable form states
- Optional EmailJS confirmation to the address entered on the form

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Confirmation email

The form cannot send mail by itself, and this project has no SMTP server. [EmailJS](https://www.emailjs.com/) is the free path: 200 emails a month, no credit card, and you connect Gmail or Outlook by signing in. You do not enter SMTP host or password in this app.

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an email service. Choose Gmail or Outlook and sign in.
3. Create a template. Set **To Email** to `{{to_email}}`. Do not put your own Gmail there. Your Gmail only sends the message. The reviewer receives it at whatever address they type in the form.
4. Use this subject: `We received your Meltemi request {{reference}}`

Paste this as the template content:

```html
<div style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.5; color: #102c3c; max-width: 560px;">
  <p style="margin: 0 0 8px; font-size: 12px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: #267b80;">Meltemi Rentals · Kos</p>
  <h1 style="margin: 0 0 16px; font-size: 28px; line-height: 1.15;">We received your request, {{name}}.</h1>
  <p style="margin: 0 0 20px; color: #5d727c;">This is a copy of the availability request you sent. We will reply with availability, your exact total, and the rental terms before you decide.</p>
  <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; background: #f8f6f1; border-radius: 16px;">
    <tr>
      <td style="padding: 18px 20px; border-bottom: 1px solid #dce5e9; color: #627781; font-size: 13px;">Reference</td>
      <td style="padding: 18px 20px; border-bottom: 1px solid #dce5e9; font-weight: 800;">{{reference}}</td>
    </tr>
    <tr>
      <td style="padding: 18px 20px; border-bottom: 1px solid #dce5e9; color: #627781; font-size: 13px;">Name</td>
      <td style="padding: 18px 20px; border-bottom: 1px solid #dce5e9; font-weight: 700;">{{name}}</td>
    </tr>
    <tr>
      <td style="padding: 18px 20px; border-bottom: 1px solid #dce5e9; color: #627781; font-size: 13px;">Email</td>
      <td style="padding: 18px 20px; border-bottom: 1px solid #dce5e9;">{{email}}</td>
    </tr>
    <tr>
      <td style="padding: 18px 20px; border-bottom: 1px solid #dce5e9; color: #627781; font-size: 13px;">Pick-up</td>
      <td style="padding: 18px 20px; border-bottom: 1px solid #dce5e9;">{{pickup_date}}</td>
    </tr>
    <tr>
      <td style="padding: 18px 20px; border-bottom: 1px solid #dce5e9; color: #627781; font-size: 13px;">Return</td>
      <td style="padding: 18px 20px; border-bottom: 1px solid #dce5e9;">{{return_date}}</td>
    </tr>
    <tr>
      <td style="padding: 18px 20px; color: #627781; font-size: 13px;">Car category</td>
      <td style="padding: 18px 20px; font-weight: 700;">{{car_category}}</td>
    </tr>
  </table>
  <p style="margin: 20px 0 0; font-size: 13px; color: #7a8d95;">No payment was taken. This is not a confirmed booking.</p>
</div>
```

5. Copy the service ID, template ID, public key, and private key into `.env` at the project root. The template ID is on the template page and looks like `template_xxxxx`.
6. In [Account → Security](https://dashboard.emailjs.com/admin/account/security), turn on API access from non-browser applications. This app sends from the Next.js server, so EmailJS blocks the request until that is on.
7. Restart `npm run dev`.

The form still returns a reference if the keys are missing. A failed send does not block the success screen.

See `DELIVERY-NOTE.md` for the visitor-journey notes that go with this page.

## Notes

Meltemi Rentals is a fictional business created for a hiring exercise. Contact information is deliberately non-routable. Vehicle names represent rental categories and are marked “or similar.”

## Image credits

Photography is from [Pexels](https://www.pexels.com/license/) and is stored locally as optimized WebP assets for a fast first load.

- Coastal-road hero: [Сокіл Sokil](https://www.pexels.com/photo/scenic-coastal-highway-drive-with-ocean-view-37581691/)
- Toyota Aygo: [Efrem Efre](https://www.pexels.com/photo/16378758/)
- Ford Focus: [Mike Bird](https://www.pexels.com/photo/27138933/)
- Hyundai Kona: [Hyundai Motor Group](https://www.pexels.com/photo/side-view-of-a-hyundai-kona-12163946/)
- Hyundai Staria: [Hyundai Motor Group](https://www.pexels.com/photo/24536588/)
