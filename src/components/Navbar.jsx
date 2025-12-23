import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logo.png";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Tools", to: "/tools" },
  { name: "Contact", to: "/contact" },
];

const linkClasses = ({ isActive }) =>
  `text-sm uppercase font-semibold cursor-pointer transition-colors
   ${
     isActive
       ? "text-[#ce000c] hover:opacity-80"
       : "text-black dark:text-white hover:text-[#ce000c]"
   }`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky z-999 dark:bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <span className="sr-only">Pure Codes</span>
          <img src={Logo} alt="Pure Codes" className="h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.to} className={linkClasses}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-black dark:text-white hover:text-[#ce000c] transition-colors"
        >
          <Bars3Icon className="size-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogPanel className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white p-6 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <img src={Logo} alt="Pure Codes" className="h-10" />
            <button onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="size-6  text-black dark:text-white hover:text-[#ce000c]" />
            </button>
          </div>

          <div className="mt-8 space-y-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-base font-semibold transition-colors
                  ${
                    isActive
                      ? "bg-[#ce000c]/10 text-[#ce000c]"
                      : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 hover:text-[#ce000c]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
