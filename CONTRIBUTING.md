# Contributing to AVIDFLICK Blog

Thank you for your interest in contributing to AVIDFLICK! Whether you're fixing a typo, improving existing content, or adding a new blog post, your contributions are welcome.

## How to Contribute

### Option 1: Edit on GitHub Web Interface (Easiest - No Git Required)

1. **Find the file you want to edit** on GitHub
2. **Click the pencil icon** (Edit) in the top right
3. **Make your changes** in the editor
4. **Write a commit message** describing your changes
5. **Click "Propose changes"**
6. **Submit a Pull Request** with a description of your changes

### Option 2: Fork and Submit a Pull Request

If you're familiar with Git:

```bash
# 1. Fork the repository (on GitHub website)
# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/avidflick-blog.git
cd avidflick-blog

# 3. Create a new branch
git checkout -b your-feature-name

# 4. Make your changes
# 5. Commit your changes
git add .
git commit -m "Description of changes"

# 6. Push to your fork
git push origin your-feature-name

# 7. Open a Pull Request on the original repository
```

## Types of Contributions Welcome

### Blog Posts
- New Linux tutorials or guides
- Technology tips and tricks
- Case studies or project walkthroughs
- Reviews or comparisons

**How to add a blog post:**
1. Create a new `.md` file in the `/posts/` directory
2. Use the [post template](TEMPLATE.md)
3. Follow the naming convention: `topic-name.md`
4. Submit a Pull Request

### Bug Fixes & Improvements
- Typos and grammar fixes
- Broken links
- Design improvements
- Performance enhancements

### Documentation
- Improving existing guides
- Adding missing sections
- Clarifying unclear content
- Adding new tutorials

## Content Guidelines

### Writing Style
- Write clearly and concisely
- Avoid overly technical jargon (explain when necessary)
- Use second person ("You'll learn...", "You should...")
- Include practical examples
- Proofread before submitting

### Technical Content
- Test code examples if possible
- Include output/results of commands
- Use markdown code fencing with language tags
- Add comments in code for clarity
- Provide context for why something works

### Images and Media
- Use descriptive alt text
- Keep file sizes reasonable
- Place images in the `/assets/` directory
- Reference with relative paths

## Pull Request Process

1. **Create a descriptive PR title**
   - ✅ "Add Docker tutorial for beginners"
   - ❌ "Update docs"

2. **Describe your changes**
   - What did you add/fix/improve?
   - Why is this change important?
   - Are there any related issues?

3. **Wait for review**
   - A maintainer will review your PR
   - You may be asked to make changes
   - Once approved, your changes will be merged!

4. **Your post goes live!**
   - Changes merger → Netlify auto-builds → Site updates

## Code of Conduct

- Be respectful and constructive
- Avoid spam or promotional content
- No harassment or discrimination
- Report issues through appropriate channels
- Assume good intent

## Questions?

- Open an issue on GitHub with your question
- Check existing issues for similar topics
- Read the README.md for setup instructions

## Attribution

Your name and contributions will be visible in the GitHub history. Thank you for making AVIDFLICK better! 🙏

---

**Ready to contribute?** Pick an issue or create a new blog post using the [template](TEMPLATE.md)!
