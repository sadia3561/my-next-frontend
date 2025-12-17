"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username, password }),
});


      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      // 👉 Store token
      localStorage.setItem("token", data.token);

      // 👉 Store rememberMe
      if (rememberMe) localStorage.setItem("rememberMe", "true");

      // ⭐⭐⭐ FIX: Store Prisma role EXACTLY as backend gives ⭐⭐⭐
      localStorage.setItem("role", data.user.role);

      setMessage("✅ Login successful! Redirecting...");

      // ⭐⭐ ROLE WISE REDIRECT FIX ⭐⭐
      const role = data.user.role;

      // ADMIN → Approval page
      if (role === "ADMIN") {
        router.push("/admin/approval");
        return;
      }

      // ✔ For ALL OTHER USERS (Designer, Vendor, Engineer, Supplier, etc.)
      // Directly open Profile Page
      router.push("/profile");

    } catch (err: any) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-20 blur-[2px] select-none">
        <Image
          src="/logoo.png"
          alt="Background Logo"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-md w-full bg-white/90 p-8 rounded-2xl shadow-2xl backdrop-blur-[3px]">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Login</h2>

        {message && (
          <p
            className={`text-center mb-4 ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required
          />

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-blue-500"
              />
              <span>Remember me</span>
            </label>

            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 text-sm font-medium shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/register-org" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
