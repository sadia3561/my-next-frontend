import "./globals.css";
import type { Metadata } from "next";
import Navbar from "components/navbar";

export const metadata: Metadata = {
  title: "ANI MEPF",
  description: "Multi-page company website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 flex flex-col min-h-screen">
        <Navbar />

        {/* Page content */}
        <main className="flex-grow">{children}</main>

        {/* ✅ Footer ko yaha hi rakho */}
        <footer className="bg-blue-900 text-white p-6 text-center">
          <p>&copy; 2025 AGNI MEPF & ELV. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
