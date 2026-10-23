/*
  ============================================================
  ALL THE TEXT ON THE SITE  (tous les textes du site)
  To change a text: only edit what is BETWEEN the quotes "...".
  Keep the commas at the end of the lines.
  For an apostrophe inside a sentence, use ’ (curly) — not '.
  ============================================================
*/
window.TEXTES = {

  // ---------- Top banner (all pages) ----------
  bandeau: {
    titre: "Freelance application — Branding & Art Direction",
    sousTitre: "Follow the steps to apply"
  },

  // ---------- Progress steps under the banner ----------
  etapes: ["Your details", "Watch the video", "Apply"],

  // ---------- PAGE 1 (index.html) ----------
  page1: {
    titreDebut: "Build brands that matter with ",
    titreSurligne: "Brand.UP",
    titreFin: "",
    sousTitre: "Enter your details below and get instant access to a short video explaining the role and how to apply.",
    formTitre: "Get access to the video",
    formMention: "Your data is only used to process your application. It is never sold or shared.",
    badges: ["100% remote", "Full branding projects", "Freelance, project by project"],

    boutonHaut: "Get access to the video",
    temoignagesTitre: "They’ve worked with Brand.UP",
    // Use ONLY real reviews, with the person’s consent.
    // type: "review" or "linkedin"
    // texte: the review, word for word (while it starts with [ the card shows as dashed)
    // nom / role: who says it — lien: their LinkedIn profile (optional)
    // photo: optional, e.g. "assets/temoignages/name.jpg"
    // capture: optional screenshot, e.g. "assets/temoignages/reco-name.png" (replaces the text)
    // To remove one: delete the whole { ... } block and the comma after it.
    temoignages: [
      { type: "review", texte: "[Review #1 — paste a real review from a client or freelancer here]", nom: "[First Last]", role: "[Role, company]", lien: "", photo: "", capture: "" },
      { type: "review", texte: "[Review #2]", nom: "[First Last]", role: "[Role, company]", lien: "", photo: "", capture: "" },
      { type: "review", texte: "[Review #3]", nom: "[First Last]", role: "[Role, company]", lien: "", photo: "", capture: "" },
      { type: "linkedin", texte: "[LinkedIn recommendation #1 — copy it from the Recommendations section of the profile]", nom: "[First Last]", role: "[Role, company]", lien: "", photo: "", capture: "" },
      { type: "linkedin", texte: "[LinkedIn recommendation #2]", nom: "[First Last]", role: "[Role, company]", lien: "", photo: "", capture: "" }
    ]
  },

  // ---------- PAGE 2 (presentation.html) ----------
  page2: {
    titre: "Watch this video before applying",
    sousTitre: "3 minutes to understand the role, how we work together and what we expect from you.",
    videoBadge: "Turn the sound on",
    boutonCandidater: "Apply now",
    boutonDetails: "+ More details",
    blocs: [
      {
        titre: "What we offer",
        puces: [
          "Join a creative and strategic agency helping entrepreneurs, SMEs and growing brands build strong identities.",
          "Full branding projects — no client hunting, no invoicing hassle.",
          "100% remote: full autonomy and flexibility.",
          "A long-term collaboration: reliable freelancers get priority on new projects.",
          "Clear briefs and structured feedback from the founders."
        ]
      },
      {
        titre: "What you’ll do",
        puces: [
          "Create complete visual identities: logo, color palette, typography, graphic elements.",
          "Lead the art direction of brands and campaigns.",
          "Design brand guidelines and their applications (social media, print, packaging).",
          "Present your creative routes and refine them with feedback until sign-off."
        ]
      },
      {
        titre: "What you bring",
        puces: [
          "You think brand before logo: strategy drives your creative choices.",
          "A strong portfolio in visual identity and/or art direction.",
          "Reliability: you meet deadlines and communicate clearly.",
          "Mastery of your tools (Illustrator, Photoshop, InDesign, Figma…).",
          "A freelance / self-employed status to invoice your projects."
        ]
      }
    ]
  },

  // ---------- PAGE 3 (apply.html) ----------
  page3: {
    titre: "Show us how you think about brands",
    sousTitre: "No need for perfect answers — be precise and be yourself. Have your portfolio link ready.",
    duree: "About 15 minutes"
  },

  // ---------- Footer ----------
  footer: {
    mentions: "Legal notice",
    confidentialite: "Privacy policy",
    avertissementTitre: "Disclaimer:",
    avertissement: "Brand.UP works with independent freelancers on a project-by-project basis. This is not a salaried job offer. The volume of projects depends on ongoing client work. We believe in hard work, real value and long-term partnerships — not shortcuts."
  }
};
