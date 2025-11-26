/*"use client";

import { useEffect, useState } from "react";

export default function PendingApprovals() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState<any>(null);

  const fetchPending = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "https://my-next-backend-production.up.railway.app/admin/pending",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      setList(data);
    } catch (err) {
      console.log(err);
    }
  };

  const approve = async (id: string) => {
    const token = localStorage.getItem("token");
    await fetch(
      `https://my-next-backend-production.up.railway.app/admin/approve/${id}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    alert("Approved!");
    setSelected(null);
    fetchPending();
  };

  const reject = async (id: string) => {
    const token = localStorage.getItem("token");
    await fetch(
      `https://my-next-backend-production.up.railway.app/admin/reject/${id}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    alert("Rejected!");
    setSelected(null);
    fetchPending();
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-900">
        Pending Approvals
      </h1>

      <div className="bg-white shadow rounded p-4">
        <table className="w-full text-sm border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Org Name</th>
              <th className="p-2 border">Business Type</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {list.map((item: any) => (
              <tr key={item.id} className="border">
                <td className="p-2 border">{item.orgName}</td>
                <td className="p-2 border">{item.businessType}</td>
                <td className="p-2 border">{item.email}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => setSelected(item)}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {list.length === 0 && (
          <p className="text-center text-gray-500 py-6">
            No pending registrations.
          </p>
        )}
      </div>

      {/* Modal }
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow w-full max-w-xl text-sm">
            <h2 className="text-lg font-bold text-blue-700 mb-4">
              {selected.orgName}
            </h2>

            <div className="space-y-1">
              <p><b>GSTIN:</b> {selected.gstin}</p>
              <p><b>Address:</b> {selected.address}</p>
              <p><b>Contact:</b> {selected.contactName}</p>
              <p><b>Phone:</b> {selected.phone}</p>
              <p><b>Email:</b> {selected.email}</p>
              <p><b>Business Type:</b> {selected.businessType}</p>
              <p><b>Experience:</b> {selected.experience}</p>
              <p><b>Description:</b> {selected.description}</p>

              <p className="mt-3 font-semibold text-blue-700">Documents</p>
              <a
                href={selected.kycUrl}
                target="_blank"
                className="text-blue-600 underline block"
              >
                View KYC Document
              </a>
              <a
                href={selected.licenseUrl}
                target="_blank"
                className="text-blue-600 underline block"
              >
                View License / Certificate
              </a>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Close
              </button>

              <button
                onClick={() => reject(selected.id)}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Reject
              </button>

              <button
                onClick={() => approve(selected.id)}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}*/
export default function Page() {
  return <div></div>;
}
