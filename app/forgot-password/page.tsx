"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  // Send OTP
  const handleSendOtp = () => {
    if (!mobile || mobile.length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);
    setOtpSent(true);
    setOtpVerified(false);
    alert(`OTP sent to ${mobile}: ${randomOtp}`); // demo
  };

  // Verify OTP
  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setOtpVerified(true);
      alert("✅ Mobile number verified! You can set a new password now.");
    } else {
      alert("❌ Invalid OTP. Please try again.");
    }
  };

  // Reset Password
  const handleResetPassword = () => {
    if (!otpVerified) {
      alert("Please verify OTP first.");
      return;
    }
    if (!newPassword) {
      alert("Enter a new password.");
      return;
    }
    // Call API to reset password (replace with actual backend)
    alert(`✅ Password reset successful for mobile ${mobile}`);
    setMessage("Password has been successfully reset.");
    // Clear state
    setMobile("");
    setOtp("");
    setOtpSent(false);
    setOtpVerified(false);
    setNewPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-gray-900">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Forgot Password
        </h2>

        {message && (
          <p className="text-center text-green-600 mb-4">{message}</p>
        )}

        {/* Step 1: Enter Mobile & Send OTP */}
        {!otpSent && (
          <div className="space-y-4">
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={handleSendOtp}
              className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
            >
              Send OTP
            </button>
          </div>
        )}

        {/* Step 2: Verify OTP */}
        {otpSent && !otpVerified && (
          <div className="space-y-4 mt-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={handleVerifyOtp}
              className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
            >
              Verify OTP
            </button>
          </div>
        )}

        {/* Step 3: Reset Password */}
        {otpVerified && (
          <div className="space-y-4 mt-4">
            <input
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={handleResetPassword}
              className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
            >
              Reset Password
            </button>
          </div>
        )}

        <p className="text-center text-sm mt-6">
          Remembered your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
