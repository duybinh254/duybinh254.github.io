//function (Hàm)

// cú pháp định nghĩa function 
function sayHello() {
console.log("xin chào");
}

// cú pháp thực thi function
sayHello()

//function có 1 tham số
function sayHelloWithName(name) {  //name: tham số
    console.log(`xin chào ${name}`);
}

sayHelloWithName("Duy Bình")  //duy bình: đối số
sayHelloWithName("Nguyễn Hà") 

//function có 2 tham số (không nên có quá 3 tham số)
function sayHelloWithNameAndYear(name, year) {
    console.log(`xin chào ${name}. Năm nay ${2022-year} tuổi.`)

}
sayHelloWithNameAndYear("Duy Bình",1997)

// function trả về kết quả : để trả về kqua sử dụng return
    //tính tổng 2 số bất kỳ
function sum(a,b) {
let result= a + b;
 // console.log(a)  được thực thi
return result; //Các câu lệnh đằng sau Return sẽ không đc thực thi !!!
console.log(a) //không đc thực thi
}

 let data= sum(3,4) //lưu giá trị sum đã cộng vào biến data
 console.log (data)

 console.log(sum(5,6)); // Nếu chỉ muốn kiểm tra kết quả thì sử dụng console.log
 console.log(sum(data,5)); //lưu giá trị data để sử dụng sau


// Default Parameter ES6
//Cho phép khởi tạo function với những default value nếu như chúng được định nghĩa sai, function sẽ dử dụng các giá trị mặc định đã đc định nghĩa
function sum(a = 10,b =20) {
    let result= a + b;
return result;
}
console.log(sum()) // không điền giá trị a,b thì sum tự động sử dụng giá trị mặc định a=10, b=20
console.log(sum(5)) // thiếu giá trị b thì sum = 5 + 20

//Bài tập
//1.In ra dòng chữ: Xin chào các bạn.
function hello() {
    console.log("xin chào các bạn")
}
hello()
//2.In ra dòng chữ : Xin chào X (với X là một chuỗi bất kỳ, nhập vào tham số khi gọi hàm).
function helloX(name) {
    console.log(`xin chào ${name}`);
}
helloX("Duy Bình")
 
//3.In ra dòng chữ : Xin chào “X” (với X là một chuỗi bất kỳ, nhập vào tham số khi gọi hàm).
function HelloX(Name) {
    console.log(`xin chào "${Name}"`);

}
HelloX("Nguyễn Hà")

//4.Tính tổng 2 số a,b bất kỳ
function sum(a,b) {
    let result = a+b;
    return result;
}
console.log(sum(5,4))

//5.Tính bình phương 1 số bất kỳ.
function binhPhuong(a) {
    let result = a*a;
    return result;
}
console.log(binhPhuong(5))

//6.Tính thế kỷ của 1 năm bất kỳ (năm là 1 số nguyên dương).
function theKy(year) {
    let result = Math.ceil(year/100);
    return result;
}
console.log(theKy(2019))


// Phạm vi của biến
  //global scope: biến đc định nghĩa ngoài function gọi là global scope
  let number = 10;
  let email = "duybinh@gmail.com"

  //function scope : biến đc định nghĩa bên trong function
    function lastName() {
        let name = "Bình";
        console.log(name)
    }
 lastName()
    //console.log(name) ở ngoài function sẽ không được thực thi (báo lỗi)

// block scope: Một biến được coi là block scope nếu biến đó được định nghĩa bên trong cặp dấu {}
{
    let message ="hôm nay là thứ 2"
    console.log(message)
}
        //console.log(message) ở ngoài dấu {} sẽ báo lỗi
        

// CHÚ Ý : Nếu 1 biến không có từ khóa khai báo biến, sẽ trở thành biến global
// function sayHello() {
//      number = 10;
//     console.log(number);
// }

// sayHello() // 10

// console.log(number); // 10
