# AVIDFLICK GitHub Pages Deployment Guide

Complete step-by-step instructions to get your blog live at avidflick.in using GitHub Pages (free hosting, no Netlify needed).

## Prerequisites

You need:
- ✅ GitHub account with `avidflick-blog` repository created
- ✅ Your domain `avidflick.in` purchased and ready
- ✅ Access to your domain registrar (where you bought the domain)

## Part 1: Enable GitHub Pages (2 Minutes)

### Step 1A: Upload Your Website Files

First, make sure your repository has:
- `/public/` folder (contains index.html, blog.html, etc.)
- `/posts/` folder (contains your markdown blog posts)
- `README.md`, `CONTRIBUTING.md`, etc.

**Upload using GitHub web UI:**

1. Click **Add file** → **Create new file**
2. For folders, type path like: `public/index.html`
3. For markdown posts: `posts/my-post.md`
4. Click **Commit changes**

Repeat until all files are uploaded.

### Step 1B: Configure GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** (right side of page)
3. Click **Pages** (left sidebar under "Code and automation")
4. Under "Build and deployment":
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **main**
   - **Folder**: Select **`/public`** (this is where your HTML files are)
5. Click **Save**

**GitHub Pages is now enabled!**

### Step 1C: Your Temporary URL

After a few seconds, you'll see:

```
Your site is live at: https://YOUR-USERNAME.github.io/avidflick-blog
```

This is your site's temporary URL. It's fully functional but not your custom domain yet.

**Your site is live!** 🎉

---

## Part 2: Connect Custom Domain (avidflick.in)

### Step 2A: Add Domain to GitHub Pages

1. In **Settings** → **Pages**
2. Under "Custom domain", enter: `avidflick.in`
3. Click **Save**

GitHub creates a `CNAME` file automatically.

### Step 2B: Configure DNS at Your Registrar

you need to point your domain to GitHub's servers.

**GitHub's IP addresses:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### If from **GoDaddy**:
1. Log in to GoDaddy
2. Go to **My Products**
3. Click your domain
4. Click **Manage DNS**
5. Find the **A record** pointing to your old host
6. Change all 4 values to GitHub's IPs above (one per record, or create if needed)
7. Click **Save**

#### If from **Namecheap**:
1. Log in to Namecheap
2. Click **Manage** next to your domain
3. Click **Advanced DNS**
4. Find **A Record**
5. Change the IP to: `185.199.108.153`
6. Click the checkmark ✓

**Add other A records for the other 3 IPs above**

#### If from **Other Registrar**:
1. Log in to your registrar
2. Find **DNS** or **A Records** settings
3. Create/update A Records with GitHub's 4 IPs
4. Save

### Step 2C: Add CNAME Record (Optional but Recommended)

This directs `www.avidflick.in` to your GitHub site.

1. In your registrar's DNS settings
2. Create a new **CNAME** record:
   - **Name:** `www`
   - **Value:** `YOUR-USERNAME.github.io`
3. Save

### Step 2D: Wait for DNS Propagation

DNS changes take **24-48 hours** to propagate globally.

**What's happening:**
1. GitHub's nameservers are receiving requests for avidflick.in
2. They're routing to your GitHub Pages site
3. HTTPS is automatically provisioned by GitHub

### Step 2E: Verify It Works

