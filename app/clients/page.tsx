// src/app/clients/page.tsx

import { Building2, Factory, Hospital, GraduationCap, Home, Store, Landmark } from "lucide-react";

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Clients</h1>

      <p className="text-center text-gray-700 mb-12">
        Serving a wide range of industries:
      </p>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
          <Building2 className="w-6 h-6 text-blue-600" />
          <span>Corporates</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
          <Factory className="w-6 h-6 text-purple-600" />
          <span>Factories</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
          <Hospital className="w-6 h-6 text-red-600" />
          <span>Hospitals</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
          <GraduationCap className="w-6 h-6 text-green-600" />
          <span>Institutions</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
          <Home className="w-6 h-6 text-orange-600" />
          <span>Real Estate</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
          <Store className="w-6 h-6 text-pink-600" />
          <span>Retail</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
          <Landmark className="w-6 h-6 text-indigo-600" />
          <span>Government</span>
        </div>
      </div>
    </div>
  );
}
