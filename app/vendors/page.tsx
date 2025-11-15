import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vendors — Your Company",
};

export default function VendorsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-14 text-gray-800">
      <div className="pt-24"></div> 
      <h2 className="text-3xl font-bold">Vendors</h2>
      <p className="mt-2 text-gray-600">
        Vendor onboarding, KYC, capability matrix and performance tracking.
      </p>

      {/* Sections */}
      <section className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="font-semibold">Registration &amp; Qualification</h4>
          <p className="text-sm text-gray-600 mt-2">
            Steps to register a vendor, documents required and pre-qualification
            criteria.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="font-semibold">Performance &amp; Compliance</h4>
          <p className="text-sm text-gray-600 mt-2">
            Monitor on-time delivery, quality scores and certifications.
          </p>
        </div>
      </section>

      {/* Dashboard Example */}
      <section className="mt-8">
        <h3 className="font-semibold">Vendor Dashboard (example)</h3>
        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-600">
            Placeholder for vendor dashboard screenshots or links.
          </p>
        </div>
      </section>
    </main>
  );
}
