import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
  
    try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate("/home")
    } catch (error) {
      console.error("Authentication error:", error);
      setErr("Invalid Email or Password");
    }
  };
  return (
    <div className="bg-gray-100 h-screen">
    <div className="w-full h-44 bg-[#00a884] ">
    <div className="flex  justify-center items-center   ">
        <div className="border rounded-lg bg-white shadow-2xl w-[200px] md:w-[500px] mt-20  ">
          <p className="text-center p-2 text-xl font-serif font-bold ">Login Account</p>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-x-24 gap-y-4  p-2">

            <input type="email"  placeholder="Email" className=" p-2 w-[400px] border-b " />

            <input type="password" placeholder="Passwrod"  className=" p-2 w-[400px] border-b " />

            <button className="bg-[#00a884] mt-6 w-[300px] h-10 rounded-lg text-xl font-serif font-bold  ">Login</button>
            <p className="text-center pb-2 ">Don't have an account? <Link to={'/'} className="text-green-500 font-bold">Sign up</Link></p>
          <p className='text-red-600'>{err}</p>
          </form>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Login
