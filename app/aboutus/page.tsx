"use client";

import { useState } from "react";

export default function AboutusPage() {
  const [mainTab, setMainTab] = useState("about"); // "about" | "team"
  const [teamTab, setTeamTab] = useState("leadership"); // default tab in team

  return (
    
    <div className="min-h-screen bg-gray-100 text-gray-900">
    <div className="pt-24"></div>  <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-medium text-black mb-4 text-center">
          AABHA GLOBAL NEXUS INNOVATIONS (ANI)
        </h1>
        <h2 className="text-lg text-center text-gray-800 mb-8">
          Your Trusted Partner in MEPF & ELV Solutions
        </h2>

        {/* Main Tabs */}
        <div className="flex flex-wrap justify-center gap-4 border-b border-gray-300 pb-3 mb-6">
          {[
            { id: "about", label: "About Us" },
            { id: "team", label: "AGNI Team" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setMainTab(tab.id);
                setTeamTab("leadership");
              }}
              className={`px-4 py-2 text-base font-medium ${
                mainTab === tab.id
                  ? "bg-gray-200 text-black"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* About Content */}
        {mainTab === "about" && (
          <>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-300 p-4">
              <h3 className="text-xl font-medium mb-2">About AGNI</h3>
              <p className="text-base text-gray-800 leading-relaxed">
                AABHA GLOBAL NEXUS INNOVATIONS (ANI) is a leading MEPF & ELV engineering
                company offering design, consulting, project execution, and
                lifecycle management. With a strong focus on quality, innovation,
                and safety, AGNI provides world-class solutions for industries,
                corporates, healthcare, education, government, and real estate
                projects.
              </p>
            </div>

            <div className="border border-gray-300 p-4">
              <h3 className="text-xl font-medium mb-2">Our Strength</h3>
              <p className="text-base text-gray-800 leading-relaxed">
                At AGNI, our strength lies in our people. Each member of our
                leadership and management team brings unique expertise, vision,
                and dedication to drive innovation and excellence across our MEPF
                & ELV solutions.
              </p>
            </div>
          </div>
        




      
    {/* GAP BETWEEN SECTIONS */}
<div className="mt-20"></div>

{/* Organization at a Glance Section */}
<div className="w-full bg-[#020617] py-16">
  <div className="max-w-6xl mx-auto flex flex-col items-center px-4">

    <h1 className="text-2xl md:text-3xl font-semibold text-white mb-10 text-center">
      AGNI Pvt. Ltd. – Organization at a Glance
    </h1>

    <div className="space-y-3 w-full max-w-xs">
      
      <div className="bg-[#1e293b] text-center rounded-lg py-4 shadow-md">
        <p className="text-2xl font-bold text-[#38bdf8]">10</p>
        <p className="text-sm text-gray-300 mt-1">
          Board & Executive Positions
        </p>
      </div>

      <div className="bg-[#1e293b] text-center rounded-lg py-4 shadow-md">
        <p className="text-2xl font-bold text-[#38bdf8]">9</p>
        <p className="text-sm text-gray-300 mt-1">
          Major Divisions
        </p>
      </div>

      <div className="bg-[#1e293b] text-center rounded-lg py-4 shadow-md">
        <p className="text-2xl font-bold text-[#38bdf8]">50+</p>
        <p className="text-sm text-gray-300 mt-1">
          Senior Management Roles
        </p>
      </div>

      <div className="bg-[#1e293b] text-center rounded-lg py-4 shadow-md">
        <p className="text-2xl font-bold text-[#38bdf8]">4</p>
        <p className="text-sm text-gray-300 mt-1">
          Regional Operations
        </p>
      </div>

    </div>
  </div>
</div>

</>
  )}


        {/* Team Content */}
        {mainTab === "team" && (
          <div className="mt-6">
            {/* Sub Tabs */}
            <div className="flex flex-wrap gap-4 border-b border-gray-300 pb-3 mb-4">
              {[
                { id: "leadership", label: "Leadership" },
                { id: "operations", label: "Operations" },
                { id: "legal", label: "Legal" },
                { id: "technology", label: "Technology" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setTeamTab(tab.id)}
                  className={`px-4 py-2 text-base font-medium ${
                    teamTab === tab.id
                      ? "bg-gray-200 text-black"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Team Members */}
            {teamTab === "leadership" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="Kuldeep" title="Founder & CEO" phone="+91 84009 76525" email1="info@aabhanexus.com" />
                <Card name="Madhulikaa" title="Business Head" phone="+91 70119 44649" email1="madhuaabhanexus@gmail.com" />
              </div>
            )}

            {teamTab === "operations" && (
              <div className="grid md:grid-cols-3 gap-4">
                <Card name="K. B. Singh" title="General Manager" phone="+91 99582 50795" email1="aabhanexuspm@gmail.com" />
                <Card name="Kuldeep Singh" title="HOD MEP & ELV" phone="+91 88260 97343" email1="aabhanexuspm@gmail.com" />
                <Card name="Naziya Sheikh" title="HR Manager" phone="+91 87562 61693" email1="aabhanexushr@gmail.com" />
              </div>
            )}

            {teamTab === "legal" && (
              <div className="grid md:grid-cols-3 gap-4">
                <Card name="Avinash Singh" title="Sr. Legal Advisor" extra="Sr. Advocate, Supreme Court & Prayagraj High Court" phone="+91 94545 30380" email1="legalaabhanexus@gmail.com" />
                <Card name="Hemlata Yadav" title="Legal Advisor" extra="Sr. Advocate, Prayagraj High Court" email1="legalaabhanexus@gmail.com" />
                <Card name="Jyoti Yadav" title="Legal Advisor" extra="Advocate, Prayagraj High Court" email1="legalaabhanexus@gmail.com" />
              </div>
            )}

            {teamTab === "technology" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="Vishal Dhami" title="Founder, Aeroyantra | IT Head (AGNI)" phone="+91 90120 81297" email1="itaabhanexis@gmail.com" />
                <Card name="Sadiya Bepari" title="Software Engineer" email1="itaabhanexis@gmail.com" />
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
    <div className="border border-gray-300 p-4">
      <h3 className="text-lg font-medium text-black">{name}</h3>
      {title && <p className="text-base text-gray-800">{title}</p>}
      {extra && <p className="text-base text-gray-700 mt-1">{extra}</p>}
      {phone && <p className="text-base mt-1">📞 {phone}</p>}
      {email1 && <p className="text-base">✉️ {email1}</p>}
      {email2 && <p className="text-base">✉️ {email2}</p>}
    </div>
  );
}
