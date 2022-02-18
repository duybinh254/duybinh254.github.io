let money = 10000;

switch (money) {
  case 12000:
  case 13000:
  case 15000: {
    console.log("cafe sữa");
    break;
  }
  case 10000: {
    console.log("cafe đá");
    break;
  }
  case 8000: {
    console.log("sting dâu");
    break;
  }
  case 2000: {
    console.log("trà đá");
    break;
  }
  default: {
    console.log("không có đồ uống phù hợp");
    break;
  }
}

// break : thoát khỏi chương trình khi đến điều kiện phù hợp
// Nếu không có break thì chương trình khi đến điều kiện phù hợp sẽ không thoát mà tiếp tục đi tiếp và in ra các giá trị ở các điều kiện khác mà không cần xét điều kiện thỏa mãn hay không

//Bài tập
//1.Tạo biến day có giá trị từ 0 -> 6, là các ngày trong tuần Trong đó: (0 - chủ nhật, 1 - thứ 2, …, 6 - Thứ 7)
// Sử dụng switch-case để in ra ngày tương ứng với giá trị của biến day
// Ví dụ: day = 6 --> “Hôm nay là thứ 7”
let day = 4;

switch (day) {
  case 0: {
    console.log("chủ nhật");
    break;
  }
  case 1: {
    console.log("thứ 2");
    break;
  }
  case 2: {
    console.log("thứ 3");
    break;
  }
  case 3: {
    console.log("thứ 4");
    break;
  }
  case 4: {
    console.log("thứ 5");
    break;
  }
  case 5: {
    console.log("thứ 6");
    break;
  }
  case 6: {
    console.log("thứ 7");
    break;
  }
  default: {
    console.log("không phải thứ");
    break;
  }
}

//2.Bài tập 2
// Tạo biến month có giá trị từ 1 -> 12, là các tháng trong năm
// Sử dụng switch-case để in ra mùa tương ứng với giá trị của biến month
// 1, 2, 3 : Mùa xuân
// 4, 5, 6 : Mùa hạ
// 7, 8, 9 : Mùa thu
// 10, 11, 12 : Mùa đông
// Ví dụ: month = 9 --> “Mùa thu”

let month = 4;
switch (month) {
  case 1:
  case 2:
  case 3: {
    console.log("Mùa xuân");
    break;
  }
  case 4:
  case 5:
  case 6: {
    console.log("Mùa hè");
    break;
  }
  case 7:
  case 8:
  case 9: {
    console.log("Mùa thu");
    break;
  }
  case 10:
  case 11:
  case 12: {
    console.log("Mùa đông");
    break;
  }
  default: {
    console.log("không phải tháng");
    break;
  }
}
