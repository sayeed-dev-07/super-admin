"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Box } from "lucide-react";

export default function InventoriesPage() {
    // Dummy data representing your Inventory schema
    const [inventories, setInventories] = useState([
        {
            _id: "inv_001",
            sku: "TSHIRT-BLK-M",
            warehouseId: "East Coast Hub",
            size: "Medium",
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
        <div className="max-w-7xl mx-auto text-black">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-black">Inventories</h1>
                    <p className="text-sm font-medium mt-1">Manage stock levels, SKUs, and pricing.</p>
                </div>
                <Link
                    href="/dashboard/inventories/add"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2.5 hover:bg-gray-800 transition-colors text-sm font-bold whitespace-nowrap border border-black"
                >
                    <Plus className="h-4 w-4" />
                    Add Inventory
                </Link>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 border border-black border-b-0 flex items-center justify-between">
                <div className="relative w-full max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-black" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by SKU or Color..."
                        className="block w-full pl-10 pr-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white text-black font-medium"
                    />
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white border border-black overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-white border-b border-black text-black">
                            <tr>
                                <th className="px-6 py-4 font-bold border-r border-black">SKU / Color</th>
                                <th className="px-6 py-4 font-bold border-r border-black">Warehouse & Size</th>
                                <th className="px-6 py-4 font-bold border-r border-black">Pricing (Cost / Base)</th>
                                <th className="px-6 py-4 font-bold border-r border-black">Stock</th>
                                <th className="px-6 py-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black">
                            {inventories.map((item) => (
                                <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 border-r border-black">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.colorImage}
                                                alt={item.color}
                                                className="w-10 h-10 bg-gray-100 object-cover border border-black"
                                            />
                                            <div>
                                                <div className="font-bold text-black">{item.sku}</div>
                                                <div className="font-medium text-xs mt-0.5">{item.color}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-r border-black">
                                        <div className="font-bold">{item.warehouseId}</div>
                                        <div className="font-medium text-xs mt-0.5">Size: {item.size}</div>
                                    </td>
                                    <td className="px-6 py-4 border-r border-black">
                                        <div className="font-bold">${item.basePrice.toFixed(2)}</div>
                                        <div className="font-medium text-xs mt-0.5">Cost: ${item.productPurchasePrice.toFixed(2)}</div>
                                    </td>
                                    <td className="px-6 py-4 border-r border-black font-bold">
                                        {item.productOpeningStock} units
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-black hover:bg-gray-200 transition-colors border border-transparent hover:border-black">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="p-2 text-black hover:bg-gray-200 transition-colors border border-transparent hover:border-black">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}