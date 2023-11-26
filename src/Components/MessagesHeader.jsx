import React from "react";
import profile from "../images/profilepic.png";
import { IoVideocam } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const MessagesHeader = () => {
  return (
    <>
      <div className="Header bg-gray-200 p-2 flex items-center gap-x-2 justify-between">
        <div className=" flex items-center gap-x-2">
          <img src={profile} alt="" className="w-12 h-12 rounded-full" />
          <span className="font-bold">Related Moiz</span>
        </div>
        <div className="audioVideo flex items-center gap-x-6 me-10">
          <IoVideocam className="text-2xl cursor-pointer"/>
          <IoCall className="text-2xl cursor-pointer"/>
        </div>
      </div>
    </>
  );
};

export default MessagesHeader;
