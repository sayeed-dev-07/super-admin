"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, MapPin } from "lucide-react";

export default function WarehousesPage() {
    // Dummy data representing your Warehouse schema
    const [warehouses, setWarehouses] = useState([
        {
            _id: "wh_001",
            name: "Main Distribution Center",
            location: "New York, NY",
            status: "active",
            centralStatus: "active",
        },
        {
            _id: "wh_002",
            name: "West Coast Annex",
            location: "Los Angeles, CA",
            status: "active",
            centralStatus: "inactive",
        }
    ]);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12 text-black">
            {/* Header Section */}
            <div className="flex flex-col gap-4 mb-6 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                    <h1 className="text-2xl font-bold text-black sm:text-3xl">Warehouses</h1>
                    <p className="text-sm font-medium mt-1">Manage physical storage locations across the platform.</p>
                </div>
                <Link
                    href="/dashboard/warehouses/add"
                    className="inline-flex w-full items-center justify-center gap-2 bg-black px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-gray-800 sm:w-auto border border-black cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Add Warehouse
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
                        placeholder="Search warehouses by name or location..."
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
                                <th className="px-6 py-4 font-bold border-r border-black">Warehouse Name</th>
                                <th className="px-6 py-4 font-bold border-r border-black">Location</th>
                                <th className="px-6 py-4 font-bold border-r border-black">Shop Status</th>
                                <th className="px-6 py-4 font-bold border-r border-black">Central Status</th>
                                <th className="px-6 py-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black">
                            {warehouses.map((warehouse) => (
                                <tr key={warehouse._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 border-r border-black">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 shrink-0 border border-black flex items-center justify-center bg-gray-100">
                                                <MapPin className="h-5 w-5 text-black" />
                                            </div>
                                            <div className="font-bold text-black">{warehouse.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-r border-black font-bold">{warehouse.location}</td>
                                    <td className="px-6 py-4 border-r border-black">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-bold uppercase border border-black ${
                                            warehouse.status === 'active' 
                                                ? 'bg-white text-black' 
                                                : 'bg-gray-200 text-black'
                                        }`}>
                                            {warehouse.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 border-r border-black">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-bold uppercase border border-black ${
                                            warehouse.centralStatus === 'active' 
                                                ? 'bg-white text-black' 
                                                : 'bg-gray-200 text-black'
                                        }`}>
                                            {warehouse.centralStatus}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button 
                                                className="p-2 text-black hover:bg-gray-200 transition-colors border border-transparent hover:border-black cursor-pointer"
                                                aria-label={`Edit ${warehouse.name}`}
                                            >
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button 
                                                className="p-2 text-black hover:bg-gray-200 transition-colors border border-transparent hover:border-black cursor-pointer"
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
                <div className="divide-y divide-black md:hidden">
                    {warehouses.map((warehouse) => (
                        <article key={warehouse._id} className="bg-white p-4">
                            <div className="flex items-start gap-3">
                                <div className="h-12 w-12 shrink-0 border border-black flex items-center justify-center bg-gray-100">
                                    <MapPin className="h-6 w-6 text-black" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h2 className="text-sm font-bold leading-5 text-black">
                                        {warehouse.name}
                                    </h2>
                                    <p className="mt-0.5 break-all text-xs font-bold text-gray-700">{warehouse.location}</p>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-3 text-sm border-t border-black pt-4">
                                <div>
                                    <p className="text-xs font-bold uppercase">Shop Status</p>
                                    <div className="mt-1">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-bold uppercase border border-black ${warehouse.status === 'active' ? 'bg-white text-black' : 'bg-gray-200 text-black'}`}>
                                            {warehouse.status}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase">Central Status</p>
                                    <div className="mt-1">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-bold uppercase border border-black ${warehouse.centralStatus === 'active' ? 'bg-white text-black' : 'bg-gray-200 text-black'}`}>
                                            {warehouse.centralStatus}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-end gap-2 border-t border-black pt-4">
                                <button
                                    className="inline-flex h-10 w-10 items-center justify-center text-black transition-colors hover:bg-gray-200 border border-transparent hover:border-black cursor-pointer"
                                    aria-label={`Edit ${warehouse.name}`}
                                >
                                    <Edit className="h-4 w-4" />
                                </button>
                                <button
                                    className="inline-flex h-10 w-10 items-center justify-center text-black transition-colors hover:bg-gray-200 border border-transparent hover:border-black cursor-pointer"
                                    aria-label={`Delete ${warehouse.name}`}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {warehouses.length === 0 && (
                    <div className="p-8 text-center sm:p-12 bg-white">
                        <div className="inline-flex items-center justify-center w-12 h-12 border border-black bg-gray-100 mb-4">
                            <Search className="h-6 w-6 text-black" />
                        </div>
                        <h3 className="text-sm font-bold text-black">No warehouses found</h3>
                        <p className="mt-1 text-sm font-medium">Get started by adding a new warehouse location.</p>
                    </div>
                )}
            </div>
        </div>
    );
}