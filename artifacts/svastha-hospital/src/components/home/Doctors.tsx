import { drSureshNewImg } from "@/assets";
import { motion } from "framer-motion";

export function Doctors() {
  const otherDoctors = [
    {
      name: "Dr. Rajesh Kumar",
      qual: "MBBS, MS",
      spec: "General Surgeon",
      initials: "RK",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "Dr. Priya Sharma",
      qual: "MBBS, DGO",
      spec: "Gynecologist",
      initials: "PS",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      name: "Dr. Arun Varma",
      qual: "MBBS, MD",
      spec: "General Physician",
      initials: "AV",
      gradient: "from-teal-400 to-teal-600"
    }
  ];

  return (
    <section id="doctors" className="py-20 md:py-28 bg-[#EAF6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Doctor */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row mb-12 border border-[#D9EAF7]"
        >
          <div className="w-full md:w-[35%] h-[400px] md:h-auto">
            <img 
              src={drSureshNewImg} 
              alt="Dr. Suresh Kanumilli"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="w-full md:w-[65%] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-[#007BFF] text-sm font-bold uppercase tracking-wider block mb-2">Lead Specialist</span>
            <h3 className="text-4xl font-bold text-[#1E293B] mb-2">Dr. Suresh Kanumilli</h3>
            <div className="text-lg text-gray-500 font-medium mb-4">MBBS, DA, FICM</div>
            
            <div className="inline-block bg-[#EAF6FF] text-[#007BFF] font-semibold px-4 py-2 rounded-lg w-max mb-6">
              Anesthesiologist & Critical Care Specialist
            </div>
            
            <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
              Dr. Suresh Kanumilli brings extensive expertise in anesthesiology and critical care, leading emergency and surgical teams with precision and compassion. He is available 24/7 for critical care consultations.
            </p>
            
            <a href="#appointment" className="bg-[#007BFF] text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-[#0056D2] transition-colors w-max shadow-md mb-10">
              Book Consultation →
            </a>

            <div className="flex gap-6 divide-x divide-gray-200">
              <div className="pr-6">
                <div className="text-2xl font-bold text-[#1E293B]">10+ Years</div>
                <div className="text-sm text-gray-500 font-medium">Experience</div>
              </div>
              <div className="px-6">
                <div className="text-2xl font-bold text-[#1E293B]">1000+</div>
                <div className="text-sm text-gray-500 font-medium">Patients</div>
              </div>
              <div className="pl-6">
                <div className="text-2xl font-bold text-[#1E293B]">24/7</div>
                <div className="text-sm text-gray-500 font-medium">Available</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supporting Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherDoctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-[#D9EAF7] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-6"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${doc.gradient} flex items-center justify-center text-white text-xl font-bold shadow-inner shrink-0`}>
                {doc.initials}
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#1E293B] mb-1">{doc.name}</h4>
                <div className="text-sm text-gray-500 mb-2">{doc.qual}</div>
                <div className="text-xs font-bold text-[#007BFF] uppercase tracking-wider mb-2">{doc.spec}</div>
                <a href="#appointment" className="text-sm font-semibold text-gray-600 hover:text-[#007BFF] transition-colors">
                  View Profile →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
