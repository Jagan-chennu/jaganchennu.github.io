# AVIDFLICK: Quick Start Guide (GitHub-Only Workflow)

This is the simplified setup guide for AVIDFLICK. **No Gridea. No Netlify. Just GitHub!**

## What You'll Have

- ✅ Public blog at **avidflick.in** (your custom domain)
- ✅ All posts in GitHub (public, editable by anyone)
- ✅ Auto-publishing (commit → GitHub Pages deploys instantly)
- ✅ Community contributions via GitHub PRs
- ✅ Zero hosting costs (GitHub Pages is free)
- ✅ Portfolio-friendly (GitHub shows your work)

## 3-Minute Setup

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `avidflick-blog`
3. **Description:** "Linux learning platform with auto-publishing"
4. **Make it Public** ✅
5. **Create repository**

### Step 2: Upload Files to GitHub

Upload your website files:
- **All files in `/public/` folder** (HTML, CSS, JS)
- **`posts/` folder** with your markdown blog posts
- **`README.md`**, **`CONTRIBUTING.md`**, etc.

Use GitHub's web editor (no command line):

1. Click **Add file** → **Create new file**
2. Type path: `README.md` (paste content)
3. Click **Commit changes**

Repeat for all files and folders.

**⏱️ Time:** 5-10 minutes

### Step 3: Enable GitHub Pages

1. In your repository, click **Settings** (right side)
2. Scroll to **Pages** (left sidebar)
3. Under "Build and deployment":
   - **Source:** Select **Deploy from a branch**
   - **Branch:** Select **main** folder: **`/public`**
4. Click **Save**

**⏱️ Time:** 1 minute

**Result:** Your site is now live at `https://USERNAME.github.io/avidflick-blog`

### Step 4: Connect Your Domain

1. In **Repository Settings** → **Pages**
2. Under "Custom domain", enter: `avidflick.in`
3. Click **Save**
4. GitHub shows DNS instructions. Update your registrar:
   - Point `avidflick.in` to GitHub's nameservers
   - Or configure CNAME record (GitHub will show exact values)
5. Wait 24-48 hours for DNS to propagate

**⏱️ Time:** 2 minutes (+ 24-48 hours for DNS)

## Your New Workflow

### Create a New Blog Post

1. Go to your GitHub repo
2. Click **Add file** → **Create new file**
3. Type: `posts/my-post-title.md`
4. Paste your markdown content (use [template](./posts/TEMPLATE.md))
5. Click **Commit changes**
6. **Boom!** 💥 GitHub Pages auto-deploys in ~30-60 seconds

### Edit an Existing Post

1. Find the file on GitHub
2. Click the **pencil icon** (Edit)
3. Make changes
4. Click **Commit changes**
5. Site updates automatically in ~30-60 seconds!

### Accept Community Contributions

1. Someone on GitHub **forks** your repo
2. They **create a branch** and **edit files**
3. They **submit a pull request**
4. You **review and merge**
5. Site updates automatically in ~30-60 seconds!

## File Templates

### README.md Template

```markdown
# AVIDFLICK Blog

A no-code Linux learning platform. Every post is published via GitHub.

## 📚 Features

- Easy editing (GitHub web UI - no developer needed)
- Community contributions welcome
- Auto-publishing to avidflick.in
- Dark/light mode
- Interactive Linux course
- Auto-rotating blog slider

## ✍️ Write Your Post

1. Click **Add file** → **Create new file**
2. Enter: `posts/your-post-title.md`
3. Use our [post template](./posts/TEMPLATE.md)
4. Commit and watch it go live!

## 🤝 Contributing

Want to add a tutorial? Fix a typo? [See contributing guidelines](./CONTRIBUTING.md)

---

Built with ❤️ | [Live Site](https://avidflick.in)
```

### CONTRIBUTING.md Template

```markdown
# Contributing to AVIDFLICK

Thanks for interest in contributing! Here's how:

## Add a Blog Post (Easiest)

1. Go to [`/posts`](/posts) folder
2. Click **Create new file**
3. Name it: `topic-name.md`
4. Use the [post template](./posts/TEMPLATE.md)
5. Click **Commit changes**
6. Create a pull request
7. Wait for approval and merge
8. Your post goes live! 🎉

## Fix Typos or Improve Content

1. Find the file
2. Click the **pencil icon**
3. Make edits
4. Click **Commit changes**
5. Your fixes are live in ~30 seconds!

## Writing Tips

- Use clear, simple language
- Include code examples where helpful
- Test commands if possible
- Add section headers (##, ###)
- Include practical examples

---

Happy contributing! 🚀
```

### posts/TEMPLATE.md

```markdown
# Your Post Title

**Date:** 2026-02-15  
**Tags:** linux, tutorial, commands  
**Category:** Linux Concepts

Write 1-2 sentences describing what this post teaches.

## Why This Matters

Explain the importance in 1 paragraph.

## Main Section 1

Content goes here. Include examples:

\`\`\`bash
$ command --example
output here
\`\`\`

## Main Section 2

More content with headings as needed.

### Subsection

Details here.

## Key Takeaways

- Point 1
- Point 2
- Point 3

---

**Happy learning!** 🐧
```

## Why GitHub Pages?

| Feature | Netlify | GitHub Pages |
|---------|---------|--------------|
| Setup time | 5 minutes | 2 minutes |
| Extra account needed | ✅ Yes | ❌ No |
| Website builder dashboard | ✅ Yes | ❌ No |
| Deployment hooks | ✅ Complex | ✅ Automatic |
| Cost | 💰 Free | 💰 Free |
| Community contributions | ✅ Yes | ✅ Yes |
| Custom domain | ✅ Yes | ✅ Yes |
| **Simplicity** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

## Troubleshooting

### My post didn't appear!
-60 seconds for GitHub Pages to rebuild
- Check file is in `/posts/` folder  
- Verify filename has `.md` extension
- Check GitHub Pages status in **Settings** → **Pages** (green checkmark shows success)

### Where's my GitHub contribution button?

The "✏️ Edit on GitHub" button appears on all blog posts. It links readers directly to edit that post on GitHub.

### How do I revert a post?

GitHub has full version history:
1. Click on the file
2. Click **History**
3. Select previous version
4. Click **Restore** (creates a new commit)

### Can I preview changes before publishing?

Yes, use GitHub's live preview:
1. Click on `.md` file
2. Click **Preview** tab  
2. Click **Preview** tab
3. See how it will look

## Next Steps

1. ✅ Upload website files from `/public/` folder
3. ✅ Enable GitHub Pages (takes 1 minute)
4. ✅ Connect domain avidflick.in
5. ✅ Write your first blog post
6. ✅ Share with others (they can contribute!)

## Resources

- [GitHub Pages Docs](https://pages.github.com/)
- [GitHub Markdown Guide](https://guides.github.com/features/mastering-markdowngithub.com/features/mastering-markdown/)
- [Netlify Docs](https://docs.netlify.com/)
- [Post Template](./posts/TEMPLATE.md)
- [Contributing Guidelines](./CONTRIBUTING.md)

---

**That's it!** You're ready to publish. Start with your first blog post and watch the magic happen. 🚀
