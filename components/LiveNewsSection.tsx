"use client";

import Link from "next/link";

export default function LiveNewsSection() {
  const news = [
    "Aabha Global Nexus Innovation",
    "NEWS",
    "MEPF VendorNEWS",
    "Tender News",
  ];

  return (
    <>
      {/* 🔴 UPDATED: Bigger + Highlighted Wrapper */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-950 via-sky-900 to-sky-950 border-b-2 border-sky-700 shadow-lg">
        <div className="flex items-center min-h-[60px]"> {/* 🔴 UPDATED */}

          {/* 🔴 UPDATED: Bigger LIVE badge */}
          <div className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 font-extrabold text-base tracking-widest shadow-md">
            LIVE NEWS
            <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
          </div>

          {/* 🔴 UPDATED: Bigger marquee text */}
          <div className="relative flex-1 overflow-hidden">
            <div className="live-marquee whitespace-nowrap flex items-center gap-20 px-10">
              {news.concat(news).map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-white text-[15px] md:text-[16px] font-semibold hover:text-yellow-300 transition"
                >
                  ✦ {item}
                </Link>
              ))}
            </div>

            {/* 🔴 UPDATED: Stronger shine */}
            <div className="absolute inset-0 pointer-events-none shine-effect"></div>
          </div>
        </div>
      </section>

      {/* 🔴 UPDATED: Enhanced Animation */}
      <style jsx global>{`
        .live-marquee {
          animation: marquee 22s linear infinite;
        }

        .live-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .shine-effect {
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.35) 50%,
            transparent 100%
          );
          animation: shine 2.5s infinite;
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
}
