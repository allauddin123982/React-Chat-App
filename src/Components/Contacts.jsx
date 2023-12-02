import React from "react";
const Contacts = ({foundUser}) => {
  return (
    <>
      <div className=" overflow-auto overflow-x-hidden mt-2 ">
        {foundUser &&
          <div className="body p-2 flex items-center gap-x-2 hover:bg-gray-100 rounded-md cursor-pointer ">
          <img src={foundUser.photoURL} alt="" className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-bold">{foundUser.displayName}</p>
            <span>hello</span>
          </div>
        </div>}
      </div>
    </>
  );
};

export default Contacts;
