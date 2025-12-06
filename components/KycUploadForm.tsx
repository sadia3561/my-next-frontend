//components/KycUploadForm.tsx
"use client";

import { useState } from "react";
import { apiPost } from "@/lib/apiClient";

export default function KycUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [docType, setDocType] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !docType) {
      setMessage("Please select a document type and file.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Build FormData for file upload
      const formData = new FormData();
      formData.append("documentType", docType);
      formData.append("file", file);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "https://endearing-trust-production.up.railway.app"}/api/kyc/upload`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      if (res.ok) {
        setMessage("KYC document uploaded successfully!");
        setFile(null);
        setDocType("");
      } else {
        const err = await res.json();
        setMessage(err.message || "Upload failed");
      }
    } catch (err) {
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md max-w-md">
      <div>
        <label className="block mb-1 font-medium">Document Type</label>
        <select
          value={docType}
          onChange={(e) => setDocType(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Select --</option>
          <option value="PAN">PAN Card</option>
          <option value="AADHAAR">Aadhaar Card</option>
          <option value="PASSPORT">Passport</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Upload File</label>
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}
