// Bài 1: Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và
// in ra kết quả. (1đ)
// let userInput = prompt("Nhập 1 từ bất kì");
// let b = "";
// for(let i = userInput.length-1; i >= 0;i=i-1){
// b = b + userInput[i];
// }console.log(`"${b}"`);
// Bài 2: 
// Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra
// chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (1đ)
// let userInput = prompt("Viết chuỗi kí tự ngăn cách nhau bởi dấu cách").toLowerCase().split(" ");
// let rs = " "
// for (let i = 0; i <= userInput.length-1; i++){
//     rs = rs + userInput[i].substring(0,1).toUpperCase() + userInput[i].substring(1).toLowerCase()+ " "
// }console.log(rs);

// Bài 3:
// Viết một chương trình xóa các phần tử trùng của một
// mảng và in ra kết quả. (1đ)
// let Arr=["one","two","three","one","one","four","five","four","five","five"];
// let miniArr = [...new Set(Arr)];

// console.log(miniArr);

// Bài 4: 
// Viết một chương sắp xếp các phần tử là số ở trong
// mảng theo thứ tự tăng dần. (1đ)
// arr = [5, 2, 3, 4, 1];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log("Sắp xếp lại thành =>", arr);

// Bài 5:
// Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên nhân viên). 
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)
// arr = ["Mr.Cường","Mr.Phú","Ms.Hoài"];
// console.log(arr);
// let state = true
// while (state){
//     let userInput = prompt("Nhập vào C/R/U/D/E").toUpperCase()
//     if (userInput === "C"){
//         let addName = prompt("Nhập vào tên nhân viên bạn muốn thêm:")
//         arr.push(addName);
//         for (let i = 0; i <= arr.length - 1; i++) {
//             console.log(i + 1, arr[i]);
//         } console.log("----------------------------------")
//     }
//     if (userInput === "R"){
//         for (let i = 0; i <= arr.length - 1; i++) {
//             console.log(i + 1, arr[i]);
//         } console.log("----------------------------------")
//     }
//     if (userInput === "U"){
//         let updatedPosition = prompt("Nhập vào vị trí tên muốn update");
//         let updatedName= prompt("Nhập vào tên muốn update");
//         arr[updatedPosition]= `${updatedName}`
//         for (let i = 0; i <= arr.length - 1; i++) {
//             console.log(i + 1, arr[i]);
//         } console.log("----------------------------------")
//     }
//     if (userInput === "D"){
//         let deletedPosition = prompt("Nhập vào vị trí tên muốn xóa");
//         arr.splice(deletedPosition,1)
//         for (let i = 0; i <= arr.length - 1; i++) {
//             console.log(i + 1, arr[i]);
//         } console.log("----------------------------------")
//     }
//     if (userInput === "E"){
//         console.log(arr);
//         state = false
//     }
// }

// Bài 6: Viết chương trình cho phép người dùng nhập vào ngày
// tháng năm. (2đ)
let userInput = prompt("Nhập vào ngày tháng năm theo định dạng dd/mm/yyyy").split("/")
// userInput[0] là date
// userInput[1] là month
// userInput[2] là tháng
switch (userInput[1]) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        if (userInput[0] >= 1 && userInput[0] <= 31) {
            console.log("Ngày hợp lệ");
        }
        else {
            console.log("Ngày ko hợp lệ");
        }
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        if (userInput[0] >= 1 && userInput[0] <= 31) {
            console.log("Ngày hợp lệ");
        }
        else {
            console.log("Ngày ko hợp lệ");
        }
        break;

    case 2:
        if (userInput[2] % 4 === 0) {
            if (userInput[0] >= 1 && userInput[0] <= 29) {
                console.log("Ngày hợp lệ");
            }
            else {
                console.log("Ngày ko hợp lệ");
            }
        }
        else if (userInput[2] % 4 !== 1) {
            if (userInput[0] >= 1 && userInput[0] <= 28) {
                console.log("Ngày hợp lệ");
            }
            else {
                console.log("Ngày ko hợp lệ");
            }
        }
        break;
}   


