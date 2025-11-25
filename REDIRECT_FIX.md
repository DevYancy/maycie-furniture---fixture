# 🔧 Fix Form Redirect Issue

## Why the redirect isn't working

FormSubmit requires a **FULL URL** (not a relative path) for the `_next` parameter to work properly.

---

## ✅ SOLUTION: Update the Redirect URL

### Step 1: Find Your GitHub Pages URL

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Copy your site URL

**Examples:**
- `https://username.github.io/repo-name/`
- `https://maycie.github.io/furniture/`

### Step 2: Update index.html

**Find line ~467 in index.html:**
```html
<input type="hidden" name="_next" value="https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/thank-you.html">
```

**Replace with YOUR actual URL:**
```html
<input type="hidden" name="_next" value="https://your-actual-url.github.io/your-repo/thank-you.html">
```

**Example:**
If your site is at `https://maycie.github.io/furniture/`
Use:
```html
<input type="hidden" name="_next" value="https://maycie.github.io/furniture/thank-you.html">
```

### Step 3: Deploy and Test

1. Save the file
2. Commit and push to GitHub
3. Wait 1-2 minutes for deployment
4. Test the form on your live site
5. Should redirect to thank-you page now! ✅

---

## 🔄 Alternative: Remove Redirect (Temporary Testing)

If you want to test without setting up the URL:

**Remove the `_next` line completely:**
```html
<!-- Remove this line -->
<input type="hidden" name="_next" value="...">
```

**Result:**
- Form will show FormSubmit's default success page
- Email will still be sent ✅
- You can add the redirect later

---

## 🧪 Testing Locally?

**Important:** FormSubmit redirects only work on live websites, not local files!

**For local testing:**
- Use `http://localhost:8000` (with a web server)
- Or deploy to GitHub Pages first
- Don't use `file:///C:/Users/...`

**To run a local server:**
```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Use start-server.bat (if you have it)
start-server.bat
```

Then test at: `http://localhost:8000`

---

## ✅ Quick Checklist

- [ ] Found your GitHub Pages URL
- [ ] Updated `_next` value with full URL
- [ ] Saved and deployed to GitHub
- [ ] Tested on live site (not local file)
- [ ] Form redirects to thank-you page ✅

---

## 💡 Pro Tip

After fixing the redirect, you still need to:
1. **Verify your email** with FormSubmit (check spam!)
2. **Click the activation link** in the verification email
3. Then emails will be sent AND redirect will work!

The redirect and email sending are separate - both need to be set up correctly.
