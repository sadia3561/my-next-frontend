"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { LogIn, MessageSquare, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [showRoles, setShowRoles] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  const loginRef = useRef<HTMLDivElement>(null);

  const registrationRoles = [
    "Client",
    "Vendor",
    "Supplier",
    "Consultant",
    "Engineer",
    "Designer",
    "Transporter",
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      localStorage.setItem("token", data.token);
      setMessage("✅ Login successful!");
      setTimeout(() => router.push("/profile"), 1000);
    } catch (err: any) {
      setMessage("❌ " + err.message);
    }
  };

  const nextImage = () => setCurrent((prev) => (prev + 1) % 5);
  const prevImage = () => setCurrent((prev) => (prev - 1 + 5) % 5);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100 to-blue-100 text-gray-900 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-4 bg-white shadow border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img src="/logoo.png" alt="Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-semibold text-sky-900 tracking-wide">
            Aabha nexus innovation
          </h1>
        </div>

        {/* Login */}
        <div className="relative" ref={loginRef}>
          <button
            onClick={() => setLoginOpen(!loginOpen)}
            className="flex items-center gap-2 bg-sky-800 text-white px-4 py-2 rounded-md hover:bg-sky-900 transition-all"
          >
            <LogIn className="w-5 h-5" /> Login
          </button>

          {loginOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-sky-200 rounded-lg shadow-lg p-4 z-50">
              <form onSubmit={handleLogin} className="space-y-2">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-sky-300"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-sky-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-sky-700 text-white py-1.5 rounded hover:bg-sky-800 text-sm"
                >
                  Login
                </button>
              </form>
              {message && (
                <p className="text-xs text-center text-red-600 mt-1">
                  {message}
                </p>
              )}
            </div>
          )}
        </div>
      </header>

    <section
  className="relative bg-cover bg-center bg-no-repeat py-14 px-2 sm:px-4 md:px-6 lg:px-8"
  style={{ backgroundImage: "url('/assets/ser14.jpg')" }}
