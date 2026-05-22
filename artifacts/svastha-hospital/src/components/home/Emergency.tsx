import { icuImg } from "@/assets";
import { PhoneCall, AlertTriangle, Ambulance, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export function Emergency() {
  return (
    <section className="py-24 bg-red-600 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 text-white font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-6 border border-white/30">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              24/7 Emergency Care
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Rapid Emergency Response
            </h2>
            
            <p className="text-xl text-red-100 mb-10 leading-relaxed max-w-xl">
              Immediate emergency medical care with a rapid response team and advanced life-saving facilities. Every second counts.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: <PhoneCall />, text: "Emergency Hotline" },
                { icon: <AlertTriangle />, text: "ICU Support" },
                { icon: <Ambulance />, text: "Trauma Care" },
                { icon: <ShieldAlert />, text: "Response Unit" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-bold text-lg">{item.text}</span>
                </div>
              ))}
            </div>

            <a 
              href="tel:09044337799" 
              className="inline-flex items-center justify-center gap-3 bg-white text-red-600 px-8 py-5 rounded-xl font-extrabold text-xl md:text-2xl shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
            >
              <PhoneCall className="w-6 h-6 md:w-8 md:h-8" />
              Call: 09044337799
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent rounded-2xl z-10"></div>
            <img 
              src={icuImg} 
              alt="Advanced ICU Facility" 
              className="w-full h-auto rounded-2xl shadow-2xl relative z-0 border-4 border-white/20"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20 max-w-xs border border-border">
              <div className="font-bold text-red-600 text-xl mb-2">Always Ready</div>
              <p className="text-sm text-muted-foreground font-medium">Fully equipped ICU and operation theaters for critical cases.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
