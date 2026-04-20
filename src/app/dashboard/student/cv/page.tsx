"use client";
import { motion } from "framer-motion";

import React, { useState } from "react";
import {
  FileText,
  BrainCircuit,
  Plus,
  CheckCircle,
  ArrowRight,
  Trash2,
  Edit3,
  Save,
  X,
} from "lucide-react";

export default function StudentCVPage() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newSkill, setNewSkill] = useState({
    title: "",
    level: "INTERMEDIATE",
  });

  // قائمة المهارات مع إمكانية التعديل عليها
  const [competencies, setCompetencies] = useState([
    { title: "Next.js Framework", level: "EXPERT" },
    { title: "AI Model Integration", level: "INTERMEDIATE" },
    { title: "Tailwind Engineering", level: "EXPERT" },
  ]);

  const addSkill = () => {
    if (newSkill.title.trim()) {
      setCompetencies([...competencies, newSkill]);
      setNewSkill({ title: "", level: "INTERMEDIATE" });
      setIsAdding(false);
    }
  };

  const removeSkill = (index: number) => {
    setCompetencies(competencies.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 md:p-12">
      <main className="max-w-4xl mx-auto">
        {/* Header Title Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-2.5 rounded-2xl text-white shadow-lg shadow-blue-200">
              <BrainCircuit size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2 uppercase">
                <span className="text-[10px] bg-blue-100 px-2 py-0.5 rounded-md text-blue-600 font-black">
                  AI
                </span>
                CV ANALYSIS
              </h2>
              <p className="text-slate-400 text-sm font-medium">
                Optimize your profile with AI insights
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-bold tracking-widest text-slate-400 bg-white p-3 px-5 rounded-2xl border border-slate-200 shadow-sm">
            <span className="flex items-center gap-2 uppercase">
              SYSTEM READY <CheckCircle size={14} className="text-blue-500" />
            </span>
          </div>
        </header>

        {/* 🌟 Upload Center 🌟 */}
        {/* 🌟 تصميم مطور وجذاب بالأزرق القديم (Royal Blue) 🌟 */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl bg-[#040D21] rounded-[2.5rem] p-1 shadow-2xl shadow-blue-900/20 border border-slate-800 group relative"
          >
            {/* تأثير ضوئي خفيف بالخلفية بالأزرق القديم */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-blue-400/5 to-blue-600/5 blur-3xl opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 bg-[#040D21]/50 p-6 rounded-[2rem]">
              {/* 🛠️ الجزء الأيسر: منطقة الرفع (الأزرق القديم) */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full md:w-56 h-44 border-2 border-dashed border-blue-500/20 bg-blue-500/5 rounded-[1.5rem] flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-blue-500/50 transition-all duration-300 relative group/box"
              >
                <div className="bg-slate-900 p-4 rounded-xl shadow-lg border border-slate-800 transition-transform group-hover/box:-translate-y-1">
                  <svg
                    className="w-9 h-9 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-white uppercase tracking-tight">
                    Select CV
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase font-medium">
                    PDF or DOCX
                  </p>
                </div>

                {/* الحدود المضيئة بالأزرق القديم عند الهوفر */}
                <div
                  className="absolute inset-0 rounded-[1.5rem] border-2 border-blue-500 opacity-0 group-hover/box:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "0 0 15px rgba(59,130,246,0.3)" }}
                />
              </motion.div>

              {/* 🛠️ الجزء الأيمن: النص والزر */}
              <div className="flex-1 text-center md:text-left space-y-5 px-3">
                <div>
                  <h3 className="text-xl font-black text-white tracking-tight uppercase italic flex items-center gap-2">
                    <span className="text-[10px] bg-blue-500/20 px-2 py-0.5 rounded text-blue-400 font-black">
                      AI
                    </span>
                    Upload <span className="text-blue-500">Center</span>
                  </h3>
                  <p className="text-slate-400 text-xs font-medium leading-relaxed mt-1">
                    Let our AI audit your skills and match you with the perfect
                    professional opportunities.
                  </p>
                </div>

                <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-3.5 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-blue-900/40 transition-all uppercase tracking-widest text-[11px] group/btn">
                  Start AI Audit
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        {/* 🌟 Detected Competencies & Manual Edit 🌟 */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-black text-slate-800 italic uppercase tracking-tight">
              DETECTED <span className="text-blue-600">COMPETENCIES</span>
            </h3>
            <button
              onClick={() => setIsAdding(!isAdding)}
              className={`w-10 h-10 border rounded-xl flex items-center justify-center transition-all ${isAdding ? "bg-red-50 text-red-500 border-red-100" : "text-slate-400 border-slate-200 hover:bg-slate-50"}`}
            >
              {isAdding ? <X size={20} /> : <Plus size={20} />}
            </button>
          </div>

          {/* 🛠️ Add New Skill Form 🛠️ */}
          {isAdding && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-blue-50/50 border border-blue-100 rounded-3xl flex flex-wrap gap-4 items-end"
            >
              <div className="flex-1 min-w-[200px]">
                <label className="block text-[10px] font-black text-blue-600 uppercase mb-2 ml-1">
                  Skill Name
                </label>
                <input
                  type="text"
                  value={newSkill.title}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, title: e.target.value })
                  }
                  placeholder="e.target.value e.g. React.js"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="w-40">
                <label className="block text-[10px] font-black text-blue-600 uppercase mb-2 ml-1">
                  Level
                </label>
                <select
                  value={newSkill.level}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, level: e.target.value })
                  }
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:border-blue-500 outline-none appearance-none cursor-pointer"
                >
                  <option value="BEGINNER">BEGINNER</option>
                  <option value="INTERMEDIATE">INTERMEDIATE</option>
                  <option value="EXPERT">EXPERT</option>
                </select>
              </div>
              <button
                onClick={addSkill}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                <Save size={18} /> SAVE
              </button>
            </motion.div>
          )}

          <div className="grid grid-cols-1 gap-4">
            {competencies.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-500 border border-slate-100">
                    <BrainCircuit size={22} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 uppercase text-md tracking-tight block">
                      {skill.title}
                    </span>
                    <span className="text-[9px] font-black tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 uppercase inline-block mt-1">
                      {skill.level}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-300 hover:text-blue-500 transition-colors">
                    <Edit3 size={18} />
                  </button>
                  <button
                    onClick={() => removeSkill(index)}
                    className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
