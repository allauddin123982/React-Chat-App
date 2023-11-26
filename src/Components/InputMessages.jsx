import React from 'react'
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa6";
import { LuImagePlus } from "react-icons/lu";
const InputMessages = () => {
  return (
    <>
    <div className=' bg-gray-200  flex items-center gap-x-2 p-4 rounded-lg '>
      <BsEmojiSunglasses className='text-2xl font-bold cursor-pointer'/>  
      <input type="file" className="hidden p-2 w-[400px] " id="file"/>
           
      <label htmlFor="file" className="p-2 text-xl cursor-pointer"> <LuImagePlus /> </label>
             
      <input type="text" placeholder='Type a message' className='border w-full p-2 rounded-lg ' />
      <FaMicrophone className='cursor-pointer'/>  
    </div>
    </>
  )
}

export default InputMessages
