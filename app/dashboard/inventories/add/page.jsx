"use client";

import { useState } from "react";
import { Save, ArrowLeft, PackagePlus, DollarSign, Palette } from "lucide-react";
import Link from "next/link";

export default function AddInventoryPage() {
    const [isLoading, setIsLoading] = useState(false);

    // Dummy relational data (these would be fetched from your database)
    const [relations] = useState({
        warehouses: [
            { _id: "wh_1", name: "East Coast Hub" },
            { _id: "wh_2", name: "West Coast Annex" }
        ],
        sizes: [
            { _id: "sz_1", name: "Medium" },
            { _id: "sz_2", name: "Large" },
            { _id: "sz_3", name: "One Size / OS" }
        ]
    });

    // Form state strictly matching your Inventory schema
    const [formData, setFormData] = useState({
        sku: "",
        productOpeningStock: "",
        warehouseId: "",
        size: "",
        basePrice: "",
        productPurchasePrice: "",
        color: "",
        colorImage: "",
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "number" && value !== "" ? Number(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("Sending inventory payload:", formData);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert("Inventory allocated successfully!");
        } catch (error) {
            console.error("Error saving inventory:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-20 text-slate-900">
            
            {/* Header Sticky Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 bg-slate-50/80 backdrop-blur-md z-20 py-4 border-b border-slate-200 -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard/inventories" className="p-2 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-[#5B45FF] transition-colors shadow-sm cursor-pointer">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">Allocate Inventory</h1>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">Add a new SKU variant and allocate stock to a warehouse.</p>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 bg-[#5B45FF] text-white px-6 py-2.5 rounded-xl hover:bg-[#4a35e8] transition-all font-semibold shadow-lg shadow-indigo-200 disabled:opacity-50 cursor-pointer"
                >
                    <Save className="h-4 w-4" />
                    {isLoading ? "Saving..." : "Save Inventory"}
                </button>
            </div>

            <form className="space-y-8 mt-6">
                
                {/* Core Details Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                        <PackagePlus className="h-4 w-4" /> Stock & Allocation
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input 
                            label="SKU (Stock Keeping Unit)" 
                            name="sku" 
                            value={formData.sku} 
                            onChange={handleChange} 
                            placeholder="e.g. TSHIRT-BLK-M" 
                            className="font-mono text-sm"
                        />
                        <Input 
                            label="Opening Stock Quantity" 
                            name="productOpeningStock" 
                            type="number"
                            value={formData.productOpeningStock} 
                            onChange={handleChange} 
                            placeholder="e.g. 150" 
                        />
                        <Select 
                            label="Assign Warehouse" 
                            name="warehouseId" 
                            value={formData.warehouseId} 
                            onChange={handleChange} 
                            options={[{v: "", l: "Select Warehouse..."}, ...relations.warehouses.map(w => ({ v: w._id, l: w.name }))]} 
                        />
                        <Select 
                            label="Assign Size" 
                            name="size" 
                            value={formData.size} 
                            onChange={handleChange} 
                            options={[{v: "", l: "Select Size..."}, ...relations.sizes.map(s => ({ v: s._id, l: s.name }))]} 
                        />
                    </div>
                </div>

                {/* Pricing & Variations Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                        <DollarSign className="h-4 w-4" /> Pricing & Appearance
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input 
                            label="Purchase Price (Cost)" 
                            name="productPurchasePrice" 
                            type="number"
                            value={formData.productPurchasePrice} 
                            onChange={handleChange} 
                            placeholder="0.00" 
                        />
                        <Input 
                            label="Base Selling Price" 
                            name="basePrice" 
                            type="number"
                            value={formData.basePrice} 
                            onChange={handleChange} 
                            placeholder="0.00" 
                        />
                        
                        <div className="md:col-span-2 pt-4 mt-2 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input 
                                label="Color Name" 
                                name="color" 
                                value={formData.color} 
                                onChange={handleChange} 
                                placeholder="e.g. Midnight Black" 
                            />
                            <Input 
                                label="Color Image URL (Swatch)" 
                                name="colorImage" 
                                value={formData.colorImage} 
                                onChange={handleChange} 
                                placeholder="https://example.com/black-swatch.jpg" 
                            />
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}

// Reusable UI Components for clean form fields
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