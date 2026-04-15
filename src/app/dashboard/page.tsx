"use client";
import { motion } from "framer-motion";
import { Briefcase, Users, Eye, TrendingUp, Plus } from "lucide-react";
import SkillBridgeLayout from "@/components/SkillBridgeLayout";

const RECRUITER_STATS = [
  { 
    label: "Active Postings", 
    value: "8", 
    subValue: "+2 this week", 
    icon: Briefcase, 
    color: "text-blue-600",
    desc: "Total internship roles currently open for applications."
  },
  { 
    label: "Total Applicants", 
    value: "234", 
    subValue: "+47 this week", 
    icon: Users, 
    color: "text-purple-600",
    desc: "Total students who applied across all your active posts."
  },
  { 
    label: "Profile Views", 
    value: "1.2K", 
    subValue: "+18% vs last month", 
    icon: Eye, 
    color: "text-cyan-600",
    desc: "Number of times students viewed your company profile."
  },
  { 
    label: "Avg Match Score", 
    value: "82%", 
    subValue: "+5% improvement", 
    icon: TrendingUp, 
    color: "text-emerald-600",
    desc: "Average AI compatibility score of your current applicants."
  },
];

export default function RecruiterDashboard() {
  return (
    <SkillBridgeLayout>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="font-syne font-extrabold text-4xl sb-gradient-text leading-tight">Recruiter Dashboard</h1>
          <p className="text-slate-500 font-dm-sans mt-1">Overview of your hiring pipeline</p>
        </div>
        <button className="sb-btn-gradient px-6 py-3 rounded-2xl flex items-center gap-2 font-bold shadow-lg hover:scale-105 transition-transform text-sm">
          <Plus className="w-5 h-5" /> Post Internship
        </button>
      </div>

      {/* Recruiter Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {RECRUITER_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="sb-glass p-8 group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                <p className="text-4xl font-extrabold text-slate-800 font-syne tracking-tight">{stat.value}</p>
                <p className="text-sm font-bold text-slate-700 mt-1 uppercase tracking-tight">{stat.label}</p>
                <p className={`text-xs font-bold mt-1 ${stat.color.replace('text-', 'text-opacity-80 ')}`}>
                  {stat.subValue}
                </p>
                {/* التعريف الصغير تحت الإحصائيات */}
                <p className="font-dm-sans text-[10px] text-slate-400 leading-tight mt-3 max-w-[200px]">
                  {stat.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Applicants Preview */}
      <div className="sb-glass p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-syne font-bold text-2xl text-slate-800">Recent Applicants</h2>
          <button className="text-blue-600 font-bold text-sm hover:underline">View All →</button>
        </div>
        <div className="text-center py-10 border-2 border-dashed border-slate-100 rounded-3xl">
          <Users className="w-12 h-12 text-slate-200 mx-auto mb-3" />
          <p className="text-slate-400 font-dm-sans">Student matching data will appear here.</p>
        </div>
      </div>
    </SkillBridgeLayout>
  );
}