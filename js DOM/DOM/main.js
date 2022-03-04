const heading = document.getElementById("heading")
console.log(heading);

//tagName - trả về nhiều phần tử
const paraTagName = document.getElementsByTagName("p")
console.log(paraTagName);
console.log(paraTagName[0]);
console.log(paraTagName.length);

//for
for (let i = 0; i < paraTagName.length; i++) {
    console.log(paraTagName[i]);

}

//map : không áp dụng trực tiếp được
// paraTagName.map ( p => console.log(p))

// Muốn áp dụng được thì phải convert paraTagName -> Array
Array 

// className - tính chất tương tự như tagName
const paraClassName = document.getElementsByClassName("para")
console.log(paraClassName);


//querySelector : trả về phần tử đầu tiên mà nó tìm thấy <==> find

const headingSelector = document.querySelector("#heading")
console.log(headingSelector);

const para2 = document.querySelector(".para")
console.log(para2);

const para3 = document.querySelector("p:nth-child(4)")
const ul1 = document.querySelector("ul") // hoặc .box ul (vì query sẽ chọn phần tử đầu tiên)
console.log(ul1);

const ul2 = document.querySelector("body > ul")
console.log(ul2);

const li33 = document.querySelector(".li + li") //Chọn thẻ li ngay sau class li
console.log(li33);
const li44 = document.querySelector("ul li:last-child")
console.log(li44);

// querySelectorAll : trả về nhiều phần tử
const paraSelectorAll = document.querySelectorAll("p")
console.log(paraSelectorAll);

// Truy cập cục bộ
// Muốn truy cập vào thẻ ul nằm trong class "box"

const box = document.querySelector(".box")
const ulInsideBox = box.querySelector("ul")
console.log(ulInsideBox);

// Truy cập gián tiếp
console.log(ulInsideBox.parentElement); // lấy ra cha cảu ul
console.log(ulInsideBox.firstElementChild); // lấy ra con đầu tiên của ul
console.log(ulInsideBox.lastElementChild); // con cuối cùng của ul
console.log(box.nextElementSibling); // lấy ra anh em liền sau của box
console.log(box.previousElementSibling); // lấy ra ae liền trước của box