import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
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
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Appointment Requested!",
        description: "We will contact you shortly to confirm your slot.",
        className: "bg-emerald-500 text-white border-none",
        duration: 5000,
        action: <CheckCircle2 className="w-6 h-6 text-white" />
      });
      form.reset();
    }, 1500);
  };

  const departments = [
    "Emergency Medicine", "General Medicine", "Cardiology", "Orthopedics",
    "Gynecology", "Pediatrics", "Critical Care", "General Surgery", "Diagnostics"
  ];

  return (
    <section id="appointment" className="py-24 bg-gradient-to-br from-primary to-[#0A2647] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Left Info Side */}
          <div className="lg:col-span-2 bg-[#0A2647] text-white p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/30 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white leading-tight">
                Book an Appointment Today
              </h2>
              <p className="text-blue-100/80 text-lg mb-10 leading-relaxed">
                Schedule your visit with our expert doctors. We ensure minimal waiting time and premium care.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <PhoneCall className="text-blue-300" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 font-bold uppercase tracking-wider mb-1">Call for booking</div>
                    <div className="text-2xl font-bold">09044337799</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Calendar className="text-blue-300" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 font-bold uppercase tracking-wider mb-1">Working Hours</div>
                    <div className="text-xl font-bold">24 Hours / 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="lg:col-span-3 p-10 md:p-14 bg-white">
            <h3 className="text-2xl font-extrabold text-foreground mb-8">Fill Details</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground uppercase">Patient Name</label>
                  <input 
                    {...form.register("name")}
                    className="w-full border-b-2 border-border/50 focus:border-primary px-0 py-3 bg-transparent outline-none transition-colors font-medium"
                    placeholder="Enter full name"
                  />
                  {form.formState.errors.name && (
                    <span className="text-red-500 text-sm font-semibold">{form.formState.errors.name.message}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground uppercase">Phone Number</label>
                  <input 
                    {...form.register("phone")}
                    className="w-full border-b-2 border-border/50 focus:border-primary px-0 py-3 bg-transparent outline-none transition-colors font-medium"
                    placeholder="Enter phone number"
                  />
                  {form.formState.errors.phone && (
                    <span className="text-red-500 text-sm font-semibold">{form.formState.errors.phone.message}</span>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground uppercase">Department</label>
                  <select 
                    {...form.register("department")}
                    className="w-full border-b-2 border-border/50 focus:border-primary px-0 py-3 bg-transparent outline-none transition-colors font-medium cursor-pointer"
                  >
                    <option value="">Select Department</option>
                    {departments.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  {form.formState.errors.department && (
                    <span className="text-red-500 text-sm font-semibold">{form.formState.errors.department.message}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground uppercase">Date</label>
                  <input 
                    type="date"
                    {...form.register("date")}
                    className="w-full border-b-2 border-border/50 focus:border-primary px-0 py-3 bg-transparent outline-none transition-colors font-medium"
                  />
                  {form.formState.errors.date && (
                    <span className="text-red-500 text-sm font-semibold">{form.formState.errors.date.message}</span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground uppercase">Additional Message (Optional)</label>
                <textarea 
                  {...form.register("message")}
                  className="w-full border-b-2 border-border/50 focus:border-primary px-0 py-3 bg-transparent outline-none transition-colors font-medium resize-none h-20"
                  placeholder="Describe your symptoms briefly"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Book Appointment <Calendar className="w-5 h-5 ml-2" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
