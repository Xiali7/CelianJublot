# Portfolio

Ouvre `index.html` dans ton navigateur : aucun outil à installer.

## Où modifier quoi
- `data/site.js` : ton nom, texte d'accroche, à propos, contact, liens, vidéo d'en-tête.
- `data/projects.js` : tous les projets et le Lab. Copie un bloc pour en ajouter un.
- `css/style.css` : couleurs (variables en haut du fichier) et mise en page.
- `js/main.js` : logique du site (à toucher rarement).

## Où ranger les fichiers
- `assets/img/<projet>/` : images (cover.jpg, 01.jpg, ...)
- `assets/video/` : vidéos .mp4 (H.264 conseillé)
- `assets/demos/<nom>/index.html` : démos interactives (WebGL, jeu web, outil...). Dans projects.js : `{ type: "demo", src: "assets/demos/<nom>/index.html" }`

## Mettre en ligne
GitHub Pages : envoie le dossier dans un dépôt, active Pages dans les réglages.
