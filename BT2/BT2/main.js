const counter = document.querySelector("#counter")
const plusBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")
let count = 0

plusBtn.addEventListener("click", nextCounter);
prevBtn.addEventListener("click", prevCounter);
function nextCounter () {
    count++ ; //click thì count + 1
    counter.innerHTML = count; // thay đổi văn bản của counter
    styleCounter(counter) 
}

function prevCounter () {
    count-- ;
    counter.innerHTML = count;
    styleCounter(counter)
}
//chỉnh style cho counter
function styleCounter(element) {
    if(element.innerHTML > 0) {
        element.style.color = "green";
    } else if(element.innerHTML == 0){
        element.style.color = "#333333";
    } else {
        element.style.color = "red";
    }
}