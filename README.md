# Tunnel de recrutement Brand.UP

Site de recrutement des freelances branding / DA, en 3 étapes, en anglais (par défaut) et en français :

1. `index.html` : page de capture (formulaire Tally « Contact »)
2. `presentation.html` : vidéo + présentation de la mission
3. `apply.html` : questionnaire Tally « Candidature »

Les réponses arrivent dans Notion via l'intégration native de Tally.

## Modifier le site sans coder

| Je veux changer… | Fichier à modifier |
| --- | --- |
| Un texte, un titre, une puce, un bouton (partie `en` = anglais, partie `fr` = français) | `textes.js` |
| Les formulaires Tally, la vidéo, le lien Notion, les réseaux sociaux, le code d'accès | `config.js` |
| Les mentions légales ou la politique de confidentialité | `legal-notice.html`, `privacy.html` |

Sur github.com :

1. Ouvre le fichier.
2. Clique sur le crayon (Edit) en haut à droite.
3. Modifie **uniquement le texte entre guillemets**.
4. Clique sur **Commit changes**.

Le site se met à jour tout seul en 1 à 2 minutes.

Pour tout le reste (nouvelle section, design, nouvelle page), demande-le à Claude en français.

## Langues

- Anglais par défaut ; le visiteur change avec le bouton EN / FR en haut à droite (son choix est mémorisé).
- Lien direct vers la version française : ajoute `?lang=fr` à l'adresse.

## Pendant la construction (site verrouillé)

- `config.js` → `siteVerrouille: true` : les visiteurs voient « Coming soon » et doivent taper le code (`codeAcces`).
- Lien direct sans taper le code : `https://ton-site/?code=LE_CODE`.
- C'est un panneau « travaux en cours », pas un coffre-fort : le code se lit dans `config.js`.

## Le jour du lancement

1. `config.js` → `siteVerrouille: false`
2. Supprimer le fichier `robots.txt` (il bloque Google pendant la construction).
3. Dans `index.html`, rien à faire.

## Ne pas modifier

`site.js`, `verrou.js` et `style.css` font fonctionner le site.
