// Interlinkz Variant 7, D7 sequence: the service cards link up in logo language.
// Desktop only. Content is fully visible without JS and on mobile.
// Every tween sets immediateRender: false, so nothing is pre-hidden: each
// card sits fully visible until its animation moment arrives, then plays
// and settles. The sequence is short: a four-card row settles in about
// 1.3 seconds once it scrolls into view.
(function () {
  if (!window.gsap) return;
  if (window.matchMedia("(max-width: 860px)").matches) return;
  var rows = document.querySelectorAll(".lock-row");
  if (!rows.length) return;
  gsap.registerPlugin(ScrollTrigger);
  rows.forEach(function (row) {
    var cards = row.querySelectorAll(".lock-card");
    var links = row.querySelectorAll(".lock-link");
    var tl = gsap.timeline({ defaults: { ease: "power3.out" }, scrollTrigger: { trigger: row, start: "top 82%" } });
    cards.forEach(function (card, i) {
      var at = i * 0.28;
      tl.from(card, { y: 26, opacity: 0, duration: 0.4, immediateRender: false }, at);
      if (links[i]) {
        var line = links[i].querySelector(".lk-line");
        var z = links[i].querySelector(".lk-z");
        if (line) tl.from(line, { scaleX: 0, transformOrigin: "left center", duration: 0.3, immediateRender: false }, at + 0.12);
        if (z) tl.from(z, { scale: 0.3, opacity: 0, transformOrigin: "center", duration: 0.28, immediateRender: false }, at + 0.2);
      }
    });
  });
})();
