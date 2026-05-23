import { Activity, Heart, Bone, Baby, Syringe, AlertCircle, FileSearch, UserPlus, Brain, Eye, Pill, ShieldPlus } from "lucide-react";

export function QuickSpecialities() {
  const departments = [
    { name: "Emergency Medicine", icon: <AlertCircle className="w-4 h-4" /> },
    { name: "General Medicine", icon: <Activity className="w-4 h-4" /> },
    { name: "Cardiology", icon: <Heart className="w-4 h-4" /> },
    { name: "Orthopedics", icon: <Bone className="w-4 h-4" /> },
    { name: "Gynecology", icon: <UserPlus className="w-4 h-4" /> },
    { name: "Pediatrics", icon: <Baby className="w-4 h-4" /> },
    { name: "Critical Care", icon: <ShieldPlus className="w-4 h-4" /> },
    { name: "General Surgery", icon: <Syringe className="w-4 h-4" /> },
    { name: "Diagnostics", icon: <FileSearch className="w-4 h-4" /> },
    { name: "Trauma Care", icon: <Brain className="w-4 h-4" /> },
    { name: "ICU", icon: <Eye className="w-4 h-4" /> },
    { name: "Pharmacy", icon: <Pill className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-white border-b border-[#D9EAF7] py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider shrink-0 hidden md:block">
          Our Departments
        </span>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mb-2">
          {departments.map((dept, i) => (
            <div 
              key={i}
              className="flex items-center gap-2 border border-[#D9EAF7] rounded-full px-5 py-2 text-sm font-medium text-[#1E293B] hover:bg-[#EAF6FF] hover:border-[#007BFF] hover:text-[#007BFF] transition-colors cursor-pointer shrink-0 whitespace-nowrap shadow-sm"
            >
              {dept.icon}
              {dept.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
