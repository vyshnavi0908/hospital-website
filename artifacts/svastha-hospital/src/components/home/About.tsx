import { signImg } from "@/assets";
import { Target, Eye, Heart, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const features = [
    { icon: <Target className="w-5 h-5" />, title: "Mission", desc: "Providing accessible, high-quality healthcare." },
    { icon: <Eye className="w-5 h-5" />, title: "Vision", desc: "To be the most trusted healthcare partner." },
    { icon: <Heart className="w-5 h-5" />, title: "Patient-First", desc: "Your well-being is at the center of all we do." },
    { icon: <Building2 className="w-5 h-5" />, title: "Modern Infrastructure", desc: "State-of-the-art facilities and technology." },
  ];

  const stats = [
    { num: "500+", label: "Patients Served" },
    { num: "10+", label: "Expert Doctors" },
    { num: "24/7", label: "Emergency Care" },
    { num: "5+", label: "Specialities" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#007BFF] text-sm font-bold uppercase tracking-wider block mb-2">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
            About SVASTHA Emergency & Multi-speciality Hospital
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl border border-[#D9EAF7] shadow-md overflow-hidden bg-white p-2">
              <img 
                src={signImg} 
                alt="Hospital Signage" 
                className="w-full aspect-[4/3] object-cover rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              SVASTHA Emergency & Multi-speciality Hospital is a trusted healthcare institution dedicated to delivering advanced medical care with compassion, technology, and experienced healthcare professionals. We stand as a beacon of hope and healing for our community.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, i) => (
                <div key={i} className="bg-white border border-[#D9EAF7] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-[#EAF6FF] text-[#007BFF] rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[#1E293B] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#EAF6FF] p-8 rounded-xl text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#007BFF] mb-2">{stat.num}</div>
              <div className="text-sm font-medium text-[#1E293B]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
