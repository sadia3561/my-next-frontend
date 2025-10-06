"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await fetch("https://my-next-backend-20.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      setMessage("✅ Login successful!");
      setTimeout(() => router.push("/profile"), 500);
    } catch (err: any) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      {message && <p>{message}</p>}
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="px-4 py-2 border rounded"/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="px-4 py-2 border rounded"/>
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Login</button>

      <button onClick={()=>router.push("/register")} className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
        Register
      </button>
    </div>
  );
}

