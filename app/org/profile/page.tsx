"use client";

import { useEffect, useState } from "react";

interface OrgProfile {
  name: string;
  gstin: string;
  address: string;
}

export default function OrgProfilePage() {
  const [org, setOrg] = useState<OrgProfile | null>(null);

  useEffect(() => {
    fetch("/api/org/profile", { credentials: "include" })
      .then((res) => res.json())
      .then(setOrg)
      .catch(console.error);
  }, []);

  if (!org) return <p>Loading...</p>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Organization Profile</h1>
      <p><strong>Name:</strong> {org.name}</p>
      <p><strong>GSTIN:</strong> {org.gstin}</p>
      <p><strong>Address:</strong> {org.address}</p>
    </div>
  );
}
