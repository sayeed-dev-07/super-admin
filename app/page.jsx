import Link from "next/link";
import { ArrowRight, ShieldCheck, Database, Store } from "lucide-react";

export default function RootLandingPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      {/* Minimalist Top Navigation */}
      <header className="flex items-center justify-between p-6 border-b border-black">
        <div className="text-xl font-black tracking-tighter uppercase flex items-center gap-2">
          <ShieldCheck className="h-6 w-6" />
          <p className="hidden sm:block">Dealbuzzz Core</p>
        </div>
        <div className="flex gap-6 items-center">
          <Link href="/register" className="font-bold hover:underline cursor-pointer hidden sm:block">
            Partner Registration
          </Link>
          <Link
            href="/login"
            className="bg-black text-white px-5 py-2 font-bold border border-black hover:bg-gray-800 transition-colors cursor-pointer"
          >
            System Login
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-black bg-gray-100 text-xs font-bold uppercase mb-8">
          <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
          System Operational
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase max-w-4xl">
          Central Infrastructure <br /> Control Center
        </h1>

        <p className="max-w-2xl text-lg font-medium mb-12 border-l-4 border-black pl-4 text-left mx-auto">
          The master administrative portal for Dealbuzzz. Manage multi-tenant environments, master product catalogs, global inventories, and platform-wide configurations from a single access point.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-lg font-bold border border-black hover:bg-gray-800 transition-colors cursor-pointer w-full sm:w-auto"
          >
            Access Dashboard <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-lg font-bold border border-black hover:bg-gray-100 transition-colors cursor-pointer w-full sm:w-auto"
          >
            Apply for a Tenant Shop
          </Link>
        </div>
      </main>

      {/* Feature Grid (Footer area) */}
      <footer className="grid grid-cols-1 md:grid-cols-3 border-t border-black bg-gray-50">
        <div className="p-8 border-b md:border-b-0 md:border-r border-black">
          <Store className="h-8 w-8 mb-4 text-black" />
          <h3 className="text-xl font-bold mb-2">Multi-Tenant Management</h3>
          <p className="text-sm font-medium text-gray-700">
            Verify, suspend, and monitor independent shops operating under the Sellora platform.
          </p>
        </div>
        <div className="p-8 border-b md:border-b-0 md:border-r border-black">
          <Database className="h-8 w-8 mb-4 text-black" />
          <h3 className="text-xl font-bold mb-2">Master Catalog</h3>
          <p className="text-sm font-medium text-gray-700">
            Maintain central repositories for products, sizes, brands, and overarching categorizations.
          </p>
        </div>
        <div className="p-8">
          <ShieldCheck className="h-8 w-8 mb-4 text-black" />
          <h3 className="text-xl font-bold mb-2">God-Mode Security</h3>
          <p className="text-sm font-medium text-gray-700">
            Override capabilities and strict access controls secured by token-based authentication.
          </p>
        </div>
      </footer>
    </div>
  );
}