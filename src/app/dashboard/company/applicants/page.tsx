"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Search,
  Star,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Filter,
  Mail,
  Download,
  GraduationCap,
  Briefcase,
  Building2,
  ChevronRight,
} from "lucide-react";

type Status = "all" | "new" | "reviewed" | "shortlisted" | "rejected";

const APPLICANTS = [
  {
    id: 1,
    name: "Nadia Chen",
    avatar: "N",
    role: "Frontend Engineer Intern",
    university: "Stanford",
    match: 98,
    status: "shortlisted" as const,
    skills: ["React", "TypeScript", "Next.js"],
    experience: "1.5 years",
    color: "from-blue-500 to-cyan-400",
    shadowColor: "rgba(37, 99, 235, 0.4)",
  },
  {
    id: 2,
    name: "Alex Rivera",
    avatar: "A",
    role: "UI/UX Designer",
    university: "MIT",
    match: 94,
    status: "new" as const,
    skills: ["Figma", "Prototyping", "Tailwind"],
    experience: "2 years",
    color: "from-purple-500 to-indigo-400",
    shadowColor: "rgba(147, 51, 234, 0.4)",
  },
  {
    id: 3,
    name: "Jordan Lee",
    avatar: "J",
    role: "Full-Stack Developer",
    university: "UC Berkeley",
    match: 84,
    status: "reviewed" as const,
    skills: ["Node.js", "PostgreSQL"],
    experience: "1 year",
    color: "from-amber-400 to-orange-400",
    shadowColor: "rgba(217, 119, 6, 0.4)",
  },
  {
    id: 4,
    name: "Liam O'Connor",
    avatar: "L",
    role: "Frontend Intern",
    university: "Harvard",
    match: 88,
    status: "shortlisted" as const,
    skills: ["React", "Redux"],
    experience: "2 years",
    color: "from-emerald-500 to-teal-400",
    shadowColor: "rgba(16, 185, 129, 0.4)",
  },
];

const STATUS_CONFIG: Record<
  string,
  { label: string; bg: string; text: string }
> = {
  all: { label: "All", bg: "bg-slate-100", text: "text-slate-600" },
  new: { label: "New", bg: "bg-blue-50", text: "text-blue-600" },
  reviewed: { label: "Reviewed", bg: "bg-amber-50", text: "text-amber-600" },
  shortlisted: {
    label: "Shortlisted",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  rejected: { label: "Rejected", bg: "bg-rose-50", text: "text-rose-600" },
};

export default function ApplicantManagement() {
  const [filter, setFilter] = useState<Status>("all");
  const [search, setSearch] = useState("");

  const filtered = APPLICANTS.filter((a) => {
    const matchFilter = filter === "all" || a.status === filter;
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.role.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  // إعدادات البطاقات العلوية مع شادو قوي
  const stats = [
    {
      label: "Total Talent",
      value: APPLICANTS.length,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
      shadow: "0 25px 50px -12px rgba(37,99,235,0.35)",
    },
    {
      label: "New Intake",
      value: APPLICANTS.filter((a) => a.status === "new").length,
      icon: Star,
      color: "text-purple-600",
      bg: "bg-purple-50",
      shadow: "0 25px 50px -12px rgba(147,51,234,0.35)",
    },
    {
      label: "Shortlisted",
      value: APPLICANTS.filter((a) => a.status === "shortlisted").length,
      icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      shadow: "0 25px 50px -12px rgba(16,185,129,0.35)",
    },
    {
      label: "Avg Match",
      value: "86%",
      icon: Sparkles,
      color: "text-amber-600",
      bg: "bg-amber-50",
      shadow: "0 25px 50px -12px rgba(217,119,6,0.35)",
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-12 bg-[#F8FAFC] space-y-12 font-sans">
      {/* 🌟 الهيدر الموحد */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full rounded-[3rem] bg-white border-[3px] border-amber-400 shadow-[0_30px_60px_-15px_rgba(251,191,36,0.2)] overflow-hidden"
      >
        <div className="p-10 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-[2.2rem] bg-gradient-to-tr from-blue-600 via-purple-500 to-amber-400 p-1.5 shadow-2xl">
              <div className="w-full h-full rounded-[1.8rem] bg-white flex items-center justify-center border-4 border-white overflow-hidden text-slate-800">
                <Building2 size={36} />
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2"></div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
                Applicant <span className="text-blue-600">Pipeline</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors"
                size={18}
              />
              <input
                className="pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none w-full sm:w-72 focus:bg-white focus:border-blue-400 transition-all font-bold text-sm"
                placeholder="Search talent..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 📊 البطاقات مع شادو ملون فائق الوضوح */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            style={{ boxShadow: stat.shadow }}
            className="bg-white p-7 rounded-[2.5rem] border border-white flex items-center gap-5 group transition-all"
          >
            <div
              className={`w-16 h-16 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color} shadow-inner group-hover:scale-110 transition-transform`}
            >
              <stat.icon size={28} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center md:justify-start">
        <div className="flex flex-wrap gap-2 bg-white p-2 rounded-[2rem] border-2 border-slate-100 shadow-sm">
          {["all", "new", "reviewed", "shortlisted", "rejected"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as Status)}
              className={`px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${filter === tab ? "bg-slate-900 text-white shadow-xl" : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Applicant List */}
      <div className="grid gap-6 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((applicant) => (
            <motion.div
              layout
              key={applicant.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-8 rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border-2 border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group hover:border-blue-400 transition-all"
            >
              <div className="flex items-center gap-8 relative z-10">
                <div
                  className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${applicant.color} flex items-center justify-center text-white font-black text-3xl shadow-xl group-hover:rotate-6 transition-transform`}
                  style={{
                    boxShadow: `0 15px 30px -5px ${applicant.shadowColor}`,
                  }}
                >
                  {applicant.avatar}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight italic uppercase">
                      {applicant.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-xl text-[9px] font-black uppercase tracking-widest ${STATUS_CONFIG[applicant.status].bg} ${STATUS_CONFIG[applicant.status].text} border border-current`}
                    >
                      {STATUS_CONFIG[applicant.status].label}
                    </span>
                  </div>
                  <p className="text-blue-600 font-black text-xs flex items-center gap-2 uppercase tracking-wide">
                    <Briefcase size={14} /> {applicant.role}
                  </p>
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap size={16} className="text-amber-500" />{" "}
                      {applicant.university}
                    </span>
                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                    <span>{applicant.experience} Exp.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-10 lg:pl-10 lg:border-l-4 border-slate-50 relative z-10">
                <div className="text-center">
                  <div
                    className={`text-5xl font-black tracking-tighter flex items-center gap-2 justify-center ${applicant.match >= 90 ? "text-emerald-500" : "text-amber-500"}`}
                  >
                    <Sparkles size={24} className="animate-pulse" />{" "}
                    {applicant.match}%
                  </div>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mt-1 italic">
                    AI Match
                  </p>
                </div>

                <div className="flex flex-col gap-3 min-w-[180px]">
                  <div className="flex gap-2">
                    <button className="flex-1 p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all border-2 border-slate-100 shadow-sm">
                      <Mail size={18} />
                    </button>
                    <button className="flex-1 p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-amber-50 hover:text-amber-600 transition-all border-2 border-slate-100 shadow-sm">
                      <Download size={18} />
                    </button>
                    <button className="flex-1 p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-emerald-50 hover:text-emerald-600 transition-all border-2 border-slate-100 shadow-sm">
                      <MessageSquare size={18} />
                    </button>
                  </div>
                  <button className="w-full py-4 bg-slate-900 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-lg flex items-center justify-center gap-2 group">
                    Full Review{" "}
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
