/*
  Moteur du site : place les textes de textes.js et les liens de config.js.
  Pas besoin de modifier ce fichier.
*/
(function () {
  var T = window.TEXTES || {};
  var C = window.BRANDUP_CONFIG || {};

  // Police Avenir Next via Adobe Fonts (si un kit est renseigné dans config.js)
  var kit = (C.adobeFontsKit || "").trim();
  if (kit) {
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://use.typekit.net/" + encodeURIComponent(kit) + ".css";
    document.head.appendChild(l);
    document.documentElement.classList.add("avec-adobe");
  }

  function lire(chemin) {
    return chemin.split(".").reduce(function (obj, cle) {
      return obj == null ? undefined : obj[cle];
    }, T);
  }

  function el(tag, classe, texte) {
    var e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texte != null) e.textContent = texte;
    return e;
  }

  // Textes simples
  document.querySelectorAll("[data-t]").forEach(function (n) {
    var v = lire(n.getAttribute("data-t"));
    if (typeof v === "string") n.textContent = v;
  });

  // Listes à puces simples
  document.querySelectorAll("[data-liste]").forEach(function (ul) {
    (lire(ul.getAttribute("data-liste")) || []).forEach(function (txt) {
      ul.appendChild(el("li", null, txt));
    });
  });

  // Cartes numérotées (page 1)
  document.querySelectorAll("[data-cartes]").forEach(function (ul) {
    (lire(ul.getAttribute("data-cartes")) || []).forEach(function (c, i) {
      var li = el("li", "carte");
      var p = el("span", "pastille", String(i + 1));
      p.setAttribute("aria-hidden", "true");
      li.appendChild(p);
      li.appendChild(el("h3", null, c.titre));
      li.appendChild(el("p", null, c.texte));
      ul.appendChild(li);
    });
  });

  // Témoignages et recommandations LinkedIn (page 1)
  document.querySelectorAll("[data-temoignages]").forEach(function (ul) {
    var liste = lire(ul.getAttribute("data-temoignages")) || [];
    liste.forEach(function (t) {
      var aRemplir = /^\s*\[/.test(t.texte || "") && !t.capture;
      var li = el("li", "temoignage" + (aRemplir ? " temoignage--a-remplir" : ""));
      var badge = el("span", "temoignage__badge", t.type === "linkedin" ? "Recommandation LinkedIn" : "Avis");
      if (t.type === "linkedin") badge.classList.add("temoignage__badge--linkedin");
      li.appendChild(badge);
      if (t.capture) {
        var img = el("img", "temoignage__capture");
        img.src = t.capture;
        img.alt = "Recommandation de " + (t.nom || "");
        img.loading = "lazy";
        li.appendChild(img);
      } else {
        var q = el("blockquote", "temoignage__texte");
        q.appendChild(el("p", null, t.texte));
        li.appendChild(q);
      }
      var auteur = el("div", "temoignage__auteur");
      var initiales = (t.nom || "?").replace(/[\[\]]/g, "").split(/\s+/).map(function (m) { return m.charAt(0); }).join("").slice(0, 2).toUpperCase();
      if (t.photo) {
        var ph = el("img", "temoignage__photo");
        ph.src = t.photo; ph.alt = ""; ph.loading = "lazy";
        auteur.appendChild(ph);
      } else {
        var av = el("span", "temoignage__initiales", initiales);
        av.setAttribute("aria-hidden", "true");
        auteur.appendChild(av);
      }
      var id = el("div");
      var nom = t.lien ? el("a", "temoignage__nom", t.nom) : el("p", "temoignage__nom", t.nom);
      if (t.lien) { nom.href = t.lien; nom.target = "_blank"; nom.rel = "noopener"; }
      id.appendChild(nom);
      if (t.role) id.appendChild(el("p", "temoignage__role", t.role));
      auteur.appendChild(id);
      li.appendChild(auteur);
      ul.appendChild(li);
    });
    if (!liste.length) {
      var sec = ul.closest("section");
      if (sec) sec.hidden = true;
    }
  });

  // Blocs bleus (page 2)
  document.querySelectorAll("[data-blocs]").forEach(function (box) {
    (lire(box.getAttribute("data-blocs")) || []).forEach(function (b) {
      var art = el("article", "bloc");
      art.appendChild(el("h2", null, b.titre));
      var ul = el("ul");
      (b.puces || []).forEach(function (txt) { ul.appendChild(el("li", null, txt)); });
      art.appendChild(ul);
      box.appendChild(art);
    });
  });

  // Liens venant de config.js
  document.querySelectorAll("[data-lien]").forEach(function (a) {
    var url = C[a.getAttribute("data-lien")];
    if (url) {
      a.href = url;
    } else if (a.getAttribute("data-lien") === "detailsUrl") {
      a.href = "#";
      a.title = "Lien Notion à ajouter dans config.js";
    }
  });

  // Formulaires Tally
  var tallyAjoute = false;
  document.querySelectorAll("[data-tally]").forEach(function (box) {
    var id = (C[box.getAttribute("data-tally")] || "").trim();
    if (!id) {
      var msg = el("div", "a-brancher");
      var p = el("p");
      p.style.margin = "0";
      p.appendChild(el("strong", null, "Formulaire Tally à brancher. "));
      p.appendChild(document.createTextNode("Ajoute son ID dans le fichier config.js."));
      msg.appendChild(p);
      var suite = box.getAttribute("data-suite");
      if (suite) {
        var a = el("a", "bouton", "Continuer en mode test →");
        a.href = suite;
        msg.appendChild(a);
      }
      box.appendChild(msg);
      return;
    }
    var src = "https://tally.so/embed/" + encodeURIComponent(id) +
      "?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
    var f = document.createElement("iframe");
    f.setAttribute("data-tally-src", src);
    f.src = src;
    f.loading = "lazy";
    f.width = "100%";
    f.height = box.getAttribute("data-hauteur") || "420";
    f.title = box.getAttribute("data-titre") || "Formulaire";
    f.style.border = "0";
    f.style.display = "block";
    box.appendChild(f);
    tallyAjoute = true;
  });
  if (tallyAjoute) {
    var s = document.createElement("script");
    s.src = "https://tally.so/widgets/embed.js";
    s.onload = function () { if (window.Tally) window.Tally.loadEmbeds(); };
    document.body.appendChild(s);
  }

  // Vidéo YouTube ou Vimeo
  document.querySelectorAll("[data-video]").forEach(function (box) {
    var url = (C.videoUrl || "").trim();
    var embed = null;
    var yt = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/);
    var vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (yt) embed = "https://www.youtube-nocookie.com/embed/" + yt[1] + "?rel=0";
    else if (vm) embed = "https://player.vimeo.com/video/" + vm[1];
    if (!embed) return; // l'emplacement « vidéo à venir » reste affiché
    box.innerHTML = "";
    var f = document.createElement("iframe");
    f.src = embed;
    f.title = "Vidéo de présentation Brand.UP";
    f.allow = "autoplay; fullscreen; picture-in-picture";
    f.allowFullscreen = true;
    box.appendChild(f);
  });

  // Liens réseaux sociaux
  document.querySelectorAll("[data-social]").forEach(function (a) {
    var url = C[a.getAttribute("data-social")];
    if (url) a.href = url;
  });
})();
