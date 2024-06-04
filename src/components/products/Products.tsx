import React from 'react'
import "./product.scss"
import { useNavigate } from 'react-router-dom'
export default function Products() {
    let products=[
        {
            id:1,
            name:"mèn mén1",
            price: 5000,
            image: "https://danviet.mediacdn.vn/upload/2-2016/images/2016-04-07/1460011383-dac-san-mong.jpg"
        },
        {
            id:2,
            name:"mèn mén2",
            price: 6000,
            image: "https://hanhtrinhdulich.vn/wp-content/uploads/2021/11/Men-men-600x400.jpg"
        },
        {
            id:3,
            name:"mèn mén3",
            price: 7000,
            image: "https://bizweb.dktcdn.net/100/072/558/files/men-men-dac-san-ha-giang-3.jpg?v=1567498058538"
        }
    ]
    const navigate = useNavigate
    const handleClickDetail=(id:number)=>{
        navigate(`/productdetail/${id}`)
    }
  return (
    <div>Products
        {products.map((item)=>{
            return (
                <div>
                    <p>tên {item.name}</p>
                    <p>ảnh
                       <img src={item.image} alt=""/>
                    </p>
                    <p>giá {item.price}</p>
                    <button>mua</button>
                    <button onClick={() => handleClickDetail(item.id)}>chi tiết sản phẩm</button>
                </div>
            )
        })}
    </div>
  )
}
