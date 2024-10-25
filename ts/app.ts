import { TCoSo, TDangHoc, THocVien, TKhoaHoc, TGioiTinh} from './data.js'
import { hv_arr, coso_arr, khoahoc_arr} from './data.js'

const hien1KhoaHoc = ( khoa:TKhoaHoc) => {
    return `<div>
     <h4>Tên khóa: ${khoa.tenkhoa} </h4>
     <p>Khai giảng: ${khoa.khaigiang}</p>
     <p>Ghi chú: ${khoa.ghichu}</p>
    </div>`;
}

export const showlistkhoahoc = () => {
     const html_arr = khoahoc_arr.map(hien1KhoaHoc); //call back
     return html_arr.join("");
}
const phaicuahv = (phai:TGioiTinh) => {
    if (typeof phai =='boolean') {
        if (phai==true) return "Nữ"; 
        else return "Nam";
    }
    else return phai as string;
}
const hien1HV = (hv:TDangHoc) =>{
    return `<div>
     <h4>Họ tên: ${hv.ten} </h4>
     <p>Điện thoại: ${hv.phone}</p>
     <p>Phái: ${ phaicuahv(hv.phai) }</p>
     <p>Khóa: ${hv.tenkhoa}</p>
     <p>Ghi chú: ${hv.ghichu}</p>
    </div>`;
}  
export const showlisthocvien = ()=>{
    const html_arr = hv_arr.map(hien1HV);
    return html_arr.join("");
}

const hien1CoSo = (coso:TCoSo) =>{
    return `<div>
     <img src="${coso.hinh}">
     <h4>${coso.ten} </h4>
     <p>${coso.diachi}</p>
    </div>`;
}
export const showlistcoso = ()=>{
    const html_arr =coso_arr.map(hien1CoSo);
    return html_arr.join("");
}

const show1thuonghieu = (th) => {
  return `<div>${th.ten}</div> `;
}
export const showlistthuonghieu = async () =>{
   let thuonghieu_arr = await  fetch("http://localhost:3000/thuong_hieu")
    .then ( res => res.json())
    .then ( data  => {return data});
   let str=``;
   thuonghieu_arr.forEach ( th => str+= show1thuonghieu(th) )
   return str;
}