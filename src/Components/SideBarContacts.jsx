import React from "react";
import profile  from '../images/profilepic.png'
import Contacts from "./Contacts";
import { IoMdSearch } from "react-icons/io";

const SideBarContacts = () => {
  return (
    <div className="">
        <div className="header w-full h-full bg-gray-200 p-2 flex items-center gap-x-2">
            <img src={profile} alt="" className="w-14 h-14 rounded-full"/>
            <p>Allauddin</p>
        </div>
        <div className="bg-gray-200 flex items-center gap-x-4 p-2 m-2 rounded-lg">
        <IoMdSearch className="text-2xl"/>
        <input type="text" placeholder='Search Contacts' className='bg-transparent w-full' />
        </div>
     
       <Contacts/>
    </div>
  );
};

export default SideBarContacts;
