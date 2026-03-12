import { LogoComponent } from "./LogoComponent";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* logo */}
        <LogoComponent className="size-15" />

        <input
          type="text"
          placeholder="Search Your Products"
          className="border rounded-md px-3 py-1 w-1/3"
        />

        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-blue-600">Cart</button>

          <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};
