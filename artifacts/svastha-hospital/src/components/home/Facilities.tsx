import { otImg, wardImg, receptionImg } from "@/assets";
import { motion } from "framer-motion";
import { Activity, HeartPulse, Stethoscope, Truck, Microscope, BedDouble, Pill, ShieldPlus } from "lucide-react";

export function Facilities() {
  const facList = [
    { icon: <Activity className="w-5 h-5" />, name: "24/7 Emergency" },
    { icon: <HeartPulse className="w-5 h-5" />, name: "ICU Unit" },
    { icon: <Stethoscope className="w-5 h-5" />, name: "Operation Theaters" },
    { icon: <Truck className="w-5 h-5" />, name: "Ambulance" },
    { icon: <Microscope className="w-5 h-5" />, name: "Diagnostics Lab" },
    { icon: <BedDouble className="w-5 h-5" />, name: "Patient Wards" },
    { icon: <Pill className="w-5 h-5" />, name: "24/7 Pharmacy" },
    { icon: <ShieldPlus className="w-5 h-5" />, name: "Critical Care" }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-4">
            World-Class Medical Facilities
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl">
            Equipped with modern infrastructure to deliver the best patient care and surgical precision.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 h-auto md:h-[600px]">
          {/* Large Left Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-[65%] h-[300px] md:h-full relative rounded-2xl overflow-hidden shadow-lg"
          >
            <img src={otImg} alt="Operation Theater" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
            <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">Modern Operation Theaters</h3>
          </motion.div>
          
          {/* Right Column Images */}
          <div className="w-full md:w-[35%] flex flex-col gap-6 h-auto md:h-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-[250px] md:h-1/2 relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={wardImg} alt="Patient Ward" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-xl font-bold text-white">Patient Wards & ICU</h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full h-[250px] md:h-1/2 relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={receptionImg} alt="Reception" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-xl font-bold text-white">Reception & Patient Services</h3>
            </motion.div>
          </div>
        </div>

        {/* Clean Grid List */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
          {facList.map((fac, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[#EAF6FF] text-[#007BFF] flex items-center justify-center shrink-0 group-hover:bg-[#007BFF] group-hover:text-white transition-colors">
                {fac.icon}
              </div>
              <span className="font-bold text-[#1E293B]">{fac.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
