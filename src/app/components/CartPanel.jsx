import { useCart } from "../context/CartContext";

export default function CartPanel() {
  const { cartItems, showCart } = useCart();

  if (!showCart) return null;

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="absolute top-16 right-[-10px] sm:right-4 w-96 bg-white shadow-lg rounded-lg p-4 z-50">
      <h2 className="font-semibold mb-4">You have {cartItems.length} item{cartItems.length > 1 ? "s" : ""} in your cart!</h2>
      
      <table className="w-full text-sm">
        <thead className="font-bold border-b">
          <tr>
            <th className="text-left">Items</th>
            <th>Units</th>
            <th className="text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id} className="border-b last:border-0">
              <td>{item.name}</td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-right">£{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4 font-bold">
        <span>Total Order Value</span>
        <span>£{total}</span>
      </div>

      <button className="w-full mt-4 bg-red-500 text-white py-2 rounded">Checkout</button>
    </div>
  );
}
