// src/app/lifecycle/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function LifecyclePage() {
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({});

  const steps = [
    { name: "Registration", link: "/registration", dropdown: true },
    { name: "Tendering", link: "/tendering" },
    { name: "Award", link: "/award" },
    { name: "Execution", link: "/execution" },
    { name: "Billing", link: "/billing" },
    { name: "AMC", link: "/amc" },
    { name: "Help Desk", link: "/helpdesk" },
    { name: "Analytics", link: "/analytics" },
  ];

  const toggleDropdown = (name: string) => {
    setDropdownOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const dropdownOptions = ["Client", "Vendor", "Supplier", "Consultant", "Engineer", "Designer", "Transporter" ];

  return (
    <main className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        

        <div className="mt-10 relative">
          <ul className="space-y-6">
            {steps.map((step) => (
              <li key={step.name}>
                <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition relative">
                  {step.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(step.name)}
                        className="text-lg font-semibold text-indigo-700 hover:underline flex items-center justify-between w-full"
                      >
                        {step.name}
                        <span className="ml-2">{dropdownOpen[step.name] ? "▲" : "▼"}</span>
                      </button>
                      {dropdownOpen[step.name] && (
                        <ul className="mt-2 bg-gray-50 border rounded shadow-sm">
                          {dropdownOptions.map((option) => (
                            <li key={option}>
                              <Link
                                href={`/${option.toLowerCase()}`}
                                className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                              >
                                {option}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={step.link}
                      className="text-lg font-semibold text-indigo-700 hover:underline"
                    >
                      {step.name}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}


