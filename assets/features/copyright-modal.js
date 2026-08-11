(() => {
  const overlay = document.getElementById("copyright-modal");
  const openButton = document.querySelector(".copyright-info-button");
  const closeButton = overlay?.querySelector(".copyright-modal-close");
  const dialog = overlay?.querySelector(".copyright-modal");

  if (!overlay || !openButton || !closeButton || !dialog) {
    return;
  }

  let previouslyFocusedElement = null;

  const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(",");

  const getFocusableElements = () =>
    Array.from(dialog.querySelectorAll(focusableSelector));

  const openModal = () => {
    previouslyFocusedElement = document.activeElement;
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    closeButton.focus();
  };

  const closeModal = () => {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (previouslyFocusedElement instanceof HTMLElement) {
      previouslyFocusedElement.focus();
    }
  };

  const trapFocus = (event) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = getFocusableElements();

    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  openButton.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });

  overlay.addEventListener("keydown", trapFocus);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("active")) {
      closeModal();
    }
  });
})();
