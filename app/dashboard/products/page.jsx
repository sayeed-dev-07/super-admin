/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, Fragment } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, ChevronDown, ChevronUp, Box, Filter, MoreHorizontal } from "lucide-react";

export default function ProductsPage() {
    const [expandedId, setExpandedId] = useState(null);

    // Dummy data matching the exact provided schema
    const [products] = useState([
        {
            _id: "prod_1",
            tenantId: "T-1042",
            centralStatus: "active",
            status: "active",
            productName: "Premium Cotton T-Shirt",
            productSlug: "premium-cotton-t-shirt",
            productImage: "https://i.pinimg.com/1200x/7d/f1/1e/7df11ed7322485d080b9d3061f42c0e2.jpg",
            productGallery: ["img1.jpg", "img2.jpg"],
            productStyle: ["Casual", "Summer Wear"],
            productFeaturesStatus: "active",
            productDescription: "Detailed HTML description of the premium cotton t-shirt goes here.",
            productShortDescription: "A comfortable, everyday premium cotton t-shirt.",
            productCategory: "Clothing",
            productSubCategory: "Menswear",
            productChildCategory: "T-Shirts",
            productBrand: "ThreadCo",
            productFeatures: ["Breathable", "Pre-shrunk", "Seamless collar"],
            productOrderQuantity: 5,
            productYoutueURL: "https://youtube.com/watch?v=demo",
            productHowToCare: "Machine wash cold inside out. Tumble dry low.",
            deliveryInstructions: "Ships in 3-5 business days.",
            inventoryItems: "INV_8891",
            seoKeywords: ["t-shirt", "cotton", "menswear", "premium"],
            metaTitle: "Premium Cotton T-Shirt | ThreadCo",
            metaDescription: "Buy the best premium cotton t-shirt for everyday comfort.",
            productTags: ["Bestseller", "New Arrival"]
        },
        {
            _id: "prod_2",
            tenantId: "T-1042",
            centralStatus: "inactive",
            status: "active",
            productName: "Noise-Cancelling Headphones",
            productSlug: "noise-cancelling-headphones",
            productImage: "https://i.pinimg.com/1200x/0e/57/80/0e57801d199bc59a85aeb5de01f75616.jpg",
            productGallery: ["hp1.jpg"],
            productStyle: ["Over-Ear", "Matte Black"],
            productFeaturesStatus: "inactive",
            productDescription: "Industry-leading noise cancellation technology.",
            productShortDescription: "Wireless over-ear headphones.",
            productCategory: "Electronics",
            productSubCategory: "Audio",
            productChildCategory: "Headphones",
            productBrand: "Acoustix",
            productFeatures: ["ANC", "30hr Battery", "Bluetooth 5.0"],
            productOrderQuantity: 1,
            productYoutueURL: "",
            productHowToCare: "Wipe with a dry microfiber cloth.",
            deliveryInstructions: "Requires signature upon delivery.",
            inventoryItems: "INV_9022",
            seoKeywords: ["headphones", "wireless", "audio", "anc"],
            metaTitle: "Wireless ANC Headphones",
            metaDescription: "Experience pure sound with Acoustix ANC.",
            productTags: ["Tech", "Audio"]
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
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Master Products</h1>
                    <p className="text-sm font-medium mt-1 text-slate-500">Manage global catalog, hierarchy, and central status overrides.</p>
                </div>
                <Link
                    href="/dashboard/products/add"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#5B45FF] text-white px-5 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-colors text-sm font-semibold shadow-sm cursor-pointer"
                >
                    <Plus className="h-4 w-4" />
                    Add Master Product
                </Link>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] flex flex-col sm:flex-row gap-3 justify-between items-center">
                <div className="relative w-full sm:max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search products by slug, name, or tags..."
                        className="block w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B45FF]/20 focus:border-[#5B45FF] transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400"
                    />
                </div>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-[#5B45FF] transition-colors text-sm font-medium">
                    <Filter className="h-4 w-4" />
                    Advanced Filters
                </button>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.08)] overflow-hidden">
                <div className="hidden overflow-x-auto md:block">
                    <table className="w-full min-w-[760px] text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Product (Tenant ID)</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Hierarchy (Cat / Sub / Child)</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider">Status (Central / Local)</th>
                                <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {products.map((product) => (
                                <Fragment key={product._id}>
                                    <tr className={`hover:bg-slate-50/80 transition-colors ${expandedId === product._id ? 'bg-slate-50/50' : ''}`}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={product.productImage}
                                                    alt={product.productName}
                                                    className="h-10 w-10 shrink-0 rounded-lg object-cover border border-slate-200 shadow-sm"
                                                />
                                                <div className="min-w-0">
                                                    <div className="font-semibold text-slate-900">{product.productName}</div>
                                                    <div className="font-medium text-xs mt-0.5 text-slate-500 flex items-center gap-2">
                                                        <span className="text-[#5B45FF]">ID: {product.tenantId}</span>
                                                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                                        Brand: {product.productBrand}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-xs text-slate-600">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-slate-800 font-semibold">{product.productCategory}</span>
                                                <span className="text-slate-500 ml-2 border-l border-slate-300 pl-2">{product.productSubCategory}</span>
                                                <span className="text-slate-400 ml-4 border-l border-slate-200 pl-2">{product.productChildCategory}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-2 items-start">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] uppercase font-bold text-slate-400 w-4">SA:</span>
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${product.centralStatus === 'active'
                                                            ? 'bg-indigo-50 text-indigo-700 border-indigo-100'
                                                            : 'bg-red-50 text-red-700 border-red-100'
                                                        }`}>
                                                        {product.centralStatus}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] uppercase font-bold text-slate-400 w-4">TN:</span>
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${product.status === 'active'
                                                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                                            : 'bg-slate-100 text-slate-600 border-slate-200'
                                                        }`}>
                                                        {product.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    onClick={() => toggleExpand(product._id)}
                                                    className={`p-2 rounded-lg transition-colors ${expandedId === product._id ? 'bg-[#5B45FF]/10 text-[#5B45FF]' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'}`}
                                                    aria-label="View Details"
                                                >
                                                    {expandedId === product._id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                                </button>
                                                <button
                                                    className="p-2 text-slate-400 hover:bg-indigo-50 hover:text-[#5B45FF] rounded-lg transition-colors cursor-pointer"
                                                    aria-label={`Edit ${product.productName}`}
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </button>
                                                <button
                                                    className="p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                                                    aria-label={`Delete ${product.productName}`}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* EXPANDED DETAILS ROW */}
                                    {expandedId === product._id && (
                                        <tr>
                                            <td colSpan="4" className="p-0 border-b border-slate-100 bg-slate-50/50">
                                                <div className="px-8 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm border-l-4 border-[#5B45FF]">
                                                    <div className="space-y-5">
                                                        <div>
                                                            <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">Product Info</h4>
                                                            <div className="space-y-1.5 text-slate-600">
                                                                <p><strong className="text-slate-900 font-medium">Slug:</strong> {product.productSlug}</p>
                                                                <p className="whitespace-normal"><strong className="text-slate-900 font-medium">Short Desc:</strong> {product.productShortDescription}</p>
                                                                <p><strong className="text-slate-900 font-medium">Order Qty limit:</strong> {product.productOrderQuantity}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">Media & Styles</h4>
                                                            <div className="space-y-1.5 text-slate-600">
                                                                <p><strong className="text-slate-900 font-medium">Gallery:</strong> {product.productGallery.length} Images Attached</p>
                                                                <p><strong className="text-slate-900 font-medium">Styles:</strong> {product.productStyle.join(", ")}</p>
                                                                <p><strong className="text-slate-900 font-medium">YouTube URL:</strong> {product.productYoutueURL || "N/A"}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-5">
                                                        <div>
                                                            <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-2">
                                                                <Box className="h-3.5 w-3.5 text-[#5B45FF]" /> Instructions & Features
                                                            </h4>
                                                            <div className="space-y-1.5 text-slate-600 whitespace-normal">
                                                                <p><strong className="text-slate-900 font-medium">Care:</strong> {product.productHowToCare}</p>
                                                                <p><strong className="text-slate-900 font-medium">Delivery:</strong> {product.deliveryInstructions}</p>
                                                                <p><strong className="text-slate-900 font-medium">Feature Status:</strong> {product.productFeaturesStatus}</p>
                                                                <p><strong className="text-slate-900 font-medium">Features:</strong> {product.productFeatures.join(", ")}</p>
                                                            </div>
                                                        </div>
                                                        <div className="bg-white p-3 rounded-xl border border-slate-200">
                                                            <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-1">Inventory Reference</h4>
                                                            <p className="font-mono text-xs text-[#5B45FF] font-medium">{product.inventoryItems}</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-5">
                                                        <div>
                                                            <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">SEO & Metadata</h4>
                                                            <div className="space-y-1.5 text-slate-600 whitespace-normal">
                                                                <p><strong className="text-slate-900 font-medium">Meta Title:</strong> {product.metaTitle}</p>
                                                                <p><strong className="text-slate-900 font-medium">Meta Desc:</strong> {product.metaDescription}</p>
                                                                <div className="pt-2 flex flex-wrap gap-1.5">
                                                                    {product.seoKeywords.map(kw => (
                                                                        <span key={kw} className="px-2 py-1 bg-slate-200/50 text-slate-600 rounded text-xs">{kw}</span>
                                                                    ))}
                                                                </div>
                                                                <div className="pt-1 flex flex-wrap gap-1.5">
                                                                    {product.productTags.map(tag => (
                                                                        <span key={tag} className="px-2 py-1 bg-[#5B45FF]/10 text-[#5B45FF] rounded text-xs font-medium">{tag}</span>
                                                                    ))}
                                                                </div>
                                                            </div>
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

                {/* MOBILE VIEW */}
                <div className="divide-y divide-slate-100 md:hidden bg-white">
                    {products.map((product) => (
                        <article key={product._id} className="p-5">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={product.productImage}
                                        alt={product.productName}
                                        className="h-12 w-12 shrink-0 rounded-lg object-cover border border-slate-200 shadow-sm"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-sm font-bold text-slate-900 leading-tight">
                                            {product.productName}
                                        </h2>
                                        <p className="mt-1 text-xs font-medium text-[#5B45FF]">ID: {product.tenantId}</p>
                                    </div>
                                </div>
                                <button className="p-1 text-slate-400 hover:text-slate-600 rounded-md">
                                    <MoreHorizontal className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Category</p>
                                    <p className="font-semibold text-slate-800 text-xs truncate">{product.productCategory}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Central Status</p>
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${product.centralStatus === 'active'
                                            ? 'bg-indigo-50 text-indigo-700 border-indigo-100'
                                            : 'bg-red-50 text-red-700 border-red-100'
                                        }`}>
                                        {product.centralStatus}
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-between gap-2">
                                <button
                                    onClick={() => toggleExpand(product._id)}
                                    className="flex-1 inline-flex h-9 items-center justify-center text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg transition-colors hover:bg-slate-50"
                                >
                                    {expandedId === product._id ? 'Hide Details' : 'View Data'}
                                </button>
                                <div className="flex gap-2">
                                    <button className="inline-flex h-9 w-9 items-center justify-center text-slate-500 bg-white border border-slate-200 rounded-lg hover:text-[#5B45FF] hover:border-indigo-200 transition-colors">
                                        <Edit className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            {/* MOBILE EXPANDED VIEW */}
                            {expandedId === product._id && (
                                <div className="mt-4 p-4 rounded-xl border border-slate-100 bg-slate-50 text-xs text-slate-600 space-y-3">
                                    <p><strong className="text-slate-900 font-medium">Brand:</strong> {product.productBrand}</p>
                                    <p><strong className="text-slate-900 font-medium">Slug:</strong> {product.productSlug}</p>
                                    <p><strong className="text-slate-900 font-medium">Hierarchy:</strong> {product.productSubCategory} &gt; {product.productChildCategory}</p>
                                    <p className="font-mono text-[#5B45FF] font-medium pt-2 border-t border-slate-200">Ref: {product.inventoryItems}</p>
                                </div>
                            )}
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {products.length === 0 && (
                    <div className="p-8 text-center sm:p-16 bg-white">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 mb-4">
                            <Search className="h-6 w-6 text-[#5B45FF]" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">No products found</h3>
                        <p className="mt-1 text-sm font-medium text-slate-500">Get started by creating a new master product.</p>
                        <button className="mt-6 inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-semibold shadow-sm">
                            <Plus className="h-4 w-4" />
                            Add Master Product
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}