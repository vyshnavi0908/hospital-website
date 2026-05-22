import { motion } from "framer-motion";
import { 
  Stethoscope, Activity, Heart, Bone, 
  Baby, Syringe, Microscope, AlertCircle, FileSearch, UserPlus
} from "lucide-react";

export function Specialities() {
  const specs = [
    { icon: <AlertCircle className="w-6 h-6" />, name: "Emergency Medicine", desc: "Rapid response and critical care." },
    { icon: <Stethoscope className="w-6 h-6" />, name: "General Medicine", desc: "Comprehensive adult health care." },
    { icon: <Heart className="w-6 h-6" />, name: "Cardiology", desc: "Expert cardiovascular treatments." },
    { icon: <Bone className="w-6 h-6" />, name: "Orthopedics", desc: "Bone, joint, and muscle care." },
    { icon: <UserPlus className="w-6 h-6" />, name: "Gynecology", desc: "Dedicated women's health." },
    { icon: <Baby className="w-6 h-6" />, name: "Pediatrics", desc: "Specialized care for children." },
    { icon: <Activity className="w-6 h-6" />, name: "Critical Care", desc: "Advanced monitoring and treatment." },
    { icon: <Syringe className="w-6 h-6" />, name: "General Surgery", desc: "Expert surgical procedures." },
    { icon: <FileSearch className="w-6 h-6" />, name: "Diagnostics", desc: "Accurate laboratory services." },
    { icon: <Microscope className="w-6 h-6" />, name: "Trauma Care", desc: "Immediate treatment for injuries." },
  ];

  return (
    <section id="specialities" className="py-16 md:py-24 bg-[#EAF6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#007BFF] text-sm font-bold uppercase tracking-wider block mb-2">Departments</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
            Our Medical Specialities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl border border-[#D9EAF7] shadow-sm hover:shadow-md hover:border-[#007BFF] transition-all py-6 px-5 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#EAF6FF] text-[#007BFF] flex items-center justify-center mb-4">
                {spec.icon}
              </div>
              <h3 className="font-bold text-[#1E293B] mb-2">{spec.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{spec.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
