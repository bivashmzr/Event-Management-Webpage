import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img7 from "../assets/Image/image7.png";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

  const login = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      setMessage("Login Successful");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.log(error);

      setMessage("Invalid Credentials");
    }
  };

  return (
    <>
      <div className=" max-w-7xl mx-auto gap-4 flex flex-col lg:flex-row lg:bg-[#EDF0FA] bg-white ">
        <div className="flex flex-col">
          <div className="">
            <Link to="/">
              <div className=" text-[#58A5FC] border  items-center bg-[#EFF6FF] gap-1 justify-center flex text-[14px] px-2 rounded-2xl  w-max mt-5 mx-5">
                <GoArrowLeft />
                <p>Back to Home</p>
              </div>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="lg:w-full  items-center flex justify-center   lg:min-h-screen">
              <img src={img7} alt="" className="w-[75%] flex " />
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] ">
          <div className="items-center flex justify-center lg:min-h-screen md:min-h-screen  ">
            <div className="w-full max-w-md bg-white lg:p-8 md:p-8 p-6.5 rounded-2xl lg:shadow-xl md:shadow-xl flex flex-col border-gray-200 md:border-2 lg:border-2">
              <h3 className="font-bold text-2xl">Welcome Back!</h3>
              <p className="text-amber-700 bg-amber-50 border border-amber-200 rounded-lg text-[13px] font-medium px-3 py-2 mt-2">
                Demo login only. Do not use your real email or password.
              </p>
              <p className="text-gray-400 text-[15px] font-medium lg:w-90 py-2">
                Login to your account to continue managing your events.
              </p>
              <div className="py-4">
                <h2 className="font-bold text-[16px] pb-2">Email Address</h2>
                <div className="flex gap-2 flex-col ">
                  <input
                    placeholder="demo@evently.com (demo only)"
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 border-gray-300 rounded-xl border"
                  />
                  <h2 className="font-bold text-[16px] pt-3">Demo Password</h2>

                  <input
                    type="password"
                    placeholder="Demo password only"
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 border-gray-300  rounded-xl border"
                  />
                  <div className="flex gap-2 item-center py-1">
                    <input type="checkbox" />
                    <p className="font-medium  text-[14px] text-gray-800">
                      Remember me
                    </p>
                  </div>
                </div>
              </div>

              <p
                className={`text-center font-medium pb-3 ${
                  message.includes("Successful")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>

              <button
                onClick={login}
                className="py-2.5  bg-[#2B7FFF] rounded-xl font-medium text-white text-[17px]"
              >
                Login
              </button>
              <p className="flex justify-center text-[14px] pt-5 text-gray-600 font-medium gap-1">
                Don't have an account?{" "}
                <span className="text-blue-700 ">
                  <Link to="/signup">Sign up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
