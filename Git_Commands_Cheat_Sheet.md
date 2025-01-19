
# Git Commands Cheat Sheet for Deploying Eleventy to GitHub Pages

## 1. Stage All Changes
```bash
git add .
```
Stages all modified, added, and deleted files for the next commit.

## 2. Commit the Changes
```bash
git commit -m "Add Eleventy setup and initial site content"
```
Saves your changes locally with a descriptive commit message.

## 3. Push to the Main Branch
```bash
git push origin main
```
Uploads your committed changes to the main branch on GitHub.

## 4. Deploy the Eleventy Site to `gh-pages`
```bash
npm run deploy
```
Builds the site (using Eleventy) and publishes the `_site` directory to the `gh-pages` branch.

---

## Optional Debugging

### Check the Current Branch
```bash
git branch
```
Displays the branch you are currently on.

### Check the Latest Commits
```bash
git log --oneline
```
Verifies the latest commits and ensures the correct files were pushed to `gh-pages`.
