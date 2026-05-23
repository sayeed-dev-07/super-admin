/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, Fragment } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Layers, ChevronDown, ChevronUp, Image as ImageIcon, Link as LinkIcon } from "lucide-react";

export default function CategoriesPage() {
    const [expandedId, setExpandedId] = useState(null);

    // Dummy data combining Main, Sub, and Child categories using your exact schema
    const [categories] = useState([
        {
            _id: "cat_1",
            tenantId: "T-1042",
            level: "Main",
            name: "Electronics",
            slug: "electronics",
            status: "active",
            centralStatus: "active",
            profileimage: "https://via.placeholder.com/40",
            coverimage: "https://via.placeholder.com/150x50"
        },
        {
            _id: "sub_1",
            tenantId: "T-1042",
            level: "Sub",
            parentName: "Electronics", // Visual helper for the UI
            name: "Audio Equipment",
            slug: "audio-equipment",
            status: "active",
            centralStatus: "active",
            profileimage: "https://via.placeholder.com/40",
            coverimage: ""
        },
        {
            _id: "child_1",
            tenantId: "T-1042",
            level: "Child",
            parentName: "Audio Equipment",
            name: "Wireless Headphones",
            slug: "wireless-headphones",
            status: "inactive",
            centralStatus: "active",
            profileimage: "",
            coverimage: ""
        }
    ]);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-12 text-slate-900">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Master Categories</h1>
                    <p className="text-sm font-medium mt-1 text-slate-500">Manage the global taxonomy hierarchy across all tenants.</p>
                </div>
                <Link 
                    href="/dashboard/categories/add"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#5B45FF] text-white px-5 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-colors text-sm font-semibold shadow-sm cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Add Category
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
                        placeholder="Search categories by name or slug..."
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
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Category Details</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Hierarchy & Slug</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Status (Central / Local)</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {categories.map((category) => (
                                <Fragment key={category._id}>
                                    <tr className={`hover:bg-slate-50/80 transition-colors ${expandedId === category._id ? 'bg-slate-50/50' : ''}`}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                {category.profileimage ? (
                                                    <img 
                                                        src={category.profileimage} 
                                                        alt={category.name} 
                                                        className="h-10 w-10 shrink-0 rounded-lg object-cover border border-slate-200 shadow-sm"
                                                    />
                                                ) : (
                                                    <div className="h-10 w-10 shrink-0 rounded-lg border border-slate-200 flex items-center justify-center bg-slate-50 shadow-sm">
                                                        <Layers className="h-5 w-5 text-slate-400" />
                                                    </div>
                                                )}
                                                <div className="min-w-0">
                                                    <div className="font-semibold text-slate-900 flex items-center gap-2">
                                                        {category.name}
                                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                                            category.level === 'Main' ? 'bg-indigo-50 text-[#5B45FF]' :
                                                            category.level === 'Sub' ? 'bg-sky-50 text-sky-600' : 'bg-slate-100 text-slate-500'
                                                        }`}>
                                                            {category.level}
                                                        </span>
                                                    </div>
                                                    <div className="font-medium text-xs mt-0.5 text-slate-500 flex items-center gap-2">
                                                        <span className="text-[#5B45FF]">Tenant: {category.tenantId}</span> 
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-mono text-slate-700 text-xs mb-1">{category.slug}</div>
                                            {category.parentName && (
                                                <div className="flex items-center gap-1 text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                                                    <LinkIcon className="h-3 w-3" /> Under: {category.parentName}
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-2 items-start">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] uppercase font-bold text-slate-400 w-4">SA:</span>
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                                                        category.centralStatus === 'active' 
                                                        ? 'bg-indigo-50 text-indigo-700 border-indigo-100' 
                                                        : 'bg-red-50 text-red-700 border-red-100'
                                                    }`}>
                                                        {category.centralStatus}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] uppercase font-bold text-slate-400 w-4">TN:</span>
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                                                        category.status === 'active' 
                                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                                                        : 'bg-slate-100 text-slate-600 border-slate-200'
                                                    }`}>
                                                        {category.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    onClick={() => toggleExpand(category._id)}
                                                    className={`p-2 rounded-lg transition-colors ${expandedId === category._id ? 'bg-[#5B45FF]/10 text-[#5B45FF]' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'}`}
                                                    aria-label="View Details"
                                                >
                                                    {expandedId === category._id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                                </button>
                                                <button 
                                                    className="p-2 text-slate-400 hover:bg-indigo-50 hover:text-[#5B45FF] rounded-lg transition-colors cursor-pointer"
                                                    aria-label={`Edit ${category.name}`}
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </button>
                                                <button 
                                                    className="p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                                                    aria-label={`Delete ${category.name}`}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* EXPANDED DETAILS ROW */}
                                    {expandedId === category._id && (
                                        <tr>
                                            <td colSpan="4" className="p-0 border-b border-slate-100 bg-slate-50/50">
                                                <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm border-l-4 border-[#5B45FF]">
                                                    <div className="space-y-3">
                                                        <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Asset: Cover Image</h4>
                                                        {category.coverimage ? (
                                                            <div className="h-24 w-full max-w-sm rounded-lg border border-slate-200 overflow-hidden bg-slate-100 relative group">
                                                                <img src={category.coverimage} alt="Cover" className="w-full h-full object-cover" />
                                                            </div>
                                                        ) : (
                                                            <div className="h-24 w-full max-w-sm rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-slate-400">
                                                                <ImageIcon className="h-6 w-6 mb-1 opacity-50" />
                                                                <span className="text-xs font-medium">No Cover Provided</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="space-y-3">
                                                        <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Internal Reference</h4>
                                                        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                                                            <p><strong className="text-slate-900 font-medium">Tenant Origin:</strong> {category.tenantId}</p>
                                                            <p><strong className="text-slate-900 font-medium">Database ID:</strong> <span className="font-mono text-xs text-[#5B45FF]">{category._id}</span></p>
                                                            <p><strong className="text-slate-900 font-medium">Profile Image URL:</strong> <span className="font-mono text-xs text-slate-500 break-all">{category.profileimage || "null"}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View */}
                <div className="divide-y divide-slate-100 md:hidden bg-white">
                    {categories.map((category) => (
                        <article key={category._id} className="p-5">
                            <div className="flex items-start gap-4 mb-4">
                                {category.profileimage ? (
                                    <img
                                        src={category.profileimage}
                                        alt={category.name}
                                        className="h-12 w-12 shrink-0 rounded-lg border border-slate-200 object-cover shadow-sm"
                                    />
                                ) : (
                                    <div className="h-12 w-12 shrink-0 rounded-lg border border-slate-200 flex items-center justify-center bg-slate-50 shadow-sm">
                                        <Layers className="h-6 w-6 text-slate-400" />
                                    </div>
                                )}
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-sm font-bold leading-tight text-slate-900">
                                            {category.name}
                                        </h2>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                            category.level === 'Main' ? 'bg-indigo-50 text-[#5B45FF]' :
                                            category.level === 'Sub' ? 'bg-sky-50 text-sky-600' : 'bg-slate-100 text-slate-500'
                                        }`}>
                                            {category.level}
                                        </span>
                                    </div>
                                    <p className="mt-1 text-xs font-mono text-slate-500 truncate">{category.slug}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Local Status</p>
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${category.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                                        {category.status}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Central Status</p>
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${category.centralStatus === 'active' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                                        {category.centralStatus}
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-between gap-2">
                                <button
                                    onClick={() => toggleExpand(category._id)}
                                    className="flex-1 inline-flex h-9 items-center justify-center text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg transition-colors hover:bg-slate-50"
                                >
                                    {expandedId === category._id ? 'Hide Details' : 'View Assets'}
                                </button>
                                <div className="flex gap-2">
                                    <button className="inline-flex h-9 w-9 items-center justify-center text-slate-500 bg-white border border-slate-200 rounded-lg hover:text-[#5B45FF] hover:border-indigo-200 transition-colors">
                                        <Edit className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            {/* MOBILE EXPANDED VIEW */}
                            {expandedId === category._id && (
                                <div className="mt-4 p-4 rounded-xl border border-slate-100 bg-slate-50 text-xs text-slate-600 space-y-3">
                                    <p><strong className="text-slate-900 font-medium">Tenant origin:</strong> {category.tenantId}</p>
                                    {category.parentName && (
                                        <p><strong className="text-slate-900 font-medium">Child of:</strong> {category.parentName}</p>
                                    )}
                                    <div className="pt-2 border-t border-slate-200">
                                        <strong className="text-slate-900 font-medium block mb-1">Cover Image URL:</strong>
                                        <p className="font-mono text-[10px] break-all">{category.coverimage || "None provided"}</p>
                                    </div>
                                </div>
                            )}
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {categories.length === 0 && (
                    <div className="p-8 text-center sm:p-16 bg-white">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 mb-4">
                            <Search className="h-6 w-6 text-[#5B45FF]" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">No categories found</h3>
                        <p className="mt-1 text-sm font-medium text-slate-500">Get started by creating a new category hierarchy.</p>
                        <button className="mt-6 inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-semibold shadow-sm">
                            <Plus className="h-4 w-4" />
                            Add Category
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}