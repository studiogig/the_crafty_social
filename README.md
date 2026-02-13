# The Crafty Club Social

A free monthly crafting meetup in Bath for women who love embroidery, crochet and knitting.

**Cocktails, crafts & good company.**

## Site Structure

```
index.html      - Landing page
about.html      - About us & FAQ
events.html     - Events calendar (Google Calendar integration)
signup.html     - Mailing list signup & contact form
blog/           - Blog posts
css/style.css   - All styles
js/main.js      - Shared JavaScript
```

## Hosting

Static site hosted on **Cloudflare Pages**.

### Deploy to Cloudflare Pages

1. Push to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a new project → Connect to this GitHub repo
4. Build settings:
   - **Build command:** (leave empty — no build step needed)
   - **Build output directory:** `/` (root)
5. Deploy!

### Custom Domain

Once deployed, add your custom domain in Cloudflare Pages settings.

## TODO

- [ ] Connect Google Calendar (see events.html for instructions)
- [ ] Set up Instagram account and update links
- [ ] Hook up mailing list to email service (Mailchimp / ConvertKit / Cloudflare Worker)
- [ ] Hook up contact form to email delivery
- [ ] Add real photos to gallery
- [ ] Write first blog posts
- [ ] Add favicon
