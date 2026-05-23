import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#EAF6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-4">
            Patient Experiences
          </h2>
          <p className="text-lg text-[#64748B] font-medium">
            Join 500+ happy families in Mandapeta who trust SVASTHA
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Featured Large Testimonial */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[60%] bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-[#D9EAF7] relative"
          >
            <div className="text-8xl font-serif text-[#007BFF]/20 absolute top-8 left-8 leading-none">"</div>
            <div className="relative z-10">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl italic text-gray-700 leading-relaxed mb-10 font-medium">
                My wife has received the best support from doctors and nursing staff. The care here is exceptional. The facilities are top-notch and the staff is always responsive.
              </p>
              <div>
                <div className="font-bold text-2xl text-[#1E293B] mb-1">Manikanta Satyla</div>
                <div className="text-[#007BFF] font-semibold uppercase tracking-wider text-sm">Patient Family</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Stacked */}
          <div className="w-full lg:w-[40%] flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md border border-[#D9EAF7] grow flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg italic text-gray-600 mb-6 grow">
                "Nice facilities and 24/7 service and nice treatment. I'm very satisfied with the immediate response."
              </p>
              <div>
                <div className="font-bold text-lg text-[#1E293B]">Janakiram Rama</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-md border border-[#D9EAF7] grow flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg italic text-gray-600 mb-6 grow">
                "I'm so grateful to have her as my doctor! The entire team made my recovery smooth and stress-free."
              </p>
              <div>
                <div className="font-bold text-lg text-[#1E293B]">Jyothi Garagapati</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
