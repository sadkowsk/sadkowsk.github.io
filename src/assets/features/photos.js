document.addEventListener("DOMContentLoaded", function () {
    console.log("Photos.js loaded");

    const photoEntries = document.querySelectorAll(".photo-entry");

    photoEntries.forEach(entry => {
        const collectionName = entry.dataset.collection;
        console.log("Processing collection:", collectionName);

        const photoGrid = entry.querySelector(".photo-grid");
        if (!photoGrid) {
            console.error("Photo grid not found for collection:", collectionName);
            return;
        }

        fetch(`${collectionName}/index.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${collectionName}/index.json`);
                }
                console.log(`Fetched ${collectionName}/index.json successfully`);
                return response.json();
            })
            .then(images => {
                console.log(`Images fetched for ${collectionName}:`, images);
                const shuffled = images.sort(() => 0.5 - Math.random());
                shuffled.slice(0, 8).forEach(image => {
                    console.log(`Adding thumbnail: ${collectionName}/thumbs/${image}`);
                    const thumbnail = document.createElement("a");
                    thumbnail.href = `${collectionName}/${image}`;
                    thumbnail.classList.add("lightbox");
                    thumbnail.innerHTML = `
                        <img src="${collectionName}/thumbs/${image}" alt="Thumbnail">
                    `;
                    photoGrid.appendChild(thumbnail);
                });
            })
            .catch(error => {
                console.error(`Error loading thumbnails for ${collectionName}:`, error);

                // Add error message
                const errorMessage = document.createElement("p");
                errorMessage.textContent = "Failed to load thumbnails.";
                errorMessage.classList.add("photo-grid-error");
                photoGrid.appendChild(errorMessage);
            });
    });

    // Lightbox functionality
    const lightboxOverlay = document.createElement("div");
    lightboxOverlay.className = "lightbox-overlay";

    const lightboxImage = document.createElement("img");
    lightboxImage.className = "lightbox-image";

    // Close button
    const closeButton = document.createElement("button");
    closeButton.className = "lightbox-close";
    closeButton.innerHTML = "&times;"; // "x" symbol

    // Left navigation arrow
    const leftArrow = document.createElement("button");
    leftArrow.className = "lightbox-arrow left";
    leftArrow.innerHTML = "&lsaquo;"; // Leftward triangle

    // Right navigation arrow
    const rightArrow = document.createElement("button");
    rightArrow.className = "lightbox-arrow right";
    rightArrow.innerHTML = "&rsaquo;"; // Rightward triangle

    // Append elements to the overlay
    lightboxOverlay.appendChild(lightboxImage);
    lightboxOverlay.appendChild(closeButton);
    lightboxOverlay.appendChild(leftArrow);
    lightboxOverlay.appendChild(rightArrow);

    document.body.appendChild(lightboxOverlay);

    let currentImageIndex = 0; // Track the current image index
    let images = []; // Store the list of images for navigation

    // Open the lightbox
    document.addEventListener("click", function (event) {
        const clickedElement = event.target.closest(".lightbox");
        if (clickedElement) {
            event.preventDefault();
            const collection = clickedElement.closest(".photo-grid");
            images = Array.from(collection.querySelectorAll(".lightbox")).map(
                (link) => link.href
            );
            currentImageIndex = images.indexOf(clickedElement.href);
            lightboxImage.src = clickedElement.href;
            lightboxOverlay.classList.add("active");
        }
    });

    // Close the lightbox
    function closeLightbox() {
        lightboxOverlay.classList.remove("active");
    }

    closeButton.addEventListener("click", closeLightbox);

    // Navigate to the previous image
    leftArrow.addEventListener("click", function () {
        navigateToImage(-1);
    });

    // Navigate to the next image
    rightArrow.addEventListener("click", function () {
        navigateToImage(1);
    });

    // Close the lightbox when clicking outside the image
    lightboxOverlay.addEventListener("click", function (event) {
        if (event.target === lightboxOverlay) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener("keydown", function (event) {
        if (lightboxOverlay.classList.contains("active")) {
            if (event.key === "ArrowLeft") {
                navigateToImage(-1); // Left arrow key
            } else if (event.key === "ArrowRight") {
                navigateToImage(1); // Right arrow key
            } else if (event.key === "Escape") {
                closeLightbox(); // Escape key to close
            }
        }
    });

    // Function to navigate images
    function navigateToImage(direction) {
        currentImageIndex =
            (currentImageIndex + direction + images.length) % images.length;
        lightboxImage.src = images[currentImageIndex];
    }
});
