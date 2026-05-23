import { MapPin, Phone, Clock } from "lucide-react";
import { SiYoutube, SiInstagram, SiWhatsapp } from "react-icons/si";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width Map Prominent */}
        <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-[#D9EAF7] mb-16 relative z-10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15276.786529731679!2d81.9056637!3d16.8165403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3782782eeb2e3b%3A0xcf95a43b235d9472!2sSvastha%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SVASTHA Hospital Location"
          ></iframe>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex gap-5">
            <div className="w-14 h-14 bg-[#EAF6FF] rounded-full flex items-center justify-center shrink-0 text-[#007BFF]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#1E293B] text-xl mb-2">Hospital Address</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                SH 218, Sangita Venkat Reddy Nagar,<br/>
                Mandapeta, Andhra Pradesh 533308
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-14 h-14 bg-[#EAF6FF] rounded-full flex items-center justify-center shrink-0 text-[#007BFF]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#1E293B] text-xl mb-2">Helpline Numbers</h3>
              <div className="flex flex-col text-gray-600 text-lg font-medium gap-1">
                <a href="tel:09044337799" className="hover:text-[#007BFF] transition-colors">09044337799</a>
                <a href="tel:09044339977" className="hover:text-[#007BFF] transition-colors">09044339977</a>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-14 h-14 bg-[#EAF6FF] rounded-full flex items-center justify-center shrink-0 text-[#007BFF]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#1E293B] text-xl mb-2">Working Hours</h3>
              <div className="text-gray-600 text-lg">
                <span className="font-bold text-[#10B981]">24/7 Emergency</span><br/>
                OPD: Check Schedule
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-10 border-t border-gray-100">
          <p className="text-gray-500 font-bold uppercase tracking-wider mb-6">Connect With Us</p>
          <div className="flex gap-6">
            <a href="#" className="w-14 h-14 bg-gray-50 border border-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all shadow-sm hover:shadow-md">
              <SiInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="w-14 h-14 bg-gray-50 border border-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-transparent transition-all shadow-sm hover:shadow-md">
              <SiYoutube className="w-6 h-6" />
            </a>
            <a href="https://wa.me/919044337799" className="w-14 h-14 bg-gray-50 border border-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-transparent transition-all shadow-sm hover:shadow-md">
              <SiWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
