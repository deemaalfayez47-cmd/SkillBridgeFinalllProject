"use client";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Target, ExternalLink, Zap } from "lucide-react";

const SKILL_GAPS = [
  {
    skill: "System Design",
    current: 35,
    target: 80,
    priority: "High",
    resources: [
      { title: "System Design Primer", type: "Course", url: "#" },
      {
        title: "Designing Data-Intensive Applications",
        type: "Book",
        url: "#",
      },
    ],
  },
  {
    skill: "Docker & Kubernetes",
    current: 20,
    target: 70,
    priority: "High",
    resources: [
      { title: "Docker Mastery", type: "Course", url: "#" },
      { title: "K8s the Hard Way", type: "Tutorial", url: "#" },
    ],
  },
  {
    skill: "GraphQL",
    current: 45,
    target: 75,
    priority: "Medium",
    resources: [{ title: "Full-Stack GraphQL", type: "Course", url: "#" }],
  },
  {
    skill: "CI/CD Pipelines",
    current: 30,
    target: 65,
    priority: "Medium",
    resources: [{ title: "GitHub Actions Mastery", type: "Course", url: "#" }],
  },
  {
    skill: "Data Structures & Algorithms",
    current: 60,
    target: 90,
    priority: "Low",
    resources: [
      { title: "LeetCode Patterns", type: "Practice", url: "#" },
      { title: "Neetcode 150", type: "Practice", url: "#" },
    ],
  },
];

const PRIORITY_COLORS: Record<string, string> = {
  High: "bg-red-100 text-red-700 border-red-200",
  Medium: "bg-amber-100 text-amber-700 border-amber-200",
  Low: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

export default function SkillGapGuidance() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      
      {/* 🌟 الهيدر الأصفر المضيء المعتمد */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full p-6 rounded-[1.5rem] bg-white/60 backdrop-blur-md border-2 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.15)] overflow-hidden group mb-10"
      >
        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-amber-400/5 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 italic uppercase leading-none">
            Skill Gap <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent underline decoration-amber-200 decoration-2">Guidance.</span>
          </h1>
          <div className="md:max-w-lg">
            <p className="text-[11px] font-bold text-slate-500 leading-relaxed border-l-2 border-amber-200 pl-4">
              Your AI-powered roadmap to career readiness. Bridge the gap between your 
              <span className="text-slate-900 font-black"> CIS degree </span> and industry demands.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Overview Stats (تصميمك الأصلي) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: Target,
            label: "Skills to Improve",
            value: "5",
            color: "text-red-500",
            bg: "bg-red-50",
            desc: "Critical skills identified for your target roles.",
          },
          {
            icon: TrendingUp,
            label: "Avg Gap",
            value: "38%",
            color: "text-amber-500",
            bg: "bg-amber-50",
            desc: "Average distance to reach industry proficiency.",
          },
          {
            icon: Zap,
            label: "Estimated Time",
            value: "12 weeks",
            color: "text-emerald-500",
            bg: "bg-emerald-50",
            desc: "Time required to complete the suggested roadmap.",
          },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div
              className={`${stat.bg} p-3 rounded-2xl group-hover:scale-110 transition-transform`}
            >
              <stat.icon className={`w-8 h-8 ${stat.color} shrink-0`} />
            </div>
            <div>
              <p className="font-syne font-extrabold text-2xl leading-none mb-1 text-slate-800">
                {stat.value}
              </p>
              <p className="font-dm-sans text-sm font-bold text-slate-700">
                {stat.label}
              </p>
              <p className="font-dm-sans text-[10px] text-slate-400 leading-tight mt-1 max-w-[160px]">
                {stat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Gap List (تصميمك الأصلي) */}
      <div className="space-y-6">
        {SKILL_GAPS.map((gap, i) => (
          <motion.div
            key={gap.skill}
            className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side: Progress */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="font-syne font-bold text-xl text-slate-800">
                    {gap.skill}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${PRIORITY_COLORS[gap.priority]}`}
                  >
                    {gap.priority} Priority
                  </span>
                </div>

                <div className="flex justify-between items-end mb-3 font-dm-sans text-xs font-medium text-slate-500">
                  <span>Current: {gap.current}%</span>
                  <span>Target: {gap.target}%</span>
                </div>

                <div className="w-full h-4 bg-slate-50 rounded-full overflow-hidden relative border border-slate-100 p-0.5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(37,99,235,0.2)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${gap.current}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <div
                    className="absolute top-0 h-full w-0.5 bg-slate-300"
                    style={{ left: `${gap.target}%` }}
                  />
                </div>
                <p className="font-dm-sans text-[10px] text-slate-400 mt-3 italic">
                  Complete the resources to bridge the remaining{" "}
                  {gap.target - gap.current}% gap.
                </p>
              </div>

              {/* Right Side: Resources */}
              <div className="lg:w-80 space-y-3">
                <p className="font-dm-sans text-xs font-bold text-slate-400 flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-blue-500" /> RECOMMENDED
                  LEARNING
                </p>
                {gap.resources.map((res) => {
                  const typeStyles: Record<string, string> = {
                    Course:
                      "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100",
                    Book: "bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100",
                    Tutorial:
                      "bg-cyan-50 text-cyan-700 border-cyan-100 hover:bg-cyan-100",
                    Practice:
                      "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100",
                  };
                  const style =
                    typeStyles[res.type] ||
                    "bg-slate-50 text-slate-600 border-slate-200";

                  return (
                    <a
                      key={res.title}
                      href={res.url}
                      className={`flex items-center justify-between p-3 rounded-2xl border transition-all group/link shadow-sm ${style}`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-dm-sans text-xs font-bold truncate">
                          {res.title}
                        </p>
                        <p className="font-dm-sans text-[10px] opacity-70 uppercase font-bold">
                          {res.type}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 shrink-0 opacity-40 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}