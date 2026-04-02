"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";
import { cn } from "@/utils/cn";
import { SCALE_IN } from "@/constants/animations";
import { TYPE_BADGE_COLORS } from "@/constants/theme";

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  types: string[];
  priority?: boolean;
}

export function PokemonCard({
  id,
  name,
  image,
  types,
  priority = false,
}: PokemonCardProps) {
  return (
    <Link href={`/pokemon?id=${id}`}>
      <motion.div
        variants={SCALE_IN}
        whileHover={{
          y: -5,
          scale: 1.01,
          transition: { duration: 0.1, ease: "easeOut" },
        }}
        className="group relative glass-effect rounded-[2.5rem] p-8 border border-white/5 hover:border-white/10 h-[505.5px] flex flex-col justify-between overflow-hidden will-change-transform bg-white/5 transition-[border-color,background-color] duration-300"
      >
        {/* Hardware-accelerated background glow mask */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 transition-opacity duration-300 pointer-events-none z-0" />

        <div className="flex justify-between items-start mb-8 relative z-10">
          <div className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase italic">
            #{id.toString().padStart(4, "0")}
          </div>
          <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/10 group-hover:text-blue-500 group-hover:border-blue-500/20 transition-[color,border-color] duration-300">
            <Zap
              size={14}
              className="group-hover:fill-current transition-colors"
            />
          </div>
        </div>

        <div className="relative aspect-square w-full mb-10 flex items-center justify-center z-10">
          {/* Optimized Glow: Uses opacity instead of filter transition */}
          <div className="absolute inset-0 bg-white/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-300 ease-out will-change-transform">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                priority={priority}
                className="object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.4)]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/5">
                <Zap size={48} />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          <h3 className="text-3xl font-black text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors duration-200">
            {name}
          </h3>

          <div className="flex flex-wrap gap-2 pt-2">
            {types.map((type) => (
              <span
                key={type}
                className={cn(
                  "px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border transition-[background-color,color,border-color,box-shadow] duration-200",
                  TYPE_BADGE_COLORS[type] || TYPE_BADGE_COLORS.normal,
                )}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
