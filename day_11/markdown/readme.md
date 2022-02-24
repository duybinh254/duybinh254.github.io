# String Method (phương thức string) 
## slice, substring, substr, concat
1. slice:   
>Cú pháp:   
> mảng.slice(start,end)

- start là chỉ số của phần tử mà bạn muốn bắt đầu lấy.

- end là chỉ số của phần tử mà bạn muốn kết thúc (không lấy)

    trích xuất một phần của chuỗi và trả về phần được trích xuất trong một chuỗi mới.

    - Phương thức nhận 2 tham số: vị trí bắt đầu và vị trí kết thúc (không bao gồm kết thúc).
    ```js
    let str = "Apple, Banana, Kiwi";
    let part = str.slice(7, 13);
    // Banana
    ```
    - Nếu một tham số là số âm, vị trí được tính từ cuối chuỗi.
Ví dụ này cắt ra một phần của chuỗi từ vị trí -12 đến vị trí -6: 
    ```js
    let str = "Apple, Banana, Kiwi";
    let part = str.slice(-12, -6);
    //Banana
    ```
    - Nếu bạn bỏ qua tham số thứ hai, sẽ trích xuất 1 mảng từ chỉ số start đến hết mảng:
    ```js
    let part = str.slice(7);
    //Banana, Kiwwi
    ```
    - hoặc, đếm từ cuối:
    ```js
    let part = str.slice(-12);
    //Banana, Kiwwi
    ```
2. substring() : Giống với `slice()`. 
>Sự khác biệt là `substring()` không chấp nhận tham số âm

- Nếu bỏ qua tham số thứ hai, substring()sẽ cắt phần còn lại của chuỗi. (giống `slice`)

3. `substr()` : Giống với `slice()` 
>Sự khác biệt là với `substr()` tham số thứ 2 chỉ định độ dài của phần được trích xuất

```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
//Banana
```
- Nếu tham số đầu tiên là số âm, vị trí được tính từ cuối chuỗi.
```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
//Kiwwi
```
4. `concat()` 
>Cú pháp:                 
string1.concat(string2,string3,...)   


- nối 2 hoặc nhiều chuỗi
- `concat` không thay đổi các chuỗi hiện có
- `concat` trả về 1 chuỗi mới

VD:
```js
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);


