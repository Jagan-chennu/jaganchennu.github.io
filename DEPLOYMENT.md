# AVIDFLICK Deployment Guide

## Publishing Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  YOU: Write blog post in Gridea (Windows desktop app)       │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  GRIDEA: Click "Publish"                                     │
│  → Automatically pushes to GitHub avidflick-blog repo        │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  GITHUB: Receives the new/updated files                      │
│  → Notifies Netlify of changes                               │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  NETLIFY: Detects new commit                                │
│  → Runs build process (usually just copying files)           │
│  → Deploys to CDN worldwide                                  │
│  Takes ~1-2 minutes                                         │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  ✅ Your blog is LIVE at avidflick.in                        │
│  New post visible to everyone                                │
└─────────────────────────────────────────────────────────────┘
```

## Step-by-Step Netlify Setup

### Prerequisites
- GitHub account with `avidflick-blog` repository created
- Gridea installed and connected to GitHub
- Netlify account (free, sign up at netlify.com)

### Deployment Steps

#### 1. Sign Up for Netlify

1. Go to https://netlify.com
2. Click "Sign up"
3. Choose "Sign up with GitHub" (easiest option)
4. Authorize Netlify to access your GitHub
5. Complete signup

#### 2. Create New Site from Git

1. Dashboard → Click "New site from Git"
2. Select **GitHub** as your provider
3. Search for repository: **avidflick-blog**
4. Select it

#### 3. Configure Build Settings

**Important**: Gridea builds your site **locally** on your computer. You need to tell Netlify where to find the built site.

If Gridea is configured correctly:
- Your computer generates the `public/` folder when you publish
- This `public/` folder IS the finished website
- You need to commit this to GitHub

**Option A: Netlify builds should be:**
```
Build command:     (leave empty or: echo "Built by Gridea")
Publish directory: public
```

**Option B: If using CI/CD helpers:**
```
Build command:     npm run build
Publish directory: dist
```

*Ask yourself: "Where does Gridea save the finished website?" - that's your publish directory*

#### 4. Deploy!

1. Click "Deploy site"
2. Wait 2-5 minutes (progress shown on dashboard)
3. You'll get a URL like: `https://avidflick-xyz.netlify.app`
4. Visit it to confirm your blog is live!

#### 5. Connect Custom Domain

After confirming the temporary URL works:

1. Go to **Site settings** → **Domain management**
2. Click "Add custom domain"
3. Enter: `avidflick.in`
4. Netlify will provide **nameservers** to configure
5. Go to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
6. Update nameservers to Netlify's:
   ```
   ns1.netlify.com
   ns2.netlify.com
   ns3.netlify.com
   ns4.netlify.com
   ```
7. **Wait 24-48 hours** for DNS propagation

## Troubleshooting

### "Build failed" Error

**Common causes:**

1. **Publish directory incorrect**
   - Check where Gridea outputs files (usually `public/`)
   - Go to Netlify settings and update "Publish directory"

2. **GitHub token expired**
   - Gridea: Regenerate GitHub token (settings → GitHub)
   - Re-authenticate Netlify with GitHub

3. **Repository is Private**
   - Change GitHub repository to **Public**
   - Go to GitHub → avidflick-blog → Settings → Change to Public

**Solution:**
- Check Netlify's "Deploy log" (shows exact errors)
- Clear Netlify cache: Site settings → Delete and deploy site again

### Custom Domain Not Working (avidflick.in)

**Common causes:**

1. **DNS not propagated yet**
   - DNS changes take 24-48 hours
   - Check status: https://mxtoolbox.com/dnsLookup.aspx
   - Search for: `avidflick.in`

2. **Nameservers not updated correctly**
   - Go back to your domain registrar
   - Verify you added all 4 Netlify nameservers
   - Wait another 24 hours

3. **Using old A records instead of nameservers**
   - Remove any old A records pointing elsewhere
   - Use ONLY Netlify nameservers
   - Delete old CNAME records pointing to other services

**Temporary workaround:**
- Use Netlify's auto-generated URL: `https://avidflick-xyz.netlify.app`
- Share that URL while you wait for domain DNS

### Post Published but Not Showing on Website

1. **Confirm it published in Gridea**
   - Check for green checkmark ✓ next to post title
   - Status should show "Published"

2. **Check if pushed to GitHub**
   - Go to github.com → avidflick-blog
   - Look for your post file in the commits
   - If not there, Gridea hasn't pushed yet

3. **Wait for Netlify rebuild**
   - After GitHub push, wait 2-3 minutes
   - Check Netlify dashboard → "Deploys" tab
   - Should show a new deployment in progress
   - If not starting, re-trigger:
     - Site settings → Trigger deploy → Deploy site

4. **Hard refresh browser**
   - Press: **Ctrl + Shift + Delete** (clear cache)
   - Or: **Ctrl + F5**
   - Then visit avidflick.in again

### Site Looks Broken/Styling Missing

1. **Clear browser cache** (Ctrl + Shift + Delete)
2. **Hard refresh** (Ctrl + F5)
3. **Check Netlify CDN cache** (Site settings → Purge cache)
4. **Wait 5 minutes** for CDN to update

## Monitoring Your Site

### Daily Checklist

```
☐ Visit avidflick.in and verify it's working
☐ Check that latest post appears in homepage slider
☐ Test clicking through a post
☐ Test navigation menu items
☐ Check mobile view (use phone or browser dev tools)
```

### Monthly Maintenance

```
☐ Update Gridea if new version available
☐ Review GitHub repository for any errors
☐ Check Netlify analytics (Site → Analytics)
☐ Verify custom domain still works
```

## Performance Tips

### Make Your Site Faster

1. **Optimize images**
   - Compress images before uploading to Gridea
   - Use tools like: TinyPNG.com or Compressor.io

2. **Enable Netlify caching**
   - Already configured in `netlify.toml`
   - Images cached for 1 year
   - CSS/JS cached for 1 month

3. **Use CDN**
   - Netlify automatically uses global CDN
   - Your site is fast everywhere around the world

4. **Minimize theme assets**
   - In Gridea, disable unused theme features
   - Remove heavy plugins if using any

## Security Settings

All configured in `netlify.toml`:

✅ **Enabled:**
- X-Frame-Options (prevents clickjacking)
- X-Content-Type-Options (prevents MIME sniffing)
- X-XSS-Protection (prevents XSS attacks)
- Referrer-Policy (privacy protection)

✅ **HTTPS:**
- Automatic SSL/TLS certificate (free from Let's Encrypt)
- Auto-renews every 3 months

## Advanced: Manual GitHub Publishing

If Gridea doesn't auto-push, you can manually upload files:

1. Build site in Gridea locally
2. Copy the `public/` folder contents
3. Go to github.com → avidflick-blog
4. Click "Upload files"
5. Drag-and-drop the exported files
6. Commit changes
7. Netlify automatically rebuilds!

---

**Still stuck?** Check these resources:
- Gridea Docs: https://gridea.dev
- Netlify Docs: https://docs.netlify.com/
- GitHub Docs: https://docs.github.com
