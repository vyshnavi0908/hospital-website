import { buildingImg } from "@/assets";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={buildingImg} 
          alt="SVASTHA Hospital Building" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647]/95 via-[#0B5ED7]/80 to-[#0B5ED7]/60"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide uppercase">Open 24 Hours • Emergency Ready</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Advanced Emergency & Multi-speciality Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">in Mandapeta</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed"
          >
            24/7 expert medical care, advanced treatments, compassionate doctors, and modern healthcare facilities for your family.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#appointment" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              <Calendar className="w-5 h-5" />
              Book Appointment
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a href="tel:09044337799" className="inline-flex items-center justify-center gap-2 bg-red-600/90 border border-red-500 backdrop-blur-md text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              <Phone className="w-5 h-5" />
              Emergency Contact
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Glassmorphism Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 hidden md:block"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4">
            {[
              { title: "24/7 Emergency", desc: "Always open for you" },
              { title: "Expert Doctors", desc: "Top specialists in region" },
              { title: "Advanced Care", desc: "Modern medical tech" },
              { title: "Multi-speciality", desc: "Comprehensive services" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-1">{stat.title}</h3>
                <p className="text-blue-200 text-sm font-medium">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
