import React from "react";
import AuthBackground from "../components/AuthBackground";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import API from "../services/authService";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      return alert("Please fill all fields");
    }

    if (password.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    try {
      const res = await API.post("/register", {
        name: username,
        email,
        password,
      });

      login(res.data.token);

      navigate("/");
    } catch (error) {
      console.error(error.response?.data || error);

      alert(error.response?.data?.message || "Registration failed");
    }
  };
  return (
    <>
      <AuthBackground />

      <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        {/* Glass Card */}
        <div className="relative w-full max-w-md max-md:max-w-sm rounded-3xl border-2 border-white/10 bg-white/4 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.4)] p-8 max-[400px]:p-4">
          {/* Glass Texture */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/3 to-transparent pointer-events-none" />

          {/* Heading */}
          <h1 className="text-4xl font-bold text-white mb-3 text-center">
            Create Account
          </h1>

          <p className="text-gray-400 mb-6 text-center">
            Create your account and start collaborating instantly.
          </p>

          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">
                UserName
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-14 rounded-full bg-black/20 border border-white/5 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/50 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 rounded-full bg-black/20 border border-white/5 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/50 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-14 rounded-full bg-black/20 border border-white/5 pl-12 pr-12 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/50 transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-14 mt-6 rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex justify-center items-center gap-1 cursor-pointer"
            >
              <span className="mb-1">Create Account</span>
              <ArrowRight />
            </button>

            {/* Sign In Link */}
            <p className="text-center text-gray-400 text-sm">
              Already have an account?{" "}
              <button
                type="button"
                className="text-purple-400 hover:text-purple-300 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
