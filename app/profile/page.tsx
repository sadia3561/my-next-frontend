"use client";

export default function ProfilePage() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">This is Profile page</h1>

        <div className="space-y-3">
          <p><strong>Name:</strong> {user.name || "N/A"}</p>
          <p><strong>Email:</strong> {user.email || "N/A"}</p>
          <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
          <p><strong>Role:</strong> {user.role || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}
