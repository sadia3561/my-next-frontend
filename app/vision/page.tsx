import React from "react";
import { Eye, Target } from "lucide-react"; // npm install lucide-react

export default function VisionPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Our Vision & Mission
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision */}
        <section className="bg-white rounded-2xl shadow p-8 flex flex-col hover:shadow-lg transition-all duration-300">
          <div className="bg-blue-600 text-white rounded-full p-4 w-fit mb-4">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold text-blue-800 mb-3">Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be recognized as a global leader in MEPF &amp; ELV infrastructure
            solutions, driving sustainable innovation and excellence in every
            project.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-white rounded-2xl shadow p-8 flex flex-col hover:shadow-lg transition-all duration-300">
          <div className="bg-blue-600 text-white rounded-full p-4 w-fit mb-4">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold text-blue-800 mb-3">Mission</h2>

          <ul className="list-disc list-outside text-gray-600 leading-relaxed space-y-2 pl-5">
            <li className="pl-2">
              Deliver end-to-end engineered solutions that match international
              standards.
            </li>
            <li className="pl-2">
              Provide safe, sustainable, and energy-efficient infrastructure
              systems.
            </li>
            <li className="pl-2">
              Strengthen client partnerships with trust, transparency, and
              timely delivery.
            </li>
            <li className="pl-2">
              Constantly innovate with advanced technology integration.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
