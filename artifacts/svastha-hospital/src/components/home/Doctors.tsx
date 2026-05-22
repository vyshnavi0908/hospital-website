import { drSureshNewImg, drSureshScrubsImg } from "@/assets";
import { motion } from "framer-motion";

export function Doctors() {
  const doctors = [
    {
      name: "Dr. Suresh Kanumilli",
      qual: "MBBS, DA, FICM",
      spec: "Anesthesiologist & Critical Care Specialist",
      exp: "10+ Years Experience",
      img: drSureshNewImg,
      initials: null
    },
    {
      name: "Dr. Suresh Kanumilli",
      qual: "MBBS, DA, FICM",
      spec: "Emergency & Critical Care",
      exp: "10+ Years Experience",
      img: drSureshScrubsImg,
      initials: null
    },
    {
      name: "Dr. Placeholder",
      qual: "MBBS, MD",
      spec: "General Physician",
      exp: "12+ Years Experience",
      img: null,
      initials: "DP"
    },
    {
      name: "Dr. Placeholder",
      qual: "MBBS, MS (Ortho)",
      spec: "Orthopedic Surgeon",
      exp: "15+ Years Experience",
      img: null,
      initials: "DP"
    }
  ];

  return (
    <section id="doctors" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#007BFF] text-sm font-bold uppercase tracking-wider block mb-2">Our Experts</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
            Meet Our Doctors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-[#D9EAF7] rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="w-full aspect-[4/3] bg-[#EAF6FF] relative">
                {doc.img ? (
                  <img 
                    src={doc.img} 
                    alt={doc.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm text-2xl font-bold text-[#007BFF]">
                      {doc.initials}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col grow">
                <div className="mb-auto">
                  <h3 className="font-bold text-lg text-[#1E293B]">{doc.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{doc.qual}</p>
                  <span className="inline-block bg-[#EAF6FF] text-[#007BFF] text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {doc.spec}
                  </span>
                </div>
                <div className="pt-4 border-t border-[#D9EAF7] text-sm font-medium text-gray-600">
                  {doc.exp}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
