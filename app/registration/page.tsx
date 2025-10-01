"use client";

import Link from "next/link";

const roles = [
  "Client",
  "Vendor",
  "Supplier",
  "Consultant",
  "Engineer",
  "Designer",
  "Transporter",
];

export default function RegistrationsPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Select Your Role to Register</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role) => (
          <Link
            key={role}
            href={`/registration/${role.toLowerCase()}`}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{role}</h2>
            <p className="text-sm text-gray-600">
              Register as a {role} with role-specific details & documents
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
