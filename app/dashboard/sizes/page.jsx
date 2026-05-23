"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Ruler, Filter } from "lucide-react";

export default function SizesPage() {
    // Dummy data updated to strictly match your Figma schema (added tenantId)
    const [sizes] = useState([
        {
            _id: "sz_1",
            tenantId: "T-1042",
            name: "Small",
            status: "active",
            centralStatus: "active"
        },
        {
            _id: "sz_2",
            tenantId: "T-1042",
            name: "Medium",
            status: "active",
            centralStatus: "active"
        },
        {
            _id: "sz_3",
            tenantId: "T-1043",
            name: "Large",
            status: "active",
            centralStatus: "inactive"
        },
    ]);

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-12 text-slate-900">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Standard Sizes</h1>
                    <p className="text-sm font-medium mt-1 text-slate-500">Manage global size variants for your inventory items.</p>
                </div>
                <Link
                    href="/dashboard/sizes/add"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#5B45FF] text-white px-5 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-colors text-sm font-semibold shadow-sm cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Add Size Variant
                </Link>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]">
                <div className="relative w-full sm:max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search size name..."
                        className="block w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B45FF]/20 focus:border-[#5B45FF] transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400"
                    />
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.08)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Size Variant</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Tenant ID</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Status (Central / Local)</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {sizes.map((size) => (
                                <tr key={size._id} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 shrink-0 rounded-lg border border-slate-200 flex items-center justify-center bg-slate-50 shadow-sm">
                                                <Ruler className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <div className="font-semibold text-slate-900">{size.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-[#5B45FF] font-mono text-xs">{size.tenantId}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-2 items-start">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] uppercase font-bold text-slate-400 w-4">SA:</span>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${size.centralStatus === 'active'
                                                        ? 'bg-indigo-50 text-indigo-700 border-indigo-100'
                                                        : 'bg-red-50 text-red-700 border-red-100'
                                                    }`}>
                                                    {size.centralStatus}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] uppercase font-bold text-slate-400 w-4">TN:</span>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${size.status === 'active'
                                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                                        : 'bg-slate-100 text-slate-600 border-slate-200'
                                                    }`}>
                                                    {size.status}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <button
                                                className="p-2 text-slate-400 hover:bg-indigo-50 hover:text-[#5B45FF] rounded-lg transition-colors cursor-pointer"
                                                aria-label={`Edit ${size.name}`}
                                            >
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button
                                                className="p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                                                aria-label={`Delete ${size.name}`}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View */}
                <div className="divide-y divide-slate-100 md:hidden bg-white">
                    {sizes.map((size) => (
                        <article key={size._id} className="p-5 flex items-center justify-between">
                            <div>
                                <h2 className="text-sm font-bold text-slate-900">{size.name}</h2>
                                <p className="text-[10px] font-medium text-[#5B45FF] mt-0.5">Tenant: {size.tenantId}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${size.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                                    {size.status}
                                </span>
                                <button className="p-2 text-slate-400 hover:text-[#5B45FF]"><Edit className="h-4 w-4" /></button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}