"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { auth } from "@/lib/firebaseConfig";
import {
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from "firebase/auth";

interface FormDataType {
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

  const [formData, setFormData] = useState<FormDataType>({
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

  const [emailSent, setEmailSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  // -----------------------------------------
  // HANDLE INPUT CHANGE
  // -----------------------------------------
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "kycDoc") {
      if (files && files.length > 0) {
        setFormData((prev) => ({ ...prev, kycDoc: files[0] }));
      }
      return;
    }

    if (name === "licenseDoc") {
      if (files && files.length > 0) {
        setFormData((prev) => ({ ...prev, licenseDoc: files[0] }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // -----------------------------------------
  // SEND EMAIL VERIFICATION
  // -----------------------------------------
  const handleSendEmailVerification = async () => {
    if (!formData.email) {
      alert("Please enter email first.");
      return;
    }

    setLoading(true);
    try {
      const tempPassword = Math.random().toString(36).slice(-8);

      const userCred = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        tempPassword
      );

      await sendEmailVerification(userCred.user);

      alert(`Verification email sent to ${formData.email}`);
      setEmailSent(true);
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        alert("This email already exists.");
        return;
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------------
  // VERIFY EMAIL
  // -----------------------------------------
  const handleVerifyEmail = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        alert("No user found. Send verification email again.");
        return;
      }

      await user.reload();

      if (user.emailVerified) {
        setEmailVerified(true);
        alert("Email verified successfully!");
      } else {
        alert("Email not verified yet. Check your inbox.");
      }
    } catch (err: any) {
      alert("Error verifying email: " + err.message);
    }
  };

  // -----------------------------------------
  // SUBMIT FORM
  // -----------------------------------------
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailVerified) {
      alert("Please verify email before submitting.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

     // Validate businessType / role
  if (!formData.businessType || formData.businessType.trim() === "") {
    alert("Please select your Business Type / Role.");
    return;
  }

    // -------- BUILD FORM DATA --------
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "kycDoc" && key !== "licenseDoc") {
        if (value !== null && value !== "") {
          formDataToSend.append(key, value as string);
        }
      }
    });

    if (formData.kycDoc)
      formDataToSend.append("kycDoc", formData.kycDoc);

    if (formData.licenseDoc)
      formDataToSend.append("licenseDoc", formData.licenseDoc);

    try {
      const res = await fetch(`https://endearing-trust-production.up.railway.app/api/auth/register-org`, {
  method: "POST",
  body: formDataToSend,
});


      const data = await res.json();

      if (res.ok) {
        alert("Registration submitted! Await admin approval.");

        // Reset values
        setFormData({
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

        setStep(1);
        setEmailSent(false);
        setEmailVerified(false);

        await auth.signOut();
      } else {
        alert("Error: " + (data.message || "Unknown error"));
      }
   } catch (error: any) {
  const message =
    error?.response?.data?.message ||
    error?.message ||
    "Something went wrong";

  alert("Error: " + message);
}


  };

  // -----------------------------------------
  // STEP CONTROLS
  // -----------------------------------------
  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  
  

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
                {/* ======= KYC Upload ======= */}
                <div className="md:col-span-2">
                  <label className="block mb-1">Upload KYC Document(s)</label>
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
