"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Send,
  Sparkles,
  Clock,
  DollarSign,
  Target,
  Building2,
  Layers,
  AlignLeft,
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";

export default function PostJobPage() {
  const [postType, setPostType] = useState<"project" | "internship">("project");

  // رجعت الـ Padding والخطوط لحجمها الطبيعي المريح
  const inputStyle = `
    w-full px-6 py-5 rounded-[1.5rem] bg-white border-2 border-slate-100 
    outline-none transition-all duration-300
    placeholder:text-slate-300 text-slate-900 font-bold text-base
    focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50
  `;

  const labelStyle =
    "text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2 mb-4 italic";

  return (
    <div className="flex min-h-screen bg-[#FDFDFD] text-slate-900 font-sans">
      {/* 1. 🧭 Sidebar الثابت */}

      {/* 2. 🏠 المحتوى الرئيسي */}
      <main className="flex-1 p-6 md:px-16 md:py-8 overflow-y-auto">
        {/* 👑 Header - "نحيف" وفي الأعلى لكن واضح */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex items-center justify-between mb-6"></div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic leading-none">
              Post <span className="text-blue-600">Opportunity</span>
            </h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">
            Share a path, Shape a student's career
          </p>
          </div>
        </div>

        {/* 🔄 التبديل بين الخيارات - حجم مريح */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="inline-flex p-2 bg-slate-100/50 rounded-[1.5rem] border border-slate-100">
            <button
              onClick={() => setPostType("project")}
              className={`relative flex items-center gap-3 px-10 py-3.5 rounded-[1.2rem] font-black text-[11px] uppercase tracking-widest transition-all z-10 ${postType === "project" ? "text-white shadow-xl shadow-slate-900/20" : "text-slate-400 hover:text-slate-600"}`}
            >
              {postType === "project" && (
                <motion.div
                  layoutId="tab"
                  className="absolute inset-0 bg-slate-900 rounded-[1.2rem] -z-10"
                />
              )}
              <Briefcase size={16} /> Project
            </button>
            <button
              onClick={() => setPostType("internship")}
              className={`relative flex items-center gap-3 px-10 py-3.5 rounded-[1.2rem] font-black text-[11px] uppercase tracking-widest transition-all z-10 ${postType === "internship" ? "text-white shadow-xl shadow-blue-900/20" : "text-slate-400 hover:text-slate-600"}`}
            >
              {postType === "internship" && (
                <motion.div
                  layoutId="tab"
                  className="absolute inset-0 bg-blue-600 rounded-[1.2rem] -z-10"
                />
              )}
              <GraduationCap size={16} /> Internship
            </button>
          </div>
        </div>

        {/* 📝 Form Card - رجع فخم وكبير */}
        <motion.div
          layout
          className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 md:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.03)] max-w-5xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[80px] -mr-32 -mt-32 opacity-60 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={postType}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              className="space-y-10 relative z-10"
            >
              {/* Field: Title */}
              <div className="space-y-4">
                <label className={labelStyle}>
                  <Target className="text-blue-600" size={16} />
                  {postType === "project"
                    ? "Project Mission Title"
                    : "Position Name"}
                </label>
                <input
                  type="text"
                  placeholder={
                    postType === "project"
                      ? "e.g. AI-Driven Chat Interface"
                      : "e.g. Frontend Developer Intern"
                  }
                  className={inputStyle}
                />
              </div>

              {/* Grid: Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {postType === "project" ? (
                  <>
                    <div className="space-y-4">
                      <label className={labelStyle}>
                        <DollarSign size={16} /> Estimated Budget
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 500 - 800 JOD"
                        className={inputStyle}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className={labelStyle}>
                        <Clock size={16} /> Deadline
                      </label>
                      <input
                        type="date"
                        className={`${inputStyle} text-slate-400 uppercase text-xs`}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-4">
                      <label className={labelStyle}>
                        <Clock size={16} /> Internship Period
                      </label>
                      <select
                        className={`${inputStyle} appearance-none cursor-pointer`}
                      >
                        <option>3 Months Duration</option>
                        <option>6 Months Duration</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className={labelStyle}>
                        <Layers size={16} /> Technical Stack
                      </label>
                      <input
                        type="text"
                        placeholder="React, Next.js, Tailwind"
                        className={inputStyle}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Field: Description */}
              <div className="space-y-4">
                <label className={labelStyle}>
                  <AlignLeft size={16} /> Mission Objectives
                </label>
                <textarea
                  rows={6}
                  placeholder="What are the key goals for this opportunity?"
                  className={`${inputStyle} resize-none leading-relaxed font-medium min-h-[150px]`}
                ></textarea>
              </div>

              {/* 🚀 Submit Button - رجع عريض وقوي */}
              <motion.button
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-7 rounded-[2rem] bg-slate-900 text-white font-black text-sm uppercase tracking-[0.4em] flex items-center justify-center gap-4 shadow-2xl hover:bg-blue-600 transition-all duration-500 mt-4"
              >
                <Send size={20} />
                {postType === "project" ? "Launch Project" : "Post Opportunity"}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}
