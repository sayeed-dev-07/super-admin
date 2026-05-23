"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Package,
    Layers,
    Tags,
    Box,
    MapPin,
    Store,
    Globe,
    Coins,
    Languages,
    LogOut,
    Menu,
    X
} from "lucide-react";

const navSections = [
    {
        title: "Catalog",
        links: [
            { name: "Products", href: "/dashboard/products", icon: Package },
            { name: "Categories", href: "/dashboard/categories", icon: Layers },
            { name: "Brands", href: "/dashboard/brands", icon: Tags },
        ]
    },
    {
        title: "Inventory",
        links: [
            { name: "Inventories", href: "/dashboard/inventories", icon: Box },
            { name: "Warehouses", href: "/dashboard/warehouses", icon: MapPin },
            { name: "Sizes", href: "/dashboard/sizes", icon: Box },
        ]
    },
    {
        title: "Platform Setup",
        links: [
            { name: "Tenants / Shops", href: "/dashboard/tenants", icon: Store },
            { name: "Countries", href: "/dashboard/countries", icon: Globe },
            { name: "Currencies", href: "/dashboard/currencies", icon: Coins },
            { name: "Languages", href: "/dashboard/languages", icon: Languages },
        ]
    }
];

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
            
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden cursor-pointer transition-opacity"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-950 text-slate-300 flex flex-col transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
                isSidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
            }`}>
                <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800/60">
                    <Link href={'/'} className="text-xl font-bold tracking-tight text-white cursor-pointer flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <Store className="h-5 w-5 text-white" />
                        </div>
                        SuperAdmin<span className="text-indigo-500">.</span>
                    </Link>
                    {/* Mobile Close Button */}
                    <button 
                        className="md:hidden text-slate-400 hover:text-white cursor-pointer transition-colors"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-8 no-scrollbar">
                    {navSections.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                                {section.title}
                            </h2>
                            <div className="space-y-1">
                                {section.links.map((link) => {
                                    const Icon = link.icon;
                                    const isActive = pathname.startsWith(link.href);

                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsSidebarOpen(false)}
                                            className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                                                isActive
                                                    ? "bg-indigo-600/10 text-indigo-400"
                                                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                                            }`}
                                        >
                                            <Icon className={`mr-3 h-5 w-5 transition-colors ${isActive ? "text-indigo-400" : "text-slate-500"}`} />
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Bottom Logout Button */}
                <div className="p-4 border-t border-slate-800/60">
                    <button className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-slate-400 rounded-lg hover:bg-red-500/10 hover:text-red-400 transition-colors cursor-pointer group">
                        <LogOut className="mr-3 h-5 w-5 text-slate-500 group-hover:text-red-400 transition-colors" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
                {/* Top Header */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 z-10 relative">
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                        {/* Mobile Hamburger Button */}
                        <button 
                            className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                        
                        {/* Clickable Breadcrumbs */}
                        <Link href="/dashboard" className="hover:text-indigo-600 transition-colors cursor-pointer font-medium">
                            Dashboard
                        </Link>
                        <span className="text-slate-300">/</span>
                        <span className="capitalize text-slate-900 font-semibold">
                            {pathname.split("/")[2] || "Overview"}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="h-9 w-9 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-slate-200 transition-colors shadow-sm">
                            SA
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}