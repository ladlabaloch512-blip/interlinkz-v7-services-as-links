// Interlinkz Variant 7, D7 sequence: the service cards link up in logo language.
// Desktop only. Content is fully visible without JS and on mobile.
(function () {
  if (!window.gsap) return;
  if (window.matchMedia("(max-width: 860px)").matches) return;
  var row = document.querySelector(".lock-row");
  if (!row) return;
  gsap.registerPlugin(ScrollTrigger);
  var cards = row.querySelectorAll(".lock-card");
  var links = row.querySelectorAll(".lock-link");
  var tl = gsap.timeline({ defaults: { ease: "power3.out" }, scrollTrigger: { trigger: row, start: "top 82%" } });
  cards.forEach(function (card, i) {
    tl.from(card, { y: 26, opacity: 0, duration: 0.5 }, i === 0 ? 0 : "-=0.15");
    if (links[i]) {
      var line = links[i].querySelector(".lk-line");
      var z = links[i].querySelector(".lk-z");
      if (line) tl.from(line, { scaleX: 0, transformOrigin: "left center", duration: 0.4 }, "-=0.1");
      if (z) tl.from(z, { scale: 0.3, opacity: 0, transformOrigin: "center", duration: 0.35 }, "-=0.15");
    }
  });
})();
