$(document).ready(function () {

  const arak = {
    "Weboldal": "150 000 Ft",
    "Webes játék": "300 000 Ft",
    "Grafika / Design": "80 000 Ft"
  };

  $("#projekt").change(function () {
    let valasztott = $(this).val();

    if (valasztott === "") {
      $("#summaryText").text("Nincs kiválasztott projekt.");
    } else {
      $("#summaryText").text(
        valasztott + " – becsült ár: " + arak[valasztott]
      );
    }
  });

  
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    let nev = $("#nev").val();
    let email = $("#email").val();
    let uzenet = $("#uzenet").val();

    if (nev === "" || email === "" || uzenet === "") {
      $("#formMessage")
        .text("Kérlek, töltsd ki az összes mezőt!")
        .css("color", "red");
      return;
    }

    $("#formMessage")
      .text("Üzenet elküldve, hamarosan felveszem Önnel a kapcsolatot!")
      .css("color", "green");

    this.reset();
    $("#summaryText").text("Nincs kiválasztott projekt.");
  });

});

