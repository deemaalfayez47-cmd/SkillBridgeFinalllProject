"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Target,
  Rocket,
  Shield,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomePage() {
  const [isScrollingStarted, setIsScrollingStarted] = useState(false);

  const partners = [
    { name: "Orange", industry: "Tech & Innovation", logo: "🍊" },
    { name: "Amazon JO", industry: "Software Engineering", logo: "📦" },
    { name: "Bank al Etihad", industry: "FinTech", logo: "🏦" },
    { name: "Umniah", industry: "Telecommunications", logo: "📱" },
    { name: "Zain", industry: "Digital Solutions", logo: "📶" },
    { name: "ABS", industry: "IT Consulting", logo: "💻" },
  ];

  const keyFeatures = [
    {
      title: "Talent Spotlight",
      desc: "Showcase your best work  directly to recruiters.",
      icon: "✨",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Smart Matching",
      desc: "A smart system that matches your university skills with company requirements",
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Freelance Hub",
      desc: "Freelance opportunities to build your portfolio while you study.",
      icon: "💼",
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "Trust Network",
      desc: "Get your skills endorsed by companies and build a trusted professional reputation on the platform.",
      icon: "🛡️",
      color: "from-green-400 to-emerald-600",
    },
  ];

  const handleScrollDown = () => {
    const sections = Array.from(
      document.querySelectorAll("main, section, stats-section"),
    );
    const currentScroll = window.scrollY;
    for (let section of sections) {
      const element = section as HTMLElement;
      if (element.offsetTop > currentScroll + 50) {
        window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
        return;
      }
    }
  };

  const handleScrollUp = () => {
    const sections = Array.from(
      document.querySelectorAll("main, section"),
    ).reverse();
    const currentScroll = window.scrollY;
    for (let section of sections) {
      const element = section as HTMLElement;
      if (element.offsetTop < currentScroll - 50) {
        window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollingStarted(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#020617] text-white selection:bg-[#00f2ff]/30 min-h-screen font-sans">
      <AnimatePresence>
        {isScrollingStarted && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed bottom-10 right-10 z-[100] flex flex-col gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleScrollUp}
              className="w-12 h-12 bg-[#020617] border-2 border-[#a855f7] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              <ChevronUp size={24} className="text-[#00f2ff]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleScrollDown}
              className="w-12 h-12 bg-[#020617] border-2 border-[#a855f7] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              <ChevronDown size={24} className="text-[#00f2ff]" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <main
        id="hero"
        className="relative w-full h-screen z-10 flex flex-col justify-between p-0"
      >
        <div className="fixed inset-0 z-0">
          <Image
            src="/bridge_pic.jpg"
            alt="SkillBridge AI"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        </div>

        {/* 🌟 1. تعديل الـ Logo: أصغر، بالزاوية، متدرج بالكامل 🌟 */}
        <div className="z-30 flex flex-col items-start pt-8 pl-10">
          <div className="flex items-center gap-2 group cursor-default">
            {/* أيقونة البرق باللون الأصفر المضيء */}
            <Zap
              size={16}
              className="text-[#facc15] drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
              fill="#facc15"
            />

            <h1 className="text-lg md:text-xl font-bold tracking-[0.15em] uppercase italic">
              {/* حرف S باللون الأصفر */}
              <span className="text-[#facc15] drop-shadow-[0_0_5px_rgba(250,204,21,0.3)]">
                S
              </span>

              {/* بقية كلمة kill بتدرج أزرق وبنفسجي واضح */}
              <span className="bg-gradient-to-r from-[#00f2ff] to-[#a855f7] bg-clip-text text-transparent antialiased">
                kill
              </span>

              {/* حرف B باللون الأصفر */}
              <span className="text-[#facc15] drop-shadow-[0_0_5px_rgba(250,204,21,0.3)]">
                B
              </span>

              {/* بقية كلمة ridge بتدرج أزرق وبنفسجي واضح */}
              <span className="bg-gradient-to-r from-[#00f2ff] to-[#a855f7] bg-clip-text text-transparent antialiased">
                ridge
              </span>
            </h1>
          </div>

          {/* خط سفلي ناعم يعزز التصميم */}
          <div className="h-[1px] w-6 bg-[#facc15] mt-1 opacity-40 shadow-[0_0_8px_#facc15]" />
        </div>

        {/* 🌟 2. تعديل العنوان الرئيسي: تصميم مضيء، متدرج، ومسافة آمنة 🌟 */}
        <div
          className="z-40 relative flex flex-col justify-start pl-10 md:pl-24 max-w-4xl"
          style={{ marginTop: "-200px" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-black flex flex-col pointer-events-none leading-[1.15]"
          >
            {/* 🌟 السطر الأول: تم التصغير لـ 46px 🌟 */}
            <div className="flex flex-wrap items-baseline gap-3 mb-1">
              <span
                className="text-white text-[16px] md:text-[20px] tracking-tighter"
                style={{ textShadow: "0 0 10px rgba(255,255,255,0.3)" }}
              >
                YOUR
              </span>
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#00d4ff] text-[30px] md:text-[46px] tracking-tighter uppercase antialiased"
                style={{ textShadow: "0 0 15px rgba(0,242,255,0.4)" }}
              >
                PATHWAY
              </span>
            </div>

            {/* 🌟 السطر الثاني: متناسق تماماً بـ 46px 🌟 */}
            <div className="flex flex-wrap items-baseline gap-3">
              <span
                className="text-white text-[16px] md:text-[20px] tracking-tighter"
                style={{ textShadow: "0 0 10px rgba(255,255,255,0.3)" }}
              >
                TO
              </span>
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] text-[30px] md:text-[46px] tracking-tight uppercase antialiased"
                style={{ textShadow: "0 0 15px rgba(168,85,247,0.4)" }}
              >
                Professional Success
              </span>
            </div>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "110px" }}
            transition={{ delay: 0.5 }}
            className="h-[2px] bg-gradient-to-r from-[#00f2ff] via-[#a855f7] to-transparent mt-5 opacity-60"
          />
        </div>

        {/* 🌟 3. تعديل الأزرار: زجاجية داكنة لتناسب الجو العام 🌟 */}
        <div className="z-30 flex items-center justify-end gap-4 p-12 mb-4">
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-transparent border-2 border-[#00f2ff] text-[#00f2ff] font-bold rounded-full text-sm transition-all hover:bg-[#00f2ff] hover:text-black"
          >
            Explore us ⭣
          </button>
          <Link href="/login">
            <button className="px-8 py-3 bg-gradient-to-r from-[#00f2ff] to-[#a855f7] text-white font-bold rounded-full text-sm transition-all hover:scale-105 shadow-xl">
              Start now ⭢
            </button>
          </Link>
        </div>
      </main>

      <div className="relative z-10 space-y-32 py-24 w-full bg-[#020617]/50 backdrop-blur-sm">
        <section
          id="about"
          className="px-6 md:px-20 max-w-5xl mx-auto scroll-mt-20"
        >
          <div className="bg-purple-100/10 backdrop-blur-2xl border border-purple-300/20 p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f2ff] via-[#a855f7] to-[#00f2ff]" />
            <div className="text-center mb-10">
              <h3 className="text-[#00f2ff] text-xs font-black uppercase tracking-[0.5em] mb-4">
                Who We Are
              </h3>
              <h4 className="text-4xl font-black mb-6 text-white">
                Bridging the Gap Between{" "}
                <span className="text-[#a855f7]">Education</span> &{" "}
                <span className="text-[#00f2ff]">Career</span>
              </h4>
              <p className="text-slate-200 text-lg leading-relaxed">
                SkillBridge is an AI-integrated marketplace designed
                specifically for the Jordanian ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <Target className="text-[#00f2ff] mb-4" size={32} />
                <h5 className="font-bold text-white mb-2 uppercase text-sm">
                  Our Mission
                </h5>
                <p className="text-slate-300 text-xs">
                  To accelerate career entry for Jordanian talent.
                </p>
              </div>
              <div className="flex flex-col items-center text-center border-x border-white/5 px-4">
                <Rocket className="text-[#a855f7] mb-4" size={32} />
                <h5 className="font-bold text-white mb-2 uppercase text-sm">
                  Our Vision
                </h5>
                <p className="text-slate-300 text-xs">
                  To be the primary bridge for every student.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="text-green-400 mb-4" size={32} />
                <h5 className="font-bold text-white mb-2 uppercase text-sm">
                  Our Values
                </h5>
                <p className="text-slate-300 text-xs">
                  Transparency and equal opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="px-6 md:px-20 w-full scroll-mt-20">
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-[#00f2ff] text-xs font-black uppercase tracking-[0.5em] mb-4">
              Trusted By
            </h3>
            <h4 className="text-4xl font-black text-white">
              Top Companies in <span className="text-[#a855f7]">Jordan</span>
            </h4>
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-autorelative z-10">
            {partners.map((company, i) => (
              <div
                key={i}
                className="bg-purple-100/10 backdrop-blur-xl border border-purple-300/20 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center hover:border-[#00f2ff]/50 transition-all group shadow-2xl w-[200px] h-[200px]"
              >
                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {company.logo}
                </span>
                <p className="font-black text-lg text-white mb-2">
                  {company.name}
                </p>
                <p className="text-[10px] text-purple-200 uppercase font-bold tracking-widest">
                  {company.industry}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="px-6 md:px-20 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <div className="flex flex-col justify-center">
              <h3 className="text-[#a855f7] text-xs font-black uppercase tracking-[0.5em] mb-4">
                Why SkillBridge?
              </h3>
              <h4 className="text-4xl font-black mb-8 leading-tight text-white max-w-md">
                Accelerate your career with{" "}
                <span className="bg-gradient-to-r from-[#00f2ff] via-[#facc15] to-[#a855f7] bg-clip-text text-transparent">
                  AI tools
                </span>
                .
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {keyFeatures.map((f, i) => (
                <div
                  key={i}
                  className="bg-purple-100/10 backdrop-blur-2xl border border-purple-300/20 p-8 rounded-[2.5rem] hover:bg-purple-200/20 transition-all group relative overflow-hidden shadow-2xl"
                >
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${f.color} opacity-20 blur-2xl`}
                  />
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h5 className="font-black text-white text-lg mb-2 uppercase">
                    {f.title}
                  </h5>
                  <p className="text-purple-50 text-xs leading-relaxed font-medium">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="stats"
          className="px-6 md:px-20 max-w-6xl mx-auto pb-20 scroll-mt-20"
        >
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-3xl border border-purple-300/20 p-12 rounded-[4rem] text-center shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="text-5xl font-black text-[#00f2ff] mb-2">
                  1.5K+
                </div>
                <div className="text-xs uppercase font-black tracking-widest text-slate-200">
                  Active Students
                </div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2">120+</div>
                <div className="text-xs uppercase font-black tracking-widest text-slate-200">
                  Partner Companies
                </div>
              </div>
              <div>
                <div className="text-5xl font-black text-[#a855f7] mb-2">
                  450+
                </div>
                <div className="text-xs uppercase font-black tracking-widest text-slate-200">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
