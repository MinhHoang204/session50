import React from 'react'
import { useState } from 'react';
interface EmployeeProps {
    //  Xác định bất kỳ đạo cụ cần thiết nào ở đây
}
const [searchTerm, setSearchTerm] = useState('');

const handleSearch = () => {
    // Triển khai logic tìm kiếm của bạn tại đây
    // Ví dụ: thực hiện lệnh gọi API để tìm kiếm nhân viên theo tên
    console.log(`Searching for employee: ${searchTerm}`);
};
export default function Bai3() {
  return (
    <div>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {/* Hiển thị kết quả tìm kiếm hoặc các thành phần giao diện người dùng khác */}
    </div>
  )
}
