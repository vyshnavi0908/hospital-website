import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Calendar, PhoneCall, CheckCircle2 } from "lucide-react";

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
    <section id="appointment" className="py-16 md:py-24 bg-[#EAF6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row border border-[#D9EAF7]">
          
          {/* Left Info Side */}
          <div className="lg:w-1/3 bg-[#007BFF] text-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
            <p className="text-blue-100 mb-10">
              Schedule your visit with our expert doctors for personalized care.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <PhoneCall className="w-6 h-6 text-blue-200 mt-1" />
                <div>
                  <div className="text-sm text-blue-200 font-medium mb-1">Call for booking</div>
                  <div className="text-xl font-bold">09044337799</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-blue-200 mt-1" />
                <div>
                  <div className="text-sm text-blue-200 font-medium mb-1">Working Hours</div>
                  <div className="text-xl font-bold">24 Hours / 7 Days</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="lg:w-2/3 p-10 bg-white">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1E293B]">Patient Name</label>
                  <input 
                    {...form.register("name")}
                    className="w-full bg-white border border-[#D9EAF7] rounded-lg px-4 py-2.5 focus:border-[#007BFF] focus:ring-2 focus:ring-[#EAF6FF] outline-none transition-all"
                    placeholder="Full name"
                  />
                  {form.formState.errors.name && (
                    <span className="text-red-500 text-xs">{form.formState.errors.name.message}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1E293B]">Phone Number</label>
                  <input 
                    {...form.register("phone")}
                    className="w-full bg-white border border-[#D9EAF7] rounded-lg px-4 py-2.5 focus:border-[#007BFF] focus:ring-2 focus:ring-[#EAF6FF] outline-none transition-all"
                    placeholder="Phone number"
                  />
                  {form.formState.errors.phone && (
                    <span className="text-red-500 text-xs">{form.formState.errors.phone.message}</span>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1E293B]">Department</label>
                  <select 
                    {...form.register("department")}
                    className="w-full bg-white border border-[#D9EAF7] rounded-lg px-4 py-2.5 focus:border-[#007BFF] focus:ring-2 focus:ring-[#EAF6FF] outline-none transition-all cursor-pointer"
                  >
                    <option value="">Select Department</option>
                    {departments.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  {form.formState.errors.department && (
                    <span className="text-red-500 text-xs">{form.formState.errors.department.message}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1E293B]">Date</label>
                  <input 
                    type="date"
                    {...form.register("date")}
                    className="w-full bg-white border border-[#D9EAF7] rounded-lg px-4 py-2.5 focus:border-[#007BFF] focus:ring-2 focus:ring-[#EAF6FF] outline-none transition-all"
                  />
                  {form.formState.errors.date && (
                    <span className="text-red-500 text-xs">{form.formState.errors.date.message}</span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1E293B]">Message (Optional)</label>
                <textarea 
                  {...form.register("message")}
                  className="w-full bg-white border border-[#D9EAF7] rounded-lg px-4 py-2.5 focus:border-[#007BFF] focus:ring-2 focus:ring-[#EAF6FF] outline-none transition-all resize-none h-24"
                  placeholder="Additional details"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#007BFF] text-white font-medium py-3 rounded-lg hover:bg-[#0056D2] transition-colors disabled:opacity-70 flex justify-center items-center"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  "Book Appointment"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
