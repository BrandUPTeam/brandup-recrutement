/*
  Lock while the site is under construction (config.js → siteVerrouille).
  Loaded in <head> so the real page never flashes. No need to edit this file.
  Note: this keeps visitors and search engines out; it is not a security vault
  (the files themselves are public on GitHub).
*/
(function () {
  var C = window.BRANDUP_CONFIG || {};
  if (!C.siteVerrouille) return;

  var robots = document.createElement("meta");
  robots.name = "robots";
  robots.content = "noindex, nofollow";
  document.head.appendChild(robots);

  var code = String(C.codeAcces || "");
  try {
    var params = new URLSearchParams(location.search);
    // ?preview=coming-soon : show the lock screen as a visitor sees it (forgets the saved code)
    if (params.get("preview") === "coming-soon") localStorage.removeItem("bu_acces");
    var dansUrl = params.get("code");
    if (dansUrl && dansUrl === code) localStorage.setItem("bu_acces", code);
    if (localStorage.getItem("bu_acces") === code) return;
  } catch (e) { /* storage blocked: stay locked */ }

  document.documentElement.classList.add("verrouille");
})();
