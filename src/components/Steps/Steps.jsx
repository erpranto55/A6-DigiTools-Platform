import React from 'react';
import { User, Box, Rocket } from "lucide-react";

const Steps = () => {
    const arr = [
        { icon: User, title: "Create Account", desc: "Sign up for free in seconds. No credit card required to get started.", step: "01" },
        { icon: Box, title: "Choose Products", desc: "Browse our catalog and select the tools that fit your needs.", step: "02" },
        { icon: Rocket, title: "Start Creating", desc: "Download and start using your premium tools immediately.", step: "03" }
    ]

    return (
        <div className="py-24 px-6 md:px-16 lg:px-24 bg-white text-center max-w-[80%] mx-auto">

            <h2 className="text-5xl font-bold text-gray-900">
                Get Started In 3 Steps
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
                Start using premium digital tools in minutes, not hours.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-16">

                {arr.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={i}
                            className="relative bg-white rounded-2xl p-10 border border-gray-100 
                            shadow-sm hover:shadow-xl hover:-translate-y-2 
                            transition-all duration-300"
                        >
                            <span className="absolute top-5 right-5 text-xs font-semibold 
                            bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
                            text-white w-8 h-8 flex items-center justify-center rounded-full">
                                {item.step}
                            </span>

                            <div className="w-20 h-20 mx-auto rounded-full 
                            bg-linear-to-b from-[#F3E8FF] to-[#E9E4FF] 
                            flex items-center justify-center mb-6">
                                <Icon className="text-purple-600 w-8 h-8" />
                            </div>

                            <h3 className="font-semibold text-lg text-gray-900">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default Steps;   