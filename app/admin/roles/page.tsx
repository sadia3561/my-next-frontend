"use client";

import { useEffect, useState } from "react";

interface Role {
  id: string;
  name: string;
  permissions: string[];
}

export default function AdminRolesPage() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [name, setName] = useState("");
  const [permissions, setPermissions] = useState("");

  const fetchRoles = () => {
    fetch("/api/admin/roles", { credentials: "include" })
      .then((res) => res.json())
      .then(setRoles);
  };

  useEffect(fetchRoles, []);

  const handleCreate = async () => {
    await fetch("/api/admin/roles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, permissions: permissions.split(",") }),
      credentials: "include",
    });
    setName("");
    setPermissions("");
    fetchRoles();
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Roles Management</h1>

      <div className="mb-6 space-y-2">
        <input type="text" placeholder="Role Name" value={name} onChange={e => setName(e.target.value)} className="border px-3 py-1 rounded w-full"/>
        <input type="text" placeholder="Permissions (comma-separated)" value={permissions} onChange={e => setPermissions(e.target.value)} className="border px-3 py-1 rounded w-full"/>
        <button onClick={handleCreate} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Create Role</button>
      </div>

      <ul>
        {roles.map(role => (
          <li key={role.id} className="border p-3 rounded mb-2">
            <strong>{role.name}</strong>: {role.permissions.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
