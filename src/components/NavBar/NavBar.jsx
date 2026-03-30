import { Pointer, ShoppingCart } from 'lucide-react';
import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-50 flex justify-between items-center py-4">

            <div>
                <h1 className="text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                    DigiTools
                </h1>
            </div>

            <div className=" flex">
                <ul className="menu menu-horizontal px-1 font-medium gap-4 flex">
                    <li><a className="hover:text-purple-600">Products</a></li>
                    <li><a className="hover:text-purple-600">Features</a></li>
                    <li><a className="hover:text-purple-600">Pricing</a></li>
                    <li><a className="hover:text-purple-600">Testimonials</a></li>
                    <li><a className="hover:text-purple-600">FAQ</a></li>
                </ul>
            </div>

            <div className="flex items-center gap-3">
                <div >
                    <ShoppingCart className="w-5 h-5" />
                </div>

                <button className="btn btn-ghost hidden md:inline">
                    Login
                </button>

                <button className="text-white rounded-full px-6 py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#3b2be0] hover:to-[#7e10d6] hover:scale-105 transition-all duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default NavBar;