import { icuImg } from "@/assets";
import { PhoneCall, AlertTriangle, Ambulance, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export function Emergency() {
  const features = [
    { icon: <PhoneCall className="w-5 h-5" />, text: "Emergency Hotline" },
    { icon: <AlertTriangle className="w-5 h-5" />, text: "ICU Support" },
    { icon: <Ambulance className="w-5 h-5" />, text: "Trauma Care" },
    { icon: <ShieldAlert className="w-5 h-5" />, text: "Rapid Response Unit" }
  ];

  return (
    <section className="bg-gradient-to-r from-[#007BFF] to-[#0056D2] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block bg-white text-[#007BFF] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8 shadow-sm">
              24/7 Emergency Care
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Rapid Emergency Response
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-lg">
              Immediate emergency medical care with a rapid response team and advanced life-saving facilities. We are always ready.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-white text-lg">{item.text}</span>
                </div>
              ))}
            </div>

            <a 
              href="tel:09044337799" 
              className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-white text-[#007BFF] px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-50 transition-colors shadow-xl"
            >
              <PhoneCall className="w-7 h-7" />
              Call Emergency: 09044337799
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src={icuImg} 
                alt="Advanced ICU Facility" 
                className="w-full aspect-[4/3] object-cover rounded-2xl border-4 border-white shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
