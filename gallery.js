/* Lightbox for photos and videos, plus category filters on the gallery page. */
(function () {
  "use strict";

  var ICON = {
    close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    prev: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
    next: '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>'
  };

  var box, media, caption, closeBtn, items = [], index = 0, lastFocus = null;

  function build() {
    box = document.createElement("div");
    box.className = "gal-lb";
    box.hidden = true;
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Photo and video viewer");
    box.innerHTML =
      '<button type="button" class="gal-lb__close" aria-label="Close">' + ICON.close + "</button>" +
      '<button type="button" class="gal-lb__prev" aria-label="Previous">' + ICON.prev + "</button>" +
      '<figure class="gal-lb__fig"><div class="gal-lb__media"></div><figcaption></figcaption></figure>' +
      '<button type="button" class="gal-lb__next" aria-label="Next">' + ICON.next + "</button>";
    document.body.appendChild(box);
    media = box.querySelector(".gal-lb__media");
    caption = box.querySelector("figcaption");
    closeBtn = box.querySelector(".gal-lb__close");

    closeBtn.addEventListener("click", close);
    box.querySelector(".gal-lb__prev").addEventListener("click", function () { step(-1); });
    box.querySelector(".gal-lb__next").addEventListener("click", function () { step(1); });
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", onKey);
  }

  function clearMedia() {
    var v = media.querySelector("video");
    if (v) { v.pause(); v.removeAttribute("src"); v.load(); }
    media.innerHTML = "";
  }

  function show(i) {
    index = (i + items.length) % items.length;
    var el = items[index];
    clearMedia();
    if (el.dataset.type === "video") {
      var v = document.createElement("video");
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      v.setAttribute("playsinline", "");
      if (el.dataset.poster) v.poster = el.dataset.poster;
      v.src = el.dataset.src;
      media.appendChild(v);
    } else {
      var img = document.createElement("img");
      img.src = el.dataset.src;
      img.alt = el.dataset.caption || "";
      media.appendChild(img);
    }
    caption.textContent = el.dataset.caption || "";
    var multi = items.length > 1;
    box.querySelector(".gal-lb__prev").style.display = multi ? "" : "none";
    box.querySelector(".gal-lb__next").style.display = multi ? "" : "none";
  }

  function open(el) {
    var group = el.closest("[data-lightbox-group]") || document;
    items = Array.prototype.filter.call(
      group.querySelectorAll("[data-lightbox]"),
      function (n) { return !n.hidden; }
    );
    lastFocus = el;
    box.hidden = false;
    document.body.style.overflow = "hidden";
    show(items.indexOf(el));
    closeBtn.focus();
  }

  function close() {
    box.hidden = true;
    clearMedia();
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  function step(d) { show(index + d); }

  function onKey(e) {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "Tab") {
      var f = box.querySelectorAll("button, video");
      var vis = Array.prototype.filter.call(f, function (n) { return n.style.display !== "none"; });
      var first = vis[0], last = vis[vis.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  function initFilters() {
    var bar = document.querySelector(".gal-filters");
    if (!bar) return;
    var tiles = document.querySelectorAll(".gal-grid [data-cat]");
    var count = document.getElementById("galCount");
    bar.addEventListener("click", function (e) {
      var chip = e.target.closest("[data-filter]");
      if (!chip) return;
      var f = chip.dataset.filter, shown = 0;
      bar.querySelectorAll("[data-filter]").forEach(function (c) {
        c.setAttribute("aria-pressed", c === chip ? "true" : "false");
      });
      tiles.forEach(function (t) {
        var ok = f === "all" || t.dataset.cat === f;
        t.hidden = !ok;
        if (ok) shown++;
      });
      if (count) count.textContent = shown + (shown === 1 ? " item" : " items");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    build();
    document.addEventListener("click", function (e) {
      var el = e.target.closest("[data-lightbox]");
      if (el) { e.preventDefault(); open(el); }
    });
    initFilters();
  });
})();
