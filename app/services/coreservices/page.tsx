"use client";

import { useState } from "react";
import Image from "next/image";

type QualityTier = "high" | "medium" | "standard";

const BRAND_COLORS: Record<QualityTier, string> = {
  high: "bg-green-500 text-white",
  medium: "bg-blue-500 text-white",
  standard: "bg-gray-600 text-white",
};

// Service card data
const servicesData = {
  MEPF: [
    {
      img: "/assets/ser8.jpg",
      title: "Electrical Systems",
      subtitle: "Reliable Power Distribution & Safety Management.",
      text: "Electrical systems form the backbone of any project. At AGNI, we design and implement safe, efficient, and reliable power distribution networks that ensure uninterrupted operations. Our solutions cover power supply, lighting, load management, earthing, and safety protections, reducing downtime and maximizing performance. With a strong focus on energy efficiency and compliance with international standards, we deliver systems that guarantee long-term safety, stability, and cost savings.",
    },
    {
      img: "/assets/ser5.jpg",
      title: "HVAC Systems",
      subtitle: "Energy-Efficient Comfort, Ventilation & Air Quality.",
      text: "Heating, Ventilation, and Air Conditioning (HVAC) systems are critical for maintaining a comfortable and healthy indoor environment. AGNI provides energy-efficient HVAC designs that ensure temperature control, fresh air circulation, and humidity balance across residential, commercial, and industrial projects.Our systems not only create a comfortable atmosphere but also contribute to productivity, health, and energy conservation, making spaces both sustainable and people-friendly.",
    },
    {
      img: "/assets/ser7.jpg",
      title: "Plumbing Systems",
      subtitle: "Robust water supply, sanitation & drainage.",
      text: "Plumbing infrastructure ensures the lifeline of water distribution in any facility. AGNI delivers robust water supply, sanitation, and drainage systems designed for reliability, hygiene, and efficiency. From clean water supply to waste management, our solutions ensure continuous availability, proper pressure management,and leak prevention. By incorporating modern piping technologies and sustainable water practices, we provide systems that are safe, eco-friendly, and long-lasting.",
    },
    {
      img: "/assets/ser6.jpg",
      title: "Fire Fighting Systems",
      subtitle: "Advance protection ensuring life & property safety.",
      text: "Safety is non-negotiable. AGNI’s firefighting solutions are engineered to detect, suppress, and control fire emergencies effectively. Our systems include hydrants, sprinklers, extinguishers, and suppression systems,designed in compliance with NFPA, NBC, and IS standards. With advanced technology and strategic placement, we ensure quick response, minimal damage, and maximum safety. These systems not only safeguard lives and assets but also ensure legal compliance and peace of mind for every client. ",
    },
    
   
  ],
  ELV: [
    {
      img: "/assets/ser11.jpg",
      title: "CCTV Surveillance",
      subtitle: "Continuos Monitoring & Security",
      text: "AGNI provides advanced CCTV solutions for round-the-clock surveillance. With HD & IP cameras, AI based analytics, and centralized monitoring, our systems ensure complete visibility, theft prevention, and incident recording. CCTV strengthens safety, accountability, and control, protecting people and assets. ",
    },
    {
      img: "/assets/ser1.jpg",
      title: "Fire Alarm Systems",
      subtitle: "Quick Fire Detection & Evacuation Support",
      text: "Early detection saves lives. Our intelligent fire alarm systems instantly detect smoke, heat, or flame and trigger alarms for immediate evacuation. Integrated with firefighting systems, they minimize risks, comply with safety codes, and provide real-time alerts, ensuring maximum protection. ",
    },
    {
      img: "/assets/ser4.jpg",
      title: "Public Address",
      subtitle: "Effective Communication Across Facilities.",
      text: "AGNI’s PA systems are designed for instant communication, emergency announcements, and background audio. Ideal for campuses, industries, and commercial spaces, PA systems ensure clarity, reach, and reliability, making communication seamless during routine and critical situations. ",
    },
    {
      img: "/assets/ser3.jpg",
      title: "Network Control System",
      subtitle: "Centralized Automation & Monitoring",
      text: "Our NCS platforms integrate multiple building systems under a single intelligent dashboard. From security to environment control, NCS ensures centralized monitoring, automation, and energy optimization, improving efficiency and reducing operational costs. ",
    },
    {
      img: "/assets/ser20.jpg",
      title: "Access Control Systems",
      subtitle: "Smart Entry,Attendance & Security Control.",
      text: "AGNI offers biometric, RFID, and smart card-based access control solutions to secure entry/exit points and sensitive zones. Integrated with attendance management and visitor control, our systems ensure high security, efficiency, and accountability.",
    },
    {
      img: "/assets/ser21.jpg",
      title: "Wi-Fi Solutions",
      subtitle: "Enterprise-Grade Wireless Access.",
      text: "Seamless internet access is critical today. AGNI provides secured Wi-Fi networks that deliver high bandwidth, scalability, and reliability across large facilities, ensuring mobility and uninterrupted productivity.",
    },
    {
      img: "/assets/ser19.jpg",
      title: "EPBX & VoIP Telephony",
      subtitle: "Smart communication Management.",
      text: "Our EPBX and VoIP systems provide cost-effective, scalable, and flexible voice communication solutions.With call routing, recording, IVR, and integration with business applications, ANI ensures smart, modern communication for enterprises.",
    },
    {
      img: "/assets/ser25.jpg",
      title: "DFMD",
      subtitle: "Door Frame Metal Detector.",
      text: "AGNI’s DFMD solutions ensure reliable and efficient screening at entry points across airports, metros,industries, offices, and public facilities. Designed to detect concealed metallic objects, DFMDs enhance security by preventing unauthorized items from entering restricted zones. With high sensitivity, adjustable detection zones, and quick response time, AGNI’s DFMDs provide seamless pedestrian flow without compromising safety, making them a trusted choice for corporate, government, and critical infrastructure sites.",
    },

     {
      img: "/assets/ser12.jpg",
      title: "Rodent Repellent System",
      subtitle: "Prevents Damage to Cables & Equipment",
      text: "Rodents pose serious threats to electrical wiring, data cables, and equipment. AGNI offers ultrasonic rodent repellent systems that safeguard infrastructure, prevent costly damage, and maintain uninterrupted operations in sensitive areas like data centers and factories. ",
    },

     {
      img: "/assets/ser18.jpg",
      title: "Music System",
      subtitle: "Enhancing Ambience & Environment",
      text: "Our background music solutions are designed for hospitality, retail, and corporate spaces, creating an engaging atmosphere. They improve customer experience, employee morale, and ambience while integrating seamlessly with PA systems.",
    },

    {
      img: "/assets/ser2.jpg",
      title: "Boom Barrier",
      subtitle: "Controlled & Secure Vehicle Entry",
      text: "For high-traffic and restricted zones, AGNI installs boom barriers with RFID & ANPR integration for seamless yet secure vehicle management. They enhance security, access control, and traffic regulation in corporate, residential, and industrial environments. ",
    },

    {
      img: "/assets/ser15.jpg",
      title: "Audio & Video Solution ",
      subtitle: "Professional-Grade Conferencing & Entertainment.",
      text: "AGNI delivers world-class audio-visual systems for conference halls, training rooms, theaters, and auditoriums. Our solutions provide high-quality sound, crystal-clear visuals, and seamless integration, ensuring enhanced communication and impactful presentations.",
    },

    {
      img: "/assets/ser22.jpg",
      title: "Nurse Calling",
      subtitle: "Smarter,Faster, Patient Care",
      text: "AGNI’s Nurse Calling Systems are designed to provide patients with instant access to medical staff,ensuring timely care and improved hospital efficiency. Ideal for hospitals, nursing homes, and healthcare facilities, NCS ensures safety, responsiveness, and comfort by enabling seamless communication between patients and caregivers during both routine needs and critical emergencies.",
    },

    {
      img: "/assets/ser26.jpg",
      title: "Baggage Scanner",
      subtitle: "Advanced Language Security Screening.",
      text: "AGNI’s Baggage Scanner systems deliver high-precision X-ray scanning for luggage, parcels, and cargo at entry points. Engineered for airports, malls, metros, hotels, and high-security facilities, these scanners identify explosives, weapons, contraband, and hidden threats with accuracy. Featuring dual-energy imaging, real-time monitoring, and user-friendly interfaces, AGNI’s Baggage Scanners combine speed,reliability, and advanced detection to ensure safe and secure premises while maintaining smooth visitor movement.",
    },

    {
      img: "/assets/ser23.jpg",
      title: "Flap Barrier",
      subtitle: "Smart & Secure Acess Control.",
      text: "AGNI’s Flap Barrier systems provide streamlined and secure entry management for commercial complexes,offices, metros, and high-security zones. Designed for controlled pedestrian movement, these barriers ensure fast, touchless, and authorized access while preventing tailgating or unauthorized entry. With their sleek design and durable build, ANI’s Flap Barriers combine aesthetics with advanced security, making them ideal for corporate, institutional, and transit environments.",
    },

    {
      img: "/assets/ser24.jpg",
      title: "Turnstile",
      subtitle: "Reliable Pedestrian Flow Management",
      text: "AGNI’s Turnstile solutions are engineered for efficient and controlled pedestrian access in high-traffic areas. From stadiums, factories, and transport hubs to corporate campuses, turnstiles provide robust entry security and accurate people counting. They are available in tripod, full-height, and waist-height designs,ensuring adaptability for different levels of security. Built with rugged mechanics and modern access control integration, AGNI’s Turnstiles deliver long-lasting reliability, seamless integration, and uncompromised security.",
    },

    {
      img: "/assets/ser16.jpg",
      title: "Fire Separation Systems",
      subtitle: "Safety Partitions for Fire Containment",
      text: "In emergencies, fire spread control is critical. AGNI provides fire-rated doors, partitions, and enclosures to contain fire within a designated zone. This ensures structural integrity, occupant safety, and compliance with international fire safety standards. ",
    },

     {
      img: "/assets/ser17.jpg",
      title: "Networking Solution",
      subtitle: "High Speed Wired & Wireless Connectivity",
      text: "We design and implement structured cabling and enterprise networking systems that ensure high-speed,secure, and reliable connectivity. From LAN/WAN infrastructure to backbone cabling, our solutions support data, voice, and video transmission with minimal downtime.",
    },

     {
      img: "/assets/ser17.jpg",
      title: "Water Leak Detection(WLD)",
      subtitle: "Early Detection to Prevent Major Losses",
      text: "Water leakage can cause extensive damage to IT systems, machinery, and infrastructure. AGNI’s WLD systems provide early detection and precise alerts, helping prevent equipment failure, downtime, and costly repairs.",
    },
  ],
};

