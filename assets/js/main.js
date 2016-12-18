/* ===================================
    Main Menu
 ====================================== */

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 15){
        $("nav").css("background-color", "#000000");
    }else{
        $("nav").css("background-color", "transparent");
    }
});