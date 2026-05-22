import { motion } from "framer-motion";
import { 
  Stethoscope, Activity, Heart, Bone, 
  Baby, Syringe, Microscope, AlertCircle, FileSearch, UserPlus
} from "lucide-react";

export function Specialities() {
  const specs = [
    { icon: <AlertCircle />, name: "Emergency Medicine", desc: "Rapid response and critical care for life-threatening conditions." },
    { icon: <Stethoscope />, name: "General Medicine", desc: "Comprehensive care for adult health and wellness." },
    { icon: <Heart />, name: "Cardiology", desc: "Expert heart care and cardiovascular treatments." },
    { icon: <Bone />, name: "Orthopedics", desc: "Bone, joint, and musculoskeletal care." },
    { icon: <UserPlus />, name: "Gynecology", desc: "Dedicated women's health and maternity care." },
    { icon: <Baby />, name: "Pediatrics", desc: "Specialized medical care for infants, children, and adolescents." },
    { icon: <Activity />, name: "Critical Care", desc: "Advanced monitoring and treatment for severe illnesses." },
    { icon: <Syringe />, name: "General Surgery", desc: "Expert surgical procedures with modern techniques." },
    { icon: <FileSearch />, name: "Diagnostics", desc: "Accurate testing and laboratory services." },
    { icon: <Microscope />, name: "Trauma Care", desc: "Immediate treatment for severe injuries and accidents." },
  ];

  return (
    <section id="specialities" className="py-24 md:py-32 bg-[#0A2647] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-4">
            Departments
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Our Medical Specialities</h2>
          <p className="text-lg text-blue-100/80">
            Comprehensive medical services provided by expert doctors using advanced technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(11,94,215,0.3)]"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 mb-6">
                {spec.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{spec.name}</h3>
              <p className="text-sm text-blue-100/70 leading-relaxed">{spec.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
