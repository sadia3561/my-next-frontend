"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MfaSetup() {
  const router = useRouter();
  const [method, setMethod] = useState("sms"); // or "authenticator"
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMfaSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token"); // token from login

      const res = await fetch("https://endearing-trust-production.up.railway.app/api/auth/mfa-setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ method, code }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "MFA setup failed");

      setMessage("✅ MFA setup successful!");
      setTimeout(() => router.push("/profile"), 1000);
    } catch (err: any) {
      setMessage("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Setup Multi-Factor Authentication (MFA)</h2>
        <p className="mb-6 text-gray-700">
          For security, please set up MFA for your account.
        </p>

        {message && (
          <p className={`mb-4 ${message.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleMfaSetup} className="space-y-4">
          <div className="flex flex-col items-start text-left">
            <label className="mb-1 font-semibold">Select MFA Method:</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="sms">SMS</option>
              <option value="authenticator">Authenticator App</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Enter code sent to you"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              !loading ? "bg-blue-700 text-white hover:bg-blue-800" : "bg-blue-300 text-white cursor-not-allowed"
            }`}
          >
            {loading ? "Setting up..." : "Setup MFA"}
          </button>
        </form>
      </div>
    </div>
  );
}
