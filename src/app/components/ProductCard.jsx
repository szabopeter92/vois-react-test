"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import ProductTooltip from "./ProductTooltip";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [showTooltip, setShowTooltip] = useState(false);

return (
    <div className="p-3 relative max-w-2xl flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-md" />
        <h3>{product.name}</h3>
        <p>£{product.price}</p>
        <button onClick={() => addToCart(product)} className="bg-red-500 text-white px-4 py-2 mt-2 w-full rounded cursor-pointer ">
            Add to Cart
        </button>

        <div
            className="absolute top-2 right-0 cursor-pointer flex items-center justify-center"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            style={{ width: 40, height: 40}}
        >
            <span className="text-2xl text-white flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 hover:bg-red-500">
                ?
            </span>
            {showTooltip && <ProductTooltip product={product} />}
        </div>
    </div>
);
}
