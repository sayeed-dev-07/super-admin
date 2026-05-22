"use client";

import { useState } from "react";
import { Save, ArrowLeft, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function AddTenantPage() {
    const [isLoading, setIsLoading] = useState(false);

    // Main Form State mapping to your Tenant schema
    const [formData, setFormData] = useState({
        businessName: "",
        businessEmail: "",
        businessPhone: "",
        domain: "",
        logo: "",
        isVerified: false,
        centralStatus: "active",
        supportedLanguages: [],
        supportedCurrency: [],
        seoMetaTitle: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleArrayChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value.split(",").map(i => i.trim()) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const token = localStorage.getItem("admin_token");
            console.log("Sending Tenant payload:", formData);

            // Simulate network request
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert("Tenant/Shop saved successfully!");

        } catch (error) {
            console.error("Error saving tenant:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto text-black">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/tenants" className="text-black hover:opacity-70 transition-opacity cursor-pointer">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="text-2xl font-bold text-black">Register New Shop</h1>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex items-center gap-2 bg-black text-white px-5 py-2.5 hover:bg-gray-800 disabled:opacity-70 transition-colors text-sm font-bold border border-black cursor-pointer"
                >
                    <Save className="h-4 w-4" />
                    {isLoading ? "Saving..." : "Save Shop"}
                </button>
            </div>

            <form className="space-y-6">
                {/* Contact & Basic Info */}
                <div className="bg-white p-6 border border-black">
                    <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 text-black">Business Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold mb-1">Business Name</label>
                            <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                                placeholder="e.g. Acme Corp"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Sub-Domain</label>
                            <input
                                type="text"
                                name="domain"
                                value={formData.domain}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-mono cursor-text"
                                placeholder="acme.sellora.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Business Email</label>
                            <input
                                type="email"
                                name="businessEmail"
                                value={formData.businessEmail}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                                placeholder="admin@acme.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Business Phone</label>
                            <input
                                type="text"
                                name="businessPhone"
                                value={formData.businessPhone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                                placeholder="+1 234 567 8900"
                            />
                        </div>
                    </div>
                </div>

                {/* Localization & Settings */}
                <div className="bg-white p-6 border border-black">
                    <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 text-black">Localization & Branding</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold mb-1">Supported Languages (Comma Separated)</label>
                            <input
                                type="text"
                                name="supportedLanguages"
                                onChange={handleArrayChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                                placeholder="EN, ES, FR"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Supported Currencies (Comma Separated)</label>
                            <input
                                type="text"
                                name="supportedCurrency"
                                onChange={handleArrayChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                                placeholder="USD, EUR, GBP"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold mb-1">Logo URL</label>
                            <input
                                type="text"
                                name="logo"
                                value={formData.logo}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                                placeholder="https://example.com/logo.png"
                            />
                        </div>
                    </div>
                </div>

                {/* Superadmin Controls */}
                <div className="bg-gray-100 p-6 border border-black">
                    <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 flex items-center gap-2 text-black">
                        <ShieldAlert className="h-5 w-5 text-black" />
                        Superadmin Privileges
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3 bg-white p-4 border border-black">
                            <input
                                type="checkbox"
                                name="isVerified"
                                id="isVerified"
                                checked={formData.isVerified}
                                onChange={handleChange}
                                className="h-5 w-5 border-black focus:ring-black text-black cursor-pointer"
                            />
                            <label htmlFor="isVerified" className="text-sm font-bold text-black cursor-pointer">
                                Shop is Officially Verified
                                <span className="block text-xs font-medium text-gray-700 mt-0.5">Grants the verified badge on the frontend.</span>
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-1 text-black">Central Platform Status</label>
                            <select
                                name="centralStatus"
                                value={formData.centralStatus}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-pointer"
                            >
                                <option value="active">Active (Shop is live)</option>
                                <option value="inactive">Inactive (Shop is suspended)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}