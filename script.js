// var button = document.querySelector("button");
//         button.onclick = function () {
//             alert('Hello World')
//         }


// <!-- Phần 2: Khai báo biến -->
// var a = 10;
// var b = 20;
// var c = a + b;
// console.log(c)

// qui tắc đặt tên biến theo qui tắc camlCase var tenBien = 10 (chứ cái đầu viết thường và từ chữ thứ 2 viết hoa)

// Phàn 3 : Toán tử 

// 3.1 Toán tử số học + - * / ** %
// var a = 10;
// var b = 20;
// var x = 3;
// var fullName = "MinhNguyen";
// var c = a + b;
// var e = a + fullName;  //phép cộng chuỗi 
// console.log(c); // 30
// console.log(e); // 10MinhNguyen
// console.log(b-a); // 10 
// console.log(b*a) // 200
// console.log(b/a); // 2
// console.log(a**x) // 1000
// console.log(a%x) // 1
// console.log(fullName * 3); // NaN

//  phép  ++ và -- : có 2 cách sử dụng là đặt trước biến và đặt sau biến 
// var a = 10;
// var m = ++a; // cộng trước xong mới gán giá trị 
// console.log(m) // 11
// var n = a++; // gán giá trị rồi mới cộng 
// console.log(n); // 10 
// Ví dụ 1: 
    // var a = 20; 
    // var b = a++ - --a  + ++a;
    // //      20  - 20 + 21 = 21 
    // console.log(b);
// Ví dụ 2: 
    // var a = 20;
    // var b = a++ - a-- + --a *3;
    //     //  20 - 21 + 19 * 3;
    // console.log(b);
// 3.2 Toán tử gán
    // var a = 20;
    // var c = 10;
    // var b = a;
    // console.log(b); // 20

    // // b -= c;
    // // console.log(b) // b = b - c = 20 - 10 = 10
    // // b += c;
    // // console.log(b); // 30
    // // b /= c;
    // // console.log(b); // 2
    // // b *=c ;
    // // console.log(b) // 200 
    // // b %= c;
    // // console.log(b); // 0

//  3.3 : toán tử so sánh  : như các ngôn ngữ lập trình khác 
    // var a = 10;
    // var b = 20;
    // var c = a > b;
    // console.log(c) // false 

    // điểm khác : == / === / != / !==
    // var a = 20;
    // var b =  20;
    // var c = "20";

    // console.log(a == b) // true
    // console.log(a == c) // true  == không chặt chẽ, không so sánh đến việc cùng kiểu dữ liệu
    // console.log(a === c ) // false, === chặt chẽ , so sánh đến cả việc cùng kiểu dữ liệu (data type)

    // console.log(a !== c); //true
    // console.log(a != c); //false

    // 3.4 : Toán tử logic : 
    // && || !: Tương tự như những ngôn ngữ khác 
    // var a = 10;
    // var b = 20;
    // var c = 5;
    // var d = 7;

    // var e = (a > b) && (c < d);
    // console.log(e) // false

    // var f = (a > b) || (c < d);
    // console.log(f) // true

//  Data Types (Kiểu dữ liệu)
// 4.1 kiểu dữ liệu nguyên thủy
//  number : int, float , infinity, -infinity, NaN
    // var x = -Infinity;
    // console.log(x);

    // var y = NaN;
    // console.log(y);
// string: giống như python, khong phân biệt " " hay ' ' mà còn bổ sung ` ` 
    // var text = `nội dung trong dấu backtick`;
    // console.log(text);
// boolean : true false: Gióng các ngôn ngữ lập trình khác 
// undefined : khai báo 1 biến và không gán giá trị cho nó 
    // var x;
    // console.log(x);
// kiểu null; 
    // var x = null;
    // console.log(x);
