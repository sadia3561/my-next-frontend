"use client";

import { useEffect, useState } from "react";

interface AuditEvent {
  id: string;
  user: string;
  action: string;
  timestamp: string;
}

export default function AuditPage() {
  const [events, setEvents] = useState<AuditEvent[]>([]);

  useEffect(() => {
    fetch("/api/audit", { credentials: "include" })
      .then((res) => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Audit Logs</h1>

      {events.length === 0 ? (
        <p>No audit events yet.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">User</th>
              <th className="border p-2">Action</th>
              <th className="border p-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td className="border p-2">{event.id}</td>
                <td className="border p-2">{event.user}</td>
                <td className="border p-2">{event.action}</td>
                <td className="border p-2">{event.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
