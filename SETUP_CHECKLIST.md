# AVIDFLICK Setup Checklist

Complete this checklist to get your blog up and running!

## Phase 1: Download & Install (10 minutes)

- [ ] Download Gridea from https://gridea.dev
- [ ] Install Gridea on your Windows computer
- [ ] Launch Gridea and verify it opens
- [ ] Note: You'll create content in Gridea, not in VS Code

## Phase 2: Create GitHub Repository (5 minutes)

- [ ] Go to github.com and sign in
- [ ] Click "New" to create a repository
- [ ] Name: `avidflick-blog`
- [ ] Make it **Public** (important!)
- [ ] Initialize with README (optional)
- [ ] Copy your repository URL: `https://github.com/YOUR_USERNAME/avidflick-blog`

## Phase 3: Connect Gridea to GitHub (10 minutes)

- [ ] Open Gridea
- [ ] Go to **Settings** (⚙️ gear icon)
- [ ] Find **GitHub** section
- [ ] Click "Authenticate with GitHub"
- [ ] Authorize Gridea to access your GitHub
- [ ] Enter your repository URL
- [ ] Click "Test Connection" - should show ✓ Success

## Phase 4: Configure Site Settings in Gridea (10 minutes)

- [ ] In Gridea Settings, configure:
  - [ ] Site Title: `AVIDFLICK`
  - [ ] Site Description: `[Your tagline here, e.g., "Linux Insights & Technology Tips"]`
  - [ ] Domain: `avidflick.in`
  - [ ] Posts Per Page: `10`
  - [ ] Theme: Choose a theme (most have carousel for latest posts)

## Phase 5: Set Up Navigation Menu (5 minutes)

In Gridea Menu Configuration, add:

- [ ] Home → `/`
- [ ] Blog → `/post/`
- [ ] Mastering Linux Concepts → `/tag/linux/`
- [ ] About → `/about/`
- [ ] Contact → `/contact/`

## Phase 6: Create Static Pages (15 minutes)

- [ ] Click "New Page" in Gridea
  - [ ] Title: "About Me", Slug: `about`
  - [ ] Fill in your bio and information
  - [ ] Click "Publish"

- [ ] Click "New Page" in Gridea
  - [ ] Title: "Contact", Slug: `contact`
  - [ ] Add contact information and form
  - [ ] Click "Publish"

## Phase 7: Publish Test Post (10 minutes)

- [ ] Click "New Post" in Gridea
- [ ] Title: "Welcome to AVIDFLICK"
- [ ] Content: Write a welcome message
- [ ] Tags: Add `linux` tag (important for category!)
- [ ] Click "Publish"
- [ ] Verify it appears in GitHub repository

## Phase 8: Deploy to Netlify (15 minutes)

- [ ] Go to netlify.com and sign up
- [ ] Sign up with GitHub (easiest)
- [ ] Click "New site from Git"
- [ ] Select GitHub and authorize
- [ ] Choose repository: `avidflick-blog`
- [ ] Configure build settings:
  - [ ] Build command: (leave empty)
  - [ ] Publish directory: `public`
- [ ] Click "Deploy site"
- [ ] Wait 2-5 minutes for deployment
- [ ] You'll get a URL like: `avidflick-abc123.netlify.app`
- [ ] Visit that URL to verify it works ✓

## Phase 9: Connect Custom Domain (15 minutes)

- [ ] In Netlify, go to **Domain settings**
- [ ] Click "Add custom domain"
- [ ] Enter: `avidflick.in`
- [ ] Netlify provides nameservers (4 of them)
- [ ] Go to your domain registrar (GoDaddy, Namecheap, etc.)
- [ ] Update DNS nameservers to Netlify's
- [ ] **WAIT 24-48 HOURS** for DNS to propagate
- [ ] After waiting, visit `avidflick.in` - should load your site ✓

## Phase 10: Testing & Verification (10 minutes)

Once DNS is set up (after 24-48 hours), verify:

- [ ] Visit avidflick.in in your browser
- [ ] Homepage shows "**AVIDFLICK**" title in bold
- [ ] Navigation menu appears with all items (Home, Blog, Mastering Linux Concepts, About, Contact)
- [ ] Latest posts appear in a slider/carousel on homepage
- [ ] Click on a post - it opens and is readable
- [ ] Click "About" - shows your about page
- [ ] Click "Contact" - shows contact page
- [ ] Click "Mastering Linux Concepts" - shows posts tagged with "linux"
- [ ] Test on mobile phone - site is responsive
- [ ] Check status: https://mxtoolbox.com/dnsLookup.aspx - shows avidflick.in

## Phase 11: First Real Blog Post (20 minutes)

- [ ] Come back to Gridea
- [ ] Click "New Post"
- [ ] Write your first real blog post about Linux Concepts
- [ ] Tag it with: `linux` or `Linux Concepts` (consistency matters!)
- [ ] Add a featured image if possible
- [ ] Click "Publish"
- [ ] Wait 2-3 minutes
- [ ] Visit avidflick.in to see it live ✓

## Ongoing Publishing Workflow

This is your repeating workflow:

```
1. Open Gridea
2. Click "New Post"
3. Write your content
4. Add tags (use "linux" for Linux Concepts articles)
5. Click "Publish"
6. Gridea → GitHub → Netlify → avidflick.in (automatic!)
7. Wait 2 minutes and your post is live
```

## Troubleshooting Checklist

If something doesn't work:

- [ ] GitHub token expired? → Regenerate in GitHub settings, update in Gridea
- [ ] Build failed? → Check Netlify deploy logs, verify `public/` folder exists
- [ ] Domain not working yet? → Check status at mxtoolbox.com, wait 24-48 more hours
- [ ] Post not showing? → Verify it has green ✓ in Gridea, check GitHub commits
- [ ] Styling looks broken? → Hard refresh: Ctrl+Shift+Delete, then Ctrl+F5

## Final Checklist

- [ ] Blog is live at avidflick.in
- [ ] All navigation menu items work
- [ ] Posts slider displays latest posts
- [ ] "Mastering Linux Concepts" category shows relevant posts
- [ ] Site looks good on mobile
- [ ] You know how to publish new posts
- [ ] You've written at least 1 test post

## Celebrate! 🎉

Your blog is now live and ready to share with the world!

**Next Steps:**
- Keep writing great content
- Share your blog on social media
- Grow your audience
- Keep engaging with readers

---

**Questions?** Refer back to README.md and DEPLOYMENT.md for detailed help!
