import { useCart } from "../context/CartContext";

export default function CartIcon() {
  const { cartCount, toggleCart } = useCart();

return (
   <div className="flex items-center gap-1" onClick={toggleCart}>
      <span className="text-2xl relative cursor-pointer">
        🛒
       {cartCount > 0 && (
          <span className="absolute left-0 bottom-0 bg-red-500 text-white rounded-full px-2 text-xs translate-x-[-40%] translate-y-[40%]">
            {cartCount}
          </span>
        )}
      </span>
      <span className="ml-2 font-medium">Shopping Cart</span>
    </div>
);
}