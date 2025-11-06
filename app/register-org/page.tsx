"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  orgName: string;
  gstin: string;
  address: string;
  kycDoc: File | null;
  contactName: string;
  designation: string;
  email: string;
  phone: string;
  website: string;
  businessType: string;
  experience: string;
  licenseDoc: File | null;
  username: string;
  password: string;
  confirmPassword: string;
  description?: string;
}

export default function PartnerRegistration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    orgName: "",
    gstin: "",
    address: "",
    kycDoc: null,
    contactName: "",
    designation: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    experience: "",
    licenseDoc: null,
    username: "",
    password: "",
    confirmPassword: "",
    description: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔹 Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // 🔹 Send OTP via backend Twilio service
  const handleSendOtp = async () => {
    if (!formData.phone || formData.phone.length < 10) {
      alert("Please enter a valid mobile number first.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.phone }),
      });

      const data = await res.json();
      if (data.success) {
        setOtpSent(true);
        alert("✅ OTP sent successfully!");
      } else {
        alert("❌ Failed to send OTP: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Verify OTP
  const handleVerifyOtp = async () => {
    if (!enteredOtp) {
      alert("Please enter the OTP.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.phone, code: enteredOtp }),
      });
      const data = await res.json();

      if (data.success) {
        setOtpVerified(true);
        alert("✅ Mobile number verified successfully!");
      } else {
        alert("❌ Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error verifying OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Submit final registration
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!otpVerified) {
    alert("Please verify your mobile number before submitting.");
    return;
  }

  const formDataToSend = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (value !== null) {
      formDataToSend.append(key, value as any);
    }
  });

  try {
    const res = await fetch("http://localhost:3000/auth/register-org", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Registration submitted successfully! Waiting for admin approval.");
      console.log("Server response:", data);
      setStep(1);
    } else {
      alert("❌ Error submitting form: " + data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Error submitting form. Please try again.");
  }
};


  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
  <div className="w-full bg-white border border-gray-300 rounded-none shadow-sm p-10 text-sm">
        <h2 className="text-center text-lg font-semibold text-blue-900 mb-6 tracking-wide uppercase border-b pb-2">
  Partner Registration Portal
</h2>


        <form onSubmit={handleSubmit} className="text-gray-700">
          {/* ---------------- STEP 1 ---------------- */}
          {step === 1 && (
            <div>
              <h2 className="text-base font-semibold mb-3 text-blue-700 border-b pb-1">
                Step 1: KYC Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Organization Name</label>
                  <input
                    name="orgName"
                    value={formData.orgName}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">GSTIN</label>
                  <input
                    name="gstin"
                    value={formData.gstin}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1">Business Address</label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1">Upload KYC Document</label>
                  <input
                    type="file"
                    name="kycDoc"
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* ---------------- STEP 2 ---------------- */}
          {step === 2 && (
            <div>
              <h2 className="text-base font-semibold mb-3 text-blue-700 border-b pb-1">
                Step 2: Contact Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Contact Person Name</label>
                  <input
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Designation</label>
                  <input
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                  />
                </div>

                {/* Phone + OTP */}
                <div className="md:col-span-2">
                  <label className="block mb-1">Mobile Number</label>
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      className="border border-gray-300 p-2 rounded w-full"
                      required
                    />
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={otpSent}
                      className={`${
                        otpSent
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-700 hover:bg-blue-800"
                      } text-white px-3 py-2 rounded`}
                    >
                      {otpSent ? "OTP Sent" : "Send OTP"}
                    </button>
                  </div>

                  {otpSent && !otpVerified && (
                    <div className="flex gap-2 mt-2">
                      <input
                        type="text"
                        placeholder="Enter OTP"
                        value={enteredOtp}
                        onChange={(e) => setEnteredOtp(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        className="bg-green-700 text-white px-3 py-2 rounded hover:bg-green-800"
                      >
                        Verify
                      </button>
                    </div>
                    
                  )}

                  {otpVerified && (
                    <p className="text-green-700 text-xs mt-1">
                      ✅ Mobile number verified successfully!
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-1">Website (Optional)</label>
                  <input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!otpVerified}
    className={`px-4 py-2 rounded text-white font-medium transition ${
      otpVerified
        ? "bg-green-700 hover:bg-green-800"
        : "bg-gray-400 cursor-not-allowed"
    }`}
                >
                  {otpVerified ? "Submit Registration" : "Verify OTP to Submit"}
                </button>
              </div>
            </div>
          )}

          {/* ---------------- STEP 3 ---------------- */}
          {step === 3 && (
            <div>
              <h2 className="text-base font-semibold mb-3 text-blue-700 border-b pb-1">
                Step 3: Business Profile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Vendor">Vendor</option>
                    <option value="Supplier">Supplier</option>
                    <option value="Consultant">Consultant</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Designer">Designer</option>
                    <option value="Transporter">Transporter</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Experience (in years)</label>
                  <input
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1">Upload License / Certificate</label>
                  <input
                    type="file"
                    name="licenseDoc"
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1">Describe Your Business (Optional)</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* ---------------- STEP 4 ---------------- */}
          {step === 4 && (
            <div>
              <h2 className="text-base font-semibold mb-3 text-blue-700 border-b pb-1">
                Step 4: Account Credentials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Username</label>
                  <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* Step counter */}
          <div className="text-center mt-6 text-gray-500 text-xs">
            Step {step} of 4
          </div>
        </form>
      </div>
    </div>
  );
}
