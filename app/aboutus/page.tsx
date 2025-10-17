"use client";

import { useState } from "react";

export default function AboutusPage() {
  const [mainTab, setMainTab] = useState("about"); // "about" | "team"
  const [teamTab, setTeamTab] = useState("leadership"); // default tab in team

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
          AABHA NEXUS INNOVATIONS (ANI)
        </h1>
        <h2 className="text-xl text-center text-gray-700 mb-10">
          <b>
            <i>Your Trusted Partner in MEPF & ELV Solutions</i>
          </b>
        </h2>

        {/* --- Main Tabs --- */}
        <div className="flex flex-wrap justify-center gap-4 border-b border-gray-300 pb-4">
          {[
            { id: "about", label: "About Us" },
            { id: "team", label: "ANI Team" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setMainTab(tab.id);
                setTeamTab("leadership");
              }}
              className={`px-5 py-2 rounded-t-lg text-sm md:text-base font-semibold ${
                mainTab === tab.id
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- ABOUT CONTENT --- */}
        {mainTab === "about" && (
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card
              name="About ANI"
              title="Company Overview"
              extra="AABHA NEXUS INNOVATIONS (ANI) is a leading MEPF & ELV engineering company offering design, consulting, project execution, and lifecycle management. With a strong focus on quality, innovation, and safety, ANI provides world-class solutions for industries, corporates, healthcare, education, government, and real estate projects."
            />

            <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
              

              {/* Our Strength content moved here */}
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-blue-900 mb-2">
                  Our Strength
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  At ANI, our strength lies in our people. Each member of our
                  leadership and management team brings unique expertise, vision,
                  and dedication to drive innovation and excellence across our
                  MEPF & ELV solutions.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* --- TEAM CONTENT --- */}
        {mainTab === "team" && (
          <div className="mt-10 space-y-8">
            {/* Sub Tabs */}
            <div className="flex flex-wrap gap-4 border-b border-gray-300 pb-4">
              {[
                { id: "leadership", label: "Leadership" },
                { id: "operations", label: "Operations" },
                { id: "legal", label: "Legal" },
                { id: "technology", label: "Technology" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setTeamTab(tab.id)}
                  className={`px-5 py-2 rounded-t-lg text-sm md:text-base font-semibold ${
                    teamTab === tab.id
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sub Content */}
            {teamTab === "leadership" && (
              <div className="grid md:grid-cols-2 gap-6">
                <Card
                  name="Kuldeep"
                  title="Founder & CEO"
                  phone="+91 84009 76525, +91 73073 35048"
                  email1="info@aabhanexus.com"
                  email2="yakuld2225@gmail.com"
                />
                <Card
                  name="Madhulikaa"
                  title="Business Head"
                  phone="+91 70119 44649"
                  email1="madhuaabhanexus@gmail.com"
                />
              </div>
            )}

            {teamTab === "operations" && (
              <div className="grid md:grid-cols-3 gap-6">
                <Card
                  name="K. B. Singh"
                  title="General Manager"
                  phone="+91 99582 50795"
                  email1="aabhanexuspm@gmail.com"
                />
                <Card
                  name="Kuldeep Singh"
                  title="HOD MEP & ELV"
                  phone="+91 88260 97343"
                  email1="aabhanexuspm@gmail.com"
                />
                <Card
                  name="Naziya Sheikh"
                  title="HR Manager"
                  phone="+91 87562 61693"
                  email1="aabhanexushr@gmail.com"
                />
                <Card
                  name="Archana Sharma"
                  title="Sales Manager"
                  phone="+91 72593 98273"
                  email1="salesaabhanexus@gmail.com"
                />
                <Card
                  name="Pravindsaha Patel"
                  title="Purchase Manager"
                  email1="purchaseaabhanexus@gmail.com"
                />
                <Card
                  name="Suryabhan Vishwakarma"
                  title="Account Manager"
                  phone="+91 79057 21472"
                  email1="aabhanexusaccsurya@gmail.com"
                />
              </div>
            )}

            {teamTab === "legal" && (
              <div className="grid md:grid-cols-3 gap-6">
                <Card
                  name="Avinash Singh"
                  title="Sr. Legal Advisor"
                  extra="Sr. Advocate, Supreme Court & Prayagraj High Court"
                  phone="+91 94545 30380"
                  email1="legalaabhanexus@gmail.com"
                />
                <Card
                  name="Hemlata Yadav"
                  title="Legal Advisor"
                  extra="Sr. Advocate, Prayagraj High Court"
                  email1="legalaabhanexus@gmail.com"
                />
                <Card
                  name="Jyoti Yadav"
                  title="Legal Advisor"
                  extra="Advocate, Prayagraj High Court"
                  email1="legalaabhanexus@gmail.com"
                />
              </div>
            )}

            {teamTab === "technology" && (
              <div className="grid md:grid-cols-2 gap-6">
                <Card
                  name="Vishal Dhami"
                  title="Founder, Aeroyantra | IT Head (ANI)"
                  phone="+91 90120 81297"
                  email1="itaabhanexis@gmail.com"
                />
                <Card
                  name="Sadiya Bepari"
                  title="Software Engineer"
                  email1="itaabhanexis@gmail.com"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- Reusable Card Component ---- */
function Card({
  name,
  title,
  phone,
  email1,
  email2,
  extra,
}: {
  name: string;
  title?: string;
  phone?: string;
  email1?: string;
  email2?: string;
  extra?: string;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-900">{name}</h3>
      {title && <p className="text-gray-700">{title}</p>}
      {extra && <p className="text-gray-600 text-sm mt-1">{extra}</p>}
      {phone && <p className="mt-1">📞 {phone}</p>}
      {email1 && <p>✉️ {email1}</p>}
      {email2 && <p>✉️ {email2}</p>}
    </div>
  );
}
