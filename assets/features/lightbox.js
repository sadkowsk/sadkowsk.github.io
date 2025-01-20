document.addEventListener("DOMContentLoaded", function () {
    const lightboxLinks = document.querySelectorAll(".lightbox");
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    document.body.appendChild(overlay);

    const lightboxImage = document.createElement("img");
    overlay.appendChild(lightboxImage);

    lightboxLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            lightboxImage.src = this.href;
            overlay.classList.add("active");
        });
    });

    overlay.addEventListener("click", function () {
        overlay.classList.remove("active");
    });
});
