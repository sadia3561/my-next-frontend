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
      subtitle: "Reliable power distribution and control.",
      text: "Safe, efficient power distribution networks ensuring uninterrupted operations with energy efficiency and compliance with international standards.",
    },
    {
      img: "/assets/ser5.jpg",
      title: "HVAC Systems",
      subtitle: "Energy-Efficient Comfort, Ventilation & Air Quality.",
      text: "Energy-efficient designs ensuring temperature control, fresh air circulation, and humidity balance for comfortable and healthy environment.",
    },
    {
      img: "/assets/ser7.jpg",
      title: "Plumbing Systems",
      subtitle: "Robust water supply, sanitation & drainage.",
      text: "Reliable water distribution, sanitation, and drainage systems designed for continuous availability, hygiene, and efficiency.",
    },
    {
      img: "/assets/ser6.jpg",
      title: "Fire Fighting Systems",
      subtitle: "Advance protection ensuring life & property safety.",
      text: "Engineered to detect, suppress, and control fire emergencies with hydrants, sprinklers, and suppression systems compliant with NFPA, NBC, and IS standards.",
    },
    {
      img: "/assets/ser16.jpg",
      title: "Fire Separation Systems",
      subtitle: "Safety-first design with advanced detection & control.",
      text: "Complete fire protection — hydrants, sprinklers, and detection systems ensuring life and asset safety.",
    },
    {
      img: "/assets/ser17.jpg",
      title: "Water Leakage Detection",
      subtitle: "Safety-first design with advanced detection & control.",
      text: "Complete fire protection — hydrants, sprinklers, and detection systems ensuring life and asset safety.",
    },
  ],
  ELV: [
    {
      img: "/assets/ser11.jpg",
      title: "CCTV Surveillance",
      subtitle: "High-resolution monitoring for complete coverage.",
      text: "Advanced surveillance with smart recording, analytics, and monitoring features for security and control.",
    },
    {
      img: "/assets/ser1.jpg",
      title: "Fire Alarm Systems",
      subtitle: "Early detection and rapid response.",
      text: "Automatic detection and alert systems designed to identify and respond to fire threats immediately.",
    },
    {
      img: "/assets/ser4.jpg",
      title: "Public Address System",
      subtitle: "Clear communication for emergencies.",
      text: "Integrated PA systems ensuring effective announcements across facilities.",
    },
    {
      img: "/assets/ser3.jpg",
      title: "Network Control System",
      subtitle: "Monitoring & control for infrastructure.",
      text: "Centralized systems for managing all networked devices efficiently.",
    },
    {
      img: "/assets/ser20.jpg",
      title: "Access Control Systems",
      subtitle: "Secure and authorized entry management.",
      text: "Reliable access control for restricted areas using smart authentication.",
    },
    {
      img: "/assets/ser21.jpg",
      title: "Wi-Fi Networking",
      subtitle: "Seamless wireless connectivity.",
      text: "Stable and fast Wi-Fi networks ensuring connectivity across the facility.",
    },
    {
      img: "/assets/ser19.jpg",
      title: "EPBX & VoIP",
      subtitle: "Smart communication systems.",
      text: "Efficient telephony solutions for internal and external communication.",
    },
    {
      img: "/assets/ser25.jpg",
      title: "Security Solutions",
      subtitle: "Comprehensive protection measures.",
      text: "Integrated security systems for monitoring and incident management.",
    },

     {
      img: "/assets/ser12.jpg",
      title: "rodent repellent",
      subtitle: "Comprehensive protection measures.",
      text: "Integrated security systems for monitoring and incident management.",
    },

     {
      img: "/assets/ser18.jpg",
      title: "music system",
      subtitle: "Comprehensive protection measures.",
      text: "Integrated security systems for monitoring and incident management.",
    },

    {
      img: "/assets/ser2.jpg",
      title: "boom barrier",
      subtitle: "Comprehensive protection measures.",
      text: "Integrated security systems for monitoring and incident management.",
    },

    {
      img: "/assets/ser15.jpg",
      title: "audio video",
      subtitle: "Comprehensive protection measures.",
      text: "Integrated security systems for monitoring and incident management.",
    },

    {
      img: "/assets/ser22.jpg",
      title: "nurse calling",
      subtitle: "Comprehensive protection measures.",
      text: "Integrated security systems for monitoring and incident management.",
    },

    {
      img: "/assets/ser26.jpg",
      title: "Security Solutions1",
      subtitle: "Comprehensive protection measures.",
      text: "Integrated security systems for monitoring and incident management.",
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
