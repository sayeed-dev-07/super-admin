"use client";

import { useState } from "react";
import {
    Save, ArrowLeft, Store, Globe, Palette,
    CreditCard, Search, BadgeCheck, ShieldAlert
} from "lucide-react";
import Link from "next/link";

export default function AddTenantPage() {
    const [activeTab, setActiveTab] = useState("profile");
    const [isLoading, setIsLoading] = useState(false);

    // Form State representing the complete Tenant schema
    const [formData, setFormData] = useState({
        // Tab 1: Business Profile
        businessName: "",
        domain: "",
        businessEmail: "",
        businessPhone: "",
        businessWebsite: "",
        contactPageEmail: "",
        businessAddress: "",

        // Tab 2: Platform Settings
        clientType: "", // Array
        supportedLanguages: "", // Array
        supportedCurrency: "", // Array (Fixed typo from schema)
        centralStatus: "active",
        isVerified: false,

        // Tab 3: Branding & Assets
        logo: "",
        favicon: "",
        invoiceLogo: "",
        socialMediaLinks: "", // Array

        // Tab 4: Finance & Legal
        bankDetails: "", // Array
        invoiceFooterNotes: "",
        websiteFooterNotes: "",

        // Tab 5: SEO
        seoMetaTitle: "",
        seoMetaDescription: "",
        seoKeywords: "" // Array
    });

    const tabs = [
        { id: "profile", label: "Business Profile", icon: Store },
        { id: "settings", label: "Platform Settings", icon: Globe },
        { id: "branding", label: "Branding & Assets", icon: Palette },
        { id: "finance", label: "Finance & Legal", icon: CreditCard },
        { id: "seo", label: "SEO & Meta", icon: Search },
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleArrayChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value.split(",").map(i => i.trim())
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("Saving full tenant schema:", formData);

        // Simulate network request
        await new Promise(r => setTimeout(r, 1000));
        setIsLoading(false);
        alert("Tenant / Shop Registered Successfully!");
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-20 text-slate-900">
            {/* Header Sticky Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 bg-slate-50/80 backdrop-blur-md z-20 py-4 border-b border-slate-200 -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard/tenants" className="p-2 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-[#5B45FF] transition-colors shadow-sm cursor-pointer">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">Register New Shop</h1>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">Create a new tenant workspace and platform profile.</p>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 bg-[#5B45FF] text-white px-6 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-all font-semibold shadow-lg shadow-indigo-200 disabled:opacity-50 cursor-pointer"
                >
                    <Save className="h-4 w-4" />
                    {isLoading ? "Processing..." : "Save Tenant"}
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
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${activeTab === tab.id
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

                {/* TAB 1: Business Profile */}
                {activeTab === "profile" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <Store className="h-4 w-4" /> Core Identity
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Business Name" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="e.g. Acme Corp" />
                                <Input label="Sub-Domain" name="domain" value={formData.domain} onChange={handleChange} placeholder="acme.sellora.com" className="font-mono text-sm" />
                                <Input label="Business Email" name="businessEmail" type="email" value={formData.businessEmail} onChange={handleChange} placeholder="admin@acme.com" />
                                <Input label="Support/Contact Email" name="contactPageEmail" type="email" value={formData.contactPageEmail} onChange={handleChange} placeholder="support@acme.com" />
                                <Input label="Business Phone" name="businessPhone" value={formData.businessPhone} onChange={handleChange} placeholder="+1 234 567 8900" />
                                <Input label="Corporate Website" name="businessWebsite" value={formData.businessWebsite} onChange={handleChange} placeholder="https://acme.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Registered Business Address</label>
                                <textarea name="businessAddress" value={formData.businessAddress} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#5B45FF]/20 outline-none resize-none text-sm placeholder:text-slate-400" placeholder="Full street address, city, zip, country..." />
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 2: Platform Settings */}
                {activeTab === "settings" && (
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-8 animate-in fade-in slide-in-from-bottom-2">
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Localization & Types</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Input label="Client Types (Comma Sep)" name="clientType" value={formData.clientType} onChange={handleArrayChange} placeholder="B2B, B2C, Dropship" />
                                <Input label="Languages (Comma Sep)" name="supportedLanguages" value={formData.supportedLanguages} onChange={handleArrayChange} placeholder="en, es, fr" />
                                <Input label="Currencies (Comma Sep)" name="supportedCurrency" value={formData.supportedCurrency} onChange={handleArrayChange} placeholder="USD, EUR, GBP" />
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <ShieldAlert className="h-4 w-4" /> Superadmin Controls
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Select
                                    label="Central Platform Status"
                                    name="centralStatus"
                                    value={formData.centralStatus}
                                    onChange={handleChange}
                                    options={[{ v: 'active', l: 'Active (Live on Platform)' }, { v: 'inactive', l: 'Inactive (Suspended)' }]}
                                />

                                <div className={`p-5 rounded-xl border transition-colors flex items-start gap-4 ${formData.isVerified ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'}`}>
                                    <div className="pt-0.5">
                                        <input
                                            type="checkbox"
                                            name="isVerified"
                                            id="isVerified"
                                            checked={formData.isVerified}
                                            onChange={handleChange}
                                            className="h-5 w-5 rounded border-slate-300 text-[#5B45FF] focus:ring-[#5B45FF] cursor-pointer"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="isVerified" className={`text-sm font-bold cursor-pointer block ${formData.isVerified ? 'text-emerald-800' : 'text-slate-700'}`}>
                                            Official Verified Status
                                        </label>
                                        <p className={`text-xs font-medium mt-1 ${formData.isVerified ? 'text-emerald-600' : 'text-slate-500'}`}>
                                            Grants the blue checkmark badge across the frontend and unlocks trusted tier features.
                                        </p>
                                    </div>
                                    {formData.isVerified && <BadgeCheck className="h-6 w-6 text-emerald-500 ml-auto" />}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 3: Branding & Assets */}
                {activeTab === "branding" && (
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Digital Assets</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="Main Logo URL" name="logo" value={formData.logo} onChange={handleChange} placeholder="https://..." />
                            <Input label="Favicon URL" name="favicon" value={formData.favicon} onChange={handleChange} placeholder="https://..." />
                            <div className="md:col-span-2">
                                <Input label="Invoice Logo URL (For Billing)" name="invoiceLogo" value={formData.invoiceLogo} onChange={handleChange} placeholder="https://..." />
                            </div>
                            <div className="md:col-span-2 pt-4 border-t border-slate-100">
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Social Media Links (Comma Separated URLs)</label>
                                <textarea name="socialMediaLinks" value={formData.socialMediaLinks} onChange={handleArrayChange} rows="2" placeholder="https://twitter.com/acme, https://instagram.com/acme" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#5B45FF]/20 outline-none text-sm font-mono placeholder:font-sans placeholder:text-slate-400" />
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 4: Finance & Legal */}
                {activeTab === "finance" && (
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Operations & Footers</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Bank Details (Comma Separated lines)</label>
                                <textarea name="bankDetails" value={formData.bankDetails} onChange={handleArrayChange} rows="2" placeholder="Bank Name, Routing Number, Account Number" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#5B45FF]/20 outline-none text-sm placeholder:text-slate-400" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Invoice Footer Notes</label>
                                    <textarea name="invoiceFooterNotes" value={formData.invoiceFooterNotes} onChange={handleChange} rows="3" placeholder="Thank you for your business. Terms apply." className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#5B45FF]/20 outline-none text-sm placeholder:text-slate-400" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Website Footer Notes</label>
                                    <textarea name="websiteFooterNotes" value={formData.websiteFooterNotes} onChange={handleChange} rows="3" placeholder="© 2026 Acme Corp. All rights reserved." className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#5B45FF]/20 outline-none text-sm placeholder:text-slate-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 5: SEO */}
                {activeTab === "seo" && (
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Search Engine Optimization</h3>
                        <div className="space-y-6">
                            <Input label="Meta Title" name="seoMetaTitle" value={formData.seoMetaTitle} onChange={handleChange} placeholder="Shop Name | Best Products" />
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Meta Description</label>
                                <textarea name="seoMetaDescription" value={formData.seoMetaDescription} onChange={handleChange} rows="3" placeholder="Max 160 characters describing the shop..." className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#5B45FF]/20 outline-none text-sm placeholder:text-slate-400" />
                            </div>
                            <Input label="SEO Keywords (Comma Separated)" name="seoKeywords" value={formData.seoKeywords} onChange={handleArrayChange} placeholder="shop, products, electronics, retail" />
                        </div>
                    </div>
                )}
            </div>
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
            className={`w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B45FF]/20 focus:border-[#5B45FF] transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400 placeholder:font-sans ${className}`}
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