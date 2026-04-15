import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface QuickEditModalProps {
  open: boolean;
  onClose: () => void;
  profile: { name: string; university: string; major: string; skills: string[] };
  onSave: (profile: { name: string; university: string; major: string; skills: string[] }) => void;
}

export default function QuickEditModal({ open, onClose, profile, onSave }: QuickEditModalProps) {
  const [form, setForm] = useState(profile);

  const handleSave = () => {
    onSave(form);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="sb-glass relative z-10 w-full max-w-md p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-syne font-extrabold text-xl mb-6 sb-gradient-text">Quick Edit</h3>
            <div className="space-y-4">
              {(["name", "university", "major"] as const).map((field) => (
                <div key={field}>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1 block">
                    {field}
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 font-dm-sans text-sm"
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  />
                </div>
              ))}
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1 block">
                  Skills (comma separated)
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 font-dm-sans text-sm"
                  value={form.skills.join(", ")}
                  onChange={(e) => setForm({ ...form, skills: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })}
                />
              </div>
            </div>
            <button onClick={handleSave} className="sb-btn-gradient w-full mt-6 text-sm">
              Save Changes
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
