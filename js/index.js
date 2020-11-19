$(function () {
    $(document).scroll(function() {
        var $nav = $(".scrolling-navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});