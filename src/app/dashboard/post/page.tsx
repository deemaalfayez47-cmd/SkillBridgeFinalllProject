"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft, 
  Briefcase, 
  MapPin, 
  DollarSign, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Plus, 
  X,
  Clock // أضفتها هنا لتجنب أي تعليق مستقبلي
} from "lucide-react";
import CompanyLayout from "@/components/CompanyLayout";

const STEPS = ["Basic Info", "Requirements", "Compensation", "Review & Post"];

export default function PostInternship() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: "", company: "", location: "", type: "Remote", description: "",
    skills: [] as string[], experience: "Entry Level", education: "Bachelor's",
    salary: "", currency: "USD", period: "Monthly",
    benefits: [] as string[],
  });
  const [skillInput, setSkillInput] = useState("");
  const [benefitInput, setBenefitInput] = useState("");

  const update = (key: string, value: any) => setForm({ ...form, [key]: value });

  const addSkill = () => { if (skillInput.trim()) { update("skills", [...form.skills, skillInput.trim()]); setSkillInput(""); } };
  const addBenefit = () => { if (benefitInput.trim()) { update("benefits", [...form.benefits, benefitInput.trim()]); setBenefitInput(""); } };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = "w-full p-3 rounded-2xl bg-secondary/50 border border-border font-dm-sans text-sm focus:ring-2 focus:ring-primary/30 outline-none transition-all";
  const labelClass = "font-dm-sans text-sm font-medium mb-1.5 block";

  return (
    <CompanyLayout>
      <div className="mb-8">
        <h1 className="font-syne font-extrabold text-3xl sb-gradient-text">Post an Internship</h1>
        <p className="font-dm-sans text-muted-foreground mt-1">Create a new job listing in a few steps</p>
      </div>

      {/* Step Indicator */}
      <div className="sb-glass p-6 mb-6">
        <div className="flex items-center justify-between">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i <= step ? "bg-gradient-to-br from-cyan-400 to-purple-500 text-white" : "bg-secondary text-muted-foreground"}`}>
                {i < step ? "✓" : i + 1}
              </div>
              <span className={`font-dm-sans text-xs font-medium hidden sm:inline ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
              {i < STEPS.length - 1 && <div className={`w-8 lg:w-16 h-0.5 ${i < step ? "bg-primary" : "bg-secondary"} hidden sm:block`} />}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <motion.div className="sb-glass p-8" key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
        {step === 0 && (
          <div className="space-y-5">
            <div><label className={labelClass}>Job Title</label><input className={inputClass} value={form.title} onChange={(e) => update("title", e.target.value)} placeholder="e.g. Frontend Engineer Intern" /></div>
            <div><label className={labelClass}>Company Name</label><input className={inputClass} value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="e.g. SkillBridge" /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className={labelClass}>Location</label><input className={inputClass} value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="e.g. Amman, Jordan" /></div>
              <div>
                <label className={labelClass}>Work Type</label>
                <select className={inputClass} value={form.type} onChange={(e) => update("type", e.target.value)}>
                  <option>Remote</option><option>On-site</option><option>Hybrid</option>
                </select>
              </div>
            </div>
            <div><label className={labelClass}>Description</label><textarea className={`${inputClass} min-h-[120px]`} value={form.description} onChange={(e) => update("description", e.target.value)} placeholder="Describe the role..." /></div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Required Skills</label>
              <div className="flex gap-2 mb-2">
                <input className={`${inputClass} flex-1`} value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="Add a skill (e.g. React.js)" onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())} />
                <button onClick={addSkill} className="sb-btn-gradient !py-2 !px-4 rounded-xl"><Plus className="w-4 h-4 text-white" /></button>
              </div>
              <div className="flex flex-wrap gap-2">
                {form.skills.map((s, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-dm-sans font-medium flex items-center gap-1.5">
                    {s} <X className="w-3 h-3 cursor-pointer" onClick={() => update("skills", form.skills.filter((_, j) => j !== i))} />
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Experience Level</label>
                <select className={inputClass} value={form.experience} onChange={(e) => update("experience", e.target.value)}>
                  <option>Entry Level</option><option>Mid Level</option><option>Senior</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Education</label>
                <select className={inputClass} value={form.education} onChange={(e) => update("education", e.target.value)}>
                  <option>High School</option><option>Bachelor's</option><option>Master's</option><option>PhD</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div><label className={labelClass}>Salary / Rate</label><input className={inputClass} value={form.salary} onChange={(e) => update("salary", e.target.value)} placeholder="e.g. 500" /></div>
              <div>
                <label className={labelClass}>Currency</label>
                <select className={inputClass} value={form.currency} onChange={(e) => update("currency", e.target.value)}>
                  <option>JOD</option><option>USD</option><option>EUR</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Period</label>
                <select className={inputClass} value={form.period} onChange={(e) => update("period", e.target.value)}>
                  <option>Monthly</option><option>Hourly</option><option>Yearly</option>
                </select>
              </div>
            </div>
            <div>
              <label className={labelClass}>Benefits & Perks</label>
              <div className="flex gap-2 mb-2">
                <input className={`${inputClass} flex-1`} value={benefitInput} onChange={(e) => setBenefitInput(e.target.value)} placeholder="Add a benefit" onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addBenefit())} />
                <button onClick={addBenefit} className="sb-btn-gradient !py-2 !px-4 rounded-xl"><Plus className="w-4 h-4 text-white" /></button>
              </div>
              <div className="flex flex-wrap gap-2">
                {form.benefits.map((b, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-dm-sans font-medium flex items-center gap-1.5">
                    {b} <X className="w-3 h-3 cursor-pointer" onClick={() => update("benefits", form.benefits.filter((_, j) => j !== i))} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-syne font-bold text-lg flex items-center gap-2"><FileText className="w-5 h-5" /> Review Your Posting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Title", value: form.title || "—" },
                { label: "Company", value: form.company || "—" },
                { label: "Location", value: `${form.location || "—"} · ${form.type}` },
                { label: "Experience", value: form.experience },
                { label: "Education", value: form.education },
                { label: "Salary", value: form.salary ? `${form.salary} ${form.currency}/${form.period}` : "—" },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-2xl bg-secondary/30">
                  <p className="font-dm-sans text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{item.label}</p>
                  <p className="font-dm-sans text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
            {form.skills.length > 0 && (
              <div>
                <p className="font-dm-sans text-xs font-semibold text-muted-foreground mb-2">Required Skills</p>
                <div className="flex flex-wrap gap-2">
                  {form.skills.map((s) => <span key={s} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-dm-sans font-medium">{s}</span>)}
                </div>
              </div>
            )}
            {form.description && <div className="p-3 rounded-2xl bg-secondary/30"><p className="font-dm-sans text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">Description</p><p className="font-dm-sans text-sm">{form.description}</p></div>}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-border/30">
          <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-dm-sans text-sm font-medium border border-border transition-all ${step === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-secondary/60"}`}>
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          {step < 3 ? (
            <button onClick={() => setStep(step + 1)} className="sb-btn-gradient flex items-center gap-2 !text-sm text-white px-6 py-2.5 rounded-xl">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={handleSubmit} className="sb-btn-gradient flex items-center gap-2 !text-sm text-white px-6 py-2.5 rounded-xl">
              <Sparkles className="w-4 h-4" /> Publish Internship
            </button>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {submitted && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="sb-glass p-8 text-center max-w-sm mx-4" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="font-syne font-extrabold text-xl">Posted Successfully!</h3>
              <p className="font-dm-sans text-sm text-muted-foreground mt-2">Your internship is now live and visible to students on SkillBridge.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </CompanyLayout>
  );
}