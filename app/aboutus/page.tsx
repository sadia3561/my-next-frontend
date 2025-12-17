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
          <div className="grid md:grid-cols-1 gap-6">
            <div className="border border-gray-300 p-4">
              <h3 className="text-xl font-bold mb-2">About AGNI Pvt. Ltd.</h3>
              <p className="text-base text-gray-800 leading-relaxed">
               About AGNI Pvt. Ltd.

AGNI is a forward-thinking technology and engineering enterprise dedicated to designing, developing, implementing, and operating advanced solutions that shape the future of infrastructure and digital transformation. With a strong foundation in Artificial Intelligence (AI), Machine Learning (ML), Automation, and Robotics, we deliver state-of-the-art systems for industrial, commercial, and smart infrastructure applications.

We specialize in providing Smart Infrastructure and Smart City solutions through integrated control, monitoring, and automation systems for utilities, mobility, energy management, environment, and urban safety.

AGNI Pvt. Ltd. also excels in delivering comprehensive MEPF (Mechanical, Electrical, Plumbing & Firefighting) and ELV (Extra Low Voltage) engineering services. Our offerings include design, installation, testing, commissioning, and maintenance of building systems alongside integrated facility solutions.

With a strong focus on Cyber Security and Digital Defence, we provide advanced services such as network security, ethical hacking, vulnerability assessment, digital forensics, data protection, and risk management for enterprises and government organizations.

In addition, we offer end-to-end Data Network Infrastructure, Cloud Technology, and IoT (Internet of Things) solutions that enable enterprise connectivity, data centers, automation, and digital transformation at scale.

AGNI Pvt. Ltd. also establishes and operates Research & Development and Technology Innovation Labs dedicated to advancing new technologies, AI applications, smart systems integration, and sustainable engineering practices.

Driven by innovation, excellence, and a commitment to transformative engineering, AGNI Pvt. Ltd. aims to lead the industry with intelligent, secure, and sustainable solutions for a smarter future.

              </p>
            </div>

            

            <div className="border border-gray-300 p-4">
              <h3 className="text-xl font-bold mb-2">Our Strength.</h3>
              <p className="text-base text-gray-800 leading-relaxed">
                At AGNI, our strength lies in our people. Each member of our
                leadership and management team brings unique expertise, vision,
                and dedication to drive innovation and excellence across our MEPF
                & ELV solutions.
              </p>
            </div>

              <div className="border border-gray-300 p-4">
              <h3 className="text-xl font-bold mb-2">Founders Message.</h3>
              <p className="text-base text-gray-800 leading-relaxed">
                

Welcome to AGNI Pvt. Ltd.

When we founded AGNI, our vision was clear—to build a company that not only delivers engineering excellence but also leads the transformation toward intelligent, secure, and sustainable infrastructure. In a world that is evolving faster than ever, we believe that innovation must be practical, technology must be purposeful, and every solution must create measurable value.

At AGNI, we combine the power of Artificial Intelligence, Automation, Robotics, MEPF expertise, and advanced ELV & Cyber Security systems to shape the future of industrial, commercial, and smart infrastructure. Our commitment goes beyond delivering projects; we strive to create integrated ecosystems that enhance efficiency, safety, and long-term sustainability for our clients and communities.

Every milestone we achieve is a reflection of our team’s dedication, passion, and relentless pursuit of excellence. We continuously invest in research, development, and emerging technologies to ensure that AGNI remains at the forefront of innovation.

To all our clients, partners, and stakeholders—thank you for your trust and support. Your belief in our capabilities inspires us to push boundaries, innovate fearlessly, and deliver solutions that stand the test of time.

We look forward to building a smarter, safer, and more connected future—together.

