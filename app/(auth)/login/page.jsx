"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);


        console.log("Submitting Login Data:", formData);

        // Simulate API delay for UI testing
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen text-background flex items-center justify-center bg-gray-50 p-2 sm:p-4">
            <div className="w-full max-w-md bg-foreground rounded-2xl shadow-sm border border-background p-2.5 sm:p-8">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-semibold  mb-2">Superadmin Portal</h1>
                    <p className=" text-sm">Sign in to manage your system</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-black mb-1">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-black" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="block w-full pl-10 pr-3 py-2.5 border border-background rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 sm:text-sm transition-colors"
                                placeholder="admin@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold  mb-1">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 " />
                            </div>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="block w-full pl-10 pr-3 py-2.5 border border-background rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 sm:text-sm transition-colors"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex cursor-pointer items-center justify-center gap-2 bg-gray-900  text-white py-2.5 px-4 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 transition-all font-medium disabled:opacity-70"
                    >
                        {isLoading ? "Signing in..." : "Sign In"}
                        {!isLoading && <ArrowRight className="h-4 w-4" />}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="cursor-pointer text-gray-900 hover:underline font-semibold">
                        Register your shop
                    </Link>
                </div>
            </div>
        </div>
    );
}