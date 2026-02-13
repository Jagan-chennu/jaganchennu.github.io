# **AVIDFLICK** - Blog Website

A modern, beautiful blog website built with **GitHub + Netlify**. Write blog posts directly in GitHub, commit them, and see them live on your website automatically. **No desktop apps needed!**

## 🎯 What You Get

✅ Beautiful modern website at avidflick.in  
✅ Blog posts with dark/light mode toggle  
✅ "Mastering Linux Concepts" course page with interactive navigation  
✅ Users can contribute via GitHub (click "Edit on GitHub")  
✅ Automatic deployment (push to GitHub → website updates)  
✅ Fully responsive (mobile, tablet, desktop)  

## 🚀 Complete Setup (5 Minutes)

### Prerequisites
- GitHub account (free)
- Domain: avidflick.in (already owned)
- Internet connection

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New" to create a repository
3. Name it: `avidflick-blog`
4. Make it **Public** (so users can see and contribute to your content)
5. Click "Create repository"

### Step 2: Upload Website Files to GitHub
1. In your new repo, click "Add file" → "Upload files"
2. Upload these folders and files:
   - `public/` (all HTML pages)
   - `config/` (configuration files)
   - Keep initial README.md
3. Commit with message: "Initial commit: add website files"

### Step 3: Create Blog Post Files
1. Navigate to your repo
2. Click "Create new file"
3. Path: `posts/getting-started-linux.md`
4. Paste sample blog post content (see "Writing Blog Posts" below)
5. Commit to main branch

