"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Clock, Filter, Sparkles } from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechJordan",
    location: "Amman, Jordan (Remote)",
    type: "Internship",
    time: "2 days ago",
    match: 95,
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 2,
    title: "AI Engineer Trainee",
    company: "Elite Excellence Academy",
    location: "Business Park, Amman",
    type: "Full-time",
    time: "5 hours ago",
    match: 88,
    tags: ["Python", "Machine Learning", "FastAPI"],
  },
  {
    id: 3,
    title: "Junior Network Engineer",
    company: "Umniah",
    location: "Amman, Jordan",
    type: "Contract",
    time: "1 week ago",
    match: 72,
    tags: ["Cisco", "Wireshark", "Routing"],
  }
];

export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-8 max-w-6xl mx-auto"> 
      
      {/* 🌟 المكون الجديد: الهيدر الأصفر المضيء فقط */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full p-6 rounded-[1.5rem] bg-white/60 backdrop-blur-md border-2 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.15)] overflow-hidden group mb-10"
      >
        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-amber-400/5 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 italic uppercase leading-none">
            Explore <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent underline decoration-amber-200 decoration-2">Opportunities.</span>
          </h1>
          <div className="md:max-w-lg">
            <p className="text-[11px] font-bold text-slate-500 leading-relaxed border-l-2 border-amber-200 pl-4">
              Discover internships and high-growth roles matched by AI for your 
              <span className="text-slate-900 font-black"> SkillBridge </span> profile.
            </p>
          </div>
        </div>
      </motion.div>

      {/* باقي الكود الأصلي تماماً كما هو بدون أي تغيير في التصميم */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by role, company or skill..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm focus:ring-2 focus:ring-cyan-400 outline-none transition-all font-dm-sans"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="bg-white border border-slate-100 px-6 py-4 rounded-2xl flex items-center gap-2 font-dm-sans font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
          <Filter className="w-5 h-5" /> Filters
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {JOBS.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-cyan-50/50 transition-all group cursor-pointer hover:border-cyan-200/50"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {job.company.charAt(0)}
                </div>
                <div>
                  <h3 className="font-syne font-bold text-xl text-slate-800 group-hover:text-cyan-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-1 text-sm text-slate-500 font-dm-sans">
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.company}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.time}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold">{job.match}% AI Match</span>
                </div>
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-md hover:scale-105 transition-transform">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-50 flex gap-2">
              {job.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-slate-50 text-slate-600 text-xs font-medium font-dm-sans">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}