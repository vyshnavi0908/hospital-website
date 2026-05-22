import { MapPin, Phone, Clock } from "lucide-react";
import { SiYoutube, SiInstagram, SiWhatsapp } from "react-icons/si";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#007BFF] text-sm font-bold uppercase tracking-wider block mb-2">Location</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
            Contact & Address
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-[#D9EAF7] p-8 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-[#EAF6FF] rounded-full flex items-center justify-center mx-auto mb-4 text-[#007BFF]">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#1E293B] mb-2">Address</h3>
            <p className="text-sm text-gray-600">
              SH 218, Sangita Venkat Reddy Nagar,<br/>
              Mandapeta, Andhra Pradesh 533308
            </p>
          </div>

          <div className="bg-white border border-[#D9EAF7] p-8 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-[#EAF6FF] rounded-full flex items-center justify-center mx-auto mb-4 text-[#007BFF]">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#1E293B] mb-2">Helpline</h3>
            <div className="flex flex-col text-sm font-medium text-gray-600 gap-1">
              <a href="tel:09044337799" className="hover:text-[#007BFF]">09044337799</a>
              <a href="tel:09044339977" className="hover:text-[#007BFF]">09044339977</a>
              <a href="tel:09459459977" className="hover:text-[#007BFF]">09459459977</a>
            </div>
          </div>

          <div className="bg-white border border-[#D9EAF7] p-8 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-[#EAF6FF] rounded-full flex items-center justify-center mx-auto mb-4 text-[#007BFF]">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#1E293B] mb-2">Hours</h3>
            <p className="text-sm text-gray-600 mb-1">Emergency: 24/7</p>
            <p className="text-sm text-gray-600">OPD: Check Schedule</p>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-sm border border-[#D9EAF7] mb-8">
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

        <div className="flex justify-center gap-4">
          <a href="#" className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-[#007BFF] hover:text-white transition-colors">
            <SiInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
            <SiYoutube className="w-5 h-5" />
          </a>
          <a href="https://wa.me/919044337799" className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
            <SiWhatsapp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
