"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface StatBarProps {
  label: string;
  value: number;
  max?: number;
  colorSet: string;
}

export function StatBar({ label, value, max = 255, colorSet }: StatBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-[10px] uppercase font-black tracking-widest mb-1 px-1">
        <span className="text-white/40">
          {label.replace("special-", "SP. ")}
        </span>
        <span className="text-white">{value}</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className={cn("h-full rounded-full bg-gradient-to-r", colorSet)}
        />
      </div>
    </div>
  );
}
