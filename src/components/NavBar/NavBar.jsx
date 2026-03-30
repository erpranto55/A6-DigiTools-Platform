import { Pointer, ShoppingCart } from 'lucide-react';
import React from 'react';

const NavBar = ({ cart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return (
        <div className="navbar bg-base-100 shadow-md px-50 flex justify-between items-center py-4">

            <div className="">
                <h1 className="text-2xl font-bold text-purple-600 ">
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

                <button className="btn bg-purple-600 text-white rounded-full px-5 hover:bg-purple-700">
                    Get Started
                </button>

            </div>
        </div>
    );
};

export default NavBar;