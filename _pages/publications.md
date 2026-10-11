---
layout: page
permalink: /publications/
title: Publications
description: Papers in reverse chronological order. <sup>†</sup> marks a student supervised or mentored by me. The complete list is on <a href="https://ui.adsabs.harvard.edu/search/q=author%3A%22Rana%2C%20Divya%22&sort=date%20desc">NASA ADS</a>.
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="bibliography-heading">Major contributions</h2>
{% bibliography --query @*[pubtype=main]* %}

<h2 class="bibliography-heading">LIGO–Virgo–KAGRA collaboration papers</h2>
<p>Selected papers co-authored as a member of the LIGO Scientific Collaboration.</p>
{% bibliography --query @*[pubtype=lvk]* %}

</div>
