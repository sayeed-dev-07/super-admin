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
        <div className="min-h-screen bg-gray-50 flex">
            
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden cursor-pointer"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-background text-foreground flex flex-col transition-transform duration-300 md:relative md:translate-x-0 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
                <div className="h-16 flex items-center justify-between px-6 border-b border-gray-800">
                    <Link href={'/'} className="text-xl font-bold tracking-tight cursor-pointer">
                        Super Admin
                    </Link>
                    {/* Mobile Close Button */}
                    <button 
                        className="md:hidden text-gray-400 hover:text-foreground cursor-pointer"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-8">
                    {navSections.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
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
                                            onClick={() => setIsSidebarOpen(false)} // Close sidebar on mobile when a link is clicked
                                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                                                isActive
                                                    ? "bg-foreground text-background shadow-sm"
                                                    : "text-gray-300 hover:bg-gray-800 hover:text-foreground"
                                            }`}
                                        >
                                            <Icon className={`mr-3 h-5 w-5 ${isActive ? "text-background" : "text-gray-400"}`} />
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Bottom Logout Button */}
                <div className="p-4 border-t border-gray-800">
                    <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-400 rounded-lg hover:bg-gray-800 hover:text-red-300 transition-colors cursor-pointer">
                        <LogOut className="mr-3 h-5 w-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
                {/* Top Header */}
                <header className="h-16 bg-foreground border-b border-gray-200 flex items-center justify-between px-4 sm:px-8 shadow-sm z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        {/* Mobile Hamburger Button */}
                        <button 
                            className="md:hidden p-2 mr-2 text-background hover:bg-gray-100 rounded-lg cursor-pointer"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                        
                        {/* Clickable Breadcrumbs */}
                        <Link href="/dashboard" className="hover:text-background hover:underline transition-colors cursor-pointer font-bold">
                            Dashboard
                        </Link>
                        <span>/</span>
                        <span className="capitalize text-background font-bold">
                            {pathname.split("/")[2] || "Overview"}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-background text-foreground flex items-center justify-center text-sm font-bold cursor-pointer hover:opacity-90">
                            SA
                        </div>
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