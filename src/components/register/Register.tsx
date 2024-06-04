import { useNavigate } from "react-router-dom";

export default function Register() {
    const register=(event:React.FormEvent)=>{
        // kiểm tra mọi thông tin người dùng nhập ok hết thì 
        // chuyển sang trang login
        // ngăn chặn việc submit của form không reload lại
        event?.preventDefault();
        // dùng hook navigate
        const navigate= useNavigate();
        navigate("/login")  
    }
  return (
    <div>Register
        <form onSubmit={register} action="">
            <label htmlFor="">email</label>
            <input type="text"/><br/>
            <label htmlFor="">name</label>
            <input type="text"/><br/>
            <label htmlFor="">password</label>
            <input type="text"/><br/>
            <label htmlFor="">confirmpassword</label>
            <input type="text"/><br/>
            <button onClick={register}>register</button>
        </form>
    </div>
  )
}
