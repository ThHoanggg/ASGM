type THocVien = { id:number; ten:string; phone:string; phai:TGioiTinh}
type TGioiTinh = string | boolean;
type TKhoaHoc = { id:number; tenkhoa: string; khaigiang: string; ghichu:string  }
type TDangHoc = THocVien & TKhoaHoc; 
type TCoSo = { id:number;  ten:string;  diachi:string;  hinh:string; }
const khoahoc_arr:TKhoaHoc[] = [
    {id:1, tenkhoa:"18.1", khaigiang:"2022-04", "ghichu":"Covid tung hoành"},
    {id:2, tenkhoa:"18.2", khaigiang:"2022-09", "ghichu":"Online Rực lửa"},
    {id:3, tenkhoa:"18.3", khaigiang:"2023-01", "ghichu":"Sinh viên đông"},
    {id:4, tenkhoa:"19.1", khaigiang:"2023-04", "ghichu":"Chương trình mới"},
    {id:5, tenkhoa:"19.2", khaigiang:"2023-09", "ghichu":"Chương trình mới"},
    {id:6, tenkhoa:"20.1", khaigiang:"2024-01", "ghichu":" Học 6 kỳ"},
 ];
let hv_arr:TDangHoc[] = [
    {id:1, ten:"Hoàng Hoa", phone:"918123456", phai:"Nữ", tenkhoa:"18.3", khaigiang:"2023-01", ghichu:"dễ thương"},
    {id:2, ten:"Trúc Vàng", phone:"914123451", phai:true, tenkhoa:"18.3", khaigiang:"2023-01", ghichu:"dễ mến"},
    {id:3, ten:"Thu Mấy", phone:"938123461", phai:"Nam", tenkhoa:"19.1", khaigiang:"2023-04", ghichu:"học giỏi"},
    {id:4, ten:"Ngọc Độ", phone:"112345632", phai:false, tenkhoa:"19.1", khaigiang:"2023-04", ghichu:"hát hay"},
    {id:5, ten:"Hải Công", phone:"42125690", phai:"Nam", tenkhoa:"19.2", khaigiang:"2023-09", ghichu:"nhanh nhẹn"},
    {id:6, ten:"Thanh Sơn", phone:"52169036", phai:"Nam", tenkhoa:"19.2", khaigiang:"2023-09", ghichu:"khỏe khắn"} 
];
const coso_arr:TCoSo[] = [
    { id:1, ten:"Cơ sở Hồ Chí Minh", diachi: "Tòa nhà QTSC9, Tô Ký, phường Tân Chánh Hiệp, Q12, TP HCM", "hinh": "images/hcm.jpeg"},
    { id:2, ten:"Cơ sở Hà Nội", diachi: "13 phố Trịnh Văn Bô, phường Phương Canh, quận Nam Từ Liêm, TP Hà Nội", "hinh": "images/hn.jpg"},
    { id:3, ten:"Cơ sở Đà Nẵng", diachi: "219 Nguyễn Sinh Sắc, phường Hoà Minh, quận Liên Chiểu, TP Đà Nẵng", "hinh": "images/dn.webp"},
    { id:4, ten:"Cơ sở Cần Thơ", diachi: "Đường số 22, phường Thường Thạnh, quận Cái Răng, TP Cần Thơ", "hinh": "images/ct.jpg"},
    { id:5, ten:"Cơ sở Hải Phòng", diachi: "271 Lê Thánh Tông, phường Máy Chai, q.Ngô Quyền, TP Hải Phòng", "hinh": "images/hp.jpg"},
    { id:6, ten:"Cơ sở Thái Nguyên", diachi: "Đê Mỏ Bạch, phường Quyết Thắng, TP Thái Nguyên", "hinh": "images/tn.jpg"}
];
export { TCoSo, TDangHoc, THocVien, TKhoaHoc, TGioiTinh}
export { hv_arr, coso_arr, khoahoc_arr}
  