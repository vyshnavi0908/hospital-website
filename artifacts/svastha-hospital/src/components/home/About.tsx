import { signageImg } from "@/assets";
import { HeartPulse, Eye, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const stats = [
    { num: "500+", label: "Patients Served" },
    { num: "10+", label: "Expert Doctors" },
    { num: "24/7", label: "Emergency Care" },
    { num: "5+", label: "Specialities" },
  ];

  const features = [
    { icon: <HeartPulse className="w-6 h-6 text-primary" />, title: "Our Mission", desc: "To provide accessible, high-quality healthcare with compassion." },
    { icon: <Eye className="w-6 h-6 text-primary" />, title: "Our Vision", desc: "To be the most trusted healthcare partner in Mandapeta." },
    { icon: <Users className="w-6 h-6 text-primary" />, title: "Patient-First", desc: "Every decision we make puts patient well-being at the center." },
    { icon: <Building2 className="w-6 h-6 text-primary" />, title: "Modern Infrastructure", desc: "State-of-the-art facilities and advanced medical technology." },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-2xl"></div>
            <img 
              src={signageImg} 
              alt="SVASTHA Hospital Signage" 
              className="w-full h-auto object-cover rounded-2xl relative z-10 shadow-xl"
            />
            
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl z-20 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-foreground">Govt.</div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Approved</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-blue-50 text-primary font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              A Legacy of <span className="text-primary">Trust & Healing</span> in Mandapeta
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              SVASTHA Emergency & Multi-speciality Hospital is a trusted healthcare institution dedicated to delivering advanced medical care with compassion, technology, and experienced healthcare professionals. We stand as a beacon of hope and healing for our community.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{stat.num}</div>
                  <div className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
