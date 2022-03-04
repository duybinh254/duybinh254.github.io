const para = document.getElementById("text")
para.style.color = "#777"
para.style.fontSize = "2rem"
para.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."


//Bài 2:Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
const liColor = document.querySelectorAll("ul:nth-child(2)")
console.log(liColor);
for (let i = 0; i < liColor.length; i++) {
    liColor[i].style.color = "blue"
}




//bài 3:
//1 Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const li8 = document.createElement("li")
li8.innerText = "Item 8"
const ul = document.querySelector("#list")
console.log(ul);
ul.appendChild(li8)
const li9 = document.createElement("li")
li9.innerText ="Item 9"
ul.appendChild(li9)
const li10 = document.createElement("li")
li10.innerText ="Item 10"
ul.appendChild(li10)
//2 Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1 = document.querySelector("#list li")
li1.style.color ="red"
//3 Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = document.querySelector("ul:nth-child(3) li:nth-child(3)")
li3.style.backgroundColor = "blue"

//4 Remove item 4
const li4 = document.querySelector("ul:nth-child(3) li:nth-child(4)")
console.log(li4);
ul.removeChild(li4)

//5 Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const liNew = document.createElement("li")
liNew.innerText = "Item mới"
const li44 = document.querySelector("ul:nth-child(3) li:nth-child(4)")
ul.insertBefore(liNew, li44)
console.log(liNew);

