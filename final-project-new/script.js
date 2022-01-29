var s = skrollr.init();

$(function () {

    $(window).scroll(function(){
        if (
            $(window).scrollTop() > $(window).height() * 0.75
        ) {
            $("#guide").css("opacity","0");
            $("#symbol").css("opacity","0");
        } else {
            $("#guide").css("opacity","1");
            $("#symbol").css("opacity","1");
        }
    });

    $(window).scroll(function () {
        var new_width = ($(window).scrollTop() - $("#doubt1").offset().top) / ($("#doubt1").height() - $(window).height()) * $(window).width();
        $("#fakeprogressbar").css("width", new_width);
    });

    $(window).scroll(function () {
        $(".floating-text1").each(function () {
            var opRange = $(window).height();
            $(this).css({
                opacity: ($(this).data("seq") * opRange - $(document).scrollTop() + $("#doubt1").offset().top) / opRange
            });
        });
    });

    $(window).scroll(function () {
        $(".districts").each(function () {
            var opRange = $(window).height();
            $(this).css({
                opacity: ($(this).data("seq") * opRange - $(document).scrollTop() + $("#doubt2").offset().top) / opRange
            });
        });
    });

    $(window).scroll(function () {
        $(".floating-text2").each(function () {
            var opRange = $(window).height();
            $(this).css({
                opacity: ($(this).data("seq") * opRange - $(document).scrollTop() + $("#doubt2").offset().top) / opRange
            });
        });
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#bloom").offset().top && $(window).scrollTop() < $("#bloom").offset().top + $("#bloom").height()) {
            $("#video")[0].play();
        } else {
            $("#video")[0].pause();
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#drone").offset().top && $(window).scrollTop() < $("#drone").offset().top + $("#drone").height()) {
            $("#video2")[0].play();
        } else {
            $("#video2")[0].pause();
        }
    });

    $(window).scroll(function () {
        $(".news").each(function () {
            var opRange = $(window).height();
            $(this).css({
                opacity: ($(this).data("seq") * opRange - $(document).scrollTop() + $("#too-many-news").offset().top + $(window).height()*0.7) / opRange
            });
        });
    });

});