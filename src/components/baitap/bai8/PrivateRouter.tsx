import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminIndex from './AdminIndex';
import Account from './Account';
import Product from './Product';
import Order from './Order';
export default function PrivateRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminIndex />} index />
        <Route path="/account" element={<Account />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  )
}
