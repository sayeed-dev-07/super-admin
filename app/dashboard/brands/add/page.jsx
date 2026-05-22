"use client";

import { useState } from "react";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AddBrandPage() {
    const [formData, setFormData] = useState({ name: "", slug: "", profileimage: "", status: "active", centralStatus: "active" });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => { alert("Brand saved!"); setIsLoading(false); }, 1000);
    };

    return (
        <div className="max-w-3xl mx-auto text-black">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/brands" className="text-black hover:opacity-70 transition-opacity cursor-pointer">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="text-2xl font-bold text-black">Add Brand</h1>
                </div>
                <button onClick={handleSubmit} disabled={isLoading} className="flex items-center gap-2 bg-black text-white px-5 py-2.5 hover:bg-gray-800 disabled:opacity-70 transition-colors text-sm font-bold border border-black cursor-pointer">
                    <Save className="h-4 w-4" /> Save Brand
                </button>
            </div>

            <form className="space-y-6">
                <div className="bg-white p-6 border border-black">
                    <h2 className="text-lg font-bold border-b border-black pb-2 mb-4">Brand Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold mb-1">Brand Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Slug</label>
                            <input type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold mb-1">Profile Image URL</label>
                            <input type="text" name="profileimage" value={formData.profileimage} onChange={handleChange} className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text" />
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