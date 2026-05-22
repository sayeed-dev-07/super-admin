"use client";

import { useState } from "react";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AddProductPage() {
    const [isLoading, setIsLoading] = useState(false);

    // Dummy data simulating what you would fetch from your backend
    const [categories, setCategories] = useState([
        { _id: "cat_123", name: "Clothing" },
        { _id: "cat_456", name: "Electronics" }
    ]);

    // Main Form State matching your schema
    const [formData, setFormData] = useState({
        productName: "",
        productSlug: "",
        status: "active",
        centralStatus: "active",
        productCategory: "", 
        productBrand: "",    
        basePrice: 0,
        productShortDescription: "",
        productTags: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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
            console.log("Sending payload:", formData);

            // Simulate network request
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert("Product saved successfully (Simulation)!");

        } catch (error) {
            console.error("Error saving product:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto text-black">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/products" className="text-black hover:opacity-70 transition-opacity cursor-pointer">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="text-2xl font-bold text-black">Add New Product</h1>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex items-center gap-2 bg-black text-white px-5 py-2.5 hover:bg-gray-800 disabled:opacity-70 transition-colors text-sm font-bold border border-black cursor-pointer"
                >
                    <Save className="h-4 w-4" />
                    {isLoading ? "Saving..." : "Save Product"}
                </button>
            </div>

            <form className="space-y-6">
                {/* Basic Info Card */}
                <div className="bg-white p-6 border border-black">
                    <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 text-black">Basic Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold mb-1">Product Name</label>
                            <input
                                type="text"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Product Slug</label>
                            <input
                                type="text"
                                name="productSlug"
                                value={formData.productSlug}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold mb-1">Short Description</label>
                            <textarea
                                name="productShortDescription"
                                rows="3"
                                value={formData.productShortDescription}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                            />
                        </div>
                    </div>
                </div>

                {/* Relationships Card */}
                <div className="bg-white p-6 border border-black">
                    <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 text-black">Organization (Relations)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold mb-1">Category</label>
                            <select
                                name="productCategory"
                                value={formData.productCategory}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-pointer"
                            >
                                <option value="">Select a category...</option>
                                {categories.map((cat) => (
                                    <option key={cat._id} value={cat._id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                            <p className="text-xs font-medium text-gray-500 mt-1">Saves as objID in database</p>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-1">Tags (Comma separated)</label>
                            <input
                                type="text"
                                name="productTags"
                                placeholder="summer, casual, new"
                                onChange={handleArrayChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
                            />
                        </div>
                    </div>
                </div>

                {/* Settings Card */}
                <div className="bg-white p-6 border border-black">
                    <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 text-black">Status Settings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold mb-1">Store Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-pointer"
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
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
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}