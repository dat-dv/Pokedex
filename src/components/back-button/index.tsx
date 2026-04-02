"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackNavigation() {
  const router = useRouter();

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={() => router.push("/")}
      className="group flex items-center gap-3 text-white/30 hover:text-white transition-all text-xs font-black tracking-widest mb-16"
    >
      <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/5 transition-all">
        <ArrowLeft size={16} />
      </div>
      DECRYPT ARCHIVE
    </motion.button>
  );
}