//   kiểu symbol

    // 4.2. Dữ liệu phức tạp
        // kiểu function
        // function tinhTong(a, b, c){
        //     return a+b+c;
        // }

        // var x = tinhTong(10,20,30);
        // console.log(x);

        // kiểu object 
        // var hocSinh = {
        //     ten : "Minh",
        //     tuoi : 20
        // }

        // console.log(hocSinh)

        // var sinhVien = ["Minh", "A45124", 20]
        // console.log(sinhVien)

    // 5: 1 số hàm buil-in

        // alert("Cố gắng phấn đấu 5 tháng để đi làm chuyển nhà")

        // var result = confirm("Sắp tới muốn ở một mình ?");
        // console.log(result);
        // kết quả sẽ hiện thị ra ở tap console, nếu nhấn oke sẽ trả về true, khong thì trả về false

        // var input = prompt("Nhập số n: ");
        // console.log(input);

        // console.log("In ra thong bao binh thuong");
        // console.warn("in ra canh bao mau vang");
        // console.error("In ra loiii mau do");

        // setTimeout(function() {
        //     console.log("Đã được 5s")
        // }, 5000) // tức sau 5 giây sẽ in ra thông tin mình muốn

        // var myIterval = setInterval(function () {
        //     console.log("i love you")
        // }, 1000);

        // setTimeout(function() {
        //     clearInterval(myIterval)
        // }, 5000)

    //6. Typeof (Important)
        // console.log(typeof 10); // number
        // console.log(typeof 10.5); // number
        // console.log(typeof null); // object

    // 7. Làm việc với String
        // var fullName = "Nguyen Khac Minh";
        // console.log(fullName.length);

        // var myString = "Xin chao! Toi ten la Minh. Toi nam nay 20 tuoi       "
        // // indexOf("searchValue", start) : Trả về vị trí đầu tiên của 1 chuỗi trong 1 chuỗi. Nếu không có sẽ trả về -1;
        // console.log(myString.indexOf("Toi", 11)); 
        // console.log(myString.indexOf("Minh", 0));  // co phan biet chu hoa va thuong

        // lastIndexOf("searchValue", start); vị trí bắt đầu tìm kiếm tính từ trái qua phải và bắt đầu tìm kiếm ngược lại từ vị trí start ấy 
        // console.log(myString.lastIndexOf("Toi", 30)); 

        // slice(start, end) : giống như các ngôn ngữ khác, sẽ lấy start chú không lấy end
        // start là tham số bắt buộc, end nếu khong để sẽ mặc định là lấy full
        // console.log(myString.slice(10));
        // console.log(myString.slice(10,20));
        // console.log(myString.slice(0,1));

        // // replace("searchValue", "newValue");
        // console.log(myString.replace("Toi", "Tao"));
        // console.log(myString.replace(/Toi/g, "Tao"));

        // console.log(myString.toLowerCase());
        // console.log(myString.toUpperCase()); 

        // console.log(myString);
        // console.log(myString.trim()); // xoá khoảng trắng ở hai đầu

        // console.log(myString.charAt(0));

        // var language = "java, c++, python, nodejs"
        // console.log(language.split()); // mảng kết quả tra về một phần tư
        // console.log(language.split(""));  // mỗi chứ cái là một phần tử trong mảng
        // console.log(language.split(", ")); // cho 4 phần tử là 4 ngôn ngữ 
        // console.log(language.split(", ", 2)); // lấy 2 phần tử đầu 
        
    // 8 .Làm việc với Number
    // isNaN
    // var a = 10;
    // var b = "test";
    // var c = a /b;
    // if (isNaN(c)){
    //     console.log("Day khong phai la 1 so", c)
    // }

    // toString()
    // var a = 10; 
    // var b = a.toString();
    // var c = (10).toString();

    // console.log(typeof a);
    // console.log(typeof b);
    // console.log(typeof c);

    // toFixed() : Làm tròn số
    // var a = 12.3456;
    // console.log(a.toFixed());
    // console.log(a.toFixed(0));
    // console.log(a.toFixed(1));
    // console.log(a.toFixed(2)); 
    // console.log(a.toFixed(3));

    //9. Làm việc với Array
    // Nối lại với nhau
    // //toString()
    // var arr = ['a', 'b', 'c'];
    // console.log(arr.toString()); // a,b,c dấu phẩy là mặc định

    // // join()
    // console.log(arr.join("")); //abc
    // console.log(arr.join(" ")); // a b c 
    // console.log(arr.join("-")); // a-b-c
    // console.log(arr.join()); // Mặc định khong điền gì thì sẽ là dấu phẩy ở giữa

    // Thao tác thêm sửa xóa

    //push() : dùng để thêm một hoặc nhiều phần tử vào cuối mảng 
    // console.log(arr.push("d", "e", "f")); // trả về số lượng phần tử trong mảng
    // console.log(arr);

    // pop(): dùng để xóa phần tử ở cuối mảng, Trả vè phần tử ỏ cuối mảng
    // console.log(arr);
    // console.log(arr.pop());
    // console.log(arr);

    // shift() : xóa phần tử đầu mảng, trả về phần tử đầu mảng
    // console.log(arr.shift()); // a
    // console.log(arr);

    // // unshift(item_1, item_2....) : thêm một hoặc nhiều phàn tử vào đầu mảng
    // console.log(arr.unshift("d", "e", "f")); // trả về số lượng phần tử sau khi đã thêm
    // console.log(arr);

    // splice(index, howmany, item1, item2) : 
        // xóa hoặc chèn một(nhiều) phần tử mới vào mảng
        // trả về mảng bị xóa
        // howmany là số phần tử muốn xóa
    // console.log(arr.splice(1, 0, "1", "2")); 
    // // trả về mảng rỗng vì howmany == 0 nên không xóa phần tử nào => mảng rỗng
    // console.log(arr); // a b 1 2 c 

    // console.log(arr.splice(0,2)); // bắt đầu từ vị trí khong và muốn xóa đi 2 phàn tử 
    // // trả về mảng đã xóa đi là : a b
    // console.log(arr); // c

    // vừa thêm vừa xóa 
    // console.log(arr.splice(1,2, "d", "e"));
    // // trả về mảng gòm : b c 
    // console.log(arr); // in ra: a d e;


    // concat()  : nối 2 mảng lại với nhau 
    var arr = ['a', 'b', 'c'];
    var arr_2 = ['d', 'e', 'f'];
    var arr_result = arr.concat(arr_2);
    // console.log(arr_result); // a b c d e f
    // console.log(arr);


    // slice()
    console.log(arr_result.slice(0, 3)); // a b c 
    console.log(arr_result.slice(3));



    

    

