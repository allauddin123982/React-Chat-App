import React from 'react'
import SideBarContacts from '../Components/SideBarContacts'
import Messages from '../Components/Messages'

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen">
    <div className="w-full h-48 bg-[#00a884] ">
    <div className="flex justify-center items-center">
        <div className="border rounded-lg bg-white shadow-2xl w-[200px] md:w-[1400px] h-[680px] mt-20  ">
           
          <div className='flex rouneded-lg h-full '>
            <div className="left  border-r border-gray-400 w-[500px] rounded-lg">
            <SideBarContacts/>
            </div>
            <div className="right border w-full rounded-lg">
            <Messages/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Home
