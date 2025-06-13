import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaHome,
  FaBuilding ,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      role="contentinfo"
      className="relative text-gray-800 text-sm overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-white to-sky-100 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] z-0" />

      <div className="relative z-10">
        {/* Top Social Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 sm:px-6 py-5 border-b border-gray-300"
        >
          <p className="text-center lg:text-left font-medium">
            Get connected with us on social networks:
          </p>
          <div className="flex space-x-5 text-xl mt-2 lg:mt-0 text-gray-700">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-indigo-600 hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-green-500 hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-pink-500 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="py-14 px-4 sm:px-6 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <section>
              <h6 className="uppercase font-bold mb-4 flex items-center text-gray-900 text-lg">
                <FaHome className="mr-2 text-indigo-600" /> S Interior
              </h6>
              <p className="text-gray-600 leading-relaxed">
                Where creativity meets comfort — transforming workspaces and
                homes into timeless, functional environments.
              </p>
            </section>

            {/* Design Solutions */}
            <section>
              <h6 className="uppercase font-bold mb-4 text-gray-900">
                Design Solutions
              </h6>
              <ul className="space-y-2 text-gray-600">
                <li>Modular Kitchens</li>
                <li>Wardrobe Solutions</li>
                <li>Living Room Designs</li>
                <li>Bedroom Interiors</li>
                <li>Home Office Setups</li>
                <li>Space-saving Furniture</li>
                <li>Custom Lighting Fixtures</li>
              </ul>
            </section>

            {/* Useful Links */}
            <section>
              <h6 className="uppercase font-bold mb-4 text-gray-900">
                Useful Links
              </h6>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    to="/"
                    className="hover:text-indigo-600 hover:underline transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services"
                    className="hover:text-indigo-600 hover:underline transition"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Work"
                    className="hover:text-indigo-600 hover:underline transition"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Process"
                    className="hover:text-indigo-600 hover:underline transition"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Projects"
                    className="hover:text-indigo-600 hover:underline transition"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    className="hover:text-indigo-600 hover:underline transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className="hover:text-indigo-600 hover:underline transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </section>

            {/* Contact Info */}

            <section>
              <h6 className="uppercase font-bold mb-4 text-gray-900">
                Contact
              </h6>
              <address className="not-italic space-y-4 text-gray-600 text-base">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <FaBuilding  className="text-indigo-500 w-6 h-5" />
                  </div>
                  <a
                    href="https://www.google.com/maps/place/S+Interior+Designer/@20.7571599,73.0578362,19z/data=!3m1!4b1!4m6!3m5!1s0x3be0932bd0d652d9:0x37f54bb14e8ad3b9!8m2!3d20.7571586!4d73.0584799!16s%2Fg%2F11h3m7bxwj!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDYwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-indigo-700 leading-snug"
                  >
                    2nd Floor Shaikh Complex,
                    <br />
                    Juna Valsad Rd, Gujarat 396521
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <FaEnvelope className="text-indigo-500 w-5 h-5" />
                  </div>
                  <a
                    href="mailto:s.interior@gmail.com"
                    className="hover:underline hover:text-indigo-700"
                  >
                    s.interior@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <FaPhone className="text-indigo-500 w-5 h-5" />
                  </div>
                  <a
                    href="tel:+91 9601177846"
                    className="hover:underline hover:text-indigo-700"
                  >
                    +91 9601177846
                  </a>
                </div>
              </address>
            </section>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="text-center py-5 text-gray-500 text-sm border-t border-gray-300">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-800 font-semibold">S Interior</span>. All
          rights reserved.
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition z-20 cursor-pointer"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}

