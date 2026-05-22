import React from 'react';


import AdminLayout from '@/components/layout/AdminLayout';
import { BsFunnel, BsImageFill } from 'react-icons/bs';
import { FaMagnifyingGlass } from 'react-icons/fa6';


// Static Data matching Figma 'brands' schema
const staticBrands = [
    { id: '1', tenantId: 'T-1001', name: 'Nike', slug: 'nike', profileimage: 'nike-logo.jpg', status: 'active', centralStatus: 'active' },
    { id: '2', tenantId: 'T-1002', name: 'Adidas', slug: 'adidas', profileimage: 'adidas-logo.jpg', status: 'active', centralStatus: 'active' },
    { id: '3', tenantId: 'T-1003', name: 'FakeGucci', slug: 'fake-gucci', profileimage: 'gucci-bootleg.jpg', status: 'active', centralStatus: 'inactive' },
];

export default function BrandsPage() {
    return (
        <AdminLayout>
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Master Brands</h1>
                        <p className="text-slate-500 mt-1">Manage and override tenant brand entries.</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                        <BsFunnel size={16} />
                        Filter Brands
                    </button>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="p-4 border-b border-slate-200">
                        <div className="relative max-w-md">
                            <FaMagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search brands or tenant ID..."
                                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200">
                                    <th className="px-6 py-4 font-semibold">Brand Profile</th>
                                    <th className="px-6 py-4 font-semibold">Slug</th>
                                    <th className="px-6 py-4 font-semibold">Tenant ID</th>
                                    <th className="px-6 py-4 font-semibold">Tenant Status</th>
                                    <th className="px-6 py-4 font-semibold">Central Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-slate-100">
                                {staticBrands.map((brand) => (
                                    <tr key={brand.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-slate-400 border border-slate-200">
                                                <BsImageFill size={20} />
                                            </div>
                                            <span className="font-medium text-slate-900">{brand.name}</span>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-slate-500 text-xs">{brand.slug}</td>
                                        <td className="px-6 py-4 font-mono text-indigo-600">{brand.tenantId}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${brand.status === 'active' ? 'bg-slate-100 text-slate-700' : 'bg-red-50 text-red-600'}`}>
                                                {brand.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 cursor-pointer">
                                                <div className={`w-9 h-5 rounded-full flex items-center p-0.5 transition-colors ${brand.centralStatus === 'active' ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                                                    <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${brand.centralStatus === 'active' ? 'translate-x-4' : 'translate-x-0'}`}></div>
                                                </div>
                                                <span className="text-xs text-slate-500 font-medium capitalize">{brand.centralStatus}</span>
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