"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, RefreshCcw, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function DetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#0a0a0a]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-effect p-16 rounded-[4rem] border-red-500/20 max-w-xl"
      >
        <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-8">
          <AlertCircle size={40} className="text-red-500 opacity-50" />
        </div>
        <h2 className="text-4xl font-black text-white uppercase mb-4 tracking-tighter italic">
          NEURAL DATA CORRUPTION
        </h2>
        <p className="text-white/40 mb-10 font-medium leading-relaxed">
          Connection to the PokeAPI mesh was interrupted or the requested record
          has been erased from the network.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-red-500/10 text-red-500 rounded-full border border-red-500/30 hover:bg-red-500 hover:text-white transition-all transition-duration-300 flex items-center justify-center gap-2 font-black text-[10px] tracking-widest uppercase"
          >
            <RefreshCcw size={14} />
            RE-SYNC DATA
          </button>
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 glass-effect bg-white/5 border border-white/10 rounded-full text-xs font-black tracking-widest text-white/50 hover:text-white transition-all flex items-center justify-center gap-2 uppercase"
          >
            <ArrowLeft size={14} />
            EXIT TO ROOT
          </button>
        </div>
      </motion.div>
    </div>
  );
}
