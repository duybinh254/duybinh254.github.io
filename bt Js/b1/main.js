
var reverse = function(x) {
    const isNegative = x < 0;
    const xStrArr = Math.abs(x).toString().split(""); // lấy giá trị tuyệt đối x, chuyển sang chuỗi, tách chuỗi
    const reverseStr = xStrArr.reverse().join(""); // đảo ngược và nối chuỗi
    const num = Number(reverseStr); // chuyển sang Number
    if (isNegative && num < Math.pow(-2, 31)) {
        return 0;
    }
    if (isNegative && num > Math.pow(2, 31) - 1) {
        return 0;
    }
    return isNegative ? -num : num;
};
console.log(reverse(-120));