"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterOrgPage() {
  const router = useRouter();
  const [orgName, setOrgName] = useState("");
  const [legalName, setLegalName] = useState("");
  const [gstin, setGstin] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [industry, setIndustry] = useState("");
  const [timezone, setTimezone] = useState("");

  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPhone, setAdminPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    if (gstin && !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/.test(gstin)) {
      setMessage("❌ GSTIN format invalid");
      return;
    }

    if (!acceptTerms) {
      setMessage("❌ Please accept Terms & Privacy");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/auth/register-org", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          organization: {
            name,
            legalName,
            gstin,
            website,
            address,
            industry,
            timezone,
          },
          admin: {
            fullName: adminName,
            email: adminEmail,
            phone: adminPhone,
            password,
          },
          acceptTerms,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Registration failed");

      setMessage("✅ Verification email sent. Pending admin approval.");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err: any) {
      setMessage("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-8">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Register Your Organization
        </h2>

        {message && (
          <p
            className={`text-center mb-4 ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          {/* Organization Section */}
          <div className="border p-4 rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-4 text-blue-900">Organization Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Organization Name"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                required
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Legal Name"
                value={legalName}
                onChange={(e) => setLegalName(e.target.value)}
                required
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="GSTIN (Optional)"
                value={gstin}
                onChange={(e) => setGstin(e.target.value)}
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
              />
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                required
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Industry</option>
                <option value="Construction">Construction</option>
                <option value="IT">IT</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Consulting">Consulting</option>
              </select>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                required
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Timezone</option>
                <option value="IST">IST (+5:30)</option>
                <option value="GMT">GMT (+0:00)</option>
                <option value="EST">EST (-5:00)</option>
              </select>
            </div>
          </div>

          {/* Primary Admin Section */}
          <div className="border p-4 rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-4 text-blue-900">Primary Admin Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                required
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Work Email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                required
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone (with country code)"
                value={adminPhone}
                onChange={(e) => setAdminPhone(e.target.value)}
                required
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Terms & Buttons */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">I accept Terms & Privacy</span>
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`flex-1 py-2 rounded-lg font-semibold transition ${
                !loading ? "bg-blue-700 text-white hover:bg-blue-800" : "bg-blue-300 text-white cursor-not-allowed"
              }`}
            >
              {loading ? "Creating..." : "Create Organisation"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/login")}
              className="flex-1 py-2 rounded-lg font-semibold border border-gray-300 hover:bg-gray-100 transition"
            >
              Back / Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
