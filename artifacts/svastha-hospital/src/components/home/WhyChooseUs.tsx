import { motion } from "framer-motion";
import { Clock, ShieldCheck, Cpu, HeartHandshake, Building, ActivitySquare, BadgeIndianRupee, Stethoscope } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    { icon: <Clock />, title: "24/7 Availability", desc: "Round-the-clock care when you need it most." },
    { icon: <Stethoscope />, title: "Experienced Doctors", desc: "Expert medical professionals across fields." },
    { icon: <Cpu />, title: "Advanced Technology", desc: "State-of-the-art diagnostic equipment." },
    { icon: <HeartHandshake />, title: "Compassionate Care", desc: "Treating patients with empathy and respect." },
    { icon: <Building />, title: "Modern Infrastructure", desc: "Clean, hygienic, and premium environment." },
    { icon: <ShieldCheck />, title: "Patient Safety", desc: "Strict adherence to safety protocols." },
    { icon: <BadgeIndianRupee />, title: "Affordable Treatment", desc: "Premium care at reasonable costs." },
    { icon: <ActivitySquare />, title: "Emergency Services", desc: "Rapid response for critical situations." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#007BFF] text-sm font-bold uppercase tracking-wider block mb-2">Our Promise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
            Why Choose SVASTHA?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white border border-[#D9EAF7] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#007BFF] transition-all flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-[#EAF6FF] rounded-lg flex items-center justify-center text-[#007BFF] mb-5 shrink-0">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#1E293B] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed grow">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
