# Breath of the Wild Object Map (PWA)

An interactive, high-performance object and landmark map for *The Legend of Zelda: Breath of the Wild* with customizable markers, category filtering, search, clustering, and full Progressive Web App (PWA) offline support.

---

## 🚀 Deploying to GitHub & GitHub Pages

This app is designed as a standalone static web application that can be hosted directly on **GitHub Pages** for free with automated builds.

### Method 1: Export Directly from AI Studio (Recommended)

1. In the upper-right corner of Google AI Studio, click the **Settings / Menu** icon (or three dots `...`).
2. Select **Export to GitHub** (or **Download ZIP**).
3. Connect your GitHub account and choose a new repository name (e.g. `botw-object-map`).
4. Once exported, proceed to [Enabling GitHub Pages](#enabling-github-pages) below.

---

### Method 2: Push via Command Line (Git)

If you downloaded the code or cloned the project locally:

```bash
# 1. Initialize git repository
git init

# 2. Stage and commit all files
git add .
git commit -m "feat: Breath of the Wild Object Map PWA"

# 3. Rename branch to main
git branch -M main

# 4. Add your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

# 5. Push to GitHub
git push -u origin main
```

---

### ⚙️ Enabling GitHub Pages

Once your repository is on GitHub:

1. Open your repository on GitHub (`https://github.com/YOUR_USERNAME/YOUR_REPOSITORY`).
2. Click on **Settings** (tab on the top right).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (the included `.github/workflows/deploy.yml` will automatically build and publish).
   - *(Alternative)*: If you prefer standard branch deployment, set **Source** to `Deploy from a branch`, choose branch `main`, folder `/ (root)`, and click **Save**.
5. Your live app will be accessible at:
   ```text
   https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
   ```

---

## 📱 Progressive Web App (PWA) Installation

This map includes a full **Web App Manifest (`manifest.json`)** and **Service Worker (`sw.js`)** providing offline caching and home screen installability.

### On Android (Chrome / Brave / Edge)
1. Visit the deployed website URL in your browser.
2. Tap the **"Install App"** button inside the app header or settings menu (or tap the browser's 3-dot menu).
3. Select **"Install"** or **"Add to Home Screen"**.
4. The app will install with its Sheikah Eye icon and launch in full-screen standalone mode.

### On iOS (iPhone / iPad - Safari)
1. Open the website in **Safari**.
2. Tap the **Share** button (the square with an arrow pointing up at the bottom).
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **Add** in the top right corner.

### On Desktop (Chrome / Edge / Brave)
1. Look for the **Install** icon in the browser address bar (top right).
2. Or click the in-app **"Install App"** button.
3. The map runs in a dedicated window without browser chrome.

---

## 🛠️ Local Development

To run the app locally with Node.js:

```bash
# Install dependencies
npm install

# Start local server
npm run dev
# Open http://localhost:3000 in your browser
```
