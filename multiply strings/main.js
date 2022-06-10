var multiply = function(num1, num2) {
    const result = Array(num1.length + num2.length).fill(0)
    
    for (let j = num2.length - 1; j > -1; j--) {
      for (let i = num1.length - 1; i > -1; i--) {
        const product = num1[i] * num2[j]
        //cập nhật kết quả, chỉ mục kết quả xếp từ phải sang trái
        const index = num1.length + num2.length - 1 - (num2.length - 1 - j + num1.length - 1 - i)
        result[index] += product
        // nếu phần tử trong mảng > 9 
        if (result[index] > 9) {
            // thì số đằng trước cộng thêm kqua /10
          result[index - 1] += Math.floor(result[index] / 10)
          // phần tử > 9 lấy phần dư của /10
          result[index] %= 10
        }
      }
    }
    // nếu kết quả có số 0 ở đầu thì xóa bỏ 
    while (result[0] === 0) {
      result.shift()
    }
    
    // nếu kết quả độ dài mảng = 0 thì trả về 0, ngược lại thì nối các ptu trong mảng thành chuỗi
    return result.length === 0 ? '0' : result.join('')
  };
  console.log(multiply("123","456"))