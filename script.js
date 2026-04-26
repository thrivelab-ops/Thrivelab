const header = document.querySelector(".site-header");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

function handleHeaderScroll() {
  if (!header) return;
  if (window.scrollY > 16) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

handleHeaderScroll();
window.addEventListener("scroll", handleHeaderScroll);

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const sections = document.querySelectorAll(".reveal-section, .reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
);

sections.forEach((section) => revealObserver.observe(section));

const heroTitle = document.getElementById("heroTitle");
if (heroTitle) {
  const lines = heroTitle.querySelectorAll(".hero-line");
  let delayIndex = 0;

  lines.forEach((line) => {
    const text = line.textContent || "";
    const words = text.trim().split(/\s+/);
    line.textContent = "";

    words.forEach((word, idx) => {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = word + (idx < words.length - 1 ? "\u00A0" : "");
      span.style.animationDelay = `${delayIndex * 80}ms`;
      line.appendChild(span);
      delayIndex += 1;
    });
  });
}

if (window.lucide && typeof window.lucide.createIcons === "function") {
  window.lucide.createIcons();
}
