import { motion } from "framer-motion";
import { Clock, ShieldCheck, Cpu, HeartHandshake, Building, ActivitySquare, BadgeIndianRupee, Stethoscope } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    { icon: <Clock />, title: "24/7 Availability", desc: "Round-the-clock care when you need it most." },
    { icon: <Stethoscope />, title: "Experienced Doctors", desc: "Expert medical professionals across various fields." },
    { icon: <Cpu />, title: "Advanced Technology", desc: "State-of-the-art diagnostic and surgical equipment." },
    { icon: <HeartHandshake />, title: "Compassionate Care", desc: "We treat patients like family with empathy." },
    { icon: <Building />, title: "Modern Infrastructure", desc: "Clean, hygienic, and premium hospital environment." },
    { icon: <ShieldCheck />, title: "Patient Safety", desc: "Strict adherence to safety and hygiene protocols." },
    { icon: <BadgeIndianRupee />, title: "Affordable Treatment", desc: "Premium care at transparent and reasonable costs." },
    { icon: <ActivitySquare />, title: "Emergency Services", desc: "Rapid response for all critical situations." },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#E8F6FF] relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-4">
            Our Promise
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">Why Choose SVASTHA?</h2>
          <p className="text-lg text-muted-foreground">
            We are committed to providing the highest standard of healthcare with a patient-centric approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/60 backdrop-blur-md border border-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
