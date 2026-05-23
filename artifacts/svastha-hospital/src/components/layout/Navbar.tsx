import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { logoImg } from "@/assets";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Specialities", href: "#specialities" },
    { name: "Doctors", href: "#doctors" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      {/* Top Bar */}
      <div className="bg-[#1E293B] text-white py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#007BFF]" />
            <span>SH 218, Mandapeta, Andhra Pradesh 533308</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#007BFF]" />
              <span>09044337799 | 09044339977</span>
            </div>
            <div className="flex items-center gap-3 ml-2 border-l border-gray-600 pl-4">
              <a href="#" className="hover:text-[#007BFF] transition-colors"><SiInstagram className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><SiYoutube className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-white border-b border-[#D9EAF7] ${isScrolled ? "py-2" : "py-3"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src={logoImg} alt="SVASTHA" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#007BFF] leading-none">SVASTHA</span>
              <span className="text-[0.65rem] text-[#64748B] uppercase tracking-wider font-medium">
                Emergency & Multi-Speciality Hospital
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#1E293B] hover:text-[#007BFF] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#appointment"
              className="bg-[#007BFF] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[#0056D2] transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="tel:09044337799"
              className="bg-[#DC2626] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Emergency
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#1E293B]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-[#D9EAF7] shadow-lg absolute w-full"
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-[#1E293B] py-3 px-2 rounded-md hover:bg-[#EAF6FF] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-gray-100 my-2"></div>
                <a
                  href="#appointment"
                  className="bg-[#007BFF] text-white px-6 py-3 rounded-lg font-medium text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Appointment
                </a>
                <a
                  href="tel:09044337799"
                  className="bg-[#DC2626] text-white px-6 py-3 rounded-lg font-medium text-center mt-2 flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  Call Emergency
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
