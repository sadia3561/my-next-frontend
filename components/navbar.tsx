"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center relative">
       {/* Left Section with Logo + Title */}
<div className="flex items-center space-x-3">
  <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex items-center justify-center shadow-md">
    <Image
      src="/logoo.png"
      alt="Aabha Nexus Innovations Logo"
      width={64}
      height={64}
      className="object-contain"
    />
  </div>
  <div className="text-xl font-bold tracking-wide">
    ANI <span className="text-yellow-300">MEPF & ELV</span>
  </div>
</div>


      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 flex-nowrap overflow-x-auto whitespace-nowrap">
        <li>
          <Link href="/" className="hover:text-yellow-300">Home</Link>
        </li>
        <li>
          <Link href="/aboutus" className="hover:text-yellow-300 whitespace-nowrap">About Us</Link>
        </li>
        <li>
          <Link href="/vision" className="hover:text-yellow-300">Vision</Link>
        </li>
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
    <ul className="absolute top-full left-0 mt-2 w-52 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg z-50 overflow-hidden">
      <li><Link href="/services/tender" className="block px-4 py-2 hover:bg-blue-700">Tender</Link></li>
      <li><Link href="/services/project-design" className="block px-4 py-2 hover:bg-purple-700">Project Design</Link></li>
      <li><Link href="/services/project-consultant" className="block px-4 py-2 hover:bg-blue-700">Project Consultant</Link></li>
      <li><Link href="/services/project-management" className="block px-4 py-2 hover:bg-purple-700">Project Management</Link></li>
      <li><Link href="/services/project-execution" className="block px-4 py-2 hover:bg-blue-700">Project Execution</Link></li>
      <li><Link href="/services/project-documentation" className="block px-4 py-2 hover:bg-purple-700">Project Documentation</Link></li>
      <li><Link href="/services/billing" className="block px-4 py-2 hover:bg-blue-700">Billing</Link></li>
      <li><Link href="/services/amc-contract" className="block px-4 py-2 hover:bg-purple-700">AMC Contract</Link></li>
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
    <ul className="absolute top-full left-0 mt-2 w-52 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg z-50 overflow-hidden">
      <li><Link href="/projects/delivered-projects" className="block px-4 py-2 hover:bg-green-700">Delivered Projects</Link></li>
      <li><Link href="/projects/ongoing-projects" className="block px-4 py-2 hover:bg-teal-700">Ongoing Projects</Link></li>
      <li><Link href="/projects/upcoming-projects" className="block px-4 py-2 hover:bg-green-700">Upcoming Projects</Link></li>
    </ul>
  )}
</li>


        
        <li><Link href="/clients" className="hover:text-yellow-300">Clients</Link></li>
        <li><Link href="/vendors" className="hover:text-yellow-300">Vendors</Link></li>
        <li><Link href="/suppliers" className="hover:text-yellow-300">Suppliers</Link></li>
        <li><Link href="/consultants-engineers" className="hover:text-yellow-300 whitespace-nowrap">Consultants & Engineers</Link></li>
        <li><Link href="/career" className="hover:text-yellow-300">Career</Link></li>
        <li><Link href="/suggestion-box" className="hover:text-yellow-300 whitespace-nowrap">Suggestion Box</Link></li>
        <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
        <li><Link href="/login" className="hover:text-yellow-300">Login</Link></li>
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
          xmlns="http://www.w3.org/2000/svg"
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
