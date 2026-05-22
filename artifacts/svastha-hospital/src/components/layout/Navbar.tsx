import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-3 border-b border-[#D9EAF7]"
          : "bg-white py-4 border-b border-[#D9EAF7]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img src={logoImg} alt="SVASTHA" className="h-10 w-auto" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#007BFF] leading-tight">SVASTHA</span>
            <span className="text-[0.65rem] text-[#1E293B] uppercase tracking-wider font-medium">
              Emergency & Multi-Speciality
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#1E293B] hover:text-[#007BFF] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="tel:09044337799"
            className="bg-[#007BFF] text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#0056D2] transition-colors"
          >
            Emergency: 09044337799
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
            className="lg:hidden overflow-hidden bg-white border-t border-[#D9EAF7]"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-[#1E293B] hover:text-[#007BFF] py-3 px-2 rounded-md hover:bg-[#EAF6FF] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:09044337799"
                className="bg-[#007BFF] text-white px-6 py-3 rounded-lg font-medium text-center mt-4"
              >
                Emergency: 09044337799
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
