$(".banner__burgir").click(function() {
    $(".header__navbar").addClass("active");
    setTimeout(function(){
        $(".header__navbar").addClass("open");
    },1);
});
$(".header__mobile_menu").click(function() {
    $(".header__navbar").removeClass("open");
    setTimeout(function(){
        $(".header__navbar").removeClass("active");
    },400);
});