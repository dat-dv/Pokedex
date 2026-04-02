"use client";

import { motion } from "framer-motion";
import { Dna, Ruler, Weight, Sparkles, Zap } from "lucide-react";
import { StatBar } from "../stat-bar";
import { AttributeCard } from "../attribute-card";
import type { Pokemon } from "@/domains/pokemon/models/pokemon";
import { FADE_IN_RIGHT } from "@/constants/animations";

interface PokemonStatsProps {
  pokemon: Pokemon;
  colorSet: string;
}

export function PokemonStats({ pokemon, colorSet }: PokemonStatsProps) {
  return (
    <motion.div
      variants={FADE_IN_RIGHT}
      initial="initial"
      animate="animate"
      className="space-y-12"
    >
      <div>
        <h1 className="text-7xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
          {pokemon.name}
        </h1>
        <p className="text-xl text-white/50 leading-relaxed font-medium italic">
          &quot;
          {pokemon.description || "Incomplete neural record for this species."}
          &quot;
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3 text-white/20 font-black tracking-[0.3em] uppercase text-xs">
          <Dna size={16} />
          Base Signature stats
        </div>
        <div className="grid gap-4">
          {pokemon.stats?.map((stat) => (
            <StatBar
              key={stat.name}
              label={stat.name}
              value={stat.value}
              colorSet={colorSet}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <AttributeCard
          label="Height"
          value={`${pokemon.height / 10}M`}
          icon={Ruler}
        />
        <AttributeCard
          label="Weight"
          value={`${pokemon.weight / 10}KG`}
          icon={Weight}
        />
      </div>

      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-3 text-white/20 font-black tracking-[0.3em] uppercase text-xs">
          <Sparkles size={16} />
          Inherent Abilities
        </div>
        <div className="flex flex-wrap gap-4">
          {pokemon.abilities.map((ability) => (
            <div
              key={ability}
              className="px-6 py-4 glass-effect bg-white/[0.02] border border-white/10 rounded-2xl text-sm font-bold text-white capitalize flex items-center gap-3 hover:bg-white/5 transition-colors cursor-default"
            >
              <Zap size={14} className="text-yellow-500" />
              {ability.replace("-", " ")}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
