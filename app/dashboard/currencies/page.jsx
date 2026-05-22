"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Coins } from "lucide-react";

export default function CurrenciesPage() {
  const [currencies, setCurrencies] = useState([
    { _id: "cur_1", name: "US Dollar", cc: "USD", symbol: "$", centralStatus: "active" },
    { _id: "cur_2", name: "Euro", cc: "EUR", symbol: "€", centralStatus: "active" },
  ]);

  return (
    <div className="max-w-5xl mx-auto text-black">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-black">Currencies</h1>
          <p className="text-sm font-medium mt-1">Manage global currencies and their symbols.</p>
        </div>
        <Link 
          href="/dashboard/currencies/add"
          className="flex items-center gap-2 bg-black text-white px-4 py-2.5 hover:bg-gray-800 transition-colors text-sm font-bold whitespace-nowrap border border-black cursor-pointer"
        >
          <Plus className="h-4 w-4 cursor-pointer" />
          Add Currency
        </Link>
      </div>

      <div className="bg-white border border-black overflow-hidden">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-white border-b border-black text-black">
            <tr>
              <th className="px-6 py-4 font-bold border-r border-black">Currency Name</th>
              <th className="px-6 py-4 font-bold border-r border-black">Code (CC)</th>
              <th className="px-6 py-4 font-bold border-r border-black">Symbol</th>
              <th className="px-6 py-4 font-bold border-r border-black">Central Status</th>
              <th className="px-6 py-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black">
            {currencies.map((currency) => (
              <tr key={currency._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-r border-black">
                  <div className="flex items-center gap-3">
                    <Coins className="h-5 w-5" />
                    <span className="font-bold">{currency.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 border-r border-black font-bold">{currency.cc}</td>
                <td className="px-6 py-4 border-r border-black font-bold">{currency.symbol}</td>
                <td className="px-6 py-4 border-r border-black font-bold uppercase">{currency.centralStatus}</td>
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