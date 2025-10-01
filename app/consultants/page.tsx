// FILE: app/consultants/page.tsx
import React from "react";

export const metadata = {
  title: "Consultants — Your Company",
};

export default function ConsultantsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-14">
      <h2 className="text-3xl font-bold">Consultants</h2>
      <p className="mt-2 text-gray-600">
        Design reviews, technical advisory, quality audits and approvals.
      </p>

      <section className="mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold">Engagement Model</h3>
          <p className="text-sm text-gray-600 mt-2">
            How consultants engage — review cycles, deliverable tracking and
            approvals.
          </p>
        </div>
      </section>
    </main>
  );
}
