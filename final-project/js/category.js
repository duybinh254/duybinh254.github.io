import "../css/header.css"
import "../css/category.css"
import "../css/home.css"
import "../css/footer.css"
import "../css/index.css"

$(".btn-filter").click(function() {
    $(".filter-page").css("left","0")
    $(".filter-page").css("top","30px")
    $("#overlay").css("display","block")
    
})
// $(".exit span").click(function() {
//     $(".menu ul").css("left","-300px")
//     $("#overlay").css("display","none")
// })

$("#overlay").click(function() {
    $(".filter-page").css("left","-300px")
    $("#overlay").css("display","none")
})


$(window).resize(function() {
    if($(window).innerWidth() > 768) {
        $(".filter-page").css("left","-300px")
        $("#overlay").css("display","none")
    } 
})


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
