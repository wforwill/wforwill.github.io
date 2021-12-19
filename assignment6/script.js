$(window).scroll(function () {
    var scrolled = $(document).scrollTop();
    var winh = $(window).height();

    $(".maploc").each(function () {
        var thispos = $(this).offset().top;
        var thish = $(this).height();

        // code to transform position of background svg
        if (scrolled >= thispos - winh) {
            $("#svgobj").css({
                "transform": 
                "translate(" + $(this).data("x") + ", " + $(this).data("y") 
                + ") scale(" + $(this).data("scale") + ")"
            });
        }

        // code to hide/show grouped items
        if (scrolled >= $("#maploc1").offset().top-winh * 0.4){
            $("#Layer_3").css({
                "opacity": "0"
            });
        }
        else {
            $("#Layer_3").css({
                "opacity": "1"
            });
        }
        if (scrolled >= $("#maploc2").offset().top-winh * 0.4){
            $("#Layer_2").css({
                "opacity": "0"
            });
        }
        else {
            $("#Layer_2").css({
                "opacity": "1"
            });
        }
        if (scrolled >= $("#maploc3").offset().top-winh * 0.4){
            $("#Layer_1").css({
                "opacity": "0"
            });
        }
        else {
            $("#Layer_1").css({
                "opacity": "1"
            });
        }
        if (scrolled >= $("#maploc4").offset().top-winh * 0.4){
            $("#Layer_4").css({
                "opacity": "1"
            });
        }
        else {
            $("#Layer_4").css({
                "opacity": "0"
            });
        }
        if (scrolled >= $("#maploc5").offset().top-winh * 0.4){
            $("#Layer_5").css({
                "opacity": "1"
            });
        }
        else {
            $("#Layer_5").css({
                "opacity": "0"
            });
        }
        if (scrolled >= $("#maploc6").offset().top-winh * 0.4){
            $("#Layer_6").css({
                "opacity": "1"
            });
        }
        else {
            $("#Layer_6").css({
                "opacity": "0"
            });
        }
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
        }
        if (scrolled >= $("#maploc8").offset().top-winh * 0.4){
            $("#Layer_8").css({
                "opacity": "1"
            });
        }
        else {
            $("#Layer_8").css({
                "opacity": "0"
            });
        }
        if (scrolled >= $("#maploc9").offset().top-winh * 0.4){
            $("#Layer_9").css({
                "opacity": "1"
            });
        }
        else {
            $("#Layer_9").css({
                "opacity": "0"
            });
        }
    });
});
