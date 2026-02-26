$(document).ready(function(){
const toggle = document.getElementById("darkToggle");

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
}

// betöltéskor (localStorage)
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// csak akkor regisztrálunk eseményt, ha az elem létezik
if (toggle) {
  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    // egyszerű szövegcsere
    if (this.textContent.trim() === "🌙 Dark mode") {
      this.textContent = "Light mode";
    } else {
      this.textContent = "🌙 Dark mode";
    }
  });
} else {
  console.warn("darkToggle elem nem található; a darkmode esemény nem regisztrálva.");
}})
