"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function SizesPage() {
    const [sizes, setSizes] = useState([
        { _id: "sz_1", name: "Small", status: "active", centralStatus: "active" },
        { _id: "sz_2", name: "Medium", status: "active", centralStatus: "active" },
        { _id: "sz_3", name: "Large", status: "active", centralStatus: "active" },
    ]);

    return (
        <div className="max-w-4xl mx-auto text-black">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-black">Sizes</h1>
                    <p className="text-sm font-medium mt-1">Manage standard sizes for your inventories.</p>
                </div>
                <Link
                    href="/dashboard/sizes/add"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2.5 hover:bg-gray-800 transition-colors text-sm font-bold whitespace-nowrap border border-black cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Add Size
                </Link>
            </div>

            <div className="bg-white border border-black overflow-hidden">
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-white border-b border-black text-black">
                        <tr>
                            <th className="px-6 py-4 font-bold border-r border-black">Size Name</th>
                            <th className="px-6 py-4 font-bold border-r border-black">Status</th>
                            <th className="px-6 py-4 font-bold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-black">
                        {sizes.map((size) => (
                            <tr key={size._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 border-r border-black font-bold">{size.name}</td>
                                <td className="px-6 py-4 border-r border-black font-bold uppercase">{size.status}</td>
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
    );
}