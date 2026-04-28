'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Target, Zap, LayoutDashboard } from 'lucide-react'

// --- البيانات (Data) ---
const jobs = [
  { id: 1, company: 'G', name: 'Google', title: 'Frontend Engineer Intern', location: 'Mountain View, CA', match: 96, tags: ['Remote', 'Internship', 'React', 'TypeScript'], salary: '$8,500/mo' },
  { id: 2, company: 'A', name: 'Airbnb', title: 'UI/UX Designer', location: 'San Francisco, CA', match: 91, tags: ['Full-time', 'Figma', 'Prototyping'], salary: '$120K/yr' },
  { id: 3, company: 'S', name: 'Stripe', title: 'Full-Stack Developer', location: 'Remote · Global', match: 78, tags: ['Remote', 'Node.js', 'PostgreSQL'], salary: '$145K/yr' },
  { id: 4, company: 'F', name: 'Figma', title: 'React Native Dev · Freelance', location: 'Contract · 3 months', match: 65, tags: ['Freelance', 'React Native', 'Expo'], salary: '$75/hr' },
]

const skills = [
  { name: 'React / Next.js', pct: 92 },
  { name: 'UI/UX Design', pct: 85 },
  { name: 'Node.js / APIs', pct: 74 },
  { name: 'Python / ML', pct: 58 },
  { name: 'Mobile (RN)', pct: 45 },
]

const stats = [
  { icon: '📨', num: '47', label: 'Applications Sent', delta: '↑ 8 this week', iconBg: 'rgba(37,99,235,0.1)' },
  { icon: '🤝', num: '12', label: 'Interview Calls', delta: '↑ 3 new', iconBg: 'rgba(15,23,42,0.05)' },
  { icon: '📈', num: '89%', label: 'Avg AI Match', delta: '↑ 4% vs last month', iconBg: 'rgba(59,130,246,0.1)' },
  { icon: '⭐', num: '4.9', label: 'Freelance Rating', delta: 'Top 5% of students', iconBg: 'rgba(30,41,59,0.05)' },
]

export default function DashboardPage() {
  const barRefs = useRef<any[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      barRefs.current.forEach((el, i) => {
        if (el) { el.style.width = skills[i].pct + '%' }
      })
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full min-h-screen p-8" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)' }}>
      
      {/* 🌑 Soft Glow Minimal Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full p-6 mb-12 overflow-hidden"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_40px_rgba(37,99,235,0.1)] pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between px-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 italic uppercase leading-none">
              Welcome Back, <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">Deema</span>
            </h1>
            <div className="h-1 w-12 bg-blue-600 rounded-full opacity-80" />
          </div>

          
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-white p-7 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-300/20 hover:border-blue-300 transition-colors group">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform" style={{ background: s.iconBg }}>{s.icon}</div>
            <div className="text-4xl font-black text-slate-900 tracking-tighter">{s.num}</div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{s.label}</div>
            <div className="flex items-center gap-1 text-xs font-bold text-blue-600 mt-3">
                <Zap size={12} fill="currentColor" />
                {s.delta}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 🎯 High-Value Matches Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 italic uppercase tracking-tight">
              <Target className="text-blue-600" size={24} strokeWidth={3} /> 
              High-Value Matches
            </h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Updates</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {jobs.map((job, i) => (
              <motion.div 
                key={job.id} 
                className="bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all border border-slate-100 group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex justify-between items-start mb-5">
                  <div className="flex gap-5 items-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-xl bg-slate-900 group-hover:bg-blue-600 transition-colors">
                      {job.company}
                    </div>
                    <div>
                      <div className="font-black text-lg text-slate-900 leading-tight uppercase italic group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </div>
                      <div className="text-[11px] text-slate-400 font-bold tracking-wide mt-1">
                        {job.name} <span className="mx-1 text-slate-300">•</span> {job.location}
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-900 px-4 py-2 rounded-xl flex flex-col items-center">
                    <span className="text-[14px] font-black text-white leading-none">{job.match}%</span>
                    <span className="text-[7px] font-bold text-blue-400 uppercase tracking-tighter mt-1">AI Match</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map(t => (
                    <span key={t} className="text-slate-500 bg-slate-50 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider border border-slate-100 group-hover:bg-blue-50 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-5 border-t border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Compensation</span>
                    <div className="font-black text-slate-900 text-lg tracking-tight">{job.salary}</div>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-600/20">
                    View Details <Zap size={12} fill="currentColor" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Sections */}
        <div className="space-y-8">
          {/* Skill Score */}
          <div className="bg-slate-900 p-10 rounded-[3rem] border border-slate-800 shadow-2xl shadow-blue-900/20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent" />
            <div className="relative z-10">
                <div className="w-24 h-24 rounded-full border-[6px] border-slate-800 border-t-blue-500 border-r-blue-400 mx-auto mb-6 flex items-center justify-center text-3xl font-black text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]">72</div>
                <div className="font-black text-blue-400 uppercase text-xs tracking-[0.3em] mb-2">SkillBridge Score™</div>
                <p className="text-slate-500 text-[9px] font-bold uppercase">Ranked Top 12%</p>
            </div>
          </div>

          {/* 📊 Proficiency Matrix (Updated with Glowing Blue Bars) */}
          <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-300/20">
            <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em] mb-8 flex items-center gap-2">
                <Sparkles size={14} className="text-blue-500" /> Proficiency Matrix
            </h4>
            <div className="space-y-7">
              {skills.map((s, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-widest mb-3">
                    <span className="text-slate-500 group-hover:text-blue-600 transition-colors font-bold">{s.name}</span>
                    <span className="text-slate-900">{s.pct}%</span>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-50 relative">
                    <div 
                      ref={el => barRefs.current[i] = el} 
                      className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(37,99,235,0.3)]" 
                      style={{ 
                        background: 'linear-gradient(90deg, #2563eb, #60a5fa)', 
                        width: '0%' 
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-black text-[9px] uppercase tracking-widest hover:bg-slate-50 hover:border-blue-200 hover:text-blue-500 transition-all">
                + Add Verified Skill
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}