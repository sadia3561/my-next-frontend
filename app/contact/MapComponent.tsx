"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapComponent() {
  const mapContainer = useRef(null);

  // 🔥 Yaha tumhare Service Availability wali sari locations add ki hain
  const locations = [
    { name: "Delhi", lat: 28.6139, lng: 77.2090 },
    { name: "Noida", lat: 28.5355, lng: 77.3910 },
    { name: "Gurgaon", lat: 28.4595, lng: 77.0266 },
    { name: "Jaipur", lat: 26.9124, lng: 75.7873 },
    { name: "Chandigarh", lat: 30.7333, lng: 76.7794 },
    { name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
    { name: "Surat", lat: 21.1702, lng: 72.8311 },
    { name: "Dehradun", lat: 30.3165, lng: 78.0322 },
    { name: "Moradabad", lat: 28.8386, lng: 78.7733 },
    { name: "Rudrapur", lat: 28.9870, lng: 79.4144 },
    { name: "Bareilly", lat: 28.3670, lng: 79.4304 },
    { name: "Lucknow", lat: 26.8467, lng: 80.9462 },
    { name: "Prayagraj", lat: 25.4358, lng: 81.8463 },
    { name: "Patna", lat: 25.5941, lng: 85.1376 },
    { name: "Siliguri", lat: 26.7271, lng: 88.3953 },
    { name: "Kanpur", lat: 26.4499, lng: 80.3319 },
    { name: "Satna", lat: 24.6005, lng: 80.8322 },
    { name: "Indore", lat: 22.7196, lng: 75.8577 },
    { name: "Aurangabad", lat: 19.8762, lng: 75.3433 },
    { name: "Pune", lat: 18.5204, lng: 73.8567 },
    { name: "Mumbai", lat: 19.0760, lng: 72.8777 },
    { name: "Vishakhapatnam", lat: 17.6868, lng: 83.2185 },
    { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
    { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
    { name: "Kochi", lat: 9.9312, lng: 76.2673 },
    { name: "Chennai", lat: 13.0827, lng: 80.2707 },
    { name: "Hyderabad", lat: 17.3850, lng: 78.4867 },
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://tiles.stadiamaps.com/styles/osm_bright.json",
      center: [78.9629, 22.5937], // India center
      zoom: 4.3,
    });

    locations.forEach((loc) => {
      new maplibregl.Marker({ color: "red" })
        .setLngLat([loc.lng, loc.lat])
        .setPopup(new maplibregl.Popup().setHTML(`<b>${loc.name}</b>`))
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        height: "400px",
        width: "100vw",
         marginLeft: "50%",
        transform: "translateX(-50%)", // viewport ke center se align
      }}
    />
  );
}
