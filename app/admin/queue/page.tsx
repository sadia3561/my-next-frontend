"use client";

import { useState, useEffect } from "react";

interface QueueItem {
  id: number;
  orgName: string;
  applicant: string;
  type: "KYC" | "Registration";
  submittedOn: string;
  status: "Pending" | "Verified" | "Rejected";
}

export default function AdminQueuePage() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [selected, setSelected] = useState<QueueItem | null>(null);

  // Dummy data — later backend se fetch karna
  useEffect(() => {
    setQueue([
      {
        id: 1,
        orgName: "Aabha Nexus Innovations",
        applicant: "Riya Mehta",
        type: "KYC",
        submittedOn: "2025-10-26",
        status: "Pending",
      },
      {
        id: 2,
        orgName: "BuildPro Engineers",
        applicant: "Arjun Singh",
        type: "Registration",
        submittedOn: "2025-10-25",
        status: "Verified",
      },
    ]);
  }, []);

  const updateStatus = (id: number, status: QueueItem["status"]) => {
    setQueue((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
    setSelected(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Admin Verification Queue
      </h1>

      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="min-w-full border text-left">
          <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
            <tr>
              <th className="p-3 border">Org Name</th>
              <th className="p-3 border">Applicant</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Submitted</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3 border">{item.orgName}</td>
                <td className="p-3 border">{item.applicant}</td>
                <td className="p-3 border">{item.type}</td>
                <td className="p-3 border">{item.submittedOn}</td>
                <td
                  className={`p-3 border font-medium ${
                    item.status === "Verified"
                      ? "text-green-600"
                      : item.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {item.status}
                </td>
                <td className="p-3 border">
                  <button
                    onClick={() => setSelected(item)}
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
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-3">
              Review Queue Item #{selected.id}
            </h2>
            <p>
              <strong>Org:</strong> {selected.orgName}
            </p>
            <p>
              <strong>Applicant:</strong> {selected.applicant}
            </p>
            <p>
              <strong>Type:</strong> {selected.type}
            </p>
            <p className="mb-4">
              <strong>Status:</strong> {selected.status}
            </p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => updateStatus(selected.id, "Verified")}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Verify
              </button>
              <button
                onClick={() => updateStatus(selected.id, "Rejected")}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
              <button
                onClick={() => setSelected(null)}
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
