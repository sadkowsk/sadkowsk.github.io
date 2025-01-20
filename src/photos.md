---
layout: layout.njk
title: Photos
permalink: photos.html
---

<h1>Defining Places and Moments</h1>

<div class="photos-container">
  <!-- Experience 1 -->
  <div class="photo-entry">
    <div class="photo-info">
      <h2>Experience Title 1</h2>
      <p>This is a brief description or caption for Experience 1.</p>
    </div>
    <div class="photo-grid">
      <!-- Placeholder Images -->
      <a href="/assets/images/placeholder1.jpg" class="lightbox">
        <img src="/assets/images/placeholder1-thumb.jpg" alt="Placeholder 1">
      </a>
      <a href="/assets/images/placeholder2.jpg" class="lightbox">
        <img src="/assets/images/placeholder2-thumb.jpg" alt="Placeholder 2">
      </a>
      <a href="/assets/images/placeholder3.jpg" class="lightbox">
        <img src="/assets/images/placeholder3-thumb.jpg" alt="Placeholder 3">
      </a>
      <a href="/assets/images/placeholder4.jpg" class="lightbox">
        <img src="/assets/images/placeholder4-thumb.jpg" alt="Placeholder 4">
      </a>
      <a href="/assets/images/placeholder5.jpg" class="lightbox">
        <img src="/assets/images/placeholder5-thumb.jpg" alt="Placeholder 5">
      </a>
      <a href="/assets/images/placeholder6.jpg" class="lightbox">
        <img src="/assets/images/placeholder6-thumb.jpg" alt="Placeholder 6">
      </a>
      <a href="/assets/images/placeholder7.jpg" class="lightbox">
        <img src="/assets/images/placeholder7-thumb.jpg" alt="Placeholder 7">
      </a>
      <a href="/assets/images/placeholder8.jpg" class="lightbox">
        <img src="/assets/images/placeholder8-thumb.jpg" alt="Placeholder 8">
      </a>
      <a href="/assets/images/placeholder9.jpg" class="lightbox">
        <img src="/assets/images/placeholder9-thumb.jpg" alt="Placeholder 9">
      </a>
    </div>
  </div>
</div>

{% if page.url == "/photos.html" %}
  <script src="/features/lightbox.js"></script>
{% endif %}
