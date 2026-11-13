---
layout: layout.njk
title: Photos
permalink: photos.html
templateEngineOverride: njk,md
---

<p class="photos-intro">
  These short albums bring together photographs that I took in places around the world where I lived and traveled. They capture some of the interactions, emotions, communities, identities, and initiatives that I am grateful to have experienced and that I choose to remember.
</p>

<style>
  .photo-album { margin-block: 2rem; }
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, min(100%, 135px));
    gap: 1rem;
  }
  .photo-grid > a {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    align-self: start;
    overflow: hidden;
  }
  .photo-grid > a > img {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    object-fit: cover;
  }
  .photo-grid > a:focus,
  .photo-grid > a:focus-visible {
    outline: none;
  }
  .photo-grid a img {
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }
  .photo-grid a img.is-loaded {
    opacity: 1;
  }
  @media (prefers-reduced-motion: reduce) {
    .photo-grid a img {
      transition: none;
    }
  }
</style>

<div id="photo-albums"></div>

<script>
  const albums = [
    // { title: "Place · Year", folder: "subfolder", manifest: "album-index.json"},
    // { title: "Xinjiang Autonomous Region, China · 2017", folder: "2017_xinjiang", manifest: "album-index.json", filesKey: "" },
    { title: "Shandong, China · 2017", folder: "2017_daqingshan", manifest: "album-index.json", filesKey: "" },
    // { title: "Multiple locations, Poland · 2014, 2015", folder: "2014-15_poland", manifest: "album-index.json", filesKey: "" },
    // { title: "Minsk, Belarus · 2014, 2015", folder: "2014-15_minsk", manifest: "album-index.json", filesKey: "" },
    { title: "Multiple locations, Senegal · 2014", folder: "2014_senegal", manifest: "album-index.json", filesKey: "" },
    { title: "Kyiv, Ukraine · 2014", folder: "2014_kyiv", manifest: "album-index.json", filesKey: "" },
    { title: "Jammu and Kashmir Union Territory, India · 2013", folder: "2013_kashmir", manifest: "album-index.json", filesKey: "" },
    { title: "Himachal Pradesh Province, India · 2013", folder: "2013_dharamsala", manifest: "album-index.json", filesKey: "" },
    { title: "Multiple locations, Tanzania · 2012", folder: "2012_tanzania", manifest: "album-index.json", filesKey: "" },
  ];

  async function renderAlbum(album, section) {
    const base = '/assets/photos/' + encodeURIComponent(album.folder) + '/';
    const response = await fetch(base + encodeURIComponent(album.manifest));
    if (!response.ok) throw new Error('Manifest request returned ' + response.status);

    const manifest = await response.json();
    const files = album.filesKey ? manifest[album.filesKey] : manifest;
    if (!Array.isArray(files) || files.some(file => typeof file !== 'string' || !file)) {
      throw new Error('Expected a JSON array of filenames, or an object with that array at filesKey.');
    }

    const grid = document.createElement('div');
    grid.className = 'photo-grid';
    for (const [index, file] of files.entries()) {
      const url = base + encodeURIComponent(file);
      const link = document.createElement('a');
      link.href = url;
      const image = document.createElement('img');
      image.addEventListener('load', async () => {
        try {
          await image.decode();
        } catch {
        }
        requestAnimationFrame(() => {
          requestAnimationFrame(() => image.classList.add('is-loaded'));
        });
      }, { once: true });
      image.addEventListener('error', () => {
        image.classList.add('is-loaded');
      }, { once: true });
      image.src = url;
      image.alt = album.title + ' — photo ' + (index + 1);
      image.loading = 'lazy';
      link.append(image);
      grid.append(link);
    }
    section.append(grid);
  }

  const gallery = document.querySelector('#photo-albums');
  for (const album of albums) {
    const section = document.createElement('section');
    section.className = 'photo-album';
    const heading = document.createElement('h2');
    heading.textContent = album.title;
    section.append(heading);
    gallery.append(section);

    renderAlbum(album, section).catch(error => {
      const message = document.createElement('p');
      message.textContent = 'Could not load this album.';
      section.append(message);
      console.error(album.title, error);
    });
  }
</script>

{% include "photo-lightbox.njk" %}