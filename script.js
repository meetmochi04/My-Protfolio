// ==========================
// SCROLL ANIMATION
// ==========================
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(sec => observer.observe(sec));


// ==========================
// DARK / LIGHT MODE FIXED
// ==========================
const toggle = document.getElementById("themeToggle");
const body = document.body;

// SAFETY CHECK
if (toggle) {

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light");
    toggle.textContent = "☀️";
  }

  // Toggle theme
  toggle.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
      toggle.textContent = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      toggle.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  });

}
// ==========================
// FLOATING NAV SHOW ON SCROLL
// ==========================
const floatingNav = document.getElementById("floatingNav");
const navItems = document.querySelectorAll(".floating-nav .nav-item");
const sectionsNav = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  // Show navbar after scroll
  if (window.scrollY > 300) {
    floatingNav.classList.add("show");
  } else {
    floatingNav.classList.remove("show");
  }

  // Active section glow
  let current = "";
  sectionsNav.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalList = document.getElementById("modalList");

const serviceData = {
  frontend: {
    title: "Frontend Development",
    desc: "Building responsive and accessible interfaces using modern tools.",
    list: [
      "HTML, CSS, JavaScript",
      "React UI Development",
      "GSAP Animations",
      "Responsive Web Design",
      "UX Interaction Design"
    ]
  },
  backend: {
    title: "Backend Development",
    desc: "Robust backend systems and APIs.",
    list: [
      "Node.js & Express",
      "Java & Python",
      "REST APIs",
      "Authentication Systems"
    ]
  },
  fullstack: {
    title: "Full-Stack Web Development",
    desc: "Complete web solutions from UI to server.",
    list: [
      "Frontend + Backend Integration",
      "Database Connectivity",
      "Deployment & Hosting"
    ]
  },
  database: {
    title: "Database Design & Management",
    desc: "Secure and scalable database systems.",
    list: [
      "MySQL / MongoDB",
      "Database Optimization",
      "Data Security"
    ]
  },
  git: {
    title: "Version Control & Git",
    desc: "Professional collaboration workflows.",
    list: [
      "Git & GitHub",
      "Branching Strategies",
      "Team Collaboration"
    ]
  }
};

function openModal(type) {
  const data = serviceData[type];
  modalTitle.textContent = data.title;
  modalDesc.textContent = data.desc;
  modalList.innerHTML = data.list.map(i => `<li>${i}</li>`).join("");
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

// Close on outside click
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
// ==========================
// 3D PARTICLE BACKGROUND
// ==========================
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: (Math.random() - 0.5),
    dy: (Math.random() - 0.5)
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#6c63ff";
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();
