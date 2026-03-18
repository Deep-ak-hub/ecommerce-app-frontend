import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  UserPlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { LogoComponent } from "./LogoComponent";
import { Link } from "react-router";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "On Sale", href: "#", current: false },
  { name: "New Arrivals", href: "#", current: false },
  { name: "Brands", href: "#", current: false },
];

type NavBarProps = {
  search?: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ search, setSearch }: NavBarProps) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Disclosure
      as="nav"
      className="relative bg-primary after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

        <div className="relative flex h-16 items-center justify-between">
          
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-2 focus:-outline-offset-1 focus:outline-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-start sm:items-stretch pl-12 sm:pl-0">
            {/* logo component */}
            <Link to="/" className="flex shrink-0 items-center">
              <LogoComponent className="size-8 sm:size-10 md:size-12" />
            </Link>

            {/* menu items */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-950/50 text-white"
                        : "text-gray-100 hover:bg-white/20 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center justify-between mx-2 sm:mx-4 lg:mx-8">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={handleSearch}
                  className="w-full px-3 sm:px-4 py-2 pl-8 sm:pl-10 rounded-lg text-xs sm:text-sm bg-white/10 text-gray-800 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
                />
                <MagnifyingGlassIcon className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 size-4 sm:size-5 text-white pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-6 md:gap-5 lg:gap-4">
              <ShoppingCartIcon className="size-5 sm:size-6 md:size-7 cursor-pointer transform hover:scale-110" />

              <UserPlusIcon className="size-5 sm:size-6 md:size-7 cursor-pointer transform hover:scale-110" />
            </div>
          </div>

        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-2 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-950/50 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
