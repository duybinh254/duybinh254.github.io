// Bài 1: Viết function truyền vào 1 số nguyên dương. Tính giai thừa của số đó
//Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120

function tinhGiaiThua(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result = result * i

    }
    return result
}
console.log(tinhGiaiThua(5));

//Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString(‘hello’) => olleh

function reverseString(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
console.log(reverseString("Hello"));

/*
Giải thích:
  - Ta khai báo một biến tên là reserved ở đầu function là một chuỗi rỗng (Biến này sẽ
  trả về một chuỗi đã được đảo ngược sau khi cộng chuỗi).
  - Bước 2:
    + Lệnh 1: Ta khai báo biến i = str.length - 1, tức là giá trị ban đầu của i khi chạy vòng lặp for là bằng giá trị của độ dài chuỗi trừ đi 1, tại sao lại trừ đi 1?
    Vì index trong JS được đánh dấu từ 0 nhé. Ví dụ: chuỗi có 10 phần từ thì index của
    nó chạy đến 9 là hết 10 phần tử rồi.
    + Lệnh 2: Ta đặt i >= 0, tức là khi i giảm về đến 0 thì vòng lặp sẽ kết thúc.
    + Lệnh 3: Ta cho i tự trừ đi một đơn vị sau mỗi lần lặp.
  - Bước 3: Ta dùng kỹ thuật cộng chuỗi để nối các chữ lại với nhau sau mỗi lần lặp sẽ
  được cộng dồn vào biến reversed.
  - Bước 4: cuối cùng là in ra màn hình kết quả cuối cùng là biến reserved chứa đoạn 
  chuỗi đã được đảo ngược
*/

// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
// Ví dụ: translate(‘VN’) => “Xin chào”
// translate(‘EN’) => “Hello”

function language(string) {

    switch (string) {
        case "VN": {
            return "xin chào";
        }
        case "EN": {
            return "Hello";
        }
        case "JP": {
            return "Konbanwa";
        }
        case "FR": {
            return "Bonjour ";
        }
        default: {
            return "Không dịch được";
        }
    }

}
console.log(language("VN"))

// Bài 4:  Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”

function catChuoi(string) {
    let newString = ""
    for (let i = 0; i < 10; i++) {
        newString = newString + string[i]
    }
    let sum = newString + "..."
    return sum
}
console.log(catChuoi("xinchaocacbandenvoiTechmaster"))

//Bài 5:
// document.write(`<span style="color:red">Duy Bình</span>`)

function chanLe() {
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            document.write(`<span style="color:red">${i + " "}</sapn>`);

        } else {
            document.write(`<span style="color:blue">${i + " "}</sapn>`);
        }
    }
}
chanLe()

// vòng lặp lồng nhau
//VD:
for (let i = 0; i < 4; i++) {
    for (let j = 3; j < 5; j++) {
        console.log(i, j);
    }
}

//Sử dụng vòng lặp lồng nhau để in ra các hình sau (sử dụng document.write)

//Bài 1:
function drawRectangle(row, col) {
    let content = ""
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {

            content += "* "
        }
        content += `<br />`
    }
    document.write(`<pre>${content}</pre>`)
}
drawRectangle(5, 4)

//Bài 2:
function drawRectangle2(row, col) {
    let content = ""
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (i == 1 || j == 1 || i == row || j == col) {
                content += "* "
            }
            else {
                content += "  "
            }

        }
        content += `<br />`
    }
    document.write(`<pre>${content}</pre>`)
}
drawRectangle2(5, 4)

//Bài 3:

function drawRectangle3(side) {
    let content = ""
    for (let i = 1; i <= side; i++) {
        for (let j = 1; j <= side; j++) {
            if (i == j || i + j - 1 == side) {
                content += "* "
            } else {
                content += "  "
            }

        }
        content += `<br />`
    }
    document.write(`<pre>${content}</pre>`)
}
drawRectangle3(5)

//Bài 4:
function drawRectangle4(side) {
    let content = ""
    for (let i = 1; i <= side; i++) {
        for (let j = 1; j <= side; j++) {
            if (i >= j ) {
                content += "* "
            } else {
                content += "  "
            }

        }
        content += `<br />`
    }
    document.write(`<pre>${content}</pre>`)
}
drawRectangle4(5)

