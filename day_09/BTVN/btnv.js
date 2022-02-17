//Bài 1:
// Viết function truyền vào 1 số bất kỳ và thực hiện kiểm tra
// Nếu số đó chia hết cho 3 và 5 thì in ra “FizzBuzz”
// Nếu số đó chia hêt cho 3 thì in ra “Fizz”
// Nếu số đó chia hêt cho 5 thì in ra “Buzz”

function fizzBuzz(number) {
    if (number % 15 === 0) {
        console.log("fizzBuzz")
    } else if (number % 3 === 0) {
        console.log("fizz")
    } else if (number % 5 === 0) {
        console.log("Buzz")
    }
}
fizzBuzz(20)

// Bài 2:
//Viết function giải phương trình bậc nhất (ax + b= 0)
// Cần kiểm tra trường hợp a = 0 và a != 0
// In ra kết quả

function giaiPtBac1(a, b) {
    if (a == 0) {
        if (b == 0) {
            console.log("pt vô số nghiệm")
        } else {
            console.log("pt vô nghiệm")
        }
    } else {
        console.log(`pt có nghiệm duy nhất x = ${-b / a}`)
    }
}
giaiPtBac1(2, 3)

//Bài 3:Viết function giải phương trình bậc 2 (ax^2 + bx + c = 0)
// Cần kiểm tra trường hợp a = 0 và a != 0
// In ra kết quả

function giaiPtBac2(a, b, c) {
    if (a == 0) {
        console.log(`pt có nghiệm duy nhất x = ${-c / b}`);
    } else {
        let delta = b * b - 4 * a * c
        if (delta < 0) {
            console.log("pt vô nghiệm");
        } else if (delta == 0) {
            console.log(`pt có nghiệm kép x1 = x2 = ${-b / 2 * a}`);
        } else {
            console.log(`pt có 2 nghiệm. x1 = ${(-b + Math.sqrt(delta)) / 2 * a}, x2 = ${(-b - Math.sqrt(delta)) / 2 * a}`);
        }
    }
}
giaiPtBac2(1, -3, 2)

// Bài 4:Viết function truyền vào 1 năm bất kỳ. Kiểm tra xem năm đó có là năm nhuận hay không?
// Nếu có là năm nhuận in ra kết quả “Là năm nhuận”
// Nếu không in ra kết quả “Không la năm nhuận”
// Cách tính năm nhuận như thế nào thì lên mạng tra

function namNhuan(year) {
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
        console.log("đây là năm nhuận")
    } else {
        console.log("đây là năm không nhuận")
    }
}
namNhuan(2020)

//Bài 5:Viết function truyền vào 2 giá trị, đại diện cho cân nặng và chiều cao. Tính chỉ số BMI tương ứng
// Sử dụng return

function tinhBMI(canNang, chieuCao) {
    let BMI = canNang/(chieuCao * chieuCao)
    return BMI
}
console.log(tinhBMI(65, 1.65));

//Bài 6:Viết function truyền vào giá trị độ C. Tính giá trị độ F tương ứng
// Sử dụng return
function tinhDoF(a) {
    let doF = a * 9/5 + 32
    return doF
}
console.log(tinhDoF(20));



