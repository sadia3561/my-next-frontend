// FILE: app/services/project-execution/page.tsx
"use client";

import Image from "next/image";

export default function ProjectExecutionPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900">
      <h1 className="text-3xl font-bold text-blue-900 mb-4"> Project Execution </h1>
      <p className="text-gray-700 leading-relaxed">
          our experienced execution team ensures seamless installation and implementation of <b>MEPF & ELV</b> 
          systems.With a focus on safety, quality workmanship, and adherence to standards, we guarantee projects are 
          executed with zero compromise on reliability.

      </p>

      {/* Full-size Image */}
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/ser16.jpg"
                alt="Project Design and Engineering"
                fill
                className="object-cover"
                priority
              />
            </div>
      
            {/* Optional caption or second image */}
            <p className="mt-6 text-gray-600">
              Our design process integrates cutting-edge tools to deliver reliable and
              sustainable project outcomes.
            </p>
    </div>
  );
}
