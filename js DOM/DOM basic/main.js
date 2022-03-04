// Lấy ra nội dung của 1 phần tử
    //Bước 1: truy cập vào phần tử 
    //Bước 2: lấy nội dung. 3 cách
    const heading = document.querySelector("#heading")
    console.log(heading.innerHTML);
    console.log(heading.innerText);
    console.log(heading.textContent);

// ul nằm trong box

const ul1 = document.querySelector(".box ul")
console.log(ul1.innerHTML); // innerHTML : lấy ra cả tên thẻ và nội dung của thẻ
    console.log(ul1.innerText);  // innerText :chỉ lấy ra nội dung của thẻ, không lấy được nội dung của thẻ ẩn
    console.log(ul1.textContent); // textContent Chỉ lấy ra đc nội dung của thẻ //Lấy ra được cả nội dung của thẻ bị ẩn // giữ nguyên form của thẻ ( khoảng cách lề,...)

// Thay đổi nội dung của 1 phần tử
heading.innerHTML = "xin chào"
// heading.innerText = "Các bạn"
// heading.textContent = "alooo"

heading.innerHTML = "<span> Hello</span>" 
//nếu chỉ chèn nội dung text bình thường thì có thể dùng cả 3 cách đều được
// Nếu có thêm thẻ (Vd span ở trên) thì chỉ có thể dùng innerHTML

// Thay đổi CSS của 1 phần tử

heading.style.color = "red"
heading.style.backgroundColor = "#444444"
heading.style.fontSize = "50px"

// tạo - thêm - xóa - thay thế - copy phần tử
//1. Tạo
//VD: Tạo ra thẻ p có nội dung là "Thẻ para 4"
    //Bước 1: tạo thẻ
const para4 = document.createElement ("p")

    //Chèn nội dung cho thẻ : dùng inner.HTML, innerText, textContent
    para4.innerText = "Thẻ para 4"
console.log(para4);

//Tạo thẻ a, link đến trang google.com, có text là google

const link = document.createElement("a")
link.innerText = "google"
link.href = "https://www.google.com/"
link.target = "_blank"
console.log(link);

// Thêm 
//👉 appendChild() : Thêm phần tử vào cuối của phần tử cha

// 👉 prepend() : Thêm phần tử vào đầu của phần tử cha

// 👉 insertBefore() : Thêm phần tử vào trong phần tử cha và trước phần tử được chỉ được

document.body.prepend (para4) //Chỉ dùng document.body khi thẻ cần thêm có cha là body
document.body.appendChild(para4)

const box = document.querySelector(".box")
document.body.insertBefore(link, box) //Chỉ dùng document.body khi thẻ cần thêm có cha là body

// Chèn 1 thẻ li, có nội dung "Thẻ li new" vào giữa li33 và 44

//b1: tạo thẻ
const liNew = document.createElement("li")
//b2:chèn nội dung
liNew.innerText = "Thẻ li new"
//b3: thêm
const ul = document.querySelector(".box ul")
const li44 = document.querySelector("ul li:last-child")
ul.insertBefore(liNew, li44)

//Cách thêm khác
//insertAdjacentHTML
//Chèn thẻ button có nội dung là Đăng nhập vào đằng sau thẻ box
//Cách 1:
box.insertAdjacentHTML("afterend", "<button>Đăng Nhập</button>")

//Cách 2:
const ul2 = document.querySelector("body >ul")
ul2.insertAdjacentHTML("beforebegin","<button>Đăng Nhập</button>")

//insertAdjacentElement
const button = document.createElement("button")
button.innerText = "Đăng ký"
heading.insertAdjacentElement("afterend",button)

//XÓA 
//Xóa thẻ p1 
//C1: truy cập trực tiếp
 //b1:truy cập vào thẻ muốn xóa và thẻ cha của nó


 const para1 = document.querySelector("p")
// cha là body nên không cần truy cập
// document.body.removeChild(para1)
//Cách 2: truy cập gián tiếp cha thông qua con
para1.parentElement.removeChild(para1)

// Thay thế
 //VD: thay thế thẻ para2 bằng thẻ a link đến trang facebook
//Cách 1: tuy cập trực tiếp
//b1: 
//Tạo thẻ a
const linkFb = document.createElement ("a")
linkFb.innerText = "Facebook"
linkFb.href = "https://www.facebook.com" 
// truy cập vào thẻ muốn thay thế và cha của nó
const para2 = document.querySelector(".para")
//cha là body nên k cần tuy cập
//thay thế
// document.body.replaceChild(linkFb, para2)

//Cách 2: truy cập gián tiếp: (không cần truy cập vào cha)
para2.parentElement.replaceChild(linkFb, para2)

// Sao chép phần tử
const boxCopy = box.cloneNode(true)
// const boxCopy1 = box.cloneNode(false)
// console.log(boxCopy);
// console.log(boxCopy1);
document.body.appendChild(boxCopy)