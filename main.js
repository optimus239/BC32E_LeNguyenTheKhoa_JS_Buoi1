// Bai 1
// Mo hinh 3 khoi
// -Dau vao:
// + Luong 1 ngay
// + so ngay lam
// -Xu ly:
// +Tao bien luong 1 ngay co gia tri 100000
// +Tao bien so ngay lam co gia tri la 6
// +Tao bien luong co gia tri la 0
// + Luong = Luong 1 ngay * so ngay lam
// -Dau ra:
// +Luong = ?
var luongMotNgay = 100000;
var soNgayLam = 6;
var luong = 0;

luong = luongMotNgay * soNgayLam;
console.log("Lương là: " + luong);

// Bai 2
// Mo hinh 3 khoi
// -Dau vao:
// + so thuc 1
// + so thuc 2
// + so thuc 3
// + so thuc 4
// + so thuc 5
// -Xu ly:
// +Tao bien so thuc 1 = 2
// +Tao bien so thuc 2 = 3
// +Tao bien so thuc 3 = 4
// +Tao bien so thuc 4 = 5
// +Tao bien so thuc 5 = 6
// +Tao bien gia tri trung binh = 0
// + Gia tri trung binh = (so thuc 1 + so thuc 2 + so thuc 3 + so thuc 4 + so thuc 5) / 5
// -Dau ra:
// +Gia tri trung binh = ?
var soThuc1 = 2;
var soThuc2 = 3;
var soThuc3 = 4;
var soThuc4 = 5;
var soThuc5 = 6;
var giaTriTrungBinh = 0;
giaTriTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
console.log("Giá trị trung bình là: " + giaTriTrungBinh);

// Bai 3
// Mo hinh 3 khoi
// -Dau vao:
// +giaUSD
// -Xu ly:
// +Tao bien giaUSD = 23500
// +Tao bien soTienUSD = 10000
// +Tao bien soTIenVND = 0
// +soTienVND = soTienUSD * giaUSD
// -Dau ra:
// +soTienVND = ?
var giaUSD = 23500;
var soTienUSD = 10000;
var soTienVND = 0;
soTienVND = soTienUSD * giaUSD;
console.log("Số tiền VND là: " + soTienVND);

//Bai 4
//Mo hình 3 khoi
// -Dau vao:
// +chieu dai
// +chieu rong
// -Xu ly:
// +Tao bien chieuDai = 9
// +Tao bien chieuRong = 8
// +Tao bien dienTichHCN = 0
// +Tao bien chuViHCN = 0
// +dienTichHCN = chieuDai * chieuRong
// +chuViHCN = (chieuDai + chieuRong) * 2
// -Dau ra:
// +dientichHCN = ?
// +chuviHCN = ?
var chieuDai = 9;
var chieuRong = 8;
var dienTichHCN = 0;
var chuViHCN = 0;
dienTichHCN = chieuDai * chieuRong;
chuViHCN = (chieuDai + chieuRong) * 2;
console.log("Diện tích HCN là: " + dienTichHCN);
console.log("Chu vi HCN là: " + chuViHCN);

//Bai 5
//Mo hinh 3 khoi
//-Dau vao:
//+so
//-Xu ly:
//+Tao bien so = 89
//+Tao bien soHangDV = 0
//+Tao bien soHangChuc = 0
//+Tao bien tong2KySo = 0
//+soHangDV = so % 10
//+soHangChuc = so / 10 => Lam tron so
//tong2KySo = soHangDV + soHangChuc
//-Dau ra:
//+tong2KySo = ?
var so = 89;
var soHangDV = 0;
var soHangChuc = 0;
var tong2KySo = 0;
soHangDV = so % 10;
soHangChuc = Math.floor(so / 10);
tong2KySo = soHangChuc + soHangDV;
console.log("Tổng 2 ký số là: " + tong2KySo);
