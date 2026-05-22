import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Clock } from "lucide-react";
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
    <>
      {/* Top Bar - Emergency Info */}
      <div className="bg-red-600 text-white text-xs md:text-sm py-2 px-4 flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="font-medium hidden md:inline">24/7 Emergency Care With Compassion & Excellence</span>
          <span className="font-medium md:hidden">24/7 Emergency Care</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:09044337799" className="flex items-center gap-1 font-bold hover:text-white/80 transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Emergency: </span>
            09044337799
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3 top-0"
            : "bg-white py-4 top-auto"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src={logoImg} alt="SVASTHA Hospital Logo" className="h-10 md:h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold text-primary leading-none">SVASTHA</span>
              <span className="text-[0.6rem] md:text-xs font-semibold text-muted-foreground uppercase tracking-widest leading-none mt-1">Multi-Speciality</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="tel:09044337799"
              className="group relative flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-red-700 transition-all overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-red-500 rounded-full animate-ping opacity-20"></span>
              <Phone className="w-4 h-4" />
              <span>Emergency Call</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
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
              className="lg:hidden overflow-hidden bg-white border-t border-border/50"
            >
              <div className="flex flex-col p-4 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-bold text-foreground hover:text-primary transition-colors uppercase tracking-wide py-2 border-b border-border/50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="tel:09044337799"
                  className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-md font-bold shadow-md mt-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 09044337799</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
