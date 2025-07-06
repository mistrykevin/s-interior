// import { useLocation, Link } from "react-router-dom";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
// import logo from "../assets/s logo 2.png";
// import profileicon from "../assets/profile icon.png";

// const navigation = [
//   { name: "Home", to: "/" },
//   { name: "Services", to: "/Services" },
//   { name: "Work", to: "/Work" },
//   { name: "Process", to: "/Process" },
//   { name: "Projects", to: "/Projects" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const location = useLocation();

//   const ProfileMenu = () => (
//     <MenuItems className="absolute right-0 mt-2 w-48 rounded-md bg-white text-gray-800 shadow-lg ring-1 ring-black/10 z-50 ">
//       <MenuItem>
//         {({ active }) => (
//           <Link 
//             to="/About"
//             className={classNames(
//               active ? "bg-indigo-100" : "",
//               "block px-4 py-2 text-sm"
//             )}
//           >
//             About Us
//           </Link>
//         )}
//       </MenuItem>
//       <MenuItem>
//         {({ active }) => (
//           <Link
//             to="/Contact"
//             className={classNames(
//               active ? "bg-indigo-100" : "",
//               "block px-4 py-2 text-sm"
//             )}
//           >
//             Contact Us
//           </Link>
//         )}
//       </MenuItem>
//       <MenuItem>
//         {({ active }) => (
//           <button
//             className={classNames(
//               active ? "bg-indigo-100" : "",
//               "block w-full text-left px-4 py-2 text-sm"
//             )}
//             aria-label="Sign In"
//           >
//             Sign In
//           </button>
//         )}
//       </MenuItem>
//     </MenuItems>
//   );

//   return (
//     <Disclosure
//       as="nav"
//       className=" top-0 z-50 backdrop-blur-md bg-white/80 shadow-md min-h-[90]"
//     >
//       {({ open }) => (
//         <>
//           {/* Top Bar */}
//           <div className="bg-gradient-to-r from-indigo-200 via-white to-amber-100 px-4 py-2 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between">
//               {/* Logo */}
//               <Link to="/" className="flex items-center gap-3">
//                 <img
//                   src={logo}
//                   alt="S Interior Logo"
//                   className="h-14 sm:h-20 w-auto drop-shadow-md"
//                 />
//                 <div>
//                   <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
//                     Interior Designer
//                   </h1>
//                   <p className="text-sm text-indigo-700 italic">
//                     Decorating Your Dreams
//                   </p>
//                 </div>
//               </Link>

//               {/* Desktop contact and social */}
//               <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
//                 <div className="flex items-center gap-2">
//                   <FaPhoneAlt className="hover:text-indigo-700 transition" />
//                   <a
//                     href="tel:+919601177846"
//                     className="hover:text-indigo-700 transition"
//                   >
//                     +91 9601177846
//                   </a>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <span className="font-semibold text-indigo-800">
//                     Follow Us:
//                   </span>
//                   <a
//                     href="https://facebook.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     aria-label="Facebook"
//                     className="hover:text-indigo-700 transition"
//                   >
//                     <FaFacebookF />
//                   </a>
//                   <a
//                     href="https://instagram.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     aria-label="Instagram"
//                     className="hover:text-pink-600 transition"
//                   >
//                     <FaInstagram />
//                   </a>
//                 </div>
//               </div>

