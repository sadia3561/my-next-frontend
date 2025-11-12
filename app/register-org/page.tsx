"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { auth } from "@/lib/firebaseConfig";
import { sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";




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

 const [emailSent, setEmailSent] = useState(false);     // Email verification link bhejne ke liye
const [emailVerified, setEmailVerified] = useState(false); // Email verify hone ke baad true hoga
const [loading, setLoading] = useState(false);         // Loading indicator ke liye



 

 
  // ---------------- HANDLE INPUT CHANGE ----------------
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Send email verification
  const handleSendEmailVerification = async () => {
    if (!formData.email) {
      alert("Please enter your email first.");
      return;
    }

    setLoading(true);
    try {
      const tempPassword = Math.random().toString(36).slice(-8); // temporary password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        tempPassword
      );

      await sendEmailVerification(userCredential.user);
      setEmailSent(true);
      alert(`✅ Verification email sent to ${formData.email}. Please check your inbox.`);
    } catch (error: any) {
      console.error(error);
      alert(`❌ Error sending verification email: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Verify email
  const handleVerifyEmail = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        alert("No user found. Please request verification email again.");
        return;
      }

      await user.reload();
      if (user.emailVerified) {
        setEmailVerified(true);
        alert("✅ Email verified successfully!");
      } else {
        alert("⚠️ Email not verified yet. Please check your inbox.");
      }
    } catch (error: any) {
      console.error(error);
      alert("❌ Error verifying email: " + error.message);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailVerified) {
      alert("Please verify your email before submitting.");
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) formDataToSend.append(key, value as any);
    });

    try {
      const res = await fetch("https://my-next-backend-production.up.railway.app/auth/register-org", {
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
      <div className="pt-24"></div>
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
  <label className="block mb-1">Mobile Number</label>
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Enter mobile number"
    className="border border-gray-300 p-2 rounded w-full"
    
  />
</div>


                {/* Email + Verification */}
<div className="md:col-span-2">
  <label className="block mb-1">Email</label>
  <div className="flex gap-2">
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter email address"
      className="border border-gray-300 p-2 rounded w-full"
      required
    />

    <button
      type="button"
      onClick={handleSendEmailVerification}
      disabled={emailSent}
      className={`${
        emailSent
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-700 hover:bg-blue-800"
      } text-white px-3 py-2 rounded`}
    >
      {emailSent ? "Verification Sent" : "Send Verification Email"}
    </button>
  </div>

  {emailSent && !emailVerified && (
    <div className="flex gap-2 mt-2">
      <button
        type="button"
        onClick={handleVerifyEmail}
        className="bg-green-700 text-white px-3 py-2 rounded hover:bg-green-800"
      >
        Verify Email
      </button>
    </div>
  )}

  {emailVerified && (
    <p className="text-green-700 text-xs mt-1">
      ✅ Email verified successfully!
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
  {emailVerified && (
    <button
      type="button"
      onClick={nextStep} // just move to next step
      className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
    >
      Next
    </button>
  )}
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
