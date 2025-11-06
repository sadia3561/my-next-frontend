"use client";

import { useState, useEffect } from "react";

interface KYC {
  id: number;
  orgName: string;
  applicant: string;
  email: string;
  submittedOn: string;
  status: "Pending" | "Verified" | "Rejected" | "Correction";
}

export default function AdminKycReviewPage() {
  const [kycList, setKycList] = useState<KYC[]>([]);
  const [selectedKyc, setSelectedKyc] = useState<KYC | null>(null);

  // 🔹 Backend se fetch karna
  useEffect(() => {
    fetch("http://localhost:3000/admin/kycs")
      .then((res) => res.json())
      .then((data) => setKycList(data))
      .catch((err) => console.error("Error fetching KYC list:", err));
  }, []);

  const updateStatus = async (id: number, newStatus: string) => {
    try {
      await fetch(`http://localhost:3000/admin/kyc/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      setKycList((prev) =>
        prev.map((k) => (k.id === id ? { ...k, status: newStatus as any } : k))
      );
      setSelectedKyc(null);
    } catch (error) {
      console.error("Error updating KYC status:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Admin KYC Review Queue
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full text-left border">
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="p-3 border">Org Name</th>
              <th className="p-3 border">Applicant</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Submitted</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {kycList.map((kyc) => (
              <tr key={kyc.id} className="border-b hover:bg-gray-50">
                <td className="p-3 border">{kyc.orgName}</td>
                <td className="p-3 border">{kyc.applicant}</td>
                <td className="p-3 border">{kyc.email}</td>
                <td className="p-3 border">{kyc.submittedOn}</td>
                <td
                  className={`p-3 border font-medium ${
                    kyc.status === "Verified"
                      ? "text-green-600"
                      : kyc.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {kyc.status}
                </td>
                <td className="p-3 border">
                  <button
                    onClick={() => setSelectedKyc(kyc)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedKyc && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-[400px] rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Review KYC Application
            </h2>
            <p>
              <strong>Org:</strong> {selectedKyc.orgName}
            </p>
            <p>
              <strong>Applicant:</strong> {selectedKyc.applicant}
            </p>
            <p>
              <strong>Email:</strong> {selectedKyc.email}
            </p>
            <p className="mb-4">
              <strong>Status:</strong> {selectedKyc.status}
            </p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => updateStatus(selectedKyc.id, "Verified")}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Verify
              </button>
              <button
                onClick={() => updateStatus(selectedKyc.id, "Rejected")}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
              <button
                onClick={() => updateStatus(selectedKyc.id, "Correction")}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Correction
              </button>
              <button
                onClick={() => setSelectedKyc(null)}
                className="text-gray-700 border px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
