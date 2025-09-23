document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".modal-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      const modal = document.querySelector(`[data-modal-id="${modalId}"]`);
      if (modal) {
        modal.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".modal-close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
      this.closest(".modal-container").classList.remove("show");
    });
  });

  document.querySelectorAll(".modal-container").forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.remove("show");
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-container.show").forEach((modal) => {
        modal.classList.remove("show");
      });
    }
  });
});
