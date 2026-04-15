"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";

export default function SignUpPage() {
  const [selectedType, setSelectedType] = useState("student");
  const isStudent = selectedType === "student";
  
  const themeColor = isStudent ? "#00f2ff" : "#a855f7";
  const themeGlow = isStudent
    ? "shadow-[0_0_30px_rgba(0,242,255,0.4)]"
    : "shadow-[0_0_30px_rgba(168,85,247,0.4)]";

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-slate-950 font-sans">
      <div className="absolute inset-0 z-0">
        <Image src="/bridge_pic.jpg" alt="Background" fill className="object-cover scale-105 opacity-80" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-2xl p-8 md:p-12 bg-slate-900/30 backdrop-blur-xl rounded-[3rem] border border-white/20 shadow-2xl transition-all">
        <Link href="/login" className="absolute top-8 left-8 text-white/50 hover:text-white flex items-center gap-1.5 text-xs font-black uppercase tracking-widest transition-all">
          <ChevronLeft size={16} /> Back to Login
        </Link>

        <div className="text-center mb-12 mt-6">
          <h1 className="text-4xl md:text-5xl font-[1000] tracking-tighter uppercase leading-tight">
            <span className="bg-gradient-to-r from-[#00f2ff] via-[#a855f7] to-[#00f2ff] bg-clip-text text-transparent italic drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              Join SkillBridge
            </span>
          </h1>
          <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em] pt-3">Create Your Profile</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div onClick={() => setSelectedType("student")} className={`cursor-pointer p-8 rounded-[2.5rem] border-2 transition-all flex flex-col items-center gap-4 ${isStudent ? "bg-[#00f2ff]/10 border-[#00f2ff]" : "bg-black/40 border-white/10 hover:border-white/30"}`}>
            <div className="text-7xl mb-2">👨‍🎓</div>
            <h3 className="text-white font-[1000] uppercase tracking-widest text-lg">Student</h3>
          </div>

          <div onClick={() => setSelectedType("company")} className={`cursor-pointer p-8 rounded-[2.5rem] border-2 transition-all flex flex-col items-center gap-4 ${!isStudent ? "bg-[#a855f7]/10 border-[#a855f7]" : "bg-black/40 border-white/10 hover:border-white/30"}`}>
            <div className="text-7xl mb-2">🏢</div>
            <h3 className="text-white font-[1000] uppercase tracking-widest text-lg">Company</h3>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href={`/signup/complete?type=${selectedType}`} style={{ backgroundColor: themeColor }} className={`py-5 px-14 rounded-2xl text-black font-[1000] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.05] active:scale-95 transition-all ${themeGlow} w-fit`}>
            Continue as {selectedType} <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}