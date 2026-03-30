import React from 'react';
import bannerImg from "../../assets/banner.png";
import { Play } from 'lucide-react';

const Banner = () => {
    return (
        <div className="bg-base-100 px-6 md:px-16 py-16">

            <div className="max-w-[80%] mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>

                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#E9E4FF] to-[#F3E8FF] text-[#6D28D9] px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-sm hover:shadow-md transition">

                        <span className="w-3 h-3 flex items-center justify-center rounded-full bg-purple-200">
                            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                        </span>

                        New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800 mb-6">
                        Supercharge Your <br /> Digital Workflow
                    </h1>

                    <p className="text-gray-500 mb-8 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                    <div className="flex flex-wrap gap-4">

                        <button className="text-white rounded-full px-6 py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#3b2be0] hover:to-[#7e10d6] hover:scale-105 transition-all duration-300">
                            Explore Products
                        </button>

                        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white  hover:scale-105 transition-all duration-300">
                            <Play className="w-5 h-5" />
                            Watch Demo
                        </button>

                    </div>

                </div>

                <div className="flex justify-center">
                    <img
                        src={bannerImg}
                        alt="AI tools"
                        className="rounded-xl shadow-lg max-w-full"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;