import "../css/index.css"
import "../css/header.css"
import "../css/footer.css"
import "../css/category.css"
import "../css/pay.css"
import "../css/home.css"

// API lấy danh sách các tỉnh (province)
// GET : https://provinces.open-api.vn/api/p/

// Lấy danh sách quận huyện (district)
// GET : https://provinces.open-api.vn/api/p/${provinceCode}?depth=2

// Lấy danh sách xã phường
// GET : https://provinces.open-api.vn/api/d/${districtCode}?depth=2

const provinceEl = document.querySelector(".province")
const districtEl = document.querySelector(".district")
const communeEL = document.querySelector(".commune")

async function getProvince() {
    try {
        // gọi API lấy danh sách tỉnh thành phố
        let res = await axios.get("https://provinces.open-api.vn/api/p/")
        console.log(res.data);
        // render tỉnh thành phố

        renderProvince(res.data)
    } catch (err) {
        console.log(err);
    }
}

// hiển thị danh sách tỉnh thành phố
function renderProvince(arr) {
    arr.forEach(Element => {
        provinceEl.innerHTML += `<option value="${Element.code}">${Element.name}</option>`
    });
}

provinceEl.addEventListener("change", async function () {
    try {
        // lấy ra code của tỉnh thành phố
        let provinceCode = provinceEl.value
        // let provinceCode = event.target.value  // cách 2
        console.log(provinceCode);
        // gọi API để lấy danh sách quận huyện tương ứng với provinceCode
        let res1 = await axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
        console.log(res1);
        // render quận huyện tương ứng với responce trả về

        renderDistrict(res1.data.districts)
    } catch (err) {
        console.log(err);
    }
})
function renderDistrict(arr) {
    districtEl.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        districtEl.innerHTML += `<option value="${arr[i].code}">${arr[i].name}</option>`

    }
}

districtEl.addEventListener("change", async function () {
    try {
        // lấy ra code của tỉnh thành phố
        let districtCode = districtEl.value
        // let provinceCode = event.target.value  // cách 2
        console.log(districtCode);
        // gọi API để lấy danh sách quận huyện tương ứng với provinceCode
        let res2 = await axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
        console.log(res2);
        // render quận huyện tương ứng với responce trả về

        renderCommune(res2.data.wards)
    } catch (err) {
        console.log(err);
    }
})
function renderCommune(arr) {
    communeEL.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        communeEL.innerHTML += `<option value="${arr[i].code}">${arr[i].name}</option>`

    }
}

getProvince()