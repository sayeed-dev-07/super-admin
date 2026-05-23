"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Globe, Filter } from "lucide-react";

export default function CountriesPage() {
    // Dummy data matching your schema (added tenantId)
    const [countries] = useState([
        { _id: "ctry_1", tenantId: "T-1042", name: "United States", code: "US", status: "active", centralStatus: "active" },
        { _id: "ctry_2", tenantId: "T-1042", name: "Canada", code: "CA", status: "active", centralStatus: "active" },
        { _id: "ctry_3", tenantId: "T-1043", name: "Germany", code: "DE", status: "active", centralStatus: "inactive" },
    ]);

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-12 text-slate-900">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Master Countries</h1>
                    <p className="text-sm font-medium mt-1 text-slate-500">Manage global market availability and platform-wide regional settings.</p>
                </div>
                <Link
                    href="/dashboard/countries/add"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#5B45FF] text-white px-5 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-colors text-sm font-semibold shadow-sm cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Add Country
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
                        placeholder="Search countries..."
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
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Country Details</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">ISO Code</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Status (Central / Local)</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {countries.map((country) => (
                                <tr key={country._id} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 shrink-0 rounded-lg border border-slate-200 flex items-center justify-center bg-slate-50 shadow-sm">
                                                <Globe className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-slate-900">{country.name}</div>
                                                <div className="font-medium text-xs mt-0.5 text-[#5B45FF]">Tenant: {country.tenantId}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-mono font-bold text-slate-700">{country.code}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-2 items-start">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] uppercase font-bold text-slate-400 w-4">SA:</span>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                                                    country.centralStatus === 'active' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' : 'bg-red-50 text-red-700 border-red-100'
                                                }`}>
                                                    {country.centralStatus}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] uppercase font-bold text-slate-400 w-4">TN:</span>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                                                    country.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-slate-100 text-slate-600 border-slate-200'
                                                }`}>
                                                    {country.status}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <button className="p-2 text-slate-400 hover:bg-indigo-50 hover:text-[#5B45FF] rounded-lg transition-colors cursor-pointer" aria-label="Edit">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors cursor-pointer" aria-label="Delete">
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
                    {countries.map((country) => (
                        <article key={country._id} className="p-5 flex items-center justify-between">
                            <div>
                                <h2 className="text-sm font-bold text-slate-900">{country.name}</h2>
                                <p className="text-[10px] font-mono text-slate-500 mt-0.5">Code: {country.code}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${country.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                                    {country.status}
                                </span>
                                <button className="p-2 text-slate-400 hover:text-[#5B45FF]"><Edit className="h-4 w-4"/></button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}