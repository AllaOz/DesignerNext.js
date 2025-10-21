# Email Configuration Guide

## Setup Instructions

To enable email notifications when users submit the contact form, follow these steps:

### Step 1: Create `.env.local` file

Create a file named `.env.local` in the `interior-design` directory with the following content:

```env
EMAIL_USER=bureausoulconcept@gmail.com
EMAIL_PASS=your_app_password_here
```

### Step 2: Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/security
2. Make sure **2-Factor Authentication** is enabled
3. Go to **App Passwords**: https://myaccount.google.com/apppasswords
4. Select:
   - App: **Mail**
   - Device: **Other (Custom name)** - name it "Bureau Soul Concept Website"
5. Click **Generate**
6. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)
7. Replace `your_app_password_here` in `.env.local` with this password (remove spaces)

### Step 3: Update Vercel Environment Variables

For the production site on Vercel:

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add two variables:
   - `EMAIL_USER` = `bureausoulconcept@gmail.com`
   - `EMAIL_PASS` = `your_generated_app_password`
5. Select all environments (Production, Preview, Development)
6. Click **Save**
7. Redeploy your site for changes to take effect

### Email Format

When a user submits the form, you will receive an email at `bureausoulconcept@gmail.com` with:
- Subject: "New Contact Form Submission - Bureau Soul Concept"
- Contact's Name
- Contact's Email (clickable)
- Contact's Phone (if provided)
- Submission timestamp (Dubai time zone)

### Troubleshooting

If emails are not being sent:
1. Check that `.env.local` exists and has correct credentials
2. Verify that the App Password is correct (no spaces)
3. Check browser console and terminal for error messages
4. Make sure 2FA is enabled on the Gmail account
5. Try generating a new App Password

### Security Notes

- Never commit `.env.local` to Git (it's already in `.gitignore`)
- Use App Passwords, never your regular Gmail password
- Keep your App Password secure

