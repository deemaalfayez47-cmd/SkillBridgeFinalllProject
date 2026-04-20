"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Pencil,
  Trash2,
  ToggleLeft,
  ToggleRight,
  Search,
  ArrowRight,
  X,
  Mail,
  TrendingUp,
} from "lucide-react";

// --- 1. البيانات الافتراضية للوظائف ---
const POSTINGS = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    location: "Amman, Jordan",
    applicants: 47,
    active: true,
    skills: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    location: "Amman, Jordan",
    applicants: 32,
    active: true,
    skills: ["Figma", "Design Systems"],
  },
  {
    id: 3,
    title: "Backend Developer",
    location: "Remote",
    applicants: 28,
    active: true,
    skills: ["Node.js", "PostgreSQL"],
  },
];

// --- 2. بيانات المتقدمين الافتراضية (تظهر في الـ Modal) ---
const MOCK_TALENTS = [
  {
    id: 1,
    name: "Sami Ahmad",
    role: "React Developer",
    match: 98,
    avatar: "SA",
    university: "PSUT",
    status: "Top Match",
  },
  {
    id: 2,
    name: "Lina Omar",
    role: "Frontend Enthusiast",
    match: 92,
    avatar: "LO",
    university: "JU",
    status: "Highly Qualified",
  },
  {
    id: 3,
    name: "Zaid Noor",
    role: "Junior Developer",
    match: 85,
    avatar: "ZN",
    university: "BAU",
    status: "Potential",
  },
];

export default function ActivePostings() {
  const [postings, setPostings] = useState(POSTINGS);
  const [selectedPost, setSelectedPost] = useState<null | number>(null);

  const toggleActive = (id: number) => {
    setPostings(
      postings.map((p) => (p.id === id ? { ...p, active: !p.active } : p)),
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans p-6 md:px-16 md:py-8 overflow-y-auto">
      {/* 👑 Header - متناسق مع الداشبورد */}
      <div className="max-w-5xl mx-auto mb-10 mt-4">
        <div className="border-l-4 border-blue-600 pl-6">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic leading-none">
            Active <span className="text-blue-600">Postings</span>
          </h1>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">
            Manage and track your published opportunities
          </p>
        </div>
      </div>

      {/* 🔍 Search Bar */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="relative group">
          <Search
            className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Filter by title, location or skills..."
            className="w-full pl-16 pr-6 py-5 bg-white border-2 border-slate-50 rounded-[1.8rem] text-sm font-bold focus:border-blue-500 outline-none transition-all shadow-sm focus:shadow-md"
          />
        </div>
      </div>

      {/* 📦 Postings List */}
      <div className="space-y-6 max-w-5xl mx-auto pb-20">
        <AnimatePresence>
          {postings.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`group relative bg-white p-8 border-2 border-slate-50 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all hover:shadow-xl hover:border-blue-100 ${!post.active ? "opacity-60 grayscale-[0.3]" : ""}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Left: Info */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <h3 className="font-black text-xl text-slate-900 uppercase italic tracking-tight">
                      {post.title}
                    </h3>
                    <div
                      className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter ${post.active ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-slate-100 text-slate-400"}`}
                    >
                      {post.location}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-xl bg-slate-50 text-slate-400 text-[9px] font-black uppercase tracking-widest border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:text-blue-600 transition-all"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Statistics & CTA */}
                <div className="flex flex-col md:flex-row items-center gap-10 lg:pl-10 lg:border-l-2 lg:border-slate-50">
                  {/* Applicants Count */}
                  <div className="text-center min-w-[100px]">
                    <div className="text-4xl font-black tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {post.applicants}
                    </div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">
                      Applicants
                    </p>
                  </div>

                  {/* View Talents Button - تم حذف النسبة كما طلبتِ */}
                  <motion.button
                    onClick={() => setSelectedPost(post.id)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-5 px-10 py-5 bg-slate-900 text-white rounded-[1.8rem] shadow-xl hover:bg-blue-600 transition-all duration-300"
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                      View Talents
                    </span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.button>

                  {/* Controls */}
                  <div className="flex items-center gap-1 border-l pl-4 border-slate-50">
                    <button
                      onClick={() => toggleActive(post.id)}
                      className="p-2 text-slate-300 hover:text-emerald-500 transition-colors"
                    >
                      {post.active ? (
                        <ToggleRight size={28} />
                      ) : (
                        <ToggleLeft size={28} />
                      )}
                    </button>
                    <button className="p-2 text-slate-300 hover:text-blue-600 transition-colors">
                      <Pencil size={18} />
                    </button>
                    <button className="p-2 text-slate-300 hover:text-rose-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 🎭 Talents Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={14} className="text-blue-600" />
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                      AI Sorting Active
                    </span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tight">
                    Candidate Pipeline
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-4 hover:bg-slate-100 rounded-2xl transition-all text-slate-400"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 space-y-4 max-h-[50vh] overflow-y-auto">
                {MOCK_TALENTS.map((talent, idx) => (
                  <motion.div
                    key={talent.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 border border-slate-50 rounded-[2.2rem] flex items-center justify-between bg-white hover:border-blue-100 transition-all shadow-sm"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-lg italic shadow-md">
                        {talent.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-black text-slate-900 uppercase text-sm">
                            {talent.name}
                          </h4>
                          <span className="text-[7px] font-black px-2 py-0.5 bg-blue-50 text-blue-600 rounded uppercase tracking-tighter">
                            {talent.status}
                          </span>
                        </div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                          {talent.role} ·{" "}
                          <span className="text-blue-500 italic">
                            {talent.university}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="text-right">
                        <div className="text-lg font-black text-blue-600">
                          {talent.match}%
                        </div>
                        <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest leading-none">
                          Match
                        </p>
                      </div>
                      <button className="p-3.5 bg-slate-50 text-slate-900 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                        <Mail size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  Showing top matches
                </p>
                <button className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] flex items-center gap-2 hover:translate-x-1 transition-transform">
                  View All <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
