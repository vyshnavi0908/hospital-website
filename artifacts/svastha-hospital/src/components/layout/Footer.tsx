import { logoImg } from "@/assets";
import { Link } from "wouter";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { Phone, MapPin, ChevronRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white">
      {/* Top Banner */}
      <div className="bg-[#007BFF] py-3 text-center text-sm font-bold text-white tracking-wide shadow-md">
        24/7 EMERGENCY HOTLINE: <a href="tel:09044337799" className="underline underline-offset-4 ml-1">09044337799</a>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-xl">
                <img src={logoImg} alt="SVASTHA" className="h-10 w-auto" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white leading-tight tracking-wide">SVASTHA</span>
                <span className="text-[0.65rem] text-blue-300 uppercase tracking-widest font-bold">Multi-Speciality Hospital</span>
              </div>
            </div>
            <p className="text-blue-100/70 text-base mb-8 leading-relaxed pr-4">
              Advanced medical care with compassion. Dedicated to providing world-class healthcare facilities to the families of East Godavari.
            </p>
            
            <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10 w-max mb-8">
              <ShieldCheck className="w-8 h-8 text-[#10B981]" />
              <div className="text-sm font-medium text-white max-w-[200px] leading-snug">
                We accept Aarogyasri and all major health insurance schemes
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 transition-colors">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                <SiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-base text-blue-100/70 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-[#007BFF] group-hover:translate-x-1 transition-transform" /> Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-[#007BFF] group-hover:translate-x-1 transition-transform" /> About Us</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-[#007BFF] group-hover:translate-x-1 transition-transform" /> Our Doctors</a></li>
              <li><a href="#appointment" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-[#007BFF] group-hover:translate-x-1 transition-transform" /> Book Appointment</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Specialities</h4>
            <ul className="space-y-4 text-base text-blue-100/70 font-medium">
              <li><a href="#specialities" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-[#007BFF] group-hover:translate-x-1 transition-transform" /> Emergency</a></li>
              <li><a href="#specialities" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-[#007BFF] group-hover:translate-x-1 transition-transform" /> Cardiology</a></li>
              <li><a href="#specialities" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-[#007BFF] group-hover:translate-x-1 transition-transform" /> Orthopedics</a></li>
              <li><a href="#specialities" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 text-[#007BFF] group-hover:translate-x-1 transition-transform" /> Gynecology</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-6 text-base text-blue-100/70">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#007BFF] shrink-0 mt-1" />
                <span className="leading-relaxed">SH 218, Sangita Venkat Reddy Nagar, Mandapeta, AP 533308</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#007BFF] shrink-0 mt-1" />
                <div className="flex flex-col gap-2 font-bold">
                  <a href="tel:09044337799" className="text-white text-xl hover:text-[#007BFF] transition-colors">09044337799</a>
                  <a href="tel:09044339977" className="text-white hover:text-[#007BFF] transition-colors">09044339977</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 bg-[#061020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-blue-100/50">
          <p>© {new Date().getFullYear()} SVASTHA Emergency & Multi-speciality Hospital. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
