/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Languages, MoreHorizontal } from "lucide-react";

export default function LanguagesPage() {
    // Dummy data matching your schema
    const [languages] = useState([
        { _id: "lang_1", name: "English", code: "en", centralStatus: "active" },
        { _id: "lang_2", name: "Spanish", code: "es", centralStatus: "active" },
        { _id: "lang_3", name: "French", code: "fr", centralStatus: "inactive" },
    ]);

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-12 text-slate-900">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Platform Languages</h1>
                    <p className="text-sm font-medium mt-1 text-slate-500">Manage global languages available for store localization.</p>
                </div>
                <Link
                    href="/dashboard/languages/add"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#5B45FF] text-white px-5 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-colors text-sm font-semibold shadow-sm cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Add Language
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
                        placeholder="Search language name or code..."
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
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Language</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">ISO Code</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Central Status</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {languages.map((language) => (
                                <tr key={language._id} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 shrink-0 rounded-lg border border-slate-200 flex items-center justify-center bg-slate-50 shadow-sm">
                                                <Languages className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <div className="font-semibold text-slate-900">{language.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-mono font-bold text-slate-700 uppercase">{language.code}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                                            language.centralStatus === 'active' 
                                            ? 'bg-indigo-50 text-indigo-700 border-indigo-100' 
                                            : 'bg-red-50 text-red-700 border-red-100'
                                        }`}>
                                            {language.centralStatus}
                                        </span>
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
                    {languages.map((language) => (
                        <article key={language._id} className="p-5 flex items-center justify-between">
                            <div>
                                <h2 className="text-sm font-bold text-slate-900">{language.name}</h2>
                                <p className="text-xs font-mono text-slate-500 mt-0.5 uppercase">{language.code}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${language.centralStatus === 'active' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                                    {language.centralStatus}
                                </span>
                                <button className="p-2 text-slate-400 hover:text-[#5B45FF]"><MoreHorizontal className="h-4 w-4"/></button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}