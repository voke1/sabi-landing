# Sabi Landing Page

Premium React landing page for Sabi, an AI WhatsApp assistant for SMBs.

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Local Preview

```bash
npm run dev -- --host 127.0.0.1 --port 5174
```

## Production

GitHub Pages publishes the prebuilt `gh-pages` branch. From a machine with SSH push access to `voke1/sabi-landing`, run `npm run publish:pages` to build `dist/` and push its contents to that branch. GitHub Pages then deploys the new branch commit. Pushing source changes to `main` alone does not publish them.

The Pages custom domain is `go2sabi.com`; `public/CNAME` and `public/app-ads.txt` are copied to the site root. The build also creates `refund-policy/index.html` so the policy page loads directly on GitHub Pages.

After a deployment, check the home page, `/refund-policy/`, and `/app-ads.txt`. The ads file must return plain text containing the AdMob publisher line, not the site's HTML page.
