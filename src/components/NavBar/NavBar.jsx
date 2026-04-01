import { Pointer, ShoppingCart, Menu } from 'lucide-react';
import React, { useState } from 'react';

const NavBar = ({ cart }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar bg-base-100 shadow-md  px-5 md:px-50 flex justify-between items-center py-4">

            <div>
                <h1 className="text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                    DigiTools
                </h1>
            </div>

            <div className="hidden md:flex">
                <ul className="menu menu-horizontal px-1 font-medium gap-4 flex">
                    <li><a className="hover:text-purple-600">Products</a></li>
                    <li><a className="hover:text-purple-600">Features</a></li>
                    <li><a className="hover:text-purple-600">Pricing</a></li>
                    <li><a className="hover:text-purple-600">Testimonials</a></li>
                    <li><a className="hover:text-purple-600">FAQ</a></li>
                </ul>
            </div>

            <div className="flex items-center gap-3">
                <div className='relative cursor-pointer'>
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                        {cart.length}
                    </span>
                </div>

                <button className="btn btn-ghost hidden md:inline cursor-pointer hover:text-blue-500 hover:font-bold" >
                    Login
                </button>

                <button className="hidden md:inline  text-white rounded-full px-6 py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#3b2be0] hover:to-[#7e10d6] hover:scale-105 transition-all duration-300">
                    Get Started
                </button>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {open && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col gap-4 md:hidden z-50">
                    <a onClick={() => setOpen(false)} className="hover:text-purple-600">Products</a>
                    <a onClick={() => setOpen(false)} className="hover:text-purple-600">Features</a>
                    <a onClick={() => setOpen(false)} className="hover:text-purple-600">Pricing</a>
                    <a onClick={() => setOpen(false)} className="hover:text-purple-600">Testimonials</a>
                    <a onClick={() => setOpen(false)} className="hover:text-purple-600">FAQ</a>

                    <button className="btn btn-ghost">Login</button>
                    <button className="text-white rounded-full px-5 py-2 bg-purple-600">
                        Get Started
                    </button>
                </div>
            )}
        </div>
    );
};

export default NavBar;