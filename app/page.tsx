"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent reload
    setMessage("");

    try {
      const res = await fetch("https://my-next-backend-20.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
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

  return (
    <main>
      {/* Hero with Login Sidebar */}
      <section className="relative bg-yellow-600 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/hero-bg.jpg"
            alt="hero background"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left Side: Hero Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                End-to-end collaboration across the full project lifecycle
              </h2>
              <p className="mt-4 text-base md:text-lg text-indigo-100">
                Registration → Tendering → Award → Execution → Billing → AMC/Help Desk → Analytics
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/lifecycle"
                  className="bg-white text-yellow-600 px-5 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
                >
                  See lifecycle flow
                </Link>
              </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20">
                <h3 className="text-2xl font-bold text-center mb-6 text-white">
                  Login to Your Account
                </h3>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-200 mb-2"
                    >
                      Email or Username
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                      placeholder="Enter your email or username"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-200 mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                      placeholder="Enter your password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-yellow-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    Login
                  </button>

                  {message && (
                    <p className="text-center text-sm mt-2">
                      {message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Mobile Login Button */}
          <div className="lg:hidden mt-8 text-center">
            <Link
              href="/login"
              className="bg-white text-yellow-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition inline-block"
            >
              Login.
            </Link>
          </div>
        </div>
      </section>


      {/* Featured Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center mb-8">Featured Projects</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={`/assets/project${i}.jpg`}
                  alt={`Project ${i}`}
                  width={400}
                  height={160}
                  className="w-full h-40 object-cover"
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

      {/* Quick Ecosystem */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center mb-8">Quick Ecosystem Access</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Vendors", link: "/vendors" },
              { title: "Suppliers", link: "/suppliers" },
              { title: "Consultants", link: "/consultants" },
              { title: "Construction", link: "/construction" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
              >
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Short description about {item.title}.
                </p>
                <Link
                  href={item.link}
                  className="text-indigo-600 mt-2 inline-block hover:text-indigo-800 font-medium"
                >
                  Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}