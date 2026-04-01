import React from 'react';

const State = () => {
    return (
        <div className=" py-10">

            <div className="w-full bg-linear-to-r from-purple-600 to-purple-800 text-white py-12 px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 justify-between text-center items-center max-w-[60%] mx-auto">

                    <div>
                        <h2 className="text-7xl font-bold">50K+</h2>
                        <p className="opacity-80 mt-2 text-2xl">Active Users</p>
                    </div>

                    <div>
                        <h2 className="text-7xl font-bold">200+</h2>
                        <p className="opacity-80 mt-2 text-2xl">Premium Tools</p>
                    </div>

                    <div>
                        <h2 className="text-7xl font-bold">4.9</h2>
                        <p className="opacity-80 mt-2 text-2xl">Rating</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default State;