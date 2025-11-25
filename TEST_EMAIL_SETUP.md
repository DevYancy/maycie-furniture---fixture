# 🧪 Testing Contact Form with yancyalmiranez@gmail.com

## ✅ Form Updated for Testing

Your contact form is now configured to send test emails to:
**yancyalmiranez@gmail.com**

---

## 📋 Testing Steps

### Step 1: Verify Email with FormSubmit (REQUIRED - First Time Only)

1. **Deploy to GitHub Pages** (or use Live Server locally)
2. **Go to your live website**
3. **Fill out the contact form** with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: 09123456789
   - Subject: Product Information
   - Message: This is a test message

4. **Click "Send Message"**

5. **Check email:** yancyalmiranez@gmail.com
   - Look for email from: `noreply@formsubmit.co`
   - Subject: "FormSubmit - Activate your form"
   - **This verification email is REQUIRED on first use!**

6. **Click the activation link** in the verification email

7. **Done!** FormSubmit is now activated for this email

---

### Step 2: Test Form Submission

After clicking the verification link:

1. **Go back to your website**
2. **Fill out the form again** with different test data
3. **Click "Send Message"**
4. **Wait 1-2 minutes**
5. **Check email:** yancyalmiranez@gmail.com
6. **You should receive the form submission!**

---

## 📧 What to Expect

### Verification Email (First Time):
```
From: FormSubmit <noreply@formsubmit.co>
To: yancyalmiranez@gmail.com
Subject: FormSubmit - Activate your form

Click the link below to activate your form:
[Activation Link]
```

### Form Submission Email (After Activation):
```
From: FormSubmit <noreply@formsubmit.co>
To: yancyalmiranez@gmail.com
Subject: New Contact Form Submission - Maycie Furniture

Name: Test User
Email: test@example.com
Phone: 09123456789
Subject: Product Information
Message: This is a test message
```

---

## ⚠️ Important Notes

### For Local Testing:
- **Use Live Server** (VS Code extension) or `start-server.bat`
- FormSubmit works on: `http://localhost:8000` or `http://127.0.0.1:5500`
- Does NOT work with: `file:///C:/Users/...`

### For GitHub Pages:
- FormSubmit works perfectly on GitHub Pages
- No special configuration needed
- Just deploy and test!

### Redirect After Submission:
- Currently set to: `thank-you.html` (relative URL)
- Works for both local and GitHub Pages
- User will see thank you page after submission

---

## 🔍 Troubleshooting

### "I didn't receive the verification email"

**Check these locations:**
1. ✅ Inbox
2. ✅ Spam/Junk folder
3. ✅ Promotions tab (Gmail)
4. ✅ Updates tab (Gmail)
5. ✅ All Mail folder

**If still not found:**
- Wait 5-10 minutes (sometimes delayed)
- Try submitting the form again
- Check email spelling: yancyalmiranez@gmail.com

### "I clicked the link but still no emails"

**After verification:**
1. Submit the form again (new submission)
2. Wait 1-2 minutes
3. Check all email folders
4. Refresh your inbox

### "Form shows success but no redirect"

**This is normal if:**
- Testing locally without web server
- The `_next` URL is incorrect
- JavaScript is disabled

**The email will still be sent!** Just check your inbox.

---

## 🎯 Quick Test Checklist

- [ ] Form action uses: `yancyalmiranez@gmail.com`
- [ ] Website is running on web server (not file://)
- [ ] Submitted test form
- [ ] Checked email for verification
- [ ] Clicked activation link
- [ ] Submitted form again
- [ ] Received test email

---

## 🔄 After Testing: Switch to Production Email

Once testing is complete and working:

1. **Update `index.html` line ~463:**
   ```html
   <form action="https://formsubmit.co/mayzraviz28@gmail.com" method="POST">
   ```

2. **Repeat verification process** for the production email:
   - Submit form
   - Check mayzraviz28@gmail.com
   - Click verification link
   - Test again

3. **Deploy to GitHub Pages**

4. **Production ready!** ✅

---

## 💡 Pro Tips

### Tip 1: Test Multiple Times
- First submission = verification
- Second submission = actual test
- Third+ submissions = confirm it's working

### Tip 2: Check Spam Settings
- Mark FormSubmit emails as "Not Spam"
- Add noreply@formsubmit.co to contacts
- This ensures future emails go to inbox

### Tip 3: Use Different Test Data
- Try different email addresses
- Try different subjects
- Try long messages
- Verify all data appears in email

### Tip 4: Test on Mobile
- Open website on phone
- Fill out form
- Verify it works on mobile too

---

## 📱 Testing Scenarios

### Scenario 1: Local Development
```
URL: http://localhost:8000
Method: Use start-server.bat or Live Server
Expected: Form works, emails received
```

### Scenario 2: GitHub Pages
```
URL: https://username.github.io/repo-name/
Method: Deploy to GitHub
Expected: Form works, emails received
```

### Scenario 3: Mobile Device
```
URL: Same as above
Method: Open on phone/tablet
Expected: Form works, responsive design
```

---

## ✅ Success Criteria

Your form is working correctly when:

1. ✅ Verification email received and activated
2. ✅ Test submissions arrive within 1-2 minutes
3. ✅ All form fields appear in email
4. ✅ Thank you page displays after submission
5. ✅ Works on both desktop and mobile
6. ✅ Emails go to inbox (not spam)

---

## 🎉 Ready to Test!

Your form is now configured with:
- **Test Email:** yancyalmiranez@gmail.com
- **Subject:** New Contact Form Submission - Maycie Furniture
- **Redirect:** thank-you.html
- **Spam Protection:** Disabled for testing
- **Template:** Table format

**Start testing now!** Submit a form and check your email. 📧
