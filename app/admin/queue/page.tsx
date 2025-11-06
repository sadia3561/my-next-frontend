"use client";

import { useState, useEffect } from "react";

interface QueueItem {
  id: string;
  user: {
    name: string;
    email: string;
  };
  documentType: string;
  status: "PENDING" | "VERIFIED" | "REJECTED";
  createdAt: string;
}

export default function AdminQueuePage() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [selected, setSelected] = useState<QueueItem | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch pending KYC queue from backend
  useEffect(() => {
    fetch("/api/admin/kyc/queue")
      .then((res) => res.json())
      .then((data) => setQueue(data))
      .catch((err) => console.error("Error fetching queue:", err));
  }, []);

  // 🔹 Update KYC status in backend
  const updateStatus = async (id: string, status: "VERIFIED" | "REJECTED") => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/kyc/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) throw new Error("Failed to update status");

      // Update UI
      setQueue((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: status } : item
        )
      );
      setSelected(null);
    } catch (err) {
      console.error(err);
      alert("Error updating status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Admin KYC Verification Queue
      </h1>

      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="min-w-full border text-left">
          <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
            <tr>
              <th className="p-3 border">User</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Document Type</th>
              <th className="p-3 border">Submitted</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3 border">{item.user?.name}</td>
                <td className="p-3 border">{item.user?.email}</td>
                <td className="p-3 border">{item.documentType}</td>
                <td className="p-3 border">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td
                  className={`p-3 border font-medium ${
                    item.status === "VERIFIED"
                      ? "text-green-600"
                      : item.status === "REJECTED"
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
              Review Document #{selected.id}
            </h2>
            <p>
              <strong>User:</strong> {selected.user?.name}
            </p>
            <p>
              <strong>Email:</strong> {selected.user?.email}
            </p>
            <p>
              <strong>Type:</strong> {selected.documentType}
            </p>
            <p className="mb-4">
              <strong>Status:</strong> {selected.status}
            </p>

            <div className="flex justify-between mt-4">
              <button
                disabled={loading}
                onClick={() => updateStatus(selected.id, "VERIFIED")}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Verify
              </button>
              <button
                disabled={loading}
                onClick={() => updateStatus(selected.id, "REJECTED")}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
              <button
                disabled={loading}
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
