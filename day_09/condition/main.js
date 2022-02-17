// Kiểu dữ liệu Boolean
// let a = true;
// let b = false;
// let c = !a;
// let d = !b;
// console.log(a,b,c,d)

// //Sử dụng hàm Boolean để kiểm tra giá trị đúng sai cỉa 1 biến hay biểu thức

// console.log(Boolean(10)); //True
// console.log(Boolean("Duy Bình")); //true
// console.log(Boolean(3+5)); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false

// //Có 6 giá trị sau được coi là falsy : false, 0, NaN, "", null, undefined
// //Các giá trị còn lại, ngoài các giá trị trên được gọi là truthy
// console.log(Boolean(false)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false

// Toán tử và (&&)  : CHỉ đúng khi cả 2 cùng đúng, còn lại là false
 console.log(true&&true); //True
 console.log(true&&false); //False
 console.log(false&&true);//False
 console.log(false&&false);//False


// Toán tử hoặc (||) : CHỉ sai khi cả 2 cùng sai, còn lại là true
console.log(true||true); //true
console.log(true||false); //true
console.log(false||true); //true
console.log(false||false); //false

// CÂU LỆNH ĐIỀU KIỆN if-else

//Câu lệnh if
let hour = 18;
if (hour<10) {
    console.log("Good Morning!");
}


let troiDep = true
let coTien = false
if(troiDep == true && coTien==true) {   // 1 dấu = là gán, 2 dấu == là so sánh
    console.log("Đi chơi");
}

//Câu lệnh if-else
if(hour < 12) {
 console.log("CHào buổi sáng")
} else {
    console.log("Chào buổi chiều")
}

// Câu lệnh if-else if - else
if(hour<12) {
    console.log("Chào buổi sáng");
} else if (hour >=12 && hour < 18){
    console.log("Chào buổi chiều");
} else {
    console.log("Chào buổi tối");
}

//Bài tập 
//Bài 1: Viết function nhập vào biến mark có giá trị từ 0 -> 100. Kiểm tra giá trị của biến mark và in ra nội dụng sau
// ”A” nếu mark >= 85
// ”B” nếu 70 <= mark < 85 (70 <= mark && mark < 85)
// ”C” nếu 40 <= mark < 70 (40 <= mark && mark <70)
// Các trường hợp còn lại in ra “D”

function checkMark(mark) {
    if(mark >=85) {
        console.log("A");
    } else if (mark<85 && mark >=70) {
        console.log("B");
    } else if (mark < 70 && mark >= 40) {
        console.log("C");
    } else {
        console.log("D")
    }
}
checkMark(1)


//Bài 2: Viết function truyền vào 2 số a, b. In ra màn hình số có giá trị lớn hơn 
function find(a,b) {
    if (a>b) {
        console.log(a);
    } else if (a < b) {
        console.log(b);
    } else {
        console.log("false");
    }
}
find(1,5)

//Bài 3: Viết function nhập vào 1 số. Kiểm tra số đó là số âm, số dương hay là số 0.
function number(a) {
    if(a > 0) {
        console.log(" a là số dương");
    } else if (a < 0) {
        console.log("a là số âm");
    } else {
        console.log("a là số 0")
    }
}
number(1)

//Bài 4: Viết function nhập vào 1 số. Kiểm tra số đó là số chẵn hay số lẻ.
function chanLe(a) {
    if (a % 2 == 0) {
        console.log("a là số chẵn")
    } else {
        console.log("a là số lẻ")
    }
}
chanLe(5)

//Bài 5: Viết function nhập vào 1 số. Kiểm tra số đó có đồng thời chia hết cho 3 và 5 không
function so(a) {
    if (a % 5 ==0 && a % 3==0) {
        console.log("a chia hết cho cả 3 và 5")
    } else {
        console.log("a không chia hết cho cả 3 và 5")
    }
}
so(20)

//Bài 6: Viết function nhập vào 3 số a, b, c. Kiểm tra xem c có bằng a + b không?
 function sum(a,b,c) {
     if (a + b == c) {
         console.log("có")
     }else {
         console.log("không")
     }
 }
 sum(1,2,4)

 // kHác nhau giữa == và ===
 //VD: 
 let a = 2;
 let b = "2";
 a == b; // True: chuỗi "2" đc convert thành số 2 -> True
            // == sẽ thực hiện các chuyển đổi cần thiết trc khi so sánh (về mặt giá trị)  
 a === b; //False : Không thực hiện chuyển đổi. Vì vậy, nếu 2 giá trị không cùng loại sẽ có kqua là False
 
 // Toán tử 3 ngôi
  // Cú pháp: Condition ? true : false
  // condition = true : thực thi câu lệnh đằng sau dấu ?
  // condition = false : thực thi câu lệnh đằng sau dấu :

  //Sử dụng if-else bình thường
//   let hour = 6

// if (hour < 12) {
//     console.log("Good morning!");
// } else {
//     console.log("Good afternoon!");
// }


//VỚi toán tử 3 ngôi
let Hour = 6;
Hour < 12 ? console.log("chào buổi sáng") : console.log("chào buổi chiều") 

//Chú ý: toán tử 3 ngôi chỉ sử dụng trong trường hợp có 1 cấp if-else

function bac2(a,b) {
    if (a == 0 ) {
        if (b == 0) {
            console.log("pt vô số nghiệm")
        } else {
            console.log("pt vô nghiệm")
        }
    } else {
        console.log(`pt có nghiệm duy nhất x = ${-b/a}`)
    }
}
bac2(2,3)

//Năm nhuận : là năm chia hết cho 400 hoặc chi hết cho 4 và k chia hết cho 100
function namNhuan(year) {
    if (year % 400 == 0 || year%4 ==0 && year % 100 !=0) {
        console.log("đây là năm nhuận")
    } else {
        console.log("đây là năm không nhuận")
    }
}
namNhuan(2020)