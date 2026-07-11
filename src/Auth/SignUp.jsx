import { useState } from "react";
import img7 from "../assets/Image/image7.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

function SignUp() {
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

  const register = async () => {
    await axios.post(`${API_URL}/api/auth/register`, form);

    setMessage("Registration Successful");
  };

  return (
    <>
      <div className="mx-auto max-w-7xl gap-4 flex flex-col lg:flex-row lg:bg-[#EDF0FA] bg-white">
        <div className="flex flex-col">
          {/* Mobile Back Button */}
          <div className="block ">
            <Link to="/">
              <div className="text-[#58A5FC] border items-center bg-[#EFF6FF] gap-1 justify-center flex text-[14px] px-2 rounded-2xl w-max mt-5 mx-5">
                <GoArrowLeft />
                <p>Back to Home</p>
              </div>
            </Link>
          </div>

          {/* Left Image */}
          <div className="hidden lg:block">
            <div className="lg:w-full flex items-center justify-center lg:min-h-screen">
              <img src={img7} alt="" className="w-[75%]" />
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <div className="lg:w-[40%]">
          <div className="flex items-center justify-center lg:min-h-screen md:min-h-screen">
            <div className="w-full max-w-md bg-white lg:p-8 md:p-8 p-6.5 rounded-2xl lg:shadow-xl md:shadow-xl flex flex-col border-gray-200 lg:border-2 md:border-2">
              <h3 className="font-bold text-2xl">Create Account</h3>

              <p className="text-gray-400 text-[15px] font-medium lg:w-90 py-2">
                Create your account to start discovering and managing amazing
                events.
              </p>

              <div className="py-4 flex flex-col gap-3">
                {/* Username */}
                <div>
                  <h2 className="font-bold text-[16px] pb-2">User Name</h2>

                  <input
                    placeholder="Enter your name"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl"
                  />
                </div>

                {/* Email */}
                <div>
                  <h2 className="font-bold text-[16px] pb-2">Email Address</h2>

                  <input
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl"
                  />
                </div>

                {/* Password */}
                <div>
                  <h2 className="font-bold text-[16px] pb-2">Password</h2>

                  <input
                    type="password"
                    placeholder="Create password"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl"
                  />
                </div>

                <div className="flex gap-2 items-center py-1">
                  <input type="checkbox" />
                  <p className="font-medium text-[14px] text-gray-800">
                    I agree to the Terms & Conditions
                  </p>
                </div>
              </div>

              {/* Message */}
              <p
                className={`text-center font-medium pb-3 ${
                  message.includes("Successful")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>

              {/* Register Button */}
              <button
                onClick={register}
                className="py-2.5 bg-[#2B7FFF] rounded-xl font-medium text-white text-[17px] hover:bg-[#1E6FE8] transition"
              >
                Create Account
              </button>

              {/* Login Link */}
              <p className="flex justify-center text-[14px] pt-5 text-gray-600 font-medium gap-1">
                Already have an account?
                <span className="text-blue-700">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
