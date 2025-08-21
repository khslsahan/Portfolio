# 📧 EmailJS Setup Guide for Contact Form

## 🎯 What This Does
Your contact form will now send real emails to your inbox when someone fills it out, without needing a backend server!

## 🔧 Setup Steps

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (or your preferred email provider)
4. Connect your email account (sahanbcsrh@gmail.com)
5. **📝 Note down your Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Email Body:**
```html
Hello {{to_name}},

You have received a new message from your portfolio website:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Subject:** {{subject}}

**Message:**
{{message}}

---
Best regards,
Your Portfolio Website
```

4. **📝 Note down your Template ID** (looks like: `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"API Keys"**
2. **📝 Copy your Public Key** (looks like: `user_abc123def456`)

### Step 5: Update Your Code
Open `src/app/services/contact.service.ts` and replace:

```typescript
// Replace these 3 values:
emailjs.init('YOUR_PUBLIC_KEY_HERE');
'YOUR_SERVICE_ID'
'YOUR_TEMPLATE_ID'

// With your actual values:
emailjs.init('user_abc123def456');
'service_abc123'
'template_xyz789'
```

## 🚀 How It Works
1. User fills out contact form
2. Form validates input
3. EmailJS sends email to your inbox
4. User sees success/error message
5. You receive email with all the details!

## 💰 Pricing
- **Free Plan**: 200 emails/month
- **Paid Plans**: Start at $15/month for more emails

## 🔒 Security
- No backend needed
- Emails sent directly from EmailJS
- Your email credentials stay secure
- Rate limiting prevents spam

## ✅ Test It
1. Fill out the contact form
2. Click "Send Message"
3. Check your email inbox
4. You should receive the message!

## 🆘 Troubleshooting
- **"Service not found"**: Check your Service ID
- **"Template not found"**: Check your Template ID  
- **"Invalid public key"**: Check your Public Key
- **No emails received**: Check spam folder

## 📞 Need Help?
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**🎉 Once configured, your contact form will work perfectly and send real emails!**
