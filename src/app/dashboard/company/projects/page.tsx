"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, Users, Clock, Eye, Pencil, Trash2, 
  ToggleLeft, ToggleRight, MapPin, DollarSign, 
  Building2, Sparkles, Target 
} from "lucide-react";

const POSTINGS = [
  { id: 1, title: "Frontend Engineer Intern", location: "Mountain View, CA", type: "Remote", applicants: 47, views: 312, salary: "$8,500/mo", posted: "Apr 1, 2026", daysLeft: 14, active: true, skills: ["React", "TypeScript"] },
  { id: 2, title: "UI/UX Designer", location: "San Francisco, CA", type: "On-site", applicants: 32, views: 245, salary: "$120K/yr", posted: "Mar 28, 2026", daysLeft: 21, active: true, skills: ["Figma", "Prototyping"] },
  { id: 3, title: "Backend Developer", location: "Remote · Global", type: "Remote", applicants: 28, views: 189, salary: "$145K/yr", posted: "Apr 5, 2026", daysLeft: 7, active: true, skills: ["Node.js", "PostgreSQL"] },
  { id: 4, title: "Data Analyst Intern", location: "New York, NY", type: "Hybrid", applicants: 15, views: 98, salary: "$7,000/mo", posted: "Mar 20, 2026", daysLeft: 0, active: false, skills: ["Python", "SQL"] },
];

export default function ActivePostings() {
  const [postings, setPostings] = useState(POSTINGS);

  const toggleActive = (id: number) => {
    setPostings(postings.map(p => p.id === id ? { ...p, active: !p.active } : p));
  };

  return (
    <div className="p-8 space-y-10">
      
      {/* 🌟 الهيدر المطلوب (أمنية ستايل) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full rounded-[3rem] bg-white border-[3px] border-amber-400 shadow-[0_20px_50px_rgba(251,191,36,0.15)] overflow-hidden"
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
              Active <span className="text-blue-600">Postings</span>
            </h1>
            <p className="font-medium text-slate-400 text-sm uppercase tracking-widest mt-1">Manage and track your job listings</p>
          </div>
        </div>
      </motion.div>

      {/* بقية الكود كما هو */}
      <div className="space-y-4 max-w-5xl mx-auto">
        {postings.map((post, i) => (
          <motion.div 
            key={post.id} 
            className={`sb-glass p-6 border-2 border-slate-100 rounded-[2rem] bg-white shadow-sm ${!post.active ? "opacity-60 grayscale-[0.5]" : ""}`} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.08 }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-syne font-black text-lg text-slate-800 italic uppercase">{post.title}</h3>
                  <span className={`px-3 py-1 rounded-xl text-[9px] font-black uppercase tracking-wider ${post.active ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-400"}`}>
                    {post.active ? "Active" : "Paused"}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 font-dm-sans text-xs text-slate-400 font-bold mb-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-500" /> {post.location}</span>
                  <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5 text-blue-500" /> {post.salary}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-blue-500" /> {post.daysLeft > 0 ? `${post.daysLeft}d left` : "Expired"}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.skills.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-lg bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest border border-slate-100">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 items-end justify-between self-stretch">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="font-black text-2xl text-slate-800">{post.applicants}</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Applicants</p>
                  </div>
                  <div className="text-center">
                    <p className="font-black text-2xl text-slate-800">{post.views}</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Views</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => toggleActive(post.id)} className="p-2.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100" title={post.active ? "Pause" : "Activate"}>
                    {post.active ? <ToggleRight className="w-6 h-6 text-emerald-500" /> : <ToggleLeft className="w-6 h-6 text-slate-300" />}
                  </button>
                  <button className="p-2.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"><Pencil className="w-4 h-4 text-blue-500" /></button>
                  <button className="p-2.5 rounded-xl hover:bg-red-50 transition-all border border-transparent hover:border-red-100"><Trash2 className="w-4 h-4 text-red-500" /></button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}