/*
  ============================================================
  TOUS LES TEXTES DU SITE
  Pour modifier un texte : change uniquement ce qui est
  ENTRE les guillemets "...". Garde les virgules en fin de ligne.
  Pour un guillemet dans une phrase, utilise « » ou ’.
  ============================================================
*/
window.TEXTES = {

  // ---------- Bandeau bleu en haut de chaque page ----------
  bandeau: {
    titre: "Candidature freelance — Branding & Direction artistique",
    etape1: "Étape 1 sur 3 · Suis les étapes pour candidater",
    etape2: "Étape 2 sur 3 · Suis les étapes pour candidater",
    etape3: "Étape 3 sur 3 · Ton questionnaire (15 min)"
  },

  // ---------- PAGE 1 : capture ----------
  page1: {
    surtitre: "Réseau créatif Brand.UP",
    titreDebut: "Construis des marques qui comptent, avec ",
    titreSurligne: "Brand.UP",
    titreFin: ".",
    sousTitre: "Laisse tes coordonnées : tu accèdes immédiatement à la vidéo qui présente la mission et la marche à suivre pour candidater.",
    badges: [
      "100 % remote",
      "Missions de branding complètes",
      "Freelance, mission par mission"
    ],
    formTitre: "Accède à la vidéo",
    formMention: "Tes données servent uniquement au suivi de ta candidature. Elles ne sont jamais revendues ni partagées.",
    pourquoiSurtitre: "Pourquoi nous rejoindre",
    pourquoiTitre: "Tu crées. On s’occupe du reste.",
    cartes: [
      { titre: "Des clients, sans la prospection", texte: "Brand.UP trouve les projets, gère le client et la facturation. Toi, tu crées." },
      { titre: "100 % remote", texte: "Tu travailles d’où tu veux, à ton rythme, dans le respect des deadlines." },
      { titre: "Des projets de marque complets", texte: "Identités visuelles, DA, guidelines, rebrandings : du vrai branding, pas des logos à la chaîne." }
    ],

    // ---------- Témoignages (sous les 3 cartes) ----------
    // Mets UNIQUEMENT de vrais avis, avec l'accord de la personne.
    // type : "avis" ou "linkedin"
    // texte : l'avis, mot pour mot (tant qu'il commence par [ , la carte s'affiche en pointillés)
    // nom, role : qui parle (ex : "Designer freelance" ou "Fondatrice, Marque X")
    // lien : (facultatif) son profil LinkedIn
    // photo : (facultatif) ex "assets/temoignages/prenom.jpg"
    // capture : (facultatif) une capture d'écran de la recommandation, ex "assets/temoignages/reco-prenom.png"
    //           → si elle est remplie, la capture remplace le texte
    // Pour supprimer un témoignage, efface tout le bloc { ... }, y compris la virgule qui suit.
    temoignagesSurtitre: "Ils parlent de Brand.UP",
    temoignagesTitre: "Ce qu’en disent ceux qui ont travaillé avec nous",
    temoignages: [
      {
        type: "avis",
        texte: "[Avis n°1 à coller ici — par exemple le retour d’un client ou d’un freelance sur votre collaboration]",
        nom: "[Prénom Nom]",
        role: "[Fonction, entreprise]",
        lien: "", photo: "", capture: ""
      },
      {
        type: "avis",
        texte: "[Avis n°2 à coller ici]",
        nom: "[Prénom Nom]",
        role: "[Fonction, entreprise]",
        lien: "", photo: "", capture: ""
      },
      {
        type: "avis",
        texte: "[Avis n°3 à coller ici]",
        nom: "[Prénom Nom]",
        role: "[Fonction, entreprise]",
        lien: "", photo: "", capture: ""
      },
      {
        type: "linkedin",
        texte: "[Recommandation LinkedIn n°1 — copie le texte depuis ton profil, rubrique Recommandations]",
        nom: "[Prénom Nom]",
        role: "[Fonction, entreprise]",
        lien: "", photo: "", capture: ""
      },
      {
        type: "linkedin",
        texte: "[Recommandation LinkedIn n°2]",
        nom: "[Prénom Nom]",
        role: "[Fonction, entreprise]",
        lien: "", photo: "", capture: ""
      }
    ]
  },

  // ---------- PAGE 2 : présentation ----------
  page2: {
    titre: "Regarde cette vidéo avant de candidater",
    sousTitre: "3 minutes pour comprendre la mission, la collaboration et ce que l’on attend de toi.",
    boutonCandidater: "Je candidate →",
    boutonDetails: "+ de détails",
    blocs: [
      {
        titre: "Ce qu’on t’offre",
        puces: [
          "Une agence créative et stratégique qui accompagne entrepreneurs, PME et marques en croissance.",
          "Des missions de branding complètes, sans chercher les clients ni gérer la facturation.",
          "100 % à distance : autonomie et flexibilité.",
          "Une collaboration sur le long terme pour les freelances fiables.",
          "Des briefs clairs et des retours structurés des fondateurs."
        ]
      },
      {
        titre: "Ce que tu vas faire",
        puces: [
          "Créer des identités visuelles complètes : logo, palette, typographie, éléments graphiques.",
          "Assurer la direction artistique de marques et de campagnes.",
          "Concevoir des brand guidelines et leurs déclinaisons (réseaux sociaux, print, packaging).",
          "Présenter tes pistes et intégrer les retours jusqu’à validation."
        ]
      },
      {
        titre: "Ce que tu apportes",
        puces: [
          "Tu penses marque avant de penser logo.",
          "Un portfolio solide en identité visuelle et/ou DA.",
          "Fiabilité : délais tenus, communication claire.",
          "La maîtrise de tes outils (Illustrator, Photoshop, InDesign, Figma…).",
          "Un statut indépendant pour facturer tes missions."
        ]
      }
    ],
    avertissement: "Brand.UP collabore avec des freelances indépendants, mission par mission. Il ne s’agit pas d’une offre d’emploi salarié. Le volume de missions dépend des projets en cours."
  },

  // ---------- PAGE 3 : questionnaire ----------
  page3: {
    titre: "Montre-nous comment tu penses la marque",
    sousTitre: "Pas besoin de réponses parfaites : sois précis·e et sois toi-même. Prépare le lien de ton portfolio."
  },

  // ---------- Pied de page ----------
  footer: {
    mentions: "Mentions légales",
    confidentialite: "Politique de confidentialité"
  }
};
