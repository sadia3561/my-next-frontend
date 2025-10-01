"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      setMessage("✅ Registration successful! Now login.");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err: any) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        {message && <p className="text-center mb-4 text-red-600">{message}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full px-4 py-2 border rounded"/>
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full px-4 py-2 border rounded"/>
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Register</button>
        </form>
      </div>
    </div>
  );
}
