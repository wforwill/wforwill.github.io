$(window).scroll(function () {
    var scrolled = $(document).scrollTop();
    var winh = $(window).height();

    $(".opa").each(function () {
        var opRange = $(this).parent().parent().height() / 8;
        $(this).css({
            opacity: ($(this).data("seq") * opRange - scrolled + winh*2) / opRange
        });
    });

    $(".bg-loc").each(function () {
        var thispos = $(this).offset().top;
        var thish = $(this).height();
        if (scrolled >= thispos && scrolled < thispos + thish) {
            $("#bg-img").css({
                transform:
                    "translate(" +
                    $(this).data("x") +
                    ", " +
                    $(this).data("y") +
                    ") scale(" +
                    $(this).data("scale") +
                    ")"
            });
        }
    });
    if (
        scrolled < $("#right-col").offset().top ||
        scrolled > $("#right-col").offset().top + $("#right-col").height()
    ) {
        $("#bg-img").css({
            transform: "translate(0%, 0%) scale(1)"
        });
    }
});
