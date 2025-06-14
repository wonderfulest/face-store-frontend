import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";

import { makePostRequest } from "@/utils/api";

// Paddle Overlay Checkout 脚本引入（仅前端渲染时加载）
const PADDLE_CLIENT_TOKEN = "test_4b257319dff941c8459510c962c"; // 替换为你的 Paddle Vendor ID
const PADDLE_PRODUCT_ID = "pro_01jxkx1kf1y0tcxgd73qyj628e"; // 替换为你的 Paddle Product ID
const PADDLE_PRICE_ID = "pri_01jxkx8b6cqeg0pqdhf1v15ffv"; // 替换为你的 Paddle Product Price

const Cart = () => {
    const [loading, setLoading] = useState(false);
    const { cartItems } = useSelector((state) => state.cart);

    useEffect(() => {
        if (typeof window !== "undefined" && !window.Paddle) {
            const script = document.createElement("script");
            script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
            script.async = true;
            script.onload = () => {
                window.Paddle.Environment.set("sandbox");
                window.Paddle.Initialize({ 
                    token: PADDLE_CLIENT_TOKEN
                });
                
            };
            document.body.appendChild(script);
        } else if (window.Paddle) {
            window.Paddle.Environment.set("sandbox");
            window.Paddle.Initialize({ 
                token: PADDLE_CLIENT_TOKEN
            });
        }
    }, []);

    const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.attributes.price,
            0
        );
    }, [cartItems]);

    const handlePayment = async () => {
        setLoading(true);
        if (typeof window !== "undefined" && window.Paddle) {
            window.Paddle.Checkout.open({
                eventCallback: function(data) {
                    if (data.name === 'checkout.completed') {
                        // 支付成功后的逻辑
                        setLoading(false);
                    }
                    if (data.name === 'checkout.closed') {
                        setLoading(false);
                    }
                },
                settings: {
                    displayMode: 'overlay',
                },
                items: [
                    {
                        priceId: PADDLE_PRICE_ID,
                        quantity: 1,
                    },
                ],
                customer: { email: 'user@email.com' }, // 可选
            });
        } else {
            alert('Paddle 加载失败，请刷新页面重试');
            setLoading(false);
        }
    };

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {cartItems.length > 0 && (
                    <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Shopping Cart
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            {/* CART ITEMS START */}
                            <div className="flex-[2]">
                                <div className="text-lg font-bold">
                                    Cart Items
                                </div>
                                {cartItems.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </div>
                            {/* CART ITEMS END */}

                            {/* SUMMARY START */}
                            <div className="flex-[1]">
                                <div className="text-lg font-bold">Summary</div>

                                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                    <div className="flex justify-between">
                                        <div className="uppercase text-md md:text-lg font-medium text-black">
                                            Subtotal
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                            $;{subTotal}
                                        </div>
                                    </div>
                                    <div className="text-sm md:text-md py-5 border-t mt-5">
                                        The subtotal reflects the total price of
                                        your order, including duties and taxes,
                                        before any applicable discounts. It does
                                        not include delivery costs and
                                        international transaction fees.
                                    </div>
                                </div>

                                {/* BUTTON START */}
                                <button
                                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center relative"
                                    onClick={handlePayment}
                                    disabled={loading}
                                >
                                    {loading && (
                                        <span className="absolute left-4">
                                            <img src="/spinner.svg" className="w-6 h-6" />
                                        </span>
                                    )}
                                    Checkout
                                </button>
                                {/* BUTTON END */}
                            </div>
                            {/* SUMMARY END */}
                        </div>
                        {/* CART CONTENT END */}
                    </>
                )}

                {/* This is empty screen */}
                {cartItems.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            Your cart is empty
                        </span>
                        <span className="text-center mt-4">
                            Looks like you have not added anything in your cart.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

export default Cart;
