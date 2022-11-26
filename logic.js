var text = [
    "Web Development", 
    "Fitness Coach", 
    "Cleaning Service",
    "Game Rental",
    "Lesson Teachers",
    "UI/UX",
    "Article Writing",
    "Therapy",
    "Proof-reading",
    "Architecture",
    "Data Analysis",
    "Transcript Collection",
    "Painting",
    "Event Planning",
    "Lash Technician",
    "Surprise Packages"
];
var counter = 0;
var elem = $("#jobs");
setInterval(change, 2000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}


$(document).scroll(function() {
    var scroll = $(window).scrollTop();
    $("body").css("background-position", "0" + (scroll / -1.8) + "px");
  });