"use client";

import Link from "next/link";
import {
    Store,
    Package,
    MapPin,
    Activity,
    ArrowRight,
    Plus,
    ShieldAlert
} from "lucide-react";

export default function DashboardOverviewPage() {
    // Dummy data for platform statistics
    const stats = [
        { title: "Total Verified Shops", value: "142", icon: Store },
        { title: "Master Catalog Products", value: "8,405", icon: Package },
        { title: "Active Warehouses", value: "12", icon: MapPin },
        { title: "System Health", value: "100%", icon: Activity },
    ];

    // Dummy data for recent shops needing verification
    const recentShops = [
        { _id: "t_1", name: "Neon Threads", domain: "neonthreads.sellora.com", status: "Pending" },
        { _id: "t_2", name: "Tech Haven", domain: "techhaven.sellora.com", status: "Pending" },
        { _id: "t_3", name: "Urban Kicks", domain: "urbankicks.sellora.com", status: "Verified" },
    ];

    return (
        <div className="max-w-7xl mx-auto text-black">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-black uppercase tracking-tight">System Overview</h1>
                <p className="text-sm font-bold mt-1 text-gray-600">Welcome back, Superadmin. Here is what is happening on the platform today.</p>
            </div>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white p-6 border border-black flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-gray-500 uppercase">{stat.title}</h3>
                                <Icon className="h-5 w-5 text-black" />
                            </div>
                            <div className="text-4xl font-black text-black">{stat.value}</div>
                        </div>
                    );
                })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Recent Activity (Takes up 2/3 space) */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <div className="bg-white border border-black">
                        <div className="p-4 border-b border-black flex items-center justify-between">
                            <h2 className="text-lg font-bold text-black uppercase flex items-center gap-2">
                                <ShieldAlert className="h-5 w-5" />
                                Recent Shop Registrations
                            </h2>
                            <Link href="/dashboard/tenants" className="text-sm font-bold hover:underline cursor-pointer flex items-center gap-1">
                                View All <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="p-0 overflow-x-auto">
                            <table className="w-full text-left text-sm whitespace-nowrap">
                                <thead className="bg-gray-100 border-b border-black text-black">
                                    <tr>
                                        <th className="px-6 py-3 font-bold border-r border-black">Shop Name</th>
                                        <th className="px-6 py-3 font-bold border-r border-black">Domain</th>
                                        <th className="px-6 py-3 font-bold">Verification</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black">
                                    {recentShops.map((shop) => (
                                        <tr key={shop._id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 border-r border-black font-bold">{shop.name}</td>
                                            <td className="px-6 py-4 border-r border-black font-medium text-gray-600">{shop.domain}</td>
                                            <td className="px-6 py-4 font-bold">
                                                {shop.status === "Pending" ? (
                                                    <span className="bg-black text-white px-2 py-1 text-xs border border-black">PENDING</span>
                                                ) : (
                                                    <span className="bg-white text-black px-2 py-1 text-xs border border-black">VERIFIED</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column: Quick Actions (Takes up 1/3 space) */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-bold text-black uppercase mb-2">Quick Actions</h2>

                    <Link
                        href="/dashboard/tenants/add"
                        className="flex items-center justify-between bg-black text-white p-4 border border-black hover:bg-gray-800 transition-colors cursor-pointer group"
                    >
                        <span className="font-bold">Register New Tenant</span>
                        <Plus className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Link>

                    <Link
                        href="/dashboard/products/add"
                        className="flex items-center justify-between bg-white text-black p-4 border border-black hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                        <span className="font-bold">Add Master Product</span>
                        <Plus className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Link>

                    <Link
                        href="/dashboard/inventories/add"
                        className="flex items-center justify-between bg-white text-black p-4 border border-black hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                        <span className="font-bold">Allocate Inventory</span>
                        <Plus className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}