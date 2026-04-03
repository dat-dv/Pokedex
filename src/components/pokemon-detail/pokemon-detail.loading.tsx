"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Zap size={48} className="text-blue-500 opacity-50" />
      </motion.div>
    </div>
  );
}