//               {/* Mobile - hamburger and profile */}
//               <div className="sm:hidden flex items-center gap-4">
//                 <DisclosureButton className="p-2 rounded-md text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
//                   {open ? (
//                     <XMarkIcon className="h-6 w-6" />
//                   ) : (
//                     <Bars3Icon className="h-6 w-6" />
//                   )}
//                 </DisclosureButton>
//                 <Menu as="div" className="relative z-50">
//                   <MenuButton className="rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
//                     <img
//                       src={profileicon}
//                       alt="User"
//                       className="h-8 w-8 rounded-full border-2 border-indigo-400 hover:scale-105 transition-transform"
//                     />
//                   </MenuButton>
//                   <ProfileMenu />
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden sm:block border-b border-gray-200 bg-white/80 backdrop-blur">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14">
//               <div className="flex gap-6">
//                 {navigation.map((item) => {
//                   const isActive = location.pathname === item.to;
//                   return (
//                     <Link
//                       key={item.name}
//                       to={item.to}
//                       className={classNames(
//                         "relative text-sm font-medium px-3 py-2 transition duration-300",
//                         isActive
//                           ? "text-indigo-700 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-[2px] after:bg-indigo-700 after:rounded-full"
//                           : "text-gray-600 hover:text-indigo-700 hover:scale-105"
//                       )}
//                     >
//                       {item.name}
//                     </Link>
//                   );
//                 })}
//               </div>

//               <Menu as="div" className="relative">
//                 <MenuButton className="rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
//                   <img
//                     src={profileicon}
//                     alt="User"
//                     className="h-10 w-10 rounded-full border-2 border-indigo-400 hover:scale-105 transition duration-300"
//                   />
//                 </MenuButton>
//                 <ProfileMenu />
//               </Menu>
//             </div>
//           </div>

//           {/* Mobile Nav Panel */}
//           <DisclosurePanel className="sm:hidden bg-white shadow-inner">
//             <div className="space-y-1 px-4 pt-2 pb-4">
//               {navigation.map((item) => {
//                 const isCurrent = location.pathname === item.to;
//                 return (
//                   <DisclosureButton
//                     key={item.name}
//                     as={Link}
//                     to={item.to}
//                     className={classNames(
//                       isCurrent
//                         ? "bg-indigo-100 text-indigo-700"
//                         : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-700",
//                       "block rounded-md px-3 py-2 text-base font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </DisclosureButton>
//                 );
//               })}
//             </div>
//           </DisclosurePanel>
//         </>
//       )}
//     </Disclosure>
//   );
// }


import { useLocation, Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/s logo 2.png";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/About" },
  { name: "Services", to: "/Services" },
  { name: "Work", to: "/Work" },
  { name: "Process", to: "/Process" },
  { name: "Projects", to: "/Projects" },
  { name: "Contact Us", to: "/Contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure
      as="nav"
      className="top-0 z-50 backdrop-blur-md bg-white/80 shadow-md min-h-[90]"
    >
      {({ open }) => (
        <>
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-indigo-200 via-white to-amber-100 px-4 py-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="S Interior Logo"
                  className="h-14 sm:h-20 w-auto drop-shadow-md"
                />
                <div>
                  <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
                    Interior Designer
                  </h1>
                  <p className="text-sm text-indigo-700 italic">
                    Decorating Your Dreams
                  </p>
                </div>
              </Link>

              {/* Desktop contact and social */}
              <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="hover:text-indigo-700 transition" />
                  <a
                    href="tel:+919601177846"
                    className="hover:text-indigo-700 transition"
                  >
                    +91 9601177846
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-semibold text-indigo-800">
                    Follow Us:
                  </span>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="hover:text-indigo-700 transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="hover:text-pink-600 transition"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              {/* Mobile - hamburger */}
              <div className="sm:hidden flex items-center">
                <DisclosureButton className="p-2 rounded-md text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:block border-b border-gray-200 bg-white/80 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start items-center h-14">
              <div className="flex gap-6">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        "relative text-sm font-medium px-3 py-2 transition duration-300",
                        isActive
                          ? "text-indigo-700 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-[2px] after:bg-indigo-700 after:rounded-full"
                          : "text-gray-600 hover:text-indigo-700 hover:scale-105"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Nav Panel */}
          <DisclosurePanel className="sm:hidden bg-white shadow-inner">
            <div className="space-y-1 px-4 pt-2 pb-4">
              {navigation.map((item) => {
                const isCurrent = location.pathname === item.to;
                return (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.to}
                    className={classNames(
                      isCurrent
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-700",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                );
              })}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
