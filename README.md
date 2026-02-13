# **AVIDFLICK** - Blog Website

A modern blog website built with Gridea, GitHub, and Netlify. Publish blog posts to GitHub automatically and see them live on your website instantly.

## 🚀 Quick Start

### Prerequisites
- Windows OS (or Mac/Linux)
- GitHub account (free)
- Domain: avidflick.in (already owned)
- Git installed on your computer

### Setup Steps

#### 1. Download & Install Gridea
1. Visit [Gridea Official Site](https://gridea.dev)
2. Download Windows version
3. Run the installer
4. Launch Gridea application

#### 2. Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New" to create a repository
3. Name it: `avidflick-blog`
4. Make it **Public**
5. Initialize with README (optional)
6. Click "Create repository"

#### 3. Connect Gridea to GitHub
1. Open Gridea
2. Go to **Settings** (gear icon)
3. Scroll to "GitHub"
4. Click "Authenticate with GitHub"
5. Authorize Gridea
6. Enter:
   - **GitHub Repository URL**: `https://github.com/YOUR_USERNAME/avidflick-blog`
   - Replace `YOUR_USERNAME` with your actual GitHub username
7. Click "Save"

#### 4. Choose a Theme
1. In Gridea, go to **Themes**
2. Browse available themes (or keep the default)
3. Download/Apply the theme you like
4. Most themes include slider/carousel for latest posts automatically

#### 5. Configure Site Settings
1. Click **Site Settings** in Gridea
2. Configure:
   - **Site Title**: AVIDFLICK
   - **Site Description**: Your tagline (e.g., "Insights on Linux, Technology & Life")
   - **Domain**: avidflick.in
   - **Posts Per Page**: 10
   - **Theme Font**: Your preference
   - **Theme Color**: Your preference
3. Click "Save"

#### 6. Create Navigation Menu
1. In Gridea **Settings**, find "Menu Configuration"
2. Add menu items:
   - Home (/)
   - Blog (/post/)
   - Mastering Linux Concepts (special category)
   - About (/about/)
   - Contact (/contact/)
3. Save settings

#### 7. Create Blog Posts
1. Click **"New Post"** button
2. Write your content in markdown or rich editor
3. Add title, tags (e.g., "Linux", "Tutorial")
4. Categorize under "Linux Concepts" if applicable
5. Click **"Publish"** → Gridea automatically pushes to GitHub

#### 8. Deploy to Netlify
1. Go to [Netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select "GitHub" as provider
4. Authorize Netlify with GitHub
5. Select repository: `avidflick-blog`
6. Configure build settings:
   - **Build command**: `npm run build` (or leave blank if Gridea auto-generates)
   - **Publish directory**: `public` (or `dist` - check Gridea output folder)
7. Click "Deploy site"
8. Wait ~2 minutes for deployment to complete

#### 9. Connect Custom Domain
1. In Netlify, go to **Domain settings**
2. Click "Add custom domain"
3. Enter: `avidflick.in`
4. Verify domain ownership
5. Update DNS at your domain registrar:
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Update DNS to point to Netlify nameservers
   - Takes 24-48 hours to fully propagate

#### 10. Test Your Site
1. Visit `http://avidflick.in` (or Netlify's temporary URL)
2. Verify:
   - ✅ "**AVIDFLICK**" appears as site title
   - ✅ Navigation menu shows all items
   - ✅ Latest posts appear in the slider
   - ✅ Can click through to read posts
   - ✅ "Mastering Linux Concepts" filters posts correctly
   - ✅ Mobile responsive

## 📝 Publishing Workflow

Every time you publish a post in Gridea:

```
You write post in Gridea 
          ↓
Click "Publish"
          ↓
Gridea pushes to GitHub automatically
          ↓
Netlify detects change
          ↓
Site rebuilds (~1 minute)
          ↓
Changes live on avidflick.in
```

## 🛠️ Troubleshooting

### Posts not appearing publicly?
- Check Gridea published status (should show checkmark)
- Verify GitHub repository is Public (not Private)
- Wait 2-3 minutes for Netlify to rebuild

### Custom domain not working?
- Check DNS propagation: [DNS Lookup Tool](https://mxtoolbox.com/dnsLookup.aspx)
- Wait 24-48 hours for DNS changes to propagate
- Temporarily use Netlify's auto-generated domain

### Slider not showing?
- Ensure theme has carousel capability
- Check theme documentation for configuration
- Some themes require specific post count to enable slider

## 📚 Project Structure

```
avidflick_website/
├── config/              # Configuration files
│   ├── gridea-setup.md # Gridea configuration guide
│   └── netlify.toml    # Netlify deployment config
├── posts/              # Blog posts (created by Gridea)
├── pages/              # Static pages (About, Contact)
├── assets/             # Images, logos, etc.
├── README.md          # This file
└── DEPLOYMENT.md      # Detailed deployment guide
```

## 🔐 Security

- Never commit `.env` files with API keys
- Keep GitHub token secure (only share with authorized services)
- Review Netlify permissions before authorizing
- Keep Gridea updated

## 📖 Useful Resources

- **Gridea Docs**: https://gridea.dev
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com
- **Markdown Guide**: https://markdownguide.org

## 💡 Next Steps After Setup

1. Write your first blog post
2. Customize theme colors and fonts
3. Add profile picture/avatar
4. Set up social media links
5. Create "About Me" page
6. Share your blog with others!

---

**Questions or issues?** Check the troubleshooting section above or visit Gridea's official documentation.
