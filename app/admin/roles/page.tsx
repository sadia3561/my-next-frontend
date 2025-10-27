"use client";

import { useState, useEffect } from "react";

interface UserRole {
  id: number;
  name: string;
  email: string;
  currentRole: "SUPER_ADMIN" | "ORG_ADMIN" | "USER";
}

export default function AdminRolesPage() {
  const [users, setUsers] = useState<UserRole[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserRole | null>(null);

  // Dummy data
  useEffect(() => {
    setUsers([
      {
        id: 1,
        name: "Riya Mehta",
        email: "riya@aabha.com",
        currentRole: "ORG_ADMIN",
      },
      {
        id: 2,
        name: "Arjun Singh",
        email: "arjun@buildpro.com",
        currentRole: "USER",
      },
    ]);
  }, []);

  const updateRole = (id: number, role: UserRole["currentRole"]) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, currentRole: role } : u))
    );
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Admin Role Management
      </h1>

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
                <td className="p-3 border text-blue-700 font-medium">
                  {user.currentRole}
                </td>
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

      {/* Role edit modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-3">
              Change Role: {selectedUser.name}
            </h2>

            <select
              className="border w-full p-2 mb-4 rounded"
              value={selectedUser.currentRole}
              onChange={(e) =>
                updateRole(selectedUser.id, e.target.value as UserRole["currentRole"])
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
}
