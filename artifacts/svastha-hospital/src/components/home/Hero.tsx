import { hospitalImg } from "@/assets";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:py-24 bg-gradient-to-b from-white to-[#EAF6FF] min-h-[auto]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Open 24 Hours
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] leading-tight mb-6">
              Advanced Emergency & Multi-speciality Healthcare in Mandapeta
            </h1>
            
            <p className="text-[#64748B] text-lg mb-8 max-w-lg">
              24/7 expert medical care, advanced treatments, compassionate doctors, and modern healthcare facilities for your family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#appointment" className="bg-[#007BFF] text-white px-8 py-3 rounded-lg font-medium text-center hover:bg-[#0056D2] transition-colors">
                Book Appointment
              </a>
              <a href="tel:09044337799" className="border-2 border-[#007BFF] text-[#007BFF] px-8 py-3 rounded-lg font-medium text-center hover:bg-blue-50 transition-colors">
                Emergency Contact
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-[#D9EAF7] shadow-lg overflow-hidden bg-white p-2">
              <img 
                src={hospitalImg} 
                alt="SVASTHA Hospital Building" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { title: "24/7 Emergency", desc: "Always open for you" },
            { title: "Expert Doctors", desc: "Top specialists in region" },
            { title: "Advanced Care", desc: "Modern medical tech" },
            { title: "Multi-speciality", desc: "Comprehensive services" }
          ].map((stat, i) => (
            <div key={i} className="bg-white border-l-4 border-[#007BFF] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#1E293B] mb-1">{stat.title}</h3>
              <p className="text-sm text-[#64748B]">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
