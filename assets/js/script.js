const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const theme = document.querySelector(".theme-toggle");

menu?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") document.body.classList.add("light");

theme?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "portfolio-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

document.getElementById("year").textContent = new Date().getFullYear();
