import React from 'react';
import { BiBell, BiGlobe, BiPackage, BiUser, BiUserCircle } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoStorefront } from 'react-icons/io5';
import { PiSquaresFour } from 'react-icons/pi';


const AdminLayout = ({ children }) => {
  const navItems = [
    { name: 'Dashboard', icon: <PiSquaresFour size={20} />, active: true },
    { name: 'Tenant Management', icon: <IoStorefront size={20} />, active: false },
    { name: 'Global Users', icon: <BiUser size={20} />, active: false },
    { name: 'Central Catalog', icon: <BiPackage size={20} />, active: false },
    { name: 'System Master', icon: <BiGlobe size={20} />, active: false },
    { name: 'Settings', icon: <CiSettings size={20} />, active: false },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col transition-all">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <span className="text-xl font-bold text-white tracking-wide">SysAdmin<span className="text-indigo-500">.</span></span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${item.active
                    ? 'bg-indigo-600 text-white'
                    : 'hover:bg-slate-800 hover:text-white'
                    }`}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10">
          <div className="flex items-center w-96 relative">
            <FaMagnifyingGlass size={18} className="absolute left-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search tenants, users, or products..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 relative">
              <BiBell size={22} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <button className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">
              <BiUserCircle size={28} weight="fill" className="text-slate-400" />
              <span>Super Admin</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;