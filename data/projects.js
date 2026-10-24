// ===== PROJETS ET LAB =====
// Pour ajouter une entrée : copie un bloc, change les valeurs, enregistre.
// type  : "work" (rendu / projet abouti) ou "lab" (expérience, outil, test)
// kind  : (lab seulement) "Outil", "Test de rendu", "Expérience"…
// tint  : 2 couleurs du faux visuel tant que "cover" est vide
// cover : image de la vignette, ex "assets/img/ending/cover.jpg"
// media : liste affichée dans la fiche. Types : "image", "video", "demo"
//         demo = dossier avec un index.html (WebGL, jeu web…), ex "assets/demos/mon-outil/index.html"
window.PROJECTS = [
  {
    id: "ending", type: "work", title: "Ending animé", subtitle: "Animation · 2 scènes de 5 s", year: "2026",
    tint: ["#1b0c24", "#ff4d6d"], cover: "",
    media: [ { type: "video", src: "" }, { type: "image", src: "" }, { type: "image", src: "" } ],
    why: "[Pourquoi ce projet existe : un projet collectif autour de l’univers de Shingeki no Kyojin, pour lequel tu as monté ces deux scènes.]",
    role: "[Mise en scène, animation, éclairage, rendu.]",
    tools: ["Blender"]
  },
  {
    id: "bureau", type: "work", title: "Le bureau", subtitle: "Environnement · ambiance SCP", year: "2026",
    tint: ["#071a1c", "#35e0d0"], cover: "",
    media: [ { type: "image", src: "" }, { type: "image", src: "" } ],
    why: "[Une scène qui raconte des recherches sombres sans montrer personne : tout passe par les objets et la lumière.]",
    role: "[Modélisation, éclairage, rendu.]",
    tools: ["Blender"]
  },
  {
    id: "projet-3", type: "work", title: "[Prochain projet]", subtitle: "[Catégorie]", year: "2026",
    tint: ["#1a1406", "#f5c542"], cover: "", media: [], why: "", role: "", tools: []
  },
  {
    id: "lab-outil", type: "lab", kind: "Outil", title: "[Nom de l’outil]", subtitle: "Script / add-on pour accélérer un rendu", year: "2026", status: "en cours",
    tint: ["#0d1224", "#6c8cff"], cover: "",
    media: [ { type: "demo", src: "" } ],
    why: "[Le problème que l’outil résout dans ton workflow.]", role: "", tools: ["Python", "Blender"]
  },
  {
    id: "lab-eclairage", type: "lab", kind: "Test de rendu", title: "[Tests d’éclairage]", subtitle: "Comparaison avant / après", year: "2026", status: "terminé",
    tint: ["#240d1b", "#ff8ac2"], cover: "", media: [ { type: "image", src: "" } ],
    why: "[Ce que tu as testé et ce que ça a changé dans tes rendus.]", role: "", tools: ["Blender"]
  },
  {
    id: "lab-experience", type: "lab", kind: "Expérience", title: "[Expérience]", subtitle: "[Une phrase]", year: "2026", status: "idée",
    tint: ["#0d2418", "#7dffb0"], cover: "", media: [], why: "", role: "", tools: []
  }
];
