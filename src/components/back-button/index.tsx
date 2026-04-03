"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackNavigation({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-[100] py-8 backdrop-blur-xl border-b border-white/5 -mx-6 px-6 mb-16">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.push("/")}
        className="group flex items-center gap-3 text-white/30 hover:text-white transition-all text-xs font-black tracking-widest"
      >
        <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/5 transition-all">
          <ArrowLeft size={16} />
        </div>
        DECRYPT ARCHIVE
      </motion.button>
    </div>
  );
}
