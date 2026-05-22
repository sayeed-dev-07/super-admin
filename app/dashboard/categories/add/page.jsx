"use client";

import { useState } from "react";
import { Save, ArrowLeft, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function AddCategoryPage() {
  const [isLoading, setIsLoading] = useState(false);

  // Form state matching your Category schema
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    profileimage: "",
    coverimage: "",
    status: "active",
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
      const token = localStorage.getItem("admin_token"); 
      console.log("Sending category payload:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Category saved successfully!");

    } catch (error) {
      console.error("Error saving category:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-black">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/categories" className="text-black hover:opacity-70 transition-opacity cursor-pointer">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold text-black">Add New Category</h1>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="flex items-center gap-2 bg-black text-white px-5 py-2.5 hover:bg-gray-800 disabled:opacity-70 transition-colors text-sm font-bold border border-black cursor-pointer"
        >
          <Save className="h-4 w-4" />
          {isLoading ? "Saving..." : "Save Category"}
        </button>
      </div>

      <form className="space-y-6">
        {/* Basic Info */}
        <div className="bg-white p-6 border border-black">
          <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 text-black">Category Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-1">Category Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Winter Collection"
                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">URL Slug</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="e.g. winter-collection"
                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
              />
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="bg-white p-6 border border-black">
          <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 text-black">Media Links</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1 flex items-center gap-2">
                <ImageIcon className="h-4 w-4 text-gray-500" />
                Profile Image URL
              </label>
              <input
                type="text"
                name="profileimage"
                value={formData.profileimage}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 flex items-center gap-2">
                <ImageIcon className="h-4 w-4 text-gray-500" />
                Cover Image URL
              </label>
              <input
                type="text"
                name="coverimage"
                value={formData.coverimage}
                onChange={handleChange}
                placeholder="https://example.com/cover.jpg"
                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm bg-white font-medium text-black cursor-text"
              />
            </div>
          </div>
        </div>

        {/* Statuses */}
        <div className="bg-white p-6 border border-black">
          <h2 className="text-lg font-bold border-b border-black pb-2 mb-4 text-black">Platform Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-1">Shop Status</label>
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
                <option value="active">Active (Visible globally)</option>
                <option value="inactive">Inactive (Hidden globally)</option>
              </select>
              <p className="text-xs font-medium text-gray-500 mt-1">Overrides individual shop status.</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}