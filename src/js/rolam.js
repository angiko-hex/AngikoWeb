$(document).ready (function () {
  //Tovább olvasok gombok
    $(".toggleBtn1").click(function(){
        $(".hidden1").slideToggle(500);

        if ($(this).text() === "Kicsoda?") {
            $(this).text("Értem :)");
        }
        else { 
            $(this).text("Kicsoda?");
        }
    });
    $(".toggleBtn2").click(function(){
        $(".hidden2").slideToggle(500);

        if ($(this).text() === "Bocsánat?") {
            $(this).text("Egészségedre :)");
        }
        else { 
            $(this).text("Bocsánat?");
        }
    });
    $(".toggleBtn3").click(function(){
        $(".hidden3").slideToggle(500);

        if ($(this).text() === "Olvasnék róla!") {
            $(this).text("Világos ☀");
        }
        else { 
            $(this).text("Olvasnék róla!");
        }
    });

 //fadeIn
$(window).on("scroll", function(){
  $(".fade-section").each(function(){
    let elemTop = $(this).offset().top;
    let scrollTop = $(window).scrollTop();
    let winHeight = $(window).height();

    if(scrollTop + winHeight > elemTop + 50){
      $(this).addClass("visible");
    }
  });
});
});
