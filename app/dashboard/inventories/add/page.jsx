"use client";

import { useState } from "react";
import { Save, ArrowLeft, PackagePlus } from "lucide-react";
import Link from "next/link";

export default function AddInventoryPage() {
    const [isLoading, setIsLoading] = useState(false);

    // Dummy relational data (would come from your DB)
    const warehouses = [{ _id: "wh_1", name: "East Coast Hub" }];
    const sizes = [{ _id: "sz_1", name: "Medium" }, { _id: "sz_2", name: "Large" }];

    // Form state matching your Inventory schema
    const [formData, setFormData] = useState({
        warehouseId: "",
        size: "",
        color: "",
        colorImage: "",
        sku: "",
        productPurchasePrice: 0,
        basePrice: 0,
        productOpeningStock: 0,
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("Sending inventory payload:", formData);
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert("Inventory added successfully!");
        } catch (error) {
            console.error("Error saving inventory:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto text-black">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/inventories" className="text-black hover:opacity-70 transition-opacity">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="text-2xl font-bold text-black">Add Stock (Inventory)</h1>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex items-center gap-2 bg-black text-white px-5 py-2.5 hover:bg-gray-800 disabled:opacity-70 transition-colors text-sm font-bold border border-black"
                >
                    <Save className="h-4 w-4" />
                    {isLoading ? "Saving..." : "Save Inventory"}
                </button>
            </div>

            <form className="space-y-6">
                {/* Core Details */}
                <div className="bg-white p-6 border border-black">
                    <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 flex items-center gap-2 text-black">
                        <PackagePlus className="h-5 w-5" />
                        Identification & Allocation
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold mb-1">SKU (Stock Keeping Unit)</label>
                            <input
                                type="text"
                                name="sku"
                                value={formData.sku}
                                onChange={handleChange}
                                placeholder="e.g. TSHIRT-BLK-M"
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Opening Stock Quantity</label>
                            <input
                                type="number"
                                name="productOpeningStock"
                                value={formData.productOpeningStock}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Assign Warehouse</label>
                            <select
                                name="warehouseId"
                                value={formData.warehouseId}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black"
                            >
                                <option value="">Select Warehouse...</option>
                                {warehouses.map(wh => <option key={wh._id} value={wh._id}>{wh.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Assign Size</label>
                            <select
                                name="size"
                                value={formData.size}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black"
                            >
                                <option value="">Select Size...</option>
                                {sizes.map(sz => <option key={sz._id} value={sz._id}>{sz.name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Pricing & Variations */}
                <div className="bg-white p-6 border border-black">
                    <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 text-black">Pricing & Visuals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold mb-1">Purchase Price (Cost)</label>
                            <input
                                type="number"
                                name="productPurchasePrice"
                                value={formData.productPurchasePrice}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Base Selling Price</label>
                            <input
                                type="number"
                                name="basePrice"
                                value={formData.basePrice}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Color Name</label>
                            <input
                                type="text"
                                name="color"
                                value={formData.color}
                                onChange={handleChange}
                                placeholder="e.g. Midnight Black"
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Color Image URL (Swatch)</label>
                            <input
                                type="text"
                                name="colorImage"
                                value={formData.colorImage}
                                onChange={handleChange}
                                placeholder="https://example.com/black-swatch.jpg"
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}