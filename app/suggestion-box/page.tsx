"use client";

import { useState, FormEvent, ChangeEvent } from "react";

export default function SuggestionBox() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    department: "",
    suggestion: "",
    attachment: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Suggestion Submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      department: "",
      suggestion: "",
      attachment: null,
    });
  };

  return (
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="w-full max-w-2xl bg-white border border-gray-300 p-6">
        <div className="pt-24"></div>
        <h2 className="text-2xl font-medium text-black mb-4 text-center">
          Suggestion Box
        </h2>
        <p className="text-gray-700 text-sm mb-6 text-center">
          Please share your suggestions or feedback. Your input is valuable to us.
        </p>

        {submitted && (
          <p className="text-green-700 text-center mb-4">
            ✅ Thank you! Your suggestion has been submitted.
          </p>
        )}

        <form onSubmit={handleSubmit} className="text-sm text-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block mb-1">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full"
                placeholder="10-digit number"
              />
            </div>
            <div>
              <label className="block mb-1">Department / Subject</label>
              <input
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full"
                placeholder="E.g., IT, Operations"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1">Suggestion / Feedback</label>
              <textarea
                name="suggestion"
                value={formData.suggestion}
                onChange={handleChange}
                rows={5}
                className="border border-gray-400 p-2 w-full"
                placeholder="Write your suggestion here..."
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1">Attachment (Optional)</label>
              <input
                type="file"
                name="attachment"
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 hover:bg-gray-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
