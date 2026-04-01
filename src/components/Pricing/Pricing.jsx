import React from 'react';
import { Check } from "lucide-react";


const Pricing = () => {
    return (
        <div className="py-24 px-6 md:px-16 lg:px-24 max-w-[80%] mx-auto text-center">

            <h2 className="text-5xl font-bold text-gray-900">
                Simple, Transparent Pricing
            </h2>

            <p className="text-gray-500 mt-3">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-16">

                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-lg font-semibold">Starter</h3>
                    <p className="text-gray-500 text-sm mt-1">Perfect for getting started</p>

                    <p className="text-3xl font-bold mt-4">
                        $0<span className="text-sm text-gray-400">/Month</span>
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-gray-600 items-center">
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Access to 10 free tools</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Basic templates</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Community support</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> 1 project per month</li>
                    </ul>

                    <button className="mt-6 w-full py-2 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]              hover:scale-105 transition-all duration-300">
                        Get Started Free
                    </button>
                </div>

                <div className="relative rounded-2xl p-8 text-white bg-linear-to-b from-[#4F39F6] to-[#9514FA] shadow-xl scale-105 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                    {/* Badge */}
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2   bg-yellow-300 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium">
                        Most Popular
                    </span>

                    <h3 className="text-lg font-semibold">Pro</h3>
                    <p className="text-purple-200 text-sm mt-1">Best for professionals</p>

                    <p className="text-3xl font-bold mt-4">
                        $29<span className="text-sm text-purple-200">/Month</span>
                    </p>

                    <ul className="mt-4 space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Access to all premium tools</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Unlimited templates</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Priority support</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Unlimited projects</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Cloud sync</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Advanced analytics</li>
                    </ul>

                    <button className="mt-6 w-full py-2 rounded-full bg-white text-purple-600 font-medium hover:scale-105 transition">
                        Start Pro Trial
                    </button>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-lg font-semibold">Enterprise</h3>
                    <p className="text-gray-500 text-sm mt-1">For teams and businesses</p>

                    <p className="text-3xl font-bold mt-4">
                        $99<span className="text-sm text-gray-400">/Month</span>
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Everything in Pro</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Team collaboration</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Custom integrations</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Dedicated support</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> SLA guarantee</li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" /> Custom branding</li>
                    </ul>

                    <button className="mt-6 w-full py-2 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]   hover:scale-105 transition-all duration-300">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Pricing;