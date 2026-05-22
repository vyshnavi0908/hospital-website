import { logoImg } from "@/assets";
import { Link } from "wouter";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { Phone, MapPin, ChevronRight, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A2647] text-white border-t-4 border-red-600">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 bg-white/10 p-3 rounded-xl w-fit">
              <img src={logoImg} alt="SVASTHA Hospital Logo" className="h-10 w-auto bg-white rounded-lg p-1" />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white leading-none">SVASTHA</span>
                <span className="text-[0.6rem] font-semibold text-blue-200 uppercase tracking-widest leading-none mt-1">Multi-Speciality</span>
              </div>
            </div>
            <p className="text-blue-100/70 mb-6 font-medium leading-relaxed">
              24/7 Emergency Care With Compassion & Excellence. Serving Mandapeta with advanced medical facilities and expert doctors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors border border-white/10">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors border border-white/10">
                <SiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-blue-100/80 font-medium">
              <li><a href="#home" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Home</a></li>
              <li><a href="#about" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> About Us</a></li>
              <li><a href="#doctors" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Our Doctors</a></li>
              <li><a href="#appointment" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Book Appointment</a></li>
              <li><a href="#contact" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Specialities</h4>
            <ul className="space-y-4 text-blue-100/80 font-medium">
              <li><a href="#specialities" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Emergency Medicine</a></li>
              <li><a href="#specialities" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Cardiology</a></li>
              <li><a href="#specialities" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Orthopedics</a></li>
              <li><a href="#specialities" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Gynecology</a></li>
              <li><a href="#specialities" className="hover:text-white flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Pediatrics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4 text-blue-100/80 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>SH 218, Sangita Venkat Reddy Nagar, Mandapeta, AP 533308</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="tel:09044337799" className="hover:text-white">09044337799</a>
                  <a href="tel:09044339977" className="hover:text-white">09044339977</a>
                  <a href="tel:09459459977" className="hover:text-white">09459459977</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 bg-[#06182D]">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/60 font-medium">
          <p>© 2025 SVASTHA Emergency & Multi-speciality Hospital. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
