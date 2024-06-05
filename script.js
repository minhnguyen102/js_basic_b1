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
