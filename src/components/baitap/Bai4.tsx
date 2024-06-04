import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Bai3 from './Bai3';

export default function Bai4() {
  // Lấy query string từ URL
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Lấy giá trị của tham số 'studentName'
  const studentName = urlParams.get('studentName');

  console.log(studentName); // Kết quả mong đợi: 'david'
  return (
    <div>Bai4
        <Routes>
            <Route path="/Bai3" element={<Bai3></Bai3>}></Route>
        </Routes>
    </div>
  )
}
