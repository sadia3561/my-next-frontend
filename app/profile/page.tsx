"use client";
import { useEffect, useState } from "react";

interface UserProfile {
  id: string;
  email: string;
  name?: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("User not logged in");
        const storedRole = localStorage.getItem("role");
<p>You are logged in as <strong>{storedRole}</strong></p>


        const res = await fetch("https://my-next-backend-production.up.railway.app/api/auth/profile", {
          method: "GET", // explicitly define GET
          headers: {
            "Content-Type": "application/json", // necessary for backend parsing
            "Authorization": `Bearer ${token}`, // attach JWT token
          },
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.message || "Unauthorized");
        }

        const data: UserProfile = await res.json();
        setProfile(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading profile...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (!profile) return <p className="text-center mt-10 text-red-600">Failed to load profile</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md space-y-4">
        <p><strong>ID:</strong> {profile.id}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Name:</strong> {profile.name || "Not set"}</p>
      </div>
    </div>
  );
}
