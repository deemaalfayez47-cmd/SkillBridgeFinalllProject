"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  Filter,
  Sparkles,
  Zap,
  Target,
  Building2,
  Calendar,
  CheckCircle2,
  Ban,
  ChevronRight,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

// --- البيانات المدمجة (Data) ---
const AVAILABLE_JOBS = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechJordan",
    location: "Amman (Remote)",
    match: 96,
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 2,
    title: "AI Engineer Trainee",
    company: "Elite Excellence Academy",
    location: "Business Park, Amman",
    match: 91,
    tags: ["Python", "ML", "FastAPI"],
  },
  {
    id: 3,
    title: "Junior Network Engineer",
    company: "Umniah",
    location: "Amman",
    match: 72,
    tags: ["Cisco", "Wireshark"],
  },
];

const MY_APPLICATIONS = [
  {
    id: 101,
    title: "AI Full-Stack Fellowship",
    company: "Elite Excellence Academy",
    appliedAt: "2026-04-10",
    status: "ACCEPTED",
    matchScore: 98,
    type: "Fellowship",
  },
  {
    id: 102,
    title: "Junior Front-end Engineer",
    company: "Umniah",
    appliedAt: "2026-04-05",
    status: "PENDING",
    matchScore: 94,
    type: "Full-time",
  },
  {
    id: 103,
    title: "Next.js Specialist",
    company: "JoCodes",
    appliedAt: "2026-04-12",
    status: "PENDING",
    matchScore: 91,
    type: "Contract",
  },
  {
    id: 104,
    title: "Network Operations Intern",
    company: "Telecom Jordan",
    appliedAt: "2026-03-25",
    status: "REJECTED",
    matchScore: 82,
    type: "Internship",
  },
];

export default function JobOpportunitiesPage() {
  const [activeTab, setActiveTab] = useState("available"); // available | applied

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "ACCEPTED":
        return {
          label: "ACCEPTED",
          color: "text-emerald-600",
          bg: "bg-emerald-50",
          border: "border-emerald-100",
          dot: "bg-emerald-500",
          icon: <CheckCircle2 size={14} />,
        };
      case "PENDING":
        return {
          label: "REVIEWING",
          color: "text-blue-600",
          bg: "bg-blue-50",
          border: "border-blue-100",
          dot: "bg-blue-500",
          icon: <Clock size={14} className="animate-spin" />,
        };
      case "REJECTED":
        return {
          label: "CLOSED",
          color: "text-rose-600",
          bg: "bg-rose-50",
          border: "border-rose-100",
          dot: "bg-rose-500",
          icon: <Ban size={14} />,
        };
      default:
        return {
          label: status,
          color: "text-gray-500",
          bg: "bg-gray-50",
          border: "border-gray-100",
          dot: "bg-gray-500",
          icon: null,
        };
    }
  };

  return (
    <div
      className="w-full min-h-screen p-8"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* 🌑 Header الموحد */}

        {/* 🎛 التبديل بين الأقسام (Tabs) */}
        <div className="flex p-2 bg-white/50 backdrop-blur-sm rounded-[2rem] border border-white mb-10 shadow-xl shadow-slate-200/50 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("available")}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === "available" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-600"}`}
          >
            <Target size={14} /> Available Matches
          </button>
          <button
            onClick={() => setActiveTab("applied")}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === "applied" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-600"}`}
          >
            <Briefcase size={14} /> My Applications
          </button>
        </div>

        {/* محتوى الصفحة */}
        <AnimatePresence mode="wait">
          {activeTab === "available" ? (
            <motion.div
              key="available"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-6"
            >
              {/* Search Bar for available jobs */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Filter opportunities..."
                    className="w-full pl-14 pr-6 py-5 rounded-[1.5rem] bg-white border-none shadow-xl shadow-slate-200/50 outline-none font-bold text-slate-700"
                  />
                </div>
              </div>

              {AVAILABLE_JOBS.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all group relative overflow-hidden border border-slate-50"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-6 items-center">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-white text-2xl bg-slate-900 group-hover:bg-blue-600 transition-colors shadow-lg">
                        {job.company[0]}
                      </div>
                      <div>
                        <h3 className="font-black text-xl text-slate-900 uppercase italic group-hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-[11px] font-bold text-slate-400 uppercase mt-1 flex items-center gap-2">
                          <MapPin size={12} className="text-blue-500" />{" "}
                          {job.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-xs font-black text-blue-600">
                          {job.match}% AI Match
                        </div>
                        <div className="text-[8px] font-bold text-slate-300 uppercase tracking-[0.2em]">
                          Compatibility
                        </div>
                      </div>
                      <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:scale-105 transition-all">
                        Apply <Zap size={14} fill="currentColor" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="applied"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              {MY_APPLICATIONS.map((app) => {
                const config = getStatusConfig(app.status);
                return (
                  <div
                    key={app.id}
                    className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group relative border border-slate-50"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                      <div className="space-y-4 flex-1">
                        <div className="flex gap-3">
                          <span
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${config.bg} ${config.color} border ${config.border}`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${config.dot}`}
                            />{" "}
                            {config.label}
                          </span>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-4 py-1.5 bg-slate-50 rounded-full border border-slate-100">
                            {app.type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight italic uppercase">
                          {app.title}
                        </h3>
                        <div className="flex gap-6 text-[11px] font-bold text-slate-500 uppercase">
                          <span className="flex items-center gap-2">
                            <Building2 size={14} className="text-blue-500" />{" "}
                            {app.company}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar size={14} className="text-blue-500" />{" "}
                            {app.appliedAt}
                          </span>
                          <span className="text-emerald-600 italic">
                            Score: {app.matchScore}%
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-3 border-t lg:border-t-0 lg:border-l border-slate-50 pt-6 lg:pt-0 lg:pl-10">
                        {app.status === "ACCEPTED" ? (
                          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-black text-[10px] uppercase shadow-xl shadow-blue-200 flex items-center gap-2">
                            View Offer <ArrowUpRight size={16} />
                          </button>
                        ) : (
                          <>
                            <button className="p-4 bg-slate-50 rounded-xl text-slate-400 hover:text-blue-600 transition-colors">
                              <MessageCircle size={18} />
                            </button>
                            <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                              Details <ChevronRight size={16} />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
