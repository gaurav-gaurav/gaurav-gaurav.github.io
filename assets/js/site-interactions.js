/* ---------------------------------------------------------------------------
 * Site interactions
 * ---------------------------------------------------------------------------
 * Progressive enhancement only: every feature here checks for its hook and
 * for `prefers-reduced-motion` before doing anything. With JS disabled the
 * page renders fully — the `gc-js` class on <html> is what un-hides the
 * reveal-on-scroll elements.
 * ------------------------------------------------------------------------- */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  /* -------------------------------------------------- reveal on scroll */

  function initReveal() {
    var items = document.querySelectorAll(".gc-reveal");
    if (!items.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add("is-visible");
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    items.forEach(function (el, index) {
      // Stagger siblings so a grid cascades rather than popping in at once.
      if (!el.style.getPropertyValue("--reveal-delay")) {
        var siblingIndex = Array.prototype.indexOf.call(el.parentNode.children, el);
        el.style.setProperty("--reveal-delay", Math.min(siblingIndex, 6) * 70 + "ms");
      }
      observer.observe(el);
    });
  }

  /* ------------------------------------------------ scroll progress bar */

  function initProgress() {
    var bar = document.getElementById("gc-progress");
    var navbar = document.querySelector(".navbar");
    if (!bar && !navbar) return;

    var ticking = false;

    function update() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (bar) {
        var height = document.documentElement.scrollHeight - window.innerHeight;
        var ratio = height > 0 ? Math.min(scrollTop / height, 1) : 0;
        bar.style.transform = "scaleX(" + ratio + ")";
      }
      if (navbar) {
        navbar.classList.toggle("gc-navbar--scrolled", scrollTop > 8);
      }
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(update);
      },
      { passive: true }
    );
    update();
  }

  /* --------------------------------------------- card cursor highlight */

  function initCardSheen() {
    if (reduceMotion) return;
    var cards = document.querySelectorAll(".gc-card");
    if (!cards.length) return;
    // Skip on touch-primary devices, where there is no cursor to follow.
    if (window.matchMedia && !window.matchMedia("(hover: hover)").matches) return;

    cards.forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", ((event.clientX - rect.left) / rect.width) * 100 + "%");
        card.style.setProperty("--my", ((event.clientY - rect.top) / rect.height) * 100 + "%");
      });
    });
  }

  /* ------------------------------------------------ rotating hero word */

  function initRotator() {
    var host = document.querySelector("[data-gc-rotate]");
    if (!host) return;

    var words = (host.getAttribute("data-gc-rotate") || "")
      .split("|")
      .map(function (w) {
        return w.trim();
      })
      .filter(Boolean);
    if (words.length < 2 || reduceMotion) return;

    var index = 0;
    // Reserve the width of the longest word so the line never reflows.
    host.style.minWidth =
      words.reduce(function (max, w) {
        return Math.max(max, w.length);
      }, 0) +
      0.5 +
      "ch";

    setInterval(function () {
      index = (index + 1) % words.length;
      host.innerHTML = '<span class="gc-rotator__word">' + words[index] + "</span>";
    }, 2600);
  }

  /* ------------------------------------------------- counting up stats */

  function initCounters() {
    var counters = document.querySelectorAll("[data-gc-count]");
    if (!counters.length) return;

    function run(el) {
      var target = parseFloat(el.getAttribute("data-gc-count"));
      var suffix = el.getAttribute("data-gc-suffix") || "";
      if (isNaN(target)) return;
      if (reduceMotion) {
        el.textContent = target + suffix;
        return;
      }

      var duration = 1100;
      var start = null;

      function step(timestamp) {
        if (start === null) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        // easeOutCubic
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + (progress === 1 ? suffix : "");
        if (progress < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) {
      counters.forEach(run);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          run(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --------------------------------------------- publication filtering */

  function initPublicationFilters() {
    var bar = document.querySelector("[data-gc-filters]");
    if (!bar) return;

    var scope = document.querySelector(".publications");
    if (!scope) return;

    var entries = Array.prototype.slice.call(scope.querySelectorAll("ol.bibliography > li"));
    if (!entries.length) {
      bar.style.display = "none";
      return;
    }

    // Derive a venue key per entry from the `abbr` badge the theme renders,
    // falling back to the periodical text.
    entries.forEach(function (li) {
      var badge = li.querySelector(".abbr abbr, .abbr, abbr");
      var label = badge ? badge.textContent : "";
      if (!label) {
        var periodical = li.querySelector(".periodical");
        label = periodical ? periodical.textContent : "";
      }
      li.setAttribute("data-gc-venue", label.trim().toLowerCase());
    });

    var buttons = Array.prototype.slice.call(bar.querySelectorAll(".gc-filter"));
    var empty = document.querySelector("[data-gc-filters-empty]");

    // Annotate each button with how many entries it matches, and drop the
    // ones that match nothing so the bar never lies.
    buttons.forEach(function (button) {
      var key = (button.getAttribute("data-gc-filter") || "").toLowerCase();
      var count =
        key === "all"
          ? entries.length
          : entries.filter(function (li) {
              return li.getAttribute("data-gc-venue").indexOf(key) !== -1;
            }).length;

      if (count === 0 && key !== "all") {
        button.remove();
        return;
      }
      var counter = document.createElement("span");
      counter.className = "gc-filter__count";
      counter.textContent = count;
      button.appendChild(counter);
    });

    bar.addEventListener("click", function (event) {
      var button = event.target.closest ? event.target.closest(".gc-filter") : null;
      if (!button) return;

      var key = (button.getAttribute("data-gc-filter") || "all").toLowerCase();

      bar.querySelectorAll(".gc-filter").forEach(function (other) {
        other.setAttribute("aria-pressed", String(other === button));
      });

      var shown = 0;
      entries.forEach(function (li) {
        var match = key === "all" || li.getAttribute("data-gc-venue").indexOf(key) !== -1;
        li.classList.toggle("gc-hidden", !match);
        if (match) shown++;
      });

      // Hide year headings that no longer have any visible entry under them.
      scope.querySelectorAll("h2.bibliography").forEach(function (heading) {
        var list = heading.nextElementSibling;
        while (list && list.tagName !== "OL") list = list.nextElementSibling;
        if (!list) return;
        var visible = Array.prototype.some.call(list.children, function (li) {
          return !li.classList.contains("gc-hidden");
        });
        heading.classList.toggle("gc-hidden", !visible);
      });

      if (empty) empty.style.display = shown === 0 ? "block" : "none";
    });
  }

  /* ------------------------------------------------------- hero canvas */

  /* A slowly drifting graph of nodes with a single brighter "agent" that
   * hops between them, leaving a short trail — a quiet nod to an RL agent
   * exploring a state graph. Purely decorative and aria-hidden. */
  function initHeroCanvas() {
    var canvas = document.querySelector(".gc-hero__canvas");
    if (!canvas) return;
    if (reduceMotion) {
      canvas.style.display = "none";
      return;
    }

    var ctx = canvas.getContext && canvas.getContext("2d");
    if (!ctx) return;

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var width = 0;
    var height = 0;
    var nodes = [];
    var agent = { from: 0, to: 1, t: 0, x: 0, y: 0 };
    var trail = [];
    var running = true;
    var LINK_DISTANCE = 130;

    function palette() {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      return dark
        ? { node: "139, 140, 249", link: "139, 140, 249", agent: "56, 219, 240" }
        : { node: "79, 70, 229", link: "79, 70, 229", agent: "8, 145, 178" };
    }

    function resize() {
      var rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (!width || !height) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      var count = Math.max(14, Math.min(34, Math.round(width / 34)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.14,
          vy: (Math.random() - 0.5) * 0.14,
          r: 1.1 + Math.random() * 1.5
        });
      }
      agent = { from: 0, to: 1 % nodes.length, t: 0, x: nodes[0].x, y: nodes[0].y };
      trail = [];
    }

    function nextTarget() {
      // Prefer a nearby node so the agent's path reads as graph traversal.
      var current = nodes[agent.to];
      var candidates = [];
      for (var i = 0; i < nodes.length; i++) {
        if (i === agent.to) continue;
        var dx = nodes[i].x - current.x;
        var dy = nodes[i].y - current.y;
        if (dx * dx + dy * dy < LINK_DISTANCE * LINK_DISTANCE * 2.2) candidates.push(i);
      }
      if (!candidates.length) {
        return Math.floor(Math.random() * nodes.length);
      }
      return candidates[Math.floor(Math.random() * candidates.length)];
    }

    function frame() {
      if (!running) return;
      window.requestAnimationFrame(frame);
      if (!width || !height || !nodes.length) return;

      var colors = palette();
      ctx.clearRect(0, 0, width, height);

      // Drift, bouncing off the edges.
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // Edges, faded by distance.
      ctx.lineWidth = 1;
      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var dx = nodes[a].x - nodes[b].x;
          var dy = nodes[a].y - nodes[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > LINK_DISTANCE) continue;
          ctx.strokeStyle =
            "rgba(" + colors.link + "," + (0.16 * (1 - dist / LINK_DISTANCE)).toFixed(3) + ")";
          ctx.beginPath();
          ctx.moveTo(nodes[a].x, nodes[a].y);
          ctx.lineTo(nodes[b].x, nodes[b].y);
          ctx.stroke();
        }
      }

      // Nodes.
      for (var k = 0; k < nodes.length; k++) {
        ctx.fillStyle = "rgba(" + colors.node + ",0.4)";
        ctx.beginPath();
        ctx.arc(nodes[k].x, nodes[k].y, nodes[k].r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Agent: ease between two nodes, then pick the next hop.
      agent.t += 0.011;
      if (agent.t >= 1) {
        agent.t = 0;
        agent.from = agent.to;
        agent.to = nextTarget();
      }
      var p = nodes[agent.from];
      var q = nodes[agent.to];
      var eased = agent.t < 0.5 ? 2 * agent.t * agent.t : 1 - Math.pow(-2 * agent.t + 2, 2) / 2;
      agent.x = p.x + (q.x - p.x) * eased;
      agent.y = p.y + (q.y - p.y) * eased;

      trail.push({ x: agent.x, y: agent.y });
      if (trail.length > 46) trail.shift();

      ctx.lineWidth = 1.6;
      for (var t = 1; t < trail.length; t++) {
        ctx.strokeStyle = "rgba(" + colors.agent + "," + ((t / trail.length) * 0.5).toFixed(3) + ")";
        ctx.beginPath();
        ctx.moveTo(trail[t - 1].x, trail[t - 1].y);
        ctx.lineTo(trail[t].x, trail[t].y);
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(" + colors.agent + ",0.95)";
      ctx.beginPath();
      ctx.arc(agent.x, agent.y, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(" + colors.agent + ",0.18)";
      ctx.beginPath();
      ctx.arc(agent.x, agent.y, 9, 0, Math.PI * 2);
      ctx.fill();
    }

    function start() {
      resize();
      if (!width || !height) return;
      seed();
      frame();
    }

    var resizeTimer = null;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
        seed();
      }, 180);
    });

    // Stop painting while the tab is hidden.
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        running = false;
      } else if (!running) {
        running = true;
        frame();
      }
    });

    start();
  }

  /* ----------------------------------------------------------- bootstrap */

  function init() {
    document.documentElement.classList.add("gc-js");
    initReveal();
    initProgress();
    initCardSheen();
    initRotator();
    initCounters();
    initPublicationFilters();
    initHeroCanvas();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