<br />
Warm regards,
KULDEEP
<br />
Founder,
AGNI Pvt. Ltd.
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
                { id: "boardofdirectors", label: "Board Of Directors" },
                { id: "officeoftheceo", label: "Office Of The CEO" },
                { id: "strategic", label: "Strategic & Administrative Leadership" },
                { id: "business", label: "Business & Projects Division" },
                { id: "design", label: "Engineering & Design Division" },
                { id: "technologydivision", label: "Technology, R&D & Innovation Division" },
                { id: "financial", label: "Financial & Commerical Division" },
                { id: "SalesMarketing", label: "Sales, Marketing & Branding Division" },
                { id: "hrtraining", label: "HR, Training & Culture Division" },
                { id: "legalquality", label: "Legal,Quality & Compliance Division" },
                { id: "sales", label: "Sales & Purchase Legal Division" },
                { id: "operationslogistics", label: "Operations, Logistics & Support Division" },

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






             {teamTab === "boardofdirectors" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="xxx" title="Chairman" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Foundar & Managing Director" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Technology & Innovation" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Finance & Corporate Governance" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Strategy & Global Alliances" phone="+91 ***" email1="info@aabhanexus.com" />
                
              </div>
            )}
            
             {teamTab === "officeoftheceo" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="xxx" title="Chief Executive Officer(CEO)" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Executive Assistant to the CEO" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Chief of Staff" phone="+91 ***" email1="info@aabhanexus.com" />
               
                
              </div>
            )}

              {teamTab === "strategic" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="xxx" title="Chief Operating Officer (COO)" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Chief Financial Officer (CFO)" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Chief Technology Officer (CTO)" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Chief Business Officer (CBO)" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Chief Marketing Officer (CMO)" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Chief Human Resources Officer (CHRO)" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Chief Strategy Officer (CSO)" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Chief Compliance & Governance Officer (CCGO)" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Chief Procurement Officer (CPO)" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Chief Information Security Officer (CISO)" phone="+91 ***" email1="info@aabhanexus.com" />
               
                
              </div>
            )}


             {teamTab === "business" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="xxx" title="VP- Business Operations & Delivery" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="GM- Project Management" email1="info@aabhanexus.com" />
                <Card name="xxx" title="AGM- Project Execution" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Regional Head- North" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Regional Head- South" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Regional Head- West" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Regional Head- East" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Project Managers (MEP,ELV,Automation)" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Site Engineers & Supervisors" email1="info@aabhanexus.com" />
     
              </div>
            )}

            {teamTab === "design" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="xxx" title="Director- Engineering Excellence" phone="+91 ***" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="GM- MEP Design" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="AGM- ELV Design" phone="+91 ***" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="Head- Fire Engineering" phone="+91 ***" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="Head- HVAC Design" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="Head- Electrical Engineering" phone="+91 ***" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="Head- Public Health Engineering(PHE)" phone="+91 ***" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="Head- Automation & System Integration" phone="+91 ***" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="3D Modelling & BIM Head" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="BIM Specialists(Revit,Navisworks)" phone="+91 ***" email1="itaabhanexis@gmail.com" />
                 <Card name="xxx" title="CAD Team- Draftsmen & Detailers" phone="+91 ***" email1="itaabhanexis@gmail.com" />
     
              </div>
            )}
               

              {teamTab === "technologydivision" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="xxx" title="CTO Office- Technology Architects" phone="+91 ***" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="Head- AI & Automation Systems" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="Head-IoT & Smart Infrastructure" phone="+91 ***" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="R&D Lab Director" phone="+91 ***" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="AI Engineers/ Data Scientists" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="Software Development Team" phone="+91 ***" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="Network & Cybersecurity Engineering Team" phone="+91 ***" email1="itaabhanexis@gmail.com" />
     
              </div>
            )}


             {teamTab === "financial" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="xxx" title="CFO Office- TCore Finance Team" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Head- Accounts & Taxation" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Head-Financial Planning & Analysis (FP&A)" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Head- Budgeting & Cost Control" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Head- Billing & Contracts" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Procurement & Vendor Management Team" phone="+91 ***" email1="info@aabhanexus.com" />
     
              </div>
            )}


             {teamTab === "SalesMarketing" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="xxx" title="Business Head- Sales & Growth" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="GM- Corporate Sales" email1="info@aabhanexus.com" />
                <Card name="xxx" title="AGM- Government & PSU Projects" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Head- Key Accounts & Client Relations" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Head- Digital Marketing" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Branding & Content Team" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Tendering & Bidding Team" phone="+91 ***" email1="info@aabhanexus.com" />
     
              </div>
            )}


            {teamTab === "hrtraining" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="xxx" title="GM- Human Resources" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="Talent Acquisition Specialists" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="HR Operations & Payroll" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Learning & Development (L&D) Head" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Employee Engagement & culture Team" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Tendering & Bidding Team" phone="+91 ***" email1="info@aabhanexus.com" />
     
              </div>
            )}
              


               {teamTab === "legalquality" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="xxx" title="Head- Legal Affairs" email1="legalaabhanexus@gmail.com" />
                <Card name="xxx" title="Head- Contracts & Claims" phone="+91 ***" email1="legalaabhanexus@gmail.com" />
                <Card name="xxx" title="Head- Quality Assurance & Quality Control(QA/QC)" phone="+91 ***" email1="legalaabhanexus@gmail.com" />
                <Card name="xxx" title="Head- Health,Safety & Environment (HSE)" email1="legalaabhanexus@gmail.com" />
     
              </div>
            )}


               {teamTab === "sales" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="xxx" title="Head- Sales & Purchase Legal Compliance" email1="legalaabhanexus@gmail.com" />
                <Card name="xxx" title="Senior Legal Advisor- Commerical & Procurement" phone="+91 ***" email1="legalaabhanexus@gmail.com" />
                <Card name="xxx" title="Legal Officer- Vendor Contracts" phone="+91 ***" email1="legalaabhanexus@gmail.com" />
                <Card name="xxx" title="Legal Officer- Purchase Agreements" email1="legalaabhanexus@gmail.com" />
                <Card name="xxx" title="Legal Officer- Customer Contracts & Policy Compliance" phone="+91 ***" email1="legalaabhanexus@gmail.com" />
                <Card name="xxx" title="Documentation & Legal Records Team" phone="+91 ***" email1="legalaabhanexus@gmail.com" />
     
              </div>
            )}


            {teamTab === "operationslogistics" && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card name="xxx" title="Head- Operations & Coordination" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Head- Logistics & Supply Chain" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Warehouse Management Team" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Fleet & Transport Team" email1="info@aabhanexus.com" />
                <Card name="xxx" title="IT Support & Infrastructure Team" phone="+91 ***" email1="itaabhanexis@gmail.com" />
                <Card name="xxx" title="Supporting Teams" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Admin & Facility Management" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Customer Support Desk" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Documentation & Reporting Office" phone="+91 ***" email1="info@aabhanexus.com" />
                <Card name="xxx" title="Technical Training Academy" phone="+91 ***" email1="info@aabhanexus.com" />
     
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
