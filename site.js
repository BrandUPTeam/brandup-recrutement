/*
  Site engine: places the texts from textes.js and the links from config.js.
  No need to edit this file.
*/
(function () {
  var C = window.BRANDUP_CONFIG || {};
  var TOUS = window.TEXTES || {};
  var LANGUES = ["en", "fr"];

  // ---------- Language: ?lang=fr in the URL, else last choice, else English ----------
  var lang = "en";
  try {
    var demandee = new URLSearchParams(location.search).get("lang");
    if (LANGUES.indexOf(demandee) > -1) localStorage.setItem("bu_lang", demandee);
    var memo = localStorage.getItem("bu_lang");
    if (LANGUES.indexOf(memo) > -1) lang = memo;
  } catch (e) {}
  if (!TOUS[lang]) lang = "en";
  var T = TOUS[lang] || {};
  var UI = T.ui || {};
  document.documentElement.lang = lang;

  // A config value, with its French variant when the page is in French
  function cfg(cle) {
    if (lang === "fr" && C[cle + "Fr"]) return C[cle + "Fr"];
    return C[cle] || "";
  }

  // ---------- Avenir Next via Adobe Fonts (optional) ----------
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

  // ---------- Language switcher ----------
  function selecteurLangue(parent) {
    var box = el("div", "langues");
    box.setAttribute("role", "group");
    box.setAttribute("aria-label", lang === "fr" ? "Langue" : "Language");
    LANGUES.forEach(function (code) {
      var b = el("button", "langues__bouton", code.toUpperCase());
      b.type = "button";
      b.setAttribute("aria-pressed", code === lang ? "true" : "false");
      b.setAttribute("lang", code);
      b.setAttribute("aria-label", code === "en" ? "English" : "Français");
      b.addEventListener("click", function () {
        if (code === lang) return;
        try { localStorage.setItem("bu_lang", code); } catch (e) {}
        var url = new URL(location.href);
        url.searchParams.set("lang", code);
        location.href = url.toString();
      });
      box.appendChild(b);
    });
    parent.appendChild(box);
  }
  document.querySelectorAll("[data-langues]").forEach(selecteurLangue);

  // ---------- Lock screen while under construction ----------
  if (document.documentElement.classList.contains("verrouille")) {
    var ecran = el("div", "ecran-verrou");
    var haut = el("div", "ecran-verrou__haut");
    selecteurLangue(haut);
    ecran.appendChild(haut);
    var carte = el("div", "ecran-verrou__carte");
    var logo = el("img");
    logo.src = "assets/logo-rose.png"; logo.alt = "Brand.UP"; logo.width = 170;
    carte.appendChild(logo);
    carte.appendChild(el("h1", null, UI.verrouTitre || "Coming soon"));
    carte.appendChild(el("p", null, UI.verrouTexte || ""));
    var form = el("form", "ecran-verrou__form");
    var lab = el("label", null, UI.verrouLabel || "Access code");
    lab.setAttribute("for", "code-acces");
    var inp = el("input");
    inp.id = "code-acces"; inp.type = "password"; inp.autocomplete = "off";
    var btn = el("button", "bouton", UI.verrouBouton || "Enter");
    btn.type = "submit";
    var err = el("p", "ecran-verrou__erreur");
    err.setAttribute("role", "alert");
    form.appendChild(lab); form.appendChild(inp); form.appendChild(btn); form.appendChild(err);
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (inp.value === String(C.codeAcces || "")) {
        try { localStorage.setItem("bu_acces", inp.value); } catch (e) {}
        location.reload();
      } else {
        err.textContent = UI.verrouErreur || "Wrong code.";
      }
    });
    carte.appendChild(form);
    ecran.appendChild(carte);
    document.body.appendChild(ecran);
    return; // nothing else loads while locked
  }

  // ---------- Simple texts ----------
  document.querySelectorAll("[data-t]").forEach(function (n) {
    var v = lire(n.getAttribute("data-t"));
    if (typeof v === "string") n.textContent = v;
  });

  // ---------- Simple bullet lists ----------
  document.querySelectorAll("[data-liste]").forEach(function (ul) {
    (lire(ul.getAttribute("data-liste")) || []).forEach(function (txt) {
      ul.appendChild(el("li", null, txt));
    });
  });

  // ---------- Progress steps ----------
  document.querySelectorAll("[data-etapes]").forEach(function (ol) {
    var actif = parseInt(ol.getAttribute("data-etapes"), 10) || 1;
    (T.etapes || []).forEach(function (txt, i) {
      var li = el("li", i + 1 < actif ? "fait" : (i + 1 === actif ? "actif" : ""));
      li.appendChild(el("span", null, txt));
      if (i + 1 === actif) li.setAttribute("aria-current", "step");
      ol.appendChild(li);
    });
  });

  // ---------- Testimonials and LinkedIn recommendations ----------
  document.querySelectorAll("[data-temoignages]").forEach(function (ul) {
    var liste = lire(ul.getAttribute("data-temoignages")) || [];
    liste.forEach(function (t) {
      var aRemplir = /^\s*\[/.test(t.texte || "") && !t.capture;
      var li = el("li", "temoignage" + (aRemplir ? " temoignage--a-remplir" : ""));
      var estLinkedin = t.type === "linkedin";
      var badge = el("span", "temoignage__badge", estLinkedin ? (UI.recoLinkedin || "LinkedIn") : (UI.avis || "Review"));
      if (estLinkedin) badge.classList.add("temoignage__badge--linkedin");
      li.appendChild(badge);
      if (t.capture) {
        var img = el("img", "temoignage__capture");
        img.src = t.capture;
        img.alt = t.nom || "";
        img.loading = "lazy";
        li.appendChild(img);
      } else {
        var q = el("blockquote", "temoignage__texte");
        q.appendChild(el("p", null, t.texte));
        li.appendChild(q);
      }
      var auteur = el("div", "temoignage__auteur");
      var initiales = (t.nom || "?").replace(/[\[\]]/g, "").split(/\s+/)
        .map(function (m) { return m.charAt(0); }).join("").slice(0, 2).toUpperCase();
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

  // ---------- Bordered boxes (page 2) ----------
  document.querySelectorAll("[data-blocs]").forEach(function (box) {
    (lire(box.getAttribute("data-blocs")) || []).forEach(function (b) {
      var art = el("article", "boite");
      art.appendChild(el("h2", null, b.titre));
      var ul = el("ul");
      (b.puces || []).forEach(function (txt) { ul.appendChild(el("li", null, txt)); });
      art.appendChild(ul);
      box.appendChild(art);
    });
  });

  // ---------- Links from config.js ----------
  document.querySelectorAll("[data-lien]").forEach(function (a) {
    var url = cfg(a.getAttribute("data-lien"));
    if (url) a.href = url;
    else a.title = "Link to add in config.js";
  });
  document.querySelectorAll("[data-social]").forEach(function (a) {
    var url = C[a.getAttribute("data-social")];
    if (url) a.href = url;
  });

  // ---------- Tally forms ----------
  var tallyAjoute = false;
  document.querySelectorAll("[data-tally]").forEach(function (box) {
    var id = String(cfg(box.getAttribute("data-tally"))).trim();
    if (!id) {
      var msg = el("div", "a-brancher");
      var p = el("p");
      p.style.margin = "0";
      p.appendChild(el("strong", null, (UI.tallyManquant || "") + " "));
      p.appendChild(document.createTextNode(UI.tallyAide || ""));
      msg.appendChild(p);
      var suite = box.getAttribute("data-suite");
      if (suite) {
        var a = el("a", "bouton", UI.continuerTest || "Continue →");
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
    f.title = box.getAttribute("data-titre") || "Form";
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

  // ---------- YouTube or Vimeo video ----------
  document.querySelectorAll("[data-video]").forEach(function (box) {
    var url = String(cfg("videoUrl")).trim();
    var embed = null;
    var yt = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/);
    var vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (yt) embed = "https://www.youtube-nocookie.com/embed/" + yt[1] + "?rel=0";
    else if (vm) embed = "https://player.vimeo.com/video/" + vm[1];
    if (!embed) return; // the "video coming soon" placeholder stays
    box.innerHTML = "";
    var f = document.createElement("iframe");
    f.src = embed;
    f.title = "Brand.UP video";
    f.allow = "autoplay; fullscreen; picture-in-picture";
    f.allowFullscreen = true;
    box.appendChild(f);
  });
})();
