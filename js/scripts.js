$(document).ready(function(){
    $(".serv1").click(function(){
        $(".designimg").toggle();
        $(".design").toggle();
    });
    $(".serv2").click(function(){
        $(".devpimg").toggle();
        $(".devp").toggle();
    });
    $(".serv3").click(function(){
        $(".productimg").toggle();
        $(".product").toggle();
    });
    $(".portf").hover(
    function(){
        $(this).find(".text").fadeIn(1000);
    },
    function(){
        $(this).find(".text").fadeOut(1000);
    });
});