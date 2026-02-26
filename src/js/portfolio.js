
$(document).ready(function () {

window.addEventListener("load", () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
  });

  $(window).on("scroll", function(){
  $(".fade-section").each(function(){
    let top = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let height = $(window).height();

    if(scroll + height > top + 100){
      $(this).addClass("visible");
    }
  });
});

  const images = [];

  $(".gallery .img-fluid").each(function () {
    images.push($(this).attr("src"));
  });

  $(".gallery .img-fluid").on("click", function () {

    const clickedSrc = $(this).attr("src");
    const clickedIndex = images.indexOf(clickedSrc);

    const $carouselInner = $("#portfolioCarousel .carousel-inner");
    $carouselInner.empty();

    images.forEach(function (src, index) {
      const activeClass = index === clickedIndex ? "active" : "";
    
      const altText = $(".gallery img[src='" + src + "']").attr("alt") || 
  "";

$carouselInner.append(`
  <div class="carousel-item ${activeClass}">
    <img src="${src}" class="d-block w-100" alt="${altText}">
  </div>
`);

    });

    const title = $(this).attr("alt") || "";
    $("#carouselTitle").text(title);

    $("#carouselWrapper").removeClass("d-none");

    
  });

  $("#portfolioCarousel").on("slid.bs.carousel", function (e) {
    const src = $(e.relatedTarget).find("img").attr("src");
    
  });
  $("#portfolioCarousel").on("slid.bs.carousel", function (e) {
  const alt = $(e.relatedTarget).find("img").attr("alt") || "";
  $("#carouselTitle").text(alt);
});


  $("#carouselWrapper").on("click", function(e){
    if(e.target.id === "carouselWrapper"){
      $(this).addClass("d-none");
    }
  });
  
  function filterGallery() {
    const activeCat =$(".filter-btn.active").data("cat") //amire kattolsz az lesz active aktivkategória, szöveget gépeled, ketgória kattintva érhetőel
    
    $(".gallery-item").each(function(){
        const itemCat=$(this).data("cat"); // elem kategóriája 
        
    
        //Feltétel: (Összes vagy egyező kategória) ÉS (név tartalmazza a keresést) - ez a logikája
        const matchCat = (activeCat === "all" || activeCat === itemCat);
     
$(this).toggle(matchCat);
     
        // elemen végigmegy, név kategória lekérése, a nevében benne van e a begépelt szó, kategóriát néztük, ha igaz maradhat, ha nem akkor eltünteti 

    });
}
//Gombra kattintás
$(".filter-btn").click(function(){
    $(".filter-btn").removeClass("active"); //összestől elvesszük
    $(this).addClass("active"); //vissza adja amire katt
filterGallery(); // szűrő újra
});




});
