"use client";

import { useState } from "react";
import { Save, ArrowLeft, Building2 } from "lucide-react";
import Link from "next/link";

export default function AddWarehousePage() {
    const [isLoading, setIsLoading] = useState(false);

    // Form state matching your Warehouse schema
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        status: "active",
        centralStatus: "active",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const token = localStorage.getItem("admin_token");
            console.log("Sending warehouse payload:", formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert("Warehouse saved successfully!");

        } catch (error) {
            console.error("Error saving warehouse:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto text-black">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/warehouses" className="text-black hover:opacity-70 transition-opacity cursor-pointer">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="text-2xl font-bold text-black">Add New Warehouse</h1>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex items-center gap-2 bg-black text-white px-5 py-2.5 hover:bg-gray-800 disabled:opacity-70 transition-colors text-sm font-bold border border-black cursor-pointer"
                >
                    <Save className="h-4 w-4" />
                    {isLoading ? "Saving..." : "Save Warehouse"}
                </button>
            </div>

            <form className="space-y-6">
                {/* Basic Info */}
                <div className="bg-white p-6 border border-black">
                    <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 flex items-center gap-2 text-black">
                        <Building2 className="h-5 w-5 text-black" />
                        Warehouse Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold mb-1">Warehouse Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. East Coast Hub"
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Location / Address</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="e.g. Miami, FL"
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                            />
                        </div>
                    </div>
                </div>

                {/* Statuses */}
                <div className="bg-white p-6 border border-black">
                    <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 text-black">Platform Status</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold mb-1">Shop Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-pointer"
                            >
                                <option value="active">Active (Receiving stock)</option>
                                <option value="inactive">Inactive (Closed)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Central Status (Superadmin)</label>
                            <select
                                name="centralStatus"
                                value={formData.centralStatus}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-pointer"
                            >
                                <option value="active">Active (Visible globally)</option>
                                <option value="inactive">Inactive (Hidden globally)</option>
                            </select>
                            <p className="text-xs font-medium text-gray-500 mt-1">Overrides individual shop status.</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}