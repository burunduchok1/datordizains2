// script.js
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});
