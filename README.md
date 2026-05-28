# Colby Nieva — Personal Portfolio Website

## File structure

```
colbynieva-site/
├── index.html       ← page structure (the skeleton)
├── css/
│   └── style.css    ← all styling (colors, layout, animations)
├── js/
│   └── main.js      ← all scripts (typing animation, particles, boot intro)
├── images/
│   └── colby.jpg    ← your profile photo
└── README.md        ← this file
```

## How to make changes

### Change your text content (name, bio, job titles, etc.)
Open `index.html` in any text editor. Search for the text you want to change and edit it. Save the file.

### Change colors, fonts, or layout
Open `css/style.css`. The main color variables are at the top:
```
--navy:    #0d1b2a    /* dark background */
--gold:    #b8975a    /* accent gold */
--cream:   #f5f0e8    /* light cream */
```
Change any hex code to change that color everywhere on the site.

### Change animations or scripts
Open `js/main.js`. Each section is labeled (TERMINAL BOOT INTRO, TYPING ANIMATION, PARTICLE BACKGROUND, etc.) so you can find what you want to edit.

### Change your photo
Replace `images/colby.jpg` with a new file. Keep the same filename (`colby.jpg`) so the HTML doesn't need updating. Or rename it and update the `src="images/colby.jpg"` line in `index.html`.

## How to test locally

Just double-click `index.html` to open it in your browser. All files will load automatically.

## How to deploy to Netlify

Since you now have multiple files, drag-and-drop deployment requires zipping the whole folder first:

1. **Zip the entire `colbynieva-site` folder** (right-click → Compress / Send to → Zipped folder)
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the .zip file onto the page
4. Done

OR (better long-term):
1. Push this folder to GitHub
2. Connect your Netlify site to the GitHub repo
3. Every time you push changes, Netlify auto-deploys

## Quick links

- Live site: colbynieva.com
- LinkedIn: https://www.linkedin.com/in/colby-nieva-3917b820a/
- GitHub: https://github.com/ShadowStrikers
