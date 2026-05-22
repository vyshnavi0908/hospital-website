import { logoImg } from "@/assets";
import { Link } from "wouter";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { Phone, MapPin, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white pt-1">
      <div className="bg-[#007BFF] py-2 text-center text-sm font-medium text-white shadow-sm">
        24/7 Emergency Care With Compassion & Excellence
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-10">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1 rounded-md">
                <img src={logoImg} alt="SVASTHA" className="h-10 w-auto" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">SVASTHA</span>
                <span className="text-[0.6rem] text-gray-400 uppercase tracking-widest font-medium">Multi-Speciality</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Serving Mandapeta with advanced medical facilities and expert doctors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-[#007BFF] hover:text-white hover:border-transparent transition-colors">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-transparent transition-colors">
                <SiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#007BFF]" /> Home</a></li>
              <li><a href="#about" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#007BFF]" /> About Us</a></li>
              <li><a href="#doctors" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#007BFF]" /> Our Doctors</a></li>
              <li><a href="#appointment" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#007BFF]" /> Appointment</a></li>
              <li><a href="#contact" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#007BFF]" /> Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 text-white uppercase tracking-wider">Specialities</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#specialities" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#007BFF]" /> Emergency</a></li>
              <li><a href="#specialities" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#007BFF]" /> Cardiology</a></li>
              <li><a href="#specialities" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#007BFF]" /> Orthopedics</a></li>
              <li><a href="#specialities" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#007BFF]" /> Gynecology</a></li>
              <li><a href="#specialities" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#007BFF]" /> Pediatrics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#007BFF] shrink-0 mt-0.5" />
                <span>SH 218, Sangita Venkat Reddy Nagar, Mandapeta, AP 533308</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#007BFF] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:09044337799" className="hover:text-white">09044337799</a>
                  <a href="tel:09044339977" className="hover:text-white">09044339977</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SVASTHA Emergency & Multi-speciality Hospital. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
