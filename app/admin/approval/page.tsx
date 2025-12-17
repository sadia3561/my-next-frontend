//app/admin/approval/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Approvals() {
  const router = useRouter();
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pressedButton, setPressedButton] = useState<string | null>(null);

  useEffect(() => {
    // wait for nextjs hydration
    setTimeout(() => {
      const role = localStorage.getItem("role");
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("❌ No token found");
        router.push("/login");
        return;
      }

      if (role !== "ADMIN") {
        console.log("❌ Not admin");
        router.push("/");
        return;
      }

      fetchPending(token);
    }, 200);
  }, []);

  const fetchPending = async (token: string) => {
    try {
      const res = await axios.get("http://localhost:4000/api/admin/approval", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPending(res.data);
    } catch (err: any) {
      console.log("❌ API Error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  

  if (loading)
    return <p className="p-6 text-gray-600">Loading approvals...</p>;

  return (
    <div className="p-6">
      <div className="pt-24"></div>
      <h1 className="text-2xl font-semibold mb-6">Pending Approvals</h1>

      {pending.length === 0 && (
        <p className="text-gray-500">No pending organizations.</p>
      )}

      {pending.map((org: any) => (
        <div key={org.id} className="border p-4 rounded-md mb-3">
          <p className="font-medium">{org.name}</p>
          <p className="text-sm text-gray-600">{org.gstin}</p>

          <div className="flex gap-3 mt-3">
            <button
              onClick={() => handleApprove(org.id)}
              className={`bg-green-600 text-white px-4 py-2 rounded-md ${
                pressedButton === `approve-${org.id}` ? "scale-95" : "scale-100" // <--- aeromark: scale effect
              } transition-transform duration-100`}
              
            >
              Approve
            </button>
            <button
              onClick={() => handleReject(org.id)}
             className={`bg-red-600 text-white px-4 py-2 rounded-md ${
                pressedButton === `reject-${org.id}` ? "scale-95" : "scale-100" // <--- aeromark: scale effect
              } transition-transform duration-100`}
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const handleApprove = async (id: string) => {
  const token = localStorage.getItem("token");
  await axios.patch(`http://localhost:4000/api/admin/approve/${id}`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  location.reload();
};

const handleReject = async (id: string) => {
  const token = localStorage.getItem("token");
  await axios.patch(`http://localhost:4000/api/admin/reject/${id}`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  location.reload();
};
