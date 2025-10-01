// FILE: app/suppliers/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Suppliers — Your Company",
};

export default function SuppliersPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              YC
            </div>
          </Link>
          <nav className="space-x-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/ecosystem">Ecosystem</Link>
            <Link href="/vendors">Vendors</Link>
            <Link
              href="/contact"
              className="text-white bg-indigo-600 px-4 py-2 rounded-md"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold">Suppliers</h2>
        <p className="mt-2 text-gray-600">
          Procurement, purchase orders, delivery schedules and inventory
          coordination.
        </p>
      </main>
    </div>
  );
}
