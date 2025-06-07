# Email Integration Setup Instructions

## Current Implementation Status

The contact form is currently set up with **Formspree** integration to send emails to `sean.mcdonnell1983@gmail.com`.

## Required Setup Steps

### Option 1: Formspree (Recommended - Easiest)

1. **Sign up for Formspree** at https://formspree.io
2. **Create a new form** and get your form endpoint
3. **Update the form action** in `src/components/Contact.tsx`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
4. **Configure the form** in Formspree dashboard:
   - Set email destination to: `sean.mcdonnell1983@gmail.com`
   - Enable spam protection
   - Set up custom confirmation message

**Pros:**

- ✅ No server required
- ✅ Built-in spam protection
- ✅ Form analytics
- ✅ Free tier available (50 submissions/month)

### Option 2: EmailJS (Alternative)

1. **Sign up for EmailJS** at https://www.emailjs.com/
2. **Create email service** (Gmail, Outlook, etc.)
3. **Create email template**
4. **Add EmailJS SDK** to your project:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
5. **Update the fallback code** in Contact.tsx with your EmailJS credentials

### Option 3: Custom Backend (Advanced)

If you need a custom solution:

1. Set up a Node.js/Express server
2. Use Nodemailer for email sending
3. Deploy to Vercel, Netlify, or similar
4. Update form endpoint in Contact.tsx

## Current Form Configuration

The form sends the following data:

- First Name & Last Name
- Email & Phone
- Company Name
- Debt Amount (optional)
- Message
- Anti-spam honeypot field

## Testing

After setup:

1. Fill out the contact form
2. Check that emails arrive at `sean.mcdonnell1983@gmail.com`
3. Verify success/error messages display correctly
4. Test form validation (required fields)

## Security Features

- ✅ Honeypot anti-spam field
- ✅ Form validation with Zod
- ✅ CSRF protection via SameSite cookies
- ✅ Rate limiting (if using custom backend)

## Recommendation

**Use Formspree** for the quickest setup. It's reliable, secure, and perfect for this use case. The current code is already configured for Formspree - you just need to create an account and update the form ID.
