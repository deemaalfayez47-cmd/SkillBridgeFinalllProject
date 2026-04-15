"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  FileText,
  MessageCircle,
  ArrowUpRight,
  Ban,
  Sparkles,
  Briefcase,
  ChevronRight,
  Layout,
  Cpu,
  CheckCircle2,
  Target,
  GraduationCap,
  Clock,
} from "lucide-react";

// بيانات مرتبة تعكس مسارك المهني واهتماماتك
const applications = [
  {
    id: 1,
    taskId: 101,
    title: "AI Full-Stack Fellowship",
    company: "Elite Excellence Academy",
    appliedAt: "2026-04-10",
    status: "ACCEPTED",
    matchScore: 98,
    type: "Fellowship",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    taskId: 102,
    title: "Junior Front-end Engineer",
    company: "Umniah",
    appliedAt: "2026-04-05",
    status: "PENDING",
    matchScore: 94,
    type: "Full-time",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    taskId: 103,
    title: "Next.js Specialist",
    company: "JoCodes (Global Chapter)",
    appliedAt: "2026-04-12",
    status: "PENDING",
    matchScore: 91,
    type: "Contract",
    color: "from-amber-400 to-orange-400",
  },
  {
    id: 4,
    taskId: 104,
    title: "Network Operations Intern",
    company: "Telecom Jordan",
    appliedAt: "2026-03-25",
    status: "REJECTED",
    matchScore: 82,
    type: "Internship",
    color: "from-rose-500 to-red-400",
  },
];

export default function ApplicationsPage() {
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
    <div className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-slate-50 via-blue-50/20 to-amber-50/20 space-y-12selection:bg-cyan-500/30">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Simplified Full-Width Glowing Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full p-6 rounded-[1.5rem] bg-white/60 backdrop-blur-md border-2 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.15)] overflow-hidden group mb-10"
        >
          {/* Subtle Internal Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-amber-400/5 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
            {/* Direct Heading */}
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 italic uppercase leading-none">
              Track Your{" "}
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent underline decoration-amber-200 decoration-2">
                Growth.
              </span>
            </h1>

            {/* Description Section */}
            <div className="md:max-w-lg">
              <p className="text-[11px] font-bold text-slate-500 leading-relaxed border-l-2 border-amber-200 pl-4">
                Your{" "}
                <span className="text-slate-900 font-black">SkillBridge</span>{" "}
                profile is now optimized with real-time AI intelligence. Monitor
                every step of your professional evolution here.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Summary Section (لضمان أن الصفحة ليست فارغة) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              label: "Active Postings",
              val: applications
                .filter((a) => a.status === "PENDING")
                .length.toString(),
              color: "from-blue-500 to-cyan-400",
            },
            {
              label: "Successful Interviews",
              val: applications
                .filter((a) => a.status === "ACCEPTED")
                .length.toString(),
              color: "from-purple-500 to-pink-500",
            },
            {
              label: "Total Applications",
              val: applications.length.toString(),
              color: "from-emerald-500 to-teal-400",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-xl flex items-center justify-between group"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {stat.label}
                </p>
                <p
                  className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mt-2`}
                >
                  {stat.val}
                </p>
              </div>
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
              >
                <Target className="text-white" size={24} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Applications List */}
        <div className="space-y-6">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 ml-6 mb-10">
            Application Log
          </h2>
          {applications.map((app, index) => {
            const config = getStatusConfig(app.status);

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="group relative bg-white rounded-[3rem] p-10 shadow-xl border border-white hover:border-blue-100 transition-all duration-500 overflow-hidden shadow-2xl shadow-blue-100/30"
              >
                {/* Decorative Gradient Background */}
                <div
                  className={`absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[80px] opacity-10 transition-opacity duration-700 bg-gradient-to-r ${app.color}`}
                />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 relative z-10">
                  {/* Left: Info */}
                  <div className="space-y-6 flex-1">
                    <div className="flex flex-wrap items-center gap-4">
                      <div
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${config.bg} ${config.color} border ${config.border}`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${config.dot}`}
                        />{" "}
                        {config.label}
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
                        {app.type}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-3xl font-black text-slate-800 tracking-tight italic uppercase border-l-4 border-blue-400 pl-5 leading-tight">
                        {app.title}
                      </h3>
                      <div className="flex items-center gap-2.5 text-slate-500 font-bold text-sm pl-6">
                        <Building2 size={16} className="text-blue-500" />
                        {app.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-10 pt-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
                          <Calendar size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase">
                            Applied Date
                          </p>
                          <p className="text-xs font-bold text-slate-600 tracking-wider">
                            {app.appliedAt}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 shadow-inner">
                          <Sparkles size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-amber-600 uppercase italic">
                            AI Optimized Score
                          </p>
                          <p className="text-xs font-black text-emerald-600">
                            {app.matchScore}% Relevance
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-5 lg:pl-10 lg:border-l border-slate-100">
                    {app.status === "ACCEPTED" ? (
                      <button className="flex-1 lg:flex-none px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-blue-100 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                        View Offer <ArrowUpRight size={18} />
                      </button>
                    ) : (
                      <div className="flex gap-4 w-full lg:w-auto">
                        <button className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                          <MessageCircle size={20} />
                        </button>
                        <button className="flex-1 lg:flex-none px-8 py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3">
                          Status Details <ChevronRight size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
