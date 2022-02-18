// Bài 1:Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
//Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”

function repeat(n) {
    let chuoi = ""
    for (let i = 0; i < 10; i++) {
        chuoi += n;
    }
    return chuoi;
}
console.log(repeat("a"));

// Bài 2:Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”

function repeatString(n) {
    let result = n
    for (let i = 1; i < 10; i++) {
        result += "-" + n 

    }
    return result
}
console.log(repeatString("chuoi"));

//Bài 3:Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’

function string (n,b) {
    let ketQua = n
   for ( let i = 1 ; i < b; i++) {
    ketQua = ketQua + "-" + n
   }
    return ketQua
}
console.log(string("a",5));

// Bài 4:Tính tổng các số chia hết cho 5 từ 0 -> 100

function tongChiaHet5() {
    let tong = 0
    for (let i = 0; i <= 100; i++) {
        if (i % 5 == 0) {
            tong += i
        }
    }
    return tong
}
console.log(tongChiaHet5())

// Bài 5:Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function banKinh(a) {
   return (`Thể tích hình cầu là V= ${4 * Math.PI * Math.pow(a, 3) / 3}`);
}
console.log(banKinh(5))

// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function findNum(a, b) {
    let tong = 0
    for (let i = 0; i < (a + b); i++) {
        if (i > a && i < b || i < a && i > b) {
            tong += i
        }

    }
    return tong
}
console.log(findNum(8, 3))
//Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function kiemTraSnt(n) {
    if (n < 2) {
        return false
    }
    else if (n == 2) {
        return true
    }

    else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
                break;
            }
            else {
                return true
            }
        }
    }
}
console.log(kiemTraSnt(4));

//Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function tinhTongSoNguyenTo(n) {
    let sum = 0
    for (let i = 2; i <= n; i++) {
        let m = 1;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                m = 0;
            }
        }
        if (m == 1) {
            sum = sum + i;

        }
    }
    return sum
}
console.log(tinhTongSoNguyenTo(7));


// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function tongUoc(n) {
    let uoc = 0
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            uoc += i

        }
    }
    return uoc
}
console.log(tongUoc(8));