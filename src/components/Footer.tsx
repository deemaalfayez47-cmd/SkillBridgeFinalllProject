import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-surface-border bg-surface mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="flex items-center gap-2 mb-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SkillBridge
            </span>
          </Link>
          <p>© {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};
