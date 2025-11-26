//admin/review/page.tsx
/*"use client";

import { useState } from "react";

interface Registration {
  id: number;
  orgName: string;
  role: string;
  email: string;
  status: "Pending" | "Approved" | "Rejected" | "Correction";
  submittedOn: string;
}

export default function AdminReviewPage() {
  const [selectedReg, setSelectedReg] = useState<Registration | null>(null);

  // Dummy data – backend se fetch karoge later
  const [registrations, setRegistrations] = useState<Registration[]>([
    {
      id: 1,
      orgName: "TechBuild Pvt Ltd",
      role: "Vendor",
      email: "vendor@example.com",
      status: "Pending",
      submittedOn: "2025-10-26",
    },
    {
      id: 2,
      orgName: "SkyDesign Consultants",
      role: "Consultant",
      email: "consultant@example.com",
      status: "Approved",
      submittedOn: "2025-10-25",
    },
  ]);

  const updateStatus = (id: number, newStatus: Registration["status"]) => {
    setRegistrations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    setSelectedReg(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Admin Review Dashboard
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full text-left border">
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="p-3 border">Org Name</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Submitted</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg.id} className="border-b hover:bg-gray-50">
                <td className="p-3 border">{reg.orgName}</td>
                <td className="p-3 border">{reg.role}</td>
                <td className="p-3 border">{reg.email}</td>
                <td className="p-3 border">{reg.submittedOn}</td>
                <td
                  className={`p-3 border font-medium ${
                    reg.status === "Approved"
                      ? "text-green-600"
                      : reg.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {reg.status}
                </td>
                <td className="p-3 border">
                  <button
                    onClick={() => setSelectedReg(reg)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for detail review }
      {selectedReg && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[400px] rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Review Registration</h2>
            <p>
              <strong>Org Name:</strong> {selectedReg.orgName}
            </p>
            <p>
              <strong>Role:</strong> {selectedReg.role}
            </p>
            <p>
              <strong>Email:</strong> {selectedReg.email}
            </p>
            <p className="mb-4">
              <strong>Status:</strong> {selectedReg.status}
            </p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => updateStatus(selectedReg.id, "Approved")}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Approve
              </button>
              <button
                onClick={() => updateStatus(selectedReg.id, "Rejected")}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
              <button
                onClick={() => updateStatus(selectedReg.id, "Correction")}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Correction
              </button>
              <button
                onClick={() => setSelectedReg(null)}
                className="text-gray-600 border px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}*/
