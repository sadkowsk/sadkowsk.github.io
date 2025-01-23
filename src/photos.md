---
layout: layout.njk
title: Photos
permalink: photos.html
---

<h1>Formative places and moments</h1>

<div class="photos-container">
  <!-- Experience 1 -->
  <div class="photo-entry" data-collection="/assets/photos/2013_dharamsala">
      <div class="photo-info">
          <h2>(2013) Himachal Pradesh, India</h2>
          <p>More soon.</p>
      </div>
      <div class="photo-grid">
          <!-- The grid will be populated dynamically -->
      </div>
  </div>

  <!-- Experience 2 -->
  <div class="photo-entry" data-collection="/assets/photos/2012_tanzania">
      <div class="photo-info">
          <h2>(2012) Arusha and Morogoro, Tanzania</h2>
          <p>More soon.</p>
      </div>
      <div class="photo-grid">
          <!-- The grid will be populated dynamically -->
      </div>
  </div>
</div>

{% if page.url == "/photos.html" %}
  <script src="/assets/features/photos.js"></script>
{% endif %}
