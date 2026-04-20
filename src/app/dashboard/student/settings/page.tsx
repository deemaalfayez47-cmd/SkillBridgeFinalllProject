"use client";

import { useState } from "react";
import {
  User,
  Lock,
  Save,
  Camera,
  BadgeCheck,
  MapPin,
  GraduationCap,
  Bell,
  Star,
  Fingerprint,
  ShieldCheck,
  Mail,
  Cpu,
  Sparkles,
  PencilLine,
  ShieldAlert
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-[#F8FAFC] text-slate-800 font-sans">
      
      {/* 🌫️ خلفية جمالية هادئة */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-400/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-amber-400/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-6">
        
        {/* 👑 الهيدر المدمج جداً - Ultra Compact Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[2rem] bg-white border border-amber-200 shadow-sm"
        >
          <div className="p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 relative z-10">
            
            {/* صورة البروفايل - حجم صغير وأنيق */}
            <div className="relative group">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-400 to-blue-600 p-[2px] shadow-lg">
                <div className="w-full h-full rounded-[0.9rem] bg-white flex items-center justify-center text-4xl border-2 border-white overflow-hidden shadow-inner font-black">
                  👩‍💻
                </div>
              </div>
              <button className="absolute -bottom-1 -right-1 p-2 bg-slate-900 text-white rounded-lg shadow-xl border-2 border-white hover:bg-amber-500 transition-all">
                <Camera size={12} />
              </button>
            </div>

            {/* الاسم والبيانات السريعة - سطر واحد تقريباً */}
            <div className="flex-1 text-center md:text-left space-y-2">
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <h1 className="text-3xl font-black text-slate-800 tracking-tight italic uppercase">
                  Deema Alsoufi<span className="text-blue-600"></span>
                </h1>
                <div className="flex justify-center gap-2">
                
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-400 font-bold text-[9px] uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><MapPin size={12} className="text-blue-500" /> Amman, Jordan</span>
                <span className="flex items-center gap-1.5"><GraduationCap size={12} className="text-amber-500" /> BAU Graduate</span>
              </div>
            </div>

            {/* زر التنبيهات الصغير */}
            <button className="hidden md:flex p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white transition-colors relative">
              <Bell size={16} className="text-slate-400" />
              <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-amber-500 rounded-full border border-white"></span>
            </button>
          </div>
        </motion.div>

        {/* 🛠️ شبكة الإعدادات */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Identity Hub - الجزء الرئيسي */}
          <motion.section 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 bg-white rounded-[2.5rem] p-6 md:p-8 border border-slate-100 shadow-sm space-y-8"
          >
            <div className="flex items-center gap-3 border-b border-slate-50 pb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Fingerprint size={20} />
              </div>
              <h3 className="text-lg font-black text-slate-800 uppercase italic tracking-tight">Identity <span className="text-blue-600">Hub</span></h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <User size={10} className="text-blue-500" /> Full Name
                </label>
                <div className="relative">
                  <input type="text" defaultValue="Deema Fayez Alsoufi" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 px-5 text-xs font-bold focus:border-blue-500 focus:bg-white outline-none transition-all" />
                  <PencilLine className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Cpu size={10} className="text-amber-500" /> Major
                </label>
                <input type="text" defaultValue="Computer Information Systems" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 px-5 text-xs font-bold focus:border-amber-400 focus:bg-white outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                <Mail size={10} className="text-blue-500" /> Email Address
              </label>
              <div className="relative">
                <input type="email" defaultValue="deema.alsoufi@umniah.com" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 px-5 text-xs font-bold text-slate-500 outline-none cursor-not-allowed" disabled />
                <ShieldCheck className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500" size={16} />
              </div>
            </div>
          </motion.section>

          {/* Security Protocol - الجزء اللي تم تعديله ليناسب الثيم */}
          <div className="lg:col-span-4 space-y-6">
            <motion.section 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                  <Lock size={16} />
                </div>
                <h4 className="text-[9px] font-black uppercase tracking-widest italic text-slate-800">Security Protocol</h4>
              </div>
              
              <div className="space-y-3">
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="New Password"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 px-5 text-[10px] font-bold focus:border-blue-500 outline-none transition-all"
                  />
                  <ShieldAlert className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-200" size={14} />
                </div>
              </div>

              <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={12} className="text-blue-600" />
                  <span className="text-[8px] font-black uppercase text-blue-600">Security Tip</span>
                </div>
                <p className="text-[9px] text-slate-500 font-medium leading-relaxed">Update your key regularly to keep your SkillBridge workspace secure.</p>
              </div>
            </motion.section>

            {/* زر الحفظ */}
            <motion.button 
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => { setIsSaving(true); setTimeout(() => setIsSaving(false), 1200); }}
              className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-3"
            >
              <AnimatePresence mode="wait">
                {isSaving ? (
                  <motion.div key="saving" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                    <div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Synchronizing...
                  </motion.div>
                ) : (
                  <motion.div key="save" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                    <Save size={14} /> Update Identity
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}