"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function PokemonListEmpty() {
  return (
    <motion.div
      key="empty"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-40 glass-effect rounded-[3rem]"
    >
      <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6">
        <Zap size={40} className="text-white/20 animate-pulse" />
      </div>
      <h3 className="text-2xl font-black text-white/90 uppercase tracking-[0.3em] mb-3">
        Neural Static
      </h3>
      <p className="text-sm font-bold text-white/30 tracking-widest uppercase">
        No matching frequencies found in database.
      </p>
    </motion.div>
  );
}
