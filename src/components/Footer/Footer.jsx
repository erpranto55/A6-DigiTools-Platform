import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#101727] text-gray-300 px-6 md:px-16 lg:px-24 py-20">

            <div className="max-w-[80%] mx-auto grid grid-cols-5 md:grid-cols-6 gap-10">

                <div className="md:col-span-2">
                    <h2 className="text-white text-2xl font-bold">DigiTools</h2>
                    <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-sm">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Product</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Features</li>
                        <li className="hover:text-white cursor-pointer">Pricing</li>
                        <li className="hover:text-white cursor-pointer">Templates</li>
                        <li className="hover:text-white cursor-pointer">Integrations</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Press</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Documentation</li>
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Community</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Social Links</h3>

                    <div className="flex gap-3">

                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black  hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300">
                            <i className="fab fa-youtube text-sm"></i>
                        </div>

                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black  hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300">
                            <i className="fab fa-facebook-f text-sm"></i>
                        </div>

                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300">
                            <i className="fab fa-linkedin-in text-sm"></i>
                        </div>

                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

                <p>© 2026 Digitools. All rights reserved.</p>

                <div className="flex gap-6 mt-4 md:mt-0">
                    <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer">Terms of Service</span>
                    <span className="hover:text-white cursor-pointer">Cookies</span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;