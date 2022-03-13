//1
const para = document.querySelector("p")

const arr = para.innerHTML.split(" ")
// console.log(arr);
for ( let i = 0; i < arr.length; i++) {
    if(arr[i].length >= 8) {
        arr[i] = `<span style="background-color:yellow">${arr[i]}</span>`
       
    }
   
}

para.innerHTML = arr.join(" ")


//2
const link = document.createElement("a")
link.href="https://www.facebook.com"
link.innerHTML ="Facebook"
document.body.appendChild(link)

//3
const dem = document.createElement("div")
dem.innerHTML = `đoạn văn có : ${arr.length} từ`
document.body.appendChild(dem)

//4 
para.innerHTML = para.innerHTML.replaceAll("?","🤔")
para.innerHTML = para.innerHTML.replaceAll("!","😲")