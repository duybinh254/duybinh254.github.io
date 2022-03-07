const users = [
  {
    username: "bob",
    password: "123",
  },

  {
    username: "alice",
    password: "456",
  }
];
const userName = document.querySelector("#username");
const passWord = document.querySelector("#password");
const login = document.querySelector("#btn-login");

login.addEventListener("click", logIn);

function logIn() {
  if (userName.value == "") {
    alert("Vui lòng điền tên đăng nhập");
    return;
  }
  if (passWord.value == "") {
    alert("Vui lòng nhập mật khẩu");
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (
      users[i]["username"] == userName.value &&
      users[i]["password"] == passWord.value
    ) {
      alert("Đăng nhập thành công");
      return
    } 
  }
  for (let j = 0; j <users.length;j++) {
    if(users[j]["username"] != userName.value ||
    users[j]["password"] != passWord.value) {
      alert("Đăng nhập thất bại")
      return
    }
  }
}
