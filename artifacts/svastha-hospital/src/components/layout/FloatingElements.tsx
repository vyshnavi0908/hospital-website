import { useEffect, useState } from "react";
import { MessageCircle, Calendar, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingElements() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide based on scroll
      setShowScroll(window.scrollY > 500);
      
      // Calculate progress
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
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <AnimatePresence>
        {showScroll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-6 z-40 flex flex-col gap-3"
          >
            {/* Book Appointment Floating CTA */}
            <a 
              href="#appointment" 
              className="bg-primary text-white font-bold px-4 py-3 rounded-full shadow-xl flex items-center gap-2 hover:bg-primary/90 hover:scale-105 transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span className="hidden sm:inline">Book Appointment</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right side floating controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-white text-foreground rounded-full shadow-xl flex items-center justify-center border border-border hover:bg-slate-50 hover:scale-110 transition-all"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919044337799" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform hover:shadow-2xl relative"
        >
          <div className="absolute inset-0 w-full h-full bg-[#25D366] rounded-full animate-ping opacity-30"></div>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.322.101.144.453.712 1.026 1.148.741.564 1.309.73 1.45.816.14.086.223.072.308-.029.085-.101.365-.433.462-.582.097-.149.193-.124.329-.074s.867.411 1.012.483c.144.072.241.108.276.168.035.06.035.347-.109.752z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
