---
layout: page
permalink: /publications/
title: publications
description: Reinforcement learning, robot manipulation, and embodied AI.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="gc-prose" style="max-width: 42rem">
  <p>
    Grouped by year, newest first. Use the filters to narrow by venue, or the
    search box to look inside titles and abstracts.
    A full list is also on
    <a href="https://scholar.google.com/citations?user=YSWeJo0AAAAJ" target="_blank" rel="noopener">Google Scholar</a>.
  </p>
</div>

<!-- Venue filters (progressive enhancement: hidden without JS, and any
     filter matching zero entries removes itself at runtime). -->
<div class="gc-filters" data-gc-filters role="group" aria-label="Filter publications by venue">
  <button class="gc-filter" type="button" data-gc-filter="all" aria-pressed="true">All</button>
  <button class="gc-filter" type="button" data-gc-filter="tmlr" aria-pressed="false">TMLR</button>
  <button class="gc-filter" type="button" data-gc-filter="aamas" aria-pressed="false">AAMAS</button>
  <button class="gc-filter" type="button" data-gc-filter="icassp" aria-pressed="false">ICASSP</button>
  <button class="gc-filter" type="button" data-gc-filter="irc" aria-pressed="false">IEEE IRC</button>
  <button class="gc-filter" type="button" data-gc-filter="arxiv" aria-pressed="false">arXiv</button>
  <button class="gc-filter" type="button" data-gc-filter="preprint" aria-pressed="false">Preprint</button>
</div>

<p class="gc-filters__empty" data-gc-filters-empty>No publications match that filter.</p>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
