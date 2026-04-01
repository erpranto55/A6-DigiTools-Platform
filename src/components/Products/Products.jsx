import { Check } from 'lucide-react';
import React from 'react';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const Products = ({ cart, setCart }) => {
    const [products, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState("products");
    const [addedItems, setAddedItems] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        const exists = cart.find(item => item.id === product.id);

        if (!exists) {
            setCart([...cart, product]);
            setAddedItems([...addedItems, product.id]);

            toast.success("Added to cart!", {
                position: "top-right",
                autoClose: 1500,
            });
        } else {
            toast.warning("Already added!", {
                position: "top-right",
                autoClose: 1500,
            });
        }
    };

    const handleRemoveFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        toast.error("Removed from cart!", {
            position: "top-right",
            autoClose: 1500,
        });
    }

    const handleCheckout = () => {
        setCart([]);
        toast.info("Checkout successful!", {
            position: "top-right",
            autoClose: 1500,
        });
    };

    return (
        <div className="px-5 md:px-10 lg:px-20 py-16 max-w-7xl mx-auto">

            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">
                    Premium Digital Tools
                </h2>

                <p className="text-gray-500 mt-2 max-w-xl mx-auto">
                    Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.
                </p>

                <div className="flex justify-center mt-6">

                    <div className="flex items-center bg-gray-100 rounded-full p-1 shadow-inner">

                        <button
                            onClick={() => setActiveTab("products")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                                        ${activeTab === "products"
                                    ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md hover:scale-105 hover:from-[#3b2be0] hover:to-[#7e10d6]"
                                    : "text-gray-600 hover:text-purple-600"
                                }`}
                        >
                            Products
                        </button>

                        <button
                            onClick={() => setActiveTab("cart")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                                        ${activeTab === "cart"
                                    ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md hover:scale-105 hover:from-[#3b2be0] hover:to-[#7e10d6]"
                                    : "text-gray-600 hover:text-purple-600"
                                }`}
                        >
                            Cart ({cart.length})
                        </button>

                    </div>
                </div>
            </div>

            {activeTab === "products" ? (
                <div className="grid md:grid-cols-3 gap-8 mt-10">
                    {products.map(product => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                        >

                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                                    <img
                                        src={`/products/${product.icon}`}
                                        className="w-6 h-6"
                                    />
                                </div>

                                <span
                                    className={`text-xs px-3 py-1 rounded-full font-medium
                                                ${product.tag === "Best Seller" && "bg-yellow-100 text-yellow-600"}
                                                ${product.tag === "Popular" && "bg-purple-100 text-purple-600"}
                                                ${product.tag === "New" && "bg-green-100 text-green-600"}
                                              `}
                                >
                                    {product.tag}
                                </span>
                            </div>

                            <h3 className="font-semibold text-lg">
                                {product.name}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                {product.description}
                            </p>

                            <p className="font-bold text-lg mt-3">
                                ${product.price}
                                <span className="text-sm text-gray-400 ml-1">
                                    /{product.period}
                                </span>
                            </p>

                            <ul className="text-sm mt-3 space-y-1 text-gray-600">
                                {product.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="text-green-500">✔</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button
                                disabled={addedItems.includes(product.id)}
                                onClick={() => handleAddToCart(product)}
                                className={`mt-5 w-full rounded-full transition-all duration-300
                                        ${addedItems.includes(product.id)
                                        ? "flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-purple-600 text-white cursor-not-allowed"
                                        : "flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:scale-105"
                                    }`}
                            >
                                {addedItems.includes(product.id) ? (
                                    <>
                                        <Check className="w-4 h-4" /> Added
                                    </>
                                ) : (
                                    "Buy Now"
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="max-w-2xl mx-auto border rounded-xl p-6 shadow mt-10">
                    <h3 className="font-bold mb-4">Your Cart</h3>

                    {cart.length === 0 ? (
                        <p className="text-gray-500">Cart is empty</p>
                    ) : (
                        <>
                            {cart.map((item, index) => (
                                <div key={index} className="flex justify-between items-center mb-3">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={`/products/${item.icon}`}
                                            className="w-10 h-10"
                                        />
                                        <div>
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-sm text-gray-500">${item.price}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleRemoveFromCart(index)}
                                        className="text-red-500 text-sm hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}

                            {/* Total */}
                            <div className="flex justify-between mt-4 font-bold">
                                <span>Total:</span>
                                <span>
                                    $
                                    {cart.reduce((sum, item) => sum + item.price, 0)}
                                </span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="mt-4 w-full py-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
                                hover:from-[#3b2be0] hover:to-[#7e10d6]transition-all duration-300">
                                Proceed To Checkout
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Products;