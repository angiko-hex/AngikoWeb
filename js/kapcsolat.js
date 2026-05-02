// kapcsolat.js – EmailJS + lang.js integráció
// FONTOS: az EmailJS adatokat töltsd ki a saját fiókodból!
const EMAILJS_PUBLIC_KEY  = "RVK1K2Y4l8x8O7s_c";   // pl. "abc123XYZ"
const EMAILJS_SERVICE_ID  = "service_j4odol8";       // pl. "service_xyz"
const EMAILJS_TEMPLATE_ID = "template_a94l6i1";      // pl. "template_abc"

const arak = {
  "Weboldal":        "150 000 Ft",
  "Webes játék":     "300 000 Ft",
  "Grafika / Design":"80 000 Ft"
};

$(document).ready(function () {

  // EmailJS inicializálás
  emailjs.init(EMAILJS_PUBLIC_KEY);

  // Projekt változás → összegzés frissítése
  $("#projekt").on("change", function () {
    const val = $(this).val();
    const summaryEl = document.getElementById("summaryText");

    if (!val) {
      // lang.js-ből veszi a "nincs projekt" szöveget, ha betöltött
      const noProj = (typeof t === "function") ? t("kapcsolat", "noProj") : "Nincs kiválasztott projekt.";
      summaryEl.textContent = noProj;
      summaryEl.dataset.empty = "true";
    } else {
      const sep = (typeof t === "function") ? t("kapcsolat", "projSep") : " – becsült ár: ";
      summaryEl.textContent = val + sep + (arak[val] || "");
      summaryEl.dataset.empty = "false";
    }
  });

  // Form küldés
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    const nev    = $("#nev").val().trim();
    const email  = $("#email").val().trim();
    const projekt= $("#projekt").val();
    const uzenet = $("#uzenet").val().trim();

    const errMsg     = (typeof t === "function") ? t("kapcsolat", "errFill")    : "Kérlek, töltsd ki az összes mezőt!";
    const successMsg = (typeof t === "function") ? t("kapcsolat", "successMsg") : "Üzenet elküldve, hamarosan felveszem Önnel a kapcsolatot!";

    if (!nev || !email || !uzenet) {
      $("#formMessage").text(errMsg).css("color", "red");
      return;
    }

    // Küldés EmailJS-szel
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:  nev,
      from_email: email,
      projekt:    projekt || "Nincs megadva",
      message:    uzenet
    })
    .then(function () {
      $("#formMessage").text(successMsg).css("color", "green");
      document.getElementById("contactForm").reset();
      const noProj = (typeof t === "function") ? t("kapcsolat", "noProj") : "Nincs kiválasztott projekt.";
      $("#summaryText").text(noProj).data("empty", "true");
    })
    .catch(function (error) {
      $("#formMessage").text("Hiba: " + (error.text || error)).css("color", "red");
    });
  });

});
