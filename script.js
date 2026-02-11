// ========== Mobile Menu Toggle ==========
const toggleBtn = document.getElementById("menu-toggle6");
const nav = document.getElementById("mainNav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ========== Scroll To Top Button ==========
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
/* ============ HEADER  end ============ */

/* ============ whatsapp ============ */
function toggleWhatsAppChat() {
  const chatBox = document.getElementById("whatsappChatBox");
  chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
}
/* ============ whatsapp end ============ */

/* ========== Hero -section Animated Tagline start ========== */
/* BOOTSTRAP JS should be included in your HTML, not inside this .js file */

/* HERO CARD ANIMATION */
const cards = document.querySelectorAll(".hero-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 },
);

cards.forEach((card) => observer.observe(card));

/* AUTO SCROLL (OPTIONAL) */
const scroller = document.querySelector(".hero-card-scroller");
let scrollAmount = 0;

setInterval(() => {
  scrollAmount += 220;
  if (scrollAmount >= scroller.scrollWidth - scroller.clientWidth) {
    scrollAmount = 0;
  }
  scroller.scrollTo({ left: scrollAmount, behavior: "smooth" });
}, 3500);

/* ========== Service Card On-Scroll Animation ========== */
const serviceCards = document.querySelectorAll(".service-card");

function cardAnimation() {
  serviceCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", cardAnimation);
cardAnimation();
/* ========== Hero -section Animated Tagline end ========== */

/* ========================= ABOUT SECTION PREMIUM - Start ========================= */
// ========== Stats Box Fade-in Animation ==========
const statsBox = document.querySelector(".stats-box");

function revealStatsBox() {
  const rect = statsBox.getBoundingClientRect();

  if (rect.top < window.innerHeight - 80) {
    statsBox.classList.add("show");
  }
}
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    console.log("Clicked:", card.querySelector(".card-title").innerText);
    card.style.transform = "scale(0.96)";
    setTimeout(() => {
      card.style.transform = "";
    }, 140);
  });
});

// ========== Reveal Cards on Scroll ==========
const chooseCards = document.querySelectorAll(".choose-us-card");

function revealChooseUs() {
  chooseCards.forEach((card) => {
    const position = card.getBoundingClientRect();
    if (position.top < window.innerHeight - 60) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealChooseUs);
revealChooseUs(); // run on load

/* ========================= ABOUT SECTION PREMIUM - End ========================= */

/*========================= completed-projects ========================= */
const projects = document.querySelectorAll(".project-item");
const dots = document.querySelectorAll(".dot");

let projectIndex = 0;

// Load Slide
function showProject(i) {
  projects.forEach((p) => p.classList.remove("active-project"));
  dots.forEach((d) => d.classList.remove("active"));

  projects[i].classList.add("active-project");
  dots[i].classList.add("active");

  projectIndex = i;
}

// Auto Slide
setInterval(() => {
  projectIndex = (projectIndex + 1) % projects.length;
  showProject(projectIndex);
}, 4000);

// Dots Click
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showProject(Number(dot.dataset.index));
  });
});

/*========================= completed-projects end ========================= */
document.querySelector(".query-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = document.querySelector(".submit-btn");
  btn.innerText = "Sending...";
  btn.disabled = true;

  setTimeout(() => {
    btn.innerText = "Message Sent ✔";
    btn.style.background = "#4CAF50";
    this.reset();
  }, 1500);
});

document.querySelectorAll(".footer-social a").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.15)";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = this.querySelector(".btn");
  const originalText = btn.innerText;

  btn.innerText = "Sending...";
  btn.disabled = true;

  setTimeout(() => {
    btn.innerText = "Message Sent ✔";
    btn.style.background = "#28a745";
    this.reset();

    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.background = "";
      btn.disabled = false;
    }, 2000);
  }, 1500);
});
/* ========================= CONTACT FORM END ========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

function submitForm(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
}

//hero section animated tagline

setInterval(() => {
  document.querySelectorAll(".footer-social a").forEach((icon, i) => {
    icon.style.transform = `translateY(${Math.sin(Date.now() / 600 + i) * 3}px)`;
  });
}, 50);

document.querySelectorAll(".footer-social a").forEach((icon) => {
  /* Hover pulse */
  icon.addEventListener("mouseenter", () => {
    icon.classList.add("icon-pulse");
  });

  icon.addEventListener("mouseleave", () => {
    icon.classList.remove("icon-pulse");
  });

  /* Click ripple effect */
  icon.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.className = "icon-ripple";

    const rect = icon.getBoundingClientRect();
    ripple.style.left = e.clientX - rect.left + "px";
    ripple.style.top = e.clientY - rect.top + "px";

    icon.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// Contact Form Validation and Submission Animation
const form = document.getElementById("enquiryForm");
const button = document.getElementById("sendBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");
  let valid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "red";
      valid = false;
    } else {
      input.style.borderColor = "#00eaff";
    }
  });

  if (!valid) return;

  button.innerHTML = "Sending...";
  button.disabled = true;

  setTimeout(() => {
    button.innerHTML = "✓ Message Sent";
    button.style.background = "#4caf50";
    form.reset();

    setTimeout(() => {
      button.innerHTML = "Send Message";
      button.style.background = "#00eaff";
      button.disabled = false;
    }, 2500);
  }, 1500);
});
