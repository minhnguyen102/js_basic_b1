// Câu 01: Arithmetic (Toán tử số học)
// var x = 5;
// var y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x**y);

// console.log("x++ = ", x++);
// console.log("++x = ", ++x);
// console.log("x = ", x);

// Câu 02: Comparison (Toán tử so sánh)
// var x = 2;
// var y = 4;
// var z = '2';

// console.log(x == y); // 0
// console.log(x == z); // 1
// console.log(x === z); // 0

// console.log(x != z) // 0
// console.log(x !== z) // 1

// Câu 03: Logical (Toán tử logic)
// console.log( true && true);
// console.log(false &&  false);

// console.log(true || false)
// console.log(false || false);

// console.log(!true);

// // Câu 04: String operators (Nối chuỗi)
// console.log("Minh" + " Nguyen");
// var name = "Minh"
// name += " Nguyen";
// console. log(name);

// Câu 05: Swapping Variables (Hoán đổi biến)

// var x = 5;
// var y = 10;
// console.log("Giá trị ban đầu của x là :", x);
// console.log("Giá trị ban đầu của y là :", y);

// var z;
// z = x;
// x = y;
// y = z;
// console.log("Giá trị sau hoán đổi của x là :", x);
// console.log("Giá trị sau hoán đổi của y là :", y);

// Câu 06: Một hình tròn và hai hình vuông
// function hieuHaiHinhVuong(r) {
//     return ((2*r)**2 - 2*r**2);
// }

// var result = hieuHaiHinhVuong(6);
// console.log(result);

// Câu 07: Kiểm tra xem một chuỗi có phải là palindrome hay không?
// phân tách chuỗi thành các chữ riêng => mảng các chứ cái => đảo ngược mảng => hợp lại với nhau
// nếu bằng giá trị ban đâù => true, else false 

// function palindrom(string) {
//     var units = string.split("");
//     var result = units.reverse().join("");
//     if (result === string){
//         return "palindrom";
//     }
//     else{
//         return "not palindrom";
//     }
// }
// console.log(palindrom("test"));

// var x = "ababad";
// var units = x.split("");
// console.log(units);
// units.reverse();
// console.log(units);



// Câu 08: Data Types (Kiểu dữ liệu)
// console.log(typeof "Minh Nguyen");
// console.log(typeof 102);
// console.log(typeof 10.5);
// console.log(typeof [10, 2, 7]); // object
// console.log(typeof {name : "Minh Nguyen", age : 20, country : "Viet Nam"}); // object
// console.log(typeof false);
// console.log(typeof true);
// console.log(typeof null); // object
// console.log(typeof -Infinity);
// console.log(NaN);
// console.log(undefined);

//09. Template Literals (Template Strings)

// 10 : Ép kiểu

// var a = "100";
// var b = 20;
// var c = true;

// console.log(+a + b + c); // 121
// a là kiểu string nhưng khi có dấu + ở trước thì sẽ chuyển thành số, 
// c : là kiểu boolean, nếu c = true thì tương đương với 1, false thì tương đương với 0

// var x = "1000";
// console.log(typeof +x);
// console.log(x);
// console.log(+x)

// 11. Assignment Operators (Toán tử gán)
// var a = 10; 
// a = a + 20;
// console.log(a) // 30

// a = a + 70;
// console.log(a) // 100

// a -= 50;
// console.log(a) // 50

// a /= 50;
// console.log(a) // 1

// Câu 12: Operators Challenges
// var a = 10;
// var b = "20";
// var c = 80;

// var test_1  = ++a + b++ + c++ - +a++;
// //             11 + 20 + 80 - 11 = 100
// // a = 12 b = 21 c = 81
// console.log(test_1)

// var test_2 = ++a -b +c++ - -a++ + +a;
// //           13 - 21 +81 - 13 + 13
// // a = 14 b = 21 c = 82
// console.log(test_2);   

// Câu 13: Math Object

// var number = 12.3456;
// console.log(Math.round(number)); // làm tròn lên hoặc xuống
// console.log(Math.ceil(number)); // làm tròn lên
// console.log(Math.floor(number)); // làm tròn xuống
// console.log(Math.trunc(97.64732)); // xóa phần thập phân 

// console.log(Math.max(10,20));
// console.log(Math.min(10,20));
// console.log(Math.pow(9,2));


// Câu 14: String Methods (1)

// string[index]  == string.charAt(index)

// var theName = "  28Tech  ";
// console.log(theName); 
// console.log(theName[1]); // " "
// console.log(theName[5]) // e
// console.log(theName.charAt(1)) // " "
// console.log(theName.charAt(5))// e

// console.log(theName.length)
// console.log(theName.trim()) // xoa di khoangtrang
// console.log(theName.toUpperCase()) // viet hoa toan bo
// console.log(theName.toLowerCase()) // viet thuong toan bo
// console.log(theName.trim().charAt(5).toUpperCase()); // H


// Câu 15: String Methods (2)
// var a = "Daca.vn - Professional Web Design Services.";
// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 24)) // 24 la vi tri bat dau tim kiem
// console.log(a.indexOf("vn"));

// console.log(a.lastIndexOf("Design")); // start tính từ vị trí đầu và bắt đầu tìm từ vị trí ngược lại


// console.log(a.slice(10,22)); // cắt chuỗi
// console.log(a.slice(-16, -10)); // cắt chuỗi

// console.log(a.split("", 7)) // lấy 7 phần tử 

//16 Comparison Operators (Toán tử so sánh)

// console.log(10 == "10") // true == khong chat che - khong so sanh den kieu du lieu
// console.log(-100 == "-100") // true 
// console.log(10 != "10") // false != là so sánh khong chặt chẽ, khong so sánh kiểu dữ liệu

// console.log(10 === "10") // false so sánh chặt chẽ, từ kiểu dữ liệu đến giá trị
// console.log(10 !== "10") // true 
// console.log(10 !== 10) // false

// console.log(typeof "Dava.vn" === typeof "Minh Nguyen"); // true

// Câu 17: Logical Operators (Toán tử logic)

// console.log(true); // true
// console.log(!true); // false
// console.log(!(10 == "10")); // false

// console.log((10 == "10") && (10 > 8) && (10 > 50)); // false

// Câu 18: Add And Remove From Array
const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// console.log(myFriends.unshift("Vu Van E", "Nguyen Van F")) // unshift : thêm vào đầu mảng + trả về số phần tử của mảng sau khi thêm 
// console.log(myFriends)

// console.log(myFriends.push("Vu Van E", "Nguyen Van F")); // push : thêm vào cuối + trả về số phần tử của mảng sau khi thêm
// console.log(myFriends)

// console.log(myFriends.shift()); // xóa phần tử ở đầu  + trả về phần tử bị xóa
// console.log(myFriends)

// myFriends.pop(); // xoas phan tu o cuoi + tra ve phan tu bi xoa neu dung console.log
// console.log(myFriends)
