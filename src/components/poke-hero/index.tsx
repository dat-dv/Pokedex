"use client";

import { motion } from "framer-motion";
import { Swords } from "lucide-react";
import Image from "next/image";
import { MoveItem } from "../move-item";
import { cn } from "@/utils/cn";
import type { Pokemon } from "@/domains/pokemon/models/pokemon";
import { FADE_IN_LEFT } from "@/constants/animations";

interface PokemonHeroProps {
  pokemon: Pokemon;
  typeColors: Record<string, string>;
  onMoveSelect: (id: number) => void;
}

export function PokemonHero({
  pokemon,
  typeColors,
  onMoveSelect,
}: PokemonHeroProps) {
  return (
    <motion.div
      variants={FADE_IN_LEFT}
      initial="initial"
      animate="animate"
      className="space-y-12"
    >
      <div className="relative aspect-square glass-effect rounded-[4rem] flex items-center justify-center border border-white/10 group">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-white/5 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full border border-white/5 animate-reverse-spin" />

        <div className="relative w-80 h-80 z-20">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 320px"
            priority
          />
        </div>

        <div className="absolute -top-6 -right-6 px-10 py-6 glass-effect bg-black/40 border border-white/10 rounded-[2rem]">
          <div className="text-4xl font-black italic tracking-tighter text-white">
            #{pokemon.id}
          </div>
          <div className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase mt-1">
            Species ID
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        {pokemon.types.map((type) => (
          <div
            key={type}
            className={cn(
              "px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] border shadow-2xl",
              typeColors[type] || "bg-white/5 border-white/10",
            )}
          >
            {type}
          </div>
        ))}
      </div>

      <div className="mt-16 space-y-6">
        <div className="flex items-center gap-3 text-white/20 font-black tracking-[0.3em] uppercase text-xs">
          <Swords size={16} />
          Signature Moves Archive
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {pokemon.moves?.map((move, index) => (
            <MoveItem
              key={`${move.id}-${index}`}
              id={move.id}
              name={move.name}
              onClick={onMoveSelect}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
