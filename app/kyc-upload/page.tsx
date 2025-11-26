/*"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function KycUploadPage() {
  const [kycDoc, setKycDoc] = useState<File | null>(null);
  const [licenseDoc, setLicenseDoc] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      if (name === "kycDoc") setKycDoc(files[0]);
      if (name === "licenseDoc") setLicenseDoc(files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!kycDoc && !licenseDoc) {
      alert("Please select files to upload");
      return;
    }

    const formData = new FormData();
    if (kycDoc) formData.append("kycDoc", kycDoc);
    if (licenseDoc) formData.append("licenseDoc", licenseDoc);

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:4000/kyc/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Upload failed");

      setMessage("✅ Documents uploaded successfully!");
    } catch (err: any) {
      setMessage("❌ " + (err.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-6">
      <div className="w-full max-w-lg bg-white p-8 shadow rounded">
        <h2 className="text-xl font-semibold text-blue-900 mb-6 text-center">
          Upload KYC Documents
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">KYC Document</label>
            <input
              type="file"
              name="kycDoc"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block mb-1">License / Certificate</label>
            <input
              type="file"
              name="licenseDoc"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
          >
            {loading ? "Uploading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}*/
export default function Page() {
  return <div></div>;
}
