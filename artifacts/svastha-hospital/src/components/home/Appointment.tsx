import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Calendar, PhoneCall, CheckCircle2, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  department: z.string().min(1, "Please select a department"),
  date: z.string().min(1, "Please select a date"),
  message: z.string().optional()
});

export function Appointment() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      department: "",
      date: "",
      message: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Appointment Requested!",
        description: "We will contact you shortly to confirm your slot.",
        className: "bg-green-50 text-green-700 border-green-200",
        duration: 5000,
        action: <CheckCircle2 className="w-6 h-6 text-green-600" />
      });
      form.reset();
    }, 1500);
  };

  const departments = [
    "Emergency Medicine", "General Medicine", "Cardiology", "Orthopedics",
    "Gynecology", "Pediatrics", "Critical Care", "General Surgery", "Diagnostics"
  ];

  return (
    <section id="appointment" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          
          {/* Left Contact Side */}
          <div className="w-full lg:w-[40%] bg-[#007BFF] p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-blue-100 text-lg mb-12">
                Need a consultation? Book an appointment or contact us directly. We're here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <MapPin className="w-7 h-7 text-white shrink-0" />
                  <div>
                    <div className="text-white font-bold text-xl mb-1">Location</div>
                    <div className="text-blue-100">SH 218, Mandapeta,<br/>Andhra Pradesh 533308</div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <PhoneCall className="w-7 h-7 text-white shrink-0" />
                  <div>
                    <div className="text-white font-bold text-xl mb-1">Phone</div>
                    <div className="text-blue-100 flex flex-col">
                      <a href="tel:09044337799" className="hover:text-white transition-colors">09044337799</a>
                      <a href="tel:09044339977" className="hover:text-white transition-colors">09044339977</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Calendar className="w-7 h-7 text-white shrink-0" />
                  <div>
                    <div className="text-white font-bold text-xl mb-1">Hours</div>
                    <div className="text-blue-100">Emergency: 24/7<br/>OPD: Check Schedule</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-400/50">
              <a href="https://wa.me/919044337799" className="inline-flex items-center gap-3 text-white font-bold hover:text-blue-100 transition-colors">
                <SiWhatsapp className="w-6 h-6" />
                Message us on WhatsApp →
              </a>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="w-full lg:w-[60%] bg-white p-10 md:p-14">
            <h3 className="text-3xl font-bold text-[#1E293B] mb-8">Book an Appointment</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Patient Name</label>
                  <input 
                    {...form.register("name")}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white focus:border-[#007BFF] focus:ring-2 focus:ring-[#EAF6FF] outline-none transition-all"
                    placeholder="Full name"
                  />
                  {form.formState.errors.name && (
                    <span className="text-red-500 text-xs font-medium">{form.formState.errors.name.message}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input 
                    {...form.register("phone")}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white focus:border-[#007BFF] focus:ring-2 focus:ring-[#EAF6FF] outline-none transition-all"
                    placeholder="Mobile number"
                  />
                  {form.formState.errors.phone && (
                    <span className="text-red-500 text-xs font-medium">{form.formState.errors.phone.message}</span>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Department</label>
                  <select 
                    {...form.register("department")}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white focus:border-[#007BFF] focus:ring-2 focus:ring-[#EAF6FF] outline-none transition-all cursor-pointer"
                  >
                    <option value="">Select Department...</option>
                    {departments.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  {form.formState.errors.department && (
                    <span className="text-red-500 text-xs font-medium">{form.formState.errors.department.message}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Preferred Date</label>
                  <input 
                    type="date"
                    {...form.register("date")}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white focus:border-[#007BFF] focus:ring-2 focus:ring-[#EAF6FF] outline-none transition-all"
                  />
                  {form.formState.errors.date && (
                    <span className="text-red-500 text-xs font-medium">{form.formState.errors.date.message}</span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Additional Message</label>
                <textarea 
                  {...form.register("message")}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white focus:border-[#007BFF] focus:ring-2 focus:ring-[#EAF6FF] outline-none transition-all resize-none h-32"
                  placeholder="Describe your symptoms or reason for visit"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#007BFF] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#0056D2] transition-colors shadow-md disabled:opacity-70 flex justify-center items-center mt-4"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  "Confirm Appointment"
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
