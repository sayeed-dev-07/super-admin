"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Languages as LangIcon } from "lucide-react";

export default function LanguagesPage() {
  const [languages, setLanguages] = useState([
    { _id: "lang_1", name: "English", code: "en", centralStatus: "active" },
    { _id: "lang_2", name: "Spanish", code: "es", centralStatus: "active" },
    { _id: "lang_3", name: "French", code: "fr", centralStatus: "inactive" },
  ]);

  return (
    <div className="max-w-5xl mx-auto text-black">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-black">Languages</h1>
          <p className="text-sm font-medium mt-1">Manage supported platform languages.</p>
        </div>
        <Link 
          href="/dashboard/languages/add"
          className="flex items-center gap-2 bg-black text-white px-4 py-2.5 hover:bg-gray-800 transition-colors text-sm font-bold whitespace-nowrap border border-black cursor-pointer"
        >
          <Plus className="h-4 w-4 cursor-pointer" />
          Add Language
        </Link>
      </div>

      <div className="bg-white border border-black overflow-hidden">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-white border-b border-black text-black">
            <tr>
              <th className="px-6 py-4 font-bold border-r border-black">Language Name</th>
              <th className="px-6 py-4 font-bold border-r border-black">ISO Code</th>
              <th className="px-6 py-4 font-bold border-r border-black">Central Status</th>
              <th className="px-6 py-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black">
            {languages.map((language) => (
              <tr key={language._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-r border-black">
                  <div className="flex items-center gap-3">
                    <LangIcon className="h-5 w-5" />
                    <span className="font-bold">{language.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 border-r border-black font-bold uppercase">{language.code}</td>
                <td className="px-6 py-4 border-r border-black font-bold uppercase">{language.centralStatus}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-black hover:bg-gray-200 transition-colors border border-transparent hover:border-black cursor-pointer">
                      <Edit className="h-4 w-4 cursor-pointer" />
                    </button>
                    <button className="p-2 text-black hover:bg-gray-200 transition-colors border border-transparent hover:border-black cursor-pointer">
                      <Trash2 className="h-4 w-4 cursor-pointer" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}