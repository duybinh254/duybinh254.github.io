// Khai báo array rỗng
let arr = [];

// Khai báo array
let number = [];

// Gán giá trị cho các phần tử của array thông qua chỉ số
number[0] = 1;
number[1] = "Bùi Hiên";
number[2] = true;
console.log(number);

// Khai báo và khởi tạo giá trị cho array
let myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];
myArr[4] = 5 // thay đổi giá trị trong mảng thông qua chỉ số [4] : sô thứ tự trong mảng

// chuyển thành mảng rỗng
// myArr = [] // Cách 1
// myArr.length = 0 // Cách 2
console.log(myArr);

// Tính chất tham chiếu của array (reference type)
// let arr1 = [1,2,3,4]
// let arr2 = arr1

// console.log(arr1);
// console.log(arr2);

// arr2[0] = 5
// console.log(arr1);
// console.log(arr2);

// Value type
let a = 1
let b = a
b = b + 2;
console.log(a); // 1
console.log(b); // 3

// So sánh

let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 4]
let arr3 = [4, 3, 2, 1]
let str = "1,2,3,4"

console.log(arr1 == arr2); //false vì lưu ở 2 địa chỉ bộ nhớ khác nhau
console.log(arr3 == arr3.sort());  //true vì lưu cùng địa chỉ bộ nhớ
console.log(arr1 == str); // true vì mảng sẽ đc convert sang chuỗi. bản chất là (arr1.toString() == str)
console.log(arr1 === str); //false vì === so sánh nghiêm ngặt, không chuyển đổi kiểu dữ liệu

//SỬ DỤNG VÒNG LẶP QUA ARRAY
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Tính tổng các giá trị của mảng
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum);

//tính tổng các giá trị lẻ
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        sum1 += numbers[i]
    }
}
console.log(sum1);

//Kiểm tra 1 mảng có phải mảng tăng dần hay không
function checkArrAsc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false

        }

    }
    return true
}
// console.log(checkArrAsc([1,3,2,5]));

// //Kiểm tra mảng có phải là mảng số chẵn tăng dần hay không
function checkArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            for (let i = 0; i > arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    return false
                }
            }
            return true
        }
        
    } 
    return false
}
console.log(checkArr([2, 1, 6, 8]));

//Bài 4:Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

//B1:chuyển từ số sang chuỗi = .toString
//B2: chuyển từ chuỗi sang mảng .split("")
//B3: sắp xếp mảng theo thứ tự tăng dần .sort();
//b4: chuyển từ mảng sang chuỗi
//b5: sắp xếp lại

// function findMin(number) {
//     let string = number.toString()
//     let arr = string.split("")
//     let sort = arr.sort()
//     let strconvert = sort.join("")
//     let res = ""
//     // tìm kí tự đầu tiên khác 0 trong chuỗi. tiến hành cắt và đưa lên đầu
//     for (i = 0; i < strconvert.length; i++) {
//         if (strconvert[i] != 0) {
//             res = strconvert[i] + strconvert.slice(0, i) + strconvert.slice(i + 1)
//             break;
//         }

//     }
//     return res
// }
// console.log(findMin(235930));


// tìm hiểu Array Method để làm bài tập


//Bài 2: Cách 2
let suffle = arr => {
    return arr.sort(() => Math.random() - 0.5)
}
console.log(suffle([1,2,3,4,5]));

//Bài 3:
let array = (arr1,arr2) => {
    
}