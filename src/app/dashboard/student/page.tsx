'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

// البيانات (بدون تغيير)
const jobs = [
  { id:1, company:'G', name:'Google', title:'Frontend Engineer Intern', location:'Mountain View, CA', match:96, matchLevel:'high', tags:['Remote','Internship','React','TypeScript'], salary:'$8,500/mo', gradBorder:'linear-gradient(135deg,#06b6d4,#7c3aed)', logoBg:'linear-gradient(135deg,#0ea5e9,#06b6d4)', btnBg:'linear-gradient(135deg,#06b6d4,#7c3aed)', btnShadow:'rgba(6,182,212,0.35)' },
  { id:2, company:'A', name:'Airbnb', title:'UI/UX Designer', location:'San Francisco, CA', match:91, matchLevel:'high', tags:['Full-time','Figma','Prototyping'], salary:'$120K/yr', gradBorder:'linear-gradient(135deg,#f59e0b,#ef4444)', logoBg:'linear-gradient(135deg,#f59e0b,#ef4444)', btnBg:'linear-gradient(135deg,#f59e0b,#ef4444)', btnShadow:'rgba(245,158,11,0.35)' },
  { id:3, company:'S', name:'Stripe', title:'Full-Stack Developer', location:'Remote · Global', match:78, matchLevel:'mid', tags:['Remote','Node.js','PostgreSQL'], salary:'$145K/yr', gradBorder:'linear-gradient(135deg,#10b981,#3b82f6)', logoBg:'linear-gradient(135deg,#10b981,#3b82f6)', btnBg:'linear-gradient(135deg,#10b981,#3b82f6)', btnShadow:'rgba(16,185,129,0.35)' },
  { id:4, company:'F', name:'Figma', title:'React Native Dev · Freelance', location:'Contract · 3 months', match:65, matchLevel:'low', tags:['Freelance','React Native','Expo'], salary:'$75/hr', gradBorder:'linear-gradient(135deg,#ec4899,#7c3aed)', logoBg:'linear-gradient(135deg,#ec4899,#7c3aed)', btnBg:'linear-gradient(135deg,#ec4899,#7c3aed)', btnShadow:'rgba(236,72,153,0.35)' },
]

const skills = [
  { name:'React / Next.js', pct:92, grad:'linear-gradient(90deg,#06b6d4,#7c3aed)' },
  { name:'UI/UX Design',    pct:85, grad:'linear-gradient(90deg,#7c3aed,#ec4899)' },
  { name:'Node.js / APIs',  pct:74, grad:'linear-gradient(90deg,#10b981,#3b82f6)' },
  { name:'Python / ML',     pct:58, grad:'linear-gradient(90deg,#f59e0b,#ef4444)'  },
  { name:'Mobile (RN)',     pct:45, grad:'linear-gradient(90deg,#ec4899,#7c3aed)' },
]

const stats = [
  { icon:'📨', num:'47',   label:'Applications Sent', delta:'↑ 8 this week',      iconBg:'rgba(6,182,212,0.1)'   },
  { icon:'🤝', num:'12',   label:'Interview Calls',  delta:'↑ 3 new',             iconBg:'rgba(124,58,237,0.1)'  },
  { icon:'📈', num:'89%',  label:'Avg AI Match',     delta:'↑ 4% vs last month', iconBg:'rgba(16,185,129,0.1)'  },
  { icon:'⭐', num:'4.9',  label:'Freelance Rating',  delta:'Top 5% of students', iconBg:'rgba(245,158,11,0.1)'  },
]

const matchPctColor: any = { high:'linear-gradient(135deg,#10b981,#06b6d4)', mid:'linear-gradient(135deg,#f59e0b,#f97316)', low:'linear-gradient(135deg,#ec4899,#7c3aed)' }

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
    <div className="w-full min-h-screen p-8" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #ede9fe 50%, #fae8ff 100%)' }}>
      
      {/* 🚀 New Glowing Yellow Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full p-6 rounded-[1.5rem] bg-white/60 backdrop-blur-md border-2 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.15)] overflow-hidden group mb-10"
      >
        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-amber-400/5 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 italic uppercase leading-none">
            Welcome Back, <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent underline decoration-amber-200 decoration-2">Deema.</span>
          </h1>
          <div className="md:max-w-lg">
            <p className="text-[11px] font-bold text-slate-500 leading-relaxed border-l-2 border-amber-200 pl-4">
              Your <span className="text-slate-900 font-black">SkillBridge</span> dashboard is updated. 
              We found 12 new matches for your CIS profile today [2026-04-15].
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map((s,i)=>(
          <motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.08}}
            className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4" style={{ background: s.iconBg }}>{s.icon}</div>
            <div className="text-3xl font-black text-slate-900">{s.num}</div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{s.label}</div>
            <div className="text-xs font-bold text-emerald-500 mt-2">{s.delta}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Jobs Section */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 italic uppercase tracking-tight">
            <Target className="text-blue-500" /> Top AI Matches
          </h3>
          <div className="flex flex-col gap-5">
            {jobs.map((job,i)=>(
              <motion.div key={job.id} initial={{opacity:0,x:-24}} animate={{opacity:1,x:0}} transition={{delay:0.1+i*0.1}}
                className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-blue-100/20 relative overflow-hidden group hover:scale-[1.01] transition-transform">
                <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: job.gradBorder }} />
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white shadow-lg" style={{ background: job.logoBg }}>{job.company}</div>
                    <div>
                      <div className="font-black text-lg text-slate-900 leading-tight uppercase italic">{job.title}</div>
                      <div className="text-xs text-slate-400 font-bold tracking-wide">{job.name} • {job.location}</div>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full text-[10px] font-black text-white shadow-md" style={{ background: matchPctColor[job.matchLevel] }}>{job.match}% MATCH</div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map(t=><span key={t} className="bg-slate-50 text-slate-400 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border border-slate-100">{t}</span>)}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                  <div className="font-black text-slate-900 text-lg">{job.salary}</div>
                  <button className="px-6 py-3 rounded-xl text-white font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all" style={{ background: job.btnBg }}>Quick Apply</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Sections */}
        <div className="space-y-8">
          {/* Skill Score */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-purple-100/50 text-center">
            <div className="w-24 h-24 rounded-full border-[6px] border-slate-50 border-t-cyan-400 border-r-purple-500 mx-auto mb-4 flex items-center justify-center text-3xl font-black text-slate-900">72</div>
            <div className="font-black text-slate-800 uppercase text-xs tracking-[0.2em]">SkillBridge Score™</div>
          </div>

          {/* Skills List */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-blue-100/30">
            <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em] mb-6">Mastered Skills</h4>
            <div className="space-y-5">
              {skills.map((s,i)=>(
                <div key={i}>
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-widest mb-2">
                    <span className="text-slate-500">{s.name}</span>
                    <span className="text-cyan-500">{s.pct}%</span>
                  </div>
                  <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                    <div ref={el=>barRefs.current[i]=el} className="h-full rounded-full transition-all duration-1000 ease-out" style={{ background: s.grad, width: '0%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

function Target({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  )
}