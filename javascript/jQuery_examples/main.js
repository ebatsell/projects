$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
    });
    $("div").mouseleave(function() {
        $('div').fadeTo('fast', .5);
    });
    $("div").click(function() {
        $("div").slideDown("slow");
    });
});     