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
      badges: ["100% remote", "Paid per mission", "No client hunting"],
      formTitre: "Get access to the video",
      formMention: "Your data is only used to process your application. It is never sold or shared.",
      boutonHaut: "Get access to the video",
      temoignagesTitre: "What our clients say",
      temoignagesSousTitre: "The level of work you’ll be part of.",
      // Use ONLY real reviews, with the person’s consent.
      // type: "linkedin" or "google" · texte: the review · traduit: true if translated from the original
      // nom / role: who says it · lien: profile link (optional) · photo: optional, e.g. "assets/temoignages/name.jpg"
      // capture: optional screenshot path (replaces the text) · while texte starts with [ the card shows dashed
      temoignages: [
        { type: "linkedin", traduit: true, nom: "Kevin Contoux", role: "Founder, The Machine",
          texte: "I hired Joanna to rebrand my company. We wanted to target bigger companies and markets, and needed to adapt our communication and brand image. I was pleasantly surprised by the quality of the work and above all by how efficiently she understood our needs. […] Joanna understood exactly what we needed with a detailed questionnaire, 2 calls and WhatsApp follow-up. Very efficient, with very few changes at the end. She even added things we hadn’t thought of, like sales materials and guidelines on the marketing tone for our copywriters. I recommend her 200%.",
          lien: "", photo: "assets/temoignages/kevin-contoux.jpg", capture: "" },
        { type: "linkedin", traduit: true, nom: "Guillaume Trotignon", role: "Founder, Zmachina",
          texte: "I asked Joanna for visual branding work and I’m very satisfied. I recommend her without hesitation.",
          lien: "", photo: "assets/temoignages/guillaume-trotignon.jpg", capture: "" },
        { type: "google", traduit: false, nom: "Bruno Nobre", role: "Founder, Authentic Entertainment",
          texte: "Great communication, deliverables time respected, good skills! If you want quality branding and scale your brand, BRAND.UP!",
          lien: "", photo: "assets/temoignages/authntk.jpg", capture: "" },
        { type: "google", traduit: false, nom: "Tom Poos", role: "Founder, Serenity",
          texte: "I can only recommend you Brand.UP if you want to scale your brand and get a complete sophisticated branding overhaul 💯. 41 pages with pretty much every detail intentionally covered, from typography to designed website icons.",
          lien: "", photo: "assets/temoignages/tom-poos.jpg", capture: "" },
        { type: "google", traduit: true, nom: "Ines Mettidji", role: "Content Creator & UGC",
          texte: "Honestly, a great experience! Brand.UP created the logo for my podcast and I loved the result. Very attentive, professional and talented. I truly recommend them.",
          lien: "", photo: "assets/temoignages/ines-mettidji.jpg", capture: "" }
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
          "Real branding projects for entrepreneurs, SMEs and growing brands — without hunting for clients, writing quotes or chasing payments.",
          "100% remote: you organise your time as you like, as long as deadlines are met.",
          "One clear mission order per project: brief, deliverables, timeline and price agreed before you start.",
          "Paid within 30 days of your invoice — never dependent on whether the client has paid us.",
          "Creative direction from the founders: clear briefs and structured feedback.",
          "A long-term partnership: we keep working with the freelancers who deliver."
        ]},
        { titre: "Your missions", puces: [
          "Create complete visual identities: logo, colour palette, typography, graphic system.",
          "Lead the art direction of brands and campaigns: moodboards, creative routes, visual supervision.",
          "Design brand guidelines and their applications — social media, print, packaging, presentations.",
          "Present your creative routes, explain your choices and refine them until sign-off."
        ]},
        { titre: "What you bring", puces: [
          "You think brand before logo: strategy drives every creative choice.",
          "A portfolio that proves it, in visual identity and/or art direction.",
          "Reliability: you meet deadlines and flag any risk early.",
          "Clean, organised source files, ready to hand over.",
          "Your own licensed tools and a self-employed status to invoice."
        ]},
        { titre: "How it works", puces: [
          "Apply in about 10 minutes with your portfolio and one case study.",
          "We review every application. Shortlisted profiles are invited to a video call with the founders.",
          "You sign our framework contract once — then each project comes with its own mission order.",
          "You create, Brand.UP handles the client. Your work is delivered under the Brand.UP name."
        ]}
      ]
    },

    page3: {
      titre: "Show us how you think about brands",
      sousTitre: "No need for perfect answers — be precise and be yourself. Have your portfolio link ready.",
      duree: "About 10 minutes"
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
      badges: ["100 % remote", "Payé à la mission", "Zéro prospection"],
      formTitre: "Accède à la vidéo",
      formMention: "Tes données servent uniquement au suivi de ta candidature. Elles ne sont jamais revendues ni partagées.",
      boutonHaut: "Accéder à la vidéo",
      temoignagesTitre: "Ce que disent nos clients",
      temoignagesSousTitre: "Le niveau d’exigence auquel tu vas contribuer.",
      temoignages: [
        { type: "linkedin", traduit: false, nom: "Kevin Contoux", role: "Fondateur, The Machine",
          texte: "J’ai fait appel à Joanna pour le rebranding de mon entreprise. Nous souhaitions cibler de plus grosses entreprises / marchés, et avions besoin d’adapter notre communication et notre image de marque. J’ai été agréablement surpris de la qualité du travail et surtout de l’efficacité dans la compréhension du besoin. […] Joanna a parfaitement compris mon besoin avec un questionnaire détaillé, 2 calls et un suivi WhatsApp. Très efficace et très peu de modifications à la fin. Joanna a même intégré des éléments auxquels nous n’avions pas pensé, comme des exemples de supports commerciaux, des instructions sur le ton marketing à adopter pour nos copywriters. Je recommande à 200 %.",
          lien: "", photo: "assets/temoignages/kevin-contoux.jpg", capture: "" },
        { type: "linkedin", traduit: false, nom: "Guillaume Trotignon", role: "Fondateur, Zmachina",
          texte: "J’ai sollicité Joanna pour son travail de branding visuel et j’en suis très satisfait. Je la recommande sans hésiter.",
          lien: "", photo: "assets/temoignages/guillaume-trotignon.jpg", capture: "" },
        { type: "google", traduit: true, nom: "Bruno Nobre", role: "Fondateur, Authentic Entertainment",
          texte: "Super communication, délais de livraison respectés, de vraies compétences ! Si tu veux un branding de qualité et faire grandir ta marque : BRAND.UP !",
          lien: "", photo: "assets/temoignages/authntk.jpg", capture: "" },
        { type: "google", traduit: true, nom: "Tom Poos", role: "Fondateur, Serenity",
          texte: "Je ne peux que vous recommander Brand.UP si vous voulez faire grandir votre marque et obtenir une refonte de branding complète et sophistiquée 💯. 41 pages où quasiment chaque détail est pensé, de la typographie aux icônes du site web.",
          lien: "", photo: "assets/temoignages/tom-poos.jpg", capture: "" },
        { type: "google", traduit: false, nom: "Ines Mettidji", role: "Content Creator & UGC",
          texte: "Franchement super expérience ! Brandup a créé le logo de mon podcast et j’ai adoré le résultat. Très à l’écoute, pro et talentueux. Je recommande vraiment.",
          lien: "", photo: "assets/temoignages/ines-mettidji.jpg", capture: "" }
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
          "De vrais projets de branding pour des entrepreneurs, PME et marques en croissance — sans prospecter, sans faire de devis, sans relancer de paiements.",
          "100 % à distance : tu organises ton temps comme tu veux, tant que les délais sont tenus.",
          "Un ordre de mission clair pour chaque projet : brief, livrables, calendrier et prix fixés avant de commencer.",
          "Payé·e sous 30 jours après ta facture — jamais conditionné au paiement du client.",
          "Une direction créative assurée par les fondateurs : briefs clairs et retours structurés.",
          "Une collaboration sur la durée : on continue avec les freelances qui livrent."
        ]},
        { titre: "Tes missions", puces: [
          "Créer des identités visuelles complètes : logo, palette, typographie, système graphique.",
          "Assurer la direction artistique de marques et de campagnes : moodboards, pistes créatives, supervision visuelle.",
          "Concevoir des brand guidelines et leurs déclinaisons — réseaux sociaux, print, packaging, présentations.",
          "Présenter tes pistes, expliquer tes choix et les affiner jusqu’à validation."
        ]},
        { titre: "Ce que tu apportes", puces: [
          "Tu penses marque avant de penser logo : la stratégie guide chacun de tes choix créatifs.",
          "Un portfolio qui le prouve, en identité visuelle et/ou direction artistique.",
          "De la fiabilité : tu tiens tes délais et tu préviens dès qu’un risque apparaît.",
          "Des fichiers sources propres et organisés, prêts à être transmis.",
          "Tes propres logiciels sous licence et un statut indépendant pour facturer."
        ]},
        { titre: "Comment ça se passe", puces: [
          "Tu candidates en 10 minutes environ, avec ton portfolio et une étude de cas.",
          "Nous étudions chaque candidature. Les profils présélectionnés sont invités à un appel vidéo avec les fondateurs.",
          "Tu signes notre contrat-cadre une seule fois — ensuite, chaque projet arrive avec son ordre de mission.",
          "Tu crées, Brand.UP gère le client. Ton travail est livré sous le nom de Brand.UP."
        ]}
      ]
    },

    page3: {
      titre: "Montre-nous comment tu penses la marque",
      sousTitre: "Pas besoin de réponses parfaites : sois précis·e et sois toi-même. Prépare le lien de ton portfolio.",
      duree: "Environ 10 minutes"
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
