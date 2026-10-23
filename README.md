# Tunnel de recrutement Brand.UP

Site de recrutement des freelances branding / DA, en 3 étapes :

1. `index.html` : page de capture (formulaire Tally « Contact »)
2. `presentation.html` : vidéo + présentation de la mission
3. `apply.html` : questionnaire Tally « Candidature »

Les réponses arrivent dans Notion via l'intégration native de Tally.

## Modifier le site sans coder

| Je veux changer… | Fichier à modifier |
| --- | --- |
| Un texte, un titre, une puce, un bouton | `textes.js` |
| Les formulaires Tally, la vidéo, le lien Notion, les réseaux sociaux | `config.js` |
| Les mentions légales ou la politique de confidentialité | `legal-notice.html`, `privacy.html` |

Sur github.com :

1. Ouvre le fichier.
2. Clique sur le crayon (Edit) en haut à droite.
3. Modifie **uniquement le texte entre guillemets**.
4. Clique sur **Commit changes**.

Le site se met à jour tout seul en 1 à 2 minutes.

Pour tout le reste (nouvelle section, design, nouvelle page), demande-le à Claude en français.

## Ne pas modifier

`site.js` et `style.css` font fonctionner le site.
