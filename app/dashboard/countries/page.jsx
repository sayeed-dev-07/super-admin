"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Globe } from "lucide-react";

export default function CountriesPage() {
    const [countries, setCountries] = useState([
        { _id: "ctry_1", name: "United States", code: "US", status: "active", centralStatus: "active" },
        { _id: "ctry_2", name: "Canada", code: "CA", status: "active", centralStatus: "active" },
    ]);

    return (
        <div className="max-w-5xl mx-auto text-black">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-black">Countries</h1>
                    <p className="text-sm font-medium mt-1">Manage countries available to shops on the platform.</p>
                </div>
                <Link
                    href="/dashboard/countries/add"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2.5 hover:bg-gray-800 transition-colors text-sm font-bold whitespace-nowrap border border-black cursor-pointer"
                >
                    <Plus className="h-4 w-4 cursor-pointer" />
                    Add Country
                </Link>
            </div>

            <div className="bg-white border border-black overflow-hidden">
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-white border-b border-black text-black">
                        <tr>
                            <th className="px-6 py-4 font-bold border-r border-black">Country</th>
                            <th className="px-6 py-4 font-bold border-r border-black">ISO Code</th>
                            <th className="px-6 py-4 font-bold border-r border-black">Shop Status</th>
                            <th className="px-6 py-4 font-bold border-r border-black">Central Status</th>
                            <th className="px-6 py-4 font-bold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-black">
                        {countries.map((country) => (
                            <tr key={country._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 border-r border-black">
                                    <div className="flex items-center gap-3">
                                        <Globe className="h-5 w-5" />
                                        <span className="font-bold">{country.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 border-r border-black font-bold">{country.code}</td>
                                <td className="px-6 py-4 border-r border-black font-bold uppercase">{country.status}</td>
                                <td className="px-6 py-4 border-r border-black font-bold uppercase">{country.centralStatus}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 text-black hover:bg-gray-200 transition-colors border border-transparent hover:border-black cursor-pointer">
                                            <Edit className="h-4 w-4 cursor-pointer" />
                                        </button>
                                        <button className="p-2 text-black hover:bg-gray-200 transition-colors border border-transparent hover:border-black cursor-pointer">
                                            <Trash2 className="h-4 w-4 cursor-pointer" />
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