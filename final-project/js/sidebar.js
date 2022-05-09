import "jquery/dist/jquery.js"
$(".menu-icon").click(function() {
    $(".menu ul").css("left","0")
    $("#overlay").css("display","block")
    
})
$(".exit span").click(function() {
    $(".menu ul").css("left","-300px")
    $("#overlay").css("display","none")
})

$("#overlay").click(function() {
    $(".menu ul").css("left","-300px")
    $("#overlay").css("display","none")
})
// nên dùng ẩn hiển class (classList) hơn là dùng trực tiếp css như trên


$(window).resize(function() {
    if($(window).innerWidth() > 768) {
        $(".menu ul").css("left","-300px")
        $("#overlay").css("display","none")
    } 
})