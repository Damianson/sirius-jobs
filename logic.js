$(document).scroll(function() {
    var scroll = $(window).scrollTop();
    $("body").css("background-position", "0" + (scroll / -1.8) + "px");

    if (scroll > 150) {
        $("nav").css("background-color", "#000000");
    } else {
        $("nav").css("background-color", "transparent");
    }
  });