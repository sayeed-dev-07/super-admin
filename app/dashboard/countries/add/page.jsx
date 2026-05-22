"use client";

import { useState } from "react";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AddCountryPage() {
    const [formData, setFormData] = useState({ name: "", code: "", status: "active", centralStatus: "active" });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => { alert("Country saved!"); setIsLoading(false); }, 1000);
    };

    return (
        <div className="max-w-2xl mx-auto text-black">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/countries" className="text-black hover:opacity-70 transition-opacity cursor-pointer">
                        <ArrowLeft className="h-5 w-5 cursor-pointer" />
                    </Link>
                    <h1 className="text-2xl font-bold text-black">Add Country</h1>
                </div>
                <button onClick={handleSubmit} disabled={isLoading} className="flex items-center gap-2 bg-black text-white px-5 py-2.5 hover:bg-gray-800 transition-colors text-sm font-bold border border-black cursor-pointer">
                    <Save className="h-4 w-4 cursor-pointer" /> Save Country
                </button>
            </div>

            <form className="space-y-6">
                <div className="bg-white p-6 border border-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold mb-1">Country Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. United Kingdom" className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">ISO Code (2 Letters)</label>
                            <input type="text" name="code" value={formData.code} onChange={handleChange} placeholder="e.g. GB" className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Shop Status</label>
                            <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-pointer">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Central Status</label>
                            <select name="centralStatus" value={formData.centralStatus} onChange={handleChange} className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-pointer">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}