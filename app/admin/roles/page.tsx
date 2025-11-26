/*"use client";

import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "SUPER_ADMIN" | "ORG_ADMIN" | "USER";
}

const API_BASE = "https://my-next-backend-production.up.railway.app";

export default function AdminRolesPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Fetch users for role management
  useEffect(() => {
    fetch(`${API_BASE}/admin/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        const text = await res.text();

        try {
          return JSON.parse(text);
        } catch {
          console.error("Backend not returning JSON:", text);
          return [];
        }
      })
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const updateRole = async (id: string, newRole: User["role"]) => {
    try {
      const res = await fetch(`${API_BASE}/admin/users/${id}/role`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      });

      if (!res.ok) throw new Error("Failed to update role");

      // Update UI
      setUsers((prev) =>
        prev.map((u) => (u.id === id ? { ...u, role: newRole } : u))
      );

      setSelectedUser(null);
    } catch (err) {
      console.error(err);
      alert("Error updating role");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Role Management</h1>

      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="min-w-full border text-left">
          <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-3 border">{user.name}</td>
                <td className="p-3 border">{user.email}</td>
                <td className="p-3 border text-blue-700 font-medium">{user.role}</td>

                <td className="p-3 border">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal }
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-3">
              Change Role: {selectedUser.name}
            </h2>

            <select
              className="border w-full p-2 mb-4 rounded"
              value={selectedUser.role}
              onChange={(e) =>
                updateRole(selectedUser.id, e.target.value as User["role"])
              }
            >
              <option value="SUPER_ADMIN">SUPER_ADMIN</option>
              <option value="ORG_ADMIN">ORG_ADMIN</option>
              <option value="USER">USER</option>
            </select>

            <button
              onClick={() => setSelectedUser(null)}
              className="text-gray-700 border px-3 py-1 rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}*/
export default function Page() {
  return <div></div>;
}
