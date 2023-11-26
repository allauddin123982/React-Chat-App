import React from "react";
import profile from "../images/profilepic.png";
const Contacts = () => {
  return (
    <>
      <div className=" overflow-auto overflow-x-hidden mt-2 ">
        <div className="body p-2 flex items-center gap-x-2 hover:bg-gray-100 rounded-md cursor-pointer ">
          <img src={profile} alt="" className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-bold"> Moiz</p>
            <span>hello</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
