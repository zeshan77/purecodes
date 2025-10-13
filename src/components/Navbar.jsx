import { useState, Fragment } from "react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";
import Logo from "/logo.png";

const navigation = [
  { name: "Home", href: "home" },
  { name: "Services", href: "services" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center lg:flex-1">
          <ScrollLink
            to="home"
            smooth={true}
            duration={600}
            offset={-80}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src={Logo}
              alt="PureCodes"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </ScrollLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="text-[#c662e0]"
              className="relative text-[15px] font-semibold text-gray-800 cursor-pointer hover:text-[#c662e0] transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#c662e0] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        {/* CTA button */}
        <div className="hidden lg:flex">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="ml-6 px-5 py-2.5 bg-gradient-to-r from-[#c2aaff] to-[#c566db] text-white text-sm font-semibold rounded shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Let’s Talk
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-gray-800 hover:text-[#c662e0] transition-colors duration-200"
          >
            <Bars3Icon className="h-7 w-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Fade */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog onClose={setMobileMenuOpen} className="lg:hidden">
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>

          {/* Panel */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
          >
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <img src={Logo} alt="PureCodes" className="h-9" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-[#c662e0]"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-8 space-y-6">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    spy={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-gray-800 cursor-pointer hover:text-[#c662e0] transition-colors duration-200"
                  >
                    {item.name}
                  </ScrollLink>
                ))}

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center mt-6 px-5 py-3 bg-gradient-to-r from-[#c0aafe] to-[#c666e6] text-white font-semibold rounded shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  Let’s Talk
                </ScrollLink>
              </div>
            </DialogPanel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
