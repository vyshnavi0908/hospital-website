import { otImg, bedsImg, waitingImg } from "@/assets";
import { motion } from "framer-motion";
import { Activity, Stethoscope, Microscope, Truck, Pill, BedDouble, Stethoscope as StethoscopeIcon, HeartPulse } from "lucide-react";

export function Facilities() {
  const facList = [
    { icon: <Activity />, name: "24/7 Emergency" },
    { icon: <HeartPulse />, name: "Advanced ICU" },
    { icon: <Stethoscope />, name: "Modern OTs" },
    { icon: <Truck />, name: "Ambulance Service" },
    { icon: <Microscope />, name: "Diagnostics Lab" },
    { icon: <BedDouble />, name: "Patient Rooms" },
    { icon: <Pill />, name: "24/7 Pharmacy" },
    { icon: <StethoscopeIcon />, name: "Critical Care Unit" }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A2647] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white/10 text-white font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-4 border border-white/20">
            Infrastructure
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">World-Class Medical Facilities</h2>
          <p className="text-lg text-blue-100/80">
            Equipped with modern technology and patient-centric infrastructure to ensure the best possible care.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { img: otImg, title: "Modern Operation Theater" },
            { img: bedsImg, title: "Comfortable Patient Ward" },
            { img: waitingImg, title: "Premium Waiting Area" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facList.map((fac, i) => (
            <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
              <div className="text-blue-300 mb-3">
                {fac.icon}
              </div>
              <h4 className="text-white font-bold">{fac.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
