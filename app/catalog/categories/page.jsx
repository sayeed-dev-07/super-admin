
import React from 'react';

import AdminLayout from '@/components/layout/AdminLayout';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { BsImageFill } from 'react-icons/bs';


// Static Data matching Figma 'categorie', 'sub-categorie', 'child-categorie'
const staticCategories = [
    { id: 'C1', tenantId: 'T-1001', name: 'Electronics', slug: 'electronics', profileimage: 'img1.png', coverimage: 'cov1.png', status: 'active', centralStatus: 'active', type: 'Main' },
    { id: 'C2', tenantId: 'T-1001', name: 'Laptops', slug: 'laptops', profileimage: 'img2.png', coverimage: 'cov2.png', status: 'active', centralStatus: 'active', type: 'Sub' },
    { id: 'C3', tenantId: 'T-1002', name: 'Apparel', slug: 'apparel', profileimage: 'img3.png', coverimage: 'cov3.png', status: 'active', centralStatus: 'active', type: 'Main' },
];

export default function CategoriesPage() {
    return (
        <AdminLayout>
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Master Categories</h1>
                        <p className="text-slate-500 mt-1">Global view of categories, sub-categories, and child-categories.</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="p-4 border-b border-slate-200">
                        <div className="relative max-w-md">
                            <FaMagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search categories..."
                                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200">
                                    <th className="px-6 py-4 font-semibold">Category Name</th>
                                    <th className="px-6 py-4 font-semibold">Level</th>
                                    <th className="px-6 py-4 font-semibold">Images (Profile/Cover)</th>
                                    <th className="px-6 py-4 font-semibold">Tenant ID</th>
                                    <th className="px-6 py-4 font-semibold">Central Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-slate-100">
                                {staticCategories.map((cat) => (
                                    <tr key={cat.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-900">{cat.name}</div>
                                            <div className="text-xs text-slate-400 font-mono mt-0.5">{cat.slug}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${cat.type === 'Main' ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-600'}`}>
                                                {cat.type} Category
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 flex gap-2">
                                            <div className="w-8 h-8 bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-slate-400" title="Profile Image">
                                                <BsImageFill size={16} />
                                            </div>
                                            <div className="w-12 h-8 bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-slate-400" title="Cover Image">
                                                <BsImageFill size={16} />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-slate-500">{cat.tenantId}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 cursor-pointer">
                                                <div className={`w-9 h-5 rounded-full flex items-center p-0.5 transition-colors ${cat.centralStatus === 'active' ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                                                    <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${cat.centralStatus === 'active' ? 'translate-x-4' : 'translate-x-0'}`}></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
