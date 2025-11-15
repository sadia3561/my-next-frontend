"use client";

import { MapPin, Phone, Mail, Globe } from "lucide-react";
import MapComponent from "./MapComponent";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 w-full">

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6 text-center pt-10">
        Contact Us
      </h1>

      {/* WHITE CONTENT BOX — ALSO FULL WIDTH */}
      <div className="w-full bg-white border-t border-b border-gray-300 p-6 space-y-5 text-sm md:text-base">

        <h2 className="text-lg font-semibold text-blue-800 mb-3">
          AABHA GLOBAL NEXUS INNOVATIONS (ANI)
        </h2>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-red-600 mt-1" />
          <p>
            <b>Registered Office:</b> 69, 60 Feet Road, Rajrooppur, Prayagraj, 211011
          </p>
        </div>

        <div className="space-y-1 flex items-start gap-3">
          <Phone className="w-5 h-5 text-green-600 mt-1" />
          <div>
            <p>Office Contact: +91 72593 98273</p>
            <p>Call Contact: +91 84009 76525</p>
            <p>WhatsApp Contact: +91 73073 35048</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-blue-600 mt-1" />
          <p>
            <a href="mailto:info@aabhanexus.com" className="text-blue-700 underline">
              info@aabhanexus.com
            </a>
            ,{" "}
            <a href="mailto:yakuld2225@gmail.com" className="text-blue-700 underline">
              yakuld2225@gmail.com
            </a>
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Globe className="w-5 h-5 text-purple-600 mt-1" />
          <a
            href="https://aabhanexus.com/"
            target="_blank"
            className="text-blue-700 underline"
          >
            https://aabhanexus.com/
          </a>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-blue-800 mb-2">Service Availability:</h3>
          <p className="text-gray-700 leading-relaxed">
            Delhi | Noida | Gurgaon | Jaipur | Chandigarh | Ahmedabad | Surat | Dehradun |
            Moradabad | Rudrapur | Bareilly | Lucknow | Prayagraj | Patna | Siliguri |
            Kanpur | Satna | Indore | Aurangabad | Pune | Mumbai | Vishakhapatnam |
            Kolkata | Bangalore | Kochi | Chennai | Hyderabad
          </p>
        </div>
      </div>

      {/* MAP — 100% FULL WIDTH, NO SIDE GAP */}
      <div className="w-full">
        <MapComponent />
      </div>
    </div>
  );
}
