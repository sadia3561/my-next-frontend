"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      // Save token (JWT) in localStorage
      localStorage.setItem("token", data.token);

      // Optional: Remember me logic (example)
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }

      setMessage("✅ Login successful! Redirecting...");

      // Redirect based on role
      const role = data.user.role; // assuming backend sends role
      switch (role) {
        case "super_admin":
          router.push("/app/dashboard");
          break;
        case "client_admin":
          router.push("/app/org/profile");
          break;
        case "vendor_admin":
        case "supplier_admin":
          router.push("/app/kyc/submit");
          break;
        case "consultant":
        case "transporter":
          router.push("/app/dashboard");
          break;
        default:
          router.push("/app/profile");
      }
    } catch (err: any) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-300 to-white">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">Login</h2>

        {message && (
          <p className={`text-center mb-4 ${message.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-sky-500"
              />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="text-sky-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/register-org" className="text-sky-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
