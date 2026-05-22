import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

export function FloatingElements() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 500);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div 
          className="h-full bg-[#007BFF] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-white text-[#1E293B] rounded-full shadow-md border border-[#D9EAF7] flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <a 
          href="https://wa.me/919044337799" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        >
          <SiWhatsapp className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}
