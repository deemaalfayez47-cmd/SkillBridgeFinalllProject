"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Mail, Lock, Building, UserCheck, ArrowRight, ChevronLeft } from "lucide-react";

function CompleteFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // قراءة نوع المستخدم من الرابط (student أو company)
  const userType = searchParams.get("type") || "student";
  const isStudent = userType === "student";

  // إعدادات الألوان بناءً على النوع
  const themeColor = isStudent ? "#00f2ff" : "#a855f7";
  const themeGlow = isStudent
    ? "shadow-[0_0_30px_rgba(0,242,255,0.4)]"
    : "shadow-[0_0_30px_rgba(168,85,247,0.4)]";

  // دالة الحفظ والانتقال للداش بورد الصحيح
  const handleFinishRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    
    // بناءً على الصورة عندك: المجلدات موجودة داخل dashboard
    if (isStudent) {
      router.push("/dashboard/student"); 
    } else {
      router.push("/dashboard/company"); 
    }
  };

  return (
    <div className="relative z-10 w-full max-w-xl p-8 md:p-12 bg-slate-900/30 backdrop-blur-xl rounded-[3rem] border border-white/20 shadow-2xl transition-all">
      {/* زر الرجوع */}
      <Link
        href="/signup"
        className="absolute top-8 left-8 text-white/50 hover:text-white flex items-center gap-1.5 text-xs font-black uppercase tracking-widest transition-all"
      >
        <ChevronLeft size={16} /> Back
      </Link>

      {/* العنوان */}
      <div className="text-center mb-10 mt-6">
        <div className="text-6xl mb-4">{isStudent ? "👨‍🎓" : "🏢"}</div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-white leading-tight italic">
          Join as <span style={{ color: themeColor }}>{isStudent ? "Student" : "Company"}</span>
        </h1>
        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mt-3">Finalize your account</p>
      </div>

      <form className="space-y-5" onSubmit={handleFinishRegistration}>
        {/* حقل الاسم */}
        <div className="space-y-2">
          <label className="text-[10px] font-black text-white uppercase tracking-[0.2em] ml-2">
            {isStudent ? "Full Name" : "Company Name"}
          </label>
          <div className="relative flex items-center bg-transparent rounded-2xl border-2 transition-all duration-500" style={{ borderColor: themeColor }}>
            <div className="pl-5" style={{ color: themeColor }}>
              {isStudent ? <User size={20} /> : <Building size={20} />}
            </div>
            <input
              type="text"
              required
              placeholder={isStudent ? "Enter your name" : "Enter company name"}
              className="w-full px-4 py-4 bg-transparent text-white outline-none font-semibold placeholder:text-white/20"
            />
          </div>
        </div>

        {/* حقل إضافي للشركة فقط */}
        {!isStudent && (
          <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-500">
            <label className="text-[10px] font-black text-white uppercase tracking-[0.2em] ml-2">Admin Name</label>
            <div className="relative flex items-center bg-transparent rounded-2xl border-2 transition-all duration-500" style={{ borderColor: themeColor }}>
              <div className="pl-5" style={{ color: themeColor }}><UserCheck size={20} /></div>
              <input type="text" required placeholder="Administrator name" className="w-full px-4 py-4 bg-transparent text-white outline-none font-semibold placeholder:text-white/20" />
            </div>
          </div>
        )}

        {/* البريد الإلكتروني */}
        <div className="space-y-2">
          <label className="text-[10px] font-black text-white uppercase tracking-[0.2em] ml-2">Email Address</label>
          <div className="relative flex items-center bg-transparent rounded-2xl border-2 transition-all duration-500" style={{ borderColor: themeColor }}>
            <div className="pl-5" style={{ color: themeColor }}><Mail size={20} /></div>
            <input type="email" required placeholder="email@skillbridge.com" className="w-full px-4 py-4 bg-transparent text-white outline-none font-semibold placeholder:text-white/20" />
          </div>
        </div>

        {/* كلمة المرور */}
        <div className="space-y-2">
          <label className="text-[10px] font-black text-white uppercase tracking-[0.2em] ml-2">Password</label>
          <div className="relative flex items-center bg-transparent rounded-2xl border-2 transition-all duration-500" style={{ borderColor: themeColor }}>
            <div className="pl-5" style={{ color: themeColor }}><Lock size={20} /></div>
            <input type="password" required placeholder="••••••••" className="w-full px-4 py-4 bg-transparent text-white outline-none font-semibold tracking-widest placeholder:text-white/20" />
          </div>
        </div>

        {/* زر الإنهاء */}
        <button
          type="submit"
          style={{ backgroundColor: themeColor }}
          className={`w-full mt-10 py-5 rounded-2xl text-black font-[1000] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all ${themeGlow}`}
        >
          Create Profile <ArrowRight size={22} />
        </button>
      </form>
    </div>
  );
}

// الكومبوننت الرئيسي مع Suspense لحل مشاكل useSearchParams في Next.js
export default function CompleteProfilePage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-slate-950 font-sans overflow-hidden">
      {/* الخلفية */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bridge_pic.jpg" 
          alt="Background" 
          fill 
          className="object-cover opacity-70 scale-105" 
          priority 
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Suspense fallback={<div className="text-white font-black animate-pulse uppercase tracking-[0.3em]">SkillBridge Loading...</div>}>
        <CompleteFormContent />
      </Suspense>
    </div>
  );
}