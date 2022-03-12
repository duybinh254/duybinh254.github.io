//1. Các chức năng có trong ứng dụng
// thêm công việc
//lọc công việc đã hoàn thành và chưa hoàn thành
//chỉnh sửa công việc
//xóa công việc
//  thay đổi trạng thái công việc (đã hoàn thành hay chưa)

//2.đối tượng trong ứng dụng là gì
//Công việc

// Có các thuộc tính nào
//trạng thái => status  
//tiêu đề       => title
// ID công việc => id

//Mockup : là 1 mảng các công việc gồm các object

//function random id
function randomId() {
    return Math.floor(Math.random() * 1000000)
}

let todos = [
    {
        id: randomId(),
        title: "Đi đá bóng",
        status: false
    },
    {
        id: randomId(),
        title: "Làm bài tập",
        status: true
    },
    {
        id: randomId(),
        title: "Đi chơi",
        status: true
    }
]
//Truy cập
const todoList = document.querySelector(".todo-list");
const optionAll = document.querySelector("#all")
const optionActive = document.getElementById("active")
const optionUnactive = document.getElementById("unactive")
const btnAdd = document.getElementById("btn-add")
const inputEl = document.getElementById("todo-input")
const btnUpdate = document.querySelector(".btn-update")
const change = document.querySelector("#btn-update")

//render danh sách todo
function renderTodo(arr) {
    //Xóa dữ liệu cũ trước khi render
    todoList.innerHTML = ""

    //Trường hợp không có công việc nào trong danh sách
    if (arr.length == 0) {
        todoList.innerHTML = "không có công việc trong danh sách";
    }
    //khi có công việc thì render
    // sử dụng vòng lặp để render
    let content = ""
    for (let i = 0; i < arr.length; i++) {
        const t = arr[i]

        content += ` 
        <div class="todo-item ${t.status ? "active-todo" : ""}">
                <div class="todo-item-title">
                    <input type="checkbox" ${t.status ? "checked" : ""} onclick="toggleStatus(${t.id})"/>
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update" onclick="updateTodo(${t.id})">
                        <img src="./img/pencil.svg" alt="icon">
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                        <img src="./img/remove.svg" alt="icon">
                    </button>
                </div>
            </div>
        `
        //sử dụng toán tủ 3 ngôi nếu đúng(true) thì thực hiện câu lệnh sau dấu ?, sai (false thì thực hiện sau dấu :)
    }
    //sau khi có nội dung thì insert lại nội dung cho todoList
    todoList.innerHTML = content
}
//  // Xóa công việc
function deleteTodo(id) {
    // sử dụng vòng lặp for qua mảng todos để tìm kiếm object có id == id truyền vào
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            // tìm thấy thì xóa khỏi mảng todos
            todos.splice(i, 1)
        }

        //sau khi xóa xong thì gọi function renderTodo để cập nhật lại giao diện

    }
    renderTodo(todos)
    // setDataLocalStorage(todos)
}

//Thay đổi trạng thái công iệc
function toggleStatus(id) {
    //b1: sử dụng vòng lặp for qua mảng todos để tìm kiếm object có id == id truyền vào
    //Neus trạng thái công việc là true => set lại = false
    // Nếu trạng thái là false thì đổi lại lại là true
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status
        }
        //b2: sau khi xóa xong thì gọi function renderTodo để cập nhật lại giao diện

    }
    renderTodo(todos)
    // setDataLocalStorage(todos)
}
//Lọc công việc theo trạng thái
//lắng nghe sự kiện từng nút input
optionAll.addEventListener("click", function () {
    //Mặc định render dữ liệu  mảng todos
    renderTodo(todos)
})
optionActive.addEventListener("click", function () {
    // B1: lọc các công việc có status = true ra 1 mảng mới
    let active = todos.filter(todo => todo.status == true)

    //b2: render lại giao diện mảng vừa lọc
    renderTodo(active)
})
optionUnactive.addEventListener("click", function () {
    // B1: lọc các công việc có status = false ra 1 mảng mới
    let unactive = todos.filter(todo => todo.status == false)
    //b2: render lại giao diện mảng vừa lọc
    renderTodo(unactive)
})
//Thêm công việc
btnAdd.addEventListener("click", function () {
    //b1: lấy ra dữ liệu trong ô input
    let todoTitle = inputEl.value

    //b2: kiểm tra dữ liệu trống
    if (todoTitle == "") {
        //Nếu trống thì thông báo alert
        alert("Nội dung không được để trống")
        return;
    }
    

    //b3: tạo object todo mới
    let newTodo = {
        id: randomId(),
        title: todoTitle,
        status: false
    }
    //b4: thêm object mới vào mảng todos ban đầu
    todos.push(newTodo)
    // setDataLocalStorage(todos)
    //b5: render lại giao diện
    renderTodo(todos) // đã render trong setDataLocalStorage(todos) rồi nên không cần render lại nữa
    //clear dữ liệu trong ô input để nhập cv khác
    inputEl.value = ""

})

// Sửa công việc
//khi click vào icon sửa thì:
// dòng tiêu đề VD: đi đá bóng nhảy lên ô input
// nút thêm bị ẩn đi
// nút sửa hiện ra
// sau đó click vào nút sửa thì thay đổi title, ô thêm hiện ra, ô sửa ẩn đi
let idUpdate = "";
let isUpdate = false;

btnUpdate.addEventListener("click", updateTodo)
function updateTodo(id) {
    let title
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            title = todos[i].title;
        }
    }
    inputEl.value = title
    inputEl.focus()
    change.style.display = "block"
    btnAdd.style.display = "none"
    idUpdate = id;
    isUpdate = true;
    renderTodo(todos)
   
    

}
change.addEventListener("click", function (id) {
    let value = inputEl.value
    if (isUpdate) {
        for(let i = 0; i< todos.length; i++) {
            if(todos[i].id == idUpdate) {
                todos[i].title = value
            }
        }
    }
   idUpdate =""
   isUpdate = false 
    btnAdd.style.display = "block"
    change.style.display = "none"
    renderTodo(todos)
    inputEl.value = ""
})
renderTodo(todos)
//Lấy dữ liệu từ localStorage
// function getDataFromLocalStorage() {
//     let localStorageValue = localStorage.getItem("todos")
//     if (localStorageValue) { //nếu localStorageValue tồn tại ( khác rỗng)
//         todos = JSON.parse(localStorageValue)
//     } else {
//         todos = []
//     }
//     renderTodo(todos)
// }

// //Lưu dữ liệu vào localStorage
// function setDataLocalStorage(arr) {
//     localStorage.setItem("todos",JSON.stringify(arr)) //convert sang kiểu dữ liệu JSON
// renderTodo(todos)
// }

// window.onload = getDataFromLocalStorage // window.onload : khi trang web chạy hết HTML, CSS thì sẽ gọi function getDataFromLocalStorage luôn
