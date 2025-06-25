import CartIcon from "./CartIcon";
import CartPanel from "./CartPanel";

export default function Header() {
  return (
    <header className="bg-gray-400 shadow-md relative w-full">
        <div className="flex items-center lg:justify-center justify-start p-4">
            <h1 className="text-3xl pt-2 pb-2">Hallo World</h1>
        </div>
        <div className="absolute top-5 right-4">
            <CartIcon />
            <CartPanel />
        </div>
    </header>
  )
}