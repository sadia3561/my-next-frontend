//app/admin/approval/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Approvals() {
  const router = useRouter();
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(true);

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
      const res = await axios.get("https://endearing-trust-production.up.railway.app/api/admin/approval", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPending(res.data);
    } catch (err: any) {
      console.log("❌ API Error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };



   
  // ➕ ADD: Move handleApprove INSIDE component and add UI feedback
  const handleApprove = async (id: string) => {
    const token = localStorage.getItem("token");

    // ➕ ADD: temporary UI "Approving..."
    setPending((prev: any) =>
      prev.map((o: any) =>
        o.id === id ? { ...o, approving: true } : o
      )
    );

    try {
      await axios.patch(
        `https://endearing-trust-production.up.railway.app/api/admin/approve/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // ➕ ADD: remove from UI instantly
      setPending((prev: any) => prev.filter((o: any) => o.id !== id));
    } catch (err) {
      alert("Error approving");
      // rollback UI state
      setPending((prev: any) =>
        prev.map((o: any) =>
          o.id === id ? { ...o, approving: false } : o
        )
      );
    }
  };

  // ➕ ADD: Move handleReject INSIDE component and add UI feedback
  const handleReject = async (id: string) => {
    const token = localStorage.getItem("token");

    setPending((prev: any) =>
      prev.map((o: any) =>
        o.id === id ? { ...o, rejecting: true } : o
      )
    );

    try {
      await axios.patch(
        `https://endearing-trust-production.up.railway.app/api/admin/reject/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // remove from UI
      setPending((prev: any) => prev.filter((o: any) => o.id !== id));
    } catch (err) {
      alert("Error rejecting");
      setPending((prev: any) =>
        prev.map((o: any) =>
          o.id === id ? { ...o, rejecting: false } : o
        )
      );
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
              disabled={org.approving} 
              className={`text-white px-4 py-2 rounded-md ${
                org.approving ? "bg-gray-400" : "bg-green-600"
              }`}                                           
            >
              {org.approving ? "Approving..." : "Approve"}   
            </button>
            <button
              onClick={() => handleReject(org.id)}
              disabled={org.rejecting}                      
              className={`text-white px-4 py-2 rounded-md ${
                org.rejecting ? "bg-gray-400" : "bg-red-600"
              }`}                                            
            >
              {org.rejecting ? "Rejecting..." : "Reject"}   
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

