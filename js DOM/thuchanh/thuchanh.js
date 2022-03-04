//1
const heading = document.getElementById("heading")
heading.style.color ="red"
heading.style.textTransform = "uppercase"
console.log(heading);
//2 
const para = document.querySelectorAll(".para")
for (let i = 0; i < para.length; i++) {
    para[i].style.color ="blue"
    para[i].style.fontSize = "20px"
}


// 3
const link = document.createElement("a")
link.innerText= "facebook"
link.href = "https://www.facebook.com"
const para3 = document.querySelector(".para-3")
para3.insertAdjacentElement("afterend",link)

// 4
const title = document.getElementById("title")
console.log(title);
title.innerHTML = "Đây là thẻ tiêu đề"

//6
const button = document.createElement("button")
button.innerText = "Click me"
para3.parentElement.replaceChild(button,para3)

//7 
const para2 = document.querySelector(".para-2")
const para2Copy = para2.cloneNode(true)
para2.insertAdjacentElement("afterend",para2Copy)

//8
const para1 = document.querySelector(".para-1")
para1.parentNode.removeChild(para1)