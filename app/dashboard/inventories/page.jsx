/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Box, MoreHorizontal, Filter } from "lucide-react";

export default function InventoriesPage() {
    // Dummy data representing your Inventory schema
    const [inventories, setInventories] = useState([
        {
            _id: "inv_001",
            sku: "TSHIRT-BLK-M",
            warehouseId: "East Coast Hub", // Simulated objID relation
            size: "Medium", // Simulated objID relation
            color: "Black",
            productOpeningStock: 150,
            basePrice: 29.99,
            productPurchasePrice: 12.00,
            colorImage: "https://via.placeholder.com/40/000000/FFFFFF?text=B"
        },
        {
            _id: "inv_002",
            sku: "TSHIRT-WHT-L",
            warehouseId: "West Coast Annex",
            size: "Large",
            color: "White",
            productOpeningStock: 45,
            basePrice: 29.99,
            productPurchasePrice: 12.00,
            colorImage: "https://via.placeholder.com/40/FFFFFF/000000?text=W"
        }
    ]);

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-12 text-slate-900">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Master Inventories</h1>
                    <p className="text-sm font-medium mt-1 text-slate-500">Manage global stock levels, SKU variants, and pricing across warehouses.</p>
                </div>
                <Link
                    href="/dashboard/inventories/add"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#5B45FF] text-white px-5 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-colors text-sm font-semibold shadow-sm cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Add Inventory
                </Link>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] flex flex-col sm:flex-row gap-3 justify-between items-center">
                <div className="relative w-full sm:max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by SKU, Color, or Warehouse..."
                        className="block w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B45FF]/20 focus:border-[#5B45FF] transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400"
                    />
                </div>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-[#5B45FF] transition-colors text-sm font-medium">
                    <Filter className="h-4 w-4" />
                    Filter Stock
                </button>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.08)] overflow-hidden">

                {/* Desktop View */}
                <div className="hidden overflow-x-auto md:block">
                    <table className="w-full min-w-[760px] text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">SKU / Color Variant</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Warehouse & Size</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Pricing (Base / Cost)</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Opening Stock</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {inventories.map((item) => (
                                <tr key={item._id} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={item.colorImage}
                                                alt={item.color}
                                                className="w-10 h-10 rounded-lg bg-slate-100 object-cover border border-slate-200 shadow-sm"
                                            />
                                            <div className="min-w-0">
                                                <div className="font-semibold text-slate-900 font-mono text-sm">{item.sku}</div>
                                                <div className="font-medium text-xs mt-0.5 text-[#5B45FF]">Color: {item.color}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-slate-700">{item.warehouseId}</div>
                                        <div className="font-medium text-xs mt-0.5 text-slate-500 flex items-center gap-1.5">
                                            <Box className="h-3 w-3" /> Size: {item.size}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-900">${item.basePrice.toFixed(2)}</div>
                                        <div className="font-medium text-xs mt-0.5 text-slate-500">Cost: ${item.productPurchasePrice.toFixed(2)}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-bold tracking-wider border ${item.productOpeningStock > 50
                                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                            : 'bg-amber-50 text-amber-700 border-amber-100'
                                            }`}>
                                            {item.productOpeningStock} units
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <button
                                                className="p-2 text-slate-400 hover:bg-indigo-50 hover:text-[#5B45FF] rounded-lg transition-colors cursor-pointer"
                                                aria-label={`Edit ${item.sku}`}
                                            >
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button
                                                className="p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                                                aria-label={`Delete ${item.sku}`}
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
                    {inventories.map((item) => (
                        <article key={item._id} className="p-5">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.colorImage}
                                        alt={item.color}
                                        className="h-12 w-12 shrink-0 rounded-lg border border-slate-200 object-cover shadow-sm"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-sm font-bold leading-tight text-slate-900 font-mono">
                                            {item.sku}
                                        </h2>
                                        <p className="mt-1 text-xs font-medium text-[#5B45FF]">Color: {item.color}</p>
                                    </div>
                                </div>
                                <button className="p-1 text-slate-400 hover:text-slate-600 rounded-md">
                                    <MoreHorizontal className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Warehouse</p>
                                    <p className="font-semibold text-slate-800 text-xs truncate">{item.warehouseId}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Size</p>
                                    <p className="font-semibold text-slate-800 text-xs">{item.size}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pricing (Base / Cost)</p>
                                    <p className="font-semibold text-slate-800 text-xs">${item.basePrice.toFixed(2)} <span className="text-slate-400 font-normal">/ ${item.productPurchasePrice.toFixed(2)}</span></p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Opening Stock</p>
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border ${item.productOpeningStock > 50
                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                        : 'bg-amber-50 text-amber-700 border-amber-100'
                                        }`}>
                                        {item.productOpeningStock} units
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
                {inventories.length === 0 && (
                    <div className="p-8 text-center sm:p-16 bg-white">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 mb-4">
                            <Box className="h-6 w-6 text-[#5B45FF]" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">No inventory found</h3>
                        <p className="mt-1 text-sm font-medium text-slate-500">Get started by allocating stock to a warehouse.</p>
                        <button className="mt-6 inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-semibold shadow-sm">
                            <Plus className="h-4 w-4" />
                            Add Inventory
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}