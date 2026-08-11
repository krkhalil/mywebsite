const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const year = document.getElementById("year");
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav a");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const setActive = () => {
  let current = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  links.forEach((link) => {
    const href = link.getAttribute("href") || "";
    link.classList.toggle("active", href === `#${current}`);
  });
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();
