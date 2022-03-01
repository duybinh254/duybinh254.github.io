// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

function findMaxSecond(arr)
{
    //sắp xếp mảng theo thứ tự tăng dần
  arr.sort(function(x,y)
           {
           return x-y;
           });
  var array = [arr[0]];
  var result = [];
  //chạy vòng lặp for cho mảng arr
  for(var i=1; i < arr.length; i++)
  {
//Nếu 2 phần tử liền kề trong mảng không bằng nhau, đẩy phần tử xuống cuối  1 mảng mới, bằng nhau thì k đẩy
    if(arr[i-1] !== arr[i])
    {
      array.push(arr[i]);
    }
  }
  // lấy phần tử ở vị trí = độ dài mảng mới trừ 2
    result.push(array[array.length-2]);
    // trả về kết quả
  return + result
  }
console.log(findMaxSecond([2, 1, 4, 3, 4]));

//Bài 2:Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
const getStringHasMaxLength = arr => {
    // tìm các phần tử có độ dài lớn nhất và trả về mảng mới
  let maxLength = Math.max(...arr.map( elem => elem.length))
  //lặp qua các phần tử trong mảng arr trả về phần tử thỏa mãn điều kiện 
  return arr.filter(elem => elem.length === maxLength)
}
 
let arr = ['aba', 'aa', 'ad', 'c', 'vcd']
 
console.log(getStringHasMaxLength(arr))

//Bài 3: Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
function getRandomElenment(arr) {
    //làm tròn xuống và chọn ngẫu nhiên phần tử trong độ dài của mảng và trả về kết quả
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomElenment([3, 7, 9, 11]));
console.log(getRandomElenment([3, 7, 9, 11]));

//Bài 4:Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó
let similarity = (arr1, arr2) => {
    //lọc các phần tử của arr1 xuất hiện trong arr2
    let newArr1 = arr1.filter(value => arr2.includes(value))
    let newArr2 = arr2.filter(value => arr1.includes(value))
    // trả về kết quả của mảng chứa các phần tử xuất hiện trong cả 2 mảng
    return newArr1
}
console.log(similarity([1, 2, 3], [1, 2, 4]))
console.log(similarity([1, 2, 3], [3, 4, 5]))

//Bài 5:Viết function truyền vào 2 tham số:
// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000

function getTime (str,x) {
    //  dùng spli tách các phần tử trong string ngăn cách bởi dấu : thành mảng các phần tử con
    let arr = str.split(":")
    // chuyển các phần tử trong mảng từ string sang Number
    let hour = + arr[0]
    let min = + arr[1]
    let ss  = +arr[2]
    // Quy đổi thời gian sang giây
    let second = hour * 3600 + min * 60 + ss
    // Tính tổng số giây ( + tham số x )
    let newSecond = second + x
    // Quy đổi giây sang giờ: phút : giây
    let gio = Math.floor(newSecond/3600)
    let phut = Math.floor(newSecond % 3600 / 60);
    let giay = Math.floor(newSecond % 3600 % 60)
    let sum
    // trả về kết quả
    return sum = `${gio}:${phut}:${giay}`
    }
    console.log(getTime("9:20:56",7));
    

//Bài 6:
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

//Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true

const ageIsstatus = users => {
    //lặp qua các phần tử của mảng để lọc ra user thỏa mãn điều kiện age > 25 và isStatus = true
    return users.filter((user => user.age > 25) && (user => user.isStatus == true))
}
console.log(ageIsstatus(users));

//Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần

const sortAge = users => {
    //sắp xếp mảng
    return users.sort(function (a, b) {
        //xếp theo chiều từ trái sang phải, số bé xếp trước: tăng dần
        return a.age - b.age
    })
}
console.log(sortAge(users))

//Bài 7:Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

function a (arr) {
    // tạo 1 object rỗng
result = { };
//chạy vòng lặp for cho mảng arr
for(var i = 0; i < arr.length; ++i) {
    if(!result[arr[i]])
        result[arr[i]] = 0;
    ++result[arr[i]]; // giá trị của result được tăng lên ngay trong biểu thức
}
return result
}
console.log(a(["one", "two", "three", "one", "one", "three"]));







