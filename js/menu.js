$(document).ready(function() {
    $(".burger-button").click(function() {
        $(".burger-button").toggleClass("active  bb-open");
        $(".menu-open").toggleClass("is-active-menu");
        $("body").toggleClass("hide-overflow");
        window.scrollTo(0,0);
    });
    $(".menu-open a").click(function() {
        $(".menu-open").toggleClass("is-active-menu");
        $(".burger-button").toggleClass("active  bb-open");
        $("body").toggleClass("hide-overflow");
    });
});