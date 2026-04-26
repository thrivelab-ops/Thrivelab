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

const faqItems = document.querySelectorAll(".faq-premium-item");
faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-premium-btn");
  btn.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    faqItems.forEach((i) => i.classList.remove("active"));
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

if (window.lucide && typeof window.lucide.createIcons === "function") {
  window.lucide.createIcons();
}

// Exit Intent Popup Logic
const exitPopup = document.getElementById("exitPopup");
const closeExitPopup = document.getElementById("closeExitPopup");
const exitForm = document.getElementById("exitIntentForm");

let popupShown = sessionStorage.getItem("exitPopupShown");

function showPopup() {
  if (!popupShown && exitPopup) {
    exitPopup.classList.add("show");
    exitPopup.setAttribute("aria-hidden", "false");
    popupShown = "true";
    sessionStorage.setItem("exitPopupShown", "true");
  }
}

// Trigger: Mouse leave (Desktop)
document.addEventListener("mouseleave", (e) => {
  if (e.clientY <= 0) {
    showPopup();
  }
});

// Trigger: Inactivity (Mobile/General)
let inactivityTimer = setTimeout(showPopup, 40000);

document.addEventListener("touchstart", () => {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(showPopup, 40000);
});

// Close logic
if (closeExitPopup) {
  closeExitPopup.addEventListener("click", () => {
    exitPopup.classList.remove("show");
    exitPopup.setAttribute("aria-hidden", "true");
  });
}

// Submission
if (exitForm) {
  exitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("exitEmail").value;
    // Redirect to the existing Google Form link
    // We could potentially pre-fill the email if we had the entry ID
    window.open(`https://docs.google.com/forms/d/e/1FAIpQLSfGMRppIDrNSxMFimTY36i_5dtEatN3WIS1Sr7OMrAQPfGAdA/viewform?usp=dialog`, "_blank");
    exitPopup.classList.remove("show");
    exitPopup.setAttribute("aria-hidden", "true");
  });
}
