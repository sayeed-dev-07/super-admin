/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, Fragment } from "react";
import Link from "next/link";
import {
    Plus, Search, Edit, Trash2, Store, BadgeCheck, ShieldAlert,
    ChevronDown, ChevronUp, Building2, CreditCard, Globe, Link as LinkIcon
} from "lucide-react";

export default function TenantsPage() {
    const [expandedId, setExpandedId] = useState(null);

    // Dummy data representing your complete Tenant schema
    const [tenants] = useState([
        {
            _id: "tenant_001",
            tenantId: "T-1042",
            centralStatus: "active",
            businessName: "TechNova Electronics",
            businessEmail: "admin@technova.com",
            businessPhone: "+1 (555) 123-4567",
            businessWebsite: "https://technova.com",
            businessAddress: "123 Tech Lane, Silicon Valley, CA 94025",
            logo: "https://via.placeholder.com/40",
            favicon: "favicon.ico",
            invoiceLogo: "invoice-logo.png",
            socialMediaLinks: ["twitter.com/technova", "linkedin.com/company/technova"],
            bankDetails: ["Bank of America", "Routing: 021000021", "Acct: ****1234"],
            invoiceFooterNotes: "Thank you for your business. Net 30 terms apply.",
            websiteFooterNotes: "© 2026 TechNova Electronics. All rights reserved.",
            seoMetaTitle: "TechNova | Leading Electronics & Gadgets",
            seoMetaDescription: "Shop the best premium electronics and smart gadgets at TechNova.",
            seoKeywords: ["electronics", "tech", "gadgets", "smart home"],
            contactPageEmail: "support@technova.com",
            createdBy: "superadmin_01",
            updatedBy: "superadmin_01",
            clientType: ["B2C", "Retail"],
            isVerified: true,
            domain: "technova.sellora.com",
            supportedLanguages: ["en", "es"],
            supportedCurency: ["USD", "EUR", "CAD"]
        },
        {
            _id: "tenant_002",
            tenantId: "T-1043",
            centralStatus: "inactive",
            businessName: "Urban Threads",
            businessEmail: "hello@urbanthreads.co",
            businessPhone: "+44 20 7123 4567",
            businessWebsite: "https://urbanthreads.co.uk",
            businessAddress: "45 Fashion Street, London, E1 6PX, UK",
            logo: "",
            favicon: "icon.png",
            invoiceLogo: "urban-invoice.jpg",
            socialMediaLinks: ["instagram.com/urbanthreads"],
            bankDetails: ["Barclays UK", "Sort: 20-00-00", "Acct: ****8899"],
            invoiceFooterNotes: "Returns accepted within 14 days of invoice date.",
            websiteFooterNotes: "Urban Threads UK.",
            seoMetaTitle: "Urban Threads | Modern Streetwear",
            seoMetaDescription: "Discover the latest in modern urban fashion.",
            seoKeywords: ["streetwear", "fashion", "apparel", "uk"],
            contactPageEmail: "help@urbanthreads.co",
            createdBy: "superadmin_02",
            updatedBy: "sys_auto",
            clientType: ["DTC", "Wholesale"],
            isVerified: false,
            domain: "urbanthreads.sellora.com",
            supportedLanguages: ["en"],
            supportedCurency: ["GBP", "EUR"]
        }
    ]);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-12 text-slate-900">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tenants / Shops</h1>
                    <p className="text-sm font-medium mt-1 text-slate-500">Manage platform clients, their verification, and business profiles.</p>
                </div>
                <Link
                    href="/dashboard/tenants/add"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#5B45FF] text-white px-5 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-colors text-sm font-semibold shadow-sm cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Register New Shop
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
                        placeholder="Search shops by name, ID, or domain..."
                        className="block w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B45FF]/20 focus:border-[#5B45FF] transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400"
                    />
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.08)] overflow-hidden">

                {/* Desktop View */}
                <div className="hidden overflow-x-auto md:block">
                    <table className="w-full min-w-[760px] text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Business Profile</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Domain & Contact</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Verification</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Central Status</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {tenants.map((tenant) => (
                                <Fragment key={tenant._id}>
                                    <tr className={`hover:bg-slate-50/80 transition-colors ${expandedId === tenant._id ? 'bg-slate-50/50' : ''}`}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                {tenant.logo ? (
                                                    <img
                                                        src={tenant.logo}
                                                        alt={tenant.businessName}
                                                        className="h-10 w-10 shrink-0 rounded-lg object-cover border border-slate-200 shadow-sm"
                                                    />
                                                ) : (
                                                    <div className="h-10 w-10 shrink-0 rounded-lg border border-slate-200 flex items-center justify-center bg-slate-50 shadow-sm">
                                                        <Store className="h-5 w-5 text-slate-400" />
                                                    </div>
                                                )}
                                                <div className="min-w-0">
                                                    <div className="font-semibold text-slate-900">{tenant.businessName}</div>
                                                    <div className="font-medium text-xs mt-0.5 text-[#5B45FF]">ID: {tenant.tenantId}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-700">{tenant.domain}</div>
                                            <div className="text-xs text-slate-500 mt-0.5">{tenant.businessEmail}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {tenant.isVerified ? (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-emerald-100 bg-emerald-50 text-emerald-700">
                                                    <BadgeCheck className="h-3.5 w-3.5" /> Verified
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-amber-100 bg-amber-50 text-amber-700">
                                                    <ShieldAlert className="h-3.5 w-3.5" /> Unverified
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${tenant.centralStatus === 'active'
                                                    ? 'bg-indigo-50 text-indigo-700 border-indigo-100'
                                                    : 'bg-slate-100 text-slate-600 border-slate-200'
                                                }`}>
                                                {tenant.centralStatus}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    onClick={() => toggleExpand(tenant._id)}
                                                    className={`p-2 rounded-lg transition-colors ${expandedId === tenant._id ? 'bg-[#5B45FF]/10 text-[#5B45FF]' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'}`}
                                                    aria-label="View Details"
                                                >
                                                    {expandedId === tenant._id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                                </button>
                                                <button
                                                    className="p-2 text-slate-400 hover:bg-indigo-50 hover:text-[#5B45FF] rounded-lg transition-colors cursor-pointer"
                                                    aria-label={`Edit ${tenant.businessName}`}
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </button>
                                                <button
                                                    className="p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                                                    aria-label={`Delete ${tenant.businessName}`}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* EXPANDED DETAILS ROW */}
                                    {expandedId === tenant._id && (
                                        <tr>
                                            <td colSpan="5" className="p-0 border-b border-slate-100 bg-slate-50/50">
                                                <div className="px-8 py-6 grid grid-cols-1 lg:grid-cols-4 gap-8 text-sm border-l-4 border-[#5B45FF]">

                                                    {/* Column 1: Business Details */}
                                                    <div className="space-y-4">
                                                        <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-2">
                                                            <Building2 className="h-4 w-4 text-[#5B45FF]" /> Business Profile
                                                        </h4>
                                                        <div className="space-y-2 text-slate-600 whitespace-normal">
                                                            <p><strong className="text-slate-900 font-medium">Phone:</strong> {tenant.businessPhone}</p>
                                                            <p><strong className="text-slate-900 font-medium">Website:</strong> <a href={tenant.businessWebsite} className="text-[#5B45FF] hover:underline" target="_blank" rel="noreferrer">{tenant.businessWebsite}</a></p>
                                                            <p><strong className="text-slate-900 font-medium">Address:</strong> {tenant.businessAddress}</p>
                                                            <p><strong className="text-slate-900 font-medium">Support Email:</strong> {tenant.contactPageEmail}</p>
                                                        </div>
                                                    </div>

                                                    {/* Column 2: Platform Settings */}
                                                    <div className="space-y-4">
                                                        <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-2">
                                                            <Globe className="h-4 w-4 text-[#5B45FF]" /> Platform Configuration
                                                        </h4>
                                                        <div className="space-y-2 text-slate-600">
                                                            <p><strong className="text-slate-900 font-medium">Client Type:</strong> {tenant.clientType.join(", ")}</p>
                                                            <p><strong className="text-slate-900 font-medium">Languages:</strong> <span className="uppercase">{tenant.supportedLanguages.join(", ")}</span></p>
                                                            <p><strong className="text-slate-900 font-medium">Currencies:</strong> {tenant.supportedCurency.join(", ")}</p>
                                                            <div className="pt-2 text-xs font-mono text-slate-400">
                                                                <p>Created: {tenant.createdBy}</p>
                                                                <p>Updated: {tenant.updatedBy}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Column 3: Assets & Finance */}
                                                    <div className="space-y-4">
                                                        <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-2">
                                                            <CreditCard className="h-4 w-4 text-[#5B45FF]" /> Finance & Assets
                                                        </h4>
                                                        <div className="space-y-2 text-slate-600 whitespace-normal">
                                                            <p><strong className="text-slate-900 font-medium">Bank Details:</strong><br />{tenant.bankDetails.join(" | ")}</p>
                                                            <p><strong className="text-slate-900 font-medium">Invoice Notes:</strong><br /><span className="text-xs italic">{tenant.invoiceFooterNotes}</span></p>
                                                            <p><strong className="text-slate-900 font-medium">Asset Files:</strong></p>
                                                            <ul className="list-disc pl-4 text-xs font-mono text-slate-500">
                                                                <li>favicon: {tenant.favicon || "N/A"}</li>
                                                                <li>invoice logo: {tenant.invoiceLogo || "N/A"}</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    {/* Column 4: SEO & Links */}
                                                    <div className="space-y-4">
                                                        <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-2">
                                                            <LinkIcon className="h-4 w-4 text-[#5B45FF]" /> SEO & Links
                                                        </h4>
                                                        <div className="space-y-2 text-slate-600 whitespace-normal">
                                                            <p><strong className="text-slate-900 font-medium">Meta Title:</strong> {tenant.seoMetaTitle}</p>
                                                            <p><strong className="text-slate-900 font-medium">Meta Desc:</strong> {tenant.seoMetaDescription}</p>
                                                            <div className="pt-1 flex flex-wrap gap-1">
                                                                {tenant.seoKeywords.map(kw => (
                                                                    <span key={kw} className="px-2 py-0.5 bg-slate-200/50 text-slate-600 rounded text-[10px]">{kw}</span>
                                                                ))}
                                                            </div>
                                                            <div className="pt-2">
                                                                <strong className="text-slate-900 font-medium block mb-1">Socials:</strong>
                                                                {tenant.socialMediaLinks.map(link => (
                                                                    <a key={link} href={`https://${link}`} className="block text-xs text-[#5B45FF] hover:underline truncate" target="_blank" rel="noreferrer">{link}</a>
                                                                ))}
                                                            </div>
                                                            <p className="pt-2 text-xs text-slate-400 italic border-t border-slate-200 mt-2">{tenant.websiteFooterNotes}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View */}
                <div className="divide-y divide-slate-100 md:hidden bg-white">
                    {tenants.map((tenant) => (
                        <article key={tenant._id} className="p-5">
                            <div className="flex items-start gap-4 mb-4">
                                {tenant.logo ? (
                                    <img
                                        src={tenant.logo}
                                        alt={tenant.businessName}
                                        className="h-12 w-12 shrink-0 rounded-lg object-cover border border-slate-200 shadow-sm"
                                    />
                                ) : (
                                    <div className="h-12 w-12 shrink-0 rounded-lg border border-slate-200 flex items-center justify-center bg-slate-50 shadow-sm">
                                        <Store className="h-6 w-6 text-slate-400" />
                                    </div>
                                )}
                                <div className="min-w-0 flex-1">
                                    <h2 className="text-sm font-bold text-slate-900 leading-tight">
                                        {tenant.businessName}
                                    </h2>
                                    <p className="mt-1 text-xs font-medium text-slate-500 truncate">{tenant.businessEmail}</p>
                                    <p className="mt-0.5 text-xs font-mono text-[#5B45FF] truncate">{tenant.domain}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Verification</p>
                                    {tenant.isVerified ? (
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border border-emerald-100 bg-emerald-50 text-emerald-700">
                                            <BadgeCheck className="h-3 w-3" /> Verified
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border border-amber-100 bg-amber-50 text-amber-700">
                                            <ShieldAlert className="h-3 w-3" /> Unverified
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Platform Status</p>
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${tenant.centralStatus === 'active'
                                            ? 'bg-indigo-50 text-indigo-700 border-indigo-100'
                                            : 'bg-slate-100 text-slate-600 border-slate-200'
                                        }`}>
                                        {tenant.centralStatus}
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-between gap-2">
                                <button
                                    onClick={() => toggleExpand(tenant._id)}
                                    className="flex-1 inline-flex h-9 items-center justify-center text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg transition-colors hover:bg-slate-50"
                                >
                                    {expandedId === tenant._id ? 'Hide Details' : 'View Full Profile'}
                                </button>
                                <div className="flex gap-2">
                                    <button className="inline-flex h-9 w-9 items-center justify-center text-slate-500 bg-white border border-slate-200 rounded-lg hover:text-[#5B45FF] hover:border-indigo-200 transition-colors">
                                        <Edit className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            {/* MOBILE EXPANDED VIEW */}
                            {expandedId === tenant._id && (
                                <div className="mt-4 p-4 rounded-xl border border-slate-100 bg-slate-50 text-xs text-slate-600 space-y-4">
                                    <div>
                                        <strong className="text-slate-900 font-medium block mb-1">Contact:</strong>
                                        <p>{tenant.businessPhone}</p>
                                        <p>{tenant.businessAddress}</p>
                                    </div>
                                    <div className="pt-3 border-t border-slate-200">
                                        <strong className="text-slate-900 font-medium block mb-1">Configuration:</strong>
                                        <p>Type: {tenant.clientType.join(", ")}</p>
                                        <p>Currencies: {tenant.supportedCurency.join(", ")}</p>
                                    </div>
                                    <div className="pt-3 border-t border-slate-200">
                                        <strong className="text-slate-900 font-medium block mb-1">Bank Info:</strong>
                                        <p>{tenant.bankDetails.join(" | ")}</p>
                                    </div>
                                    <div className="pt-3 border-t border-slate-200 font-mono text-[10px] text-slate-400">
                                        <p>ID: {tenant.tenantId}</p>
                                        <p>Created: {tenant.createdBy}</p>
                                    </div>
                                </div>
                            )}
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {tenants.length === 0 && (
                    <div className="p-8 text-center sm:p-16 bg-white">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 mb-4">
                            <Search className="h-6 w-6 text-[#5B45FF]" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">No tenants found</h3>
                        <p className="mt-1 text-sm font-medium text-slate-500">Get started by registering a new shop or client.</p>
                        <button className="mt-6 inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-semibold shadow-sm">
                            <Plus className="h-4 w-4" />
                            Register New Shop
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}