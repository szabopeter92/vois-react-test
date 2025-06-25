"use client";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import {products} from "./data/products";

export default function Home() {
  return (
    <CartProvider>
      <Header />
      <div className="min-h-screen flex items-center flex-col bg-gray-100 p-8 relative">
        <h1 className="text-4xl font-bold text-center mb-10">FingerTips <br /> Store</h1>
        <div className="max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </CartProvider>
  );
}
