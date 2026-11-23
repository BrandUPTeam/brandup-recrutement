/*
  ============================================================
  RÉGLAGES DU SITE
  Remplace le texte entre guillemets, sans toucher au reste.
  ============================================================
*/
window.BRANDUP_CONFIG = {

  // ---------- ACCÈS AU SITE ----------
  // true  = site verrouillé : les visiteurs voient « Coming soon » et doivent taper le code.
  // false = site ouvert à tous (à mettre le jour du lancement).
  siteVerrouille: false,
  // Code pour entrer pendant la construction. Lien direct sans taper le code :
  // https://ton-site/?code=LE_CODE
  codeAcces: "brandup2026",

  // ---------- FORMULAIRES TALLY ----------
  // Dans Tally : Share → le lien ressemble à https://tally.so/r/wA1bCd → l'ID est wA1bCd
  tallyContactId: "2jjAgj",  // formulaire « Contact » (page 1), version anglaise
  tallyCandidatureId: "4aaKeb", // questionnaire (page 3), version anglaise
  // Facultatif : versions françaises. Si vides, la version anglaise est utilisée.
  tallyContactIdFr: "RWWPxP",
  tallyCandidatureIdFr: "jeePZ9",

  // ---------- VIDÉO ----------
  // Fichier .mp4 du site (dossier assets), lien YouTube ou Vimeo.
  // Chaque langue a sa propre vidéo ; vide = « Vidéo bientôt disponible ».
  videoUrl: "assets/video-joanna.mp4",
  videoPoster: "assets/video-poster.jpg",
  videoUrlFr: "assets/video-joanna-fr.mp4?v=4", // vidéo de la page française (sous-titres FR)
  videoPosterFr: "assets/video-poster-fr.jpg?v=4",

  // ---------- PAGE « + MORE DETAILS » ----------
  // Lien public de la page Notion (Notion → Share → Publish).
  detailsUrl: "https://app.notion.com/p/Freelance-Brand-Designer-Join-the-Brand-UP-creative-network-402c91a927138175b8c5d042155f2ca9",
  detailsUrlFr: "https://app.notion.com/p/Brand-Designer-freelance-Rejoins-le-r-seau-cr-atif-Brand-UP-406c91a92713810da875c055b4ac5663",          // facultatif : version française

  // ---------- AUTRES MÉTIERS (pages dans un sous-dossier, ex. /marketing/) ----------
  // Chaque métier a son questionnaire (page 3), sa vidéo et ses pages « + de détails ».
  // Le formulaire de la page 1 est commun à tous les métiers (le métier est envoyé avec).
  // Vidéo vide = « Vidéo bientôt disponible ».
  metiers: {
    marketing: {
      siteVerrouille: true,  // false = tunnel marketing public
      tallyContactId: "EqlY0B",
      tallyContactIdFr: "2jA5rD",
      tallyCandidatureId: "peoMpJ",
      tallyCandidatureIdFr: "laO5kk",
      videoUrl: "assets/video-marketing.mp4",
      videoPoster: "assets/video-marketing-poster.jpg",
      videoUrlFr: "assets/video-marketing-fr.mp4",
      videoPosterFr: "assets/video-marketing-poster-fr.jpg",
      detailsUrl: "https://app.notion.com/p/41cc91a927138128a9a6cbd0ce5246af",
      detailsUrlFr: "https://app.notion.com/p/41cc91a92713811eb28cef3344e9e86a"
    },
    webdev: {
      siteVerrouille: true,  // false = tunnel web dev public
      tallyContactId: "aO2v6E",
      tallyContactIdFr: "BEx0XA",
      tallyCandidatureId: "LDPkbO",
      tallyCandidatureIdFr: "M1EMbg",
      videoUrl: "assets/video-webdev.mp4",
      videoPoster: "assets/video-webdev-poster.jpg",
      videoUrlFr: "assets/video-webdev-fr.mp4",
      videoPosterFr: "assets/video-webdev-poster-fr.jpg",
      detailsUrl: "https://app.notion.com/p/421c91a9271381f6aa72d987159c24dd",
      detailsUrlFr: "https://app.notion.com/p/421c91a92713813ba4bdddc6243c3683"
    }
  },

  // ---------- POLICE AVENIR NEXT (facultatif) ----------
  // Sans kit : Avenir Next s'affiche chez les visiteurs Apple (Mac, iPhone),
  // Nunito Sans (la plus proche) chez les autres.
  // Avec un kit Adobe Fonts contenant « Avenir Next LT Pro », colle ici son ID.
  adobeFontsKit: "",

  // ---------- RÉSEAUX SOCIAUX ----------
  linkedinUrl: "https://www.linkedin.com/",
  instagramUrl: "https://www.instagram.com/"
};
