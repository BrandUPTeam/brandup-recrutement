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
    var dansUrl = new URLSearchParams(location.search).get("code");
    if (dansUrl && dansUrl === code) localStorage.setItem("bu_acces", code);
    if (localStorage.getItem("bu_acces") === code) return;
  } catch (e) { /* storage blocked: stay locked */ }

  document.documentElement.classList.add("verrouille");
})();
