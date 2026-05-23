import { motion } from "framer-motion";
import { Clock, Stethoscope, Cpu, HeartHandshake, BadgeIndianRupee, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    { icon: <Clock />, title: "24/7 Availability", desc: "Emergency and OPD services round-the-clock" },
    { icon: <Stethoscope />, title: "Experienced Doctors", desc: "Specialists across all major departments" },
    { icon: <Cpu />, title: "Advanced Technology", desc: "Modern diagnostic and surgical equipment" },
    { icon: <HeartHandshake />, title: "Compassionate Care", desc: "Patient-first approach in every interaction" },
    { icon: <BadgeIndianRupee />, title: "Affordable Treatment", desc: "Quality healthcare without financial burden" },
    { icon: <ShieldCheck />, title: "Patient Safety", desc: "Strict protocols and hygiene standards" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Text Block */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">
              Why Families in Mandapeta Trust Us
            </h2>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              For years, SVASTHA has been the go-to hospital for emergency care and multi-speciality treatment in East Godavari. Here's what sets us apart.
            </p>
            <a href="#specialities" className="text-[#007BFF] font-bold text-lg inline-flex items-center gap-2 hover:gap-3 transition-all">
              View Our Services <span>→</span>
            </a>
          </div>

          {/* Right Feature List */}
          <div className="w-full lg:w-[60%] flex flex-col">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center gap-6 py-6 border-b border-gray-100 last:border-0"
              >
                <div className="w-14 h-14 bg-[#EAF6FF] rounded-full flex items-center justify-center text-[#007BFF] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E293B] mb-1">{item.title}</h3>
                  <p className="text-[#64748B]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
