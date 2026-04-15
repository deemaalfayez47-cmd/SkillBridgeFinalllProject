"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, GraduationCap, Send, Sparkles, Clock, 
  DollarSign, Target, Building2, Layers, AlignLeft 
} from "lucide-react";

export default function PostJobPage() {
  const [postType, setPostType] = useState<"project" | "internship">("project");

  // ستايلات المدخلات الواضحة والخط العريض
  const inputStyle = `
    w-full px-6 py-5 rounded-[1.5rem] bg-white border-[3px] border-slate-100 
    outline-none transition-all duration-300
    placeholder:text-slate-300 text-slate-900 font-bold text-base
    shadow-sm focus:bg-white
  `;

  const labelStyle = "text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2 mb-3";

  return (
    <div className="min-h-screen p-6 md:p-12 bg-[#F8FAFC] space-y-10 font-sans">
      
      {/* 🌟 الهيدر المعدل (بدون الجملة الإضافية) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full rounded-[3rem] bg-white border-[3px] border-amber-400 shadow-[0_20px_50px_rgba(251,191,36,0.15)] overflow-hidden mx-auto max-w-5xl"
      >
        <div className="p-10 flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="w-24 h-24 rounded-[2.2rem] bg-gradient-to-tr from-blue-600 via-purple-500 to-amber-400 p-1.5 shadow-2xl">
            <div className="w-full h-full rounded-[1.8rem] bg-white flex items-center justify-center border-4 border-white overflow-hidden">
              <Building2 size={36} className="text-slate-800" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              
            
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
              Create <span className="text-blue-600">New Opportunity</span>
            </h1>
          </div>
        </div>
      </motion.div>

      {/* التبديل بين الخيارات */}
      <div className="flex justify-center">
        <div className="inline-flex p-2 bg-white rounded-[2rem] border-2 border-slate-100 shadow-xl">
          <button 
            onClick={() => setPostType("project")}
            className={`relative flex items-center gap-3 px-10 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all z-10 ${postType === "project" ? "text-white" : "text-slate-400 hover:text-slate-600"}`}
          >
            {postType === "project" && <motion.div layoutId="tab" className="absolute inset-0 bg-blue-600 rounded-[1.5rem] shadow-lg shadow-blue-200 -z-10" />}
            <Briefcase size={18} /> Project
          </button>
          <button 
            onClick={() => setPostType("internship")}
            className={`relative flex items-center gap-3 px-10 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all z-10 ${postType === "internship" ? "text-white" : "text-slate-400 hover:text-slate-600"}`}
          >
            {postType === "internship" && <motion.div layoutId="tab" className="absolute inset-0 bg-purple-600 rounded-[1.5rem] shadow-lg shadow-purple-200 -z-10" />}
            <GraduationCap size={18} /> Internship
          </button>
        </div>
      </div>

      {/* كارد البيانات الرئيسي */}
      <motion.div 
        layout
        className="bg-white border-2 border-slate-100 rounded-[3.5rem] p-10 md:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.04)] max-w-5xl mx-auto"
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={postType}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-12"
          >
            
            {/* حقل العنوان */}
            <div className="relative">
              <label className={labelStyle}>
                <Target className={postType === 'project' ? 'text-blue-600' : 'text-purple-600'} size={18} />
                {postType === "project" ? "Project Mission Title" : "Internship Position Name"}
              </label>
              <input 
                type="text" 
                placeholder={postType === "project" ? "e.g. SkillBridge AI Integration" : "e.g. Full-Stack Developer Intern"}
                className={`${inputStyle} ${postType === 'project' ? 'focus:border-blue-500 focus:ring-blue-50' : 'focus:border-purple-500 focus:ring-purple-50'}`}
              />
            </div>

            {/* تفاصيل الميزانية والوقت */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {postType === "project" ? (
                <>
                  <div className="bg-blue-50/50 p-8 rounded-[2.5rem] border-2 border-blue-100/50">
                    <label className={`${labelStyle} text-blue-600`}>
                      <DollarSign size={18} /> Estimated Budget
                    </label>
                    <input type="text" placeholder="e.g. 700 - 1,200 JOD" className={`${inputStyle} focus:border-blue-500`} />
                  </div>
                  <div className="bg-cyan-50/50 p-8 rounded-[2.5rem] border-2 border-cyan-100/50">
                    <label className={`${labelStyle} text-cyan-600`}>
                      <Clock size={18} /> Delivery Deadline
                    </label>
                    <input type="date" className={`${inputStyle} focus:border-cyan-500 text-slate-500`} />
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-purple-50/50 p-8 rounded-[2.5rem] border-2 border-purple-100/50">
                    <label className={`${labelStyle} text-purple-600`}>
                      <Clock size={18} /> Internship Period
                    </label>
                    <select className={`${inputStyle} focus:border-purple-500 cursor-pointer`}>
                      <option>3 Months Duration</option>
                      <option>6 Months Duration</option>
                    </select>
                  </div>
                  <div className="bg-indigo-50/50 p-8 rounded-[2.5rem] border-2 border-indigo-100/50">
                    <label className={`${labelStyle} text-indigo-600`}>
                      <Layers size={18} /> Required Tech Stack
                    </label>
                    <input type="text" placeholder="e.g. React.js, Next.js, AI APIs" className={`${inputStyle} focus:border-indigo-500`} />
                  </div>
                </>
              )}
            </div>

            {/* الوصف */}
            <div className="bg-slate-50/50 p-8 rounded-[2.5rem] border-2 border-slate-100">
              <label className={labelStyle}>
                <AlignLeft size={18} /> Mission Objectives & Description
              </label>
              <textarea 
                rows={6} 
                className={`${inputStyle} resize-none leading-relaxed text-base font-medium`} 
                placeholder="What are the main goals? Mention key tasks..."
              ></textarea>
            </div>

            {/* 🚀 الزر الملون والمتدرج الجديد */}
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="
                w-full py-7 text-white font-black text-lg uppercase tracking-[0.4em] rounded-[2.2rem] shadow-2xl transition-all duration-500
                flex items-center justify-center gap-4
                bg-gradient-to-r from-blue-600 via-purple-600 to-amber-400
                bg-[length:200%_auto] hover:bg-right
              "
            >
              <Send size={24} className="animate-bounce" />
              {postType === "project" ? "Launch Project" : "Post Internship"}
            </motion.button>

          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}