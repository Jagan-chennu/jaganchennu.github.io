# Gridea Configuration Guide

## What is Gridea?

Gridea is a free, lightweight desktop application (Windows/Mac/Linux) that lets you manage your blog without touching code. It automatically publishes to GitHub, which triggers your website to update.

## Installation

1. Visit https://gridea.dev
2. Download the Windows version
3. Run `gridea-setup.exe`
4. Follow the installer prompts
5. Launch Gridea from Start menu or desktop

*No coding skills needed - it's a visual desktop app!*

## Initial Configuration

### Settings Overview

Open Gridea and go to **Settings** (⚙️ gear icon in top-right)

### 1. Site Settings Tab

```
Site Title:          AVIDFLICK
Site Description:    Your blog tagline here
Site Domain:         avidflick.in
Posts Per Page:      10
Pagination:          Enable
```

### 2. Theme Settings Tab

- **Available Themes**: Built-in themes include carousels for latest posts
- **Popular Themes**:
  - Bralog (dark, modern)
  - XLog (clean, minimal)
  - Pure (lightweight)
  - Notes (documentation-style)

**Slider Feature**: Most Gridea themes automatically show latest posts in a carousel on homepage. No extra configuration needed!

### 3. Menu Configuration Tab

**Add these menu items in order:**

| Label | Link | Order |
|-------|------|-------|
| Home | / | 1 |
| Blog | /post/ | 2 |
| Mastering Linux Concepts | /tag/linux/ | 3 |
| About | /about/ | 4 |
| Contact | /contact/ | 5 |

*Note: `/tag/linux/` shows posts tagged with "linux" - this is how categories work in Gridea*

### 4. GitHub Integration Tab

```
GitHub Username:      your-username
GitHub Token:         [generate from GitHub settings]
Repository:           avidflick-blog
Branch:               main
Domain:               avidflick.in
```

**To generate GitHub token:**
1. Go to github.com → Settings → Developer settings → Personal access tokens
2. Click "Generate new token"
3. Select scopes: `repo` (full control of repositories)
4. Copy the token and paste into Gridea
5. Click "Save & Test Connection"

### 5. Author Info Tab

```
Author Name:    Your Name
Author Email:   your-email@example.com
Avatar:         (upload your photo)
Bio:            Short bio about you
Social Links:   Twitter, LinkedIn, GitHub URLs (optional)
```

## Publishing Your First Post

1. Click **"New Post"** (+ icon at top)
2. Enter:
   - **Title**: "My First Post"
   - **Slug**: `my-first-post` (auto-generated from title)
   - **Content**: Write in the editor (supports Markdown)
   - **Tags**: Add tags like "blog", "welcome"
   - **Featured Image**: (optional) Upload a cover image
3. Click **"Save"**
4. Click **"Publish"** → Gridea automatically pushes to GitHub!

## Creating Static Pages (About, Contact)

1. Click **"New Page"** (different from "New Post")
2. Enter:
   - **Title**: "About Me"
   - **Slug**: `about`
   - **Content**: Write your about page
3. Click **"Save"** then **"Publish"**

*Pages appear as separate routes: /about/, /contact/, etc.*

## Blog Categories (Mastering Linux Concepts)

Instead of creating a separate page, use **Tags** to organize content:

1. When creating a post, add tag: `Linux` or `Linux Concepts`
2. Gridea automatically creates: `/tag/linux/` (links all posts with that tag)
3. Your menu item "Mastering Linux Concepts" points to `/tag/linux/`
4. When you publish posts with "Linux" tag, they appear in this collection

## Key Features Overview

| Feature | How to Access |
|---------|--------------|
| New Post | Click "+" icon or "New Post" button |
| New Page | Click "📄" icon or "New Page" button |
| Edit Post | Click on post in sidebar, then "Edit" |
| Preview | Click "👁️" (eye icon) to preview before publishing |
| Publish | Click "✓" check or "Publish" button |
| GitHub Sync | Automatic - happens when you publish |
| Site Stats | Bottom of left sidebar |

## Troubleshooting

### GitHub Authentication Failed?
- Verify token hasn't expired
- Check repository name is correct
- Ensure repository is **Public** (not Private)
- Try generating a new token

### Posts not publishing?
- Check GitHub token is valid
- Verify internet connection
- Look for error messages at bottom of Gridea window
- Try publishing again

### How do I undo a publish?
- Visit your GitHub repository online
- Manually delete the post file
- Or edit post and republish with different content

## Tips & Tricks

✅ **Do:**
- Use consistent tag names (e.g., "Linux Concepts" not "linux-concepts" or "Linux")
- Add featured images to make posts pop
- Preview before publishing
- Write posts offline, then publish when ready

❌ **Don't:**
- Directly edit files in GitHub (use Gridea instead)
- Use special characters in slugs (keep them simple: `my-post-title`)
- Leave the "Publish" dialog open while working

## Next Steps

1. ✅ Install Gridea and complete initial setup
2. ✅ Write 2-3 sample blog posts
3. ✅ Create About page
4. ✅ Create Contact page (Gridea may have built-in contact form theme)
5. ✅ Move on to Netlify deployment
