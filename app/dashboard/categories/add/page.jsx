"use client";

import { useState } from "react";
import { Save, ArrowLeft, Layers, Image as ImageIcon, ShieldAlert, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function AddCategoryPage() {
    const [isLoading, setIsLoading] = useState(false);

    // Dummy data simulating fetched parent categories
    const [availableParents] = useState([
        { _id: "cat_1", name: "Electronics (Main)", level: "Main" },
        { _id: "cat_2", name: "Clothing (Main)", level: "Main" },
        { _id: "sub_1", name: "Menswear (Sub)", level: "Sub" },
    ]);

    // Form state mapping to your unified Category schema
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        level: "Main", // Main, Sub, or Child
        parentCategory: "", // objID if level is Sub or Child
        profileimage: "",
        coverimage: "",
        status: "active",
        centralStatus: "active",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const updates = { ...prev, [name]: value };
            // Auto-clear parent if switched back to Main
            if (name === "level" && value === "Main") {
                updates.parentCategory = "";
            }
            return updates;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("Sending category payload:", formData);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert("Category hierarchy saved successfully!");
        } catch (error) {
            console.error("Error saving category:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-20 text-slate-900">
            {/* Header Sticky Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 bg-slate-50/80 backdrop-blur-md z-20 py-4 border-b border-slate-200 -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard/categories" className="p-2 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-[#5B45FF] transition-colors shadow-sm cursor-pointer">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">Add Taxonomy Node</h1>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">Create a new category, sub-category, or child-category.</p>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 bg-[#5B45FF] text-white px-6 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-all font-semibold shadow-lg shadow-indigo-200 disabled:opacity-50 cursor-pointer"
                >
                    <Save className="h-4 w-4" />
                    {isLoading ? "Processing..." : "Save Category"}
                </button>
            </div>

            <form className="space-y-8 mt-6">
                
                {/* Basic Info & Hierarchy */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                        <Layers className="h-4 w-4" /> Category Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input 
                            label="Category Name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="e.g. Mechanical Keyboards" 
                        />
                        <Input 
                            label="URL Slug" 
                            name="slug" 
                            value={formData.slug} 
                            onChange={handleChange} 
                            placeholder="e.g. mechanical-keyboards" 
                            className="font-mono text-sm" 
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 p-5 bg-slate-50 rounded-xl border border-slate-200">
                        <Select 
                            label="Hierarchy Level" 
                            name="level" 
                            value={formData.level} 
                            onChange={handleChange} 
                            options={[
                                { v: 'Main', l: 'Top Level (Main Category)' },
                                { v: 'Sub', l: 'Second Level (Sub-Category)' },
                                { v: 'Child', l: 'Third Level (Child-Category)' }
                            ]} 
                        />
                        
                        {formData.level !== "Main" ? (
                            <div className="animate-in fade-in slide-in-from-left-2">
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                                    <LinkIcon className="h-3 w-3 text-[#5B45FF]" /> Attach to Parent Node
                                </label>
                                <select
                                    name="parentCategory"
                                    value={formData.parentCategory}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B45FF]/20 focus:border-[#5B45FF] transition-all text-sm font-medium text-slate-900 cursor-pointer"
                                >
                                    <option value="">Select Parent...</option>
                                    {availableParents.map(parent => (
                                        <option key={parent._id} value={parent._id}>{parent.name}</option>
                                    ))}
                                </select>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-full pt-6">
                                <p className="text-xs font-medium text-slate-400 italic">No parent required for Main categories.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Media Links */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                        <ImageIcon className="h-4 w-4" /> Visual Assets
                    </h3>
                    <div className="space-y-6">
                        <Input 
                            label="Profile Image URL" 
                            name="profileimage" 
                            value={formData.profileimage} 
                            onChange={handleChange} 
                            placeholder="https://example.com/icon.jpg" 
                        />
                        <Input 
                            label="Cover Image URL (Optional)" 
                            name="coverimage" 
                            value={formData.coverimage} 
                            onChange={handleChange} 
                            placeholder="https://example.com/banner.jpg" 
                        />
                    </div>
                </div>

                {/* Status Controls */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                        <ShieldAlert className="h-4 w-4" /> Platform Visibility
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Select 
                            label="Local Shop Status" 
                            name="status" 
                            value={formData.status} 
                            onChange={handleChange} 
                            options={[{v:'active', l:'Active (Visible to customers)'}, {v:'inactive', l:'Inactive (Hidden from shop)'}]} 
                        />
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center justify-between">
                                Central Master Status
                                <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase tracking-wider">Superadmin</span>
                            </label>
                            <select
                                name="centralStatus"
                                value={formData.centralStatus}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B45FF]/20 focus:border-[#5B45FF] transition-all text-sm font-medium text-slate-900 cursor-pointer"
                            >
                                <option value="active">Active (Globally Allowed)</option>
                                <option value="inactive">Inactive (Globally Suspended)</option>
                            </select>
                            <p className="text-xs font-medium text-slate-500 mt-2">Overrides individual shop status across the entire platform.</p>
                        </div>
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

const Select = ({ label, name, value, onChange, options }) => (
    <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B45FF]/20 focus:border-[#5B45FF] transition-all text-sm font-medium text-slate-900 cursor-pointer"
        >
            {options.map(opt => (
                <option key={opt.v} value={opt.v}>{opt.l}</option>
            ))}
        </select>
    </div>
);