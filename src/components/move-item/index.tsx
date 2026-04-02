"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface MoveItemProps {
  id: number;
  name: string;
  onClick: (id: number) => void;
}

export function MoveItem({ id, name, onClick }: MoveItemProps) {
  return (
    <motion.button
      whileHover={{ x: 5 }}
      onClick={() => onClick(id)}
      className="flex items-center justify-between p-4 glass-effect bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/10 transition-all text-left"
    >
      <span className="text-sm font-bold text-white/80 capitalize">
        {name.replace("-", " ")}
      </span>
      <ChevronRight size={14} className="text-white/20" />
    </motion.button>
  );
}
