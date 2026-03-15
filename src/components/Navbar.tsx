import { LogoComponent } from "./LogoComponent";
import { Link } from "react-router-dom";

  type NavbarProps = {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
  }

export const Navbar = ({search, setSearch}: NavbarProps) => {

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log(event);
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* logo */}
        <LogoComponent className="size-15" />

        <input
          type="text"
          placeholder="Search Your Products"
          value={search}
          onChange={handleSearch}
          className="border rounded-md px-3 py-1 w-1/3"
        />

        <div className="flex items-center gap-4">
          <button className="text-gray-700 cursor-pointer hover:text-blue-600">
            Cart
          </button>

          <Link to="/login">
            <button className="bg-blue-600 text-white px-4 py-1 rounded-md cursor-pointer hover:bg-blue-700">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
