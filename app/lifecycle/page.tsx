
// src/app/lifecycle/page.tsx
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function LifecyclePage() {
  const steps = [
    { name: "Registration", link: "/registration" },
    { name: "Tendering", link: "/tendering" },
    { name: "Award", link: "/award" },
    { name: "Execution", link: "/execution" },
    { name: "Billing", link: "/billing" },
    { name: "AMC", link: "/amc" },
    { name: "Help Desk", link: "/helpdesk" },
    { name: "Analytics", link: "/analytics" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-700">
          Project Lifecycle Flow
        </h1>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          ANI ensures smooth end-to-end collaboration across all project phases.
          From registration to analytics.
        </p>

        {/* Timeline */}
        <div className="mt-12 relative">
          <div className="border-l-4 border-indigo-600 absolute h-full left-6 top-0"></div>
          <ul className="space-y-10">
            {steps.map((step) => (
              <li key={step.name} className="relative pl-16">
                <span className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-full shadow-md">
                  <CheckCircle className="w-6 h-6" />
                </span>
                <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition">
                  <Link
                    href={step.link}
                    className="text-lg font-semibold text-indigo-700 hover:underline"
                  >
                    {step.name}
                  </Link>
                  <p className="text-sm text-gray-600 mt-2">
                    Short description about <b>{step.name}</b> phase and how ANI supports it.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
