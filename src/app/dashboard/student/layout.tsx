"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  LogOut,
  Search,
  Lightbulb,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard/student", icon: LayoutDashboard },
    { name: "Job Board", href: "/dashboard/student/job-board", icon: Search },
    { name: "CV Builder", href: "/dashboard/student/cv", icon: Lightbulb },
    {
      name: "Profile Settings",
      href: "/dashboard/student/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* 🚀 Sidebar: Modern, Sleek & Animated */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col sticky top-0 h-screen z-20 shadow-[10px_0_30px_rgba(0,0,0,0.02)]">
        {/* Logo Section */}
        <div className="p-8">
          <Link
            href="/dashboard/student"
            className="flex items-center gap-3 group"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-11 h-11 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-200"
            >
              <Sparkles size={22} className="text-amber-400" />
            </motion.div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black text-slate-900 tracking-tighter leading-none italic">
                SKILL<span className="text-blue-600">BRIDGE</span>
              </h1>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative block group"
              >
                <motion.div
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
                      : "text-slate-500 hover:bg-blue-50/50 hover:text-blue-600"
                  }`}
                >
                  <item.icon
                    size={18}
                    className={
                      isActive
                        ? "text-amber-400"
                        : "text-slate-400 group-hover:text-blue-500"
                    }
                  />
                  <span className="font-bold text-xs uppercase tracking-widest flex-1">
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div layoutId="activePill">
                      <ChevronRight size={14} className="text-amber-400" />
                    </motion.div>
                  )}
                </motion.div>

                {/* لمسة أنيميشن خلفية عند التمرير */}
                {!isActive && (
                  <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/50 rounded-2xl -z-10 transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Card & Logout */}
        <div className="p-4 mt-auto border-t border-slate-50 space-y-3 bg-slate-50/50">
          <motion.div
            whileHover={{ y: -2 }}
            className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-md">
              <span className="font-black text-sm">D</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-black text-slate-800 truncate uppercase tracking-tight">
                Deema Alsoufi
              </p>
              <p className="text-[8px] font-bold text-blue-500 uppercase tracking-widest">
                Pro Member
              </p>
            </div>
          </motion.div>

          <Link
            href="/login"
            className="flex items-center gap-3 px-5 py-3.5 rounded-2xl text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-all font-black text-[10px] uppercase tracking-[0.2em]"
          >
            <LogOut size={16} /> Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
