"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Search, Briefcase, Settings, LogOut, Building2 } from "lucide-react";

const navItems = [
  { title: "Student Dashboard", url: "/dashboard/student", icon: LayoutDashboard },
  { title: "My Skills & AI CV Upload", url: "/cv-optimizer", icon: FileText },
  { title: "Job Board", url: "/job-board", icon: Search },
  { title: "Applications", url: "/applications", icon: Briefcase },
  { title: "Skill Gap Guidance", url: "/skill-gap", icon: Settings },
];

export default function SkillBridgeLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#f8fafc]">
      {/* Blobs Background */}
      <div className="sb-blob sb-blob-1 fixed" />
      <div className="sb-blob sb-blob-2 fixed" />
      
      <div className="flex relative z-10">
        
        {/* Sidebar - تم إلغاء الـ Margin الجانبي ليلتصق بالحافة */}
        <aside className="w-72 h-screen sticky top-0 flex flex-col p-4 hidden md:flex"> 
          <div className="sb-glass flex flex-col h-full p-6" style={{ borderRadius: 32 }}>
            <h1 className="font-syne text-2xl font-extrabold sb-gradient-text mb-10">SkillBridge</h1>
            
            <nav className="space-y-2 flex-1">
              {navItems.map((item) => {
                const active = pathname === item.url;
                return (
                  <Link
                    key={item.url}
                    href={item.url}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                      active
                        ? "sb-btn-gradient shadow-lg scale-105"
                        : "text-slate-500 hover:bg-white/50 hover:text-slate-800"
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${active ? "text-white" : "text-slate-400"}`} />
                    <span className="font-semibold text-sm">{item.title}</span>
                  </Link>
                );
              })}

              <div className="mt-6 pt-6 border-t border-slate-200/50">
                <Link
                  href="/dashboard/company"
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-white/50 transition-all"
                >
                  <Building2 className="w-4 h-4" />
                  <span className="font-medium text-xs">Switch to Company Portal</span>
                </Link>
              </div>
            </nav>

            {/* User Profile / Logout Section */}
            <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-200/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full sb-btn-gradient flex items-center justify-center font-bold text-white shadow-md">
                  D
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800">Deema Alsoufi</span>
                  <span className="text-[10px] text-slate-400">Student Plan</span>
                </div>
              </div>
              <button className="text-slate-400 hover:text-red-500 transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area - تم إلغاء الـ ml-64 واستبداله بـ flex-1 لملء الفراغ تلقائياً */}
        <main className="flex-1 p-8 min-h-screen">
          <div className="max-w-6xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}