### Step 4: Deploy with Netlify
1. Go to [Netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select "GitHub" and authorize Netlify
4. Choose your `avidflick-blog` repository
5. Configure:
   - **Build command**: (leave empty)
   - **Publish directory**: `public`
6. Click "Deploy site"
7. Netlify gives you a temporary URL (like `avidflick-123.netlify.app`)
8. Test it by clicking the URL

### Step 5: Connect Your Custom Domain
1. In Netlify dashboard, go to **Domain settings**
2. Click "Add custom domain"
3. Enter: `avidflick.in`
4. Netlify shows you 4 nameservers to configure
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Update nameservers to Netlify's
7. **Wait 24-48 hours** for DNS to propagate
8. Visit `avidflick.in` - your site is live! 🎉

---

## 📝 Publishing Workflow

This is the beauty of this setup - it's **super simple**:

```
Edit markdown file in GitHub web UI
        ↓
Commit changes
        ↓
Netlify auto-detects (within 30 seconds)
        ↓
Website auto-builds and deploys
        ↓
Post is LIVE on avidflick.in!
```

No apps, no command line needed!

---

## ✍️ How to Write & Publish Blog Posts

### Option A: Edit in GitHub Web UI (Easiest - No Coding!)

1. Go to `github.com/yourname/avidflick-blog`
2. Navigate to `posts/` folder
3. Click "Add file" → "Create new file"
4. Name the file: `my-post-title.md`
5. Paste markdown content (example below)
6. Click "Commit changes"
7. **Done!** Website updates automatically in ~30 seconds

### Option B: Use Git (If You Know Command Line)

```bash
# Clone your repo locally
git clone https://github.com/yourname/avidflick-blog.git
cd avidflick-blog

# Create new post
cat > posts/my-post.md << 'EOF'
# My Amazing Post Title

Date: February 13, 2026  
Tags: linux, tutorial

Your markdown content here...

Write anything in markdown format.

## Subheading
More content...
EOF

# Push to GitHub
git add posts/my-post.md
git commit -m "Add post: My Amazing Post"
git push origin main
```

---

## 📄 Blog Post Format

Create markdown files in `posts/` folder with this format:

```markdown
# Your Post Title

Date: February 13, 2026  
Tags: linux, docker, tutorial  
Category: Linux Concepts

Your article content starts here. Write in markdown - it's super simple!

## Subheading

You can use:
- Bullet points
- **Bold text**
- *Italic text*
- [Links](https://example.com)

### Code blocks

\`\`\`bash
# Bash code
ls -la /home
\`\`\`

\`\`\`python
# Python code
print("Hello World")
\`\`\`

## More sections

Write as many sections as you want. The format is just markdown - simple!
```

---

## 🤝 Enable User Contributions

Add this to your blog post pages to let readers contribute:

```html
<a href="https://github.com/yourname/avidflick-blog/edit/main/posts/my-post.md" 
   class="edit-button">✏️ Edit this page on GitHub</a>
```

Users can then:
1. Click the button
2. GitHub opens the markdown editor in their browser
3. They make changes
4. Click "Propose changes"
5. GitHub creates a pull request
6. You review and merge!

This is **exactly** like Helm - users contribute, improve content, learn GitHub, and help you write!

---

## 📁 Repository Structure

Organize your repo like this:

```
avidflick-blog/
├── README.md                    (Main description)
├── public/                      (Website files)
│   ├── index.html              (Homepage)
│   ├── blog.html               (Blog listing)
│   ├── linux-concepts.html     (Linux Concepts course)
│   ├── about.html              (About page)
│   ├── contact.html            (Contact page)
│   ├── css/
│   │   └── style.css           (All styles)
│   ├── js/
│   │   ├── slider.js           (Image carousel)
│   │   └── theme.js            (Dark/Light mode)
│   └── posts/                  (Individual blog posts HTML)
│       ├── getting-started-linux.html
│       ├── docker-basics.html
│       └── ...
├── posts/                      (Markdown source files)
│   ├── getting-started-linux.md
│   ├── docker-basics.md
│   └── ...
└── config/                     (Configuration)
    ├── netlify.toml
    └── gridea-setup.md
```

---

## 🌙 Features of Your Website

- **Dark/Light Mode Toggle** (☀️/🌙 button in header)
- **Auto-rotating Slider** on homepage with latest posts
- **Linux Concepts Course Page**:
  - Interactive left sidebar with lesson index
  - Click lesson → content appears
  - Progress tracker
- **Responsive Design** (works on phone, tablet, desktop)
- **Full-width Content** (no centered boxes with gaps)

---

## 🚀 Advantages of This Approach

✅ **No Gridea needed** - Just GitHub!  
✅ **Super simple workflow** - Edit → Commit → Done  
✅ **GitHub IS your portfolio** - All content visible in repo  
✅ **Enable community contributions** - Users can improve your content  
✅ **Version history** - Every change tracked on GitHub  
✅ **Free hosting** - Netlify free tier is generous  
✅ **Open source style** - Perfect for tech professionals  
✅ **Learn by example** - Users see your actual content/structure  

---

## 🔧 Troubleshooting

### Website not updating after I committed?
- Wait 30 seconds - Netlify is building
- Check Netlify dashboard → "Deploys" tab
- If still failed, check the build log for errors

### Domain not working after 24 hours?
- Go to https://mxtoolbox.com/dnsLookup.aspx
- Enter: `avidflick.in`
- Check if nameservers point to Netlify
- If not, verify you updated the right nameservers at your registrar

### How do I edit existing posts?
- Go to GitHub → Navigate to the post markdown file
- Click the pencil icon (✏️)
- Make changes
- Commit
- Website updates automatically!

---

## 📚 Example Markdown Blog Post

Create a file `posts/example-post.md`:

```markdown
# Getting Started with Docker

Date: February 10, 2026  
Tags: docker, containers, tutorial  
Category: Tools

Docker is a containerization platform that makes deploying applications super easy.

## What is Docker?

Docker packages your application with all its dependencies...

## Key Concepts

### Images
An image is a template...

### Containers
A container is a running instance...

## Getting Started

\`\`\`bash
# Install Docker
sudo apt-get install docker.io

# Run your first container
docker run hello-world

# Output should show:
# Hello from Docker!
\`\`\`

## Best Practices

1. Keep images small
2. Use official base images
3. Document your images

---

Hope this helps!
```

---

## 🎉 You're Ready!

That's it! Your setup is complete. Now you have:

✅ Beautiful website at avidflick.in  
✅ GitHub portfolio showing all your content  
✅ Simple workflow (edit in GitHub → auto-deploy)  
✅ Users can contribute via GitHub  
✅ Version history and collaboration features  

**Happy blogging! 🚀**
