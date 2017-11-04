$(document).ready(function(){
    $(".box").click(function(){
        $(".pop-out").removeClass("fadeOut");
        $(".pop-out").toggleClass("hidden fadeIn");
    });
    $(".exit").click(function(){
        $(".pop-out").removeClass("fadeIn");
        $(".pop-out").toggleClass("hidden fadeOut");
    });
});
function changeSrc(id) {
    document.getElementsByClassName("pop-out-image")[0].src = "img/img" + id + ".jpg";
}