# Blog Post Template

Use this template when creating new blog posts in the `/posts/` directory of your GitHub repository.

## File Naming
- Use lowercase with hyphens: `my-first-post.md`
- Be descriptive: `docker-containers-guide.md`

## Template

```markdown
# Your Post Title Here

Date: February 15, 2026  
Tags: tag1, tag2, tag3  
Category: Linux Concepts

Your introductory paragraph goes here. Explain what the post is about in 2-3 sentences. This should capture the reader's attention.

## Why This Topic Matters

Explain the importance and relevance of what you're teaching. Who should read this? What problem does it solve?

## Section 1: Core Concept

Explain the first main idea. Use code blocks for examples:

\`\`\`bash
$ command --example
output goes here
\`\`\`

## Section 2: How It Works

Break down the concept into digestible pieces. Use numbered lists when showing steps:

1. First step here
2. Second step here
3. Third step here

## Practical Example

Show a real-world use case:

\`\`\`bash
$ actual-command with-arguments
\`\`\`

## Common Mistakes

- **Mistake 1:** Explain what users often get wrong
- **Mistake 2:** Another common issue
- **Mistake 3:** Third common problem

## Best Practices

- Keep lines reasonably short for readability
- Use clear headings (##, ###)
- Include code examples for technical posts
- Add a conclusion with key takeaways

## Key Takeaways

- Point 1
- Point 2  
- Point 3

---

**Happy learning!** 🐧
```

## Guidelines

### Title
- Clear and descriptive
- Includes the main topic
- Should answer "what is this post about?"

### Metadata
- **Date:** Use YYYY-MM-DD format (e.g., 2026-02-15)
- **Tags:** Comma-separated, lowercase
- **Category:** Either "Linux Concepts" or other main categories

### Content Structure

1. **Introduction** (1-2 paragraphs): Hook the reader
2. **Why It Matters** (~1 paragraph): Establish relevance
3. **Main Content** (multiple sections): Break into digestible chunks
4. **Practical Example**: Show real-world application
5. **Common Mistakes**: Prevent frustration
6. **Best Practices**: Provide professional tips
7. **Conclusion**: Summarize key takeaways

### Writing Tips

- Write in second person ("You should...", "You'll learn...")
- Use clear, simple language
- Avoid jargon or explain it when necessary
- Include code examples (use markdown code blocks)
- Use lists to break up text
- Add emojis sparingly at the end for personality

### Code Examples

Use proper markdown code fencing:

\`\`\`bash
Your code here
\`\`\`

\`\`\`javascript
var code = "here";
\`\`\`

## Publishing Your Post

1. Edit or create a `.md` file in the `/posts/` directory
2. Write your content using this template
3. Commit your changes to GitHub
4. Your post will automatically appear on the website!

## Example Post Structure

```
# Docker: Essential Commands for Containers

Date: 2026-02-10  
Tags: docker, containers, devops  
Category: Linux Concepts

Docker has revolutionized how we develop and deploy applications...

## Why Docker Matters

In traditional development... [explain the problem]

## Core Concepts

### Images and Containers
Images are templates... containers are instances...

### Docker Registry
Where images are stored...

## Essential Commands

\`\`\`bash
$ docker ps                 # List running containers
$ docker images             # List available images
$ docker run -d nginx       # Start a container
\`\`\`

## Your First Container

Let's run our first container...

\`\`\`bash
$ docker run --name myapp -p 8080:80 nginx
\`\`\`

## Common Issues

- **Port already in use:** Solution is...
- **Image not found:** This means...

## Key Takeaways

- Docker simplifies deployment
- Images are reusable templates
- Containers are isolated environments

---

**Start containerizing your apps!** 🐳
```

---

**Need help?** Create an issue on GitHub or submit a pull request with your improvements!
