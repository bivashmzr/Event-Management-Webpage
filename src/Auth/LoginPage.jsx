import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img7 from "../assets/Image/image7.png";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        },
      );

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
      <div className=" mx-auto gap-4 flex ">
        <div className="w-[50%] items-center flex justify-center   min-h-screen">
          <img src={img7} alt="" className="w-[75%] flex " />
        </div>
        <div className="w-[40%]">
          <div className="items-center flex justify-center min-h-screen  ">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl flex flex-col border-gray-200 border-2">
              <h3 className="font-bold text-2xl">Welcome Back!</h3>
              <p className="text-gray-400 text-[15px] font-medium w-90 py-2">
                Login to your account to continue managing your events.
              </p>
              <div className="py-4">
                <h2 className="font-bold text-[16px] pb-2">Email Address</h2>
                <div className="flex gap-2 flex-col ">
                  <input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 border-gray-300 rounded-xl border"
                  />
                  <h2 className="font-bold text-[16px] pt-3">Password</h2>

                  <input
                    type="password"
                    placeholder="Password"
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
              <p className="flex justify-center text-[15px] pt-4 text-gray-600 font-medium">
                or continue with
              </p>

              <div className="pt-4 flex justify-around">
                <div className=" flex gap-2 border w-35 items-center justify-center py-2.5 border-gray-200 rounded-md">
                  <img
                    src="https://imgs.search.brave.com/zuIeos4ki4-T5wIXfywwAyGkli5PgsyHpcoXD0CJG2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdvb2dsZS1pY29u/LXN2Zy1kb3dubG9h/ZC1wbmctMTg5ODI0/LnBuZz9mPXdlYnAm/dz0xMjg"
                    alt=""
                    className="w-4"
                  />
                  <p>Google</p>
                </div>
                <div className=" flex gap-2 border w-35 items-center justify-center py-2.5 border-gray-200 rounded-md">
                  <img
                    src="https://imgs.search.brave.com/c3qMk89VEz3SiW-AgaeriVV_mwWF3Ax9SUZGAP_I_GE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/OTY0LzM4Ni9zbWFs/bC9mYWNlYm9vay1j/aXJjbGUtaWNvbi1m/b3Itd2ViLWRlc2ln/bi1mcmVlLXBuZy5w/bmc"
                    alt=""
                    className="w-4"
                  />
                  <p>Facebook</p>
                </div>
              </div>
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
