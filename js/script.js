// Menu toggle para mobile
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
    header.style.backdropFilter = "blur(25px)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.backdropFilter = "blur(20px)";
  }
});

// Animação de entrada dos elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Aplicar animação aos cards e itens da galeria
document
  .querySelectorAll(".card, .gallery-item, .contact-item")
  .forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(item);
  });
