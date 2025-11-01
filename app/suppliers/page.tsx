// FILE: app/suppliers/page.tsx
"use client";

import Image from "next/image";

export default function SuppliersPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Image 1 */}
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg mb-8">
        <Image
          src="/assets/ser10.jpg" // ← pehli image ka path
          alt="ser10"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Image 2 */}
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg mb-8">
        <Image
          src="/assets/ser11.jpg" // ← doosri image ka path
          alt="ser11"
          fill
          className="object-cover"
        />
      </div>

      {/* Image 3 */}
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/assets/ser12.jpg" // ← teesri image ka path
          alt="ser12"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
