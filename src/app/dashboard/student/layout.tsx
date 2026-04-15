"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Settings,
  LogOut,
  Search,
  Lightbulb,
  User,
} from "lucide-react";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard/student", icon: LayoutDashboard },
    { name: "Job Board", href: "/dashboard/student/job-board", icon: Search },
    {
      name: "Applications",
      href: "/dashboard/student/applications",
      icon: Briefcase,
    },
    {
      name: "Skill Gap",
      href: "/dashboard/student/skill-gap",
      icon: Lightbulb,
    },
    { name: "Profile", href: "/dashboard/student/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Sidebar المتدرج (أصفر وأزرق) */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col sticky top-0 h-screen z-20 shadow-sm">
        <div className="p-8">
          <Link
            href="/dashboard/student"
            className="flex items-center gap-2 group"
          >
            {/* أيقونة اللوجو بتدرج أصفر وأزرق */}
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
              <span className="font-black text-xl">S</span>
            </div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-amber-500 to-blue-600 bg-clip-text text-transparent italic">
              SkillBridge
            </h1>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 group ${
                  isActive
                    ? "bg-gradient-to-r from-amber-400 to-blue-500 text-white shadow-xl shadow-blue-100/50"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <item.icon
                  size={20}
                  className={
                    isActive
                      ? "text-white"
                      : "text-slate-400 group-hover:text-blue-500"
                  }
                />
                <span className="font-bold text-sm tracking-tight">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer: User Profile & Logout */}
        <div className="p-4 border-t border-slate-50 space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black">
              D
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black text-slate-800 truncate uppercase tracking-tighter">
                Deema Alsoufi
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase">
                Student Hub
              </p>
            </div>
          </div>
          <Link
            href="/login"
            className="flex items-center gap-3 px-5 py-3 rounded-2xl text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-all font-bold text-xs"
          >
            <LogOut size={18} /> Log Out
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
