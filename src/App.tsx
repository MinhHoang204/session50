import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Products from './components/products/Products'
import ProductDetail from './components/product-detail/ProductDetail'
import Bai1 from './components/baitap/Bai1'
import Bai2 from './components/baitap/Bai2'
import Bai3 from './components/baitap/Bai3'
import Bai4 from './components/baitap/Bai4'
import Bai6 from './components/baitap/Bai6'
import Bai9 from './components/baitap/Bai9'

export default function App() {
  return (
    <div>App
      <Routes>
        <Route path="/home" element={<Home></Home>}>
          <Route path='/home/header' element={<Header></Header>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/Productdetail/:productId" element={<ProductDetail></ProductDetail>}></Route>
        {/* Bai tap */}
        <Route path="/Bai1" element={<Bai1></Bai1>}></Route>
        <Route path="/Bai2" element={<Bai2></Bai2>}></Route>
        <Route path="/Bai3" element={<Bai3></Bai3>}></Route>
        <Route path="/Bai4" element={<Bai4></Bai4>}></Route>
        <Route path="/Bai6" element={<Bai6></Bai6>}></Route>
        <Route path="/Bai9" element={<Bai9></Bai9>}></Route>
      </Routes>
    </div>
  )
}
