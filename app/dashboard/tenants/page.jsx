/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Store, BadgeCheck, ShieldAlert } from "lucide-react";

export default function TenantsPage() {
    // Dummy data representing your Tenant schema
    const [tenants] = useState([
        {
            _id: "tenant_001",
            businessName: "TechNova Electronics",
            businessEmail: "admin@technova.com",
            domain: "technova.sellora.com",
            isVerified: true,
            centralStatus: "active",
            logo: "https://via.placeholder.com/40"
        },
        {
            _id: "tenant_002",
            businessName: "Urban Threads",
            businessEmail: "hello@urbanthreads.co",
            domain: "urbanthreads.sellora.com",
            isVerified: false,
            centralStatus: "inactive",
            logo: ""
        }
    ]);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12 text-black">
            {/* Header Section */}
            <div className="flex flex-col gap-4 mb-6 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                    <h1 className="text-2xl font-bold text-black sm:text-3xl">Tenants / Shops</h1>
                    <p className="text-sm font-medium mt-1">Manage platform clients, their verification, and access.</p>
                </div>
                <Link
                    href="/dashboard/tenants/add"
                    className="inline-flex w-full items-center justify-center gap-2 bg-black px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-gray-800 sm:w-auto border border-black cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Add New Shop
                </Link>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-3 sm:p-4 border border-black border-b-0">
                <div className="relative w-full sm:max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-black" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search shops by name or domain..."
                        className="block w-full pl-10 pr-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                    />
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white border border-black overflow-hidden shadow-sm">
                
                {/* Desktop View */}
                <div className="hidden overflow-x-auto md:block">
                    <table className="w-full min-w-[760px] text-left text-sm whitespace-nowrap">
                        <thead className="bg-white border-b border-black text-black">
                            <tr>
                                <th className="px-6 py-4 font-bold border-r border-black">Business / Shop</th>
                                <th className="px-6 py-4 font-bold border-r border-black">Domain</th>
                                <th className="px-6 py-4 font-bold border-r border-black">Verification</th>
                                <th className="px-6 py-4 font-bold border-r border-black">Platform Status</th>
                                <th className="px-6 py-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black">
                            {tenants.map((tenant) => (
                                <tr key={tenant._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 border-r border-black">
                                        <div className="flex items-center gap-3">
                                            {tenant.logo ? (
                                                <img
                                                    src={tenant.logo}
                                                    alt={tenant.businessName}
                                                    className="h-10 w-10 shrink-0 bg-gray-100 object-cover border border-black"
                                                />
                                            ) : (
                                                <div className="h-10 w-10 shrink-0 border border-black flex items-center justify-center bg-gray-100">
                                                    <Store className="h-5 w-5 text-black" />
                                                </div>
                                            )}
                                            <div className="min-w-0">
                                                <div className="font-bold text-black">{tenant.businessName}</div>
                                                <div className="font-medium text-xs mt-0.5">{tenant.businessEmail}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-r border-black font-mono text-xs">{tenant.domain}</td>
                                    <td className="px-6 py-4 border-r border-black">
                                        {tenant.isVerified ? (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-bold uppercase border border-black bg-white text-black">
                                                <BadgeCheck className="h-3.5 w-3.5" /> Verified
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-bold uppercase border border-black bg-gray-200 text-black">
                                                <ShieldAlert className="h-3.5 w-3.5" /> Unverified
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 border-r border-black">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-bold uppercase border border-black ${
                                            tenant.centralStatus === 'active'
                                                ? 'bg-white text-black'
                                                : 'bg-gray-200 text-black'
                                        }`}>
                                            {tenant.centralStatus}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                className="p-2 text-black hover:bg-gray-200 transition-colors border border-transparent hover:border-black cursor-pointer"
                                                aria-label={`Edit ${tenant.businessName}`}
                                            >
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button
                                                className="p-2 text-black hover:bg-gray-200 transition-colors border border-transparent hover:border-black cursor-pointer"
                                                aria-label={`Delete ${tenant.businessName}`}
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
                <div className="divide-y divide-black md:hidden">
                    {tenants.map((tenant) => (
                        <article key={tenant._id} className="bg-white p-4">
                            <div className="flex items-start gap-3">
                                {tenant.logo ? (
                                    <img
                                        src={tenant.logo}
                                        alt={tenant.businessName}
                                        className="h-12 w-12 shrink-0 border border-black bg-gray-100 object-cover"
                                    />
                                ) : (
                                    <div className="h-12 w-12 shrink-0 border border-black flex items-center justify-center bg-gray-100">
                                        <Store className="h-5 w-5 text-black" />
                                    </div>
                                )}
                                <div className="min-w-0 flex-1">
                                    <h2 className="text-sm font-bold leading-5 text-black">
                                        {tenant.businessName}
                                    </h2>
                                    <p className="mt-0.5 break-all text-xs font-medium text-gray-600">{tenant.businessEmail}</p>
                                    <p className="mt-1 break-all text-xs font-mono">{tenant.domain}</p>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-3 text-sm border-t border-black pt-4">
                                <div>
                                    <p className="text-xs font-bold uppercase">Verification</p>
                                    <div className="mt-1">
                                        {tenant.isVerified ? (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-bold uppercase border border-black bg-white text-black">
                                                <BadgeCheck className="h-3.5 w-3.5" /> Verified
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-bold uppercase border border-black bg-gray-200 text-black">
                                                <ShieldAlert className="h-3.5 w-3.5" /> Unverified
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase">Platform Status</p>
                                    <div className="mt-1">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-bold uppercase border border-black ${
                                            tenant.centralStatus === 'active' ? 'bg-white text-black' : 'bg-gray-200 text-black'
                                        }`}>
                                            {tenant.centralStatus}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-end gap-2 border-t border-black pt-4">
                                <button
                                    className="inline-flex h-10 w-10 items-center justify-center text-black transition-colors hover:bg-gray-200 border border-transparent hover:border-black cursor-pointer"
                                    aria-label={`Edit ${tenant.businessName}`}
                                >
                                    <Edit className="h-4 w-4" />
                                </button>
                                <button
                                    className="inline-flex h-10 w-10 items-center justify-center text-black transition-colors hover:bg-gray-200 border border-transparent hover:border-black cursor-pointer"
                                    aria-label={`Delete ${tenant.businessName}`}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {tenants.length === 0 && (
                    <div className="p-8 text-center sm:p-12 bg-white">
                        <div className="inline-flex items-center justify-center w-12 h-12 border border-black bg-gray-100 mb-4">
                            <Search className="h-6 w-6 text-black" />
                        </div>
                        <h3 className="text-sm font-bold text-black">No tenants found</h3>
                        <p className="mt-1 text-sm font-medium">Get started by registering a new shop.</p>
                    </div>
                )}
            </div>
        </div>
    );
}