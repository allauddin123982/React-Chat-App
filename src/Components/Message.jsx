import React from "react";
import profile from "../images/profilepic.png";
import imgFromSender from "../images/proj2.png";

const Message = ({ isOwner }) => {
  return (
    <>
      <div
        className={`message ${isOwner ? "owner" : ""} flex items-center ${
          isOwner ? "flex-row-reverse" : ""
        }  gap-x-3 pb-4`}
      >
        <div className="message_info flex flex-col items-center">
          <img src={profile} alt="" className="w-10 h-10 rounded-full" />
          <span className="text-sm">Just Now</span>
        </div>
        <div
          className={`message_content ${
            isOwner ? "bg-[#d9fdd3]" : "bg-white"
          } p-2 rounded-${isOwner ? "l-2xl" : "r-2xl"} rounded-b-2xl`}
        >
          <p>Hello from {isOwner ? "owner" : "sender"}</p>
          <img src={imgFromSender} alt="" className="w-44 h-44" />
        </div>
      </div>
    </>
  );
};

export default Message;
