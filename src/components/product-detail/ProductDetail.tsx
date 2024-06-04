import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    let products=[
        {
            id:1,
            name:"mèn mén1",
            price: 5000,
            image: "https://danviet.mediacdn.vn/upload/2-2016/images/2016-04-07/1460011383-dac-san-mong.jpg",
            description:"men men den tu lao cai"
        },
        {
            id:2,
            name:"mèn mén2",
            price: 6000,
            image: "https://hanhtrinhdulich.vn/wp-content/uploads/2021/11/Men-men-600x400.jpg",
            description:"men men den tu ha giang "
        },
        {
            id:3,
            name:"mèn mén3",
            price: 7000,
            image: "https://bizweb.dktcdn.net/100/072/558/files/men-men-dac-san-ha-giang-3.jpg?v=1567498058538",
            description:"men men den tu sapa"
        }
    ]
    // dùng hook useParams
    const params = useParams(); // tra ve doi tuong
    console.log("giá trị params", params); 
    // Lay id ra:
    const id = params.menmenId;
    console.log("id", id);
    // co id san pham roi, di loc xem id do la san pham trong danh sach san pham
    let ProductDetail = products.find((item)=>{
        return item.id === id;
    })
    console.log("Thong tin san pham", ProductDetail);
    
  return (
    <div>ProductDetail
        <p>name: {ProductDetail?.name}</p>
        <p><img src={ProductDetail?.image} alt=""/></p>
        <p>mo ta: {ProductDetail?.description}</p>
    </div>
  )
}
