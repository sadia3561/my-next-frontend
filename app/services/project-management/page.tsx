// FILE: app/services/project-management/page.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ProjectManagement() {
  const IMAGES = ["/assets/ser21.jpg", "/assets/ser1.jpg", "/assets/ser2.jpg", "/assets/ser11.jpg"];
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);
  const autoplayRef = useRef<any>(null);

  // 🔁 Auto-slide every 5s
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, []);

  const goNext = () => setIndex((i) => (i + 1) % IMAGES.length);
  const goPrev = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);

  // Touch controls
  const onTouchStart = (e: React.TouchEvent) => {
    clearInterval(autoplayRef.current);
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    setIsDragging(false);
    const threshold = 60;
    if (deltaX.current > threshold) goPrev();
    else if (deltaX.current < -threshold) goNext();
    deltaX.current = 0;
    startX.current = null;
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 5000);
  };

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    clearInterval(autoplayRef.current);
    startX.current = e.clientX;
    setIsDragging(true);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || startX.current === null) return;
    deltaX.current = e.clientX - startX.current;
  };
  const onMouseUp = () => {
    setIsDragging(false);
    const threshold = 60;
    if (deltaX.current > threshold) goPrev();
    else if (deltaX.current < -threshold) goNext();
    deltaX.current = 0;
    startX.current = null;
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Project Management</h1>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-8">
        <b>ANI</b> provides end-to-end project management services to ensure smooth execution. We focus
        on time, cost, and quality control — coordinating between stakeholders, vendors, and contractors
        to achieve on-time and within-budget delivery.
      </p>

      {/* 🔁 Image Carousel */}
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-lg select-none bg-black"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={() => isDragging && onMouseUp()}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          {IMAGES.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-full h-[500px] bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
            >
              <Image
                src={src}
                alt={`Project Management Image ${i + 1}`}
                fill
                className={`object-contain transition-transform duration-[5000ms] ${
                  i === index ? "scale-105" : "scale-100"
                }`}
                priority={i === index}
              />
            </div>
          ))}
        </div>

        {/* ⬅ Arrow */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 z-10"
          aria-label="Previous"
        >
          ‹
        </button>

        {/* ➡ Arrow */}
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 z-10"
          aria-label="Next"
        >
          ›
        </button>

        {/* ⚪ Dots */}
        <div className="flex justify-center gap-2 absolute bottom-4 w-full">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Caption */}
      <p className="mt-6 text-gray-600">
        Our project management team ensures every initiative is executed with precision, efficiency, and strategic foresight.
      </p>
    </div>
  );
}