// Brand data
const brandsData = {
  MEPF: [
    {
      title: "Electrical Systems",
      subtitle: "Reliable Power Distribution & Management",
      brands: {
        high: ["Schneider Electric", "Siemens", "ABB", "Legrand", "L&T"],
        medium: ["Havells", "Panasonic", "Crompton", "IndoAsian", "Polycab Elite"],
        standard: ["Finolex", "KEI", "Syska", "RR Kabel", "Polycab Standard"],
      },
    },
    {
      title: "HVAC Systems",
      subtitle: "Comfort, Air Quality & Energy Efficiency",
      brands: {
        high: ["Daikin", "Mitsubishi Electric", "Carrier", "Trane", "Johnson Controls"],
        medium: ["Voltas", "Blue Star", "Panasonic", "Hitachi", "LG"],
        standard: ["Haier", "O General", "Lloyd", "Godrej", "Whirlpool"],
      },
    },
    {
      title: "Plumbing Systems",
      subtitle: "Seamless Water Supply & Sanitation",
      brands: {
        high: ["Astral", "Viega", "Geberit", "Kohler", "Jaquar"],
        medium: ["Supreme", "Finolex", "Prince", "Parryware", "Hindware"],
        standard: ["Ashirvad", "Ori-Plast", "Plasto", "Skipper", "Local ISI"],
      },
    },
    {
      title: "Firefighting Systems",
      subtitle: "Advanced Protection & Safety",
      brands: {
        high: ["Tyco (Johnson Controls)", "Honeywell", "Siemens", "Viking", "Minimax"],
        medium: ["Ravel", "Agni", "HD Fire", "NewAge", "Safepro"],
        standard: ["Swastik", "Usha", "Safex", "Kanex", "Local ISI"],
      },
    },
  ],
 ELV: [
  {
    title: "CCTV Surveillance",
    subtitle: "High-resolution monitoring for complete coverage",
    brands: {
      high: ["Bosch", "Axis", "Honeywell", "Panasonic", "Pelco"],
      medium: ["CP Plus", "Hikvision (Pro)", "Dahua (Pro)", "Uniview", "Samsung Wisenet"],
      standard: ["Hikvision (Entry)", "Dahua (Entry)", "Zicom", "D-Link", "Zebronics"],
    },
  },
  {
    title: "Fire Alarm Systems",
    subtitle: "Early detection and rapid response",
    brands: {
      high: ["Notifier (Honeywell)", "Siemens", "Edwards", "Bosch", "Apollo"],
      medium: ["Ravel", "Agni", "GST", "Cooper", "Morley IAS"],
      standard: ["Vintex", "Safe Zone", "Kanex", "Local OEM", "Hifire"],
    },
  },
  {
    title: "Access Control Systems",
    subtitle: "Secure and authorized entry management",
    brands: {
      high: ["HID", "Honeywell", "Bosch", "Siemens", "Suprema"],
      medium: ["Matrix", "ZKTeco Pro", "Hikvision", "Dahua", "CP Plus"],
      standard: ["eSSL", "ZKTeco Standard", "Local OEM", "Vintron", "Generic Indian"],
    },
  },
  {
    title: "Networking Solutions",
    subtitle: "High-speed, reliable network infrastructure",
    brands: {
      high: ["Cisco", "Juniper", "Aruba", "HP Enterprise", "Dell"],
      medium: ["D-Link", "TP-Link Pro", "Netgear", "Ruckus", "MikroTik"],
      standard: ["TP-Link", "Digisol", "Tenda", "Generic Indian", "Local OEM"],
    },
  },
  {
    title: "Wi-Fi Solutions",
    subtitle: "Seamless wireless connectivity",
    brands: {
      high: ["Cisco Meraki", "Aruba (HP)", "Ruckus", "Ubiquiti (UniFi Pro)", "Extreme Networks"],
      medium: ["TP-Link Omada", "Netgear Pro", "D-Link Business", "Mikrotik", "Cambium"],
      standard: ["TP-Link Standard", "Tenda", "Digisol", "Local OEM", "iBall"],
    },
  },
  {
    title: "EPBX & VoIP",
    subtitle: "Smart communication systems",
    brands: {
      high: ["Avaya", "Cisco", "NEC", "Panasonic", "Siemens"],
      medium: ["Matrix", "Grandstream", "Yealink", "Mitel", "Polycom"],
      standard: ["Beetel", "Panasonic Basic", "Generic Indian", "Zicom", "Local OEM"],
    },
  },
  {
    title: "Public Address Systems",
    subtitle: "Clear and reliable communication across facilities",
    brands: {
      high: ["Bosch", "TOA", "Honeywell", "Biamp", "JBL"],
      medium: ["AHUJA", "DSPPA", "ITC Audio", "Behringer", "AMC"],
      standard: ["AHUJA Basic", "PA India", "Sonodyne", "Local OEM", "Generic Indian"],
    },
  },
  {
    title: "Intercom Systems",
    subtitle: "Efficient internal communication for buildings and campuses",
    brands: {
      high: ["Comelit", "ABB", "Legrand", "Honeywell", "Aiphone"],
      medium: ["Panasonic", "FERMAX", "Zicom", "Godrej", "Eurovigil"],
      standard: ["eSSL", "Local OEM", "Secureye", "CP Plus", "Generic Indian"],
    },
  },
  {
    title: "Boom Barrier & Gate Automation",
    subtitle: "Smart vehicular access and automated gate control",
    brands: {
      high: ["FAAC", "CAME", "Nice", "Beninca", "Magnetic AutoControl"],
      medium: ["NICE Road", "Ozone", "BFT", "Godrej", "Electromech"],
      standard: ["Smart Gate", "Generic Indian", "OEM Local", "Securico", "AutoPark"],
    },
  },
  {
    title: "Parking Management Systems",
    subtitle: "Automated parking control and monitoring",
    brands: {
      high: ["Designa", "Scheidt & Bachmann", "SKIDATA", "Amano", "Hub Parking"],
      medium: ["Smart Parking", "Ozone", "Park+ Systems", "Godrej", "Secureye"],
      standard: ["Local OEM", "Generic Indian", "Basic Parking", "AutoPark", "Securico"],
    },
  },
  {
    title: "Video Door Phone Systems",
    subtitle: "Secure entry communication and visitor verification",
    brands: {
      high: ["Comelit", "ABB", "Legrand", "Panasonic", "Honeywell"],
      medium: ["Zicom", "Godrej", "Hikvision", "CP Plus", "Dahua"],
      standard: ["eSSL", "Local OEM", "Generic Indian", "Secureye", "Eurovigil"],
    },
  },
  {
    title: "SMATV / IPTV Systems",
    subtitle: "Centralized television and media distribution",
    brands: {
      high: ["Telesystem", "IKUSI", "Polytron", "Triax", "Televes"],
      medium: ["Matrix", "Satvision", "Ozone", "Godrej", "Tata Sky Commercial"],
      standard: ["Local OEM", "Generic Indian", "Basic DVB", "CP Plus", "Zicom"],
    },
  },
  {
    title: "Time Attendance & Visitor Management",
    subtitle: "Accurate employee tracking and visitor control",
    brands: {
      high: ["Honeywell", "Bosch", "Matrix", "HID", "Suprema"],
      medium: ["ZKTeco", "eSSL", "CP Plus", "Dahua", "Godrej"],
      standard: ["Local OEM", "Generic Indian", "Secureye", "BioMax", "Vintron"],
    },
  },
  {
    title: "Building Management Systems (BMS)",
    subtitle: "Integrated control for building automation and safety",
    brands: {
      high: ["Siemens", "Honeywell", "Schneider Electric", "Johnson Controls", "Delta"],
      medium: ["Azbil", "Tridium", "Distech", "Ozone", "Carrier"],
      standard: ["Local OEM", "Generic Indian", "Smart Control", "OEM Panels", "DigiTech"],
    },
  },
],
};


