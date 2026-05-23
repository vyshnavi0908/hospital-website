import { signImg } from "@/assets";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const listItems = [
    { title: "Quality Care", desc: "Adherence to the highest medical standards" },
    { title: "Expert Team", desc: "Experienced doctors and nursing staff" },
    { title: "Modern Equipment", desc: "Latest diagnostic and treatment technology" },
    { title: "24/7 Support", desc: "Round-the-clock medical assistance" }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[55%] relative"
          >
            <img 
              src={signImg} 
              alt="SVASTHA Hospital Signage" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            
            <div className="absolute -bottom-8 -left-6 md:-left-8 bg-white p-6 rounded-2xl shadow-2xl border border-[#D9EAF7] max-w-[280px]">
              <div className="text-[#007BFF] font-bold text-xl mb-1">Est. 2020</div>
              <div className="text-[#1E293B] font-semibold leading-snug">
                Trusted by 500+ Families in East Godavari
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[45%] pt-8 lg:pt-0"
          >
            <span className="text-[#007BFF] text-sm font-bold uppercase tracking-wider block mb-3">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6 leading-tight">
              Delivering Advanced Healthcare with a Human Touch
            </h2>
            
            <p className="text-lg text-[#64748B] mb-10 leading-relaxed">
              SVASTHA Emergency & Multi-Speciality Hospital is a trusted name in Mandapeta, dedicated to advanced medical care with compassion, modern infrastructure, and experienced healthcare professionals. From emergency response to complex surgeries, we are with you at every step.
            </p>
            
            <div className="space-y-6">
              {listItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#007BFF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#1E293B] text-lg">{item.title}</h3>
                    <p className="text-[#64748B]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
