"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent() {
  useEffect(() => {
    const existingMap = L.DomUtil.get("mymap");
    if (existingMap && (existingMap as any)._leaflet_id) return;

    // Fix marker icons
    const DefaultIcon = L.icon({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    // Create map
    const map = L.map("mymap", {
      center: [23.5, 80.5], // India center
      zoom: 5,
    });

    // ★ FREE CLEAN TILE LAYER (No Urdu, No Bengali)
    L.tileLayer(
      "https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution: "© CartoDB",
      }
    ).addTo(map);
     //apikey
    //AIzaSyBlLJ0RwJ-5_QualQsyqVIXuVzGA7UyDe8

    const locations = [
      { name: "Delhi", coords: [28.6139, 77.209] as [number, number] },
      { name: "Noida", coords: [28.5355, 77.391] as [number, number] },
      { name: "Gurgaon", coords: [28.4595, 77.0266] as [number, number] },
      { name: "Jaipur", coords: [26.9124, 75.7873] as [number, number] },
      { name: "Chandigarh", coords: [30.7333, 76.7794] as [number, number] },
      { name: "Ahmedabad", coords: [23.0225, 72.5714] as [number, number] },
      { name: "Surat", coords: [21.1702, 72.8311] as [number, number] },
      { name: "Dehradun", coords: [30.3165, 78.0322] as [number, number] },
      { name: "Moradabad", coords: [28.8386, 78.7733] as [number, number] },
      { name: "Rudrapur", coords: [28.987, 79.4144] as [number, number] },
      { name: "Bareilly", coords: [28.367, 79.4304] as [number, number] },
      { name: "Lucknow", coords: [26.8467, 80.9462] as [number, number] },
      { name: "Prayagraj", coords: [25.4358, 81.8463] as [number, number] },
      { name: "Patna", coords: [25.5941, 85.1376] as [number, number] },
      { name: "Siliguri", coords: [26.7271, 88.3953] as [number, number] },
      { name: "Kanpur", coords: [26.4499, 80.3319] as [number, number] },
      { name: "Satna", coords: [24.6005, 80.8322] as [number, number] },
      { name: "Indore", coords: [22.7196, 75.8577] as [number, number] },
      { name: "Aurangabad", coords: [19.8762, 75.3433] as [number, number] },
      { name: "Pune", coords: [18.5204, 73.8567] as [number, number] },
      { name: "Mumbai", coords: [19.076, 72.8777] as [number, number] },
      { name: "Vishakhapatnam", coords: [17.6868, 83.2185] as [number, number] },
      { name: "Kolkata", coords: [22.5726, 88.3639] as [number, number] },
      { name: "Bangalore", coords: [12.9716, 77.5946] as [number, number] },
      { name: "Kochi", coords: [9.9312, 76.2673] as [number, number] },
      { name: "Chennai", coords: [13.0827, 80.2707] as [number, number] },
      { name: "Hyderabad", coords: [17.385, 78.4867] as [number, number] },
    ];

    locations.forEach((loc) => {
      L.marker(loc.coords).addTo(map).bindPopup(`<b>${loc.name}</b>`);
    });

    return () => {
  map.remove();
};

  }, []);

  return (
    <div className="w-full h-[500px]">
      <div id="mymap" className="w-full h-full"></div>
    </div>
  );
}
