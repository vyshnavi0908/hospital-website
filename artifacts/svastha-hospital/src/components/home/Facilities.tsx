import { otImg, wardImg, receptionImg } from "@/assets";
import { motion } from "framer-motion";
import { Activity, Stethoscope, Microscope, Truck, Pill, BedDouble, HeartPulse, ShieldPlus } from "lucide-react";

export function Facilities() {
  const facList = [
    { icon: <Activity className="w-6 h-6" />, name: "24/7 Emergency" },
    { icon: <HeartPulse className="w-6 h-6" />, name: "ICU" },
    { icon: <Stethoscope className="w-6 h-6" />, name: "Modern OTs" },
    { icon: <Truck className="w-6 h-6" />, name: "Ambulance" },
    { icon: <Microscope className="w-6 h-6" />, name: "Diagnostics Lab" },
    { icon: <BedDouble className="w-6 h-6" />, name: "Patient Rooms" },
    { icon: <Pill className="w-6 h-6" />, name: "Pharmacy" },
    { icon: <ShieldPlus className="w-6 h-6" />, name: "Critical Care" }
  ];

  const gallery = [
    { img: otImg, title: "Operation Theater" },
    { img: wardImg, title: "Patient Ward" },
    { img: receptionImg, title: "Reception" }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#EAF6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#007BFF] text-sm font-bold uppercase tracking-wider block mb-2">Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
            World-Class Facilities
          </h2>
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden aspect-video shadow-md border border-[#D9EAF7]"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-white font-medium">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {facList.map((fac, i) => (
            <div key={i} className="bg-white border border-[#D9EAF7] p-6 rounded-xl shadow-sm hover:shadow-md hover:border-[#007BFF] transition-all flex flex-col items-center text-center">
              <div className="text-[#007BFF] mb-3">
                {fac.icon}
              </div>
              <h4 className="font-medium text-[#1E293B]">{fac.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
