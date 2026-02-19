import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sparkz from "../assets/images/sparkz.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import  Button  from "../components/Buttons";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

     if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email.endsWith("@gmail.com")) {
      newErrors.email = "Email must end with @gmail.com";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login successful");
      console.log("Login successful");
      console.log("Email:", email);
      console.log("Password:", password);
      localStorage.setItem("isLoggedIn", true); // 🔥 store login state
      navigate("/dashboard"); 
    }
  };

  return (
    <div className="flex flex-col gap-15 justify-center item-center md:flex-row h-screen font-sans">
      {/* LEFT SIDE */}
      <div className="md:flex flex-col justify-center items-center ml-5 text-white">
          <img src={Sparkz} alt="logo"  className="md:mr-45 h-15 mb-4"/>
          <p className="text-xl md:text-2xl text-secondary mr-25 mt-2 font-poppins text-wrap w-80">
            Welcome, we are glad to see you again!
          </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col  justify-center items-center px-4 md:px-0">
        <div className="w-full ">
          <form
            onSubmit={handleLogin}
            className="bg-primary text-white p-8 md:w-md  rounded-xl"
          >
            {/* EMAIL */}
            <div className="mb-6">
              <div className="flex items-center gap-3 py-2">
                <MdEmail className="text-white" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-white placeholder-gray-200 focus:outline-none border-b border-gray-300 focus:border-white transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && (
                <p className="text-yellow-200 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="mb-5">
              <div className="relative flex items-center gap-3 py-3">
                <FaLock className="text-white" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-transparent text-white placeholder-gray-200 focus:outline-none border-b border-gray-300 focus:border-white transition"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="cursor-pointer text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </span>
              </div>
              {errors.password && (
                <p className="text-yellow-200 text-xs mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="flex justify-between items-center mb-6 mt-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-white" />
                Remember me
              </label>
              <a
                href="#"
                className="text-white hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* BUTTON */}
            <Button text="SIGN IN" type="submit" />

             <a
                href="#"
                className="text-white hover:underline mt-6 block text-center"
              >
                Users?
              </a>

          </form>

          {/* COPYRIGHT */}
          <p className="text-center text-md underline text-gray-500 mt-6">
            Copyright ©SPARKZ 2024. All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
