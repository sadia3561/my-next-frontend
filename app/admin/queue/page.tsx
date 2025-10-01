"use client";

import { useEffect, useState } from "react";

interface KycItem {
  id: string;
  userEmail: string;
  fileUrl: string;
  status: string;
}

export default function KycQueuePage() {
  const [kycQueue, setKycQueue] = useState<KycItem[]>([]);

  useEffect(() => {
    fetch("/api/admin/kyc-queue", { credentials: "include" })
      .then((res) => res.json())
      .then(setKycQueue)
      .catch(console.error);
  }, []);

  const handleAction = async (id: string, action: "approve" | "reject") => {
    const res = await fetch(`/api/admin/kyc/${action}/${id}`, {
      method: "PATCH",
      credentials: "include",
    });
    if (res.ok) setKycQueue((q) => q.filter((item) => item.id !== id));
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin KYC Queue</h1>
      {kycQueue.length === 0 && <p>No pending KYC documents.</p>}
      <ul>
        {kycQueue.map((item) => (
          <li key={item.id} className="mb-4 border p-4 rounded flex justify-between items-center">
            <div>
              <p><strong>User:</strong> {item.userEmail}</p>
              <p><strong>Status:</strong> {item.status}</p>
              <a href={item.fileUrl} target="_blank" className="text-blue-600 underline">View Document</a>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => handleAction(item.id, "approve")} className="px-3 py-1 bg-green-600 text-white rounded">Approve</button>
              <button onClick={() => handleAction(item.id, "reject")} className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
