$(function () {
    $(window).scroll(function () {
        var scrolled = $(document).scrollTop();
        var winh1 = $(window).height();
        $(".opa").each(function () {
            var opRange = $(this).parent().parent().height() / 3;
            $(this).css({
                opacity: ($(this).data("seq") * opRange - scrolled + winh1*2) / opRange
            });
        });
    });
});

$(function () {
    $(window).scroll(function () {
        var current_pos1 = $(window).scrollTop();
        var new_width = current_pos1 / ($(document).height() - $(window).height()) * $(window)
            .width();
        // name the variables
        $("#progressbar1").css("width", new_width);
        // select id progress bar, change its style--width into the var new_width
    });
});

$(function () {
    var video2_pos = $('#section7').offset().top;
    var video2_end = $('#section7').offset().top + $('#section7').height();
    $(window).scroll(function () {
        var current_pos3 = $(window).scrollTop();
        if (current_pos3 > video2_pos && current_pos3 < video2_end) {
            $("#video2")[0].play();
        } else {
            $("#video2")[0].pause();
        }
    });
});

$(function () {
    var doch = $(document).height();
    var winw = $(window).width();
    var winh2 = $(window).height();
    $(window).scroll(function () {
        var current_pos3 = $(window).scrollTop();
        var new_width = (current_pos3 - $("#section5").offset().top) / ($("#section5")
        .height() - winh2) * winw;
        $("#progressbar2").css("width", new_width);
    });
});
