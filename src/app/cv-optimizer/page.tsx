"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Sparkles,
  Pencil,
  Plus,
  FileText,
  User,
  GraduationCap,
  Briefcase,
  Star,
} from "lucide-react";
import SkillBridgeLayout from "@/components/SkillBridgeLayout";
import QuickEditModal from "@/components/QuickEditModal";

const MOCK_RESULTS = {
  skills: [
    { name: "React / Next.js", strength: 92 },
    { name: "TypeScript", strength: 88 },
    { name: "UI/UX Design", strength: 78 },
    { name: "Node.js / APIs", strength: 74 },
    { name: "Python / ML", strength: 58 },
  ],
  experience: [
    {
      title: "Frontend Intern",
      company: "TechCorp",
      duration: "Jun 2025 – Present",
      desc: "Built React dashboards and component libraries.",
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      duration: "Jan 2024 – May 2025",
      desc: "Delivered 12+ client projects using Next.js and Tailwind.",
    },
  ],
  education: [
    {
      degree: "B.Sc Computer Science",
      school: "Stanford University",
      year: "2023 – 2027",
      gpa: "3.87",
    },
  ],
};

type AnalysisState = "idle" | "scanning" | "done";

export default function CVOptimizer() {
  const [profile, setProfile] = useState({
    name: "Nadia Chen",
    university: "Stanford University",
    major: "Computer Science",
    skills: ["React", "TypeScript", "Figma", "Node.js", "Python"],
  });
  const [editOpen, setEditOpen] = useState(false);
  const [analysisState, setAnalysisState] = useState<AnalysisState>("idle");
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) setFileName(file.name);
    },
    [],
  );

  const handleAnalyze = () => {
    if (!fileName) return;
    setAnalysisState("scanning");
    setTimeout(() => setAnalysisState("done"), 3000);
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <SkillBridgeLayout>
      {/* Header - الأزرار الزائدة تم حذفها من هنا */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-syne font-extrabold text-3xl sb-gradient-text">
            AI CV Optimizer
          </h1>
          <p className="font-dm-sans text-muted-foreground mt-1">
            Upload your CV and let AI enhance it
          </p>
        </div>
        <div className="flex items-center gap-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: Profile + Upload + Results */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Card */}
          <motion.div className="sb-glass p-6" {...fadeUp}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sb-neon to-sb-purple flex items-center justify-center text-primary-foreground font-syne font-extrabold text-2xl">
                  {profile.name.charAt(0)}
                </div>
                <div>
                  <h2 className="font-syne font-extrabold text-xl text-foreground">
                    {profile.name}
                  </h2>
                  <p className="font-dm-sans text-sm text-muted-foreground">
                    {profile.university} · {profile.major}
                  </p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium font-dm-sans"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setEditOpen(true)}
                className="px-4 py-2 rounded-xl border border-border text-sm font-dm-sans font-medium hover:bg-secondary/60 transition-all flex items-center gap-2"
              >
                <Pencil className="w-3.5 h-3.5" /> Quick Edit
              </button>
            </div>
          </motion.div>

          {/* Upload / Analysis Zone */}
          <motion.div
            className={`sb-glass p-8 relative overflow-hidden ${analysisState === "scanning" ? "sb-scanning" : ""}`}
            {...fadeUp}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-syne font-extrabold text-lg mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sb-neon" /> AI Analysis Zone
            </h3>

            {analysisState === "idle" && (
              <>
                <div
                  className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${
                    dragOver
                      ? "border-sb-neon bg-primary/5"
                      : "border-primary/30"
                  }`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("cv-upload")?.click()}
                >
                  <input
                    id="cv-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileSelect}
                  />
                  <Upload className="w-12 h-12 text-primary/40 mx-auto mb-4" />
                  <p className="font-dm-sans text-muted-foreground">
                    {fileName ? (
                      <span className="text-foreground font-medium">
                        {fileName}
                      </span>
                    ) : (
                      <>
                        Drag & drop your CV here, or{" "}
                        <span className="text-primary font-medium">browse</span>
                      </>
                    )}
                  </p>
                  <p className="font-dm-sans text-xs text-muted-foreground mt-2">
                    PDF, DOC, DOCX up to 10MB
                  </p>
                </div>
                <button
                  onClick={handleAnalyze}
                  disabled={!fileName}
                  className={`sb-btn-gradient mt-6 w-full flex items-center justify-center gap-2 text-base ${!fileName ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Analyze with AI <Sparkles className="w-5 h-5" />
                </button>
              </>
            )}

            {analysisState === "scanning" && (
              <div className="py-16 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 mx-auto mb-4"
                >
                  <Sparkles className="w-16 h-16 text-sb-neon" />
                </motion.div>
                <p className="font-syne font-bold text-lg">
                  Scanning your CV...
                </p>
                <p className="font-dm-sans text-sm text-muted-foreground mt-1">
                  AI is analyzing your skills, experience, and education
                </p>
              </div>
            )}

            {analysisState === "done" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-4"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-dm-sans text-sm font-medium">
                  <Star className="w-4 h-4" /> Analysis Complete
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Results */}
          <AnimatePresence>
            {analysisState === "done" && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Skills Detected */}
                <div className="sb-glass p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-syne font-extrabold text-lg flex items-center gap-2">
                      <Star className="w-5 h-5 text-sb-neon" /> Skills Detected
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-xl hover:bg-secondary/60 transition-all">
                        <Pencil className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border text-xs font-dm-sans font-medium hover:bg-secondary/60 transition-all">
                        <Plus className="w-3.5 h-3.5" /> Add More
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {MOCK_RESULTS.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-dm-sans text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="font-dm-sans text-xs text-muted-foreground font-medium">
                            {skill.strength}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="sb-progress-bar"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.strength}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Experience Summary */}
                <div className="sb-glass p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-syne font-extrabold text-lg flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-sb-purple" />{" "}
                      Experience Summary
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-xl hover:bg-secondary/60 transition-all">
                        <Pencil className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border text-xs font-dm-sans font-medium hover:bg-secondary/60 transition-all">
                        <Plus className="w-3.5 h-3.5" /> Add More
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {MOCK_RESULTS.experience.map((exp, i) => (
                      <motion.div
                        key={i}
                        className="p-4 rounded-2xl bg-secondary/30"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-syne font-bold text-sm">
                              {exp.title}
                            </h4>
                            <p className="font-dm-sans text-xs text-muted-foreground">
                              {exp.company} · {exp.duration}
                            </p>
                          </div>
                        </div>
                        <p className="font-dm-sans text-sm text-muted-foreground mt-2">
                          {exp.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="sb-glass p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-syne font-extrabold text-lg flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-sb-cyan" />{" "}
                      Education
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-xl hover:bg-secondary/60 transition-all">
                        <Pencil className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border text-xs font-dm-sans font-medium hover:bg-secondary/60 transition-all">
                        <Plus className="w-3.5 h-3.5" /> Add More
                      </button>
                    </div>
                  </div>
                  {MOCK_RESULTS.education.map((edu, i) => (
                    <motion.div
                      key={i}
                      className="p-4 rounded-2xl bg-secondary/30"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h4 className="font-syne font-bold text-sm">
                        {edu.degree}
                      </h4>
                      <p className="font-dm-sans text-xs text-muted-foreground">
                        {edu.school} · {edu.year}
                      </p>
                      <p className="font-dm-sans text-xs text-muted-foreground mt-1">
                        GPA: {edu.gpa}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right column: Stats panel */}
        <div className="space-y-6">
          <motion.div
            className="sb-glass p-6 text-center"
            {...fadeUp}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-sb-neon/10 to-sb-purple/10 text-xs font-dm-sans font-semibold text-sb-purple border border-sb-purple/20 mb-4">
              <Sparkles className="w-3 h-3" /> PRO MEMBER
            </span>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-syne font-extrabold text-3xl text-foreground">
                  47
                </p>
                <p className="font-dm-sans text-xs text-muted-foreground">
                  Applications
                </p>
              </div>
              <div>
                <p className="font-syne font-extrabold text-3xl text-foreground">
                  89%
                </p>
                <p className="font-dm-sans text-xs text-muted-foreground">
                  Avg Match
                </p>
              </div>
            </div>

            {/* Score ring */}
            <div className="relative w-36 h-36 mx-auto mb-4">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="url(#scoreGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${72 * 3.14} ${100 * 3.14}`}
                />
                <defs>
                  <linearGradient
                    id="scoreGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="hsl(210 100% 60%)" />
                    <stop offset="100%" stopColor="hsl(270 80% 60%)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-syne font-extrabold text-3xl text-foreground">
                  72
                </span>
                <span className="font-dm-sans text-xs text-muted-foreground">
                  /100
                </span>
              </div>
            </div>
            <p className="font-syne font-bold text-sm">SkillBridge Score™</p>
            <p className="font-dm-sans text-xs text-muted-foreground">
              Top 18% of all students
            </p>
            <button className="sb-btn-gradient w-full mt-4 text-sm">
              Boost My Score →
            </button>
          </motion.div>

          {/* Skill Proficiency */}
          <motion.div
            className="sb-glass p-6"
            {...fadeUp}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-syne font-extrabold text-base mb-1">
              Skill Proficiency
            </h3>
            <p className="font-dm-sans text-xs text-muted-foreground mb-4">
              Based on your CV analysis
            </p>
            <div className="space-y-3">
              {MOCK_RESULTS.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-dm-sans text-sm">{skill.name}</span>
                    <span className="font-dm-sans text-xs text-muted-foreground">
                      {skill.strength}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="sb-progress-bar"
                      style={{ width: `${skill.strength}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating CTA */}
      <AnimatePresence>
        {analysisState === "done" && (
          <motion.button
            className="fixed bottom-8 right-8 sb-btn-gradient flex items-center gap-2 text-base z-20 shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40 }}
          >
            <FileText className="w-5 h-5" /> Generate Optimized CV
          </motion.button>
        )}
      </AnimatePresence>

      <QuickEditModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        profile={profile}
        onSave={setProfile}
      />
    </SkillBridgeLayout>
  );
}
