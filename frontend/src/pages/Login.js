import { useState } from "react";
import axios from "axios";
import { setToken } from "../auth";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    const res = await axios.post("http://127.0.0.1:8000/api/token/", form);
    setToken(res.data.access);
    window.location.href = "/";
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#020617]">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-80">
        <h2 className="text-2xl text-white font-bold text-center mb-6">
          Admin Login
        </h2>

        <input
          className="w-full p-2 mb-4 rounded bg-white/20 text-white outline-none"
          placeholder="Username"
          onChange={(e)=>setForm({...form, username:e.target.value})}
        />

        <input
          type="password"
          className="w-full p-2 mb-4 rounded bg-white/20 text-white outline-none"
          placeholder="Password"
          onChange={(e)=>setForm({...form, password:e.target.value})}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg"
        >
          Login
        </button>
      </div>

    </div>
  );
}

export default Login;