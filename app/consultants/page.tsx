// FILE: app/consultants/page.tsx
"use client";

import Image from "next/image";

export default function ConsultantsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Image 1 */}
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg mb-8">
        <Image
          src="/assets/ser8.jpg"
          alt="ser8"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Image 2 */}
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg mb-8">
        <Image
          src="/assets/ser8.jpg"
          alt="ser8"
          fill
          className="object-cover"
        />
      </div>

      {/* Image 3 */}
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/assets/ser8.jpg"
          alt="ser8"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