export default function CoreServicesFullPage() {
  const [activeTab, setActiveTab] = useState<"MEPF" | "ELV">("MEPF");
  const [activeBrandTab, setActiveBrandTab] = useState<"MEPF" | "ELV">("MEPF");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const QualityPill = ({ tier }: { tier: QualityTier }) => {
    const label =
      tier === "high"
        ? "High Quality"
        : tier === "medium"
        ? "Medium Quality"
        : "Standard Quality";
    return (
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${BRAND_COLORS[tier]}`}>
        {label}
      </span>
    );
  };

  const BrandChip = ({ name }: { name: string }) => (
    <span className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm mr-2 mb-2 inline-block cursor-default select-none hover:bg-gray-200 transition">
      {name}
    </span>
  );

  const BrandPanel = ({ brands }: { brands: typeof brandsData.MEPF[0]["brands"] }) => (
    <>
      {["high", "medium", "standard"].map((tier) => {
        const tierBrands = brands[tier as QualityTier] || [];
        if (tierBrands.length === 0) return null;
        return (
          <div className="mt-2" key={tier}>
            <QualityPill tier={tier as QualityTier} />
            <div className="flex flex-wrap mt-1">
              {tierBrands.map((b) => (
                <BrandChip key={b} name={b} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="text-center py-14 bg-blue-950 text-white">
        <h1 className="text-4xl font-bold mb-3">Our Systems & Solutions</h1>
        <p className="max-w-2xl mx-auto text-gray-200 px-4">
          Comprehensive MEPF and ELV systems designed for reliability, efficiency, and safety.
        </p>

        {/* SOLUTION TABS */}
        <div className="mt-8 flex justify-center gap-4">
          {["MEPF", "ELV"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "MEPF" | "ELV")}
              className={`px-6 py-2.5 rounded-md font-medium transition ${
                activeTab === tab
                  ? "bg-yellow-400 text-blue-900 shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {tab} Solutions
            </button>
          ))}
        </div>
      </header>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {servicesData[activeTab].map((service) => (
          <div key={service.title} className="relative w-full h-[450px] md:h-[500px] overflow-hidden">
            <Image src={service.img} alt={service.title} fill className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6">
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="text-sm text-gray-200 mt-1">{service.subtitle}</p>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">{service.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BRAND SECTION */}
      <section className="max-w-3xl mx-auto py-14 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Brands We Work With</h2>

        {/* BRAND TABS */}
        <div className="flex border border-gray-300 rounded-full overflow-hidden mb-10 max-w-sm mx-auto">
          {["MEPF", "ELV"].map((tab) => {
            const isActive = activeBrandTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveBrandTab(tab as "MEPF" | "ELV");
                  setExpandedSections({});
                }}
                className={`flex-1 py-2 text-center text-sm font-semibold focus:outline-none transition-colors ${
                  isActive
                    ? "bg-blue-700 text-white shadow-md"
                    : "bg-white text-blue-700 hover:bg-blue-100"
                }`}
                type="button"
                aria-selected={isActive}
                role="tab"
              >
                {tab} Brands
              </button>
            );
          })}
        </div>

        {/* BRAND ACCORDIONS */}
        <div className="space-y-4">
          {brandsData[activeBrandTab].map(({ title, subtitle, brands }) => {
            const isOpen = expandedSections[title] || false;
            return (
              <section key={title}>
                <button
                  type="button"
                  className="w-full flex justify-between items-center text-left font-semibold text-gray-900 py-3 hover:text-blue-700 transition"
                  onClick={() => toggleSection(title)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${title}`}
                >
                  <div>
                    <h3>{title}</h3>
                    {subtitle && <p className="text-gray-600 text-sm mt-1">{subtitle}</p>}
                  </div>
                  <span className="text-xl select-none">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && brands && (
                  <div id={`panel-${title}`} className="mt-2">
                    <BrandPanel brands={brands} />
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
}


