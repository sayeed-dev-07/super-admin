"use client";

import { useState } from "react";
import {
    Save, ArrowLeft, Box, Layers, Image as ImageIcon,
    Truck, Search, Globe, ListChecks, Settings2
} from "lucide-react";

import Link from "next/link";
import { BsYoutube } from "react-icons/bs";

export default function AddProductPage() {
    const [activeTab, setActiveTab] = useState("general");
    const [isLoading, setIsLoading] = useState(false);

    // Form State representing the complete Figma Schema
    const [formData, setFormData] = useState({
        // Tab 1: General
        productName: "",
        productSlug: "",
        productShortDescription: "",
        productDescription: "",
        productTags: "", // Will be converted to array
        status: "active",
        centralStatus: "active",

        // Tab 2: Relations
        tenantId: "",
        productBrand: "",
        productCategory: "",
        productSubCategory: "",
        productChildCategory: "",
        inventoryItems: "",

        // Tab 3: Media
        productImage: "",
        productGallery: "", // Comma separated for static view
        productYoutueURL: "",

        // Tab 4: Logistics & Details
        productStyle: "",
        productFeaturesStatus: "active",
        productFeatures: "",
        productOrderQuantity: 1,
        productHowToCare: "",
        deliveryInstructions: "",

        // Tab 5: SEO
        metaTitle: "",
        metaDescription: "",
        seoKeywords: ""
    });

    const tabs = [
        { id: "general", label: "General Info", icon: Box },
        { id: "relations", label: "Organization", icon: Layers },
        { id: "media", label: "Media & Content", icon: ImageIcon },
        { id: "details", label: "Details & Logistics", icon: Truck },
        { id: "seo", label: "SEO & Meta", icon: Globe },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("Saving full product schema:", formData);
        await new Promise(r => setTimeout(r, 1000));
        setIsLoading(false);
        alert("Master Product Saved Successfully!");
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-20">
            {/* Header Sticky Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 bg-slate-50/80 backdrop-blur-md z-20 py-4 border-b border-slate-200 -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard/products" className="p-2 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-[#5B45FF] transition-colors shadow-sm">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="text-xl font-bold text-slate-900">Add Master Product</h1>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 cursor-pointer bg-[#5B45FF] text-white px-6 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-all font-semibold shadow-lg shadow-indigo-200 disabled:opacity-50"
                >
                    <Save className="h-4 w-4" />
                    {isLoading ? "Processing..." : "Save Product"}
                </button>
            </div>

            {/* Modern Tab Switcher */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 p-1 bg-slate-200/50 rounded-2xl w-fit">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer transition-all whitespace-nowrap ${activeTab === tab.id
                                ? "bg-white text-[#5B45FF] shadow-sm"
                                : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
                                }`}
                        >
                            <Icon className="h-4 w-4" />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Dynamic Form Content */}
            <div className="mt-6">
                {activeTab === "general" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <Settings2 className="h-4 w-4" /> Identification
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Product Name" name="productName" value={formData.productName} onChange={handleChange} placeholder="e.g. Pro Mechanical Keyboard" />
                                <Input label="Product Slug" name="productSlug" value={formData.productSlug} onChange={handleChange} placeholder="pro-mechanical-keyboard" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Short Description</label>
                                <textarea name="productShortDescription" value={formData.productShortDescription} onChange={handleChange} rows="2" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500/20 outline-none resize-none text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Detailed Description (HTML)</label>
                                <textarea name="productDescription" value={formData.productDescription} onChange={handleChange} rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-mono text-xs focus:ring-2 focus:ring-indigo-500/20 outline-none" placeholder="<p>Full product details...</p>" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                                <Select label="Tenant Status" name="status" value={formData.status} onChange={handleChange} options={[{ v: 'active', l: 'Active' }, { v: 'inactive', l: 'Inactive' }]} />
                                <Select label="Central Status" name="centralStatus" value={formData.centralStatus} onChange={handleChange} options={[{ v: 'active', l: 'Active' }, { v: 'inactive', l: 'Inactive' }]} />
                                <Input label="Product Tags" name="productTags" value={formData.productTags} onChange={handleChange} placeholder="sale, new, hardware" />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "relations" && (
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Platform Connections</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <Input label="Tenant ID" name="tenantId" value={formData.tenantId} onChange={handleChange} placeholder="Enter Tenant Object ID" />
                                <Input label="Product Brand" name="productBrand" value={formData.productBrand} onChange={handleChange} placeholder="Enter Brand Object ID" />
                                <Input label="Inventory Item Link" name="inventoryItems" value={formData.inventoryItems} onChange={handleChange} placeholder="Enter Inventory Object ID" />
                            </div>
                            <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <h4 className="text-xs font-bold text-slate-500 uppercase">Category Hierarchy</h4>
                                <Input label="Main Category" name="productCategory" value={formData.productCategory} onChange={handleChange} placeholder="Category ID" />
                                <Input label="Sub Category" name="productSubCategory" value={formData.productSubCategory} onChange={handleChange} placeholder="Sub-Category ID" className="ml-4 w-[calc(100%-1rem)]" />
                                <Input label="Child Category" name="productChildCategory" value={formData.productChildCategory} onChange={handleChange} placeholder="Child-Category ID" className="ml-8 w-[calc(100%-2rem)]" />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "media" && (
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Visual Content</h3>
                        <div className="space-y-6">
                            <Input label="Main Product Image URL" name="productImage" value={formData.productImage} onChange={handleChange} placeholder="https://..." />
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Product Gallery (Comma Separated URLs)</label>
                                <textarea name="productGallery" value={formData.productGallery} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none text-xs" />
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                                <BsYoutube className="h-6 w-6 text-red-500" />
                                <div className="flex-1">
                                    <Input label="YouTube Product URL" name="productYoutueURL" value={formData.productYoutueURL} onChange={handleChange} placeholder="https://youtube.com/..." />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "details" && (
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><ListChecks className="h-4 w-4" /> Logistics & Specifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="Product Styles (Comma Separated)" name="productStyle" value={formData.productStyle} onChange={handleChange} placeholder="Modern, Ergonomic" />
                            <Select label="Features Status" name="productFeaturesStatus" value={formData.productFeaturesStatus} onChange={handleChange} options={[{ v: 'active', l: 'Active' }, { v: 'inactive', l: 'Inactive' }]} />
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Product Features (List)</label>
                                <textarea name="productFeatures" value={formData.productFeatures} onChange={handleChange} rows="2" placeholder="Bluetooth 5.0, Mechanical Switches, RGB Lighting" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none text-sm" />
                            </div>
                            <Input label="Max Order Quantity" name="productOrderQuantity" type="number" value={formData.productOrderQuantity} onChange={handleChange} />
                            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">How to Care</label>
                                    <textarea name="productHowToCare" value={formData.productHowToCare} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Delivery Instructions</label>
                                    <textarea name="deliveryInstructions" value={formData.deliveryInstructions} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "seo" && (
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Search Engine Optimization</h3>
                        <div className="space-y-6">
                            <Input label="Meta Title" name="metaTitle" value={formData.metaTitle} onChange={handleChange} placeholder="Max 60 characters" />
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Meta Description</label>
                                <textarea name="metaDescription" value={formData.metaDescription} onChange={handleChange} rows="3" placeholder="Max 160 characters" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none text-sm" />
                            </div>
                            <Input label="SEO Keywords" name="seoKeywords" value={formData.seoKeywords} onChange={handleChange} placeholder="keyboard, gaming, tech" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Reusable UI Components to keep the code clean
const Input = ({ label, name, value, onChange, placeholder, type = "text", className = "" }) => (
    <div className={className}>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B45FF]/20 focus:border-[#5B45FF] transition-all text-sm font-medium text-slate-900"
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