//! Bài tập tính tiền lương 

// B1 Tìm tới thẻ và lấy giá trị

// var luong1Ngay = document.getElementById("luongMotNgay").value;

//     var soNgayLam = document.getElementById("soNgayLam").value;



// B2: Tạo hàm 
function tinhTienLuong() {

    var luong1Ngay = document.getElementById("luongMotNgay").value;

    var soNgayLam = document.getElementById("soNgayLam").value;

    var tienLuong = Number(luong1Ngay) * Number(soNgayLam);

    document.getElementById("result").innerHTML = tienLuong;
}

// B3:Gắn thẻ onclick cho nút button 
document.getElementById("btnTienLuong").onclick = tinhTienLuong;


//! BÀI TẬP TÍNH GIÁ TRỊ TRUNG BÌNH 

// B1 Tìm tới thẻ và lấy giá trị
// var num1 = document.getElementById("number1").value;
// var num2 = document.getElementById("number2").value;
// var num3 = document.getElementById("number3").value;
// var num4 = document.getElementById("number4").value;
// var num5 = document.getElementById("number5").value;



// B2: Tạo hàm 
function tinhTrungBinh() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;

    var trungBinh = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5;

    document.getElementById("resultTB").innerHTML = trungBinh;
}

// B3:Gắn thẻ onclick cho nút button 
document.getElementById("btnTrungBinh").onclick = tinhTrungBinh;



//!BÀI TẬP QUY ĐỔI USD
// B1 Tìm tới thẻ và lấy giá trị
// var nhapUsd = document.getElementById("nhapUsd").value;

//? khai báo biến hằng số 
// const number = 23500
// console.log(new Intl.NumberFormat('vn-VN').format(number))

// B2: Tạo hàm 
function quyDoiUSD() {
    var nhapUsd = document.getElementById("nhapUsd").value;


    var quyDoi = Number(nhapUsd) * 23500;



    document.getElementById("resultUSD").innerHTML = new Intl.NumberFormat('vn-VN').format(quyDoi) + " VND";
}


// B3:Gắn thẻ onclick cho nút button 
document.getElementById("btnQuyDoi").onclick = quyDoiUSD;

//! BÀI TẬP TÍNH S,P
// B1 Tìm tới thẻ và lấy giá trị
// var chieuDai = document.getElementById("chieudai").value;
// var chieuRong = document.getElementById("chieurong").value;
// B2: Tạo hàm 
function tinhSp() {
    var chieuDai = document.getElementById("chieudai").value;
    var chieuRong = document.getElementById("chieurong").value;

    var dienTich = Number(chieuDai) * Number(chieuRong);
    var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;

    document.getElementById("resultSP").innerHTML = "Diện tích: " + dienTich + " ; Chu vi: " + chuVi;

}
// B3:Gắn thẻ onclick cho nút button 
document.getElementById("btntinhSp").onclick = tinhSp;



//! BÀI TẬP TÍNH TỔNG 2 CHỮ SỐ
// B1 Tìm tới thẻ và lấy giá trị
// B2: Tạo hàm 
function tinhTong() {
    var haiChuSo = document.getElementById("haichuso").value;

    var hangChuc = Math.floor(Number(haiChuSo) / 10);
    var hangDonVi = Math.floor(Number(haiChuSo) % 10);
    var toTal = hangChuc + hangDonVi;

    document.getElementById("resultTong").innerHTML = toTal;
}
// B3:Gắn thẻ onclick cho nút button 
document.getElementById("btntinhTong").onclick = tinhTong;
