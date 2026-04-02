"use client";

import { useDebounce } from "@/hooks/use-debounce";
import { motion } from "framer-motion";
import { Search as SearchIcon, Filter } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function Search({ value, onChange }: SearchProps) {
  const [search, setSearch] = useState(value);
  const debouncedSearch = useDebounce(search, 300);
  useEffect(() => {
    onChange(debouncedSearch);
  }, [debouncedSearch, onChange]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative max-w-3xl mx-auto group"
    >
      <div className="absolute left-7 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-blue-400 group-hover:text-blue-500 transition-all duration-300">
        <SearchIcon size={22} strokeWidth={3} />
      </div>
      <input
        type="text"
        placeholder="SEARCH POKEDEX BY NAME OR TYPE..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-full py-6 pl-18 pr-28 text-lg font-black focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:bg-white/10 transition-[background-color,border-color,box-shadow] duration-200 placeholder:text-white/10 tracking-[0.05em] text-white uppercase shadow-2xl shadow-black/50"
      />
      <div className="absolute right-7 top-1/2 -translate-y-1/2 flex items-center gap-4">
        <Filter
          size={18}
          className="text-white/30 cursor-pointer hover:text-white transition-colors"
        />
        <div className="h-4 w-px bg-white/10" />
        <kbd className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-white/20 uppercase tracking-tighter">
          ⌘ K
        </kbd>
      </div>
    </motion.div>
  );
}
