# Colby Nieva — Personal Portfolio Website

## File structure

```
colbynieva-site/
├── index.html              ← homepage
├── writeups/
│   ├── index.html          ← list of all CTF writeups
│   └── challenge-template.html ← template — copy this for each new writeup
├── css/
│   ├── style.css           ← main site styling
│   └── writeup.css         ← writeup page styling
├── js/
│   └── main.js             ← all scripts
├── images/
│   └── colby.jpg           ← your profile photo
└── README.md               ← this file
```

## How to add a new CTF writeup

1. **Copy the template:** Duplicate `writeups/challenge-template.html` and rename it (e.g. `writeups/username-recon-101.html`). Use lowercase, hyphens for spaces.
2. **Edit the new file:**
   - Update the `<title>` tag at the top
   - Fill in the challenge name, difficulty, points, category, and description
   - Replace each section's content with your actual writeup
3. **Add a card to the homepage:** Open `index.html`, find the `<!-- CTF WRITEUPS -->` section, and add a new `<a class="ctf-card">` block pointing to your new file.
4. **Add a card to the writeups list:** Open `writeups/index.html` and add the same card there too.

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
