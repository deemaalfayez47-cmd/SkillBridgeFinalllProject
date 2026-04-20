"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Eye,
  TrendingUp,
  Search,
  Bell,
  Mail,
  FileText,
  MessageSquare,
  MoreHorizontal,
  Zap,
  Building2,
  MapPin,
  BadgeCheck,
  Camera,
  Calendar,
  Sparkles,
} from "lucide-react";

const STATS = [
  {
    label: "Postings",
    value: "8",
    trend: "+2",
    icon: Briefcase,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Applicants",
    value: "234",
    trend: "+47",
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    label: "Views",
    value: "1.2K",
    trend: "+18%",
    icon: Eye,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    label: "Match",
    value: "82%",
    trend: "+5%",
    icon: TrendingUp,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

export default function RecruiterDashboard() {
  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F8FAFC] text-slate-800 font-sans">
      {/* 🌫️ خلفية هادئة جداً */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* 👑 الهيدر المريح - مسافات أكبر وتفاصيل أقل */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/60 backdrop-blur-md p-6 rounded-[2.5rem] border border-white shadow-sm"
        >
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg">
                <Building2 size={28} className="text-white" />
              </div>
              <button className="absolute -bottom-1 -right-1 p-1.5 bg-amber-400 text-white rounded-lg border-2 border-white shadow-sm">
                <Camera size={10} />
              </button>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-black tracking-tight text-slate-900 uppercase italic">
                  Umniah Company <span className="text-blue-600 italic"></span>
                </h1>
                <BadgeCheck size={16} className="text-blue-500" />
              </div>
              <div className="flex gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} /> Amman
                </span>
                <span className="flex items-center gap-1.5 text-amber-500">
                  <Sparkles size={12} /> AI Recruiter
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search candidates..."
                className="bg-slate-100/50 border-none rounded-2xl py-3 px-5 pl-10 text-[10px] font-bold w-48 focus:w-64 transition-all outline-none"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={14}
              />
            </div>
            <button className="p-3 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-all relative">
              <Bell size={18} className="text-slate-400" />
              <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white"></span>
            </button>
          </div>
        </motion.div>

        {/* 📊 الإحصائيات بمسافات واسعة */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-[2rem] border border-slate-100/50 shadow-sm hover:shadow-md transition-all group"
            >
              <div
                className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <stat.icon size={18} />
              </div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-[8px] font-black text-emerald-500 tracking-tighter italic">
                  {stat.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* 🎯 المحتوى الرئيسي */}
          <div className="lg:col-span-8 space-y-10">
            <section className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">
                  AI Recommendations
                </h2>
                <button className="text-[10px] font-black text-blue-600 hover:underline tracking-widest uppercase">
                  View All
                </button>
              </div>

              <div className="grid gap-4">
                {[
                  { name: "Nadia Chen", role: "Frontend Dev", match: 98 },
                  { name: "Alex Rivera", role: "AI Specialist", match: 94 },
                ].map((app) => (
                  <motion.div
                    key={app.name}
                    whileHover={{ scale: 1.01 }}
                    className="bg-white p-5 rounded-3xl border border-slate-50 shadow-sm flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-black text-slate-400 border border-slate-100">
                        {app.name[0]}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-800 text-xs uppercase tracking-tight italic">
                          {app.name}
                        </h4>
                        <p className="text-[9px] text-slate-400 font-bold uppercase">
                          {app.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <span className="text-xl font-black text-blue-600 block">
                          {app.match}%
                        </span>
                        <span className="text-[7px] font-black text-slate-300 uppercase">
                          Match Score
                        </span>
                      </div>
                      <button className="p-3 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-all">
                        <FileText size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Active Postings بصور أبسط */}
            <section className="space-y-6">
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] px-2">
                Active Jobs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "React Intern",
                    applicants: 45,
                    status: "Active",
                    bg: "bg-blue-600",
                  },
                  {
                    title: "AI Research",
                    applicants: 12,
                    status: "Reviewing",
                    bg: "bg-slate-900",
                  },
                ].map((job) => (
                  <div
                    key={job.title}
                    className={`${job.bg} p-8 rounded-[2.5rem] text-white shadow-xl group cursor-pointer relative overflow-hidden`}
                  >
                    <div className="relative z-10 space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="px-2 py-0.5 bg-white/10 rounded-full text-[7px] font-black uppercase tracking-widest">
                          {job.status}
                        </span>
                        <Zap size={16} className="text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black uppercase italic tracking-tighter mb-1">
                          {job.title}
                        </h4>
                        <p className="text-4xl font-black tracking-tighter">
                          {job.applicants}{" "}
                          <span className="text-[10px] font-medium opacity-50 uppercase tracking-widest">
                            Candidates
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 📅 الجانب الأيمن */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-600" size={20} />
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Schedule
                </h3>
              </div>
              <div className="space-y-4 text-[10px] font-bold">
                <div className="p-4 rounded-2xl bg-slate-50 border-l-4 border-blue-600 space-y-1">
                  <p className="text-blue-600">10:00 AM • Today</p>
                  <p className="text-slate-800 uppercase italic font-black">
                    Nadia Chen Interview
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border-l-4 border-amber-400 space-y-1">
                  <p className="text-amber-600">02:00 PM • Tomorrow</p>
                  <p className="text-slate-800 uppercase italic font-black">
                    AI Pipeline Review
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-500" /> Pipeline
              </h3>
              <div className="space-y-5">
                {[
                  { stage: "Applied", count: 120, color: "bg-blue-500" },
                  { stage: "Matched", count: 45, color: "bg-amber-400" },
                  { stage: "Hired", count: 12, color: "bg-slate-900" },
                ].map((item) => (
                  <div key={item.stage} className="space-y-2">
                    <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-slate-400">
                      <span>{item.stage}</span>
                      <span className="text-slate-900">{item.count}</span>
                    </div>
                    <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(item.count / 120) * 100}%` }}
                        className={`h-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
