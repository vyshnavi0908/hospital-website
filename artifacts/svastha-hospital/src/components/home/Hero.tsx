import { hospitalImg } from "@/assets";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-32 md:pt-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 w-max">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Open 24 Hours • Emergency Ready
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] leading-[1.1] mb-4">
              Your Health, <br/>Our Priority
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-[#007BFF] mb-6">
              Expert Care in Mandapeta
            </h2>
            
            <p className="text-[#64748B] text-lg mb-8 max-w-lg leading-relaxed">
              SVASTHA Emergency & Multi-Speciality Hospital provides 24/7 emergency care, advanced diagnostics, and compassionate treatment for your entire family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#appointment" className="bg-[#007BFF] text-white px-8 py-3.5 rounded-lg font-bold text-center hover:bg-[#0056D2] transition-colors shadow-md">
                Book Appointment →
              </a>
              <a href="tel:09044337799" className="border-2 border-[#DC2626] text-[#DC2626] px-8 py-3.5 rounded-lg font-bold text-center hover:bg-red-50 transition-colors">
                Call Emergency
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[#1E293B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                24/7 Emergency
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                Expert Doctors
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                Advanced Care
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative"
          >
            <img 
              src={hospitalImg} 
              alt="SVASTHA Hospital Building" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Dark Blue Stats Strip */}
      <div className="w-full bg-[#0A2647] py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-white/20">
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">Patients Treated</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-white mb-1">10+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">Expert Doctors</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-white mb-1">5+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">Specialities</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
