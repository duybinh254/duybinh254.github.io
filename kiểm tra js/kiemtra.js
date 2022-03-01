// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

function max2Numbers(arr) {
    for (let i = 0; i< arr.length - 1; i++) {
        // sắp xếp mảng theo thứ tự giảm dần
    arr.sort(function (a, b) {
        return b - a;
       
    })
        if (arr[i] != arr[0]) {
            
        }
        return arr[i]
    }
    
    
    // in ra số thứ 2 = độ dài mảng trừ 2
    

}
console.log(max2Numbers([2,1,4,3,4]))

//Bài 2:Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
const getStringHasMaxLength = arr => {
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
    //lặp qua các phần tử của mảng để lọc ra user thỏa mãn điều kiện
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

function countElement(array) {

    let count = 0;
    for (let i = 0; i < array.length - 1 ; i++) {

        if (array[i]==2) {
            count++
        }

    }
}
console.log(countElement(["one", "two", "three", "one", "one", "three"]))


// const countElement = arr  => {

// }
// var count = 0; for(var i = 0; i < array.length; ++i){ if(array[i] == 2) count++; }

function element (arr){
    return arr.filter ()
}