$(document).ready(function() {
    var winh = $(window).height();
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        $(".scrollable").each(function() {
            var parent_pos = $(this).parent().offset().top;
            var next_pos = parent_pos + $(this).parent().height();
            var parent_scrolled = scrolled - $(this).parent().offset().top;
            if (parent_scrolled > 0 && scrolled < next_pos - winh) {
                if ($(this).attr("data-left")) {
                    $(this).css('left', (($(this).data('left2') - $(this).data('left')) * parent_scrolled / winh + $(this).data('left')) + '%');
                }
                if ($(this).attr("data-top")) {
                    $(this).css('top', (($(this).data('top2') - $(this).data('top')) * parent_scrolled / winh + $(this).data('top')) + '%');
                }
                if ($(this).attr("data-width")) {
                    $(this).css('width', (($(this).data('width2') - $(this).data('width')) * parent_scrolled / winh + $(this).data('width')) + '%');
                }
            }
        });
    });
});
