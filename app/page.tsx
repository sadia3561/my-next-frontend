"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageSquare, Calendar } from "lucide-react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

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
      setTimeout(() => router.push("/profile"), 800);
    } catch (err: any) {
      setMessage("❌ " + err.message);
    }
  };

  const registrationRoles = [
    "Client",
    "Vendor",
    "Supplier",
    "Consultant",
    "Engineer",
    "Designer",
    "Transporter",
  ];

  const [showRegistrationRoles, setShowRegistrationRoles] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({});
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    username: "",
    phone: "",
    project: "",
  });

  const handleAppointmentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment submitted successfully!");
    setAppointmentData({ name: "", username: "", phone: "", project: "" });
  };

  const toggleDropdown = (stepName: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [stepName]: !prev[stepName],
    }));
  };

  return (
    <main className="relative min-h-screen px-6 py-10 text-gray-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-200 via-sky-100 to-white"></div>

      <div className="relative max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start gap-10">
        {/* Left Side: Enquiry + Appointment */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Enquiry Heading */}
          <div className="flex items-center gap-2 text-sky-800 text-2xl font-bold">
            <MessageSquare className="w-6 h-6 text-sky-700" />
            <span>Enquiry</span>
          </div>

          {/* Enquiry Dropdown */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white text-gray-800 rounded-lg shadow p-2 hover:shadow-lg transition">
              <button
                onClick={() => {
                  setShowRegistrationRoles(!showRegistrationRoles);
                  toggleDropdown("Enquiry");
                }}
                className="w-full text-left font-semibold text-sky-700 hover:underline px-2 py-1 flex justify-between items-center"
              >
                Enquiry
                <span>{dropdownOpen["Enquiry"] ? "▲" : "▼"}</span>
              </button>
              {showRegistrationRoles && (
                <ul className="pl-2 border-l-2 border-sky-400 bg-sky-50 mt-2 rounded-md">
                  {registrationRoles.map((role) => (
                    <li key={role}>
                      <Link
                        href={`/registration/${role.toLowerCase()}`}
                        className="block px-2 py-1 text-gray-700 hover:bg-sky-100 rounded"
                      >
                        {role}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Appointment Section */}
          <div className="bg-white text-gray-800 rounded-lg shadow p-4 w-full max-w-md mt-4">
            <button
              onClick={() => setAppointmentOpen(!appointmentOpen)}
              className="flex justify-between items-center w-full font-semibold text-lg px-3 py-2 hover:bg-gray-100 rounded"
            >
              <div className="flex items-center gap-4">
                <Calendar className="w-5 h-5 text-sky-700" />
                Appointment
              </div>
              <span>{appointmentOpen ? "▲" : "▼"}</span>
            </button>

            {appointmentOpen && (
              <form onSubmit={handleAppointmentSubmit} className="mt-4 space-y-4">
                {["name", "username", "phone", "project"].map((field) => (
                  <div key={field}>
                    <label className="block font-medium mb-1 capitalize">
                      {field === "project" ? "Requirements" : field}
                    </label>
                    {field !== "project" ? (
                      <input
                        type="text"
                        name={field}
                        value={appointmentData[field as keyof typeof appointmentData]}
                        onChange={handleAppointmentChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder={`Your ${field}`}
                        required
                      />
                    ) : (
                      <textarea
                        name={field}
                        value={appointmentData.project}
                        onChange={handleAppointmentChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Tell us about your requirements"
                        rows={4}
                        required
                      ></textarea>
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full bg-sky-700 text-white font-semibold py-2 rounded hover:bg-sky-800 transition"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Side: Login Box */}
        <div className="hidden lg:flex lg:w-1/2 justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-80 border border-white/20">
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
              Login to Your Account
            </h3>
            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-900 placeholder-gray-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-900 placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full bg-sky-700 text-white font-semibold py-2 rounded hover:bg-sky-800 transition"
              >
                Login
              </button>
              {message && (
                <p className="text-center text-sm mt-1 text-red-500">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center mb-8 text-sky-800">
            Featured Projects
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition w-80"
              >
                <img
                  src={`/assets/project${i}.jpg`}
                  alt={`Project ${i}`}
                  className="w-600 h-60 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">PROJECT CAPTION {i}</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Brief description of the project and role.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
