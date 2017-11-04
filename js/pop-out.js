$(document).ready(function(){
    $(".box").click(function(){
        $(".pop-out").removeClass("fadeOut");
        $(".pop-out").toggleClass("hidden fadeIn");
        $("body").toggleClass("hide-overflow");
    });
    $(".exit").click(function(){
        $("body").toggleClass("hide-overflow");
        $(".pop-out").removeClass("fadeIn");
        $(".pop-out").toggleClass("hidden fadeOut");
    });
});
function changeSrc(id) {
    document.getElementsByClassName("pop-out-image")[0].src = "img/img" + id + ".jpg";
}