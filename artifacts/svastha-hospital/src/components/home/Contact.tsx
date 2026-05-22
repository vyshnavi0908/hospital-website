import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { SiYoutube, SiInstagram } from "react-icons/si";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">Contact & Location</h2>
          <p className="text-lg text-muted-foreground">
            We are easy to reach and centrally located in Mandapeta for immediate access to care.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-border/50 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-primary shadow-sm">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Address</h3>
            <p className="text-muted-foreground font-medium">
              SH 218, Sangita Venkat Reddy Nagar,<br/>
              Mandapeta, Andhra Pradesh 533308
            </p>
          </div>

          <div className="bg-primary text-white p-8 rounded-2xl shadow-xl text-center transform lg:-translate-y-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Helplines</h3>
            <div className="flex flex-col gap-2 font-bold text-lg">
              <a href="tel:09044337799" className="hover:text-blue-200">09044337799</a>
              <a href="tel:09044339977" className="hover:text-blue-200">09044339977</a>
              <a href="tel:09459459977" className="hover:text-blue-200">09459459977</a>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-border/50 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-primary shadow-sm">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Open Hours</h3>
            <p className="text-muted-foreground font-medium mb-2">Emergency: 24/7</p>
            <p className="text-muted-foreground font-medium">OPD: Check Schedule</p>
            
            <div className="flex justify-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <SiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border">
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
      </div>
    </section>
  );
}
