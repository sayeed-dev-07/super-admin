/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, MapPin, MoreHorizontal, Building2 } from "lucide-react";

export default function WarehousesPage() {
    // Dummy data updated to strictly match your Figma schema (added tenantId)
    const [warehouses] = useState([
        {
            _id: "wh_001",
            tenantId: "T-1042",
            name: "Main Distribution Center",
            location: "New York, NY, USA",
            status: "active",
            centralStatus: "active",
        },
        {
            _id: "wh_002",
            tenantId: "T-1043",
            name: "West Coast Annex",
            location: "Los Angeles, CA, USA",
            status: "active",
            centralStatus: "inactive",
        },
        {
            _id: "wh_003",
            tenantId: "T-1042",
            name: "European Overflow",
            location: "Frankfurt, Germany",
            status: "inactive",
            centralStatus: "active",
        }
    ]);

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-12 text-slate-900">
            
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Master Warehouses</h1>
                    <p className="text-sm font-medium mt-1 text-slate-500">Manage physical storage locations and global routing hubs.</p>
                </div>
                <Link
                    href="/dashboard/warehouses/add"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#5B45FF] text-white px-5 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-colors text-sm font-semibold shadow-sm cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Add Warehouse
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
                        placeholder="Search warehouses by name or location..."
                        className="block w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B45FF]/20 focus:border-[#5B45FF] transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400"
                    />
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.08)] overflow-hidden">
                
                {/* Desktop View */}
                <div className="hidden overflow-x-auto md:block">
                    <table className="w-full min-w-[760px] text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Warehouse Details</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Geographic Location</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Status (Central / Local)</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {warehouses.map((warehouse) => (
                                <tr key={warehouse._id} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 shrink-0 rounded-lg border border-slate-200 flex items-center justify-center bg-slate-50 shadow-sm">
                                                <Building2 className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="font-semibold text-slate-900">{warehouse.name}</div>
                                                <div className="font-medium text-xs mt-0.5 text-[#5B45FF]">Tenant ID: {warehouse.tenantId}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                                            <MapPin className="h-4 w-4 text-slate-400" />
                                            {warehouse.location}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-2 items-start">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] uppercase font-bold text-slate-400 w-4">SA:</span>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                                                    warehouse.centralStatus === 'active' 
                                                    ? 'bg-indigo-50 text-indigo-700 border-indigo-100' 
                                                    : 'bg-red-50 text-red-700 border-red-100'
                                                }`}>
                                                    {warehouse.centralStatus}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] uppercase font-bold text-slate-400 w-4">TN:</span>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                                                    warehouse.status === 'active' 
                                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                                                    : 'bg-slate-100 text-slate-600 border-slate-200'
                                                }`}>
                                                    {warehouse.status}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <button 
                                                className="p-2 text-slate-400 hover:bg-indigo-50 hover:text-[#5B45FF] rounded-lg transition-colors cursor-pointer"
                                                aria-label={`Edit ${warehouse.name}`}
                                            >
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button 
                                                className="p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                                                aria-label={`Delete ${warehouse.name}`}
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
                    {warehouses.map((warehouse) => (
                        <article key={warehouse._id} className="p-5">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 shrink-0 rounded-lg border border-slate-200 flex items-center justify-center bg-slate-50 shadow-sm">
                                        <Building2 className="h-6 w-6 text-slate-400" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-sm font-bold leading-tight text-slate-900">
                                            {warehouse.name}
                                        </h2>
                                        <p className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-500 truncate">
                                            <MapPin className="h-3 w-3" /> {warehouse.location}
                                        </p>
                                        <p className="mt-1 text-[10px] font-medium text-[#5B45FF] uppercase">Tenant: {warehouse.tenantId}</p>
                                    </div>
                                </div>
                                <button className="p-1 text-slate-400 hover:text-slate-600 rounded-md">
                                    <MoreHorizontal className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Local Status</p>
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${warehouse.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                                        {warehouse.status}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Central Status</p>
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${warehouse.centralStatus === 'active' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                                        {warehouse.centralStatus}
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 border-t border-slate-100 pt-4">
                                <button className="inline-flex h-9 px-4 items-center justify-center text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:text-[#5B45FF] hover:border-indigo-200 transition-colors">
                                    <Edit className="h-4 w-4 mr-2" /> Edit
                                </button>
                                <button className="inline-flex h-9 w-9 items-center justify-center text-slate-400 bg-white border border-slate-200 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors border-transparent">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {warehouses.length === 0 && (
                    <div className="p-8 text-center sm:p-16 bg-white">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 mb-4">
                            <Search className="h-6 w-6 text-[#5B45FF]" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">No warehouses found</h3>
                        <p className="mt-1 text-sm font-medium text-slate-500">Get started by adding a new storage location.</p>
                        <button className="mt-6 inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-semibold shadow-sm">
                            <Plus className="h-4 w-4" />
                            Add Master Warehouse
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}