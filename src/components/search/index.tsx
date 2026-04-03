"use client";

import { useDebounce } from "@/hooks/use-debounce";
import { Search as SearchIcon, Filter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function Search({ value, onChange }: SearchProps) {
  const [search, setSearch] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    onChange(debouncedSearch);
  }, [debouncedSearch, onChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto group">
      <div className="absolute left-7 top-1/2 -translate-y-1/2 z-10 text-white/40 group-focus-within:text-blue-400 group-hover:text-blue-500 transition-all duration-300">
        <SearchIcon size={20} strokeWidth={2.5} />
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="SEARCH POKEDEX BY NAME OR TYPE..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full py-6 pl-20 pr-28 text-lg font-black focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:bg-white/10 transition-all duration-200 placeholder:text-white/10 tracking-[0.05em] text-white uppercase shadow-2xl shadow-black/80"
      />
      <div className="absolute right-7 top-1/2 -translate-y-1/2 flex items-center gap-4">
        <Filter
          size={18}
          className="text-white/30 cursor-pointer hover:text-white transition-colors"
        />
        <div className="h-4 w-px bg-white/10" />
        <kbd className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-white/10 border border-blue-500/20 rounded-lg text-[10px] font-black text-blue-400 uppercase tracking-tighter shadow-lg shadow-blue-500/10">
          ⌘ K
        </kbd>
      </div>
    </div>
  );
}
