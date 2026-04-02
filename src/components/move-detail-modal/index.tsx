"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, Target, BarChart3, Clock, Quote } from "lucide-react";
import { useMoveDetail } from "@/hooks/use-move-detail";

interface MoveDetailModalProps {
  moveId: number | null;
  onClose: () => void;
}

export function MoveDetailModal({ moveId, onClose }: MoveDetailModalProps) {
  const { move, loading, error } = useMoveDetail(moveId || 0);

  if (!moveId) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg glass-effect rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Header */}
          <div className="p-8 border-b border-white/10 flex justify-between items-center bg-white/5">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-1">
                <Zap size={12} className="fill-blue-500/20" />
                Battle Maneuver
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight capitalize">
                {loading ? "Decrypting..." : move?.name.replace("-", " ")}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-full hover:bg-white/5 transition-colors text-white/20 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-8 space-y-8">
            {loading ? (
              <div className="py-20 flex justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Clock size={40} className="text-white/10" />
                </motion.div>
              </div>
            ) : error || !move ? (
              <div className="py-20 text-center text-white/40 font-bold uppercase tracking-widest">
                Failed to retrieve move data
              </div>
            ) : (
              <>
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-3xl bg-white/5 border border-white/5 text-center">
                    <Target
                      size={16}
                      className="mx-auto text-blue-400 mb-2 opacity-50"
                    />
                    <div className="text-[10px] font-black text-white/20 uppercase mb-1 tracking-widest">
                      Accuracy
                    </div>
                    <div className="text-xl font-black text-white">
                      {move.accuracy ?? "—"}%
                    </div>
                  </div>
                  <div className="p-4 rounded-3xl bg-white/5 border border-white/5 text-center">
                    <BarChart3
                      size={16}
                      className="mx-auto text-red-100 mb-2 opacity-50"
                    />
                    <div className="text-[10px] font-black text-white/20 uppercase mb-1 tracking-widest">
                      Power
                    </div>
                    <div className="text-xl font-black text-white">
                      {move.power ?? "—"}
                    </div>
                  </div>
                  <div className="p-4 rounded-3xl bg-white/5 border border-white/5 text-center">
                    <Zap
                      size={16}
                      className="mx-auto text-green-400 mb-2 opacity-50"
                    />
                    <div className="text-[10px] font-black text-white/20 uppercase mb-1 tracking-widest">
                      PP
                    </div>
                    <div className="text-xl font-black text-white">
                      {move.pp}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-black text-white/20 uppercase tracking-widest">
                    <Quote size={12} />
                    Neural Interpretation
                  </div>
                  <p className="text-lg text-white/60 leading-relaxed font-medium italic">
                    &quot;{move.description}&quot;
                  </p>
                </div>

                {/* Type Badge */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                    Signature Type
                  </div>
                  <div className="px-6 py-2 rounded-full glass-effect bg-white/5 border border-white/10 text-xs font-black uppercase text-blue-400 tracking-wider">
                    {move.type}
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
