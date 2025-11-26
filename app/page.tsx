"use client";
import React from "react";
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
      const res = await fetch("https://my-next-backend-production.up.railway.app/api/auth/login", {
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
<div className="pt-24"></div>
<header className="flex justify-between items-center px-10 py-4 bg-white shadow border-b border-gray-200">
  <div className="flex items-center gap-4">
    {/* Logo */}
    <img src="/logoo.png" alt="Logo" className="w-12 h-12" />

    {/* Company Name + Tagline (stacked vertically) */}
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold text-sky-900 tracking-wide">
        Aabha Global Nexus Innovation
      </h1>
      <p className="text-sm text-gray-600 italic mt-1">
        Innovating the Future. Connecting the World.
      </p>
    </div>
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


 {/* 🌆 Featured Projects Section */}
<section className="relative w-full py-20 bg-gradient-to-b from-gray-900 via-sky-950 to-gray-900 text-white overflow-hidden">
  {/* Background Glow on Sides */}
  <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-sky-800/40 via-transparent to-transparent blur-3xl"></div>
  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sky-800/40 via-transparent to-transparent blur-3xl"></div>

  {/* Title */}
  

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
        "/assets/featured6.jpg",
        "/assets/featured7.jpg",
        "/assets/featured8.jpg",
        "/assets/featured9.jpg",
     
      ].map((src, i) => {
        const indexDiff = (i - current + 9) % 9;
        let className =
          "absolute rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.4)] border border-sky-400/30 transition-all duration-700 ease-in-out object-cover object-center";

        if (indexDiff === 0)
          className +=
            " w-[70%] h-[500px] z-30 scale-100 opacity-100 translate-x-0";
        else if (indexDiff === 1)
          className +=
            " w-[55%] h-[420px] z-20 scale-95 opacity-60 translate-x-[60%] brightness-75 blur-[1px]";
        else if (indexDiff === 9)
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
        onClick={() => setCurrent((prev) => (prev - 1 + 10) % 10)}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-sky-800/70 hover:bg-sky-700/90 text-white p-4 rounded-full z-40 transition-all shadow-lg hover:scale-110 border border-sky-500/40"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % 10)}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-sky-800/70 hover:bg-sky-700/90 text-white p-4 rounded-full z-40 transition-all shadow-lg hover:scale-110 border border-sky-500/40"
      >
        ›
      </button>
    </div>
  </div>

  {/* Dots Indicator */}
  <div className="flex justify-center gap-3 mt-8">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
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




{/* 🔹 Single Welcome Section with Buttons */}
<section className="relative bg-white py-14 px-2 sm:px-4 md:px-6 lg:px-8">
  <div className="relative max-w-[90vw] mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 text-gray-800 text-center">
    
    {/* ✅ Combined Welcome Message */}
    <h2 className="text-3xl font-bold text-sky-900 mb-2">
      WELCOME TO AABHA GLOBAL NEXUS INNOVATIONS
    </h2>
    <h3 className="text-lg font-semibold text-sky-700 mb-4">
      Your Trusted Partner in MEPF & ELV Solutions
    </h3>

    <p className="text-gray-700 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
      <b>Leading MEPF & ELV </b> engineering company offering design,
      consulting,project execution, and lifecycle management with a strong focus on quality,innovation, and safety.
      <br />
      <br />
    
    </p>

    {/* ✅ Buttons Below */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">
  {/* Enquiry Button (Link) */}
  <Link
    href="/registration"
    className="bg-sky-700 text-white px-6 py-2.5 rounded-md font-medium hover:bg-sky-800 transition"
  >
    Enquiry
  </Link>

  {/* Book Appointment Toggle (Button) */}
  <button
    onClick={() => setAppointmentOpen((prev) => !prev)}
    className="bg-sky-50 text-sky-700 border border-sky-300 px-6 py-2.5 rounded-md font-medium hover:bg-sky-100 transition"
  >
    Book Appointment
  </button>
</div>

{/* Appointment Form Section */}
<div
  className={`transition-all duration-500 overflow-hidden ${
    appointmentOpen ? "max-h-[800px] mt-8" : "max-h-0"
  }`}
>
  <form className="space-y-3 border-t border-gray-200 pt-6 mt-4 max-w-md mx-auto text-left">
    <input
      type="text"
      placeholder="Full Name"
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none"
      required
    />
    <input
      type="email"
      placeholder="Email Address"
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none"
      required
    />
    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none"
      required
    />
    <input
      type="date"
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm [color-scheme:light] focus:ring-2 focus:ring-sky-300 focus:outline-none"
      required
    />

      <div className="flex gap-2">
              <select
                className="flex-1 border border-gray-300 rounded-md px-2 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none"
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
                className="flex-1 border border-gray-300 rounded-md px-2 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none"
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
                className="w-20 border border-gray-300 rounded-md px-2 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none"
                required
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>

    <textarea
      placeholder="Project Requirements / Message"
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-sky-300 focus:outline-none"
      rows={3}
      required
    ></textarea>
    <button
      type="submit"
      className="w-full bg-sky-700 text-white py-2 rounded-md hover:bg-sky-800 transition font-medium"
    >
      Submit
    </button>
  </form>
</div>

</div>
</section>




{/* 💬 Client Testimonials Section — Always 4 Cards Full Width */}
<section className="relative w-screen overflow-hidden bg-white py-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-sky-900 uppercase tracking-wider">
      Client Testimonials
    </h2>
    <p className="text-gray-600 mt-2">
      Hear what our valued clients have to say about their experience with Aabha Global Nexus Innovations.
    </p>
  </div>

  {(() => {
    const reviews = [
     { text: "I had a wonderful experience at the construction site. The team maintained excellent safety standards and worked efficiently.", name: "L BISWAS", company: "INDUSTRIAL PROJECTS" },
      { text: "I'm very pleased with the work done by Aabha Nexus Innovations. Professional and quick to respond, excellent quality.", name: "KULDEEP SINGH", company: "CIVITECH ENGINEERING" },
       { text: "Excellent fire alarm installation! Highly reliable, clean work and great after-sales support.", name: "PRIYANKA RANI", company: "FIRE SAFE SOLUTIONS" }, 
       { text: "Project delivered on time, best team support & professional execution.", name: "VISHAL DHAMI", company: "STRUCTURA BUILDERS" }, 
       { text: "They are good at their services, on-time completion and professional behaviour towards clients.", name: "JYOTI YADAV", company: "RESIDENTIAL CLIENT" }, 
       { text: "Well educated and have a great mindset for growth and goals.", name: "KASHVI PAL", company: "CLIENT" }, 
       { text: "Excellent work, good service, responsive team. Project delivered on time.", name: "PAWAN JAISAWAL", company: "INDUSTRIAL PROJECTS" }, 
       { text: "Nexus Innovations is a technology-led company bringing automation to construction.", name: "ANKITA BHATTACHARYA", company: "TECH CLIENT" },
        { text: "Best service & responsive team, project delivered on time.", name: "ZEESHAN KHAN", company: "COMMERCIAL CLIENT" }, 
        { text: "They offer excellent service and always deliver on time.", name: "SAKSHI SINGH", company: "CLIENT" },
         { text: "Thank you for all your good deeds you have done.", name: "HEMA YADAV", company: "CLIENT" }, 
         { text: "Good professional team and timely delivery.", name: "SUMAN", company: "CLIENT" },
          { text: "Best service and great experience overall.", name: "SHARATH AN", company: "CLIENT" }, 
          { text: "Nice service and supportive team.", name: "POONAM SING", company: "CLIENT" },
           { text: "Very good services.", name: "SIRAJUL HASAN", company: "CLIENT" }, 
           { text: "Good work and professional behaviour.", name: "AMIT KUMAR", company: "CLIENT" }, 
           { text: "Good work.", name: "RAGHVENDRA PRATAP SINGH", company: "CLIENT" },
            { text: "Excellent service.", name: "MAYANK KUMAR", company: "CLIENT" },
             { text: "Excellent 👍", name: "NEETU SHARMA", company: "CLIENT" },
              { text: "Best works!", name: "SADDAM HUSSAIN", company: "CLIENT" },
    ];

    const [currentGroup, setCurrentGroup] = React.useState(0);
    const groupsCount = Math.ceil(reviews.length / 4);

    const goPrevTestimonials = () => {
      setCurrentGroup((prev) => (prev === 0 ? groupsCount - 1 : prev - 1));
    };

    const goNextTestimonials = () => {
      setCurrentGroup((prev) => (prev === groupsCount - 1 ? 0 : prev + 1));
    };

    return (
      <div className="relative w-full overflow-hidden">
        {/* Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentGroup * 100}%)`,
            width: `${groupsCount * 100}%`,
          }}
        >
          {Array.from({ length: groupsCount }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex w-full flex-shrink-0">
              {reviews.slice(groupIndex * 4, groupIndex * 4 + 4).map((review, i) => {
                const isYellow = (groupIndex * 4 + i) % 2 !== 0;
                return (
                  <div
                    key={i}
                    className="w-[25vw] flex flex-col items-center text-center px-6"
                  >
                    <div
                      className={`${
                        isYellow ? "bg-yellow-400" : "bg-gray-100"
                      } relative p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-500`}
                    >
                      <div className="flex items-start mb-3">
                        <span
                          className={`text-3xl font-bold ${
                            isYellow ? "text-yellow-700" : "text-gray-400"
                          }`}
                        >
                          &ldquo;
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{review.text}</p>
                      <div
                        className={`absolute left-1/2 -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] ${
                          isYellow ? "border-t-yellow-400" : "border-t-gray-100"
                        } border-l-transparent border-r-transparent transform -translate-x-1/2`}
                      ></div>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-sm font-bold text-sky-900 uppercase">{review.name}</h4>
                      <p className="text-xs text-gray-600 uppercase">{review.company}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goPrevTestimonials}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-sky-900 text-white rounded-full hover:bg-sky-700 z-10"
        >
          ‹
        </button>
        <button
          onClick={goNextTestimonials}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-sky-900 text-white rounded-full hover:bg-sky-700 z-10"
        >
          ›
        </button>
      </div>
    );
  })()}
</section>





{/* 💬 Contact / Project Requirement Section */}
<section className="bg-gradient-to-b from-sky-50 to-sky-100 py-20 px-6 lg:px-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Side - Text */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4 leading-snug">
        Have a Project Requirement? <br /> <span className="text-sky-700">Get in Touch</span>
      </h2>
      <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-md">
        We’d love to discuss how Aabha Global Nexus Innovations can help make your next
        project a success. Fill out the form and our team will connect with you shortly.
      </p>
    </div>

    {/* Right Side - Contact Form */}
    <div className="bg-white shadow-xl border border-sky-100 rounded-xl p-8">
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-sky-900 mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-sky-900 mb-2">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-sky-900 mb-2">Message</label>
          <textarea
            rows={4}
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-sky-700 text-white font-semibold py-2.5 rounded-md hover:bg-sky-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>



     



<section className="bg-white py-16 px-6 lg:px-12 border-t border-gray-200 relative">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-sky-900 uppercase tracking-wide">
      Our Clients & Partners
    </h2>
    <p className="text-gray-600 mt-2">
      Trusted by leading companies and organizations across industries.
    </p>
  </div>

  {(() => {
    const logos = [
      "/assets/logo1.jpg", "/assets/logo2.jpg", "/assets/logo3.jpg", "/assets/logo4.jpg",
      "/assets/logo5.jpg", "/assets/logo6.jpg", "/assets/logo7.jpg", "/assets/logo8.jpg",
      "/assets/logo9.jpg", "/assets/logo10.jpg", "/assets/logo11.jpg", "/assets/logo12.jpg",
      "/assets/logo13.jpg", "/assets/logo14.jpg", "/assets/logo15.jpg", "/assets/logo16.jpg",
      "/assets/logo17.jpg", "/assets/logo18.jpg", "/assets/logo19.jpg", "/assets/logo20.jpg",
      "/assets/logo21.jpg", "/assets/logo22.jpg", "/assets/logo23.jpg", "/assets/logo24.jpg",
      "/assets/logo25.jpg", "/assets/logo26.jpg", "/assets/logo27.jpg", "/assets/logo28.jpg",
      "/assets/logo29.jpg", "/assets/logo30.jpg", "/assets/logo31.jpg", "/assets/logo32.jpg",
    ];

    const [current, setCurrent] = React.useState(0);
    const groupSize = 8;
    const totalGroups = Math.ceil(logos.length / groupSize);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % totalGroups);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + totalGroups) % totalGroups);

    // split logos into groups of 8
    const groups = Array.from({ length: totalGroups }, (_, i) =>
      logos.slice(i * groupSize, i * groupSize + groupSize)
    );

    return (
      <div className="relative w-full">
        {groups.map((group, index) => (
          <div
            key={index}
            className={`grid grid-cols-4 gap-8 place-items-center transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            {group.map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition rounded-xl shadow-sm p-4 w-40 h-24"
              >
                <img
                  src={src}
                  alt={`Logo ${index * groupSize + i + 1}`}
                  className="w-32 h-20 object-contain"
                />
              </div>
            ))}
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-sky-900 text-white rounded-full p-3 hover:bg-sky-700 shadow-lg z-10"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-sky-900 text-white rounded-full p-3 hover:bg-sky-700 shadow-lg z-10"
        >
          ›
        </button>
      </div>
    );
  })()}
</section>
























      {/* Footer */}
      <footer className="bg-sky-900 text-white text-center py-4 mt-10 text-sm">
          
      </footer>
    </main>
  );
}
