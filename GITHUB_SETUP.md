# GitHub Repository Structure Guide

This guide shows you the exact structure your GitHub repository should have for AVIDFLICK to work with GitHub Pages.

## Why This Structure?

- **`/public/` folder** = GitHub Pages serves your website files from here
- **`/posts/` folder** = Markdown source files for documentation
- **Root files** = README, contributing guidelines, license

## Repository Setup

Your public GitHub repository should have this exact structure:

```
avidflick-blog/
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── public/              ← GitHub Pages serves FROM HERE!
│   ├── index.html
│   ├── blog.html
│   ├── css/
│   └── js/
└── posts/
    ├── TEMPLATE.md
    └── ... (markdown files)
```

## Creating Your Repository

### Step 1: Create on GitHub

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `avidflick-blog`
3. **Public:** ✅ Yes
4. **License:** Choose MIT
5. Click **Create repository**

### Step 2: Upload Files

Click **Add file** → **Create new file**

Type: `public/index.html` → Paste content → Commit

Repeat for all `/public/` files, then documentation files.

### Step 3: Enable GitHub Pages

1. **Settings** → **Pages**
2. **Branch:** main
3. **Folder:** `/public`
4. Save

Your site is live at `https://YOUR-USERNAME.github.io/avidflick-blog`

## Next: Connect Your Domain

See [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md)

## File Descriptions

### Root Level Files

#### README.md
Your repository homepage on GitHub. Should include:
- Project description
- Features
- Link to live site (avidflick.in)
- Contribution guidelines link

Example:
```markdown
# AVIDFLICK Blog

A no-code Linux learning platform powered by GitHub Pages.

✨ **Features:**
- Easy editing (GitHub web UI)
- Community contributions welcome
- Auto-publishing via GitHub Pages
- Dark/light mode
- Interactive Linux course

📝 **Want to write a post?** [See contributing guidelines](./CONTRIBUTING.md)

🌍 **Visit:** https://avidflick.in
```

#### CONTRIBUTING.md
Guidelines for contributors:
- How to submit posts
- Writing style guide
- Pull request process
- Code of conduct

#### LICENSE
Choose an open source license (e.g., MIT, CC0). See [choosealicense.com](https://choosealicense.com)

### /posts/ Directory

Store all blog posts as markdown files here. Naming convention:

```
topic-name.md          ← lowercase, hyphens, descriptive
```

Examples:
- `getting-started-linux.md`
- `docker-containers-guide.md`
- `vim-tips-and-tricks.md`
- `aws-ec2-basics.md`

Each file should follow the [blog post template](./posts/TEMPLATE.md).

### /pages/ Directory

Optional static pages:
- `about.md` - About the author/project
- `contact.md` - Contact information
- Other static content

### /config/ Directory

Configuration files:

#### netlify.toml
Netlify deployment settings:
```toml
[build]
  command = "# Static site - no build needed"
  publish = "public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Creating Your Repository

### Step 1: Create Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `avidflick-blog`
3. **Description:** "Linux learning platform with GitHub Pages"
4. **Public:** Yes (so everyone can see and contribute)
5. **Add .gitignore:** Choose "None"
6. **Add license:** Choose MIT or your preference
7. Click **Create repository**

### Step 2: Upload Website Files

#### Option A: Web UI (No Git Required) - EASIEST

1. Click **Add file** → **Create new file**
2. Type the full path including filename: `public/index.html`
3. GitHub will create the folders automatically
4. Paste your HTML content
5. Click **Commit changes**

**Repeat for all files in the `/public/` folder:**
- `public/blog.html`
- `public/index.html`
- `public/about.html`
- `public/contact.html`
- `public/linux-concepts.html`
- `public/css/style.css`
- `public/js/slider.js`
- `public/js/theme.js`
- `public/posts/getting-started-linux.html`
- (and other post HTML files)

**Then add documentation files:**
- `README.md`
- `CONTRIBUTING.md`
- `posts/TEMPLATE.md`
- `posts/getting-started-linux.md`
- (and other markdown files)

#### Option B: Git Command Line
Next Step: Enable GitHub Pages

Once your files are on GitHub:

1. Go to your repository
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** Select **Deploy from a branch**
   - **Branch:** Select **main**
   - **Folder:** Select **`/public`**
5. Click **Save**

**That's it!** Your site is now live at `https://YOUR-USERNAME.github.io/avidflick-blog`

See [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md) for connecting your custom domain `avidflick.in`
4. You should see README.md and CONTRIBUTING.md

## Link Structure for Posts

When you add "Edit on GitHub" buttons to blog posts, use this URL pattern:

```html
<!-- Example for docker-basics.md -->
<a href="https://github.com/YOUR-USERNAME/avidflick-blog/edit/main/posts/docker-basics.md">
  ✏️ Edit on GitHub
</a>
```

Replace:
- `YOUR-USERNAME` with your GitHub username
- `docker-basics.md` with the actual post filename
- `main` with your branch name (usually `main` or `master`)

## Netlify Integration

Once your GitHub repo is set up:

1. Go to [netlify.com](https://netlify.com)
2. Click **New site from Git**
3. Select GitHub and authorize
4. Choose your `avidflick-blog` repository
5. Netlify automatically deploys whenever you push to GitHub!

## Directory Tips

### Best Practices

✅ **Do:**
- Keep filenames lowercase
- Use hyphens instead of spaces
- Group related content together
- Include README in each major directory
- Version your config files

❌ **Don't:**
- Use special characters in filenames
- Mix file types in directories
- Leave orphaned files in root
- Delete posts (archive instead)
- Commit node_modules or build files

### Organization as You Grow

As you add more content, your structure might evolve:

```
posts/
├── linux/
│   ├── 01-getting-started.md
│   ├── 02-file-permissions.md
│   └── 03-shell-scripting.md
├── docker/
│   ├── 01-containers-basics.md
│   └── 02-docker-compose.md
└── git/
    ├── 01-getting-started.md
    └── 02-workflows.md
```

## Troubleshooting

### Posts Not Appearing?
- Check file is in `/posts/` directory
- Verify filename uses lowercase and hyphens
- Confirm file has `.md` extension
- Wait 30 seconds for Netlify to rebuild

Next: [Enable GitHub Pages](./GITHUB_PAGES_DEPLOYMENT.md)

### GitHub Edit Link 404?
- Confirm repository is public
- Check username is correct
- Verify branch name (main vs master)
- Check markdown filename matches exactly

### Want to Test Locally?

You can preview your markdown files using various tools:
- GitHub's built-in previewer
- VS Code with markdown preview
- [Dillinger](https://dillinger.io) - online markdown editor
- [Vercel](https://vercel.com) - for full site preview

---

**Your GitHub repository is the heart of AVIDFLICK!** Keep it organized and documented. 📚