Once DNS propagates (you'll see a checkmark in GitHub Pages settings):

1. Visit `https://avidflick.in`
2. Your site should load!
3. Check browser security (🔒 should show "Secure")

**It's live!** 🎉

---

## Part 3: Verify Everything Works

### Checklist

- [ ] Your site loads at https://avidflick.in
- [ ] GitHub Pages shows ✅ for avidflick.in
- [ ] Posts are visible on homepage
- [ ] Dark/light mode toggle works
- [ ] "Edit on GitHub" buttons work
- [ ] Navigation links work properly
- [ ] Looks good on mobile
- [ ] Browser shows 🔒 Secure/HTTPS

### Quick Tests

**Test 1: Homepage**
```
Visit: https://avidflick.in
Should show: Homepage with slider and featured posts
```

**Test 2: Blog Post**
```
Click: Any blog post link
Should show: Full post with "Edit on GitHub" button
```

**Test 3: Edit Button**
```
Click: "Edit on GitHub" on any post
Should redirect to: GitHub markdown editor
```

**Test 4: New Post Publishing**
```
1. Go to GitHub repo
2. Click Add file → Create new file
3. Type: posts/test-post.md
4. Add simple markdown content
5. Click Commit
6. Wait 1-2 minutes
7. Refresh avidflick.in/blog.html
Should show: Your new post
```

---

## Troubleshooting

### Domain Won't Connect

**Issue:** Domain still shows "Not Found"

**Solutions:**
- Wait 24-48 hours (DNS is slow)
- Check GitHub Pages shows green checkmark
- Verify registrar saved all 4 A records for GitHub's IPs
- Check CNAME record is set (if using www.avidflick.in)

### HTTPS Not Working ("Not Secure")

**Issue:** Browser shows 🔓 Not Secure warning

**Solution:**
- Wait 5-10 minutes after adding domain (GitHub provisions certificate)
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser to verify
- Check in GitHub Pages settings for SSL/TLS status

### Site Shows Old Content

**Issue:** Changes didn't appear after pushing to GitHub

**Solutions:**
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check GitHub Pages status in **Settings** → **Pages** (should show green/ready)
- Clear browser cache (Ctrl+Shift+Delete)
- Try `https://avidflick.in?time=<random>` to force reload

### GitHub Pages Building Fails

**Issue:** Settings → Pages shows red error

**Solutions:**
- Check `/public/` folder exists and has `index.html`
- Verify HTML files don't have syntax errors
- Try refreshing the page
- Check commit history to see what changed

---

## How GitHub Pages Works

```
You push to GitHub
      ↓
GitHub detects change (webhook)
      ↓
Rebuilds from /public/ folder
      ↓
Serves at avidflick.in (via DNS)
      ↓
Visitors see your site
```

**It's fully automatic!**

---

## Make Changes After Deployment

### To Edit Posts on Your Live Site

1. Go to your GitHub repository
2. Find file: `posts/my-post.md`
3. Click the **pencil icon** (Edit)
4. Make changes
5. Scroll down and click **Commit changes**
6. Done! Site updates in 1-2 minutes

### To Add New Posts

1. GitHub → Click **Add file** → **Create new file**
2. Type: `posts/new-post-name.md`
3. Paste markdown content
4. Commit
5. Check your site in 1-2 minutes

### To Modified Website Design

Edit HTML/CSS files directly:
1. Go to **public/** folder on GitHub
2. Click the file (e.g., `index.html`)
3. Click **Edit** (pencil icon)
4. Make changes
5. Commit
6. Site updates in 1-2 minutes!

### To Accept Community Contributions

1. They fork your repository
2. Edit files in their fork
3. Submit a **Pull Request**
4. You review and **Merge** to main
5. Site auto-updates!

---

## GitHub Pages vs Other Options

| Aspect | GitHub Pages | Netlify | Traditional Hosting |
|--------|--------------|---------|-------------------|
| Cost | 🟢 Free | 🟢 Free | 💰 Paid |
| Setup time | 🟢 2 min | 🟡 5 min | 🔴 30+ min |
| Extra accounts | 🟢 None | 🟡 One | 🔴 Multiple |
| Simplicity | 🟢 Simple | 🟡 Medium | 🔴 Complex |
| Build dashboard | 🟢 None | 🟡 Web UI | 🔴 FTP/SSH |
| Performance | 🟢 Fast (CDN) | 🟢 Fast | 🟡 Depends |
| Community value | 🟢 High | 🟡 Medium | 🟡 Low |

---

## Summary of Your Setup

```
GitHub Repository (your source)
    ↓ (automatic webhook on push)
GitHub Pages Builder (reads /public/)
    ↓ (serves via GitHub's CDN)
avidflick.in (via DNS/CNAME)
    ↓
Visitors see your site 🌍
```

**Everything is automatic and free!**

---

## Monitoring Your Site

### Check Deployment Status

1. Go to your GitHub repo
2. Click **Settings** → **Pages**
3. See real-time deployment status
4. Green checkmark = live and healthy

### View Build History

GitHub doesn't store detailed build logs for Pages, but:
- If there's an error, it shows in **Settings** → **Pages**
- Check your last commit in the repo
- Files in `/public/` are what's being served

---

## Next Steps

✅ **You're deployed!** Now:

1. Write your first blog post
2. Share avidflick.in on social media
3. Encourage others to contribute via GitHub
4. Grow your Linux learning community

---

## Support & Help

### If Something Goes Wrong

1. **Check GitHub Pages status**
   - Settings → Pages → Look for error message

2. **Verify file structure**
   - `/public/index.html` must exist
   - `/posts/*.md` files are in correct folder

3. **Wait and refresh**
   - DNS can take 24-48 hours
   - Clear browser cache
   - Try incognito window

4. **Common issues:**
   - [GitHub Pages Docs](https://pages.github.com/)
   - [GitHub Help](https://help.github.com/en/articles/configuring-a-custom-domain-for-your-github-pages-site)

---

## Congratulations! 🎉

Your blog is now live at **avidflick.in** using GitHub Pages!

- ✅ Free hosting
- ✅ Zero cost
- ✅ Auto-publishing
- ✅ Community contribution ready

**Start writing and sharing your Linux knowledge!** 📝✨
