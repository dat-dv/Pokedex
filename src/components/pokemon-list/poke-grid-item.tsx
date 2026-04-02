"use client";

import { forwardRef, HTMLAttributes } from "react";

export const PokeGridItem = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] h-full"
  >
    {children}
  </div>
));

PokeGridItem.displayName = "PokeGridItem";
