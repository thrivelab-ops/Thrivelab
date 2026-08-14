/**
 * THRIVELAB — Studio Exhibition & Portfolio Script
 * Phase 3: Digital Design Exhibition & Live Preview System
 * Handles 4 distinct featured exhibition compositions, inline frame toggles,
 * iframe loading fallbacks, gallery filtering, and modal previews.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Header Scroll Blur
  const header = document.querySelector(".site-header");
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  handleHeaderScroll();
  window.addEventListener("scroll", handleHeaderScroll);

  // 2. Mobile Navigation Toggle
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      menuToggle.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. Render Digital Design Exhibition (4 Art-Directed Compositions)
  const featuredContainer = document.getElementById("featuredShowcaseContainer");
  if (featuredContainer && typeof THRIVELAB_FEATURED_PROJECTS !== "undefined") {
    const [salonz, dnd, deStudio, tbc] = THRIVELAB_FEATURED_PROJECTS;

    function renderViewportHTML(project) {
      const displayDomain = project.url.replace("https://", "").replace("/", "");
      return `
        <div class="showcase-viewport">
          <div class="viewport-chrome">
            <span class="chrome-dot"></span>
            <span class="chrome-dot"></span>
            <span class="chrome-dot"></span>
            <span class="chrome-url">${displayDomain}</span>
          </div>
          <div class="viewport-canvas">
            <div class="iframe-skeleton" id="skeleton-${project.id}">
              <div class="skeleton-spinner"></div>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">LOADING LIVE PREVIEW</span>
            </div>
            <div class="frame-holder desktop" id="frameHolder-${project.id}">
              <iframe class="project-iframe" id="iframe-${project.id}" src="${project.url}" title="${project.title} Live Preview" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      `;
    }

    let exhibitionHTML = '<div class="exhibition-wrapper">';

    // COMPOSITION 01: SALONZ — HERO CENTRED EXHIBITION
    if (salonz) {
      exhibitionHTML += `
        <article class="project-showcase showcase-hero-layout reveal" id="showcase-${salonz.id}">
          <div class="showcase-hero-header">
            <div>
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <span class="showcase-num-tag">01 / 04</span>
                <span class="showcase-category-badge">${salonz.category}</span>
              </div>
              <h3 class="showcase-title-lg">${salonz.title}</h3>
              <p style="font-size: 1.125rem; color: var(--text-secondary); margin-top: 8px; font-weight: 300;">"${salonz.tagline}"</p>
            </div>
            <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
              <div class="frame-toggle">
                <button class="toggle-btn active" data-id="${salonz.id}" data-mode="desktop">DESKTOP</button>
                <button class="toggle-btn" data-id="${salonz.id}" data-mode="mobile">MOBILE</button>
              </div>
              <a href="${salonz.url}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                VIEW LIVE SITE ↗
              </a>
            </div>
          </div>
          <p style="font-size: 0.9375rem; color: var(--text-secondary); max-width: 780px; line-height: 1.6;">${salonz.description}</p>
          ${renderViewportHTML(salonz)}
        </article>
      `;
    }

    // COMPOSITION 02: DND SALON — ASYMMETRICAL SPLIT EXHIBITION
    if (dnd) {
      exhibitionHTML += `
        <article class="project-showcase showcase-split-layout reveal" id="showcase-${dnd.id}">
          <div class="showcase-split-info">
            <span class="showcase-num-tag">02 / 04</span>
            <span class="showcase-category-badge" style="align-self: flex-start;">${dnd.category}</span>
            <h3 style="font-size: 2.5rem; font-weight: 800; letter-spacing: -0.03em;">${dnd.title}</h3>
            <p style="font-size: 1rem; color: var(--text-secondary); font-style: italic;">"${dnd.tagline}"</p>
            <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">${dnd.description}</p>
            <p class="showcase-services-text">${dnd.services}</p>
            <div style="display: flex; align-items: center; gap: 12px; margin-top: 12px; flex-wrap: wrap;">
              <div class="frame-toggle">
                <button class="toggle-btn active" data-id="${dnd.id}" data-mode="desktop">DESKTOP</button>
                <button class="toggle-btn" data-id="${dnd.id}" data-mode="mobile">MOBILE</button>
              </div>
              <a href="${dnd.url}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">
                VIEW LIVE SITE ↗
              </a>
            </div>
          </div>
          ${renderViewportHTML(dnd)}
        </article>
      `;
    }

    // COMPOSITION 03: DE STUDIO — IMAGE-LED GALLERY EXHIBITION
    if (deStudio) {
      exhibitionHTML += `
        <article class="project-showcase showcase-gallery-layout reveal" id="showcase-${deStudio.id}">
          <div class="showcase-gallery-meta">
            <div>
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                <span class="showcase-num-tag">03 / 04</span>
                <span class="showcase-category-badge">${deStudio.category}</span>
              </div>
              <h3 style="font-size: 2.75rem; font-weight: 800; letter-spacing: -0.03em;">${deStudio.title}</h3>
              <p style="font-size: 1rem; color: var(--text-secondary); margin-top: 4px;">"${deStudio.tagline}"</p>
            </div>
            <div style="display: flex; align-items: center; gap: 16px;">
              <div class="frame-toggle">
                <button class="toggle-btn active" data-id="${deStudio.id}" data-mode="desktop">DESKTOP</button>
                <button class="toggle-btn" data-id="${deStudio.id}" data-mode="mobile">MOBILE</button>
              </div>
              <a href="${deStudio.url}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">
                VIEW LIVE SITE ↗
              </a>
            </div>
          </div>
          ${renderViewportHTML(deStudio)}
        </article>
      `;
    }

    // COMPOSITION 04: THE BARBER CLUB (TBC) — ARCHITECTURAL FRAMED EXHIBITION
    if (tbc) {
      exhibitionHTML += `
        <article class="project-showcase showcase-architectural-layout reveal" id="showcase-${tbc.id}">
          <div class="showcase-architectural-header">
            <div>
              <span class="showcase-num-tag">04 / 04 — ${tbc.category}</span>
              <h3 style="font-size: 2.25rem; font-weight: 800; letter-spacing: -0.03em; margin-top: 4px;">${tbc.title}</h3>
              <p style="font-size: 0.9375rem; color: var(--text-secondary); margin-top: 4px;">"${tbc.tagline}"</p>
            </div>
            <div style="display: flex; align-items: center; gap: 14px;">
              <div class="frame-toggle">
                <button class="toggle-btn active" data-id="${tbc.id}" data-mode="desktop">DESKTOP</button>
                <button class="toggle-btn" data-id="${tbc.id}" data-mode="mobile">MOBILE</button>
              </div>
              <a href="${tbc.url}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">
                VIEW LIVE SITE ↗
              </a>
            </div>
          </div>
          ${renderViewportHTML(tbc)}
        </article>
      `;
    }

    exhibitionHTML += '</div>';
    featuredContainer.innerHTML = exhibitionHTML;

    // Attach Inline Frame Switcher Listeners & Skeleton Timers
    THRIVELAB_FEATURED_PROJECTS.forEach((project) => {
      const iframe = document.getElementById(`iframe-${project.id}`);
      const skeleton = document.getElementById(`skeleton-${project.id}`);

      if (iframe && skeleton) {
        iframe.addEventListener("load", () => {
          skeleton.classList.add("hidden");
        });
        // Fallback hide skeleton after 3s max
        setTimeout(() => {
          skeleton.classList.add("hidden");
        }, 3000);
      }
    });

    document.querySelectorAll(".toggle-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const targetBtn = e.currentTarget;
        const projId = targetBtn.getAttribute("data-id");
        const mode = targetBtn.getAttribute("data-mode");

        const parentToggle = targetBtn.closest(".frame-toggle");
        if (parentToggle) {
          parentToggle.querySelectorAll(".toggle-btn").forEach((b) => b.classList.remove("active"));
          targetBtn.classList.add("active");
        }

        const frameHolder = document.getElementById(`frameHolder-${projId}`);
        if (frameHolder) {
          if (mode === "mobile") {
            frameHolder.className = "frame-holder mobile";
          } else {
            frameHolder.className = "frame-holder desktop";
          }
        }
      });
    });
  }

  // 4. Render work.html Complete Gallery (All Studio Projects)
  const allProjectsGrid = document.getElementById("allProjectsGrid");
  const workPageFilters = document.getElementById("workPageFilters");

  function renderAllWorkPage(filterCategory = "ALL") {
    if (!allProjectsGrid || typeof THRIVELAB_ALL_PROJECTS === "undefined") return;

    let filtered = THRIVELAB_ALL_PROJECTS;
    if (filterCategory !== "ALL") {
      filtered = THRIVELAB_ALL_PROJECTS.filter((p) => p.category === filterCategory);
    }

    allProjectsGrid.innerHTML = filtered.map((project) => `
      <article class="price-box reveal" style="padding: 32px; background-color: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
        <div style="margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">${project.number}</span>
            <span class="showcase-category-badge">${project.category}</span>
          </div>
          <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 6px;">${project.title}</h3>
          <p style="font-size: 0.875rem; color: var(--accent-lime); font-weight: 500; margin-bottom: 12px;">"${project.tagline}"</p>
          <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">${project.description}</p>
        </div>
        <div>
          <p style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 16px;">${project.services}</p>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button class="btn btn-primary btn-sm open-modal-btn" data-id="${project.id}">
              Preview Modal ↗
            </button>
            <a href="${project.url}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">
              Visit Site ↗
            </a>
          </div>
        </div>
      </article>
    `).join("");

    document.querySelectorAll(".open-modal-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-id");
        openModal(id);
      });
    });

    observeScrollReveals();
  }

  if (workPageFilters) {
    const btns = workPageFilters.querySelectorAll(".filter-btn");
    btns.forEach((b) => {
      b.addEventListener("click", () => {
        btns.forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        renderAllWorkPage(b.getAttribute("data-category"));
      });
    });
  }

  renderAllWorkPage("ALL");

  // 5. Modal Preview Logic
  const projectModal = document.getElementById("projectModal");
  const modalIframe = document.getElementById("modalIframe");
  const modalTitle = document.getElementById("modalTitle");
  const modalUrlText = document.getElementById("modalUrlText");
  const modalExternalLink = document.getElementById("modalExternalLink");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const deviceDesktopBtn = document.getElementById("deviceDesktopBtn");
  const deviceMobileBtn = document.getElementById("deviceMobileBtn");
  const modalIframeWrap = document.getElementById("modalIframeWrap");

  function openModal(projId) {
    if (!projectModal || typeof THRIVELAB_ALL_PROJECTS === "undefined") return;
    const proj = THRIVELAB_ALL_PROJECTS.find((p) => p.id === projId);
    if (!proj) return;

    if (modalTitle) modalTitle.textContent = proj.title;
    if (modalUrlText) modalUrlText.textContent = proj.url.replace("https://", "");
    if (modalExternalLink) modalExternalLink.href = proj.url;
    if (modalIframe) modalIframe.src = proj.url;

    if (modalIframeWrap) modalIframeWrap.className = "modal-iframe-wrap desktop";
    if (deviceDesktopBtn) deviceDesktopBtn.classList.add("active");
    if (deviceMobileBtn) deviceMobileBtn.classList.remove("active");

    projectModal.classList.add("active");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    if (!projectModal) return;
    projectModal.classList.remove("active");
    document.body.classList.remove("modal-open");
    if (modalIframe) modalIframe.src = "about:blank";
  }

  if (deviceDesktopBtn && deviceMobileBtn && modalIframeWrap) {
    deviceDesktopBtn.addEventListener("click", () => {
      deviceDesktopBtn.classList.add("active");
      deviceMobileBtn.classList.remove("active");
      modalIframeWrap.className = "modal-iframe-wrap desktop";
    });
    deviceMobileBtn.addEventListener("click", () => {
      deviceMobileBtn.classList.add("active");
      deviceDesktopBtn.classList.remove("active");
      modalIframeWrap.className = "modal-iframe-wrap mobile";
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal && projectModal.classList.contains("active")) {
      closeModal();
    }
  });

  // 6. Accordion FAQ Logic
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-button");
    if (btn) {
      btn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach((i) => i.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });

  // 7. Scroll Reveal Observer
  function observeScrollReveals() {
    const revealElements = document.querySelectorAll(".reveal:not(.in-view)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));
  }
  observeScrollReveals();

  // 8. Native Audit Modal Logic (Production Serverless API Lead Capture)
  const auditModal = document.getElementById("auditModal");
  const auditModalCloseBtn = document.getElementById("auditModalCloseBtn");
  const auditModalBackdrop = document.getElementById("auditModalBackdrop");
  const nativeAuditForm = document.getElementById("nativeAuditForm");
  const auditSubmitBtn = document.getElementById("auditSubmitBtn");
  const auditFormContainer = document.getElementById("auditFormContainer");
  const auditConfirmContainer = document.getElementById("auditConfirmContainer");
  const auditErrorContainer = document.getElementById("auditErrorContainer");
  const auditErrorMessage = document.getElementById("auditErrorMessage");
  const auditConfirmCloseBtn = document.getElementById("auditConfirmCloseBtn");
  const auditRetryBtn = document.getElementById("auditRetryBtn");

  function openAuditModal(e) {
    if (e) e.preventDefault();
    if (!auditModal) return;
    if (auditFormContainer) auditFormContainer.style.display = "block";
    if (auditConfirmContainer) auditConfirmContainer.style.display = "none";
    if (auditErrorContainer) auditErrorContainer.style.display = "none";
    auditModal.classList.add("active");
    document.body.classList.add("modal-open");
  }

  function closeAuditModal() {
    if (!auditModal) return;
    auditModal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  // Attach open listeners to all primary Audit CTA buttons
  document.querySelectorAll('a[href*="docs.google.com/forms"], .open-audit-btn').forEach((btn) => {
    btn.addEventListener("click", openAuditModal);
  });

  if (auditModalCloseBtn) auditModalCloseBtn.addEventListener("click", closeAuditModal);
  if (auditModalBackdrop) auditModalBackdrop.addEventListener("click", closeAuditModal);
  if (auditConfirmCloseBtn) auditConfirmCloseBtn.addEventListener("click", closeAuditModal);

  if (auditRetryBtn) {
    auditRetryBtn.addEventListener("click", () => {
      if (auditFormContainer) auditFormContainer.style.display = "block";
      if (auditErrorContainer) auditErrorContainer.style.display = "none";
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && auditModal && auditModal.classList.contains("active")) {
      closeAuditModal();
    }
  });

  if (nativeAuditForm) {
    nativeAuditForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(nativeAuditForm);
      const auditPayload = {
        name: formData.get("name"),
        business: formData.get("business"),
        phone: formData.get("phone"),
        website: formData.get("website"),
        notes: formData.get("notes"),
        _hp_gotcha: formData.get("_hp_gotcha"),
        submittedAt: new Date().toISOString()
      };

      // Set Loading State
      if (auditSubmitBtn) {
        auditSubmitBtn.disabled = true;
        auditSubmitBtn.textContent = "Sending Audit Request...";
      }

      try {
        const response = await fetch("/api/audit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(auditPayload)
        });

        const data = await response.json();

        if (response.ok && data.success) {
          // Success state: Lead successfully transmitted or processed
          try {
            localStorage.setItem("thrivelab_audit_request", JSON.stringify(auditPayload));
          } catch (err) {
            console.log("LocalStorage unavailable:", err);
          }

          if (auditFormContainer) auditFormContainer.style.display = "none";
          if (auditErrorContainer) auditErrorContainer.style.display = "none";
          if (auditConfirmContainer) auditConfirmContainer.style.display = "block";
          nativeAuditForm.reset();
        } else {
          // Transmission Error
          throw new Error(data.error || "Submission failed.");
        }
      } catch (err) {
        console.error("Audit submission failed:", err);
        if (auditErrorMessage) {
          auditErrorMessage.textContent = "Something went wrong sending your request. Please try contacting us directly on WhatsApp or try submitting again.";
        }
        if (auditFormContainer) auditFormContainer.style.display = "none";
        if (auditConfirmContainer) auditConfirmContainer.style.display = "none";
        if (auditErrorContainer) auditErrorContainer.style.display = "block";
      } finally {
        if (auditSubmitBtn) {
          auditSubmitBtn.disabled = false;
          auditSubmitBtn.textContent = "Request My Free Audit →";
        }
      }
    });
  }

  // Lucide Icons
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
});
