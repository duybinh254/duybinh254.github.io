//Chức năng:
//thay đổi số lượng sp
//thêm sp
//xóa sp
//cập nhật tổng giá tiền
//áp mã giảm giá
//cập nhật sl sp hiện có trong giỏ

// thuộc tính
//ID sp --> id : number
//tên sp    --> title: string
//giá sp    --> price : number
//số lượng trong giỏ --> count: number
//mô tả sp  --> description: string
//ảnh sp    --> image: string

let products = [
    {
        id: 1,
        title: "áo thun nam nữ",
        description: "Áo thun nam nữ unisex form rộng tay lỡ MRTD Aothunxinhy, áo phông form rộng cotton mát mịn phong cách",
        count: 1,
        price: 99000,
        image: "https://cf.shopee.vn/file/676f080df1017d0857c5c5d64f616167_tn"
    },
    {
        id: 2,
        title: "Giày sục đạp gót",
        description: "Giày Sục Ny Đạp Gót, Sục Ny, Sục Đạp Gót Hot Hit 2021 Bản Đẹp YÊU",
        count: 2,
        price: 110000,
        image: "https://media3.scdn.vn/img3/2019/6_7/Jv0aGH.jpg"
    },
]
//convert tiền
function convertMoney(number) {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

}
// Các mã giảm giá
let promotionCode = {
    A: 10,
    B: 20,
    C: 30,
    D: 40,
}
//truy cập vào các thành phần
let productsEl = document.querySelector(".products")

//hiển thị dữ liệu trên giao diện
function renderProduct(arr) {
    productsEl.innerHTML = ""
    const countEl = document.querySelector(".count")
    countEl.innerText = `${updateTotalProduct(arr)} items in the bag`
    updateTotalMoney(arr);

    //kiểm tra không có sản phẩm nào trong giỏ hàng
    if (arr.length == 0) {
        productsEl.insertAdjacentHTML("afterbegin", "<li>Không có sản phẩm nào trong giỏ hàng</li>")
        document.querySelector(".option-container").style.display = "none"
        return;
    }

    //trường hợp Có sản phẩm
    let html = ""
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i]
        html += `
        <li class="row">
        <div class="col left">
            <div class="thumbnail">
                <a href="#">
                    <img src="${p.image}" alt="${p.title}">
                </a>
            </div>
            <div class="detail">
                <div class="name"><a href="#">${p.title}</a></div>
                <div class="description">
                    ${p.description}
                </div>
                <div class="price">${convertMoney(p.price)}</div>
            </div>
        </div>

        <div class="col right">
            <div class="quantity">
                <button class="btn-subtract" onclick ="subtractCount(${p.id})">-</button>
                <p>${p.count}</p>
                <button class="btn-add" onclick="addCount(${p.id})">+</button>
            </div>

            <div class="remove">
                <span class="close" onclick="removeProduct(${p.id})">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    </li>

        `
    }
    //chèn lại nội dung cho phần tử
    productsEl.innerHTML = html
}

//tính tổng số lượng sản phẩm

function updateTotalProduct(arr) {
    //duyệt vòng lặp để tính tổng các giá trị của thuộc tính count
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].count
    }
    return total;
    //update tổng tính được vào phần tử có class "count"

}

//Xóa sản phẩm
function removeProduct(id) {
    //sử dụng vòng lặp để tìm sản phẩm có id tương ứng
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            //xóa sản phẩm ra khỏi mảng products
            products.splice(i, 1)
        }
    }

    // render lại giao diện
    renderProduct(products)
}
//Tăng cố lượng sp
function addCount(id) {
    //sử dụng vòng lặp tìm sp có id tương ứng
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            //tăng giá trị count lên 1
            products[i].count += 1
        }
    }


    //render lại giao diện
    renderProduct(products)
}

//giảm số lượng
function subtractCount(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            //tăng giá trị count lên 1
            products[i].count -= 1
        }
        if (products[i].count < 1) {
            //    removeProduct(id)
            products[i].count = 1
        }
    }


    //render lại giao diện
    renderProduct(products)
}

//tính tổng tiền

let subTotalEl = document.querySelector('.subtotal span');
let vatEl = document.querySelector('.vat span');
let totalEle = document.querySelector('.total span');
let discount = document.querySelector('.discount')
let discountEle = document.querySelector('.discount span')
let btnPromotion = document.querySelector(".promotion button")
function updateTotalMoney(arr) {
    let totalMoney = 0
    let discountMoney = 0
    //sử dụng vòng lặp để tính tổng tiền (subtotal)
    for (let i = 0; i < arr.length; i++) {
        //tổng tiền = count * price
        totalMoney += arr[i].count * arr[i].price
    }


    //kiểm tra discount hợp lệ hay không
    let data = check()
    if (data) {
        //nếu hợp lệ thì tính toán discount dựa vào giá trị được giảm
        discountMoney = (totalMoney * data) / 100
        console.log(discountMoney);
        discount.classList.remove("hide")
    } else {
        discount.classList.add("hide")
    }
    //cập nhật tổng tiền vào phần tử tương ứng
    subTotalEl.innerText = convertMoney(totalMoney);
    //VAT = 10% * subtotal
    vatEl.innerText = convertMoney(totalMoney * 0.1);
    discountEle.innerText = convertMoney(discountMoney)
    totalEle.innerText = convertMoney(totalMoney + totalMoney * 0.1 - discountMoney);

}
// kiểm tra mã giảm giá
const inputPromotionCode = document.querySelector("#promo-code")
function check() {
    let value = inputPromotionCode.value
    if (promotionCode[value]) {   // nếu tồn tại mã giảm giá thì return về mã đó
        return promotionCode[value]
    }
    return 0;
}

btnPromotion.addEventListener("click", function () {
    updateTotalMoney(products)
})

renderProduct(products)
