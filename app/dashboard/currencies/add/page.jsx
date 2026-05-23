"use client";

import { useState } from "react";
import { Save, ArrowLeft, Coins, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function AddCurrencyPage() {
    const [isLoading, setIsLoading] = useState(false);

    // Form state matching your Currency schema
    const [formData, setFormData] = useState({
        name: "",
        cc: "",
        symbol: "",
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
            console.log("Sending currency payload:", formData);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert("Currency saved successfully!");
        } catch (error) {
            console.error("Error saving currency:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-20 text-slate-900">
            
            {/* Header Sticky Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 bg-slate-50/80 backdrop-blur-md z-20 py-4 border-b border-slate-200 -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard/currencies" className="p-2 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-[#5B45FF] transition-colors shadow-sm cursor-pointer">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">Add Currency</h1>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">Register a new global currency for the platform.</p>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 bg-[#5B45FF] text-white px-6 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-all font-semibold shadow-lg shadow-indigo-200 disabled:opacity-50 cursor-pointer"
                >
                    <Save className="h-4 w-4" />
                    {isLoading ? "Processing..." : "Save Currency"}
                </button>
            </div>

            <form className="space-y-8 mt-6">
                {/* Identification Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                        <Coins className="h-4 w-4" /> Currency Definition
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <Input 
                                label="Currency Name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="e.g. Japanese Yen" 
                            />
                        </div>
                        <Input 
                            label="Currency Code (CC)" 
                            name="cc" 
                            value={formData.cc} 
                            onChange={handleChange} 
                            placeholder="e.g. JPY" 
                            className="font-mono text-sm"
                        />
                        <Input 
                            label="Symbol" 
                            name="symbol" 
                            value={formData.symbol} 
                            onChange={handleChange} 
                            placeholder="e.g. ¥" 
                        />
                    </div>
                </div>

                {/* Status Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                        <ShieldAlert className="h-4 w-4" /> Visibility Controls
                    </h3>
                    
                    <div>
                        <label className=" text-sm font-semibold text-slate-700 mb-1.5 flex items-center justify-between">
                            Central Master Status
                            <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase tracking-wider">Superadmin</span>
                        </label>
                        <select
                            name="centralStatus"
                            value={formData.centralStatus}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B45FF]/20 focus:border-[#5B45FF] transition-all text-sm font-medium text-slate-900 cursor-pointer"
                        >
                            <option value="active">Active (Globally Available)</option>
                            <option value="inactive">Inactive (Globally Disabled)</option>
                        </select>
                        <p className="text-xs font-medium text-slate-500 mt-2">Overrides individual shop settings across the platform.</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

// Reusable UI Components
const Input = ({ label, name, value, onChange, placeholder, type = "text", className = "" }) => (
    <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B45FF]/20 focus:border-[#5B45FF] transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400 ${className}`}
        />
    </div>
);