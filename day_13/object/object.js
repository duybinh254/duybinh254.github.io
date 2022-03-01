// Object: 
// Property- thuộc tính: Mô tả đặc điểm, tính chất của 1 đối tượng
// Method - phương thức: Mô tả hành động

// method - function khác nhau ở: 
// Method: gắn liền với đối tượng, kbh đứng 1 mình
// Function: có thể thực thi độc lập

// 1. Khởi tạo Object 

let emptyObj = {}  // object rỗng


// Cách 1: Khởi tạo 1 object rỗng sau đó điền giá trị cho nó
let person = {}
person.id = 1
person.name = "Bùi Duy Bình"
person.address = "Hà Nội"
person.sayHello = function () {
    console.log("xin chào các bạn");
}
person.eat = function (name) {
    console.log(`Đang ăn ${name}...`);
}
console.log(person);

// Lấy giá trị của object
console.log(person.name);
console.log(person.address);
person.sayHello()
person.eat("cơm")
person.eat("pizza")

// Set lại giá trị 
person.id = 10;
person.address = "Đà Nẵng"
console.log(person);

// Xóa 1 thuộc tính
delete person.id
console.log(person);

// Cách 2: vừa khai báo, vừa khởi tạo giá trị cho object

let user = {
    name: "Nguyễn Văn A",
    age: 23,
    email: "abc@gmail.com",
    "first_name" : "Bùi"
}
console.log(user);

// Lấy giá trị của name trong user
let name = user.name
console.log(name); // cách 1
console.log(user["name"]); // cách 2
// Tương tự với age, email
let email = user.email
console.log(email);
let age = user.age
console.log(age);
console.log(user["first_name"]); 


// Ngoài ra có thể dùng cú pháp obj[key] để lấy giá trị
let name1 = user["name"]
let age1 = user["age"]
let email1 = user["email"]

// Phương thức (Method)
let student = {
    name: "Nguyễn Văn A",
    age: 19,
    email: "nguyenvana@gmail.com"
}

    
    // 1.Lấy danh sách key của object -> mảng các key
    console.log(Object.keys(student));

    // 2. Lấy danh sách value -> mảng các value
    console.log(Object.values(student));

    // 3. Kiểm tra 1 key có nằm trong Object không
    console.log(student.hasOwnProperty("email")); //true
    console.log(student.hasOwnProperty("name")); // true
    console.log(student.hasOwnProperty("address")); //false

    // Các cách duyệt mảng : for, while, do-while, forEach, for ... of

    // Duyệt Object : for, for ... in

        // Sử dụng For ... in
        for (const key in student)  {  // Duyệt qua tất cả các key của object và in ra value của lần lượt của các key
           console.log(student[key]);
        }

        // Sử dụng for
        let keys = Object.keys(student) // lấy ra mảng các key của object student 
        for(let i = 0; i < keys.length; i++) {
            //key = keys[i]
            //name = keys[0]
            console.log(student[keys[i]]);
        }


// Thực hành
//Bài 1:
// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"

// 4. Tìm các sản phẩm có giá > 20000000

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

// 8. Sắp xếp giỏ hàng theo price tăng dần

// 9. Sắp xếp giỏ hàng theo count giảm dần

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
