//Bài 1: Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
//Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

function check_str(str, sub) {

    return str.includes(sub)
    //cách 2:
    // let check = str.indexOf(sub);
    // // if (check == -1) {
    // //     return false
    // // } else {
    // //     return true
    // // }

}
console.log(check_str("buiduybinh", "tech"));

//Bài 2: Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên
function rutGon(str) {
    if (str.length > 8) {
        return str.substring(0, 8) + "..."
    } else {
        return str
    }
}
console.log(rutGon("xin chào các bạn"));

//Bài 3: Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.
function kiemTra(str) {
    let string = str
    //bỏ khoảng trắng
    string = string.replace(/ /g, "")
    // in thường chữ
    string = string.toLowerCase()
    let reverse = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i]
    }
    // so sánh chuỗi sau khi bỏ khoảng trắng, in thường và đảo ngược của nó
    if (string == reverse) {
        return true
    } else {
        return false
    }
}
console.log(kiemTra("race car"));

//Bài 4:Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).


function findMin(number) {
    let string = number.toString()
    let arr = string.split("")
    let sort = arr.sort()
    let strconvert = sort.join("")
    let res = ""
    for (i = 0; i < strconvert.length; i++) {
        if (strconvert[i] != 0) {
            res = strconvert[i] + strconvert.slice(0, i) + strconvert.slice(i + 1)
            break;
        }

    }
    return res
}
console.log(findMin(235930));


//Bài 5:Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường
function transform(string) {
    return string.toLowerCase().replaceAll(" ", "_")
}
console.log(transform("Xin CHÀO các bạn"));