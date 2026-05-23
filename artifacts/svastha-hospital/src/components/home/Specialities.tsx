import { icuImg } from "@/assets";
import { motion } from "framer-motion";
import { 
  Stethoscope, Activity, Heart, Bone, 
  Baby, Syringe, Microscope, FileSearch, UserPlus
} from "lucide-react";

export function Specialities() {
  const otherSpecs = [
    { icon: <Activity className="w-6 h-6" />, name: "General Medicine" },
    { icon: <Heart className="w-6 h-6" />, name: "Cardiology" },
    { icon: <Bone className="w-6 h-6" />, name: "Orthopedics" },
    { icon: <UserPlus className="w-6 h-6" />, name: "Gynecology" },
    { icon: <Baby className="w-6 h-6" />, name: "Pediatrics" },
    { icon: <Stethoscope className="w-6 h-6" />, name: "Critical Care" },
    { icon: <Syringe className="w-6 h-6" />, name: "General Surgery" },
    { icon: <FileSearch className="w-6 h-6" />, name: "Diagnostics" },
    { icon: <Microscope className="w-6 h-6" />, name: "Trauma Care" },
  ];

  return (
    <section id="specialities" className="py-20 md:py-28 bg-[#EAF6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-4">
            Our Medical Specialities
          </h2>
          <p className="text-lg text-[#64748B]">
            Expert care across all major medical disciplines
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Featured Specialty */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[40%] relative rounded-2xl overflow-hidden shadow-xl group h-[400px] lg:h-auto"
          >
            <img src={icuImg} alt="Emergency Medicine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647] via-[#0A2647]/80 to-transparent flex flex-col justify-end p-8">
              <div className="w-14 h-14 bg-[#007BFF] rounded-xl flex items-center justify-center text-white mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Emergency Medicine</h3>
              <p className="text-gray-300 mb-6 line-clamp-3">
                State-of-the-art critical care with rapid response teams, advanced life support, and round-the-clock specialists ready for any medical emergency.
              </p>
              <a href="#" className="text-white font-bold flex items-center gap-2 hover:text-[#EAF6FF]">
                Learn More <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Grid of Other Specialties */}
          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-4">
            {otherSpecs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-[#D9EAF7] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#007BFF] transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="text-[#007BFF] mb-4 group-hover:scale-110 transition-transform">
                  {spec.icon}
                </div>
                <h3 className="font-semibold text-[#1E293B] text-sm md:text-base">{spec.name}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
