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
        $(this).find(".text").fadeIn(500);
    },
    function(){
        $(this).find(".text").fadeOut(500);
    });
    $(".portf1").hover(
    function(){
        $(this).find(".text1").fadeIn(500);
    },
    function(){
        $(this).find(".text1").fadeOut(500);
    });
    $(".portf2").hover(
    function(){
        $(this).find(".text2").fadeIn(500);
    },
    function(){
        $(this).find(".text2").fadeOut(500);
    });
    $(".portf3").hover(
    function(){
        $(this).find(".text3").fadeIn(500);
    },
    function(){
        $(this).find(".text3").fadeOut(500);
    });
});

function msg(){
    var names = document.getElementById("name").value;
    var emails = document.getElementById("email").value;
    var messages = document.getElementById("message").value;
    if(messages==""||messages==null||names==""||names==null){
        alert("Please enter your message or name");
    }
    else {
        alert(names +" we have received your message. Thank you for reaching out to us.");
    }
    
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
}
