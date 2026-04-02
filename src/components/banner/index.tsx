"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FADE_IN } from "@/constants/animations";

export function HomeBanner() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mb-4 gap-20">
      <motion.div
        variants={FADE_IN}
        initial="initial"
        animate="animate"
        className="text-center lg:text-left flex flex-col items-center lg:items-start flex-1"
      >
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight mb-8 leading-[0.95] max-w-4xl">
          Welcome to the{" "}
          <span className="text-blue-500/80 italic">Pokedex Project.</span>
        </h1>
        <p className="text-2xl text-white/40 max-w-2xl font-bold leading-relaxed tracking-tight">
          A minimalistic interface to browse and discover data from the PokeAPI
          dataset. Exploring over a thousand species through a clean, performant
          dashboard.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ delay: 0.2, duration: 1.2 }}
        className="relative w-[600px] h-[600px] lg:w-[850px] lg:h-[850px] select-none pointer-events-none"
      >
        <Image
          src="/pokemon-characters.png"
          alt="Pokedex Characters Illustration"
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 600px, 850px"
          priority
        />
        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      </motion.div>
    </div>
  );
}
