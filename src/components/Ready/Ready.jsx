import React from 'react';

const Ready = () => {
    return (
        <section className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-28 px-6 text-center text-white">

            <div className="max-w-[80%] mx-auto">

                <h2 className="text-4xl font-bold">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="text-purple-200 mt-4">
                    Join thousands of professionals who are already using Digi-tools to work smarter.
                    <br />
                    Start your free trial today.
                </p>

                <div className="flex justify-center gap-4 mt-8 flex-wrap">

                    <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
                        Explore Products
                    </button>

                    <button className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-purple-600 transition">
                        View Pricing
                    </button>

                </div>

                <p className="text-purple-200 text-sm mt-6">
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </section>
    );
};

export default Ready;