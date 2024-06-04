import React from 'react'
import { useState } from 'react';
export default function Bai6() {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
        role: '',
      });
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserCredentials((prevCredentials) => ({
          ...prevCredentials,
          [name]: value,
        }));
      };
    
      const handleLogin = () => {
        const hardcodedUser = {
          email: 'user@example.com',
          password: 'password123',
          role: 'admin',
        };
    
        if (
          userCredentials.email === hardcodedUser.email &&
          userCredentials.password === hardcodedUser.password
        ) {
          console.log('Logged in successfully');
        } else {
          console.log('Invalid credentials');
        }
      }  
  return (
    <div>
      <h2>Đang nhập</h2>
      <input
        type="text"
        name="email"
        placeholder="Nhập Email"
        value={userCredentials.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Nhập mật khẩu"
        value={userCredentials.password}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={userCredentials.role}
        onChange={handleInputChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}