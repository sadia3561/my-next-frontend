// FILE: app/suppliers/page.tsx
"use client";

import Image from "next/image";

export default function SuppliersPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 flex justify-center items-center">
      {/* 3 Images Side-by-Side */}
      <div className="flex gap-6 w-full max-w-7xl">
        {/* Image 1 */}
        <div className="relative flex-1 h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/ser10.jpg"
            alt="ser10"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image 2 */}
        <div className="relative flex-1 h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/ser11.jpg"
            alt="ser11"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="relative flex-1 h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/ser12.jpg"
            alt="ser12"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
