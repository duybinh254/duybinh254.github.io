//1
const add = document.createElement("button");
add.innerText = "Add";

document.body.prepend(add);
const input = document.createElement("input");
document.body.prepend(input);
const ul = document.querySelector("#list");

add.addEventListener("click", getLi);
function getLi() {
  const text = document.createElement("li");
  text.innerText = input.value;
  ul.appendChild(text);
  if (input.value == "") {
    alert("Chưa điền nội dung input");
  }
}

//2 Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul

const del = document.createElement("button");
del.innerText = "Remove";
document.body.appendChild(del);
del.addEventListener("click", remove);
function remove() {
  const liLast = document.querySelector("li:last-child");

  ul.removeChild(liLast);
}

//3     Thêm 1 nút Hide trên đầu của danh sách ul
// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide
const button = document.createElement("button");
button.innerText = "Hide";
// document.body.prepend(button)
ul.prepend(button);
const li = document.getElementsByTagName("li");

button.addEventListener("click", show);
function show() {
  for (let i = 0; i < li.length; i++) {
    if (li[i].style.display === "none") {
      li[i].style.display = "block";
      button.innerText = "Hide";
    } else {
      li[i].style.display = "none";
      button.innerText = "Show";
    }
  }
}
