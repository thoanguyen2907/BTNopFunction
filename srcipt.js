//1. Hàm tính điểm trung bình: sử dụng 3 tham số: Toán Lý Hoá; 

function tinhDiemTrungBinh(a,b,c){
let diemTB;
diemTB = (a+b+c)/3; 
return diemTB;
}
function xepLoai(diemTB){
    if (diemTB >= 9 && diemTB < 10){
        console.log("Xuất Sắc");
    } else if (diemTB >= 8 && diemTB < 9){
        console.log("Giỏi")
    } else if (diemTB >= 7 &&  diemTB < 8){
        console.log("Khá");
    } else if (diemTB >= 6 &&  diemTB < 7){
        console.log("Trung Bình Khá");
    }else if (diemTB >= 5 &&  diemTB < 6){
        console.log("Trung Bình");
    }else if (diemTB < 5){
        console.log("Yếu");
    }
}
function ketQua(){
    let  diemTB =  tinhDiemTrungBinh(9,9,9); 
    console.log("Điểm Trung Bình là: " + diemTB); 
    xepLoai(diemTB); 
}
ketQua(); 