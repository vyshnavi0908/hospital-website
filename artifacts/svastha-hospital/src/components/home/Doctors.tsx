import { doctor1Img, doctor2Img } from "@/assets";
import { motion } from "framer-motion";

export function Doctors() {
  const doctors = [
    {
      name: "Dr. Suresh Kanumilli",
      qual: "MBBS, DA, FICM",
      spec: "Anesthesiologist & Critical Care",
      exp: "15+ Years Experience",
      img: doctor1Img,
      main: true
    },
    {
      name: "Dr. K. Srinivas",
      qual: "MBBS, MD",
      spec: "General Physician",
      exp: "12+ Years Experience",
      img: doctor2Img,
      main: false
    },
    {
      name: "Dr. A. Ramana",
      qual: "MBBS, MS (Ortho)",
      spec: "Orthopedic Surgeon",
      exp: "10+ Years Experience",
      img: null, // Placeholder will be used
      initials: "AR",
      color: "from-emerald-400 to-teal-600",
      main: false
    },
    {
      name: "Dr. S. Lakshmi",
      qual: "MBBS, DGO",
      spec: "Gynecologist",
      exp: "14+ Years Experience",
      img: null,
      initials: "SL",
      color: "from-pink-400 to-rose-600",
      main: false
    }
  ];

  return (
    <section id="doctors" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-4">
            Our Experts
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">Our Medical Team</h2>
          <p className="text-lg text-muted-foreground">
            Highly qualified and experienced specialists dedicated to your health and recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-slate-100">
                {doc.img ? (
                  <img 
                    src={doc.img} 
                    alt={doc.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${doc.color} flex items-center justify-center`}>
                    <span className="text-6xl font-bold text-white/50">{doc.initials}</span>
                  </div>
                )}
                {doc.main && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Chief Consultant
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="text-primary font-bold text-sm uppercase tracking-wide mb-2">{doc.spec}</div>
                <h3 className="text-xl font-extrabold text-foreground mb-1">{doc.name}</h3>
                <div className="text-sm font-semibold text-muted-foreground mb-4">{doc.qual}</div>
                
                <div className="pt-4 border-t border-border flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-500">{doc.exp}</span>
                  <a href="#appointment" className="text-primary hover:text-primary/80 font-bold text-sm">
                    Book &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
