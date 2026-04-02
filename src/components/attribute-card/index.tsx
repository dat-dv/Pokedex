"use client";

import { LucideIcon } from "lucide-react";

interface AttributeCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
}

export function AttributeCard({
  label,
  value,
  icon: Icon,
}: AttributeCardProps) {
  return (
    <div className="glass-effect p-6 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-colors">
      <div className="flex items-center gap-3 text-white/20 font-black tracking-widest text-[10px] uppercase mb-4">
        <Icon size={14} />
        {label}
      </div>
      <div className="text-3xl font-black text-white">{value}</div>
    </div>
  );
}
