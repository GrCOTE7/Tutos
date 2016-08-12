$(function () {
    grCote7.tools.chrono.start();

    $(".rouge").fadeOut("slow", function () {
        $(this).fadeIn(3000);
        $('[class*="pair"]').css('background', 'red').css('color', 'yellow');
    });

    // console.log($('li[class="impair"]').length);
    grCote7.tools.chrono.stop();
});

