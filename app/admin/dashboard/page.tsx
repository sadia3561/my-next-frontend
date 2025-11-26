/*"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    pending: 0,
    approved: 0,
    rejected: 0,
    total: 0,
  });
  const [latest, setLatest] = useState([]);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "https://my-next-backend-production.up.railway.app/admin/dashboard",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      setStats(data.stats);
      setLatest(data.latest);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-900">
        Admin Dashboard
      </h1>

      {/* Stats }
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Pending", value: stats.pending, color: "bg-yellow-200" },
          { label: "Approved", value: stats.approved, color: "bg-green-200" },
          { label: "Rejected", value: stats.rejected, color: "bg-red-200" },
          { label: "Total", value: stats.total, color: "bg-blue-200" },
        ].map((box, i) => (
          <div
            key={i}
            className={`${box.color} p-4 rounded shadow text-center`}
          >
            <p className="text-sm">{box.label}</p>
            <h2 className="text-xl font-bold">{box.value}</h2>
          </div>
        ))}
      </div>

      {/* Latest }
      <h2 className="text-lg font-semibold text-blue-800 mb-3">
        Latest Registrations
      </h2>

      <div className="bg-white p-4 shadow rounded">
        {latest.length === 0 ? (
          <p className="text-gray-500 text-sm">No recent registrations.</p>
        ) : (
          <ul className="space-y-2">
            {latest.map((item: any) => (
              <li
                key={item.id}
                className="border-b pb-2 text-sm flex justify-between"
              >
                <span>{item.orgName}</span>
                <span className="text-gray-500">{item.businessType}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}*/
