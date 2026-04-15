"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Clock, CheckCircle2, XCircle, MessageSquare, Calendar, ChevronRight, Filter } from "lucide-react";
import SkillBridgeLayout from "@/components/SkillBridgeLayout";

type AppStatus = "all" | "applied" | "interview" | "offer" | "rejected";

const APPLICATIONS = [
  { id: 1, company: "Google", letter: "G", title: "Frontend Engineer Intern", status: "interview" as const, appliedDate: "Apr 2, 2026", nextStep: "Technical Interview · Apr 18", match: 96, gradFrom: "from-cyan-400", gradTo: "to-blue-500", timeline: [
    { date: "Apr 2", label: "Applied", done: true },
    { date: "Apr 5", label: "Reviewed", done: true },
    { date: "Apr 10", label: "Phone Screen", done: true },
    { date: "Apr 18", label: "Tech Interview", done: false },
  ]},
  { id: 2, company: "Airbnb", letter: "A", title: "UI/UX Designer", status: "offer" as const, appliedDate: "Mar 20, 2026", nextStep: "Offer expires Apr 20", match: 91, gradFrom: "from-amber-400", gradTo: "to-red-500", timeline: [
    { date: "Mar 20", label: "Applied", done: true },
    { date: "Mar 25", label: "Portfolio Review", done: true },
    { date: "Apr 1", label: "Final Interview", done: true },
    { date: "Apr 8", label: "Offer Received", done: true },
  ]},
  { id: 3, company: "Stripe", letter: "S", title: "Full-Stack Developer", status: "applied" as const, appliedDate: "Apr 10, 2026", nextStep: "Awaiting review", match: 78, gradFrom: "from-emerald-400", gradTo: "to-blue-500", timeline: [
    { date: "Apr 10", label: "Applied", done: true },
    { date: "—", label: "Review", done: false },
  ]},
  { id: 4, company: "Meta", letter: "M", title: "ML Research Intern", status: "rejected" as const, appliedDate: "Mar 15, 2026", nextStep: "Closed", match: 72, gradFrom: "from-blue-400", gradTo: "to-indigo-500", timeline: [
    { date: "Mar 15", label: "Applied", done: true },
    { date: "Mar 22", label: "Reviewed", done: true },
    { date: "Mar 28", label: "Rejected", done: true },
  ]},
  { id: 5, company: "Spotify", letter: "S", title: "Backend Engineer", status: "interview" as const, appliedDate: "Apr 5, 2026", nextStep: "System Design · Apr 16", match: 84, gradFrom: "from-green-400", gradTo: "to-emerald-500", timeline: [
    { date: "Apr 5", label: "Applied", done: true },
    { date: "Apr 8", label: "Reviewed", done: true },
    { date: "Apr 16", label: "System Design", done: false },
  ]},
];

const STATUS_CONFIG: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  applied: { label: "Applied", color: "bg-blue-100 text-blue-700", icon: Clock },
  interview: { label: "Interview", color: "bg-amber-100 text-amber-700", icon: MessageSquare },
  offer: { label: "Offer", color: "bg-emerald-100 text-emerald-700", icon: CheckCircle2 },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-600", icon: XCircle },
};

const TABS: { key: AppStatus; label: string }[] = [
  { key: "all", label: "All" },
  { key: "applied", label: "Applied" },
  { key: "interview", label: "Interview" },
  { key: "offer", label: "Offers" },
  { key: "rejected", label: "Rejected" },
];

export default function Applications() {
  const [filter, setFilter] = useState<AppStatus>("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = filter === "all" ? APPLICATIONS : APPLICATIONS.filter(a => a.status === filter);

  const counts = {
    all: APPLICATIONS.length,
    applied: APPLICATIONS.filter(a => a.status === "applied").length,
    interview: APPLICATIONS.filter(a => a.status === "interview").length,
    offer: APPLICATIONS.filter(a => a.status === "offer").length,
    rejected: APPLICATIONS.filter(a => a.status === "rejected").length,
  };

  return (
    <SkillBridgeLayout>
      <div className="mb-8">
        <h1 className="font-syne font-extrabold text-3xl sb-gradient-text">Applications</h1>
        <p className="font-dm-sans text-muted-foreground mt-1">Track the status of your job applications</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Applied", value: APPLICATIONS.length, icon: "📨" },
          { label: "Interviews", value: counts.interview, icon: "🤝" },
          { label: "Offers", value: counts.offer, icon: "🎉" },
          { label: "Response Rate", value: "80%", icon: "📈" },
        ].map((stat, i) => (
          <motion.div key={stat.label} className="sb-glass p-5 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <span className="text-2xl">{stat.icon}</span>
            <p className="font-syne font-extrabold text-2xl mt-2">{stat.value}</p>
            <p className="font-dm-sans text-xs text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 rounded-xl font-dm-sans text-sm font-medium transition-all ${
              filter === tab.key ? "sb-btn-gradient !py-2 !px-4 !text-sm" : "bg-white/40 text-muted-foreground hover:bg-white/60 border border-border"
            }`}
          >
            {tab.label} ({counts[tab.key]})
          </button>
        ))}
      </div>

      {/* Application Cards */}
      <div className="space-y-4">
        {filtered.map((app, i) => {
          const status = STATUS_CONFIG[app.status];
          const isExpanded = expanded === app.id;
          return (
            <motion.div
              key={app.id}
              className="sb-glass overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setExpanded(isExpanded ? null : app.id)}
            >
              <div className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${app.gradFrom} ${app.gradTo} flex items-center justify-center text-white font-syne font-extrabold text-lg shrink-0`}>
                  {app.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-syne font-bold text-base">{app.title}</h3>
                  <p className="font-dm-sans text-sm text-muted-foreground">{app.company} · Applied {app.appliedDate}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-dm-sans font-semibold ${status.color}`}>
                    <status.icon className="w-3.5 h-3.5" /> {status.label}
                  </div>
                  <div className="text-center px-3 py-1.5 rounded-xl bg-white/60 border border-white/80">
                    <span className="font-syne font-bold text-sm sb-gradient-text">{app.match}%</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                </div>
              </div>

              {/* Timeline */}
              {isExpanded && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-6 pb-6 border-t border-border/30">
                  <div className="mt-4">
                    <p className="font-dm-sans text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Application Timeline</p>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2">
                      {app.timeline.map((step, si) => (
                        <div key={si} className="flex items-center gap-2 shrink-0">
                          <div className={`flex flex-col items-center`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step.done ? "bg-gradient-to-br from-emerald-400 to-blue-500 text-white" : "bg-secondary text-muted-foreground"}`}>
                              {step.done ? "✓" : si + 1}
                            </div>
                            <p className="font-dm-sans text-[10px] text-muted-foreground mt-1 text-center whitespace-nowrap">{step.label}</p>
                            <p className="font-dm-sans text-[9px] text-muted-foreground/60">{step.date}</p>
                          </div>
                          {si < app.timeline.length - 1 && (
                            <div className={`w-8 h-0.5 ${step.done ? "bg-emerald-400" : "bg-secondary"} mt-[-20px]`} />
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="font-dm-sans text-sm text-muted-foreground mt-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Next: {app.nextStep}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </SkillBridgeLayout>
  );
}
