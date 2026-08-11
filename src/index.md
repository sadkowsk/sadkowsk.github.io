---
layout: layout.njk
title: About
permalink: index.html
---

<div class="about-container">
  <div class="about-text">
    <div class="about-main">
      <h1>Welcome to my narrative portfolio.</h1>
      <p>
        <b>If you wish to understand me better—in a workplace or academic environment, or otherwise—then I welcome you to look around.</b>
      </p>
      <p>
        This is the humanizing counterpart to my professional portfolio. Elsewhere, my LinkedIn profile and resume pack my experiences and education into entries tailored for automated systems and constrained interactions; here, I unpack how the same experiences and education have shaped me as a real person, and vice versa.
      </p>
      <p>
        I created this space to do what I feel I cannot elsewhere: properly introduce myself. By highlighting my personal traits and their sources, I can explain how I work, as well as why my work appears as it does—forming a far more durable and illuminating self-portrayal that coexists with my more refined professional materials.
      </p>
      <p style="margin-bottom: 4px;">
        For now, my narrative portfolio includes the following sections, in navigation menu order:
      </p>
      <ul class="page-list">
        <li><a class="about-nav-link page-row" href="/" aria-current="page"><span>About:</span> <span class="page-equation">welcome + intent</span></a></li>
        <li><a class="about-nav-link page-row" href="/bio.html"><span>Bio:</span> <span class="page-equation">background + identity + free time</span></a></li>
        <li><a class="about-nav-link page-row" href="/projects.html"><span>Projects:</span> <span class="page-equation">sampled favorites</span></a></li>
        <li><a class="about-nav-link page-row" href="/values.html"><span>Values:</span> <span class="page-equation">ideals + goals + character</span></a></li>
        <li><a class="about-nav-link page-row" href="/photos.html"><span>Photos:</span> <span class="page-equation">related memories</span></a></li>
      </ul>
    </div>
  </div>
  <figure class="about-photo">
    <img src="/assets/images/headshot.jpg" alt="Headshot of Karol Sadkowski">
    <figcaption>At the Grinnell College Conard Environmental Research Area (CERA), 2026.</figcaption>
  </figure>
</div>
<style>
  .about-text {
    display: flex;
    flex-direction: column;
    align-self: stretch;
  }
  .page-list {
    margin-top: 0;
    list-style: none;
    padding-left: 40px;
  }
  .page-row {
    display: inline-grid;
    grid-template-columns: 75px auto;
    column-gap: 12px;
    align-items: baseline;
    font-size: 0.95rem;
    color: inherit;
  }
  .page-equation {
    font-family: inherit;
    font-style: italic;
    font-size: 0.9rem;
    color: #555555;
  }
  /* Normal row hover */
  .page-row:hover {
    color: #ffd166;
  }
  /* Navbar hover highlights matching row */
  body:has(.site-header nav a[href="/"]:hover)
  .page-row[href="/"],
  body:has(.site-header nav a[href="/bio.html"]:hover)
  .page-row[href="/bio.html"],
  body:has(.site-header nav a[href="/projects.html"]:hover)
  .page-row[href="/projects.html"],
  body:has(.site-header nav a[href="/values.html"]:hover)
  .page-row[href="/values.html"],
  body:has(.site-header nav a[href="/photos.html"]:hover)
  .page-row[href="/photos.html"] {
    color: #ffd166;
  }
  /* Row hover highlights matching navbar button */
  body:has(.page-row[href="/"]:hover)
  .site-header nav a[href="/"],
  body:has(.page-row[href="/bio.html"]:hover)
  .site-header nav a[href="/bio.html"],
  body:has(.page-row[href="/projects.html"]:hover)
  .site-header nav a[href="/projects.html"],
  body:has(.page-row[href="/values.html"]:hover)
  .site-header nav a[href="/values.html"],
  body:has(.page-row[href="/photos.html"]:hover)
  .site-header nav a[href="/photos.html"] {
    color: #ffd166;
  }
  .about-footnote {
    margin-top: auto;
    margin-bottom: 0;
    line-height: 1.15;
  }
</style>