>
  {/* Subtle overlay for readability */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Boxes Container */}
  <div className="relative max-w-[95vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 z-10">
    
    {/* 🔹 Enquiry Box */}
    <div className="backdrop-blur-sm bg-white/3 border border-white/15 rounded-2xl shadow-xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 text-white">
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex items-center gap-2 text-2xl font-semibold text-sky-200">
          
          <p></p>
        </div>

        <p className="text-lg font-semibold text-white">
          We are Certified Engineers
        </p>
        <p className="text-sm tracking-wide text-sky-100">
          MEPF & ELV SOLUTIONS — SMART, SCALABLE & SUSTAINABLE
        </p>
        <p className="text-sky-50 leading-relaxed text-[15px]">
          <b>Aabha Nexus Innovations</b> is your trusted partner in comprehensive
          MEPF and ELV solutions, offering cutting-edge technology and unmatched
          project execution across India. We combine innovation with reliability
          to deliver systems that stand the test of time.
        </p>
      </div>

      <button
        onClick={() => setShowRoles((prev) => !prev)}
        className="w-full text-left bg-sky-700/30 border border-sky-400/40 rounded-md px-4 py-2 font-medium text-white hover:bg-sky-700/50 flex justify-between transition"
      >
        Enquiry <span>{showRoles ? "▲" : "▼"}</span>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          showRoles ? "max-h-60 mt-3" : "max-h-0"
        }`}
      >
        <ul className="pl-4 border-l-2 border-sky-400/60 space-y-1">
          {registrationRoles.map((role) => (
            <li key={role}>
              <Link
                href={`/registration/${role.toLowerCase()}`}
                className="block py-1 text-sky-100 hover:text-white transition"
              >
                {role}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* 🔸 Welcome + Appointment Box */}
    <div className="backdrop-blur-sm bg-white/3 border border-white/15 rounded-2xl shadow-xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 text-white flex flex-col justify-between">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          WELCOME TO AABHA NEXUS
        </h2>
        <h3 className="text-lg font-semibold text-sky-100 mb-3">
          Your Engineering Solutions Partner
        </h3>
        <p className="text-sky-50 text-[15px] leading-relaxed">
          <b>Aabha Nexus Innovations (ANI)</b> is a leading MEPF & ELV consulting
          and project execution firm. We provide smart, scalable, and sustainable
          engineering solutions tailored to the needs of commercial and
          institutional clients.
          <br />
          <br />
          With over a decade of experience, we've successfully delivered
          <b> 150+ projects across India</b>, maintaining the highest standards of
          quality and safety. Our team of certified professionals brings technical
          expertise and innovative thinking to every challenge.
        </p>
      </div>

      <div>
        <button
          onClick={() => setAppointmentOpen((prev) => !prev)}
          className="w-full bg-sky-700/60 text-white py-2.5 rounded-md hover:bg-sky-800/80 flex items-center justify-center gap-2 font-medium transition"
        >
          <Calendar className="w-5 h-5" />
          Book Appointment
        </button>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            appointmentOpen ? "max-h-[600px] mt-5" : "max-h-0"
          }`}
        >
          <form className="space-y-3 border-t border-white/30 pt-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/10 text-white placeholder-white/70 border border-white/40 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/10 text-white placeholder-white/70 border border-white/40 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-white/10 text-white placeholder-white/70 border border-white/40 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none"
              required
            />

           {/* Date */}
      <input
        type="date"
        placeholder="Preferred Date"
        className="w-full bg-white/10 text-white placeholder-white/70 border border-white/40 rounded-md px-3 py-2 text-sm [color-scheme:dark] focus:ring-2 focus:ring-sky-300 focus:outline-none"
        required
      />

      {/* Time */}
      <div className="flex gap-2">
        <select
          className="flex-1 appearance-none bg-white/10 text-white border border-white/40 rounded-md px-2 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none [&>*]:text-black"
          required
        >
          <option value="">Hour</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <select
          className="flex-1 appearance-none bg-white/10 text-white border border-white/40 rounded-md px-2 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none [&>*]:text-black"
          required
        >
          <option value="">Minute</option>
          {["00", "15", "30", "45"].map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <select
          className="w-20 appearance-none bg-white/10 text-white border border-white/40 rounded-md px-2 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none [&>*]:text-black"
          required
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
      
            <textarea
              placeholder="Project Requirements / Message"
              className="w-full bg-white/10 text-white placeholder-white/70 border border-white/40 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none"
              rows={3}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-sky-700/70 text-white py-2 rounded-md hover:bg-sky-800 transition font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>






      
    {/* 🌆 Featured Projects Section */}
<section className="relative w-full py-20 bg-gradient-to-b from-gray-900 via-sky-950 to-gray-900 text-white overflow-hidden">
  {/* Background Glow on Sides */}
  <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-sky-800/40 via-transparent to-transparent blur-3xl"></div>
  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sky-800/40 via-transparent to-transparent blur-3xl"></div>

  {/* Title */}
  <h2 className="text-5xl font-extrabold text-center text-sky-100 mb-12 tracking-wide drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]">
    Featured Projects
  </h2>

  {/* Outer Frame */}
  <div className="relative mx-auto w-[92%] max-w-7xl h-[600px] rounded-3xl border-[3px] border-sky-700 bg-gradient-to-br from-sky-900/90 via-gray-900 to-sky-950 shadow-[0_0_80px_-10px_rgba(56,189,248,0.5)] overflow-hidden backdrop-blur-2xl">
    {/* Shimmer Border Overlay */}
    <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-400 bg-clip-border opacity-40 pointer-events-none"></div>

    {/* Carousel Content */}
    <div className="relative w-full h-full flex items-center justify-center">
      {[
        "/assets/featured1.jpg",
        "/assets/featured2.jpg",
        "/assets/featured3.jpg",
        "/assets/featured4.jpg",
        "/assets/featured5.jpg",
        "/assets/ser8.jpg",
        "/assets/ser9.jpg",
        "/assets/ser10.jpg",
      ].map((src, i) => {
        const indexDiff = (i - current + 6) % 6;
        let className =
          "absolute rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.4)] border border-sky-400/30 transition-all duration-700 ease-in-out object-cover object-center";

        if (indexDiff === 0)
          className +=
            " w-[70%] h-[500px] z-30 scale-100 opacity-100 translate-x-0";
        else if (indexDiff === 1)
          className +=
            " w-[55%] h-[420px] z-20 scale-95 opacity-60 translate-x-[60%] brightness-75 blur-[1px]";
        else if (indexDiff === 5)
          className +=
            " w-[55%] h-[420px] z-20 scale-95 opacity-60 -translate-x-[60%] brightness-75 blur-[1px]";
        else className += " opacity-0 scale-75";

        return (
          <img key={i} src={src} alt={`Project ${i + 1}`} className={className} />
        );
      })}

      {/* Text Overlay */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-sky-950/70 text-white px-10 py-4 rounded-2xl backdrop-blur-lg border border-sky-700 shadow-[0_0_25px_rgba(56,189,248,0.5)]">
        <h3 className="text-lg font-semibold tracking-wide text-sky-100">
          
        </h3>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + 6) % 6)}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-sky-800/70 hover:bg-sky-700/90 text-white p-4 rounded-full z-40 transition-all shadow-lg hover:scale-110 border border-sky-500/40"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % 6)}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-sky-800/70 hover:bg-sky-700/90 text-white p-4 rounded-full z-40 transition-all shadow-lg hover:scale-110 border border-sky-500/40"
      >
        ›
      </button>
    </div>
  </div>

  {/* Dots Indicator */}
  <div className="flex justify-center gap-3 mt-8">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <button
        key={i}
        onClick={() => setCurrent(i)}
        className={`w-3.5 h-3.5 rounded-full transition-all ${
          current === i
            ? "bg-sky-500 scale-125 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
            : "bg-gray-500"
        }`}
      ></button>
    ))}
  </div>
</section>


     


      {/* Footer */}
      <footer className="bg-sky-900 text-white text-center py-4 mt-10 text-sm">
          
      </footer>
    </main>
  );
}
