import React, { useContext, useState } from "react";
import Contacts from "./Contacts";
import { IoMdSearch } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContact";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
const SideBarContacts = () => {
  const { currentUser } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
      
    } catch (error) {
      setErr(true)
    }
  };

  const handlekey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="">
      <div className="header w-full h-full bg-gray-200 p-2 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <img
            src={currentUser.photoURL}
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />
          <p>{currentUser.displayName}</p>
        </div>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
      <div className="bg-gray-200 flex items-center gap-x-4 p-2 m-2 rounded-lg">
        <IoMdSearch className="text-2xl" />
        <input
          type="text"
          placeholder="Search Contacts"
          className="bg-transparent w-full"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handlekey}
        />
      </div>
      {err ? "No user found" : null}
      <Contacts foundUser={user}/>
    </div>
  );
};

export default SideBarContacts;
