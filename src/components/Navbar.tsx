"use client";

import Link from "next/link";
import { Briefcase, User, Menu, X, Sparkles, ScrollText } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass border-b border-surface-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* زدنا الارتفاع قليلاً ليعطي فخامة */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-neon-primary group-hover:scale-110 transition-transform duration-300">
               <Sparkles className="text-white" size={20} />
            </div>
            <span className="text-2xl font-[1000] tracking-tighter bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent italic">
              SkillBridge
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/tasks" className="text-xs font-black uppercase tracking-widest hover:text-primary transition-all duration-300">
              Find Work
            </Link>
            
            {/* التعديل المطلوب هنا: Me & CV */}
            <Link href="/dashboard/skills" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-accent transition-all duration-300">
              <ScrollText size={16} className="text-accent" />
              Me & CV
            </Link>

            <div className="h-6 w-px bg-white/10"></div>
            
            <Link href="/login" className="text-xs font-black uppercase tracking-widest hover:text-primary transition-all duration-300">
              Log in
            </Link>
            
            <Link href="/signup" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-primary to-accent hover:shadow-neon-primary text-white font-black uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              <User size={16} />
              Sign up
            </Link>
          </div>

          {/* زر الموبايل */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-b border-surface-border overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6 bg-slate-950/90 backdrop-blur-2xl">
              <Link href="/tasks" className="block text-sm font-black uppercase tracking-widest hover:text-primary" onClick={() => setIsOpen(false)}>
                Find Work
              </Link>
              
              {/* التعديل المطلوب في الموبايل أيضاً */}
              <Link href="/dashboard/skills" className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-accent" onClick={() => setIsOpen(false)}>
                <ScrollText size={18} />
                Me & CV
              </Link>

              <div className="h-px w-full bg-white/5"></div>
              
              <Link href="/login" className="block text-sm font-black uppercase tracking-widest hover:text-primary" onClick={() => setIsOpen(false)}>
                Log in
              </Link>
              
              <Link href="/signup" className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-black uppercase tracking-widest text-xs shadow-neon-primary" onClick={() => setIsOpen(false)}>
                <User size={18} />
                Sign up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};