// FILE: app/services/project-design/page.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ProjectDesignPage() {
  const IMAGES = ["/assets/ser8.jpg", "/assets/ser5.jpg", "/assets/ser7.jpg", "/assets/ser6.jpg"];
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);
  const autoplayRef = useRef<any>(null);

  // Auto slide
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

  // Mouse drag support
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
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Project Design & Engineering
      </h1>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-8">
        Our expert team provides innovative and sustainable engineering design
        tailored to client needs. From conceptual layouts to detailed
        engineering drawings, we ensure that all systems are optimized for
        efficiency, safety, and long-term reliability.
      </p>

      {/* Image Carousel */}
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-lg select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={() => isDragging && onMouseUp()}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
         
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3"
          aria-label="Next"
        >
          ›
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2 absolute bottom-4 w-full">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Caption */}
      <p className="mt-6 text-gray-600">
        Our design process integrates cutting-edge tools to deliver reliable and
        sustainable project outcomes.
      </p>
    </div>
  );
}
