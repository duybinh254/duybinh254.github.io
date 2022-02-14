# **Khai báo biến**
Khai báo biến sử dụng 2 từ khóa `let` `const`
- ### Khai báo biến với `let`
```js
//Khai báo biến không gán giá trị cho biến:
let name;

//Khai báo biến và gán giá trị cho biến:
let name = "Duy Bình";
```
- ### Khai báo viến với `const`
Sử dựng để khai báo hằng số
```js
const number =10;
```
>Không thể gán lại giá trị cho 1 biến `const`

## Kiểm tra kiểu dữ liệu của biến
Sử dụng toán tử `typeof`
```js
let age = 10;
console.log(typeof age); //"number"
let name = "Duy Bình";
console.log(typeof name); //"string"
```
# Kiểu dữ liệu String (chuỗi)
String 

- Là 1 đoạn text có 1 hoặc nhiều ký tự.
- các chuỗi đc bao quanh bởi dấu " " hoặc ' '
## Nối chuỗi trong JS
sử dụng dấu + để ghép 2 chuỗi hoặc biến lại với nhau.
```js
let firstName = "Bùi";
let lastName = "Duy Bình";
let fullName = firstName + " " + lastName;
```
## Template strings - ES6
- khai báo chuỗi dùng kí tự back-tick `` thay cho "" ''
- dùng `` có thể khai báo chuỗi nhiều dòng và dùng dấu " " '' thoải mái.
- Có thể dùng các biến, biểu thức ngay trong chuỗi với cú pháp sau
```js
`string_text ${expression} string_text`
```
VD:
```js
let name = "Duy Bình";
let year = 1997;
console.log(`minh ten la ${name}.Mình ${2022-year} tuổi.`)
```
# Kiểu dữ liệu Number
là một tập hợp của các con số (0 – 9) không chứa dấu khoảng trắng và có thể chứa dấu trừ (-) nằm ở đầu để đại diện cho số âm.
# Math object trong JS
`Math` giúp thực hiện các biểu thức toán học.
- Math.PI : lấy giá trị số pi
```js
console.log(Math.PI); //3.141592653589793
```
- Math.round(number): làm tròn số bình thường
- Math.sqrt(number): căn bậc 2
 


Các phường thức khác của `Math`. Tham khảo [`Tại đây`](https://www.w3schools.com/js/js_math.asp)