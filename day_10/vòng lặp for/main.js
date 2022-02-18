// Thực hiện kế hoạch trong 30 ngày: dậy lúc 5h sáng

// for(let day = 1; day <= 30; day = day + 1) {
//     console.log(`Ngày ${day} thức dậy lúc 5h`);
// }

// //Cú pháp: for(giá trị khởi tạo ban đầu; điều kiện để còng lặp dừng; cập nhật giá trị sau mỗi lần lặp)

// //VD2: chỉ thức dậy lúc 5h vào những ngày lẻ, còn ngày chẵn dậy lúc 7h

// for(let Day = 1; Day <=30; Day= Day +1) {
//     if(Day % 2 == 1) {
//         console.log(`Ngày ${Day}dậy lúc 5h`);

//     } else {
//         console.log(`ngày ${Day} dậy lúc 7h`);
//     }
// }


//break được sử dụng để kết thúc vòng lặp.
//VD: Thức dậy lúc 5h, dừng lại ở ngày 20
// for (let day = 1; day <= 30; day = day + 1) {
//     if (day == 20) {
//         console.log("Không dậy nữa")
//         break
//     }    
//     console.log(`Ngày ${day} dậy lúc 5h`)
// }

//continue được sử dụng để bỏ qua một vòng lặp hiện tại.
//VD: dậy lúc 5h, với các ngày chủ nhật thì không cần thực hiện
// for (let day = 1; day <= 30; day++) {   //day++ <=> day=day+1
// if (day % 7 == 0) {
//     console.log("chủ nhật, k dậy")
//     continue
// }
// console.log(`Ngày ${day} dậy lúc 5h`)
// }

//VD2: thực hiện tiết kiệm tiền trong 10 ngày
// Mỗi ngày tiết kiệm 100.000VND

// let totalMoney = 0;

// for (let Day = 1; Day <=10; Day++) {
//     totalMoney = totalMoney + 100000; // Số tiền của ngày hôm nay= những ngày htrc + 100.000
// }
// console.log(totalMoney);

// 1. Nếu ngày lẻ tiết kiệm 100000, ngày chẵn 200000
// 2. thực hiện tiết kiệm 100.000 đến ngày 8 thì dừng lại
// 3. chỉ thực hiện tiết kiệm 100.000 vào các ngày chẵn, ngày lẻ bỏ qua

//1.

 let totalMoney= 0;
 for (let day = 1; day<=10; day++) {
     if(day % 2 == 0) {
         totalMoney = totalMoney + 200000
         continue
     } else {
         totalMoney = totalMoney + 100000
     }
 }
 console.log(totalMoney)

 //2.

 let money = 0;
 for (let Day= 1; Day <=10; Day++) {
    if (Day >= 8) {
        break
    } else {
        money = money + 100000;
    }
 }
 console.log(money)

 //3.
 let Money = 0
 for ( ngay= 1; ngay <=10; ngay ++) {
if (ngay % 2 == 0) {
    Money = Money + 100000 // tương đương với Money +=100000
}
 }
 console.log(Money)