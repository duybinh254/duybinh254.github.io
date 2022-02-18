// Thực hiện kế hoạch trong 30 ngày: dậy lúc 5h sáng

// for(let day = 1; day <= 30; day = day + 1) {
//     console.log(`Ngày ${day} thức dậy lúc 5h`);
// }

//Sử dụng While 

// let day = 1 //giá trị khởi tạo
// while(day <=30) { // điều kiện

//     console.log(`Ngày ${day} thức dậy lúc 5h`)

//     day = day + 1 // Cập nhật giá trị mới
// }

// //VD2: chỉ thức dậy lúc 5h vào những ngày lẻ, còn ngày chẵn dậy lúc 7h

// for(let Day = 1; Day <=30; Day= Day +1) {
//     if(Day % 2 == 1) {
//         console.log(`Ngày ${Day}dậy lúc 5h`);

//     } else {
//         console.log(`ngày ${Day} dậy lúc 7h`);
//     }
// }

// let day = 1
// while (day <= 30) {
//     if (day % 2 == 1) {
//         console.log(`Ngày ${day}dậy lúc 5h`);

//     } else {
//         console.log(`ngày ${day} dậy lúc 7h`);
//     }
//     day++

// }



//VD: Thức dậy lúc 5h, dừng lại ở ngày 20
// for (let day = 1; day <= 30; day = day + 1) {
//     if (day == 20) {
//         console.log("Không dậy nữa")
//         break
//     }
//     console.log(`Ngày ${day} dậy lúc 5h`)
// }

// let day = 1
// while(day <=30) {
//     if (day == 20) {
//                 console.log("Không dậy nữa")
//                 break
//             }
//             console.log(`Ngày ${day} dậy lúc 5h`)
//     day++
// }



//VD: dậy lúc 5h, với các ngày chủ nhật thì không cần thực hiện
// for (let day = 1; day <= 30; day++) {   //day++ <=> day=day+1
// if (day % 7 == 0) {
//     console.log("chủ nhật, k dậy")
//     continue
// }
// console.log(`Ngày ${day} dậy lúc 5h`)
// }

// let day = 1
// while (day <= 30) {
//     if (day % 7 == 0) {
//         console.log("chủ nhật, k dậy")
//     }
//     console.log(`Ngày ${day} dậy lúc 5h`)
//     day++
// }


//VÒNG LẶP DO-WHILE
  //VD.// Thực hiện kế hoạch trong 30 ngày: dậy lúc 5h sáng
  // let day = 1 //giá trị khởi tạo
// while(day <=30) { // điều kiện

//     console.log(`Ngày ${day} thức dậy lúc 5h`)

//     day = day + 1 // Cập nhật giá trị mới
// }

// let day = 1 //giá trị khởi tạo
// do{
//     console.log(`Ngày ${day} thức dậy lúc 5h`) //câu lệnh thực thi
//     day++
// }
// while(day <=30) // điều kiện



// Viết function 1 chuỗi bất kỳ, kết quả trả ra : sao chép chuỗi đó lên 10 lần

