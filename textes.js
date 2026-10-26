/*
  ============================================================
  ALL THE TEXT ON THE SITE — TOUS LES TEXTES DU SITE
  "en" = English (default language) · "fr" = Français
  To change a text: only edit what is BETWEEN the quotes "...".
  Keep the commas at the end of the lines.
  For an apostrophe inside a sentence, use ’ (curly) — not '.
  ============================================================
*/
window.TEXTES = {

  /* =========================== ENGLISH =========================== */
  en: {
    bandeau: {
      titre: "Freelance application — Branding & Art Direction",
      sousTitre: "Follow the steps to apply"
    },
    etapes: ["Your details", "Watch the video", "Apply"],

    page1: {
      titreDebut: "Build brands that matter with ",
      titreSurligne: "Brand.UP",
      titreFin: "",
      sousTitre: "Enter your details below and get instant access to a short video explaining the role and how to apply.",
      badges: ["100% remote", "Full branding projects", "Freelance, project by project"],
      formTitre: "Get access to the video",
      formMention: "Your data is only used to process your application. It is never sold or shared.",
      boutonHaut: "Get access to the video",
      temoignagesTitre: "They’ve worked with Brand.UP",
      // Use ONLY real reviews, with the person’s consent.
      // type: "linkedin" or "google" · texte: the review · traduit: true if translated from the original
      // nom / role: who says it · lien: profile link (optional) · photo: optional, e.g. "assets/temoignages/name.jpg"
      // capture: optional screenshot path (replaces the text) · while texte starts with [ the card shows dashed
      temoignages: [
        { type: "linkedin", traduit: true, nom: "Kevin Contoux", role: "B2B sales systems · Rebranding client",
          texte: "I hired Joanna to rebrand my company. We wanted to target bigger companies and markets, and needed to adapt our communication and brand image. I was pleasantly surprised by the quality of the work and above all by how efficiently she understood our needs. […] Joanna understood exactly what we needed with a detailed questionnaire, 2 calls and WhatsApp follow-up. Very efficient, with very few changes at the end. She even added things we hadn’t thought of, like sales materials and guidelines on the marketing tone for our copywriters. I recommend her 200%.",
          lien: "", photo: "", capture: "" },
        { type: "linkedin", traduit: true, nom: "Guillaume Trotignon", role: "Founder, Zmachina",
          texte: "I asked Joanna for visual branding work and I’m very satisfied. I recommend her without hesitation.",
          lien: "", photo: "", capture: "" },
        { type: "google", traduit: false, nom: "Bruno Nobre", role: "Authentic Entertainment",
          texte: "Great communication, deliverables time respected, good skills! If you want quality branding and scale your brand, BRAND.UP!",
          lien: "", photo: "", capture: "" },
        { type: "google", traduit: true, nom: "Ines Mettidji", role: "Beautycurly Queen (podcast)",
          texte: "Honestly, a great experience! Brand.UP created the logo for my podcast and I loved the result. Very attentive, professional and talented. I truly recommend them.",
          lien: "", photo: "", capture: "" }
      ]
    },

    page2: {
      titre: "Watch this video before applying",
      sousTitre: "3 minutes to understand the role, how we work together and what we expect from you.",
      videoBadge: "Turn the sound on",
      boutonCandidater: "Apply now",
      boutonDetails: "+ More details",
      blocs: [
        { titre: "What we offer", puces: [
          "Join a creative and strategic agency helping entrepreneurs, SMEs and growing brands build strong identities.",
          "Full branding projects — no client hunting, no invoicing hassle.",
          "100% remote: full autonomy and flexibility.",
          "A long-term collaboration: reliable freelancers get priority on new projects.",
          "Clear briefs and structured feedback from the founders."
        ]},
        { titre: "What you’ll do", puces: [
          "Create complete visual identities: logo, color palette, typography, graphic elements.",
          "Lead the art direction of brands and campaigns.",
          "Design brand guidelines and their applications (social media, print, packaging).",
          "Present your creative routes and refine them with feedback until sign-off."
        ]},
        { titre: "What you bring", puces: [
          "You think brand before logo: strategy drives your creative choices.",
          "A strong portfolio in visual identity and/or art direction.",
          "Reliability: you meet deadlines and communicate clearly.",
          "Mastery of your tools (Illustrator, Photoshop, InDesign, Figma…).",
          "A freelance / self-employed status to invoice your projects."
        ]}
      ]
    },

    page3: {
      titre: "Show us how you think about brands",
      sousTitre: "No need for perfect answers — be precise and be yourself. Have your portfolio link ready.",
      duree: "About 15 minutes"
    },

    footer: {
      mentions: "Legal notice",
      confidentialite: "Privacy policy",
      avertissementTitre: "Disclaimer:",
      avertissement: "Brand.UP works with independent freelancers on a project-by-project basis. This is not a salaried job offer. The volume of projects depends on ongoing client work. We believe in hard work, real value and long-term partnerships — not shortcuts."
    },

    // Small interface texts
    ui: {
      avis: "Review",
      avisGoogle: "Google review",
      traduit: "Translated from French",
      recoLinkedin: "LinkedIn recommendation",
      videoBientot: "Video coming soon",
      tallyManquant: "Tally form not connected yet.",
      tallyAide: "Add its ID in config.js.",
      continuerTest: "Continue (test mode) →",
      verrouTitre: "Coming soon",
      verrouTexte: "Our freelance application page is almost ready. Come back very soon!",
      verrouLabel: "Access code",
      verrouBouton: "Enter",
      verrouErreur: "Wrong code. Try again."
    }
  },

  /* =========================== FRANÇAIS =========================== */
  fr: {
    bandeau: {
      titre: "Candidature freelance — Branding & Direction artistique",
      sousTitre: "Suis les étapes pour candidater"
    },
    etapes: ["Tes infos", "La vidéo", "Candidature"],

    page1: {
      titreDebut: "Construis des marques qui comptent avec ",
      titreSurligne: "Brand.UP",
      titreFin: "",
      sousTitre: "Laisse tes coordonnées ci-dessous et accède immédiatement à une courte vidéo qui présente la mission et la marche à suivre.",
      badges: ["100 % remote", "Projets de branding complets", "Freelance, mission par mission"],
      formTitre: "Accède à la vidéo",
      formMention: "Tes données servent uniquement au suivi de ta candidature. Elles ne sont jamais revendues ni partagées.",
      boutonHaut: "Accéder à la vidéo",
      temoignagesTitre: "Ils ont travaillé avec Brand.UP",
      temoignages: [
        { type: "linkedin", traduit: false, nom: "Kevin Contoux", role: "Systèmes commerciaux B2B · Client rebranding",
          texte: "J’ai fait appel à Joanna pour le rebranding de mon entreprise. Nous souhaitions cibler de plus grosses entreprises / marchés, et avions besoin d’adapter notre communication et notre image de marque. J’ai été agréablement surpris de la qualité du travail et surtout de l’efficacité dans la compréhension du besoin. […] Joanna a parfaitement compris mon besoin avec un questionnaire détaillé, 2 calls et un suivi WhatsApp. Très efficace et très peu de modifications à la fin. Joanna a même intégré des éléments auxquels nous n’avions pas pensé, comme des exemples de supports commerciaux, des instructions sur le ton marketing à adopter pour nos copywriters. Je recommande à 200 %.",
          lien: "", photo: "", capture: "" },
        { type: "linkedin", traduit: false, nom: "Guillaume Trotignon", role: "Fondateur, Zmachina",
          texte: "J’ai sollicité Joanna pour son travail de branding visuel et j’en suis très satisfait. Je la recommande sans hésiter.",
          lien: "", photo: "", capture: "" },
        { type: "google", traduit: true, nom: "Bruno Nobre", role: "Authentic Entertainment",
          texte: "Super communication, délais de livraison respectés, de vraies compétences ! Si tu veux un branding de qualité et faire grandir ta marque : BRAND.UP !",
          lien: "", photo: "", capture: "" },
        { type: "google", traduit: false, nom: "Ines Mettidji", role: "Beautycurly Queen (podcast)",
          texte: "Franchement super expérience ! Brandup a créé le logo de mon podcast et j’ai adoré le résultat. Très à l’écoute, pro et talentueux. Je recommande vraiment.",
          lien: "", photo: "", capture: "" }
      ]
    },

    page2: {
      titre: "Regarde cette vidéo avant de candidater",
      sousTitre: "3 minutes pour comprendre la mission, notre façon de collaborer et ce que l’on attend de toi.",
      videoBadge: "Active le son",
      boutonCandidater: "Je candidate",
      boutonDetails: "+ de détails",
      blocs: [
        { titre: "Ce qu’on t’offre", puces: [
          "Rejoindre une agence créative et stratégique qui aide entrepreneurs, PME et marques en croissance à construire des identités fortes.",
          "Des projets de branding complets — sans prospection ni facturation à gérer.",
          "100 % à distance : autonomie et flexibilité totales.",
          "Une collaboration sur le long terme : les freelances fiables sont prioritaires sur les nouveaux projets.",
          "Des briefs clairs et des retours structurés des fondateurs."
        ]},
        { titre: "Ce que tu vas faire", puces: [
          "Créer des identités visuelles complètes : logo, palette, typographie, éléments graphiques.",
          "Assurer la direction artistique de marques et de campagnes.",
          "Concevoir des brand guidelines et leurs déclinaisons (réseaux sociaux, print, packaging).",
          "Présenter tes pistes créatives et les affiner avec les retours jusqu’à validation."
        ]},
        { titre: "Ce que tu apportes", puces: [
          "Tu penses marque avant de penser logo : la stratégie guide tes choix créatifs.",
          "Un portfolio solide en identité visuelle et/ou direction artistique.",
          "De la fiabilité : tu respectes les délais et tu communiques clairement.",
          "La maîtrise de tes outils (Illustrator, Photoshop, InDesign, Figma…).",
          "Un statut indépendant pour facturer tes missions."
        ]}
      ]
    },

    page3: {
      titre: "Montre-nous comment tu penses la marque",
      sousTitre: "Pas besoin de réponses parfaites : sois précis·e et sois toi-même. Prépare le lien de ton portfolio.",
      duree: "Environ 15 minutes"
    },

    footer: {
      mentions: "Mentions légales",
      confidentialite: "Confidentialité",
      avertissementTitre: "Avertissement :",
      avertissement: "Brand.UP collabore avec des freelances indépendants, mission par mission. Il ne s’agit pas d’une offre d’emploi salarié. Le volume de missions dépend des projets en cours. Nous croyons au travail, à la vraie valeur et aux partenariats durables — pas aux raccourcis."
    },

    ui: {
      avis: "Avis",
      avisGoogle: "Avis Google",
      traduit: "Traduit de l’anglais",
      recoLinkedin: "Recommandation LinkedIn",
      videoBientot: "Vidéo bientôt disponible",
      tallyManquant: "Formulaire Tally pas encore branché.",
      tallyAide: "Ajoute son ID dans config.js.",
      continuerTest: "Continuer (mode test) →",
      verrouTitre: "Bientôt disponible",
      verrouTexte: "Notre page de candidature freelance est presque prête. Reviens très vite !",
      verrouLabel: "Code d’accès",
      verrouBouton: "Entrer",
      verrouErreur: "Code incorrect. Réessaie."
    }
  }
};
