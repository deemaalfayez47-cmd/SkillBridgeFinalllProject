"use client";

import { useState } from "react";
import { 
  User, Lock, Save, Camera, 
  Upload, FileSearch, Edit3, Plus, Trash2, 
  Cpu, BadgeCheck, MapPin, 
  Briefcase, GraduationCap, Bell, Globe, Zap, Star,
  Fingerprint, Sparkles, ShieldCheck, FileText
} from "lucide-react";
import { motion } from "framer-motion";

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // بياناتك المهنية
  const [resumeContent, setResumeContent] = useState({
    summary: "Software Engineer focusing on Front-end Development. CIS Graduate from BAU with a 3.0 GPA. Passionate about AI and Full-Stack development.",
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML/CSS", "AI Integration"],
    experience: [
      { id: 1, role: "Core Network & Roaming Intern", company: "Umniah", duration: "March 2026 - Present", icon: Briefcase },
      { id: 2, role: "Telesales Representative", company: "Umniah", duration: "Nov 2024 - May 2025", icon: Zap },
      { id: 3, role: "CIS Student", company: "Balqa Applied University", duration: "Graduated 2025", icon: GraduationCap }
    ]
  });

  const handleFileUpload = () => {
    setIsAnalyzing(true);
    // محاكاة لعملية التحليل بالذكاء الاصطناعي
    setTimeout(() => setIsAnalyzing(false), 2000); 
  };

  return (
    <div className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 space-y-10 font-sans">
      
      {/* 🌟 الهيدر الموحد الرشيق */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full rounded-[3rem] bg-white/90 backdrop-blur-xl border-2 border-amber-400 shadow-[0_20px_50px_rgba(251,191,36,0.1)] overflow-hidden"
      >
        <div className="absolute top-6 right-8 z-20">
          <button className="bg-white p-3 rounded-xl shadow-md border border-amber-100 hover:scale-110 transition-transform relative group">
            <Bell size={18} className="text-slate-700 group-hover:text-amber-500" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full border-2 border-white"></span>
          </button>
        </div>

        <div className="p-8 flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="relative group">
            <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-tr from-amber-400 via-orange-400 to-blue-600 p-1 shadow-2xl group-hover:rotate-3 transition-transform duration-500">
              <div className="w-full h-full rounded-[2.35rem] bg-white flex items-center justify-center text-5xl border-4 border-white overflow-hidden shadow-inner font-black">
                👩‍💻
              </div>
            </div>
            <button className="absolute -bottom-1 -right-1 p-3 bg-slate-900 text-white rounded-xl shadow-xl border-2 border-white hover:bg-amber-500 transition-all hover:scale-110">
              <Camera size={16} />
            </button>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-slate-800 tracking-tight italic uppercase leading-tight">Deema Alsoufi</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest bg-blue-600 text-white shadow-lg shadow-blue-100 flex items-center gap-2">
                  <BadgeCheck size={12} /> AI Engineer Path
                </span>
                <span className="px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-2">
                  <Star size={12} fill="currentColor" /> Top Talent
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500 font-bold text-xs">
              <span className="flex items-center gap-2 bg-slate-50/50 px-4 py-2 rounded-xl border border-slate-100">
                <MapPin size={16} className="text-blue-500" /> Amman, Jordan
              </span>
              <span className="flex items-center gap-2 bg-slate-50/50 px-4 py-2 rounded-xl border border-slate-100">
                <GraduationCap size={16} className="text-amber-500" /> BAU Graduate
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* المحتوى الرئيسي */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: AI Workspace */}
        <div className="lg:col-span-8 space-y-10">
          <section className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 space-y-10 overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-50 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg">
                  <FileSearch size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 italic uppercase">Resume AI Workspace</h3>
                  <p className="text-slate-400 font-bold text-xs tracking-tight">Real-time professional data sync</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              {/* 📂 جزء تحميل السي في المضاف */}
              <div className="group relative border-2 border-dashed border-slate-200 rounded-[2.5rem] p-8 bg-slate-50/30 transition-all hover:border-blue-400 hover:bg-blue-50/30 text-center">
                <input 
                  type="file" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx"
                />
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto text-blue-600 group-hover:scale-110 transition-transform">
                    {isAnalyzing ? <Sparkles className="animate-spin" /> : <Upload size={24} />}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-black text-slate-800 uppercase italic">
                      {isAnalyzing ? "AI is analyzing your profile..." : "Drop your new Resume here"}
                    </p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Supports PDF, DOCX (Max 5MB)</p>
                  </div>
                </div>
              </div>

              {/* Verified Tech Stack */}
              <div className="space-y-6">
                <div className="flex justify-between items-center px-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Verified Tech Stack</span>
                  </div>
                  <button className="flex items-center gap-2 text-[10px] font-black text-blue-600 bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-all border border-blue-100">
                    <Plus size={14}/> NEW SKILL
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {resumeContent.skills.map((skill, index) => (
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -2 }}
                      key={skill} 
                      className={`px-5 py-3 rounded-2xl text-[11px] font-black flex items-center gap-3 shadow-sm border transition-all cursor-default group
                        ${index % 2 === 0 
                          ? 'bg-blue-50/50 border-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white' 
                          : 'bg-amber-50/50 border-amber-100 text-amber-700 hover:bg-amber-500 hover:text-white'
                        }`}
                    >
                      {skill}
                      <Trash2 size={12} className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Professional Journey */}
              <div className="space-y-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2 block">Professional Timeline</span>
                <div className="grid gap-3">
                  {resumeContent.experience.map(exp => (
                    <div key={exp.id} className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                          <exp.icon size={20} />
                        </div>
                        <div>
                          <p className="text-base font-black text-slate-800 uppercase italic">{exp.role}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">{exp.company} • <span className="text-amber-500">{exp.duration}</span></p>
                        </div>
                      </div>
                      <Edit3 size={16} className="text-slate-200 group-hover:text-blue-400 cursor-pointer" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right: Identity */}
        <div className="lg:col-span-4 space-y-10">
          <section className="bg-white rounded-[3rem] p-8 shadow-xl border-2 border-slate-50 space-y-8 relative">
             <div className="flex items-center gap-3 border-b border-slate-50 pb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-100">
                  <Fingerprint size={20} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic">Identity Hub</h3>
             </div>

             <div className="space-y-5">
                <div className="group space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                    <User size={10} /> Full Legal Name
                  </label>
                  <div className="relative">
                    <input type="text" defaultValue="Deema Alsoufi" className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-2xl py-4 px-6 text-sm font-bold focus:border-amber-400 focus:bg-white outline-none transition-all" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-200"><ShieldCheck size={18} /></div>
                  </div>
                </div>

                <div className="group space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                    <GraduationCap size={10} /> Professional Major
                  </label>
                  <input type="text" defaultValue="Computer Information Systems" className="w-full bg-slate-50/50 border-2 border-slate-50 rounded-2xl py-4 px-6 text-sm font-bold focus:border-blue-500 focus:bg-white outline-none transition-all" />
                </div>
             </div>

             <div className="pt-6 border-t border-slate-50 space-y-4">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Lock size={14} className="text-blue-500" /> Security Protocol
                </h4>
                <div className="relative">
                  <input type="password" placeholder="••••••••••••" className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 px-6 text-sm font-bold focus:border-blue-500 outline-none" />
                </div>
             </div>

             <button 
              className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xs shadow-2xl hover:bg-blue-600 active:scale-95 transition-all flex items-center justify-center gap-3 group"
              onClick={() => { setIsSaving(true); setTimeout(() => setIsSaving(false), 1000); }}
             >
              <Save size={18} className="group-hover:animate-bounce" /> {isSaving ? "Synchronizing..." : "Save Identity Changes"}
             </button>
          </section>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2.5rem] p-8 text-white space-y-5 shadow-2xl shadow-blue-200">
             <div className="flex justify-between items-center">
               <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Connected Portals</span>
               <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
             </div>
             <div className="flex gap-4">
                <button className="flex-1 py-4 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 transition-all border border-white/10 shadow-lg">
                  <Globe size={22} />
                </button>
                <button className="flex-1 py-4 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 transition-all border border-white/10 shadow-lg">
                  <Cpu size={22} />
                </button>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}