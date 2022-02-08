var s = skrollr.init();

$(window).scroll(function () {
    var scrolled = $(document).scrollTop();
    var winh = $(window).height();
    if (scrolled >= $("#maploc7").offset().top-winh * 0.4){
        $("#Layer_7").css({
            "opacity": "1"
        });
        $("#Layer_1").css({
            "opacity": "1"
        });
        $("#Layer_2").css({
            "opacity": "1"
        });
        $("#Layer_3").css({
            "opacity": "1"
        });
    }
    else {
        $("#Layer_7").css({
            "opacity": "0"
        });
        $("#Layer_1").css({
            "opacity": "0"
        });
        $("#Layer_2").css({
            "opacity": "0"
        });
        $("#Layer_3").css({
            "opacity": "0"
        });
    }
});
