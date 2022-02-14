//console.log("hello world");
// alert("xin chào");
// document.write("xin chào các bạn")
//khai báo biến: 
// let name;
// //gán giá trị cho biến
// name="duy bình"
// console.log(name);
//vừa khai báo biến vừa gán giá trị cho biến
let email = "dubinh254@gmail.com";
console.log(email);

//khai báo biến sử dụng const
const pi = 3.14;
console.log(pi);

//khai báo chuỗi rỗng
let emptyString = "";

//cộng chuỗi
let firstName = "Duy";
let lastName = "Bình";
let fullName = firstName +" "+ lastName;
console.log(fullName);
//cộng chuỗi với số
console.log(fullName + " " +10+20); //bản chất là : "Duy Bình + 10"
console.log(10+20+ fullName);  //bản chất là : cộng số rồi nối với chuỗi
console.log(10+20 - fullName); 
console.log("20"-"10"); //20-10=10
//Trường hợp trong chuỗi cũng có xuất hiện dấu nháy đơn hoặc nháy kép thì phải thêm ký tự \ đằng trước dấu nháy đó.
// let message = "Xin chào các bạn, mình tên là \"Bùi Hiên\". Mình sinh năm 1997";
// console.log(message);
let Message = "Xin chào các bạn, " +
"mình tên là \"Bùi Hiên\". " +
"Mình sinh năm 1997";
//các phép trừ, nhân, chia các chuỗi sẽ đc convert sang số, không convert đc thì kết quả ra k xác định NaN
console.log(Message);
console.log(""+1+0); // chuỗi rộng + 1 = chuỗi 1 + 0 = chuỗi 10
console.log(""-1+0); // phép trừ nên "" rỗng đc convert ra thành số 0\ 0-1+0=-1
console.log(true + false); //true =1 , false = 0
console.log(6/"3") // phép chia, chuỗi ''3'' đc convert thành số 3
console.log("2" * "3")
console.log(4+5+"px")
console.log("$"+4+5)
console.log("4"-2)
console.log("4px" - 2)
console.log(7/0); // kết quả ra Infinity : dương vô cùng
console.log("-9"+5)
console.log("-9"-5)
console.log(null+1) // null đại diện cho tập rỗng, đc convert ra thành số 0
console.log(undefined + 1 )
console.log(typeof(7) + 1 )
console.log(typeof "9" + 5)
let Name = "Duy Bình";
let year = "1997";
// sử dụng template string
let message = `Xin chào các bạn, mình tên là "${Name}". Mình sinh năm ${year}. Năm nay mình ${2022-year} tuổi`;
console.log(message);
let a = 1;
let b = 22;
let name="John";

// Các câu lệnh sau sẽ in ra kết quả gì

console.log(b + a);         //22+1=23
// console.log(c);         //c
console.log(a + name);  // 1John
console.log(a + name + b);  //1John22
console.log(a + b + name);  //23John
console.log(name + a);    //John1
console.log(name + a + b);  //John122
console.log(name + (a + b));  //John23
console.log(`Hello ${name}`);  //Hello John
console.log(`${name} + 1`);  //John+1 phép tính chỉ thực hiện trong dấu {}, còn lại trong dấu ` ` thì giữ nguyên
console.log(`${name + 1}`);  //John1
console.log(`${name + a}`);  //John1
console.log(`a + b = ${a + b}`); // a+b=23
console.log(`a + b = ${1 + 2}`); //a+b=3
console.log(`1 + 2 = ${1 + 2}`); //1+2=3
console.log(`1 + 2 = ${a + b}`); //1+2=23

let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);
console.log(num1 ** num2);

//giá trị của pi
console.log(Math.PI);

 //làm tròn
  //Math.round(number):làm tròn bình thường
  //Math.floor(): làm tròn xuống số nguyên gần nhất
  //Math.ceil():làm tròn lên số nguyên gần nhất
  //Math.random(): random trong khoảng từ 0 đến 1
  console.log(Math.random())
  console.log(Math.random())
  //Math.pow(a,b): a mũ b
  //Math.sqrt(number):căn bậc 2
  //Math.abs():giá trị tuyệt đối
  //Math.max(danh sách các số): lấy ra số lớn nhất trog danh sách
  //Math.min():lấy ra số nhỏ nhất