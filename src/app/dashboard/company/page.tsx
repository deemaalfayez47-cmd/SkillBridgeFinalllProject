"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Eye,
  TrendingUp,
  ArrowUpRight,
  Calendar,
  Star,
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
} from "lucide-react";

const STATS = [
  {
    label: "Active Postings",
    value: "8",
    trend: "+2 this week",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-100",
  },
  {
    label: "Total Applicants",
    value: "234",
    trend: "+47 this week",
    icon: Users,
    color: "from-purple-600 to-indigo-400",
    shadow: "shadow-purple-100",
  },
  {
    label: "Profile Views",
    value: "1.2K",
    trend: "+18% vs last month",
    icon: Eye,
    color: "from-amber-400 to-orange-300",
    shadow: "shadow-amber-100",
  },
  {
    label: "Avg Match Score",
    value: "82%",
    trend: "+5% improvement",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-400",
    shadow: "shadow-emerald-100",
  },
];

export default function RecruiterDashboard() {
  return (
    <div className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10 space-y-10 font-sans">
      {/* 🌟 الهيدر الموحد الرشيق ببوردر أصفر مضيء */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full rounded-[3rem] bg-white/90 backdrop-blur-xl border-2 border-amber-400 shadow-[0_20px_50px_rgba(251,191,36,0.12)] overflow-hidden"
      >
        {/* أزرار الأكشن العلوية */}
        <div className="absolute top-6 right-8 z-20 flex gap-3">
          <button className="bg-white p-3 rounded-xl shadow-md border border-slate-100 hover:bg-slate-50 transition-all">
            <Search size={18} className="text-slate-400" />
          </button>
          <button className="bg-white p-3 rounded-xl shadow-md border border-amber-100 hover:scale-110 transition-transform relative group">
            <Bell
              size={18}
              className="text-slate-700 group-hover:text-amber-500"
            />
            <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full border-2 border-white"></span>
          </button>
        </div>

        {/* محتوى بروفايل الشركة */}
        <div className="p-8 flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="relative group">
            <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-tr from-blue-600 via-indigo-500 to-amber-400 p-1 shadow-2xl group-hover:rotate-3 transition-transform duration-500">
              <div className="w-full h-full rounded-[2.35rem] bg-white flex items-center justify-center text-5xl border-4 border-white overflow-hidden shadow-inner">
                <Building2 size={48} className="text-slate-800" />
              </div>
            </div>
            <button className="absolute -bottom-1 -right-1 p-3 bg-slate-900 text-white rounded-xl shadow-xl border-2 border-white hover:bg-amber-500 transition-all hover:scale-110">
              <Camera size={16} />
            </button>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-slate-800 tracking-tight italic uppercase leading-tight">
                Umniah <span className="text-blue-600">Portal</span>
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest bg-blue-600 text-white shadow-lg shadow-blue-100 flex items-center gap-2">
                  <BadgeCheck size={12} /> Verified Enterprise
                </span>
                <span className="px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-2">
                  <Zap size={12} fill="currentColor" /> AI-Powered Hiring
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500 font-bold text-xs">
              <span className="flex items-center gap-2 bg-slate-50/50 px-4 py-2 rounded-xl border border-slate-100">
                <MapPin size={16} className="text-blue-500" /> Amman, Jordan
              </span>
              <span className="flex items-center gap-2 bg-slate-50/50 px-4 py-2 rounded-xl border border-slate-100">
                <Users size={16} className="text-amber-500" /> 1,000+ Employees
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-xl ${stat.shadow} group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
          >
            <div
              className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700`}
            />
            <div
              className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-6 shadow-lg shadow-inherit`}
            >
              <stat.icon size={26} />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black text-slate-800 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">
                {stat.label}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg w-fit italic">
                {stat.trend}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: AI Matches */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3 italic uppercase tracking-tight">
              <Star className="text-amber-400 fill-amber-400" size={24} /> AI
              Recommended Talents
            </h2>
          </div>

          <div className="grid gap-6">
            {[
              {
                name: "Nadia Chen",
                role: "Frontend Developer",
                match: 98,
                color: "blue",
                gradient: "from-blue-50 to-cyan-50",
              },
              {
                name: "Alex Rivera",
                role: "AI Specialist",
                match: 94,
                color: "purple",
                gradient: "from-purple-50 to-indigo-50",
              },
            ].map((app) => (
              <motion.div
                whileHover={{ scale: 1.01 }}
                key={app.name}
                className={`bg-gradient-to-br ${app.gradient} p-8 rounded-[2.5rem] border border-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6 group transition-all`}
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-${app.color}-600 font-black text-3xl shadow-sm group-hover:rotate-6 transition-transform border border-${app.color}-100`}
                  >
                    {app.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-800 text-2xl tracking-tight uppercase italic">
                      {app.name}
                    </h4>
                    <p className="text-sm text-slate-400 font-bold mb-4 uppercase">
                      {app.role}
                    </p>
                    <div className="flex gap-2.5">
                      <button className="p-3 bg-white text-slate-400 rounded-xl hover:text-blue-600 shadow-sm border border-slate-50 transition-colors">
                        <Mail size={18} />
                      </button>
                      <button className="p-3 bg-white text-slate-400 rounded-xl hover:text-blue-600 shadow-sm border border-slate-50 transition-colors">
                        <FileText size={18} />
                      </button>
                      <button className="p-3 bg-white text-slate-400 rounded-xl hover:text-blue-600 shadow-sm border border-slate-50 transition-colors">
                        <MessageSquare size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8 px-8 border-l border-white/50">
                  <div className="text-center">
                    <div
                      className={`text-4xl font-black text-${app.color}-600 tracking-tighter`}
                    >
                      {app.match}%
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Match
                    </p>
                  </div>
                  <button
                    className={`px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs hover:bg-blue-600 shadow-xl transition-all uppercase tracking-widest`}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Postings */}
          <div className="space-y-6 pt-6">
            <h2 className="text-2xl font-black text-slate-800 px-2 italic uppercase tracking-tight">
              Active Postings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "React Intern",
                  applicants: 45,
                  status: "Active",
                  color: "from-emerald-400 to-teal-300",
                  glow: "emerald",
                },
                {
                  title: "AI Research Task",
                  applicants: 12,
                  status: "Reviewing",
                  color: "from-amber-400 to-orange-300",
                  glow: "amber",
                },
              ].map((job) => (
                <div
                  key={job.title}
                  className={`bg-gradient-to-br ${job.color} p-7 rounded-[2.5rem] text-white shadow-2xl group relative overflow-hidden hover:-translate-y-1 transition-transform`}
                >
                  <Zap
                    className={`absolute -right-6 -bottom-6 w-32 h-32 opacity-10 text-white group-hover:scale-125 transition-transform duration-700`}
                  />
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <h4 className="font-black text-white text-xl tracking-tight uppercase italic">
                      {job.title}
                    </h4>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-[10px] font-black uppercase tracking-tighter border border-white/10">
                      {job.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-end relative z-10">
                    <div>
                      <p className="text-4xl font-black text-white tracking-tighter">
                        {job.applicants}
                      </p>
                      <p className="text-[10px] font-bold text-white/70 uppercase">
                        Applicants
                      </p>
                    </div>
                    <button className="p-3 bg-white/10 rounded-2xl text-white hover:bg-white/20">
                      <MoreHorizontal size={22} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#5c5cfc] rounded-[3rem] p-10 text-white shadow-2xl shadow-blue-200 relative overflow-hidden group">
            <div className="relative z-10">
              <Calendar className="mb-6 opacity-80" size={32} />
              <h3 className="text-2xl font-black mb-2 italic uppercase tracking-tight">
                Hiring Schedule
              </h3>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-pointer">
                  <p className="text-[10px] font-bold opacity-60 uppercase mb-1 tracking-widest">
                    Today • 10:00 AM
                  </p>
                  <p className="font-bold">Interview: Nadia Chen</p>
                </div>
                <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-pointer">
                  <p className="text-[10px] font-bold opacity-60 uppercase mb-1 tracking-widest">
                    Tomorrow • 11:30 AM
                  </p>
                  <p className="font-bold">Review: AI Task #12</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
          </div>

          <div className="bg-white p-8 rounded-[3rem] border border-slate-50 shadow-sm space-y-6">
            <h3 className="font-black text-slate-800 text-lg flex items-center gap-2 italic uppercase tracking-tight">
              <TrendingUp size={20} className="text-blue-500" /> Pipeline
            </h3>
            <div className="space-y-4">
              {[
                { stage: "Applied", count: 120, color: "bg-blue-400" },
                { stage: "AI Matched", count: 45, color: "bg-purple-400" },
                { stage: "Interview", count: 12, color: "bg-amber-400" },
                { stage: "Hired", count: 4, color: "bg-emerald-400" },
              ].map((item) => (
                <div key={item.stage} className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                    <span>{item.stage}</span>
                    <span className="text-slate-700">{item.count}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.count / 120) * 100}%` }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
