# simple-website

A tiny static website for the `simple-website` branch.

Files:
- `index.html` — main page
- `styles.css` — minimal styles
- `script.js` — tiny interactivity

How to add this branch locally and push it:

```bash
# If the repo is already on your machine:
git clone https://github.com/td00k/my-quick-webpage.git
cd my-quick-webpage
git checkout -b simple-website
# create the files with the contents from this message
git add index.html styles.css script.js README.md
git commit -m "Add simple website"
git push -u origin simple-website
```

If the GitHub repo is empty (no default branch yet), do this locally:

```bash
mkdir my-quick-webpage
cd my-quick-webpage
git init
git remote add origin https://github.com/td00k/my-quick-webpage.git
git checkout -b simple-website
# create the files with the contents from this message
git add index.html styles.css script.js README.md
git commit -m "Add simple website"
git push -u origin simple-website
```

Enable GitHub Pages (optional):
1. On GitHub, open: https://github.com/td00k/my-quick-webpage
2. Settings → Pages → Source: choose branch `simple-website` and folder `/`, save.
3. Wait a minute for the published site URL.
