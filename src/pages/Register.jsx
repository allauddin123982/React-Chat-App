import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuImagePlus } from "react-icons/lu";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
  
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
  
      // Check if a file is selected
      if (!file) {
        console.error("No file selected for upload");
        setErr(true);
        return;
      }
  
      const storageRef = ref(storage, displayName);
  
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle progress if needed
        },
        (error) => {
          console.error("Error uploading file:", error);
          setErr(true);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
  
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
  
            //when no user in contacts
            await setDoc(doc(db, "userChat", res.user.id), {});
            console.log("navigate")
            navigate("/login");
          } catch (downloadError) {
            console.error("Error getting download URL:", downloadError);
            setErr(true);
          }
        }
      );
    } catch (error) {
      console.error("Authentication error:", error);
      setErr(true);
    }
  };
  

  return (
    <div className="bg-gray-100 h-screen">
      <div className="w-full h-44 bg-[#00a884] ">
        <div className="flex  justify-center items-center   ">
          <div className="border rounded-lg bg-white shadow-2xl w-[200px] md:w-[500px] mt-20  ">
            <p className="text-center p-2 text-xl font-serif font-bold ">
              Register an Account
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-x-24 gap-y-4  p-2"
            >
              <input
                type="text"
                placeholder="Name"
                className=" p-2 w-[400px] border-b "
              />

              <input
                type="email"
                placeholder="Email"
                className=" p-2 w-[400px] border-b "
              />

              <input
                type="password"
                placeholder="Passwrod"
                className=" p-2 w-[400px] border-b "
              />

              <input type="file" className="hidden p-2 w-[400px] " id="file" />

              <label
                htmlFor="file"
                className="p-2 w-[400px] flex items-center gap-x-1 cursor-pointer"
              >
                <LuImagePlus /> Image
              </label>

              <button className="bg-[#00a884] mt-2 w-[300px] h-10 rounded-lg text-xl font-serif font-bold  ">
                Sign up
              </button>
              <p className="text-center pb-2 ">
                Already have an account?
                <Link to={"/login"} className="text-green-500 font-bold">
                  Login
                </Link>
              </p>
              {err && <span className="">{err}</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
