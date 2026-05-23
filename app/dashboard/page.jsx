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
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header Section */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">System Overview</h1>
                <p className="text-sm font-medium mt-1 text-slate-500">Welcome back, Superadmin. Here is what is happening on the platform today.</p>
            </div>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-medium text-slate-500">{stat.title}</h3>
                                <div className="p-2.5 bg-slate-50 rounded-lg text-slate-600 border border-slate-100">
                                    <Icon className="h-5 w-5" />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                        </div>
                    );
                })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Recent Activity (Takes up 2/3 space) */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
                            <h2 className="text-base font-semibold text-slate-800 flex items-center gap-2">
                                <ShieldAlert className="h-5 w-5 text-slate-400" />
                                Recent Shop Registrations
                            </h2>
                            <Link href="/dashboard/tenants" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 cursor-pointer flex items-center gap-1 transition-colors">
                                View All <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm whitespace-nowrap">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                                        <th className="px-6 py-4 font-medium">Shop Name</th>
                                        <th className="px-6 py-4 font-medium">Domain</th>
                                        <th className="px-6 py-4 font-medium">Verification</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {recentShops.map((shop) => (
                                        <tr key={shop._id} className="hover:bg-slate-50/80 transition-colors">
                                            <td className="px-6 py-4 font-semibold text-slate-900">{shop.name}</td>
                                            <td className="px-6 py-4 text-slate-500">{shop.domain}</td>
                                            <td className="px-6 py-4">
                                                {shop.status === "Pending" ? (
                                                    <span className="bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide">
                                                        PENDING
                                                    </span>
                                                ) : (
                                                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide">
                                                        VERIFIED
                                                    </span>
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
                    <h2 className="text-base font-semibold text-slate-800 mb-1">Quick Actions</h2>

                    <Link
                        href="/dashboard/tenants/add"
                        className="flex items-center justify-between bg-indigo-600 text-white p-4 rounded-xl shadow-sm hover:bg-indigo-700 transition-colors cursor-pointer group"
                    >
                        <span className="font-medium">Register New Tenant</span>
                        <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                            <Plus className="h-5 w-5" />
                        </div>
                    </Link>

                    <Link
                        href="/dashboard/products/add"
                        className="flex items-center justify-between bg-white text-slate-700 p-4 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer group"
                    >
                        <span className="font-medium">Add Master Product</span>
                        <div className="bg-slate-100 p-1 rounded-md text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700 transition-colors">
                            <Plus className="h-5 w-5" />
                        </div>
                    </Link>

                    <Link
                        href="/dashboard/inventories/add"
                        className="flex items-center justify-between bg-white text-slate-700 p-4 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer group"
                    >
                        <span className="font-medium">Allocate Inventory</span>
                        <div className="bg-slate-100 p-1 rounded-md text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700 transition-colors">
                            <Plus className="h-5 w-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}