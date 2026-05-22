"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Tag } from "lucide-react";

export default function BrandsPage() {
    const [brands, setBrands] = useState([
        {
            _id: "brand_001",
            name: "Nike",
            slug: "nike",
            status: "active",
            centralStatus: "active",
            profileimage: "https://via.placeholder.com/40/000000/FFFFFF?text=N"
        },
        {
            _id: "brand_002",
            name: "Adidas",
            slug: "adidas",
            status: "inactive",
            centralStatus: "active",
            profileimage: "https://via.placeholder.com/40/000000/FFFFFF?text=A"
        }
    ]);

    return (
        <div className="max-w-7xl mx-auto text-black">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-black">Brands</h1>
                    <p className="text-sm font-medium mt-1">Manage product manufacturers and brands.</p>
                </div>
                <Link
                    href="/dashboard/brands/add"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2.5 hover:bg-gray-800 transition-colors text-sm font-bold whitespace-nowrap border border-black cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Add Brand
                </Link>
            </div>

            <div className="bg-white p-4 border border-black border-b-0 flex items-center justify-between">
                <div className="relative w-full max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-black" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search brands..."
                        className="block w-full pl-10 pr-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white text-black font-medium cursor-text"
                    />
                </div>
            </div>

            <div className="bg-white border border-black overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-white border-b border-black text-black">
                            <tr>
                                <th className="px-6 py-4 font-bold border-r border-black">Brand Details</th>
                                <th className="px-6 py-4 font-bold border-r border-black">Slug</th>
                                <th className="px-6 py-4 font-bold border-r border-black">Shop Status</th>
                                <th className="px-6 py-4 font-bold border-r border-black">Central Status</th>
                                <th className="px-6 py-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black">
                            {brands.map((brand) => (
                                <tr key={brand._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 border-r border-black">
                                        <div className="flex items-center gap-3">
                                            {brand.profileimage ? (
                                                <img src={brand.profileimage} alt={brand.name} className="w-10 h-10 object-cover border border-black" />
                                            ) : (
                                                <div className="w-10 h-10 border border-black flex items-center justify-center bg-gray-100">
                                                    <Tag className="h-5 w-5" />
                                                </div>
                                            )}
                                            <div className="font-bold text-black">{brand.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-r border-black font-medium">{brand.slug}</td>
                                    <td className="px-6 py-4 border-r border-black font-bold uppercase">{brand.status}</td>
                                    <td className="px-6 py-4 border-r border-black font-bold uppercase">{brand.centralStatus}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-black hover:bg-gray-200 transition-colors border border-transparent hover:border-black cursor-pointer">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="p-2 text-black hover:bg-gray-200 transition-colors border border-transparent hover:border-black cursor-pointer">
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