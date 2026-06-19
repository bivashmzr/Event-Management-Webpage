import { useState } from "react";
import img7 from "../assets/Image/image7.png";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = async () => {
    await axios.post("http://localhost:8080/api/auth/register", form);

    setMessage("Registration Successful");
  };

  return (
    <>
      <div className=" mx-auto gap-4 flex ">
        <div className="w-[50%] items-center flex justify-center   min-h-screen">
          <img src={img7} alt="" className="w-[75%] flex " />
        </div>
        <div className="w-[50%]">
          <div className="items-center flex justify-center min-h-screen  ">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl flex flex-col border-gray-200 border-2 ">
              <h3 className="font-bold text-2xl">SignUp</h3>
              <p className="text-gray-400 text-[15px] font-medium w-90 py-2">
                Login to your account to continue managing your events.
              </p>
              <div className="py-4">
                <h2 className="font-bold text-[16px] pb-2">User Name</h2>
                <div className="flex gap-2 flex-col ">
                  <input
                    className="p-3 border-gray-300  rounded-xl border"
                    placeholder="Name"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <h2 className="font-bold text-[16px] pt-3">Email</h2>

                  <input
                    className="p-3 border-gray-300  rounded-xl border"
                    placeholder="Email"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <h2 className="font-bold text-[16px] pt-3">Password</h2>
                  <input
                    className="p-3 border-gray-300  rounded-xl border"
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
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
                onClick={register}
                className="py-2.5  bg-[#2B7FFF] rounded-xl font-medium text-white text-[17px]"
              >
                Register
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
                Already have an account?{" "}
                <span className="text-blue-700 ">
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
