"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { Mail, Lock, ArrowRight, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("student");
  const isStudent = activeTab === "student";
  
  const themeColor = isStudent ? "#00f2ff" : "#a855f7";
  const themeGlow = isStudent
    ? "shadow-[0_0_30px_rgba(0,242,255,0.4)]"
    : "shadow-[0_0_30px_rgba(168,85,247,0.4)]";

  // دالة تسجيل الدخول
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // بناءً على اختيار التاب (طالب أو شركة) يتم التوجيه
    if (isStudent) {
      router.push("/dashboard/student");
    } else {
      router.push("/dashboard/company");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-slate-950 font-sans overflow-hidden">
      {/* الخلفية */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bridge_pic.jpg"
          alt="Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-lg p-10 bg-slate-900/30 backdrop-blur-md rounded-[3rem] border border-white/20 shadow-2xl">
        {/* العنوان */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white">
            <span className="bg-gradient-to-r from-[#00f2ff] via-[#a855f7] to-[#00f2ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,242,255,0.6)] italic">
              Welcome Back!
            </span>
          </h1>
          <p className="text-white/70 text-[11px] font-black pt-3 tracking-[0.4em] uppercase">
            <Sparkles size={14} className="inline mr-2" style={{ color: themeColor }} />
            SkillBridge Portal
          </p>
        </div>

        {/* التبديل بين طالب وشركة */}
        <div className="flex p-1.5 bg-black/50 rounded-2xl mb-10 border border-white/10">
          <button
            onClick={() => setActiveTab("student")}
            className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-black transition-all duration-300 ${isStudent ? "text-black" : "text-white/60"}`}
            style={{ backgroundColor: isStudent ? themeColor : "transparent" }}
          >
            <span className="text-2xl">👨‍🎓</span> Student
          </button>
          <button
            onClick={() => setActiveTab("company")}
            className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-black transition-all duration-300 ${!isStudent ? "text-white" : "text-white/60"}`}
            style={{ backgroundColor: !isStudent ? themeColor : "transparent" }}
          >
            <span className="text-2xl">🏢</span> Company
          </button>
        </div>

        {/* نموذج تسجيل الدخول - تم ربط الدالة هنا */}
        <form className="space-y-6 flex flex-col" onSubmit={handleLogin}>
          <div className="group space-y-2 text-left">
            <label className="text-[10px] font-black text-white uppercase tracking-[0.3em] ml-2">Email Address</label>
            <div className="relative flex items-center bg-transparent rounded-2xl border-2 transition-all duration-500" style={{ borderColor: themeColor }}>
              <div className="pl-5" style={{ color: themeColor }}><Mail size={20} /></div>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-5 bg-transparent text-white outline-none font-semibold placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="group space-y-2 text-left">
            <label className="text-[10px] font-black text-white uppercase tracking-[0.3em] ml-2">Password</label>
            <div className="relative flex items-center bg-transparent rounded-2xl border-2 transition-all duration-500" style={{ borderColor: themeColor }}>
              <div className="pl-5" style={{ color: themeColor }}><Lock size={20} /></div>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-5 bg-transparent text-white outline-none font-semibold tracking-widest placeholder:text-white/20"
              />
            </div>
          </div>

          {/* زر تسجيل الدخول */}
          <button
            type="submit"
            style={{ backgroundColor: themeColor }}
            className={`mx-auto mt-8 px-14 py-4 rounded-2xl text-black font-black uppercase transition-all hover:scale-105 active:scale-95 ${themeGlow} w-fit flex items-center gap-2`}
          >
            Sign In <ArrowRight size={20} />
          </button>
        </form>

        {/* رابط الساين أب */}
        <div className="mt-12 text-center text-sm border-t border-white/10 pt-8">
          <p className="text-white/70 font-medium">
            Don't have an account?{" "}
            <Link 
              href="/signup" 
              className="font-black hover:underline transition-colors cursor-pointer" 
              style={{ color: themeColor }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}