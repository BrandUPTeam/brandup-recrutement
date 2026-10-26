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
  siteVerrouille: true,
  // Code pour entrer pendant la construction. Lien direct sans taper le code :
  // https://ton-site/?code=LE_CODE
  codeAcces: "brandup2026",

  // ---------- FORMULAIRES TALLY ----------
  // Dans Tally : Share → le lien ressemble à https://tally.so/r/wA1bCd → l'ID est wA1bCd
  tallyContactId: "2jjAgj",  // formulaire « Contact » (page 1), version anglaise
  tallyCandidatureId: "4aaKeb", // questionnaire (page 3), version anglaise
  // Facultatif : versions françaises. Si vides, la version anglaise est utilisée.
  tallyContactIdFr: "",
  tallyCandidatureIdFr: "",

  // ---------- VIDÉO ----------
  // Lien YouTube (ex : https://www.youtube.com/watch?v=XXXXXXXX) ou Vimeo.
  videoUrl: "",
  videoUrlFr: "",            // facultatif : vidéo en français

  // ---------- PAGE « + MORE DETAILS » ----------
  // Lien public de la page Notion (Notion → Share → Publish).
  detailsUrl: "",
  detailsUrlFr: "",          // facultatif : version française

  // ---------- POLICE AVENIR NEXT (facultatif) ----------
  // Sans kit : Avenir Next s'affiche chez les visiteurs Apple (Mac, iPhone),
  // Nunito Sans (la plus proche) chez les autres.
  // Avec un kit Adobe Fonts contenant « Avenir Next LT Pro », colle ici son ID.
  adobeFontsKit: "",

  // ---------- RÉSEAUX SOCIAUX ----------
  linkedinUrl: "https://www.linkedin.com/",
  instagramUrl: "https://www.instagram.com/"
};
