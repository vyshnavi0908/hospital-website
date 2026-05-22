import { icuImg } from "@/assets";
import { PhoneCall, AlertTriangle, Ambulance, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export function Emergency() {
  const features = [
    { icon: <PhoneCall className="w-5 h-5" />, text: "Emergency Hotline" },
    { icon: <AlertTriangle className="w-5 h-5" />, text: "ICU Support" },
    { icon: <Ambulance className="w-5 h-5" />, text: "Trauma Care" },
    { icon: <ShieldAlert className="w-5 h-5" />, text: "Rapid Response" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="absolute left-0 top-0 bottom-0 w-2 md:w-4 bg-[#007BFF]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-2 md:ml-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#007BFF] text-sm font-bold uppercase tracking-wider block mb-2">24/7 Care</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">
              Rapid Emergency Response — 24/7
            </h2>
            
            <p className="text-lg text-[#64748B] mb-10 leading-relaxed">
              Immediate emergency medical care with a rapid response team and advanced life-saving facilities. Every second counts in an emergency.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF6FF] text-[#007BFF] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-medium text-[#1E293B]">{item.text}</span>
                </div>
              ))}
            </div>

            <a 
              href="tel:09044337799" 
              className="inline-flex items-center gap-3 bg-[#007BFF] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0056D2] transition-colors shadow-md"
            >
              <PhoneCall className="w-6 h-6" />
              Call: 09044337799
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-[#D9EAF7] shadow-lg overflow-hidden bg-white p-2">
              <img 
                src={icuImg} 
                alt="Advanced ICU Facility" 
                className="w-full aspect-video object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
