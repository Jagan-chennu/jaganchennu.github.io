# AVIDFLICK Netlify + Domain Deployment Guide

Complete step-by-step instructions to get your blog live at avidflick.in.

## Prerequisites

You need:
- ✅ GitHub account with `avidflick-blog` repository created
- ✅ Your domain `avidflick.in` purchased and ready
- ✅ Access to your domain registrar (wherever you bought the domain)

## Part 1: Deploy to Netlify (Free)

### Step 1A: Create Netlify Account

1. Visit [netlify.com](https://netlify.com)
2. Click **Sign up**
3. Choose **Sign up with GitHub**
4. Authorize Netlify to access your GitHub account
5. Click **Authorize netlify[bot]**

### Step 1B: Create New Netlify Site

1. On Netlify dashboard, click **Add new site**
2. Select **Import an existing project**
3. Choose **GitHub**
4. **Authorize** Netlify with GitHub (if needed)
5. Find your repository: **avidflick-blog**
6. Click on it

### Step 1C: Configure Build Settings

On the next screen, you'll see:

- **Repository:** avidflick-blog ✓
- **Branch to deploy:** main ✓
- **Build command:** (leave empty - we're using pre-built HTML)
- **Publish directory:** public

**If asking for build command:**
- Leave empty (click to skip)
- Set publish directory to: `public`

### Step 1D: Deploy!

1. Click **Deploy site**
2. Netlify builds your site (takes 30-60 seconds)
3. You get a temporary URL like: `avidflick.netlify.app`
4. **Your site is live!** 🎉

### What Happens Next

Every time you:
- Push to GitHub
- Create/edit a blog post file
- Commit changes

**Netlify automatically rebuilds and redeploys** (takes ~30 seconds).

---

## Part 2: Connect Custom Domain (avidflick.in)

### Step 2A: Add Domain in Netlify

1. Go to your Netlify site dashboard
2. Click **Site settings**
3. Click **Domain management** (left sidebar)
4. Click **Add custom domain**
5. Enter: `avidflick.in`
6. Click **Verify**

### Step 2B: Choose Configuration Option

Netlify asks how your domain registrar is set up.

**Most common:** You bought domain from GoDaddy, Namecheap, etc.

→ Click: **I'll update my domain settings**

### Step 2C: Update DNS Settings

Netlify gives you **nameservers**. You'll see something like:

```
ns1.netlify.com
ns2.netlify.com
ns3.netlify.com
ns4.netlify.com
```

**Copy these.**

### Step 2D: Update Registrar (Where You Bought Domain)

Where you bought avidflick.in:

#### If from **GoDaddy**:
1. Log in to GoDaddy
2. Go to **My Products**
3. Click your domain
4. Click **DNS**
5. Under "Nameservers", click **Change**
6. Choose **Custom nameservers**
7. Paste the 4 Netlify nameservers
8. Click **Save**

#### If from **Namecheap**:
1. Log in to Namecheap
2. Click **Manage** next to your domain
3. Click **Nameservers** tab
4. Select **Custom DNS**
5. Paste the 4 Netlify nameservers
6. Click checkmark ✓

#### If from **Other registrar**:
1. Find their DNS or Nameserver settings
2. Look for "Custom nameservers" option
3. Enter Netlify's 4 nameservers
4. Save

### Step 2E: Wait for DNS Propagation

DNS changes take **24-48 hours** to propagate globally.

**What to do now:**
1. Netlify shows confirmation once it detects the change (can take hours)
2. Keep the Netlify dashboard open to monitor
3. After propagation, you'll see ✅ next to your domain
4. Then https://avidflick.in works!

**In the meantime:**
Your site is still live at `avidflick.netlify.app` (temporary URL).

### Step 2F: Enable HTTPS (Security)

Once DNS is verified:

1. In Netlify, go back to **Domain management**
2. You should see your domain with ✅
3. HTTPS should be automatically enabled by Netlify
4. If not, look for **Enable HTTPS** button

---

## Part 3: Verify Everything Works

### Checklist

- [ ] Your site loads at https://avidflick.in
- [ ] Posts are visible
- [ ] Dark/light mode toggle works
- [ ] "Edit on GitHub" buttons work
- [ ] Navigation links work properly
- [ ] Looks good on mobile (test with phone)

### Quick Tests

**Test 1: Homepage**
```
Click: https://avidflick.in
Should show: Homepage with slider and posts
```

**Test 2: Blog Post**
```
Click: Any blog post link
Should show: Full post with "Edit on GitHub" button
```

**Test 3: Edit Button**
```
Click: "Edit on GitHub" on any post
Should redirect to: GitHub editor for that post
```

**Test 4: New Post Publishing**
```
1. Go to your GitHub repo
2. Add new file: posts/test-post.md
3. Add simple markdown content
4. Commit
5. Wait 30 seconds
6. Refresh avidflick.in/blog.html
Should show: Your new post
```

---

## Troubleshooting

### Domain Won't Connect

**Issue:** DNS verification stuck at "pending"

**Solutions:**
- Wait 24-48 hours (DNS is slow)
- Verify nameservers saved at registrar (check multiple times)
- Ensure you're using Netlify's exact nameserver URLs (no typos)
- Try clearing browser cache

### HTTPS Not Working

**Issue:** Browser shows "Not Secure"

**Solution:**
- Wait for Netlify to provision certificate (usually automatic)
- Check Netlify Domain settings - look for SSL/TLS certificate status

### Site Shows Old Content

**Issue:** Changes didn't appear after pushing to GitHub

**Solutions:**
- Check Netlify's deploy log (look for errors)
- Wait 30+ seconds for build
- Manually trigger deploy in Netlify
- Clear browser cache (Ctrl+Shift+Delete)
- Check if correct branch is set to deploy

### Netlify Can't Find Repository

**Issue:** "Can't find your repository"

**Solutions:**
- Ensure GitHub account is authorized in Netlify
- Verify repository is public (not private)
- Try disconnecting and reconnecting GitHub in Netlify settings

---

## Monitoring Your Site

### Netlify Dashboard

After deployment, you can:

1. **View deploy history** - See all past deployments
2. **Check deploy logs** - Debug any build issues
3. **Monitor analytics** - See visitor stats (if enabled)
4. **Configure redirects** - In Site settings → Redirects
5. **Manage domain** - In Domain management

### GitHub Sync

1. Every time you push to GitHub → Netlify builds
2. Netlify shows deployment status
3. Check the deployment logs if something goes wrong
4. Can manually trigger redeploy from Netlify dashboard

---

## Make Changes After Deployment

### To Edit Posts on Your Live Site

1. Go to your GitHub repository
2. Click on the post file in `/posts/`
3. Click the **pencil icon** (edit)
4. Make your changes
5. Scroll down and click **Commit changes**
6. Done! Site updates in ~30 seconds

### To Add New Posts

1. GitHub → Click **Add file** → **Create new file**
2. Type: `posts/new-post-name.md`
3. Paste markdown content
4. Commit
5. Check your site in 30 seconds

### To Have Others Contribute

1. They fork your GitHub repo
2. Create a branch and make edits
3. Submit a pull request
4. You review and merge
5. Site auto-updates!

---

## Summary of Your Setup

```
You (GitHub) 
    ↓ push code
GitHub repo (avidflick-blog)
    ↓ webhook triggers build
Netlify (builds & hosts)
    ↓ points to nameservers
your domain (avidflick.in)
    ↓ visitors see
Public blog with 🚀
```

---

## Support & Help

### If Something Goes Wrong

1. **Check Netlify deploy logs**
   - Dashboard → Deploys tab → Click failed deploy → View logs

2. **Check GitHub repository**
   - Make sure files are in right directories
   - Check filenames are exact matches

3. **Wait and try again**
   - DNS can take up to 48 hours
   - Clear cache and restart browser
   - Try incognito/private window

4. **Common issues reference:**
   - [Netlify troubleshooting](https://docs.netlify.com/)
   - [DNS help](https://support.netlify.com/hc/en-us/articles/360046487572-Custom-Domains)

---

## Next Steps

✅ **You're deployed!** Now:

1. Write your first real blog post
2. Share your blog on social media
3. Encourage others to contribute via GitHub
4. Grow your Linux learning community

---

**Congratulations! Your blog is live at 🎉 avidflick.in**
