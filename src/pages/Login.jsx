import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="bg-gray-100 h-screen">
    <div className="w-full h-44 bg-[#00a884] ">
    <div className="flex  justify-center items-center   ">
        <div className="border rounded-lg bg-white shadow-2xl w-[200px] md:w-[500px] mt-20  ">
          <p className="text-center p-2 text-xl font-serif font-bold ">Login Account</p>
          <form className="flex flex-col justify-center items-center gap-x-24 gap-y-4  p-2">

            <input type="email"  placeholder="Email" className=" p-2 w-[400px] border-b " />

            <input type="password" placeholder="Passwrod"  className=" p-2 w-[400px] border-b " />

            <button className="bg-[#00a884] mt-6 w-[300px] h-10 rounded-lg text-xl font-serif font-bold  ">Sign up</button>
            <p className="text-center pb-2 ">Don't have an account? <Link to={'/'} className="text-green-500 font-bold">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Login
