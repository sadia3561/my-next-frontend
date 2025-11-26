"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {

  const [role, setRole] = useState<string | null>(null);
  
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);


    // ✅ Load role from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("role");
      console.log("Loaded role:", storedRole);
      setRole(storedRole);
    }
  }, []);

 


  return (
   <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 flex justify-between items-center z-[999] shadow-lg">

      {/* Left Section with Logo + Title */}
      <div className="flex items-center space-x-3">
        <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex items-center justify-center shadow-md border-2 border-yellow-400">
          <Image
            src="/logoo.png"
            alt="Aabha Nexus Innovations Logo"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
      
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 flex-nowrap whitespace-nowrap">
        <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
        <li><Link href="/aboutus" className="hover:text-yellow-300 whitespace-nowrap">About Us</Link></li>
        <li><Link href="/vision" className="hover:text-yellow-300">Vision</Link></li>

        {/* Services Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setServicesDropdownOpen(true)}
          onMouseLeave={() => setServicesDropdownOpen(false)}
        >
          <button
            type="button"
            className="hover:text-yellow-300 flex items-center focus:outline-none"
            aria-haspopup="true"
            aria-expanded={servicesDropdownOpen}
          >
            Services
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {servicesDropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 w-56 bg-gradient-to-b from-blue-800 to-blue-950 border border-yellow-400 text-white rounded-md shadow-[0_4px_15px_rgba(0,0,0,0.4)] z-[9999] overflow-hidden">
              {[
                ["CoreServices", "/services/coreservices"],
                ["Tender", "/services/tender"],
                ["Project Design", "/services/project-design"],
                ["Project Consultant", "/services/project-consultant"],
                ["Project Management", "/services/project-management"],
                ["Project Execution", "/services/project-execution"],
                ["Project Documentation", "/services/project-documentation"],
                ["Billing", "/services/billing"],
                ["AMC Contract", "/services/amc-contract"],
              ].map(([name, link]) => (
                <li key={name}>
                  <Link
                    href={link}
                    className="block px-4 py-2 text-sm hover:bg-blue-700 hover:text-yellow-300 transition-all border-b border-blue-700 last:border-none"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Projects Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setProjectsDropdownOpen(true)}
          onMouseLeave={() => setProjectsDropdownOpen(false)}
        >
          <button
            type="button"
            className="hover:text-yellow-300 flex items-center focus:outline-none"
            aria-haspopup="true"
            aria-expanded={projectsDropdownOpen}
          >
            Projects
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {projectsDropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 w-56 bg-gradient-to-b from-blue-800 to-blue-950 border border-yellow-400 text-white rounded-md shadow-[0_4px_15px_rgba(0,0,0,0.4)] z-[9999] overflow-hidden">
              <li><Link href="/projects/delivered-projects" className="block px-4 py-2 text-sm hover:bg-blue-700 hover:text-yellow-300 border-b border-blue-700">Delivered Projects</Link></li>
              <li><Link href="/projects/ongoing-projects" className="block px-4 py-2 text-sm hover:bg-blue-700 hover:text-yellow-300 border-b border-blue-700">Ongoing Projects</Link></li>
              <li><Link href="/projects/upcoming-projects" className="block px-4 py-2 text-sm hover:bg-blue-700 hover:text-yellow-300">Upcoming Projects</Link></li>
            </ul>
          )}
        </li>

        <li><Link href="/clients" className="hover:text-yellow-300">Clients</Link></li>
        <li><Link href="/vendors" className="hover:text-yellow-300">Vendors</Link></li>
        <li><Link href="/suppliers" className="hover:text-yellow-300">Suppliers</Link></li>
        <li><Link href="/consultants" className="hover:text-yellow-300 whitespace-nowrap">Consultants & Engineers</Link></li>
        <li><Link href="/career" className="hover:text-yellow-300">Career</Link></li>
        <li><Link href="/suggestion-box" className="hover:text-yellow-300 whitespace-nowrap">Suggestion Box</Link></li>
        <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
        <li><Link href="/login" className="hover:text-yellow-300">Login</Link></li>
        
        {/* ✅ Admin Approval Button */}
         {role === "admin" && (
          <li>
            <Link href="/admin/approval" className="text-yellow-300 font-semibold">
              Approval
            </Link>
          </li>
        )}

        {/* ------------------------------- */}
        {/* ✅ User Profile Link */}
        {/* Only show for logged-in users (role USER) */}
        {/* ✅ Profile link appears only if any role is set */}
        {role && (
          <li>
            <Link href="/profile" className="text-yellow-300 font-semibold">
              Profile
            </Link>
          </li>
        )}

      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-blue-900 text-white flex flex-col space-y-1 p-4 z-40">
          <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link href="/aboutus" className="hover:text-yellow-300">About Us</Link></li>
          <li><Link href="/vision" className="hover:text-yellow-300">Vision</Link></li>
          <li><Link href="/projects" className="hover:text-yellow-300">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
          <li><Link href="/login" className="hover:text-yellow-300">Login</Link></li>
        </ul>
      )}
    </nav>
  );
}
