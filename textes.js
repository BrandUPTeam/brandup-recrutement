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
      titre: "Freelance application — Brand Designer",
      sousTitre: "Follow the steps to apply"
    },
    etapes: ["Your details", "The opportunity", "Apply"],

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
      titre: "Discover the opportunity before applying",
      sousTitre: "Everything you need to know about the collaboration, how we work together and our expectations.",
      videoBadge: "Turn the sound on",
      boutonCandidater: "Apply now",
      boutonDetails: "+ More details",
      blocs: [
        { titre: "What we offer", puces: [
          "Real branding projects for entrepreneurs, SMEs and growing brands — Brand.UP brings the clients and handles the relationship.",
          "A brand strategy to work from, and a Creative & Strategy Director who values your expertise.",
          "A fixed fee per project. Payment terms are flexible — we prefer paying by project milestones.",
          "Fair timelines: the clock stops while we wait for client feedback.",
          "100% remote: your hours, your methods, your tools.",
          "Room to grow: larger projects and direct client involvement after your first successful projects."
        ]},
        { titre: "The projects", puces: [
          "Review the brand strategy and challenge it with your design expertise.",
          "Analyse the market and propose 2–3 distinct visual directions.",
          "Design the logo and its variations, then the complete visual system: colours, typography, graphic elements, photo direction.",
          "Apply the identity to the brand’s key touchpoints with realistic mockups.",
          "Produce brand guidelines of at least 50 pages and a clean, complete file package."
        ]},
        { titre: "What you bring", puces: [
          "A portfolio with at least 3 complete brand identities.",
          "Strong command of Illustrator, Photoshop and InDesign (Figma is a plus).",
          "You think brand before logo: strategy drives every creative choice.",
          "Clear communication, openness to feedback and reliability with deadlines.",
          "Your own licensed tools and a self-employed status to invoice."
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
      avertissement: "This is not a salaried job offer. Brand.UP works with freelancers on a project-by-project basis. The volume of projects depends on ongoing client work."
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
      titre: "Candidature freelance — Brand Designer",
      sousTitre: "Suis les étapes pour candidater"
    },
    etapes: ["Tes infos", "L’opportunité", "Candidature"],

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
      titre: "Découvre l’opportunité avant de candidater",
      sousTitre: "Tout ce qu’il faut savoir sur la collaboration, notre façon de travailler ensemble et nos attentes.",
      videoBadge: "Active le son",
      boutonCandidater: "Je candidate",
      boutonDetails: "+ de détails",
      blocs: [
        { titre: "Ce qu’on t’offre", puces: [
          "De vrais projets de branding pour des entrepreneurs, PME et marques en croissance — Brand.UP apporte les clients et gère la relation.",
          "Une stratégie de marque sur laquelle t’appuyer, et une Directrice Création & Stratégie qui valorise ton expertise.",
          "Un forfait par projet. Les modalités de paiement sont flexibles — nous privilégions un paiement par étape de projet.",
          "Des délais justes : le compteur s’arrête pendant que nous attendons les retours du client.",
          "100 % à distance : tes horaires, tes méthodes, tes outils.",
          "De la place pour évoluer : des projets plus importants et un contact direct avec les clients après tes premiers projets réussis."
        ]},
        { titre: "Les projets", puces: [
          "Analyser la stratégie de marque et la challenger avec ton expertise de designer.",
          "Étudier le marché et proposer 2 à 3 pistes visuelles distinctes.",
          "Créer le logo et ses déclinaisons, puis le système visuel complet : couleurs, typographies, éléments graphiques, direction photo.",
          "Décliner l’identité sur les supports clés de la marque, avec des mockups réalistes.",
          "Réaliser une charte graphique d’au moins 50 pages et un pack de fichiers complet et propre."
        ]},
        { titre: "Ce que tu apportes", puces: [
          "Un portfolio avec au moins 3 identités visuelles complètes.",
          "Une excellente maîtrise d’Illustrator, Photoshop et InDesign (Figma est un plus).",
          "Tu penses marque avant de penser logo : la stratégie guide chacun de tes choix créatifs.",
          "Une communication claire, de l’ouverture aux retours et de la fiabilité sur les délais.",
          "Tes propres logiciels sous licence et un statut indépendant pour facturer."
        ]}
      ]
    },

    page3: {
      titre: "Montre-nous ton approche de la marque",
      sousTitre: "Pas besoin de réponses parfaites : sois précis·e et sois toi-même. Prépare le lien de ton portfolio.",
      duree: "Environ 10 minutes"
    },

    footer: {
      mentions: "Mentions légales",
      confidentialite: "Confidentialité",
      avertissementTitre: "Avertissement :",
      avertissement: "Il ne s’agit pas d’une offre d’emploi salarié. Brand.UP collabore avec des freelances, mission par mission. Le volume de missions dépend des projets en cours."
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

/*
  ============================================================
  TEXTS PER JOB — TEXTES PAR MÉTIER
  Only what differs from the Brand Designer texts above.
  Everything not listed here is taken from the texts above.
  ============================================================
*/
window.TEXTES_METIERS = {

  /* ======================= MARKETING EXPERT ======================= */
  marketing: {
    en: {
      bandeau: { titre: "Freelance application — Marketing Expert" },
      page1: {
        titreDebut: "Grow brands that matter with "
      },
      page2: {
        blocs: [
          { titre: "What we offer", puces: [
            "Real marketing projects for entrepreneurs, SMEs and growing brands — Brand.UP brings the clients and handles the relationship.",
            "A team around you: a Creative & Strategy Director who values your expertise, and an execution team for ads and SEO.",
            "A fixed fee per project for the strategy; steering (and execution, when needed) is quoted separately. We prefer paying by project milestones.",
            "The ad budget is always paid by the client — never by you.",
            "Fair timelines: the clock stops while we wait for client feedback.",
            "100% remote: your hours, your methods, your tools.",
            "Room to grow: larger projects and direct client involvement after your first successful projects."
          ]},
          { titre: "The projects", puces: [
            "Audit the client’s marketing: website, social media, ads, SEO, figures and competitors.",
            "Build the marketing strategy: positioning, personas, channels, funnel, objectives and budget.",
            "Turn it into a 90-day action plan, ready to execute.",
            "When the client orders it: brief our execution team (ads, SEO), track the results and adjust the strategy — and execute yourself when needed.",
            "Report on the results and recommend the next actions."
          ]},
          { titre: "What you bring", puces: [
            "At least 3 client projects to show, with the strategy and the results achieved.",
            "Real expertise in marketing strategy, and a good understanding of ads and SEO — enough to brief an execution team, without having to run them yourself.",
            "You think strategy before tactics: every action serves the brand and a clear objective.",
            "Clear communication, an analytical mind and reliability with deadlines.",
            "A self-employed status to invoice."
          ]}
        ]
      },
      page3: {
        titre: "Show us how you grow a brand",
        sousTitre: "No need for perfect answers — be precise and be yourself. Have your case studies ready."
      }
    },

    fr: {
      bandeau: { titre: "Candidature freelance — Expert marketing" },
      page1: {
        titreDebut: "Fais grandir des marques qui comptent avec "
      },
      page2: {
        blocs: [
          { titre: "Ce qu’on t’offre", puces: [
            "De vrais projets marketing pour des entrepreneurs, PME et marques en croissance — Brand.UP apporte les clients et gère la relation.",
            "Une équipe autour de toi : une Directrice Création & Stratégie qui valorise ton expertise, et une équipe d’exécution pour les ads et le SEO.",
            "Un forfait par projet pour la stratégie ; le pilotage (et l’exécution, si nécessaire) est chiffré à part. Nous privilégions un paiement par étape de projet.",
            "Le budget publicitaire est toujours payé par le client — jamais par toi.",
            "Des délais justes : le compteur s’arrête pendant que nous attendons les retours du client.",
            "100 % à distance : tes horaires, tes méthodes, tes outils.",
            "De la place pour évoluer : des projets plus importants et un contact direct avec les clients après tes premiers projets réussis."
          ]},
          { titre: "Les projets", puces: [
            "Auditer le marketing du client : site, réseaux sociaux, publicités, SEO, chiffres et concurrence.",
            "Construire la stratégie marketing : positionnement, personas, canaux, funnel, objectifs et budget.",
            "La traduire en plan d’action sur 90 jours, prêt à exécuter.",
            "Quand le client le commande : briefer notre équipe d’exécution (ads, SEO), suivre les résultats et ajuster la stratégie — et exécuter toi-même si nécessaire.",
            "Rendre compte des résultats et recommander les prochaines actions."
          ]},
          { titre: "Ce que tu apportes", puces: [
            "Au moins 3 projets clients à montrer, avec la stratégie et les résultats obtenus.",
            "Une vraie expertise en stratégie marketing, et une bonne compréhension des ads et du SEO — assez pour briefer une équipe d’exécution, sans forcément les gérer toi-même.",
            "Tu penses stratégie avant tactique : chaque action sert la marque et un objectif clair.",
            "Une communication claire, un esprit d’analyse et de la fiabilité sur les délais.",
            "Un statut indépendant pour facturer."
          ]}
        ]
      },
      page3: {
        titre: "Montre-nous comment tu fais grandir une marque",
        sousTitre: "Pas besoin de réponses parfaites : sois précis·e et sois toi-même. Prépare les liens vers tes études de cas."
      }
    }
  },

  /* ======================= FULL STACK WEB DEVELOPER ======================= */
  webdev: {
    en: {
      bandeau: { titre: "Freelance application — Full Stack Web Developer" },
      page1: {
        titreDebut: "Build websites that make brands grow with "
      },
      page2: {
        blocs: [
          { titre: "What we offer", puces: [
            "Real web projects for entrepreneurs, SMEs and growing brands — Brand.UP brings the clients and handles the relationship.",
            "No client management: you focus on building, we handle quotes, follow-up and feedback.",
            "A fixed fee per project, agreed before each start; maintenance is quoted separately. We prefer paying by project milestones.",
            "A team around you: designers and a Creative & Strategy Director for the visuals, an execution team for SEO and ads.",
            "Fair timelines: the clock stops while we wait for client feedback.",
            "100% remote: your hours, your methods, your tools.",
            "Room to grow: larger projects after your first successful ones."
          ]},
          { titre: "The projects", puces: [
            "Landing pages, business websites, e-commerce (WooCommerce or custom), custom-coded websites and web apps.",
            "Build from a Figma design provided by our designers, or design the website yourself from the brand guidelines.",
            "Develop, test on every screen, then launch: domain, hosting, e-mails, SSL, payments, GDPR.",
            "Deliver a fast, well-structured website, ready for SEO, with short documentation.",
            "Maintain the website after launch when the client orders it."
          ]},
          { titre: "What you bring", puces: [
            "At least 3 live websites to show, including 1 e-commerce or 1 custom-coded project.",
            "Strong command of WordPress / WooCommerce, and of React / Next.js + Node.js.",
            "The ability to create a clean design when no mock-up is provided.",
            "Attention to detail, clear communication and reliability with deadlines.",
            "A self-employed status to invoice."
          ]}
        ]
      },
      page3: {
        titre: "Show us what you build",
        sousTitre: "No need for perfect answers — be precise and be yourself. Have the links to your live websites ready."
      }
    },

    fr: {
      bandeau: { titre: "Candidature freelance — Développeur web full stack" },
      page1: {
        titreDebut: "Crée des sites qui font grandir les marques avec "
      },
      page2: {
        blocs: [
          { titre: "Ce qu’on t’offre", puces: [
            "De vrais projets web pour des entrepreneurs, PME et marques en croissance — Brand.UP apporte les clients et gère la relation.",
            "Zéro gestion client : tu te concentres sur le développement, on s’occupe des devis, du suivi et des retours.",
            "Un forfait par projet, annoncé avant chaque démarrage ; la maintenance est chiffrée à part. Nous privilégions un paiement par étape de projet.",
            "Une équipe autour de toi : des designers et une Directrice Création & Stratégie pour le visuel, une équipe d’exécution pour le SEO et les ads.",
            "Des délais justes : le compteur s’arrête pendant que nous attendons les retours du client.",
            "100 % à distance : tes horaires, tes méthodes, tes outils.",
            "De la place pour évoluer : des projets plus importants après tes premiers projets réussis."
          ]},
          { titre: "Les projets", puces: [
            "Landing pages, sites business, e-commerces (WooCommerce ou sur mesure), sites codés sur mesure et web apps.",
            "Intégrer une maquette Figma fournie par nos designers, ou créer toi-même le design à partir de la charte graphique.",
            "Développer, tester sur tous les écrans, puis mettre en ligne : domaine, hébergement, e-mails, SSL, paiement, RGPD.",
            "Livrer un site rapide, bien structuré, prêt pour le SEO, avec une courte documentation.",
            "Assurer la maintenance après la mise en ligne quand le client la commande."
          ]},
          { titre: "Ce que tu apportes", puces: [
            "Au moins 3 sites en ligne à montrer, dont 1 e-commerce ou 1 projet codé sur mesure.",
            "Une très bonne maîtrise de WordPress / WooCommerce, et de React / Next.js + Node.js.",
            "La capacité à créer un design propre quand aucune maquette n’est fournie.",
            "Le sens du détail, une communication claire et de la fiabilité sur les délais.",
            "Un statut indépendant pour facturer."
          ]}
        ]
      },
      page3: {
        titre: "Montre-nous ce que tu construis",
        sousTitre: "Pas besoin de réponses parfaites : sois précis·e et sois toi-même. Prépare les liens vers tes sites en ligne."
      }
    }
  }
};
