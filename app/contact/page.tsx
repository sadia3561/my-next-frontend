// src/app/contact/page.tsx
import { MapPin, Phone, Smartphone, Mail, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Contact Us</h1>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h2 className="text-xl font-semibold text-blue-800">AABHA NEXUS INNOVATIONS (ANI)</h2>

        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="w-6 h-6 text-red-600 mt-1" />
          <p>
            <b>Registered Office:</b> 69, 60feet road, Rajrooppur, Prayagraj, 211011
          </p>
        </div>

        {/* Contact Numbers */}
        <div className="flex items-start gap-3">
          <Phone className="w-6 h-6 text-green-600 mt-1" />
          <div>
            <p>Office Contact: +91 7259398273</p>
            <p>Call Contact: +91 8400976525</p>
            <p>WhatsApp Contact: +91 730733504</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <Mail className="w-6 h-6 text-blue-600 mt-1" />
          <p>
            <a href="mailto:info@aabhanexus.com" className="text-blue-700 hover:underline">
              info@aabhanexus.com
            </a>
            ,{" "}
            <a href="mailto:yakuld2225@gmail.com" className="text-blue-700 hover:underline">
              yakuld2225@gmail.com
            </a>
          </p>
        </div>

        {/* Website */}
        <div className="flex items-start gap-3">
          <Globe className="w-6 h-6 text-purple-600 mt-1" />
          <a href="https://aabhanexus.com/" target="_blank" className="text-blue-700 hover:underline">
            https://aabhanexus.com/
          </a>
        </div>

        {/* Service Availability */}
        <div>
          <h3 className="font-semibold text-blue-800 mt-4 mb-2">Service Availability:</h3>
          <p className="text-gray-700 leading-relaxed">
            Delhi | Noida | Gurgaon | Jaipur | Chandigarh | Ahmedabad | Surat | Dehradun | Moradabad | 
            Rudrapur | Bareilly | Lucknow | Prayagraj | Patna | Siliguri | Kanpur | Satna | Indore | 
            Aurangabad | Pune | Mumbai | Vishakhapatnam | Kolkata | Bangalore | Kochi | Chennai | Hyderabad
          </p>
        </div>
      </div>
    </div>
  );
}
