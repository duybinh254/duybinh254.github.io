
//click vào icon hiện menu
$(".menu-icon").click(function() {
    $(".menu-item ul").css("left","0")
    $("#overlay").css("display","block")
})

$("#overlay").click(function() {
    $(".menu-item ul").css("left","-250px")
    $("#overlay").css("display","none")
})
// nên dùng ẩn hiển class (classList) hơn là dùng trực tiếp css như trên


$(window).resize(function() {
    if($(window).innerWidth() > 768) {
        $(".menu-item ul").css("left","-250px")
        $("#overlay").css("display","none")
    } 
})