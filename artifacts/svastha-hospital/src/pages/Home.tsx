import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingElements } from "@/components/layout/FloatingElements";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Specialities } from "@/components/home/Specialities";
import { Emergency } from "@/components/home/Emergency";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Doctors } from "@/components/home/Doctors";
import { Facilities } from "@/components/home/Facilities";
import { Testimonials } from "@/components/home/Testimonials";
import { Appointment } from "@/components/home/Appointment";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Specialities />
        <Emergency />
        <WhyChooseUs />
        <Doctors />
        <Facilities />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}
